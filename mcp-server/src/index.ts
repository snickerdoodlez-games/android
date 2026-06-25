#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from "@modelcontextprotocol/sdk/types.js";
import { readFileSync, readdirSync, existsSync, writeFileSync } from "fs";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";

// ============================================================
// Configuration
// ============================================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = resolve(join(__dirname, "..", ".."));
const SERVICES_DIR = join(PROJECT_ROOT, "services");
const COMPONENTS_DIR = join(PROJECT_ROOT, "components");

// ============================================================
// Types
// ============================================================

interface CSVRow {
  id: string;
  name: string;
  catDict: string;
  words: string[];
  definitions: string[];
  difficulty: number;
  broadCategory: string;
}

// ============================================================
// CSV Parsing Utilities
// ============================================================

/**
 * Parse a CSV string from the project's data files into structured rows.
 * Handles both pool format (ID,Category,CATDICT,WORD1,WORDDEF1,...)
 * and theme format (ID,theme,themedef,category,catdef,word1,worddef1,...)
 */
function parseCSV(csv: string): CSVRow[] {
  const lines = csv.trim().split("\n");
  if (lines.length < 2) return [];

  const header = lines[0].toLowerCase();
  const isThemeFormat = header.includes("theme,");

  const rows: CSVRow[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line.startsWith("//") || line.startsWith("/*")) continue;

    try {
      const parsed = parseCSVLine(line);
      if (parsed.length < 5) continue;

      if (isThemeFormat) {
        // Theme format: ID,theme,themedef,category,catdef,word1,worddef1,word2,worddef2,word3,worddef3,word4,worddef4,score,cat21
        const id = parsed[0];
        const name = parsed[3]; // category is at index 3
        const catDict = parsed[4] || "";
        const wordDefs: string[] = parsed.slice(5);
        const words: string[] = [];
        const definitions: string[] = [];
        for (let j = 0; j < wordDefs.length; j += 2) {
          if (wordDefs[j]) words.push(wordDefs[j].replace(/^"|"$/g, ""));
          if (wordDefs[j + 1]) definitions.push(wordDefs[j + 1].replace(/^"|"$/g, ""));
        }
        const difficulty = parseInt(parsed[parsed.length - 2]) || 3;
        const broadCategory = (parsed[parsed.length - 1] || "Unknown").replace(/^"|"$/g, "");

        rows.push({ id, name, catDict, words, definitions, difficulty, broadCategory });
      } else {
        // Pool format: ID,Category,CATDICT,WORD1,WORDDEF1,WORD2,WORDDEF2,WORD3,WORDDEF3,WORD4,WORDDEF4,SCORE,CAT21
        const id = parsed[0];
        const name = parsed[1];
        const catDict = parsed[2] || "";
        const wordDefs: string[] = parsed.slice(3);
        const words: string[] = [];
        const definitions: string[] = [];
        for (let j = 0; j < wordDefs.length; j += 2) {
          if (wordDefs[j] && !wordDefs[j].toLowerCase().includes("score") && !wordDefs[j].toLowerCase().includes("cat21")) {
            words.push(wordDefs[j].replace(/^"|"$/g, ""));
            if (wordDefs[j + 1]) definitions.push(wordDefs[j + 1].replace(/^"|"$/g, ""));
          }
        }
        const difficulty = parseInt(parsed[parsed.length - 2]) || 3;
        const broadCategory = (parsed[parsed.length - 1] || "Unknown").replace(/^"|"$/g, "");

        rows.push({ id, name, catDict, words, definitions, difficulty, broadCategory });
      }
    } catch (e) {
      // skip malformed lines
    }
  }

  return rows;
}

/**
 * Parse a single CSV line, handling quoted fields correctly.
 */
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && i + 1 < line.length && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current);

  return result;
}

// ============================================================
// Data Loading
// ============================================================

/**
 * Load all CSV data from the services directory.
 */
function loadAllCSVData(): { rows: CSVRow[]; fileName: string }[] {
  const results: { rows: CSVRow[]; fileName: string }[] = [];

  try {
    if (!existsSync(SERVICES_DIR)) return results;

    const files = readdirSync(SERVICES_DIR);
    const csvFiles = files.filter(
      (f) =>
        (f.startsWith("csvPoolData") || f.startsWith("csvThemeData")) &&
        f.endsWith(".ts")
    );

    for (const file of csvFiles) {
      try {
        const filePath = join(SERVICES_DIR, file);
        const content = readFileSync(filePath, "utf-8");

        // Extract the CSV string literal from the TypeScript export
        const match = content.match(/`([\s\S]*?)`/);
        if (match) {
          const rows = parseCSV(match[1]);
          if (rows.length > 0) {
            results.push({ rows, fileName: file });
          }
        }
      } catch (e) {
        // skip files that can't be read
      }
    }
  } catch (e) {
    // services directory doesn't exist or can't be read
  }

  return results;
}

/**
 * Get all unique broad categories from the CSV data.
 */
function getAllBroadCategories(): string[] {
  const allData = loadAllCSVData();
  const categories = new Set<string>();

  for (const { rows } of allData) {
    for (const row of rows) {
      if (row.broadCategory && row.broadCategory !== "CAT21") {
        categories.add(row.broadCategory);
      }
    }
  }

  return Array.from(categories).sort();
}

// ============================================================
// Tool Definitions
// ============================================================

const SEARCH_GAME_CONTENT_TOOL: Tool = {
  name: "search_game_content",
  description: "Search across all CSV data files for matching words, categories, or definitions",
  inputSchema: {
    type: "object",
    properties: {
      query: {
        type: "string",
        description: "Search term to find in CSV data",
      },
      field: {
        type: "string",
        description: "Field to search in: 'all', 'words', 'categories', 'definitions'",
        enum: ["all", "words", "categories", "definitions"],
      },
      broadCategory: {
        type: "string",
        description: "Filter by broad category (e.g., Nature, Technology, Food)",
      },
      maxResults: {
        type: "number",
        description: "Maximum number of results to return (default: 50)",
        default: 50,
      },
    },
    required: ["query"],
  },
};

const VALIDATE_MANIFEST_TOOL: Tool = {
  name: "validate_manifest",
  description: "Validate metadata.json and level structure for consistency",
  inputSchema: {
    type: "object",
    properties: {},
    required: [],
  },
};

const ANALYZE_LEVEL_PROGRESSION_TOOL: Tool = {
  name: "analyze_level_progression",
  description: "Analyze the deterministic level sequence to understand mode distribution and progression",
  inputSchema: {
    type: "object",
    properties: {
      numLevels: {
        type: "number",
        description: "Number of levels to analyze (default: 100)",
        default: 100,
      },
    },
    required: [],
  },
};

const AUDIT_CSV_CONSISTENCY_TOOL: Tool = {
  name: "audit_csv_consistency",
  description: "Check for duplicate entries, missing fields, or structural issues in CSV data files",
  inputSchema: {
    type: "object",
    properties: {},
    required: [],
  },
};

const FIND_UNUSED_CATEGORIES_TOOL: Tool = {
  name: "find_unused_categories",
  description: "Find categories in the CSV data that aren't referenced by any level",
  inputSchema: {
    type: "object",
    properties: {
      minDifficulty: {
        type: "number",
        description: "Minimum difficulty filter (1=easy, 3=medium, 5=hard)",
      },
    },
    required: [],
  },
};

// ═══════════════════════════════════════════════════════════════
// Workflow 1: Component & Convention Compliance Auditor
// Scans all React components for .clinerules compliance:
//   - Import ordering (React→Types→Services→Components)
//   - Touch target sizes (min-w-48 min-h-48)
//   - aria-label on icon-only buttons
//   - Neon color scheme adherence
//   - Component naming conventions
// ═══════════════════════════════════════════════════════════════

const AUDIT_COMPONENT_CONVENTIONS_TOOL: Tool = {
  name: "audit_component_conventions",
  description:
    "Workflow 1: Scan all React components for .clinerules compliance — import ordering, touch targets (min-w-[48px] min-h-[48px]), aria-labels on icon-only buttons, neon color scheme usage, and naming conventions. Produces a prioritized violation report with fix suggestions.",
  inputSchema: {
    type: "object",
    properties: {
      componentPath: {
        type: "string",
        description: "Optional: audit a single component file instead of all components",
      },
      checks: {
        type: "array",
        items: { type: "string", enum: ["all", "imports", "touch-targets", "aria-labels", "neon-colors", "naming"] },
        description: "Which checks to run (default: ['all'])",
      },
    },
    required: [],
  },
};

// ═══════════════════════════════════════════════════════════════
// Workflow 2: Data Pipeline Integrity Validator
// Cross-validates:
//   - localStorage keys against actual usage in App.tsx and components
//   - Game mode → data source mappings (.clinerules rule #11)
//   - CSV data format spec (word count, definition pairings, char limits)
//   - Word tile uniqueness across data files (rule #8)
// ═══════════════════════════════════════════════════════════════

const VALIDATE_DATA_PIPELINE_TOOL: Tool = {
  name: "validate_data_pipeline",
  description:
    "Workflow 2: Cross-validate localStorage schema, game-mode-to-data-source mappings (rule #11), CSV format spec adherence, and word tile uniqueness (rule #8). Produces a gap analysis with fix recommendations.",
  inputSchema: {
    type: "object",
    properties: {
      scope: {
        type: "string",
        enum: ["all", "storage", "mode-mappings", "csv-format", "word-uniqueness"],
        description: "Which pipeline dimension to validate (default: all)",
      },
    },
    required: [],
  },
};

// ═══════════════════════════════════════════════════════════════
// Workflow 3: Level Sequence & Coverage Auditor
// Cross-references:
//   - Every GameMode in DETERMINISTIC_LEVEL_SEQUENCE → rendering component
//   - Every game mode → its required data source file
//   - Stub / incomplete component detection
//   - Generates a prioritized coverage gap report
// ═══════════════════════════════════════════════════════════════

const AUDIT_LEVEL_COVERAGE_TOOL: Tool = {
  name: "audit_level_coverage",
  description:
    "Workflow 3: Cross-reference DETERMINISTIC_LEVEL_SEQUENCE against component files, verify data-source mappings exist, detect stub/incomplete components, and produce a prioritized PORTING_ROADMAP.md coverage gap report.",
  inputSchema: {
    type: "object",
    properties: {
      outputRoadmap: {
        type: "boolean",
        description: "Whether to write/update PORTING_ROADMAP.md (default: false)",
      },
    },
    required: [],
  },
};

// ============================================================
// Tool Implementations
// ============================================================

async function handleSearchGameContent(args: Record<string, unknown>): Promise<string> {
  const query = String(args.query || "").toLowerCase();
  const field = String(args.field || "all");
  const broadCategoryFilter = args.broadCategory ? String(args.broadCategory) : null;
  const maxResults = Number(args.maxResults) || 50;

  if (!query) return "Please provide a search query.";

  const allData = loadAllCSVData();
  const results: { file: string; category: string; match: string; type: string }[] = [];

  for (const { rows, fileName } of allData) {
    for (const row of rows) {
      if (broadCategoryFilter && row.broadCategory.toLowerCase() !== broadCategoryFilter.toLowerCase()) continue;

      const searchInAll = field === "all";
      const searchInWords = field === "words" || searchInAll;
      const searchInCategories = field === "categories" || searchInAll;
      const searchInDefinitions = field === "definitions" || searchInAll;

      // Search in category name
      if (searchInCategories && row.name.toLowerCase().includes(query)) {
        results.push({
          file: fileName,
          category: row.name,
          match: row.name,
          type: "category",
        });
      }

      // Search in words
      if (searchInWords) {
        for (const word of row.words) {
          if (word.toLowerCase().includes(query)) {
            results.push({
              file: fileName,
              category: row.name,
              match: word,
              type: "word",
            });
            break;
          }
        }
      }

      // Search in definitions
      if (searchInDefinitions) {
        for (const def of row.definitions) {
          if (def.toLowerCase().includes(query)) {
            results.push({
              file: fileName,
              category: row.name,
              match: def.substring(0, 100),
              type: "definition",
            });
            break;
          }
        }
      }
    }
  }

  const limited = results.slice(0, maxResults);
  if (limited.length === 0) {
    return `No results found for "${query}".`;
  }

  let output = `Found ${results.length} matches for "${query}"`;
  if (broadCategoryFilter) output += ` in ${broadCategoryFilter}`;
  output += `.\n\n`;

  for (const r of limited) {
    output += `[${r.type.toUpperCase()}] ${r.category} (${r.file}): ${r.match}\n`;
  }

  if (results.length > maxResults) {
    output += `\n... and ${results.length - maxResults} more results. Use maxResults to see more.`;
  }

  return output;
}

async function handleValidateManifest(): Promise<string> {
  const issues: string[] = [];
  const warnings: string[] = [];

  // Check metadata.json
  const metadataPath = join(PROJECT_ROOT, "metadata.json");
  if (existsSync(metadataPath)) {
    try {
      const metadata = JSON.parse(readFileSync(metadataPath, "utf-8"));
      if (!metadata.name) issues.push("metadata.json is missing 'name' field.");
      if (!metadata.description) issues.push("metadata.json is missing 'description' field.");
    } catch (e) {
      issues.push("metadata.json is not valid JSON.");
    }
  } else {
    issues.push("metadata.json not found.");
  }

  // Check capacitor.config.json
  const capConfigPath = join(PROJECT_ROOT, "capacitor.config.json");
  if (existsSync(capConfigPath)) {
    try {
      const capConfig = JSON.parse(readFileSync(capConfigPath, "utf-8"));
      if (!capConfig.appId) issues.push("capacitor.config.json is missing 'appId'.");
      if (!capConfig.appName) issues.push("capacitor.config.json is missing 'appName'.");
      if (!capConfig.webDir) warnings.push("capacitor.config.json is missing 'webDir'.");
    } catch (e) {
      issues.push("capacitor.config.json is not valid JSON.");
    }
  } else {
    issues.push("capacitor.config.json not found.");
  }

  // Check for core files
  const requiredFiles = ["App.tsx", "index.tsx", "index.html", "types.ts", "vite.config.ts"];
  for (const file of requiredFiles) {
    if (!existsSync(join(PROJECT_ROOT, file))) {
      issues.push(`Required file '${file}' not found.`);
    }
  }

  // Check services directory
  if (!existsSync(SERVICES_DIR)) {
    issues.push("services directory not found.");
  } else {
    const servicesFiles = readdirSync(SERVICES_DIR);
    const csvFiles = servicesFiles.filter((f) => f.startsWith("csvPoolData") || f.startsWith("csvThemeData"));
    if (csvFiles.length === 0) {
      warnings.push("No csvPoolData* or csvThemeData* files found in services/.");
    }
  }

  // Check components directory
  if (!existsSync(COMPONENTS_DIR)) {
    issues.push("components directory not found.");
  }

  let output = "## Manifest Validation Report\n\n";

  if (issues.length === 0 && warnings.length === 0) {
    output += "✅ All checks passed. Project structure looks healthy!\n";
  } else {
    if (issues.length > 0) {
      output += "### Issues (must fix):\n";
      for (const issue of issues) {
        output += `- ❌ ${issue}\n`;
      }
      output += "\n";
    }
    if (warnings.length > 0) {
      output += "### Warnings (should review):\n";
      for (const warning of warnings) {
        output += `- ⚠️ ${warning}\n`;
      }
      output += "\n";
    }
  }

  // CSV data summary
  const allData = loadAllCSVData();
  const totalRows = allData.reduce((sum, d) => sum + d.rows.length, 0);
  output += `\n### Data Summary\n`;
  output += `- Total CSV files: ${allData.length}\n`;
  output += `- Total categories: ${totalRows}\n`;
  output += `- Broad categories: ${getAllBroadCategories().join(", ")}\n`;

  return output;
}

/**
 * Parse the repeating BASE_CYCLE from types.ts to extract all game mode values.
 * Handles the computed Array.from() pattern for DETERMINISTIC_LEVEL_SEQUENCE.
 */
function parseLevelSequence(): { modes: string[]; baseCycle: string[]; totalLevels: number } | null {
  const typesContent = readFileSync(join(PROJECT_ROOT, "types.ts"), "utf-8");

  // Try the literal array pattern first (older format)
  let match = typesContent.match(/DETERMINISTIC_LEVEL_SEQUENCE\s*:\s*GameMode\[\]\s*=\s*\[([\s\S]*?)\]/);
  if (match) {
    const modeCodes = match[1].split(",").map((s) => s.trim()).filter(Boolean);
    const modeMap: Record<string, string> = {
      C: "CLASSIC", E: "LEVEL_EMOJI", M: "LEVEL_MIND_MATCH",
      S: "LEVEL_SYNONYMS", T: "LEVEL_THEME", X: "LEVEL_EXPANSION",
    };
    const modes = modeCodes.map((c) => modeMap[c] || c);
    return { modes, baseCycle: modes, totalLevels: modes.length };
  }

  // Try the computed Array.from() pattern (newer format)
  // Extract BASE_CYCLE contents
  const baseCycleMatch = typesContent.match(/BASE_CYCLE\s*:\s*GameMode\[\]\s*=\s*\[([\s\S]*?)\];/);
  const totalLevelsMatch = typesContent.match(/TOTAL_LEVELS\s*=\s*(\d+)/);

  if (!baseCycleMatch) {
    return null;
  }

  const enumValues = baseCycleMatch[1];
  const gameModePattern = /GameMode\.(\w+)/g;
  const baseCycle: string[] = [];
  let gmMatch;
  while ((gmMatch = gameModePattern.exec(enumValues)) !== null) {
    baseCycle.push(gmMatch[1]);
  }

  if (baseCycle.length === 0) {
    return null;
  }

  const totalLevels = totalLevelsMatch ? parseInt(totalLevelsMatch[1]) : 72;

  // Generate the full sequence by repeating BASE_CYCLE
  const modes = Array.from({ length: totalLevels }, (_, i) => baseCycle[i % baseCycle.length]);

  return { modes, baseCycle, totalLevels };
}

async function handleAnalyzeLevelProgression(numLevels: number): Promise<string> {
  const parsed = parseLevelSequence();
  if (!parsed) {
    return "Could not find DETERMINISTIC_LEVEL_SEQUENCE or BASE_CYCLE in types.ts";
  }

  const { modes: sequence, baseCycle } = parsed;

  const totalLevels = sequence.length;
  const analyzedCount = Math.min(numLevels, totalLevels);

  let output = `## Level Progression Analysis\n\n`;
  output += `Total levels defined: ${totalLevels}\n`;
  output += `Analyzing first ${analyzedCount} levels...\n\n`;

  output += `### Mode Distribution (first ${analyzedCount} levels):\n`;
  const analyzedModes = sequence.slice(0, analyzedCount);
  const analyzedCounts: Record<string, number> = {};
  for (const mode of analyzedModes) {
    analyzedCounts[mode] = (analyzedCounts[mode] || 0) + 1;
  }

  for (const [mode, count] of Object.entries(analyzedCounts).sort((a, b) => b[1] - a[1])) {
    const pct = ((count / analyzedCount) * 100).toFixed(1);
    output += `- ${mode}: ${count} (${pct}%)\n`;
  }

  output += `\n### Base Cycle:\n`;
  output += `  ${baseCycle.join(" → ")}\n`;
  output += `\n### First 20 Levels:\n`;
  for (let i = 0; i < Math.min(20, analyzedCount); i++) {
    output += `  ${String(i + 1).padStart(2)}. ${sequence[i]}\n`;
  }

  return output;
}

async function handleAuditCSVConsistency(): Promise<string> {
  const allData = loadAllCSVData();
  const issues: string[] = [];
  const warnings: string[] = [];

  // Check for duplicate category names
  const categoryNames = new Map<string, string[]>();
  // Check for duplicate word tiles across all data
  const allWords = new Map<string, string[]>();
  // Check for missing fields
  let totalRows = 0;

  for (const { rows, fileName } of allData) {
    for (const row of rows) {
      totalRows++;

      // Track category names
      if (!categoryNames.has(row.name)) {
        categoryNames.set(row.name, []);
      }
      categoryNames.get(row.name)!.push(fileName);

      // Check for empty fields
      if (!row.id || row.id === "") {
        issues.push(`${fileName}: Row has empty ID. Category: ${row.name}`);
      }
      if (!row.name || row.name === "") {
        issues.push(`${fileName}: Row has empty category name. ID: ${row.id}`);
      }
      if (row.words.length === 0) {
        issues.push(`${fileName}: Category '${row.name}' has no words.`);
      }
      if (row.words.length < 4) {
        warnings.push(`${fileName}: Category '${row.name}' has only ${row.words.length} words (expected at least 4).`);
      }
      if (!row.broadCategory || row.broadCategory === "CAT21") {
        warnings.push(`${fileName}: Category '${row.name}' has missing or placeholder broad category.`);
      }

      // Track words for duplicates
      for (const word of row.words) {
        const cleanWord = word.trim().toLowerCase();
        if (!allWords.has(cleanWord)) {
          allWords.set(cleanWord, []);
        }
        allWords.get(cleanWord)!.push(`${row.name} (${fileName})`);
      }
    }
  }

  // Find duplicate category names
  for (const [name, files] of categoryNames.entries()) {
    if (files.length > 1) {
      warnings.push(`Category "${name}" appears in ${files.length} files: ${files.join(", ")}`);
    }
  }

  // Find duplicate words
  const duplicateWords = Array.from(allWords.entries()).filter(([, sources]) => sources.length > 1);
  if (duplicateWords.length > 0) {
    warnings.push(`${duplicateWords.length} word(s) appear in multiple categories.`);
    for (const [word, sources] of duplicateWords.slice(0, 20)) {
      warnings.push(`  "${word}" appears in: ${sources.join(", ")}`);
    }
    if (duplicateWords.length > 20) {
      warnings.push(`  ... and ${duplicateWords.length - 20} more duplicate words`);
    }
  }

  let output = `## CSV Consistency Audit\n\n`;
  output += `Total files: ${allData.length}\n`;
  output += `Total rows: ${totalRows}\n\n`;

  if (issues.length === 0 && warnings.length === 0) {
    output += "✅ No issues found. All CSV data looks consistent!\n";
  } else {
    if (issues.length > 0) {
      output += `### Issues (${issues.length}):\n`;
      for (const issue of issues) {
        output += `- ❌ ${issue}\n`;
      }
      output += "\n";
    }
    if (warnings.length > 0) {
      output += `### Warnings (${warnings.length}):\n`;
      for (const warning of warnings) {
        output += `- ⚠️ ${warning}\n`;
      }
      output += "\n";
    }
  }

  // Per-file stats
  output += `### Per-File Statistics\n`;
  for (const { rows, fileName } of allData) {
    output += `- ${fileName}: ${rows.length} categories\n`;
  }

  return output;
}

async function handleFindUnusedCategories(args: Record<string, unknown>): Promise<string> {
  const minDifficulty = args.minDifficulty ? Number(args.minDifficulty) : 0;
  const allData = loadAllCSVData();

  // In this game, all categories from pool data are potentially usable.
  // We'll check what broad categories are least represented.
  const broadCategoryCounts: Record<string, { count: number; examples: string[] }> = {};

  for (const { rows } of allData) {
    for (const row of rows) {
      if (minDifficulty > 0 && row.difficulty < minDifficulty) continue;

      const bc = row.broadCategory || "Unknown";
      if (!broadCategoryCounts[bc]) {
        broadCategoryCounts[bc] = { count: 0, examples: [] };
      }
      broadCategoryCounts[bc].count++;
      if (broadCategoryCounts[bc].examples.length < 5) {
        broadCategoryCounts[bc].examples.push(row.name);
      }
    }
  }

  const sorted = Object.entries(broadCategoryCounts).sort((a, b) => a[1].count - b[1].count);

  let output = "## Category Distribution by Broad Category\n\n";

  for (const [bc, data] of sorted) {
    output += `### ${bc} (${data.count} categories)\n`;
    if (data.count <= 3) {
      output += `⚠️ Low representation! Consider adding more ${bc} categories.\n`;
    }
    for (const example of data.examples) {
      output += `  - ${example}\n`;
    }
    output += "\n";
  }

  // Categories with fewest entries
  const lowest = sorted.filter(([, data]) => data.count <= 3);
  if (lowest.length > 0) {
    output += `### ⚠️ Underrepresented Categories (≤ 3 entries)\n`;
    for (const [bc] of lowest) {
      output += `- ${bc}: Only ${broadCategoryCounts[bc].count} categories available\n`;
    }
  }

  return output;
}

// ═══════════════════════════════════════════════════════════════
// Workflow 1 Implementation: Component Convention Audit
// ═══════════════════════════════════════════════════════════════

interface ConventionIssue {
  file: string;
  line: number;
  check: string;
  severity: "error" | "warning" | "info";
  message: string;
  fix: string;
}

/**
 * Read a file and return its lines split by newline.
 */
function readFileLines(filePath: string): string[] | null {
  try {
    const content = readFileSync(filePath, "utf-8");
    return content.split("\n");
  } catch {
    return null;
  }
}

/**
 * Audit a single component file for .clinerules convention compliance.
 */
function auditSingleComponent(file: string, filePath: string, checks: string[]): ConventionIssue[] {
  const issues: ConventionIssue[] = [];
  const lines = readFileLines(filePath);
  if (!lines) return issues;

  const runAll = checks.includes("all");
  const fullContent = lines.join("\n");

  // ── Check: Import Ordering (React → Types → Services → Components) ──
  if (runAll || checks.includes("imports")) {
    const importLines: { lineNum: number; text: string; category: string }[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith("import ")) {
        let category = "unknown";
        const importSource = line.match(/from\s+['"](.+?)['"]/);
        if (importSource) {
          const src = importSource[1];
          if (src === "react" || src.startsWith("react")) {
            category = "react";
          } else if (src.startsWith(".") && src.includes("component")) {
            category = "component";
          } else if (src.startsWith(".") && src.includes("service")) {
            category = "service";
          } else if (src === "../types" || src === "./types" || src.includes("types")) {
            category = "types";
          } else if (src.startsWith(".")) {
            category = "component";
          } else {
            category = "types"; // external libs treated like types
          }
        }
        importLines.push({ lineNum: i + 1, text: line, category });
      }
    }

    // Check ordering: react → types → services → components
    const orderMap: Record<string, number> = { react: 0, types: 1, services: 2, component: 3, unknown: 4 };
    let prevOrder = -1;
    let prevLineNum = 0;
    let prevCat = "";

    for (const imp of importLines) {
      const currOrder = orderMap[imp.category] ?? 4;
      if (currOrder < prevOrder) {
        issues.push({
          file,
          line: imp.lineNum,
          check: "import-ordering",
          severity: "warning",
          message: `Import '${imp.text.substring(0, 60)}...' at line ${imp.lineNum} is out of order. Expected order: React → Types → Services → Components. Found ${imp.category} after ${prevCat} at line ${prevLineNum}.`,
          fix: `Reorder imports: move this ${imp.category} import to the correct section. React/hooks first, types next, services/utilities next, components last.`,
        });
        break; // just flag the first out-of-order instance per file
      }
      prevOrder = currOrder;
      prevLineNum = imp.lineNum;
      prevCat = imp.category;
    }
  }

  // ── Check: Touch Target Sizes (min-w-[48px] min-h-[48px]) ──
  if (runAll || checks.includes("touch-targets")) {
    // Look for <button elements that lack min-w- and min-h-
    const buttonRegex = /<button\b([^>]*)>/gi;
    let match1: RegExpExecArray | null;
    while ((match1 = buttonRegex.exec(fullContent)) !== null) {
      const attrs = match1[1];
      const lineNum = fullContent.substring(0, match1.index).split("\n").length;

      // Skip buttons that are inside SVG or already have min sizes
      const hasMinW = /min-w-\[?48px\]?/i.test(attrs);
      const hasMinH = /min-h-\[?48px\]?/i.test(attrs);

      if (!hasMinW || !hasMinH) {
        const missing: string[] = [];
        if (!hasMinW) missing.push("min-w-[48px]");
        if (!hasMinH) missing.push("min-h-[48px]");

        // Skip if it's an inline text button or clearly not a game interaction button
        const isSmallBtn = /\b(w-\d+|h-\d+|p-\d)\b/.test(attrs) &&
          !/\b(rounded-full|text-xl|text-2xl|text-3xl)\b/.test(attrs);

        issues.push({
          file,
          line: lineNum,
          check: "touch-target-size",
          severity: isSmallBtn ? "error" : "warning",
          message: `<button> at line ${lineNum} is missing touch target classes: ${missing.join(", ")}. Min 48dp × 48dp required by accessibility rules.`,
          fix: `Add classes: ${missing.join(" ")} to this button element.`,
        });
      }
    }

    // Also check icon-only buttons (detect by class names or single-character/icon content)
    const iconBtnRegex = /<button\b[^>]*?className\s*=\s*["'][^"']*?(close|settings|hamburger|menu|icon|lightbulb)[^"']*?["'][^>]*>/gi;
    let match2: RegExpExecArray | null;
    while ((match2 = iconBtnRegex.exec(fullContent)) !== null) {
      const attrs = match2[0];
      const lineNum = fullContent.substring(0, match2.index).split("\n").length;
      const hasAria = /aria-label\s*=/.test(attrs);

      if (!hasAria && (runAll || checks.includes("aria-labels"))) {
        issues.push({
          file,
          line: lineNum,
          check: "aria-label-missing",
          severity: "error",
          message: `Icon button at line ${lineNum} is missing aria-label. Screen reader users need a descriptive label.`,
          fix: `Add aria-label="Descriptive action" to this button (e.g., "Close settings", "Open menu").`,
        });
      }
    }
  }

  // ── Check: Aria Labels on Interactive Elements ──
  if (runAll || checks.includes("aria-labels")) {
    // Find any button without aria-label that has no visible text content
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Detect <button ...> with no aria-label
      if (line.match(/<button\b/i) && !line.match(/aria-label\s*=/i)) {
        // Check next few lines for text content
        let hasText = false;
        for (let j = i; j < Math.min(i + 3, lines.length); j++) {
          const nextLine = lines[j];
          if (/[a-zA-Z]{3,}/.test(nextLine.replace(/<[^>]+>/g, "").trim())) {
            hasText = true;
            break;
          }
        }

        // If button self-closes or has minimal content, flag it
        if (!hasText && line.includes("/>")) {
          issues.push({
            file,
            line: i + 1,
            check: "aria-label-missing",
            severity: "warning",
            message: `Self-closing button at line ${i + 1} has no aria-label and no visible text.`,
            fix: `Add aria-label="descriptive action" to this button.`,
          });
        }
      }
    }
  }

  // ── Check: Neon Color Scheme Adherence ──
  if (runAll || checks.includes("neon-colors")) {
    // Look for inline color styles that might bypass the neon scheme
    const inlineColorRegex = /style\s*=\s*["'][^"']*?(?:color|background|backgroundColor)\s*:\s*(#[0-9a-fA-F]{3,6}|rgb|hsl)[^"']*?["']/gi;
    let match3: RegExpExecArray | null;
    while ((match3 = inlineColorRegex.exec(fullContent)) !== null) {
      const lineNum = fullContent.substring(0, match3.index).split("\n").length;
      issues.push({
        file,
        line: lineNum,
        check: "neon-color-scheme",
        severity: "info",
        message: `Inline color style at line ${lineNum} uses a custom color. Consider using the neon color scheme (neon-* Tailwind classes).`,
        fix: `Replace with neon Tailwind classes: background → bg-neon-*, text → text-neon-*, etc.`,
      });
    }
  }

  // ── Check: Naming Conventions (PascalCase for components) ──
  if (runAll || checks.includes("naming")) {
    // Check if file is a component based on naming pattern
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Check export default function/const names
      const exportFuncMatch = line.match(/export\s+default\s+function\s+(\w+)/);
      if (exportFuncMatch) {
        const name = exportFuncMatch[1];
        if (!/^[A-Z]/.test(name)) {
          issues.push({
            file,
            line: i + 1,
            check: "naming-pascalcase",
            severity: "error",
            message: `Component export '${name}' does not use PascalCase. Components should start with uppercase.`,
            fix: `Rename to a PascalCase name (e.g., '${name.charAt(0).toUpperCase() + name.slice(1)}').`,
          });
        }
        // Check file name matches component name
        const expectedFileName = `${name}.tsx`;
        if (file !== expectedFileName) {
          issues.push({
            file,
            line: i + 1,
            check: "naming-filename-match",
            severity: "info",
            message: `Component '${name}' is in file '${file}' — expected '${expectedFileName}'. Convention: file name should match component name.`,
            fix: `Consider renaming file to '${expectedFileName}' or rename component.`,
          });
        }
      }
    }
  }

  return issues;
}

async function handleAuditComponentConventions(args: Record<string, unknown>): Promise<string> {
  const componentPath = args.componentPath ? String(args.componentPath) : null;
  const checks = Array.isArray(args.checks) ? args.checks.map(String) : ["all"];

  const allIssues: ConventionIssue[] = [];

  if (componentPath) {
    const fullPath = join(PROJECT_ROOT, componentPath);
    if (!existsSync(fullPath)) {
      return `❌ Component file not found: ${componentPath} (resolved to ${fullPath})`;
    }
    const fileName = componentPath.replace(/^.*[\\/]/, "");
    allIssues.push(...auditSingleComponent(fileName, fullPath, checks));
  } else {
    // Audit all .tsx files in components/
    try {
      const files = readdirSync(COMPONENTS_DIR).filter(
        (f) => f.endsWith(".tsx") && !f.endsWith(".d.ts")
      );
      for (const file of files) {
        const filePath = join(COMPONENTS_DIR, file);
        allIssues.push(...auditSingleComponent(file, filePath, checks));
      }
    } catch {
      return "❌ Could not read components directory.";
    }
  }

  // Group by severity
  const errors = allIssues.filter((i) => i.severity === "error");
  const warnings = allIssues.filter((i) => i.severity === "warning");
  const infos = allIssues.filter((i) => i.severity === "info");

  // Group by check type
  const byCheck: Record<string, ConventionIssue[]> = {};
  for (const issue of allIssues) {
    if (!byCheck[issue.check]) byCheck[issue.check] = [];
    byCheck[issue.check].push(issue);
  }

  let output = `## 🔍 Component & Convention Compliance Audit\n\n`;
  output += `**Audited:** ${componentPath ? "1 file" : `${allIssues.length > 0 ? Object.keys(byCheck).length : 0}+ files`}\n`;
  output += `**Checks run:** ${checks.join(", ")}\n\n`;

  if (allIssues.length === 0) {
    output += "✅ **All checks passed!** No convention violations found.\n";
    return output;
  }

  output += `### 📊 Summary\n`;
  output += `| Severity | Count |\n`;
  output += `|----------|-------|\n`;
  output += `| ❌ Error | ${errors.length} |\n`;
  output += `| ⚠️ Warning | ${warnings.length} |\n`;
  output += `| ℹ️ Info | ${infos.length} |\n`;
  output += `| **Total** | **${allIssues.length}** |\n\n`;

  // By check type
  output += `### By Check Type\n`;
  for (const [check, issues] of Object.entries(byCheck)) {
    output += `#### ${check} (${issues.length} issues)\n`;
    for (const issue of issues.slice(0, 10)) {
      output += `- **${issue.file}:${issue.line}** — ${issue.message}\n`;
      output += `  ↳ *Fix:* ${issue.fix}\n`;
    }
    if (issues.length > 10) {
      output += `  ... and ${issues.length - 10} more\n`;
    }
    output += "\n";
  }

  // Priority: errors first
  if (errors.length > 0) {
    output += `### 🚨 Priority Fixes (Errors - ${errors.length})\n`;
    for (const e of errors) {
      output += `- \`${e.file}:${e.line}\` — ${e.message}\n`;
      output += `  ↳ ${e.fix}\n`;
    }
    output += "\n";
  }

  return output;
}

// ═══════════════════════════════════════════════════════════════
// Workflow 2 Implementation: Data Pipeline Integrity Validator
// ═══════════════════════════════════════════════════════════════

/** Known localStorage keys from storage.ts */
const KNOWN_STORAGE_KEYS = new Set([
  "wpm_level",
  "wpm_game_stats",
  "wpm_daily_history",
  "wpm_enabled_modes",
  "wpm_custom_pool",
  "wpm_auto_play",
  "wpm_app_state",
  "wpm_last_active_timestamp",
  "wpm_selected_difficulty",
  "wpm_expansion_level_easy",
  "wpm_expansion_level_medium",
  "wpm_expansion_level_hard",
  "hints-available",
  "LevelPrecheckLog.txt",
  "wpm_sound_muted",
  "wpm_hints_enabled",
  "wpm_hint_ads_enabled",
  "wpm_consent_granted",
  "wpm_personalized_ads",
  "wpm_first_launch",
]);

/** Game mode → required data source file pattern (from .clinerules rule #11) */
const MODE_DATA_SOURCE_MAP: Record<string, { pattern: string; description: string }> = {
  CLASSIC: { pattern: "csvPoolData", description: "csvPoolData*.ts files" },
  LEVEL_EMOJI: { pattern: "emojiData", description: "emojiData.ts ONLY" },
  LEVEL_MIND_MATCH: { pattern: "csvPoolData", description: "csvPoolData*.ts files" },
  LEVEL_SYNONYMS: { pattern: "CSV_SYNONYMS_", description: "CSV_SYNONYMS_*.ts files ONLY" },
  LEVEL_THEME: { pattern: "csvThemeData", description: "csvThemeData*.ts files ONLY" },
  LEVEL_EXPANSION: { pattern: "csvPoolData", description: "csvPoolData*.ts files" },
  LEVEL_FILTER: { pattern: "csvPoolData", description: "csvPoolData*.ts files" },
  LEVEL_GROUP: { pattern: "csvPoolData", description: "csvPoolData*.ts files" },
};

async function handleValidateDataPipeline(args: Record<string, unknown>): Promise<string> {
  const scope = String(args.scope || "all");
  const runAll = scope === "all";
  const issues: string[] = [];
  const warnings: string[] = [];
  const passes: string[] = [];

  // ── Storage Schema Validation ──
  if (runAll || scope === "storage") {
    // Read storage.ts to extract all localStorage usage
    const storagePath = join(SERVICES_DIR, "storage.ts");
    if (existsSync(storagePath)) {
      const storageContent = readFileSync(storagePath, "utf-8");
      const usedKeys = new Set<string>();

      // Extract all localStorage.getItem('...') and .setItem('...') calls
      const keyRegex = /localStorage\.(?:get|set)Item\s*\(\s*['"]([^'"]+)['"]/g;
      let match;
      while ((match = keyRegex.exec(storageContent)) !== null) {
        usedKeys.add(match[1]);
      }

      // Also check STORAGE_KEYS object for defined but possibly unused keys
      const storKeysMatch = storageContent.match(/STORAGE_KEYS\s*=\s*\{([^}]+)\}/s);
      if (storKeysMatch) {
        const defBlock = storKeysMatch[1];
        const definedKeyRegex = /(\w+)\s*:\s*['"]([^'"]+)['"]/g;
        while ((match = definedKeyRegex.exec(defBlock)) !== null) {
          const keyName = match[1];
          const keyValue = match[2];
          if (!usedKeys.has(keyValue)) {
            warnings.push(`STORAGE_KEYS.${keyName} = "${keyValue}" is defined but never read/written in storage.ts getItem/setItem calls.`);
          }
        }
      }

      // Check App.tsx for additional localStorage usage
      const appPath = join(PROJECT_ROOT, "App.tsx");
      if (existsSync(appPath)) {
        const appContent = readFileSync(appPath, "utf-8");
        const appKeyRegex = /localStorage\.(?:get|set)Item\s*\(\s*['"]([^'"]+)['"]/g;
        while ((match = appKeyRegex.exec(appContent)) !== null) {
          usedKeys.add(match[1]);
        }
      }

      // Check for keys used but not in KNOWN_STORAGE_KEYS
      for (const key of usedKeys) {
        if (!KNOWN_STORAGE_KEYS.has(key)) {
          warnings.push(`localStorage key "${key}" is in use but not documented in KNOWN_STORAGE_KEYS. Consider adding it.`);
        }
      }

      if (usedKeys.size > 0) {
        passes.push(`✅ Storage: ${usedKeys.size} localStorage keys in active use.`);
      }

      // Verify no known keys are orphaned
      for (const knownKey of KNOWN_STORAGE_KEYS) {
        if (!usedKeys.has(knownKey)) {
          // Some keys like 'wpm_expansion_level_*' might be used dynamically
          if (knownKey.includes("_level_")) continue;
          warnings.push(`Known storage key "${knownKey}" is not found in any getItem/setItem call. It may be orphaned or used via dynamic key construction.`);
        }
      }
    } else {
      issues.push("❌ Storage: storage.ts not found in services/");
    }
  }

  // ── Game Mode → Data Source Mapping Validation ──
  if (runAll || scope === "mode-mappings") {
    // Read the App.tsx renderContent switch to verify mode→data resolving
    const appPath = join(PROJECT_ROOT, "App.tsx");
    if (existsSync(appPath)) {
      const appContent = readFileSync(appPath, "utf-8");

      for (const [mode, expected] of Object.entries(MODE_DATA_SOURCE_MAP)) {
        // Look for the mode's data loading pattern
        const modeSection = appContent.match(new RegExp(`case\\s+GameMode\\.${mode}\\s*:`, "i"));
        if (!modeSection) {
          // Some modes like LEVEL_FILTER, LEVEL_GROUP
          // may fall under a default case or be handled differently
          if (!["LEVEL_FILTER", "LEVEL_GROUP"].includes(mode)) {
            warnings.push(`Mode mapping: ${mode} not found in App.tsx renderContent switch. It may be handled by a default case.`);
          }
          continue;
        }

        // Check if the expected data source exists
        const matchingFiles = readdirSync(SERVICES_DIR).filter(
          (f) => f.startsWith(expected.pattern) && !f.endsWith(".csv") && !f.endsWith(".md")
        );

        if (matchingFiles.length === 0) {
          issues.push(`❌ Mode mapping: ${mode} requires ${expected.description}, but no matching files found in services/.`);
        } else {
          passes.push(`✅ ${mode}: Data source verified — ${matchingFiles.length} file(s) matching '${expected.pattern}'.`);
        }
      }

      // Verify rule #11 compliance: modes using wrong data sources
      // THEMED must use csvThemeData only
      const themedInApp = appContent.match(/GameMode\.LEVEL_THEME/g);
      if (themedInApp) {
        const themedSection = appContent.match(/LEVEL_THEME[^}]*?csvTheme/i);
        if (!themedSection) {
          warnings.push(`⚠️ Rule #11: THEMED level may not be using csvThemeData*.ts. Verify data loading in App.tsx.`);
        }
      }

      // EMOJI must use emojiData only
      const emojiInApp = appContent.match(/GameMode\.LEVEL_EMOJI/g);
      if (emojiInApp) {
        const emojiSection = appContent.match(/LEVEL_EMOJI[^}]*?emoji/i);
        if (!emojiSection) {
          warnings.push(`⚠️ Rule #11: EMOJI level may not be using emojiData.ts. Verify data loading in App.tsx.`);
        }
      }

      // SYNONYMS must use CSV_SYNONYMS_*.ts
      const synInApp = appContent.match(/GameMode\.LEVEL_SYNONYMS/g);
      if (synInApp) {
        const synSection = appContent.match(/LEVEL_SYNONYMS[^}]*?synonym/i);
        if (!synSection) {
          warnings.push(`⚠️ Rule #11: SYNONYMS level may not be using CSV_SYNONYMS_*.ts. Verify data loading in App.tsx.`);
        }
      }
    }
  }

  // ── CSV Format Spec Validation ──
  if (runAll || scope === "csv-format") {
    const allData = loadAllCSVData();
    let totalRowsChecked = 0;
    let formatViolations = 0;

    for (const { rows, fileName } of allData) {
      for (const row of rows) {
        totalRowsChecked++;

        // 13-char max per word (rule from .clinerules)
        for (const word of row.words) {
          if (word.length > 13) {
            formatViolations++;
            warnings.push(`CSV format: "${word}" in ${fileName} (${row.name}) exceeds 13-character limit (${word.length} chars).`);
          }
        }

        // Word-definition pairing: should have equal counts
        if (row.definitions.length > 0 && row.words.length !== row.definitions.length) {
          formatViolations++;
          warnings.push(`CSV format: ${fileName} - "${row.name}" has ${row.words.length} words but ${row.definitions.length} definitions (mismatch).`);
        }

        // Difficulty should be 1, 3, or 5
        if (![1, 3, 5].includes(row.difficulty)) {
          formatViolations++;
          warnings.push(`CSV format: ${fileName} - "${row.name}" has difficulty ${row.difficulty} (expected 1, 3, or 5).`);
        }

        // broadCategory should be a known value
        const validCategories = [
          "Nature", "Animals", "Astronomy", "Food", "History", "Geography",
          "Religion", "Technology", "Science", "Music", "Literature", "Movies",
          "Television", "Economics", "Politics", "Lifestyle", "Gaming", "Cars",
          "Sports", "Art", "Mythology", "CAT21", "Unknown",
        ];
        if (row.broadCategory && !validCategories.includes(row.broadCategory)) {
          warnings.push(`CSV format: ${fileName} - "${row.name}" has unknown broadCategory "${row.broadCategory}".`);
        }
      }
    }

    if (formatViolations === 0) {
      passes.push(`✅ CSV format: ${totalRowsChecked} rows checked — no format violations.`);
    } else {
      issues.push(`❌ CSV format: ${formatViolations} format violations across ${totalRowsChecked} rows.`);
    }
  }

  // ── Word Tile Uniqueness ──
  if (runAll || scope === "word-uniqueness") {
    const allData = loadAllCSVData();
    const wordMap = new Map<string, string[]>();

    for (const { rows, fileName } of allData) {
      for (const row of rows) {
        for (const word of row.words) {
          const cleanWord = word.trim().toLowerCase();
          if (!wordMap.has(cleanWord)) {
            wordMap.set(cleanWord, []);
          }
          wordMap.get(cleanWord)!.push(`${row.name} (${fileName})`);
        }
      }
    }

    const duplicates = Array.from(wordMap.entries())
      .filter(([, sources]) => sources.length > 1)
      .sort((a, b) => b[1].length - a[1].length);

    if (duplicates.length === 0) {
      passes.push(`✅ Word uniqueness: All ${wordMap.size} words are unique across categories.`);
    } else {
      warnings.push(`⚠️ Word uniqueness: ${duplicates.length} word(s) appear in multiple categories (rule #8).`);
      for (const [word, sources] of duplicates.slice(0, 10)) {
        warnings.push(`  "${word}" appears in ${sources.length} categories: ${sources.join(", ")}`);
      }
      if (duplicates.length > 10) {
        warnings.push(`  ... and ${duplicates.length - 10} more duplicate words.`);
      }
    }
  }

  // ── Build output ──
  let output = `## 🔍 Data Pipeline Integrity Validation\n\n`;
  output += `**Scope:** ${scope}\n\n`;

  if (passes.length > 0) {
    output += `### ✅ Passes\n`;
    for (const p of passes) {
      output += `- ${p}\n`;
    }
    output += "\n";
  }

  if (issues.length > 0) {
    output += `### ❌ Issues (${issues.length})\n`;
    for (const i of issues) {
      output += `- ${i}\n`;
    }
    output += "\n";
  }

  if (warnings.length > 0) {
    output += `### ⚠️ Warnings (${warnings.length})\n`;
    for (const w of warnings) {
      output += `- ${w}\n`;
    }
    output += "\n";
  }

  if (issues.length === 0 && warnings.length === 0) {
    output += "✅ **All data pipeline checks passed!** No issues detected.\n";
  }

  return output;
}

// ═══════════════════════════════════════════════════════════════
// Workflow 3 Implementation: Level Coverage Auditor
// ═══════════════════════════════════════════════════════════════

interface CoverageGap {
  mode: string;
  component: string;
  status: "ok" | "missing-file" | "stub-incomplete" | "unverified";
  dataSource: string;
  dataSourceOk: boolean;
  notes: string;
  priority: "High" | "Medium" | "Low";
}

async function handleAuditLevelCoverage(args: Record<string, unknown>): Promise<string> {
  const outputRoadmap = args.outputRoadmap === true || args.outputRoadmap === "true";
  const gaps: CoverageGap[] = [];

  // ── Read DETERMINISTIC_LEVEL_SEQUENCE via parseLevelSequence ──
  const parsed = parseLevelSequence();
  if (!parsed) {
    return "❌ Could not find DETERMINISTIC_LEVEL_SEQUENCE or BASE_CYCLE in types.ts";
  }

  const uniqueModes = [...new Set(parsed.modes)];

  // ── Component file registry ──
  const componentFiles = existsSync(COMPONENTS_DIR)
    ? readdirSync(COMPONENTS_DIR).filter((f) => f.endsWith(".tsx") && !f.endsWith(".d.ts"))
    : [];

  // ── Known component-to-mode mapping ──
  const modeComponentMap: Record<string, { file: string; alternative: string }> = {
    CLASSIC: { file: "Level1_Standard.tsx", alternative: "Level1_Standard.tsx" },
    LEVEL_EMOJI: { file: "Level1_Emoji.tsx", alternative: "Level1_Emoji.tsx" },
    LEVEL_MIND_MATCH: { file: "Level5_Group.tsx", alternative: "Level5_Group.tsx" },
    LEVEL_SYNONYMS: { file: "Level1_Standard.tsx", alternative: "Level1_Standard (Synonyms variant)" },
    LEVEL_THEME: { file: "Level_Themed.tsx", alternative: "Level_Themed.tsx" },
    LEVEL_EXPANSION: { file: "Level7_Expansion.tsx", alternative: "Level7_Expansion_Easy.tsx / Level7_Expansion_Medium.tsx / Level7_Expansion.tsx" },
  LEVEL_FILTER: { file: "Level2_Filter.tsx", alternative: "Level2_Filter.tsx" },
  LEVEL_GROUP: { file: "Level5_Group.tsx", alternative: "Level5_Group.tsx" },
  };

  // ── Data source registry ──
  const serviceFiles = existsSync(SERVICES_DIR)
    ? readdirSync(SERVICES_DIR).filter((f) => f.endsWith(".ts") || f.endsWith(".csv"))
    : [];

  // ── Stub detection patterns ──
  const STUB_PATTERNS = [
    /\/\/\s*stub/i,
    /\/\/\s*TODO:\s*implement/i,
    /\/\/\s*placeholder/i,
    /return\s+null\s*;?\s*\}/i,
    /return\s*\(\s*<div[^>]*>\s*<\/div>\s*\)\s*;?\s*\}/i,
    /return\s*\(\s*<div[^>]*>\s*Stub/i,
  ];

  // ── Audit each mode ──
  for (const mode of uniqueModes) {
    const mapping = modeComponentMap[mode];
    if (!mapping) {
      gaps.push({
        mode,
        component: "unknown",
        status: "missing-file",
        dataSource: "unknown",
        dataSourceOk: false,
        notes: "No component mapping found for this game mode.",
        priority: "High",
      });
      continue;
    }

    const componentExists = componentFiles.includes(mapping.file);
    const dataPattern = MODE_DATA_SOURCE_MAP[mode]?.pattern;
    const dataFilesExist = dataPattern
      ? serviceFiles.some((f) => f.startsWith(dataPattern))
      : false;

    // Check if component is a stub
    let isStub = false;
    if (componentExists) {
      try {
        const content = readFileSync(join(COMPONENTS_DIR, mapping.file), "utf-8");
        isStub = STUB_PATTERNS.some((pattern) => pattern.test(content));

        // Check for minimal component (less than 30 lines)
        const lineCount = content.split("\n").filter((l) => l.trim()).length;
        if (lineCount < 30) {
          isStub = true;
        }
      } catch {
        // can't read, treat as unverified
      }
    }

    const status = !componentExists
      ? "missing-file"
      : isStub
      ? "stub-incomplete"
      : "ok";

    let priority: "High" | "Medium" | "Low" = "Low";
    if (status === "missing-file") priority = "High";
    else if (status === "stub-incomplete") priority = "Medium";

    gaps.push({
      mode,
      component: mapping.file,
      status,
      dataSource: dataPattern || "unknown",
      dataSourceOk: dataFilesExist,
      notes: isStub ? "Component appears to be a stub or minimal implementation." : "",
      priority,
    });
  }

  // ── Also check components that exist but aren't mapped to any mode ──
  const mappedFiles = new Set(Object.values(modeComponentMap).map((m) => m.file));
  for (const file of componentFiles) {
    if (file.startsWith("Level") && !mappedFiles.has(file)) {
      gaps.push({
        mode: "UNKNOWN",
        component: file,
        status: "unverified",
        dataSource: "unknown",
        dataSourceOk: false,
        notes: `Component ${file} exists but is not mapped to any game mode in the auditor. It may be unused or a legacy variant.`,
        priority: "Low",
      });
    }
  }

  // ── Build output ──
  let output = `## 🔍 Level Coverage Audit\n\n`;
  output += `### 📊 Summary\n`;
  output += `| Status | Count |\n`;
  output += `|--------|-------|\n`;
  output += `| ✅ OK | ${gaps.filter((g) => g.status === "ok").length} |\n`;
  output += `| 📝 Stub/Incomplete | ${gaps.filter((g) => g.status === "stub-incomplete").length} |\n`;
  output += `| ❌ Missing | ${gaps.filter((g) => g.status === "missing-file").length} |\n`;
  output += `| ❓ Unverified | ${gaps.filter((g) => g.status === "unverified").length} |\n`;
  output += `| **Total modes** | **${uniqueModes.length}** |\n\n`;

  // Detail by priority
  for (const prio of ["High", "Medium", "Low"] as const) {
    const items = gaps.filter((g) => g.priority === prio);
    if (items.length === 0) continue;

    output += `### ${prio === "High" ? "🔴" : prio === "Medium" ? "🟡" : "🟢"} ${prio} Priority\n`;
    for (const gap of items) {
      const statusIcon = gap.status === "ok" ? "✅" : gap.status === "stub-incomplete" ? "📝" : gap.status === "missing-file" ? "❌" : "❓";
      output += `- ${statusIcon} **${gap.mode}** → \`${gap.component}\`\n`;
      output += `  - Data source: \`${gap.dataSource}\` (${gap.dataSourceOk ? "✅ found" : "❌ missing"})\n`;
      if (gap.notes) output += `  - ${gap.notes}\n`;
    }
    output += "\n";
  }

  // Data source existence summary
  output += `### Data Source Files Match\n`;
  const dataSourceStatuses = new Set(gaps.map((g) => g.dataSource));
  for (const ds of dataSourceStatuses) {
    if (ds === "unknown") continue;
    const matches = serviceFiles.filter((f) => f.startsWith(ds));
    output += `- \`${ds}*\` → ${matches.length} file(s): ${matches.join(", ") || "none"}\n`;
  }
  output += "\n";

  // Generate PORTING_ROADMAP.md
  if (outputRoadmap) {
    const roadmap: string[] = [];
    roadmap.push("# Porting Roadmap — Level Coverage Audit");
    roadmap.push("");
    roadmap.push(`> Generated: ${new Date().toISOString()}`);
    roadmap.push(`> Total game modes in sequence: ${uniqueModes.length}`);
    roadmap.push(`> Total component files: ${componentFiles.length}`);
    roadmap.push("");
    roadmap.push("## Status Summary");
    roadmap.push("");
    roadmap.push("| Mode | Component | Status | Data Source | Notes |");
    roadmap.push("|------|-----------|--------|-------------|-------|");
    for (const gap of gaps) {
      const statusLabel = gap.status === "ok" ? "✅ OK" : gap.status === "stub-incomplete" ? "📝 Stub" : gap.status === "missing-file" ? "❌ Missing" : "❓ Unverified";
      roadmap.push(`| ${gap.mode} | \`${gap.component}\` | ${statusLabel} | \`${gap.dataSource}\` | ${gap.notes} |`);
    }
    roadmap.push("");
    roadmap.push("## Priority Breakdown");
    roadmap.push("");
    for (const prio of ["High", "Medium", "Low"] as const) {
      const items = gaps.filter((g) => g.priority === prio);
      if (items.length === 0) continue;
      roadmap.push(`### ${prio} Priority`);
      for (const gap of items) {
        roadmap.push(`- [ ] **${gap.mode}** — ${gap.component} — ${gap.notes || "Needs implementation"}`);
      }
      roadmap.push("");
    }

    const roadmapPath = join(PROJECT_ROOT, "PORTING_ROADMAP.md");
    writeFileSync(roadmapPath, roadmap.join("\n"), "utf-8");
    output += `📄 **PORTING_ROADMAP.md written** to \`${roadmapPath}\`\n`;
  } else {
    output += `💡 Tip: Run with \`outputRoadmap: true\` to generate \`PORTING_ROADMAP.md\`.\n`;
  }

  return output;
}

// ============================================================
// Server Setup
// ============================================================

const server = new Server(
  {
    name: "word-pairing-mcp-server",
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
    SEARCH_GAME_CONTENT_TOOL,
    VALIDATE_MANIFEST_TOOL,
    ANALYZE_LEVEL_PROGRESSION_TOOL,
    AUDIT_CSV_CONSISTENCY_TOOL,
    FIND_UNUSED_CATEGORIES_TOOL,
    AUDIT_COMPONENT_CONVENTIONS_TOOL,
    VALIDATE_DATA_PIPELINE_TOOL,
    AUDIT_LEVEL_COVERAGE_TOOL,
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "search_game_content":
        return {
          content: [{ type: "text", text: await handleSearchGameContent(args || {}) }],
        };

      case "validate_manifest":
        return {
          content: [{ type: "text", text: await handleValidateManifest() }],
        };

      case "analyze_level_progression":
        return {
          content: [{ type: "text", text: await handleAnalyzeLevelProgression(Number(args?.numLevels) || 100) }],
        };

      case "audit_csv_consistency":
        return {
          content: [{ type: "text", text: await handleAuditCSVConsistency() }],
        };

      case "find_unused_categories":
        return {
          content: [{ type: "text", text: await handleFindUnusedCategories(args || {}) }],
        };

      case "audit_component_conventions":
        return {
          content: [{ type: "text", text: await handleAuditComponentConventions(args || {}) }],
        };

      case "validate_data_pipeline":
        return {
          content: [{ type: "text", text: await handleValidateDataPipeline(args || {}) }],
        };

      case "audit_level_coverage":
        return {
          content: [{ type: "text", text: await handleAuditLevelCoverage(args || {}) }],
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
  console.error("Word Pairing MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
