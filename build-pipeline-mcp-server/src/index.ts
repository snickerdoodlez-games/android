#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from "@modelcontextprotocol/sdk/types.js";
import {
  readFileSync,
  writeFileSync,
  existsSync,
  readdirSync,
  statSync,
} from "fs";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

// ============================================================
// Configuration
// ============================================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = resolve(join(__dirname, "..", ".."));
const DIST_DIR = join(PROJECT_ROOT, "dist");
const ANDROID_DIR = join(PROJECT_ROOT, "android");
const SERVICES_DIR = join(PROJECT_ROOT, "services");
const COMPONENTS_DIR = join(PROJECT_ROOT, "components");

// Known AdMob IDs used in the project
const DEFAULT_ADMOB_APP_ID = "ca-app-pub-3940256099942544~3347511713"; // Test ID

// ============================================================
// Utility Functions
// ============================================================

/**
 * Safely read a JSON file and parse it, returning null on failure.
 */
function readJSONFile(filePath: string): Record<string, unknown> | null {
  try {
    if (!existsSync(filePath)) return null;
    const content = readFileSync(filePath, "utf-8");
    return JSON.parse(content);
  } catch {
    return null;
  }
}

/**
 * Read a text file, returning empty string on failure.
 */
function readTextFile(filePath: string): string {
  try {
    if (!existsSync(filePath)) return "";
    return readFileSync(filePath, "utf-8");
  } catch {
    return "";
  }
}

/**
 * Safely run a shell command and return its output.
 */
function runCommand(command: string, cwd: string = PROJECT_ROOT): { stdout: string; stderr: string; exitCode: number } {
  try {
    const stdout = execSync(command, {
      cwd,
      encoding: "utf-8",
      timeout: 120_000, // 2 minute timeout
      stdio: ["pipe", "pipe", "pipe"],
    });
    return { stdout: stdout.trim(), stderr: "", exitCode: 0 };
  } catch (error: unknown) {
    if (error instanceof Error && "stderr" in error) {
      const execError = error as unknown as { stderr: string; stdout: string; status?: number };
      return {
        stdout: execError.stdout || "",
        stderr: execError.stderr || error.message,
        exitCode: execError.status ?? 1,
      };
    }
    return { stdout: "", stderr: String(error), exitCode: 1 };
  }
}

/**
 * Get the current version from capacitor.config.json.
 */
function getCurrentVersion(): string {
  const capConfig = readJSONFile(join(PROJECT_ROOT, "capacitor.config.json"));
  if (capConfig && capConfig.appVersion) return String(capConfig.appVersion);
  // Fallback: read from package.json
  const pkg = readJSONFile(join(PROJECT_ROOT, "package.json"));
  if (pkg && pkg.version) return String(pkg.version);
  return "0.0.0";
}

/**
 * Get version from Android build.gradle
 */
function getAndroidVersion(): { versionCode: number; versionName: string } | null {
  const buildGradle = readTextFile(join(ANDROID_DIR, "app", "build.gradle"));
  const codeMatch = buildGradle.match(/versionCode\s+(\d+)/);
  const nameMatch = buildGradle.match(/versionName\s+"([^"]+)"/);
  if (codeMatch || nameMatch) {
    return {
      versionCode: codeMatch ? parseInt(codeMatch[1], 10) : 0,
      versionName: nameMatch ? nameMatch[1] : "unknown",
    };
  }
  return null;
}

/**
 * Search for AdMob IDs across the project source files.
 */
function findAdMobIds(): { production: string[]; test: string[]; other: string[] } {
  const results = { production: [] as string[], test: [] as string[], other: [] as string[] };
  const searchDirs = [PROJECT_ROOT, ANDROID_DIR];

  for (const dir of searchDirs) {
    if (!existsSync(dir)) continue;
    const files = readdirSync(dir, { recursive: true }) as string[];
    for (const file of files) {
      if (!/\.(ts|tsx|js|jsx|json|xml|gradle|kt|java)$/i.test(file)) continue;
      const filePath = join(dir, file);
      try {
        if (statSync(filePath).size > 500_000) continue; // skip large files
        const content = readTextFile(filePath);
        const matches = content.match(/ca-app-pub-\d+~\d+|ca-app-pub-\d+\/\d+/g);
        if (matches) {
          for (const id of matches) {
            if (id.includes("3940256099942544")) {
              results.test.push(`${id} (in ${file})`);
            } else {
              results.production.push(`${id} (in ${file})`);
            }
          }
        }
      } catch {
        // skip files that can't be read
      }
    }
  }
  return results;
}

/**
 * Validate that the dist/ directory has the expected files for a Capacitor build.
 */
function validateDistDirectory(): { valid: boolean; files: string[]; missing: string[]; warnings: string[] } {
  const requiredFiles = ["index.html", "index.js", "assets"];
  const found: string[] = [];
  const missing: string[] = [];
  const warnings: string[] = [];

  if (!existsSync(DIST_DIR)) {
    return { valid: false, files: [], missing: requiredFiles, warnings: ["dist/ directory does not exist"] };
  }

  const distContents = readdirSync(DIST_DIR);

  // Check for essential files
  if (distContents.includes("index.html")) found.push("index.html");
  else missing.push("index.html");

  if (distContents.includes("assets")) found.push("assets/");
  else warnings.push("assets/ directory not found - may be embedded in JS bundle");

  // Check JS bundle
  const jsFiles = distContents.filter((f) => f.endsWith(".js"));
  if (jsFiles.length > 0) {
    found.push(`${jsFiles.length} JS file(s)`);
  } else {
    missing.push("JS bundle");
  }

  // Check for CSS
  const cssFiles = distContents.filter((f) => f.endsWith(".css"));
  if (cssFiles.length > 0) found.push(`${cssFiles.length} CSS file(s)`);

  // Check for Vite manifest
  if (distContents.includes(".vite")) found.push(".vite/ manifest");

  // Summary
  return {
    valid: missing.length === 0,
    files: found,
    missing,
    warnings,
  };
}

// ============================================================
// Tool Definitions
// ============================================================

const BUMP_VERSION_TOOL: Tool = {
  name: "bump_version",
  description: "Bump the app version in capacitor.config.json, package.json, and android/app/build.gradle. Supports major, minor, patch, or a specific version string.",
  inputSchema: {
    type: "object",
    properties: {
      type: {
        type: "string",
        description: "Version bump type: 'major', 'minor', 'patch', or an explicit version string (e.g., '1.2.3')",
        enum: ["major", "minor", "patch"],
      },
      version: {
        type: "string",
        description: "Explicit version string to set (e.g., '1.2.3'). Overrides 'type' if provided.",
      },
    },
    required: [],
  },
};

const VALIDATE_BUILD_TOOL: Tool = {
  name: "validate_build",
  description: "Run 'npm run build' and validate that the build output is correct. Checks for build errors and verifies dist/ contents.",
  inputSchema: {
    type: "object",
    properties: {},
    required: [],
  },
};

const VALIDATE_CAPACITOR_CONFIG_TOOL: Tool = {
  name: "validate_capacitor_config",
  description: "Validate the Capacitor configuration for Android deployment. Checks appId, appName, webDir, and Android project structure.",
  inputSchema: {
    type: "object",
    properties: {},
    required: [],
  },
};

const CHECK_ADMOB_IDS_TOOL: Tool = {
  name: "check_admob_ids",
  description: "Scan the project for AdMob ad unit IDs and app IDs. Reports whether test or production IDs are in use, and flags any inconsistencies across iOS/Android configs.",
  inputSchema: {
    type: "object",
    properties: {
      checkOnly: {
        type: "string",
        description: "Optional filter: 'test' to only check for test IDs, 'production' to only check for production IDs",
        enum: ["test", "production"],
      },
    },
    required: [],
  },
};

const GENERATE_CHANGELOG_TOOL: Tool = {
  name: "generate_changelog",
  description: "Generate a changelog from git history for the current project. Shows commits grouped by type (feat, fix, etc.) since the last tag, or for a specified number of commits.",
  inputSchema: {
    type: "object",
    properties: {
      since: {
        type: "string",
        description: "Git ref to generate changelog since (e.g., 'HEAD~10', 'v1.0.0', or a commit hash). Defaults to last tag or HEAD~20.",
      },
      maxCommits: {
        type: "number",
        description: "Maximum number of commits to include in the changelog (default: 50)",
        default: 50,
      },
    },
    required: [],
  },
};

const VERIFY_DIST_TOOL: Tool = {
  name: "verify_dist",
  description: "Verify that the dist/ build output directory has all required files for deployment: index.html, JS bundle, and assets.",
  inputSchema: {
    type: "object",
    properties: {},
    required: [],
  },
};

const FULL_BUILD_AUDIT_TOOL: Tool = {
  name: "full_build_audit",
  description: "Run a complete build and release audit: check versions, validate configs, verify dist, check AdMob IDs, and summarize project health.",
  inputSchema: {
    type: "object",
    properties: {
      includeBuild: {
        type: "boolean",
        description: "Whether to run 'npm run build' as part of the audit (default: false)",
        default: false,
      },
    },
    required: [],
  },
};

const DIAGNOSE_THEME_DATA_TOOL: Tool = {
  name: "diagnose_theme_data",
  description: "Diagnose why themed levels may not be pulling data from the themed CSV files. Checks theme file parsing, map registration, difficulty filtering, and level content logic.",
  inputSchema: {
    type: "object",
    properties: {
      levelIndex: {
        type: "number",
        description: "Specific level index to diagnose (e.g., 6 for the first THEMED level). Default: checks all theme-related issues.",
      },
      totalStars: {
        type: "number",
        description: "Simulate a specific star count for difficulty gating diagnostics (default: 0).",
        default: 0,
      },
    },
    required: [],
  },
};

// ============================================================
// Tool Implementations
// ============================================================

async function handleBumpVersion(args: Record<string, unknown>): Promise<string> {
  const bumpType = args.type as string | undefined;
  const explicitVersion = args.version as string | undefined;

  const capConfigPath = join(PROJECT_ROOT, "capacitor.config.json");
  const pkgPath = join(PROJECT_ROOT, "package.json");
  const buildGradlePath = join(ANDROID_DIR, "app", "build.gradle");

  // Read current versions
  const capConfig = readJSONFile(capConfigPath);
  const pkg = readJSONFile(pkgPath);
  const currentVersion = getCurrentVersion();

  let newVersion: string;

  if (explicitVersion) {
    // Validate explicit version format
    if (!/^\d+\.\d+\.\d+$/.test(explicitVersion)) {
      return `❌ Invalid version format: "${explicitVersion}". Expected format: "major.minor.patch" (e.g., "1.2.3")`;
    }
    newVersion = explicitVersion;
  } else if (bumpType) {
    const parts = currentVersion.split(".").map(Number);
    if (parts.length !== 3 || parts.some(isNaN)) {
      return `❌ Current version "${currentVersion}" is not in semver format (major.minor.patch)`;
    }
    switch (bumpType) {
      case "major":
        newVersion = `${parts[0] + 1}.0.0`;
        break;
      case "minor":
        newVersion = `${parts[0]}.${parts[1] + 1}.0`;
        break;
      case "patch":
        newVersion = `${parts[0]}.${parts[1]}.${parts[2] + 1}`;
        break;
      default:
        return `❌ Unknown bump type: "${bumpType}". Use major, minor, or patch.`;
    }
  } else {
    return `ℹ️ Current version is ${currentVersion}. Use type="major|minor|patch" or version="x.y.z" to bump.`;
  }

  const versionCode = newVersion.replace(/\./g, "");
  const results: string[] = [];

  // Update capacitor.config.json
  if (capConfig) {
    capConfig.appVersion = newVersion;
    try {
      writeFileSync(capConfigPath, JSON.stringify(capConfig, null, 2) + "\n");
      results.push(`✅ capacitor.config.json: appVersion → ${newVersion}`);
    } catch (e) {
      results.push(`❌ Failed to write capacitor.config.json: ${e}`);
    }
  } else {
    results.push("⚠️ capacitor.config.json not found or invalid");
  }

  // Update package.json
  if (pkg) {
    pkg.version = newVersion;
    try {
      writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
      results.push(`✅ package.json: version → ${newVersion}`);
    } catch (e) {
      results.push(`❌ Failed to write package.json: ${e}`);
    }
  } else {
    results.push("⚠️ package.json not found or invalid");
  }

  // Update android/app/build.gradle
  if (existsSync(buildGradlePath)) {
    try {
      let gradleContent = readFileSync(buildGradlePath, "utf-8");
      const codeChanged = gradleContent.replace(
        /versionCode\s+\d+/,
        `versionCode ${parseInt(versionCode, 10)}`
      );
      const nameChanged = codeChanged.replace(
        /versionName\s+"[^"]+"/,
        `versionName "${versionCode}"`
      );
      if (nameChanged !== gradleContent) {
        writeFileSync(buildGradlePath, nameChanged);
        results.push(`✅ android/app/build.gradle: versionCode → ${versionCode}, versionName → "${versionCode}"`);
      } else {
        results.push("⚠️ Could not update android/app/build.gradle (pattern not matched)");
      }
    } catch (e) {
      results.push(`❌ Failed to write android/app/build.gradle: ${e}`);
    }
  } else {
    results.push("⚠️ android/app/build.gradle not found");
  }

  return results.join("\n");
}

async function handleValidateBuild(): Promise<string> {
  const results: string[] = [];

  results.push("## Build Validation\n");

  // Run npm run build
  results.push("### Step 1: Running npm run build...");
  const buildResult = runCommand("npm run build", PROJECT_ROOT);

  if (buildResult.exitCode !== 0) {
    results.push("❌ Build failed!");
    results.push("```");
    results.push(buildResult.stderr || buildResult.stdout || "Unknown error");
    results.push("```");
    return results.join("\n");
  }
  results.push("✅ Build completed successfully\n");

  // Verify dist/
  results.push("### Step 2: Verifying dist/ output...");
  const distCheck = validateDistDirectory();
  if (distCheck.valid) {
    results.push("✅ dist/ directory looks good!");
  } else {
    results.push("❌ dist/ directory has issues:");
  }
  if (distCheck.files.length > 0) {
    results.push(`   Found: ${distCheck.files.join(", ")}`);
  }
  if (distCheck.missing.length > 0) {
    results.push(`   ❌ Missing: ${distCheck.missing.join(", ")}`);
  }
  if (distCheck.warnings.length > 0) {
    for (const w of distCheck.warnings) {
      results.push(`   ⚠️  ${w}`);
    }
  }

  // Check dist size
  try {
    const distSize = getDirSize(DIST_DIR);
    const sizeMB = (distSize / (1024 * 1024)).toFixed(2);
    results.push(`\n📦 dist/ total size: ${sizeMB} MB`);
  } catch {
    results.push("\n⚠️  Could not calculate dist/ size");
  }

  return results.join("\n");
}

function getDirSize(dirPath: string): number {
  let totalSize = 0;
  try {
    const entries = readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dirPath, entry.name);
      if (entry.isDirectory()) {
        totalSize += getDirSize(fullPath);
      } else if (entry.isFile()) {
        totalSize += statSync(fullPath).size;
      }
    }
  } catch {
    // ignore
  }
  return totalSize;
}

async function handleValidateCapacitorConfig(): Promise<string> {
  const results: string[] = [];

  results.push("## Capacitor Configuration Validation\n");

  // Check capacitor.config.json
  const capConfigPath = join(PROJECT_ROOT, "capacitor.config.json");
  const capConfig = readJSONFile(capConfigPath);

  if (!capConfig) {
    results.push("❌ capacitor.config.json not found or invalid");
    return results.join("\n");
  }

  results.push("### capacitor.config.json");
  const checks = [
    { key: "appId", label: "App ID", required: true },
    { key: "appName", label: "App Name", required: true },
    { key: "webDir", label: "Web Directory", required: true },
  ];

  for (const check of checks) {
    const value = capConfig[check.key];
    if (value && String(value).trim()) {
      results.push(`   ✅ ${check.label}: ${value}`);
    } else if (check.required) {
      results.push(`   ❌ ${check.label}: MISSING`);
    } else {
      results.push(`   ⚠️  ${check.label}: not set`);
    }
  }

  // Check Android project
  results.push("\n### Android Project");
  if (existsSync(ANDROID_DIR)) {
    results.push("   ✅ android/ directory exists");
    const buildGradlePath = join(ANDROID_DIR, "app", "build.gradle");
    if (existsSync(buildGradlePath)) {
      results.push("   ✅ android/app/build.gradle exists");

      // Validate appId consistency
      const gradleContent = readTextFile(buildGradlePath);
      const nsMatch = gradleContent.match(/namespace\s+"([^"]+)"/);
      const appIdMatch = gradleContent.match(/applicationId\s+"([^"]+)"/);
      const configAppId = capConfig.appId as string;

      if (nsMatch && appIdMatch) {
        if (nsMatch[1] === appIdMatch[1]) {
          results.push(`   ✅ Namespace & applicationId match: "${nsMatch[1]}"`);
        } else {
          results.push(`   ⚠️  Namespace "${nsMatch[1]}" != applicationId "${appIdMatch[1]}"`);
        }
        if (configAppId && appIdMatch[1] !== configAppId) {
          results.push(`   ⚠️  Android applicationId "${appIdMatch[1]}" != capacitor appId "${configAppId}"`);
        }
      }

      // Check android version
      const androidVersion = getAndroidVersion();
      if (androidVersion) {
        const capVersion = getCurrentVersion();
        results.push(`   📱 Android versionName: "${androidVersion.versionName}", versionCode: ${androidVersion.versionCode}`);
        if (capVersion && androidVersion.versionName !== capVersion) {
          results.push(`   ⚠️  Android version "${androidVersion.versionName}" != project version "${capVersion}"`);
        }
      }
    } else {
      results.push("   ❌ android/app/build.gradle not found");
    }

    // Check Capacitor plugins
    const capPluginPath = join(ANDROID_DIR, "capacitor-cordova-android-plugins");
    if (existsSync(capPluginPath)) {
      results.push("   ✅ Capacitor plugins directory exists");
    }

    // Check if Gradle wrapper exists
    if (existsSync(join(ANDROID_DIR, "gradlew"))) {
      results.push("   ✅ Gradle wrapper (gradlew) exists");
    }
  } else {
    results.push("   ❌ android/ directory not found");
  }

  // Check index.html
  results.push("\n### Entry Point");
  const indexPath = join(PROJECT_ROOT, "index.html");
  if (existsSync(indexPath)) {
    results.push("   ✅ index.html exists");
    const html = readTextFile(indexPath);
    if (html.includes("tailwindcss")) results.push("   🎨 Tailwind CSS CDN linked");
    if (html.includes("Oswald")) results.push("   🔤 Oswald font loaded");
  } else {
    results.push("   ❌ index.html not found");
  }

  return results.join("\n");
}

async function handleCheckAdMobIds(args: Record<string, unknown>): Promise<string> {
  const filter = args.checkOnly as string | undefined;
  const results: string[] = [];

  results.push("## AdMob ID Scan\n");

  const found = findAdMobIds();

  // Test IDs
  if (!filter || filter === "test") {
    results.push("### Test IDs");
    if (found.test.length > 0) {
      for (const id of found.test) {
        results.push(`   🧪 ${id}`);
      }
    } else {
      results.push("   ✅ No test AdMob IDs found (may still be configured via environment)");
    }
  }

  // Production IDs
  if (!filter || filter === "production") {
    results.push("\n### Production IDs");
    if (found.production.length > 0) {
      for (const id of found.production) {
        results.push(`   🔴 ${id}`);
      }
    } else {
      results.push("   ℹ️  No production AdMob IDs found");
    }
  }

  // Check App.tsx for AdMob initialization
  results.push("\n### AdMob Initialization");
  const appTsx = readTextFile(join(PROJECT_ROOT, "App.tsx"));
  const initMatch = appTsx.match(/AdMob\.initialize\(/);
  if (initMatch) {
    results.push("   ✅ AdMob.initialize() found in App.tsx");
  } else {
    results.push("   ⚠️  AdMob.initialize() not found in App.tsx");
  }

  // Check for banner/interstitial references
  const bannerMatch = appTsx.match(/AdMob\.showBanner|AdMob\.resumeBanner|showBanner/i);
  const interstitialMatch = appTsx.match(/AdMob\.prepareInterstitial|showInterstitial|interstitial/i);
  if (bannerMatch) results.push("   📢 Banner ad integration found");
  if (interstitialMatch) results.push("   📺 Interstitial ad integration found");

  // Check Android manifest for AdMob app ID
  const manifestPath = join(ANDROID_DIR, "app", "src", "main", "AndroidManifest.xml");
  if (existsSync(manifestPath)) {
    const manifest = readTextFile(manifestPath);
    const appIdMatch = manifest.match(/com\.google\.android\.gms\.ads\.APPLICATION_ID/);
    if (appIdMatch) {
      results.push("   ✅ AdMob app ID declared in AndroidManifest.xml");
    }
  }

  return results.join("\n");
}

async function handleGenerateChangelog(args: Record<string, unknown>): Promise<string> {
  const since = args.since as string | undefined;
  const maxCommits = (args.maxCommits as number) || 50;

  const results: string[] = [];
  results.push("## Changelog\n");

  // Try to find the last tag
  let sinceRef = since;
  if (!sinceRef) {
    const tagResult = runCommand("git describe --tags --abbrev=0 2>nul || echo NO_TAG", PROJECT_ROOT);
    sinceRef = tagResult.stdout.trim() !== "NO_TAG" ? tagResult.stdout.trim() : "HEAD~20";
  }

  const logCmd = `git log ${sinceRef}..HEAD --oneline --no-decorate --format="%h|%s|%an|%ai" 2>nul`;
  const logResult = runCommand(logCmd, PROJECT_ROOT);

  if (logResult.exitCode !== 0 || !logResult.stdout.trim()) {
    // Try without the since range
    const fallbackCmd = `git log --oneline --no-decorate --format="%h|%s|%an|%ai" -${maxCommits} 2>nul`;
    const fallbackResult = runCommand(fallbackCmd, PROJECT_ROOT);
    if (fallbackResult.exitCode !== 0 || !fallbackResult.stdout.trim()) {
      results.push("⚠️  Could not retrieve git history. Is this a git repository?");
      results.push("\n```");
      results.push(fallbackResult.stderr || "No commits found");
      results.push("```");
      return results.join("\n");
    }
    logResult.stdout = fallbackResult.stdout;
  }

  const commits = logResult.stdout.split("\n").filter(Boolean).slice(0, maxCommits);
  if (commits.length === 0) {
    results.push("No new commits since " + sinceRef);
    return results.join("\n");
  }

  // Parse commits and group by type
  const groups: Record<string, { hash: string; message: string; author: string; date: string }[]> = {
    feat: [],
    fix: [],
    docs: [],
    refactor: [],
    style: [],
    chore: [],
    test: [],
    perf: [],
    other: [],
  };

  for (const commit of commits) {
    const parts = commit.split("|");
    if (parts.length < 2) continue;
    const hash = parts[0];
    const message = parts[1];
    const author = parts[2] || "unknown";
    const date = parts[3] || "";

    let type = "other";
    const typeMatch = message.match(/^(feat|fix|docs|refactor|style|chore|test|perf)(\(.+?\))?:/);
    if (typeMatch) {
      type = typeMatch[1];
    }

    if (groups[type]) {
      groups[type].push({ hash, message, author, date });
    } else {
      groups.other.push({ hash, message, author, date });
    }
  }

  // Output grouped changelog
  const typeLabels: Record<string, string> = {
    feat: "🚀 Features",
    fix: "🐛 Bug Fixes",
    docs: "📚 Documentation",
    refactor: "♻️ Refactoring",
    style: "💄 Style",
    chore: "🔧 Chores",
    test: "🧪 Tests",
    perf: "⚡ Performance",
    other: "🔹 Other",
  };

  results.push(`Since: ${sinceRef}`);
  results.push(`Total commits: ${commits.length}\n`);

  for (const [type, items] of Object.entries(groups)) {
    if (items.length === 0) continue;
    results.push(`### ${typeLabels[type] || type}`);
    for (const item of items) {
      const dateStr = item.date ? ` (${item.date.split("T")[0]})` : "";
      results.push(`- ${item.message} [${item.hash}]${dateStr}`);
    }
    results.push("");
  }

  results.push("---");
  results.push(`Generated at: ${new Date().toISOString()}`);

  return results.join("\n");
}

async function handleVerifyDist(): Promise<string> {
  const results: string[] = [];
  results.push("## Dist Directory Verification\n");

  if (!existsSync(DIST_DIR)) {
    results.push("❌ dist/ directory does not exist!");
    results.push("   Run 'npm run build' to create it.");
    return results.join("\n");
  }

  const distCheck = validateDistDirectory();

  results.push(`📁 dist/ path: ${DIST_DIR}`);

  // File listing
  const distFiles = readdirSync(DIST_DIR, { recursive: true }) as string[];
  results.push(`\n### Files (${distFiles.length} total)\n`);

  // Group by extension
  const byExt: Record<string, string[]> = {};
  for (const f of distFiles) {
    const ext = f.includes(".") ? f.split(".").pop() || "other" : "other";
    if (!byExt[ext]) byExt[ext] = [];
    byExt[ext].push(f);
  }

  for (const [ext, files] of Object.entries(byExt).sort()) {
    results.push(`** .${ext} (${files.length})`);
    if (files.length <= 10) {
      for (const f of files) results.push(`   - ${f}`);
    } else {
      for (const f of files.slice(0, 5)) results.push(`   - ${f}`);
      results.push(`   ... and ${files.length - 5} more`);
    }
  }

  // Size info
  const totalSize = getDirSize(DIST_DIR);
  results.push(`\n### Size`);
  results.push(`   Total: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);

  // Check for large files
  const largeFiles = distFiles
    .map((f) => ({ path: f, size: statSync(join(DIST_DIR, f)).size }))
    .filter((f) => f.size > 500_000)
    .sort((a, b) => b.size - a.size);
  if (largeFiles.length > 0) {
    results.push(`\n### Large Files (>500 KB)`);
    for (const f of largeFiles) {
      results.push(`   - ${f.path} (${(f.size / 1024).toFixed(1)} KB)`);
    }
  }

  // Validation summary
  results.push("\n### Required Files Check");
  if (distCheck.valid) {
    results.push("✅ All required files present");
  } else {
    results.push("❌ Missing required files:");
    for (const m of distCheck.missing) results.push(`   - ${m}`);
  }
  if (distCheck.warnings.length > 0) {
    for (const w of distCheck.warnings) results.push(`   ⚠️  ${w}`);
  }
  if (distCheck.files.length > 0) {
    results.push(`   Found: ${distCheck.files.join(", ")}`);
  }

  return results.join("\n");
}

async function handleFullBuildAudit(args: Record<string, unknown>): Promise<string> {
  const includeBuild = args.includeBuild as boolean ?? false;
  const sections: string[] = [];

  sections.push("# 🏗️ Full Build & Release Audit\n");
  sections.push(`**Date**: ${new Date().toISOString()}\n`);

  // 1. Version Info
  sections.push("## 1. Version Information\n");
  const capVersion = getCurrentVersion();
  sections.push(`- Project version: ${capVersion}`);
  const androidVer = getAndroidVersion();
  if (androidVer) {
    sections.push(`- Android: versionName="${androidVer.versionName}", versionCode=${androidVer.versionCode}`);
  }
  const pkg = readJSONFile(join(PROJECT_ROOT, "package.json"));
  if (pkg && pkg.version) {
    sections.push(`- package.json version: ${pkg.version}`);
  }
  sections.push("");

  // 2. Capacitor Config
  sections.push("## 2. Capacitor Configuration\n");
  const capResult = await handleValidateCapacitorConfig();
  sections.push(capResult + "\n");

  // 3. AdMob IDs
  sections.push("## 3. AdMob IDs\n");
  const admobResult = await handleCheckAdMobIds({});
  sections.push(admobResult + "\n");

  // 4. Build (optional)
  if (includeBuild) {
    sections.push("## 4. Build\n");
    const buildResult = await handleValidateBuild();
    sections.push(buildResult + "\n");
  } else {
    // Check if dist exists
    sections.push("## 4. Build Output\n");
    if (existsSync(DIST_DIR)) {
      const distCheck = validateDistDirectory();
      sections.push(`dist/ exists: ✅`);
      sections.push(`Required files: ${distCheck.valid ? "✅ All present" : "❌ Some missing"}`);
      const distSize = getDirSize(DIST_DIR);
      sections.push(`Size: ${(distSize / 1024 / 1024).toFixed(2)} MB`);
      if (distCheck.missing.length > 0) {
        sections.push(`Missing: ${distCheck.missing.join(", ")}`);
      }
    } else {
      sections.push("dist/ does not exist. Run 'npm run build' or use includeBuild=true.");
    }
    sections.push("");
  }

  // 5. Data Health Check
  sections.push("## 5. Data Health\n");
  const csvPoolFiles = readdirSync(SERVICES_DIR).filter((f) => f.startsWith("csvPoolData") && f.endsWith(".ts"));
  const csvThemeFiles = readdirSync(SERVICES_DIR).filter((f) => f.startsWith("csvThemeData") && f.endsWith(".ts"));
  const csvSynonymFiles = readdirSync(SERVICES_DIR).filter((f) => f.startsWith("CSV_SYNONYMS_") && f.endsWith(".ts"));
  sections.push(`- Pool data files: ${csvPoolFiles.length}`);
  sections.push(`- Theme data files: ${csvThemeFiles.length}`);
  sections.push(`- Synonym data files: ${csvSynonymFiles.length}`);

  // Count rows in pool data files (rough estimate)
  let poolRowCount = 0;
  for (const f of csvPoolFiles) {
    const content = readTextFile(join(SERVICES_DIR, f));
    const lines = content.split("\n").filter((l) => l.trim() && !l.trim().startsWith("//") && !l.trim().startsWith("/*") && !l.trim().startsWith("export"));
    poolRowCount += lines.length;
  }
  sections.push(`- Estimated pool categories: ~${poolRowCount}`);

  // Check theme data map
  let themeCount = 0;
  for (const f of csvThemeFiles) {
    const content = readTextFile(join(SERVICES_DIR, f));
    const lines = content.split("\n").filter((l) => l.trim() && !l.trim().startsWith("//") && !l.trim().startsWith("/*") && !l.trim().startsWith("export") && !l.startsWith("ID,"));
    themeCount += lines.length;
  }
  sections.push(`- Estimated theme categories: ~${themeCount}`);

  // Level sequence
  const typesContent = readTextFile(join(PROJECT_ROOT, "types.ts"));
  const seqMatch = typesContent.match(/DETERMINISTIC_LEVEL_SEQUENCE\s*:\s*GameMode\[\]\s*=\s*\[([\s\S]*?)\]/);
  if (seqMatch) {
    const modeCodes = seqMatch[1].split(",").map((s) => s.trim()).filter(Boolean);
    sections.push(`- Levels in sequence: ${modeCodes.length}`);
    const themedCount = modeCodes.filter((c) => c === "T").length;
    sections.push(`- Themed levels: ${themedCount}`);
    sections.push(`- Themes available: ~${themeCount > 0 ? Math.ceil(themeCount / 7) : "unknown (check theme files)"}`);
  }
  sections.push("");

  // 6. Summary
  sections.push("## 6. Summary\n");
  const issues: string[] = [];
  if (!existsSync(DIST_DIR)) issues.push("❌ No build output (dist/)");
  if (csvPoolFiles.length === 0) issues.push("❌ No pool data files found");
  if (csvThemeFiles.length === 0) issues.push("❌ No theme data files found");
  if (issues.length === 0) {
    sections.push("✅ All checks passed! Ready for release.");
  } else {
    for (const issue of issues) sections.push(issue);
  }

  return sections.join("\n");
}

async function handleDiagnoseThemeData(args: Record<string, unknown>): Promise<string> {
  const levelIndex = (args.levelIndex as number) || 6; // Default: first THEMED level is at index 6
  const totalStars = (args.totalStars as number) || 0;
  const results: string[] = [];

  results.push("## 🔍 Theme Data Diagnostic\n");
  results.push(`Level Index: ${levelIndex}`);
  results.push(`Simulated Stars: ${totalStars}\n`);

  // Step 1: Check theme data files
  results.push("### Step 1: Theme Data Files\n");
  if (!existsSync(SERVICES_DIR)) {
    results.push("❌ services/ directory not found\n");
    return results.join("\n");
  }

  const themeFiles = readdirSync(SERVICES_DIR)
    .filter((f) => f.startsWith("csvThemeData") && f.endsWith(".ts"))
    .sort();

  if (themeFiles.length === 0) {
    results.push("❌ No csvThemeData*.ts files found!\n");
    return results.join("\n");
  }

  results.push(`✅ Found ${themeFiles.length} theme data files:\n`);
  for (const tf of themeFiles) {
    const content = readTextFile(join(SERVICES_DIR, tf));
    const lines = content.split("\n");
    const dataLines = lines.filter((l) => {
      const trimmed = l.trim();
      return trimmed && !trimmed.startsWith("//") && !trimmed.startsWith("/*") && !trimmed.startsWith("export") && !trimmed.startsWith("ID,");
    });
    // Extract theme names from data lines (parsing the second CSV column)
    const themes = new Set<string>();
    for (const line of dataLines) {
      try {
        // Simple extraction: find the second quoted field
        const parts = line.split(",").map((p) => p.trim().replace(/^"+|"+$/g, ""));
        if (parts.length >= 2 && parts[0] && parts[1] && parts[1] !== "theme") {
          themes.add(parts[1]);
        }
      } catch {
        // skip
      }
    }
    results.push(`  📄 ${tf}: ${themes.size} themes`);
  }

  // Step 2: Check csvThemeDataLoader imports
  results.push("\n### Step 2: Theme Data Loader\n");
  const loaderPath = join(SERVICES_DIR, "csvThemeDataLoader.ts");
  if (!existsSync(loaderPath)) {
    results.push("❌ csvThemeDataLoader.ts not found!\n");
    return results.join("\n");
  }
  const loaderContent = readTextFile(loaderPath);
  const importedFiles = loaderContent.match(/from\s+'\.\/csvThemeData\d+'/g);
  if (importedFiles) {
    results.push(`✅ csvThemeDataLoader imports ${importedFiles.length} theme files:`);
    for (const imp of importedFiles) {
      const fileName = imp.match(/'(\.\/csvThemeData\d+)'/)?.[1] || imp;
      const exists = themeFiles.some((tf) => tf.startsWith(fileName.replace("./", "")));
      results.push(`   ${exists ? "✅" : "❌"} ${imp}`);
    }
  } else {
    results.push("❌ No theme data imports found in csvThemeDataLoader.ts\n");
    return results.join("\n");
  }

  // Step 3: Determine which theme would be selected
  results.push("\n### Step 3: Theme Selection Logic\n");
  const themeNames: string[] = [];
  for (const tf of themeFiles) {
    const content = readTextFile(join(SERVICES_DIR, tf));
    const lines = content.split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("//") || trimmed.startsWith("/*") || trimmed.startsWith("export") || trimmed.startsWith("ID,")) continue;
      const parts = trimmed.split(",").map((p) => p.trim().replace(/^"+|"+$/g, ""));
      if (parts.length >= 2 && parts[0] && parts[1] && parts[1] !== "theme" && !themeNames.includes(parts[1])) {
        themeNames.push(parts[1]);
      }
    }
  }

  results.push(`Total unique themes found: ${themeNames.length}\n`);
  results.push(`All themes:\n`);
  for (const tn of themeNames.sort()) {
    results.push(`  - ${tn}`);
  }

  // Determine which theme would be selected for this level
  results.push(`\nTheme selection for level ${levelIndex}:`);
  const selectedThemeIndex = (levelIndex - 1) % themeNames.length;
  const selectedTheme = themeNames[selectedThemeIndex] || "UNKNOWN";
  results.push(`  themeNames[(levelIndex - 1) % themeNames.length]`);
  results.push(`  = themeNames[${selectedThemeIndex}]`);
  results.push(`  = "${selectedTheme}"`);

  // Step 4: Difficulty gating analysis
  results.push("\n### Step 4: Difficulty Gating\n");
  const targetDiff = totalStars >= 50 ? 5 : totalStars >= 20 ? 3 : levelIndex <= 40 ? 1 : levelIndex <= 100 ? 3 : 5;
  results.push(`Total stars: ${totalStars}`);
  results.push(`Target difficulty: ${targetDiff}`);
  results.push("");
  results.push(`Difficulty filter logic (in levelContent.ts):`);
  results.push(`  if (totalStars >= 50) → allow diff 5 or 3`);
  results.push(`  if (rowDiff === 3 && totalStars < 20) → REJECT`);
  results.push(`  if (rowDiff === 5 && categoryStarProgress < 2) → REJECT`);
  results.push(`  else → only allow rowDiff === targetDiff (${targetDiff})`);
  results.push("");

  // Count theme categories by difficulty
  const diffCounts: Record<number, number> = { 1: 0, 3: 0, 5: 0 };
  const themeDiffCounts: Record<string, Record<number, number>> = {};

  for (const tf of themeFiles) {
    const content = readTextFile(join(SERVICES_DIR, tf));
    const lines = content.split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("//") || trimmed.startsWith("/*") || trimmed.startsWith("export") || trimmed.startsWith("ID,")) continue;
      const parts = trimmed.split(",").map((p) => p.trim().replace(/^"+|"+$/g, ""));
      if (parts.length >= 15) {
        const theme = parts[1];
        const diff = parseInt(parts[13], 10) || 1;
        if (!themeDiffCounts[theme]) themeDiffCounts[theme] = { 1: 0, 3: 0, 5: 0 };
        themeDiffCounts[theme][diff] = (themeDiffCounts[theme][diff] || 0) + 1;
        diffCounts[diff] = (diffCounts[diff] || 0) + 1;
      }
    }
  }

  results.push(`Theme category distribution by difficulty:`);
  results.push(`  Difficulty 1 (easy):   ${diffCounts[1]} categories`);
  results.push(`  Difficulty 3 (medium): ${diffCounts[3]} categories`);
  results.push(`  Difficulty 5 (hard):   ${diffCounts[5]} categories`);
  results.push("");

  // Check specifically for the selected theme
  if (themeDiffCounts[selectedTheme]) {
    const stDiff = themeDiffCounts[selectedTheme];
    results.push(`Difficulty distribution for "${selectedTheme}":`);
    results.push(`  Difficulty 1: ${stDiff[1] || 0} categories`);
    results.push(`  Difficulty 3: ${stDiff[3] || 0} categories`);
    results.push(`  Difficulty 5: ${stDiff[5] || 0} categories`);

    const availableForTarget = stDiff[targetDiff as keyof typeof stDiff] || 0;
    const needed = totalStars >= 50 ? 7 : totalStars >= 20 ? 6 : 5;
    if (availableForTarget >= needed) {
      results.push(`\n✅ "${selectedTheme}" has enough (${availableForTarget}) categories at difficulty ${targetDiff} for a ${needed}-row board.`);
    } else if (availableForTarget > 0) {
      results.push(`\n⚠️ "${selectedTheme}" only has ${availableForTarget} categories at difficulty ${targetDiff}, but needs ${needed}.`);
      results.push(`   Fallback: levelContent.ts will use filteredPool fallback or ultimately getConsolidatedData().`);
    } else {
      results.push(`\n❌ "${selectedTheme}" has ZERO categories at difficulty ${targetDiff}!`);
      results.push(`   The theme data will be completely filtered out by the difficulty check.`);
      results.push(`   levelContent.ts will fall back to pool.filter(r => difficulty <= targetDiff) or getConsolidatedData().`);
    }
  } else {
    results.push(`\n❌ No theme data found for "${selectedTheme}" despite being in theme name list.`);
    results.push(`   This suggests the theme name list is populated from one source but data from another.`);
  }

  // Step 5: Check levelContent.ts theme logic
  results.push("\n### Step 5: Level Content Integration\n");
  const levelContent = readTextFile(join(PROJECT_ROOT, "services", "levelContent.ts"));
  const themeMapImport = levelContent.match(/from\s+'\.\/csvThemeDataLoader'/);
  if (themeMapImport) {
    results.push("✅ levelContent.ts imports getThemedDataMap from csvThemeDataLoader");
  } else {
    results.push("❌ levelContent.ts does NOT import getThemedDataMap!");
  }

  const getThemedDataMapCall = levelContent.includes("getThemedDataMap()");
  const themesMapCheck = levelContent.includes("themesMap =");
  if (getThemedDataMapCall && themesMapCheck) {
    results.push("✅ themesMap = getThemedDataMap() is called");
  } else {
    results.push("❌ themesMap = getThemedDataMap() NOT found in levelContent.ts");
  }

  const themeNamesCheck = levelContent.match(/themeNames\s*=\s*Array\.from\(themesMap\.keys\(\)\)/);
  if (themeNamesCheck) {
    results.push("✅ themeNames extracted from themesMap keys");
  } else {
    results.push("❌ Could not find theme name extraction in levelContent.ts");
  }

  const themeCase = levelContent.match(/case GameMode\.LEVEL_THEME/);
  if (themeCase) {
    results.push("✅ GameMode.LEVEL_THEME case found in switch statement");
  }

  // Check fallback
  const fallbackCheck = levelContent.includes("getConsolidatedData()");
  if (fallbackCheck) {
    results.push("\n⚠️  Note: When theme data fails validation, it falls back to getConsolidatedData()");
    results.push("   This means themed levels may show generic pool categories instead of themed ones.");
    results.push("   Check the LevelPrecheckLog in localStorage for specific validation failures.");
  }

  return results.join("\n");
}

// ============================================================
// Server Setup
// ============================================================

const server = new Server(
  {
    name: "build-pipeline-mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    BUMP_VERSION_TOOL,
    VALIDATE_BUILD_TOOL,
    VALIDATE_CAPACITOR_CONFIG_TOOL,
    CHECK_ADMOB_IDS_TOOL,
    GENERATE_CHANGELOG_TOOL,
    VERIFY_DIST_TOOL,
    FULL_BUILD_AUDIT_TOOL,
    DIAGNOSE_THEME_DATA_TOOL,
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "bump_version":
        return {
          content: [{ type: "text", text: await handleBumpVersion(args || {}) }],
        };

      case "validate_build":
        return {
          content: [{ type: "text", text: await handleValidateBuild() }],
        };

      case "validate_capacitor_config":
        return {
          content: [{ type: "text", text: await handleValidateCapacitorConfig() }],
        };

      case "check_admob_ids":
        return {
          content: [{ type: "text", text: await handleCheckAdMobIds(args || {}) }],
        };

      case "generate_changelog":
        return {
          content: [{ type: "text", text: await handleGenerateChangelog(args || {}) }],
        };

      case "verify_dist":
        return {
          content: [{ type: "text", text: await handleVerifyDist() }],
        };

      case "full_build_audit":
        return {
          content: [{ type: "text", text: await handleFullBuildAudit(args || {}) }],
        };

      case "diagnose_theme_data":
        return {
          content: [{ type: "text", text: await handleDiagnoseThemeData(args || {}) }],
        };

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      content: [{ type: "text", text: `Error: ${errorMessage}` }],
      isError: true,
    };
  }
});

// ============================================================
// Start Server
// ============================================================

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Build Pipeline MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
