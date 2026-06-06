#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { ListToolsRequestSchema, CallToolRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { readFileSync, readdirSync, existsSync } from "fs";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";

// ============================================================
// Configuration
// ============================================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = resolve(join(__dirname, ".."));
const SERVICES_DIR = join(PROJECT_ROOT, "services");
const COMPONENTS_DIR = join(PROJECT_ROOT, "components");

// ============================================================
// CSV Parsing
// ============================================================

function parseCSVLine(line) {
  const result = [];
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

function parseCSV(csv) {
  const lines = csv.trim().split("\n");
  if (lines.length < 2) return [];
  const header = lines[0].toLowerCase();
  const isThemeFormat = header.includes("theme,");
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line.startsWith("//") || line.startsWith("/*")) continue;
    try {
      const parsed = parseCSVLine(line);
      if (parsed.length < 5) continue;
      if (isThemeFormat) {
        const id = parsed[0];
        const name = parsed[3];
        const catDict = parsed[4] || "";
        const wordDefs = parsed.slice(5);
        const words = [];
        const definitions = [];
        for (let j = 0; j < wordDefs.length; j += 2) {
          if (wordDefs[j]) words.push(wordDefs[j].replace(/^"|"$/g, ""));
          if (wordDefs[j + 1]) definitions.push(wordDefs[j + 1].replace(/^"|"$/g, ""));
        }
        const difficulty = parseInt(parsed[parsed.length - 2]) || 3;
        const broadCategory = (parsed[parsed.length - 1] || "Unknown").replace(/^"|"$/g, "");
        rows.push({ id, name, catDict, words, definitions, difficulty, broadCategory });
      } else {
        const id = parsed[0];
        const name = parsed[1];
        const catDict = parsed[2] || "";
        const wordDefs = parsed.slice(3);
        const words = [];
        const definitions = [];
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
    } catch (e) { /* skip */ }
  }
  return rows;
}

function loadAllCSVData() {
  const results = [];
  try {
    if (!existsSync(SERVICES_DIR)) return results;
    const files = readdirSync(SERVICES_DIR);
    const csvFiles = files.filter(f => (f.startsWith("csvPoolData") || f.startsWith("csvThemeData")) && f.endsWith(".ts"));
    for (const file of csvFiles) {
      try {
        const content = readFileSync(join(SERVICES_DIR, file), "utf-8");
        const match = content.match(/`([\s\S]*?)`/);
        if (match) {
          const rows = parseCSV(match[1]);
          if (rows.length > 0) results.push({ rows, fileName: file });
        }
      } catch (e) { /* skip */ }
    }
  } catch (e) { /* skip */ }
  return results;
}

function getAllBroadCategories() {
  const allData = loadAllCSVData();
  const categories = new Set();
  for (const { rows } of allData) {
    for (const row of rows) {
      if (row.broadCategory && row.broadCategory !== "CAT21") categories.add(row.broadCategory);
    }
  }
  return Array.from(categories).sort();
}

// ============================================================
// Tool Handlers
// ============================================================

function handleSearchGameContent(args) {
  const query = String(args.query || "").toLowerCase();
  const field = String(args.field || "all");
  const broadCategoryFilter = args.broadCategory ? String(args.broadCategory) : null;
  const maxResults = Number(args.maxResults) || 50;
  if (!query) return "Please provide a search query.";
  const allData = loadAllCSVData();
  const results = [];
  for (const { rows, fileName } of allData) {
    for (const row of rows) {
      if (broadCategoryFilter && row.broadCategory.toLowerCase() !== broadCategoryFilter.toLowerCase()) continue;
      const searchInAll = field === "all";
      const searchInWords = field === "words" || searchInAll;
      const searchInCategories = field === "categories" || searchInAll;
      const searchInDefinitions = field === "definitions" || searchInAll;
      if (searchInCategories && row.name.toLowerCase().includes(query)) {
        results.push({ file: fileName, category: row.name, match: row.name, type: "category" });
      }
      if (searchInWords) {
        for (const word of row.words) {
          if (word.toLowerCase().includes(query)) { results.push({ file: fileName, category: row.name, match: word, type: "word" }); break; }
        }
      }
      if (searchInDefinitions) {
        for (const def of row.definitions) {
          if (def.toLowerCase().includes(query)) { results.push({ file: fileName, category: row.name, match: def.substring(0, 100), type: "definition" }); break; }
        }
      }
    }
  }
  const limited = results.slice(0, maxResults);
  if (limited.length === 0) return `No results found for "${query}".`;
  let output = `Found ${results.length} matches for "${query}"`;
  if (broadCategoryFilter) output += ` in ${broadCategoryFilter}`;
  output += `.\n\n`;
  for (const r of limited) output += `[${r.type.toUpperCase()}] ${r.category} (${r.file}): ${r.match}\n`;
  if (results.length > maxResults) output += `\n... and ${results.length - maxResults} more results.`;
  return output;
}

function handleValidateManifest() {
  const issues = [];
  const warnings = [];
  const metadataPath = join(PROJECT_ROOT, "metadata.json");
  if (existsSync(metadataPath)) {
    try {
      const metadata = JSON.parse(readFileSync(metadataPath, "utf-8"));
      if (!metadata.name) issues.push("metadata.json is missing 'name' field.");
      if (!metadata.description) issues.push("metadata.json is missing 'description' field.");
    } catch (e) { issues.push("metadata.json is not valid JSON."); }
  } else { issues.push("metadata.json not found."); }
  const capConfigPath = join(PROJECT_ROOT, "capacitor.config.json");
  if (existsSync(capConfigPath)) {
    try {
      const capConfig = JSON.parse(readFileSync(capConfigPath, "utf-8"));
      if (!capConfig.appId) issues.push("capacitor.config.json is missing 'appId'.");
      if (!capConfig.appName) issues.push("capacitor.config.json is missing 'appName'.");
    } catch (e) { issues.push("capacitor.config.json is not valid JSON."); }
  } else { issues.push("capacitor.config.json not found."); }
  const requiredFiles = ["App.tsx", "index.tsx", "index.html", "types.ts", "vite.config.ts"];
  for (const file of requiredFiles) {
    if (!existsSync(join(PROJECT_ROOT, file))) issues.push(`Required file '${file}' not found.`);
  }
  if (!existsSync(SERVICES_DIR)) issues.push("services directory not found.");
  else {
    const csvFiles = readdirSync(SERVICES_DIR).filter(f => f.startsWith("csvPoolData") || f.startsWith("csvThemeData"));
    if (csvFiles.length === 0) warnings.push("No csvPoolData* or csvThemeData* files found.");
  }
  if (!existsSync(COMPONENTS_DIR)) issues.push("components directory not found.");
  let output = "## Manifest Validation Report\n\n";
  if (issues.length === 0 && warnings.length === 0) output += "✅ All checks passed. Project structure looks healthy!\n";
  else {
    if (issues.length > 0) { output += "### Issues (must fix):\n"; for (const issue of issues) output += `- ❌ ${issue}\n`; output += "\n"; }
    if (warnings.length > 0) { output += "### Warnings (should review):\n"; for (const warning of warnings) output += `- ⚠️ ${warning}\n`; output += "\n"; }
  }
  const allData = loadAllCSVData();
  const totalRows = allData.reduce((sum, d) => sum + d.rows.length, 0);
  output += `\n### Data Summary\n- Total CSV files: ${allData.length}\n- Total categories: ${totalRows}\n- Broad categories: ${getAllBroadCategories().join(", ")}\n`;
  return output;
}

function handleAnalyzeLevelProgression(numLevels) {
  const data = readFileSync(join(PROJECT_ROOT, "types.ts"), "utf-8");
  const match = data.match(/DETERMINISTIC_LEVEL_SEQUENCE\s*:\s*GameMode\[\]\s*=\s*\[([\s\S]*?)\]/);
  if (!match) return "Could not find DETERMINISTIC_LEVEL_SEQUENCE in types.ts";
  const modeCodes = match[1].split(",").map(s => s.trim()).filter(Boolean);
  const modeMap = { C: "CLASSIC", E: "LEVEL_EMOJI", M: "LEVEL_MIND_MATCH", S: "LEVEL_SYNONYMS", T: "LEVEL_THEMED", X: "LEVEL_EXPANSION" };
  const modeCounts = {};
  const sequence = [];
  for (const code of modeCodes) {
    const mode = modeMap[code] || code;
    modeCounts[mode] = (modeCounts[mode] || 0) + 1;
    sequence.push(mode);
  }
  const totalLevels = sequence.length;
  const analyzedCount = Math.min(numLevels, totalLevels);
  let output = `## Level Progression Analysis\n\nTotal levels defined: ${totalLevels}\nAnalyzing first ${analyzedCount} levels...\n\n### Mode Distribution:\n`;
  const analyzedModes = sequence.slice(0, analyzedCount);
  const analyzedCounts = {};
  for (const mode of analyzedModes) analyzedCounts[mode] = (analyzedCounts[mode] || 0) + 1;
  for (const [mode, count] of Object.entries(analyzedCounts).sort((a, b) => b[1] - a[1])) {
    output += `- ${mode}: ${count} (${((count / analyzedCount) * 100).toFixed(1)}%)\n`;
  }
  output += `\n### First 20 Levels:\n`;
  for (let i = 0; i < Math.min(20, analyzedCount); i++) output += `  ${String(i + 1).padStart(2)}. ${sequence[i]}\n`;
  return output;
}

function handleAuditCSVConsistency() {
  const allData = loadAllCSVData();
  const issues = [];
  const warnings = [];
  const categoryNames = new Map();
  const allWords = new Map();
  let totalRows = 0;
  for (const { rows, fileName } of allData) {
    for (const row of rows) {
      totalRows++;
      if (!categoryNames.has(row.name)) categoryNames.set(row.name, []);
      categoryNames.get(row.name).push(fileName);
      if (!row.id || row.id === "") issues.push(`${fileName}: Row has empty ID. Category: ${row.name}`);
      if (!row.name || row.name === "") issues.push(`${fileName}: Row has empty category name.`);
      if (row.words.length === 0) issues.push(`${fileName}: Category '${row.name}' has no words.`);
      if (row.words.length < 4) warnings.push(`${fileName}: Category '${row.name}' has only ${row.words.length} words.`);
      if (!row.broadCategory || row.broadCategory === "CAT21") warnings.push(`${fileName}: Category '${row.name}' has missing broad category.`);
      for (const word of row.words) {
        const cleanWord = word.trim().toLowerCase();
        if (!allWords.has(cleanWord)) allWords.set(cleanWord, []);
        allWords.get(cleanWord).push(`${row.name} (${fileName})`);
      }
    }
  }
  for (const [name, files] of categoryNames) {
    if (files.length > 1) warnings.push(`Category "${name}" appears in ${files.length} files: ${files.join(", ")}`);
  }
  const duplicateWords = Array.from(allWords.entries()).filter(([, sources]) => sources.length > 1);
  if (duplicateWords.length > 0) {
    warnings.push(`${duplicateWords.length} word(s) appear in multiple categories.`);
    for (const [word, sources] of duplicateWords.slice(0, 20)) warnings.push(`  "${word}" appears in: ${sources.join(", ")}`);
    if (duplicateWords.length > 20) warnings.push(`  ... and ${duplicateWords.length - 20} more`);
  }
  let output = `## CSV Consistency Audit\n\nTotal files: ${allData.length}\nTotal rows: ${totalRows}\n\n`;
  if (issues.length === 0 && warnings.length === 0) output += "✅ No issues found. All CSV data looks consistent!\n";
  else {
    if (issues.length > 0) { output += `### Issues (${issues.length}):\n`; for (const issue of issues) output += `- ❌ ${issue}\n`; output += "\n"; }
    if (warnings.length > 0) { output += `### Warnings (${warnings.length}):\n`; for (const warning of warnings) output += `- ⚠️ ${warning}\n`; output += "\n"; }
  }
  output += `### Per-File Statistics\n`;
  for (const { rows, fileName } of allData) output += `- ${fileName}: ${rows.length} categories\n`;
  return output;
}

function handleFindUnusedCategories(args) {
  const minDifficulty = args.minDifficulty ? Number(args.minDifficulty) : 0;
  const allData = loadAllCSVData();
  const broadCategoryCounts = {};
  for (const { rows } of allData) {
    for (const row of rows) {
      if (minDifficulty > 0 && row.difficulty < minDifficulty) continue;
      const bc = row.broadCategory || "Unknown";
      if (!broadCategoryCounts[bc]) broadCategoryCounts[bc] = { count: 0, examples: [] };
      broadCategoryCounts[bc].count++;
      if (broadCategoryCounts[bc].examples.length < 5) broadCategoryCounts[bc].examples.push(row.name);
    }
  }
  const sorted = Object.entries(broadCategoryCounts).sort((a, b) => a[1].count - b[1].count);
  let output = "## Category Distribution by Broad Category\n\n";
  for (const [bc, data] of sorted) {
    output += `### ${bc} (${data.count} categories)\n`;
    if (data.count <= 3) output += `⚠️ Low representation! Consider adding more ${bc} categories.\n`;
    for (const example of data.examples) output += `  - ${example}\n`;
    output += "\n";
  }
  const lowest = sorted.filter(([, data]) => data.count <= 3);
  if (lowest.length > 0) {
    output += `### ⚠️ Underrepresented Categories (≤ 3 entries)\n`;
    for (const [bc] of lowest) output += `- ${bc}: Only ${broadCategoryCounts[bc].count} categories available\n`;
  }
  return output;
}

// ============================================================
// Server Setup
// ============================================================

const server = new Server(
  { name: "word-pairing-mcp-server", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

const TOOLS = [
  {
    name: "search_game_content",
    description: "Search across all CSV data files for matching words, categories, or definitions",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Search term to find in CSV data" },
        field: { type: "string", description: "Field to search in", enum: ["all", "words", "categories", "definitions"] },
        broadCategory: { type: "string", description: "Filter by broad category (e.g., Nature, Technology)" },
        maxResults: { type: "number", description: "Max results (default: 50)", default: 50 },
      },
      required: ["query"],
    },
  },
  {
    name: "validate_manifest",
    description: "Validate metadata.json and project structure for consistency",
    inputSchema: { type: "object", properties: {}, required: [] },
  },
  {
    name: "analyze_level_progression",
    description: "Analyze the deterministic level sequence for mode distribution and progression",
    inputSchema: {
      type: "object",
      properties: { numLevels: { type: "number", description: "Number of levels to analyze (default: 100)", default: 100 } },
      required: [],
    },
  },
  {
    name: "audit_csv_consistency",
    description: "Check for duplicate entries, missing fields, or structural issues in CSV data files",
    inputSchema: { type: "object", properties: {}, required: [] },
  },
  {
    name: "find_unused_categories",
    description: "Find underrepresented broad categories in the CSV data",
    inputSchema: {
      type: "object",
      properties: { minDifficulty: { type: "number", description: "Minimum difficulty filter (1, 3, 5)" } },
      required: [],
    },
  },
];

server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: TOOLS }));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  try {
    let result;
    switch (name) {
      case "search_game_content": result = handleSearchGameContent(args || {}); break;
      case "validate_manifest": result = handleValidateManifest(); break;
      case "analyze_level_progression": result = handleAnalyzeLevelProgression(Number(args?.numLevels) || 100); break;
      case "audit_csv_consistency": result = handleAuditCSVConsistency(); break;
      case "find_unused_categories": result = handleFindUnusedCategories(args || {}); break;
      default: throw new Error(`Unknown tool: ${name}`);
    }
    return { content: [{ type: "text", text: result }] };
  } catch (error) {
    return { content: [{ type: "text", text: `Error: ${error.message}` }], isError: true };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Word Pairing MCP Server running on stdio");
}

main().catch((error) => { console.error("Server error:", error); process.exit(1); });
