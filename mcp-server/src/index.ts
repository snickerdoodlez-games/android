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

async function handleAnalyzeLevelProgression(numLevels: number): Promise<string> {
  const sequenceStr = readFileSync(join(PROJECT_ROOT, "types.ts"), "utf-8");
  const match = sequenceStr.match(/DETERMINISTIC_LEVEL_SEQUENCE\s*:\s*GameMode\[\]\s*=\s*\[([\s\S]*?)\]/);
  
  if (!match) {
    return "Could not find DETERMINISTIC_LEVEL_SEQUENCE in types.ts";
  }

  const enumValues = match[1];
  const modeCodes = enumValues.split(",").map((s) => s.trim()).filter(Boolean);

  const modeMap: Record<string, string> = {
    "C": "CLASSIC",
    "E": "LEVEL_EMOJI",
    "M": "LEVEL_MIND_MATCH",
    "S": "LEVEL_SYNONYMS",
    "T": "LEVEL_THEMED",
    "X": "LEVEL_EXPANSION",
  };

  const modeCounts: Record<string, number> = {};
  const sequence: string[] = [];

  for (const code of modeCodes) {
    const mode = modeMap[code] || code;
    modeCounts[mode] = (modeCounts[mode] || 0) + 1;
    sequence.push(mode);
  }

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
