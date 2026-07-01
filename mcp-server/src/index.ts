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

interface EmojiRow {
  category: string;
  emojis: string[];
  descs: string[];
}

interface SemanticIssue {
  file: string;
  category: string;
  word: string;
  issue: string;
  severity: "error" | "warning" | "info";
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
 * Load emoji data from emojiData.csv.
 * Format: Category,EmojiTotal,Emoji1,EmojiDesc1,...,Emoji8,EmojiDesc8,
 */
function loadEmojiData(): EmojiRow[] {
  const results: EmojiRow[] = [];

  try {
    const csvPath = join(SERVICES_DIR, "emojiData.csv");
    if (!existsSync(csvPath)) return results;

    const raw = readFileSync(csvPath, "utf-8");
    const lines = raw.trim().split("\n");
    if (lines.length < 2) return results;

    // Skip header
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      try {
        const fields = parseCSVLine(line);
        if (fields.length < 4) continue;

        const category = fields[0]?.trim() || "";
        // fields[1] is EmojiTotal (concatenated emojis) — skip
        const emojis: string[] = [];
        const descs: string[] = [];

        for (let j = 2; j + 1 < fields.length; j += 2) {
          const emoji = fields[j]?.trim() || "";
          const desc = fields[j + 1]?.trim() || "";
          if (emoji.length > 0 && desc.length > 0) {
            emojis.push(emoji);
            descs.push(desc);
          }
        }

        if (category && emojis.length >= 3) {
          results.push({ category, emojis, descs });
        }
      } catch {
        // skip malformed
      }
    }
  } catch {
    // file not found
  }

  return results;
}

/**
 * Load synonym data from CSV_SYNONYMS_*.ts files.
 */
function loadSynonymData(): { rows: CSVRow[]; fileName: string }[] {
  const results: { rows: CSVRow[]; fileName: string }[] = [];

  try {
    if (!existsSync(SERVICES_DIR)) return results;

    const files = readdirSync(SERVICES_DIR);
    const synFiles = files.filter((f) => f.startsWith("CSV_SYNONYMS_") && f.endsWith(".ts"));

    for (const file of synFiles) {
      try {
        const filePath = join(SERVICES_DIR, file);
        const content = readFileSync(filePath, "utf-8");
        const match = content.match(/`([\s\S]*?)`/);
        if (match) {
          const rows = parseCSV(match[1]);
          if (rows.length > 0) {
            results.push({ rows, fileName: file });
          }
        }
      } catch {
        // skip
      }
    }
  } catch {
    // directory doesn't exist
  }

  return results;
}

/**
 * Load expansion test data from csvExpansionData.csv.
 */
function loadExpansionTestData(): CSVRow[] {
  const results: CSVRow[] = [];

  try {
    const csvPath = join(SERVICES_DIR, "csvExpansionData.csv");
    if (!existsSync(csvPath)) return results;

    const raw = readFileSync(csvPath, "utf-8");
    // This uses the same parseCSV function which handles pool format
    results.push(...parseCSV(raw));
  } catch {
    // file not found
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
// Semantic Coherence: Category-Word Relationship Knowledge Base
// ============================================================

/**
 * Words that are known to appear in specific category contexts.
 * Maps normalized word → set of category keywords it's valid with.
 * Empty or missing means the word passes validation for any category.
 */
const KNOWN_VALID_ASSOCIATIONS: Record<string, string[]> = {
  // Clothes-related words valid with clothing categories
  "jeans": ["pants", "shorts", "clothes", "clothing", "bottom", "denim", "garment", "laundry", "laundering", "fabric", "textile"],
  "shorts": ["pants", "clothes", "clothing", "bottom", "summer", "garment"],
  "t-shirt": ["clothes", "clothing", "shirt", "top", "garment", "fabric", "textile"],
  "dress": ["clothes", "clothing", "skirt", "garment", "fashion"],
  "coat": ["clothes", "clothing", "outerwear", "jacket", "winter", "garment"],
  "socks": ["clothes", "clothing", "footwear", "sock", "stocking", "garment", "laundry", "laundering"],
  "athletic shoe": ["footwear", "shoes", "clothes", "clothing", "sneaker", "sports"],
  "scarf": ["clothes", "clothing", "winter", "outerwear", "accessory", "glove", "mitten"],
  "gloves": ["clothes", "clothing", "winter", "outerwear", "accessory", "glove", "mitten"],
  "necklace": ["jewelry", "accessory", "clothes", "clothing"],
  "ring": ["jewelry", "accessory", "gem", "diamond", "precious"],
  "crown": ["royalty", "jewelry", "king", "queen", "accessory", "head"],
  "gem stone": ["jewelry", "gem", "diamond", "mining", "geology", "precious"],
  "hat": ["clothes", "clothing", "headwear", "accessory", "outerwear"],
  "belt": ["clothes", "clothing", "accessory", "pants"],
  "tie": ["clothes", "clothing", "accessory", "formal", "neck"],
  "shoe": ["footwear", "clothes", "clothing", "shoes"],
  "boot": ["footwear", "clothes", "clothing", "shoes"],
  "sandal": ["footwear", "clothes", "clothing", "shoes", "summer"],
  "high-heeled shoe": ["footwear", "clothes", "clothing", "shoes", "dance"],
  "ballet shoes": ["dance", "footwear", "clothes", "clothing", "shoes"],
  "dancer": ["dance", "dancing", "performance"],
  "man dancing": ["dance", "dancing"],
  "briefcase": ["office", "business", "work", "bag", "luggage", "travel", "suitcase"],
  "luggage": ["travel", "bag", "suitcase", "trip", "transportation"],
  "suitcase": ["travel", "luggage", "bag", "trip"],
  "backpack": ["camping", "school", "bag", "travel", "hiking"],
  "purse": ["bag", "accessory", "fashion", "clothes"],
  "wallet": ["money", "bag", "accessory", "finance"],
  // Food-related
  "bread": ["food", "bakery", "grain", "crop", "wheat"],
  "croissant": ["food", "bakery", "breakfast", "pastry"],
  "baguette": ["food", "bakery", "bread", "french"],
  "pretzel": ["food", "bakery", "bread", "snack"],
  "bagel": ["food", "bakery", "bread", "breakfast"],
  "cake": ["food", "bakery", "dessert", "celebration", "birthday"],
  "doughnut": ["food", "bakery", "dessert", "donut"],
  "cookie": ["food", "bakery", "dessert", "sweets", "candy"],
  "pie": ["food", "dessert", "bakery", "baked"],
  "pancake": ["food", "breakfast", "bakery"],
  "waffle": ["food", "breakfast", "bakery"],
  "egg": ["food", "breakfast", "dairy", "baking", "farm"],
  "milk": ["food", "drink", "dairy", "beverage"],
  "cheese": ["food", "dairy"],
  "butter": ["food", "dairy", "baking"],
  "bacon": ["food", "meat", "breakfast", "diner"],
  "meat": ["food", "butcher", "dinner"],
  "chicken": ["food", "meat", "farm", "animal", "bird"],
  "hamburger": ["food", "fast food", "burger", "beef"],
  "french fries": ["food", "fast food", "potato", "side"],
  "pizza": ["food", "fast food", "italian"],
  "taco": ["food", "fast food", "mexican"],
  "hot dog": ["food", "fast food", "americana"],
  "coffee": ["drink", "beverage", "hot", "cafe", "breakfast"],
  "tea": ["drink", "beverage", "hot"],
  "wine": ["drink", "beverage", "alcohol", "grape"],
  "beer": ["drink", "beverage", "alcohol"],
  "cocktail": ["drink", "beverage", "alcohol", "mixed"],
  "juice": ["drink", "beverage", "fruit"],
  "ice": ["cold", "drink", "beverage", "winter", "frozen"],
  // Tech
  "computer": ["technology", "hardware", "software", "office", "gaming"],
  "laptop": ["technology", "hardware", "computer", "office"],
  "phone": ["technology", "communication", "mobile"],
  "keyboard": ["technology", "hardware", "computer", "typing", "writing"],
  "mouse": ["technology", "hardware", "computer"],
  "monitor": ["technology", "hardware", "computer", "display"],
  "printer": ["technology", "office", "hardware"],
  "floppy disk": ["technology", "hardware", "storage", "vintage", "computer"],
  "optical disc": ["technology", "hardware", "storage", "media"],
  // Sports
  "soccer ball": ["sports", "football", "ball", "game"],
  "basketball": ["sports", "ball", "basketball", "game"],
  "football": ["sports", "american football", "ball", "game"],
  "tennis": ["sports", "ball", "racquet", "game"],
  "baseball": ["sports", "ball", "bat", "game", "americana"],
  "hockey": ["sports", "ice", "stick", "game"],
  "golf": ["sports", "ball", "club", "game"],
  "swimmer": ["sports", "water", "swimming", "pool"],
  "surfer": ["sports", "water", "beach", "surfing"],
  "skier": ["sports", "winter", "snow", "skiing"],
  "snowboarder": ["sports", "winter", "snow", "snowboarding"],
  "ice skate": ["sports", "winter", "ice", "skating"],
  "runner": ["sports", "fitness", "running", "exercise"],
  "cyclist": ["sports", "fitness", "bike", "cycling", "exercise"],
  "weight lifter": ["sports", "fitness", "exercise", "gym"],
  "boxing glove": ["sports", "combat", "wrestling", "boxing", "fight"],
  // Nature
  "tree": ["nature", "plant", "forest", "wood", "landscape"],
  "flower": ["nature", "plant", "garden", "spring", "beauty"],
  "mushroom": ["nature", "fungi", "plant", "forest"],
  "cactus": ["nature", "desert", "plant", "arid"],
  "leaf": ["nature", "plant", "tree", "autumn", "fall"],
  "sun": ["nature", "weather", "sky", "summer", "space", "light"],
  "moon": ["nature", "space", "night", "sky"],
  "cloud": ["nature", "weather", "sky", "rain"],
  "rain": ["nature", "weather", "water"],
  "snow": ["nature", "weather", "winter", "cold"],
  "lightning": ["nature", "weather", "storm", "electricity"],
  "wind": ["nature", "weather", "air"],
  "fire": ["nature", "element", "hot", "camping", "emergency"],
  "water": ["nature", "element", "liquid", "ocean", "sea"],
  "mountain": ["nature", "geography", "landscape", "climbing"],
  "volcano": ["nature", "geography", "geology", "hot"],
  "ocean": ["nature", "water", "sea", "marine"],
  "river": ["nature", "water", "geography"],
  "desert": ["nature", "climate", "geography", "hot", "arid"],
  "forest": ["nature", "tree", "wood", "wildlife"],
  // Animals
  "dog": ["animal", "pet", "mammal", "canine"],
  "cat": ["animal", "pet", "mammal", "feline"],
  "bird": ["animal", "bird", "avian"],
  "fish": ["animal", "water", "sea", "aquatic", "marine"],
  "horse": ["animal", "mammal", "farm", "riding"],
  "cow": ["animal", "mammal", "farm", "livestock", "dairy"],
  "pig": ["animal", "mammal", "farm", "livestock"],
  "sheep": ["animal", "mammal", "farm", "livestock"],
  "lion": ["animal", "mammal", "predator", "cat", "wild"],
  "tiger": ["animal", "mammal", "predator", "cat", "wild"],
  "bear": ["animal", "mammal", "predator", "wild", "forest"],
  "elephant": ["animal", "mammal", "wild", "savanna"],
  "monkey": ["animal", "mammal", "primate", "wild"],
  "shark": ["animal", "fish", "ocean", "marine", "predator", "sea"],
  "whale": ["animal", "mammal", "ocean", "marine", "sea"],
  "dolphin": ["animal", "mammal", "ocean", "marine", "sea"],
  "snake": ["animal", "reptile", "wild"],
  "turtle": ["animal", "reptile", "aquatic", "sea"],
  "frog": ["animal", "amphibian", "reptile"],
  "insect": ["animal", "bug", "small"],
  "butterfly": ["animal", "insect", "nature", "spring"],
  "bee": ["animal", "insect", "honey", "nature"],
  "spider": ["animal", "arachnid", "insect", "bug"],
  // Musical instruments
  "guitar": ["music", "instrument", "string"],
  "piano": ["music", "instrument", "keyboard"],
  "drum": ["music", "instrument", "percussion"],
  "violin": ["music", "instrument", "string"],
  "trumpet": ["music", "instrument", "brass", "wind"],
  "saxophone": ["music", "instrument", "woodwind"],
  "flute": ["music", "instrument", "woodwind"],
  "microphone": ["music", "singing", "audio", "recording", "performance"],
  // Vehicles
  "car": ["transportation", "vehicle", "automobile"],
  "truck": ["transportation", "vehicle", "cargo"],
  "bus": ["transportation", "vehicle", "transit"],
  "train": ["transportation", "vehicle", "rail", "transit"],
  "airplane": ["transportation", "vehicle", "air", "aviation", "travel"],
  "helicopter": ["transportation", "vehicle", "air", "aviation"],
  "boat": ["transportation", "vehicle", "water", "nautical", "sailing"],
  "ship": ["transportation", "vehicle", "water", "nautical", "large"],
  "bicycle": ["transportation", "vehicle", "bike", "fitness"],
  "motorcycle": ["transportation", "vehicle", "moto"],
  "rocket": ["transportation", "space", "vehicle"],
  // Tools
  "hammer": ["tool", "construction", "hand", "hardware"],
  "wrench": ["tool", "construction", "hand", "hardware", "repair"],
  "screwdriver": ["tool", "construction", "hand", "hardware"],
  "saw": ["tool", "construction", "wood", "cutting"],
  "drill": ["tool", "construction", "power", "hardware"],
  "axe": ["tool", "camping", "wood", "forestry", "cutting"],
  "knife": ["tool", "kitchen", "cutting", "weapon", "utensil"],
  "scissors": ["tool", "cutting", "craft", "art", "sewing", "hair"],
  // Money
  "money": ["finance", "currency", "wealth", "payment"],
  "coin": ["money", "currency", "finance", "metal"],
  "dollar": ["money", "currency", "finance", "american"],
  "credit card": ["money", "finance", "payment", "banking"],
  "bank": ["money", "finance", "building"],
  // Buildings
  "house": ["building", "home", "structure", "residential"],
  "office": ["building", "work", "business", "structure"],
  "school": ["building", "education", "structure"],
  "hospital": ["building", "medical", "health", "structure"],
  "church": ["building", "religion", "structure"],
  "castle": ["building", "medieval", "fortress", "structure", "royalty"],
  "factory": ["building", "industrial", "structure", "manufacturing"],
  // Body
  "eye": ["body", "face", "organ", "sense"],
  "ear": ["body", "face", "organ", "sense"],
  "nose": ["body", "face", "organ", "sense"],
  "mouth": ["body", "face", "organ"],
  "hand": ["body", "limb"],
  "foot": ["body", "limb", "footwear"],
  "heart": ["body", "organ", "love", "emotion"],
  "brain": ["body", "organ", "mind", "intelligence"],
  "bone": ["body", "skeleton", "structure"],
  "muscle": ["body", "strength", "fitness"],
  // Weapons/Military
  "sword": ["weapon", "medieval", "combat", "military", "ancient"],
  "gun": ["weapon", "military", "firearm"],
  "bomb": ["weapon", "military", "explosive", "war"],
  "shield": ["weapon", "defense", "medieval", "military", "armor"],
  "bow": ["weapon", "archery", "medieval", "hunting"],
  "arrow": ["weapon", "archery", "medieval"],
  "dagger": ["weapon", "knife", "medieval", "stealth"],
  "spear": ["weapon", "ancient", "medieval"],
  // Space
  "planet": ["space", "astronomy", "planetary", "solar"],
  "star": ["space", "astronomy", "sky", "night", "light"],
  "comet": ["space", "astronomy", "cosmic"],
  "galaxy": ["space", "astronomy", "cosmic"],
  "satellite": ["space", "technology", "communication"],
  "telescope": ["space", "astronomy", "science", "tool"],
  "astronaut": ["space", "science", "exploration"],
  "alien": ["space", "scifi", "extraterrestrial"],
};

/**
 * Words that almost always indicate a mismatch with common category themes.
 * Maps normalized word → categories where it would be SUSPICIOUS.
 */
const SUSPICIOUS_MISMATCHES: Record<string, string[]> = {
  "briefcase": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings", "skirts", "dresses", "coats", "jackets", "gloves", "mittens", "scarves", "underwear", "swimwear"],
  "suitcase": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings", "skirts", "dresses"],
  "luggage": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings", "skirts", "dresses"],
  "backpack": ["pants", "shorts", "footwear", "socks", "stockings", "dresses"],
  "purse": ["pants", "shorts", "socks", "stockings", "footwear"],
  "hat": ["pants", "shorts", "socks", "stockings"],
  "scarf": ["pants", "shorts", "socks", "stockings"],
  "gloves": ["pants", "shorts", "socks", "stockings"],
  "belt": ["shoes", "footwear", "socks", "stockings"],
  "watch": ["pants", "shorts", "footwear", "socks", "stockings"],
  "glasses": ["pants", "shorts", "footwear", "socks", "stockings"],
  "sunglasses": ["pants", "shorts", "footwear", "socks", "stockings"],
  "necklace": ["pants", "shorts", "footwear", "socks", "stockings"],
  "ring": ["pants", "shorts", "footwear", "socks", "stockings"],
  "earring": ["pants", "shorts", "footwear", "socks", "stockings"],
  "bracelet": ["pants", "shorts", "footwear", "socks", "stockings"],
  "wallet": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "key": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "phone": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "computer": ["pants", "shorts", "footwear", "socks", "stockings"],
  "book": ["pants", "shorts", "footwear", "socks", "stockings"],
  "pen": ["pants", "shorts", "footwear", "socks", "stockings"],
  "pencil": ["pants", "shorts", "footwear", "socks", "stockings"],
  "umbrella": ["pants", "shorts", "footwear", "socks", "stockings"],
  "lamp": ["pants", "shorts", "footwear", "socks", "stockings"],
  "chair": ["pants", "shorts", "footwear", "socks", "stockings"],
  "table": ["pants", "shorts", "footwear", "socks", "stockings"],
  "bed": ["pants", "shorts", "footwear", "socks", "stockings"],
  "clock": ["pants", "shorts", "footwear", "socks", "stockings"],
  "camera": ["pants", "shorts", "footwear", "socks", "stockings"],
  "television": ["pants", "shorts", "footwear", "socks", "stockings"],
  "radio": ["pants", "shorts", "footwear", "socks", "stockings"],
  "car": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings", "food", "drink", "animal"],
  "airplane": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings", "food", "drink"],
  "bicycle": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "guitar": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings", "food", "drink"],
  "drum": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings", "food", "drink"],
  "piano": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "soccer ball": ["pants", "shorts", "clothes", "clothing", "socks", "stockings"],
  "basketball": ["pants", "shorts", "socks", "stockings"],
  "football": ["pants", "shorts", "clothes", "clothing", "socks", "stockings"],
  "tennis": ["pants", "shorts", "clothes", "clothing", "socks", "stockings"],
  "pizza": ["pants", "shorts", "footwear", "socks", "stockings"],
  "hamburger": ["pants", "shorts", "footwear", "socks", "stockings"],
  "french fries": ["pants", "shorts", "footwear", "socks", "stockings"],
  "coffee": ["pants", "shorts", "footwear", "socks", "stockings"],
  "beer": ["pants", "shorts", "footwear", "socks", "stockings"],
  "wine": ["pants", "shorts", "footwear", "socks", "stockings"],
  "dog": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings", "food", "drink"],
  "cat": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings", "food", "drink"],
  "bird": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "fish": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "tree": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings", "food", "drink"],
  "flower": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "sun": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "moon": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "star": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "cloud": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "rain": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "snow": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "fire": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "water": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "mountain": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "ocean": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "house": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings", "food", "drink"],
  "hospital": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "school": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "sword": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "gun": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "bomb": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "shield": ["pants", "shorts", "footwear", "socks", "stockings"],
  "rocket": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "hammer": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "wrench": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "axe": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "knife": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "scissors": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "money": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "coin": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "dollar": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "credit card": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "eye": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "ear": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "nose": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "mouth": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "hand": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "foot": ["pants", "shorts", "clothes", "clothing", "socks", "stockings"],
  "heart": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "brain": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "bone": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "muscle": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "paper": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "envelope": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "lock": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "anchor": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "compass": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "map": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "trophy": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "medal": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "flag": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "building": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "bridge": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "road": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "wheel": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "gear": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "chain": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "mirror": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "frame": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "statue": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "vase": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "candle": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "battery": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "plug": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "microscope": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "test tube": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "dna": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "pill": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "syringe": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "stethoscope": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "bandage": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "thermometer": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "broom": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "sponge": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "soap": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "toilet": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "shower": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "bathtub": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "faucet": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "toothbrush": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "comb": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "lipstick": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "nail polish": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "lotion": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "baby": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "bottle": ["pants", "shorts", "footwear", "socks", "stockings"],
  "teddy bear": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "doll": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "ball": ["pants", "shorts", "clothes", "clothing", "socks", "stockings"],
  "kite": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "balloon": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "gift": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "ribbon": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "party": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "fireworks": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "confetti": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "sparkles": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "crystal ball": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "magic wand": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "door": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "window": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "stairs": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "elevator": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "escalator": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "package": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "box": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "bag": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "needle": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "thread": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "yarn": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "spool": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "paintbrush": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "palette": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
  "easel": ["pants", "shorts", "clothes", "clothing", "footwear", "socks", "stockings"],
};

// ============================================================
// Semantic Coherence Analysis
// ============================================================

/**
 * Normalize a string for comparison: lowercase, trim, remove punctuation except /.
 */
function normalize(s: string): string {
  return s.toLowerCase().trim().replace(/['"]/g, "");
}

/**
 * Split category name into individual tokens.
 * e.g., "Pants/Shorts" → ["pants", "shorts"]
 * e.g., "Clothes" → ["clothes"]
 * e.g., "Music Instruments" → ["music", "instruments"]
 * e.g., "Pants/Shorts & Skirts" → ["pants", "shorts", "skirts"]
 * e.g., "Root Beer/Soda" → ["root", "beer", "soda"]
 */
function splitCategoryTokens(category: string): string[] {
  const cleaned = category.toLowerCase().trim();
  // Split on /, &, spaces, -, _
  const rawTokens = cleaned.split(/[\/& \-_]+/).filter(t => t.length > 0);
  // Remove very short tokens that are likely conjunctions
  return rawTokens.filter(t => t.length > 1);
}

/**
 * Get all valid association keywords for a category name.
 * Combines the category tokens with expanded synonyms.
 */
function getCategoryKeywords(categoryTokens: string[]): string[] {
  const keywords = new Set<string>();
  for (const token of categoryTokens) {
    keywords.add(token);
    // Add common clothing synonyms
    if (token === "pants" || token === "trousers") {
      keywords.add("pants").add("trouser").add("bottom").add("legwear");
    }
    if (token === "shorts") {
      keywords.add("short").add("bottom").add("legwear").add("summer");
    }
    if (token === "clothes" || token === "clothing") {
      keywords.add("garment").add("apparel").add("wear").add("dress").add("attire");
    }
    if (token === "footwear" || token === "shoes") {
      keywords.add("shoe").add("boot").add("sandal").add("sneaker").add("foot").add("feet");
    }
    if (token === "socks" || token === "stockings") {
      keywords.add("sock").add("stocking").add("hosiery").add("foot");
    }
    if (token === "coats" || token === "jackets" || token === "outerwear") {
      keywords.add("coat").add("jacket").add("outer").add("warm").add("winter");
    }
    if (token === "skirts" || token === "dresses") {
      keywords.add("skirt").add("dress").add("gown").add("garment");
    }
    if (token === "gloves" || token === "mittens") {
      keywords.add("glove").add("mitten").add("hand").add("winter");
    }
    if (token === "scarves" || token === "scarf") {
      keywords.add("scarf").add("neck").add("winter");
    }
    if (token === "hats" || token === "caps") {
      keywords.add("hat").add("cap").add("head").add("headwear");
    }
    if (token === "jewelry") {
      keywords.add("gem").add("precious").add("accessory").add("adornment").add("necklace").add("ring");
    }
    if (token === "food" || token === "edible") {
      keywords.add("eat").add("meal").add("cuisine").add("dish").add("nutrition");
    }
    if (token === "drink" || token === "beverages") {
      keywords.add("beverage").add("liquid").add("thirst");
    }
    if (token === "music" || token === "musical") {
      keywords.add("song").add("melody").add("rhythm").add("sound").add("audio");
    }
    if (token === "sports" || token === "athletics") {
      keywords.add("sport").add("athletic").add("game").add("competition").add("play");
    }
    if (token === "animal" || token === "animals") {
      keywords.add("creature").add("beast").add("wildlife").add("fauna");
    }
    if (token === "plant" || token === "plants") {
      keywords.add("flora").add("vegetation").add("botany");
    }
    if (token === "tool" || token === "tools") {
      keywords.add("instrument").add("implement").add("device").add("utensil");
    }
    if (token === "vehicle" || token === "vehicles" || token === "transportation") {
      keywords.add("transport").add("transit").add("travel").add("mobility");
    }
    if (token === "weapon" || token === "weapons") {
      keywords.add("arm").add("defense").add("combat").add("war").add("fight");
    }
    if (token === "building" || token === "buildings") {
      keywords.add("structure").add("architecture").add("construction").add("edifice");
    }
    if (token === "space" || token === "astronomy") {
      keywords.add("cosmic").add("celestial").add("galaxy").add("solar").add("universe");
    }
    if (token === "office") {
      keywords.add("work").add("business").add("corporate").add("desk");
    }
    if (token === "dance" || token === "dancing") {
      keywords.add("dancer").add("choreography").add("ballet").add("performance");
    }
    if (token === "camping" || token === "outdoor") {
      keywords.add("camp").add("outdoors").add("nature").add("wilderness").add("hiking");
    }
    if (token === "beach" || token === "beaches") {
      keywords.add("sand").add("shore").add("coast").add("ocean").add("sea");
    }
    if (token === "winter") {
      keywords.add("cold").add("snow").add("ice").add("frozen");
    }
    if (token === "summer") {
      keywords.add("hot").add("warm").add("sunny");
    }
    if (token === "autumn" || token === "fall") {
      keywords.add("harvest").add("leaf").add("seasonal");
    }
    if (token === "spring") {
      keywords.add("bloom").add("flower").add("seasonal").add("rebirth");
    }
    if (token === "kitchen" || token === "cooking") {
      keywords.add("cook").add("chef").add("culinary").add("food prep");
    }
    if (token === "bathroom" || token === "toilet") {
      keywords.add("restroom").add("washroom").add("lavatory");
    }
    if (token === "bedroom" || token === "sleep") {
      keywords.add("bed").add("rest").add("sleeping");
    }
    if (token === "garden" || token === "gardening") {
      keywords.add("plant").add("grow").add("cultivate").add("horticulture");
    }
    if (token === "farm" || token === "farming" || token === "agriculture") {
      keywords.add("crop").add("harvest").add("livestock").add("rural");
    }
    if (token === "desert" || token === "arid") {
      keywords.add("dry").add("sand").add("dune").add("hot");
    }
    if (token === "ocean" || token === "sea" || token === "marine") {
      keywords.add("water").add("aquatic").add("nautical").add("saltwater").add("deep");
    }
    if (token === "forest" || token === "woods" || token === "forestry") {
      keywords.add("tree").add("wood").add("timber").add("woodland");
    }
    if (token === "mountain" || token === "alpine") {
      keywords.add("peak").add("cliff").add("elevation").add("highland");
    }
    if (token === "science" || token === "scientific") {
      keywords.add("research").add("lab").add("experiment").add("study");
    }
    if (token === "medical" || token === "health" || token === "medicine") {
      keywords.add("doctor").add("hospital").add("clinic").add("treatment").add("cure");
    }
    if (token === "education" || token === "school" || token === "learning") {
      keywords.add("study").add("teach").add("student").add("classroom").add("academic");
    }
    if (token === "money" || token === "finance" || token === "currency") {
      keywords.add("cash").add("payment").add("wealth").add("economy").add("bank");
    }
    if (token === "royalty" || token === "royal") {
      keywords.add("king").add("queen").add("monarch").add("noble").add("throne");
    }
    if (token === "medieval" || token === "fantasy") {
      keywords.add("castle").add("knight").add("sword").add("magic").add("dragon");
    }
    if (token === "ancient" || token === "antiquity") {
      keywords.add("old").add("historic").add("ruins").add("civilization");
    }
    if (token === "war" || token === "warfare" || token === "military") {
      keywords.add("battle").add("combat").add("army").add("soldier").add("fight");
    }
    if (token === "love" || token === "romance") {
      keywords.add("heart").add("affection").add("passion").add("romantic");
    }
    if (token === "horror" || token === "scary") {
      keywords.add("fear").add("terror").add("fright").add("spooky");
    }
    if (token === "comedy" || token === "funny") {
      keywords.add("humor").add("joke").add("laugh").add("hilarious");
    }
    if (token === "art" || token === "artistic") {
      keywords.add("paint").add("draw").add("sculpture").add("creative").add("craft");
    }
    if (token === "writing" || token === "literature") {
      keywords.add("write").add("author").add("book").add("poem").add("prose").add("text");
    }
    if (token === "reading" || token === "books") {
      keywords.add("book").add("read").add("novel").add("library").add("page");
    }
    if (token === "photography" || token === "photo") {
      keywords.add("camera").add("picture").add("image").add("lens").add("shoot");
    }
    if (token === "theater" || token === "theatre" || token === "drama") {
      keywords.add("stage").add("play").add("actor").add("performance").add("audience");
    }
    if (token === "film" || token === "movie" || token === "cinema") {
      keywords.add("screen").add("actor").add("director").add("camera").add("hollywood");
    }
    if (token === "technology" || token === "tech") {
      keywords.add("digital").add("electronic").add("computer").add("device").add("software");
    }
    if (token === "gaming" || token === "games" || token === "video games") {
      keywords.add("game").add("play").add("console").add("controller").add("arcade");
    }
    if (token === "sports") {
      keywords.add("sport").add("athlete").add("competition").add("game").add("match");
    }
    if (token === "fitness" || token === "exercise") {
      keywords.add("workout").add("gym").add("train").add("health").add("strength");
    }
    if (token === "religion" || token === "spiritual") {
      keywords.add("faith").add("worship").add("god").add("deity").add("church").add("temple");
    }
    if (token === "politics" || token === "government") {
      keywords.add("election").add("vote").add("law").add("country").add("nation");
    }
    if (token === "history" || token === "historical") {
      keywords.add("past").add("ancient").add("era").add("century").add("timeline");
    }
    if (token === "geography" || token === "earth") {
      keywords.add("land").add("map").add("terrain").add("location").add("country");
    }
  }
  return Array.from(keywords);
}

/**
 * Check if a word is semantically related to a set of category keywords.
 * Uses the knowledge base, direct string matching, and heuristic overlap.
 */
function wordMatchesCategory(word: string, categoryKeywords: string[]): boolean {
  const normalizedWord = normalize(word);
  if (!normalizedWord || normalizedWord.length < 2) return true; // skip very short words

  // 1. Direct token overlap: word contains a category keyword or vice versa
  for (const kw of categoryKeywords) {
    if (normalizedWord === kw) return true;
    if (normalizedWord.includes(kw)) return true;
    if (kw.includes(normalizedWord)) return true;
  }

  // 2. Known valid associations: word is in the knowledge base and its valid categories overlap
  const knownCategories = KNOWN_VALID_ASSOCIATIONS[normalizedWord];
  if (knownCategories) {
    for (const validCat of knownCategories) {
      if (categoryKeywords.includes(validCat)) return true;
      // Check partial overlap
      for (const kw of categoryKeywords) {
        if (validCat.includes(kw) || kw.includes(validCat)) return true;
      }
    }
  }

  // 3. Known suspicious mismatches: check if word is flagged for these categories
  const suspicious = SUSPICIOUS_MISMATCHES[normalizedWord];
  if (suspicious) {
    for (const suspCat of suspicious) {
      if (categoryKeywords.includes(suspCat)) return false;
      // Partial match
      for (const kw of categoryKeywords) {
        if (suspCat.includes(kw) || kw.includes(suspCat)) return false;
      }
    }
  }

  // 4. Heuristic: if the word is a known entity (in either KB), and we didn't match,
  //    it's likely unrelated. Flag as warning.
  if (knownCategories || suspicious) {
    return false;
  }

  // 5. If word is not in any KB, use conservative substring overlap
  // Check if any part of the word overlaps with category keywords
  const wordParts = normalizedWord.split(/[\/\- ]/);
  for (const part of wordParts) {
    if (part.length < 3) continue;
    for (const kw of categoryKeywords) {
      if (kw.length < 3) continue;
      if (part.includes(kw) || kw.includes(part)) return true;
    }
  }

  // 6. Unknown word with no overlap — flag as potential issue
  return false;
}

/**
 * Run semantic coherence audit across all data sources.
 */
function runSemanticAudit(): SemanticIssue[] {
  const issues: SemanticIssue[] = [];

  // Audit pool and theme data
  const csvData = loadAllCSVData();
  for (const { rows, fileName } of csvData) {
    for (const row of rows) {
      const categoryTokens = splitCategoryTokens(row.name);
      if (categoryTokens.length === 0) continue;
      const keywords = getCategoryKeywords(categoryTokens);

      for (const word of row.words) {
        // Check 13-character limit
        if (word.length > 13) {
          issues.push({
            file: fileName,
            category: row.name,
            word,
            issue: `Word exceeds 13-character limit (${word.length} chars)`,
            severity: "error",
          });
        }

        // Check semantic coherence
        if (!wordMatchesCategory(word, keywords)) {
          issues.push({
            file: fileName,
            category: row.name,
            word,
            issue: `Word "${word}" may not semantically fit category "${row.name}". No relationship found between word and category keywords: [${categoryTokens.join(", ")}]`,
            severity: "warning",
          });
        }
      }
    }
  }

  // Audit emoji data
  const emojiData = loadEmojiData();
  for (const row of emojiData) {
    const categoryTokens = splitCategoryTokens(row.category);
    if (categoryTokens.length === 0) continue;
    const keywords = getCategoryKeywords(categoryTokens);

    for (let i = 0; i < row.descs.length; i++) {
      const desc = row.descs[i];
      const emoji = row.emojis[i] || "";

      // Check 13-character limit on the description (the "word" equivalent for emojis)
      if (desc.length > 13) {
        issues.push({
          file: "emojiData.csv",
          category: row.category,
          word: `${emoji} (${desc})`,
          issue: `Emoji description exceeds 13-character limit (${desc.length} chars)`,
          severity: "error",
        });
      }

      // Check semantic coherence using the description
      if (!wordMatchesCategory(desc, keywords)) {
        issues.push({
          file: "emojiData.csv",
          category: row.category,
          word: `${emoji} (${desc})`,
          issue: `Emoji "${desc}" may not semantically fit category "${row.category}". No relationship found between description and category keywords: [${categoryTokens.join(", ")}]`,
          severity: "warning",
        });
      }
    }
  }

  // Audit synonym data
  const synData = loadSynonymData();
  for (const { rows, fileName } of synData) {
    for (const row of rows) {
      const categoryTokens = splitCategoryTokens(row.name);
      if (categoryTokens.length === 0) continue;
      const keywords = getCategoryKeywords(categoryTokens);

      for (const word of row.words) {
        if (word.length > 13) {
          issues.push({
            file: fileName,
            category: row.name,
            word,
            issue: `Word exceeds 13-character limit (${word.length} chars)`,
            severity: "error",
          });
        }

        if (!wordMatchesCategory(word, keywords)) {
          issues.push({
            file: fileName,
            category: row.name,
            word,
            issue: `Word "${word}" may not semantically fit category "${row.name}". No relationship found between word and category keywords: [${categoryTokens.join(", ")}]`,
            severity: "warning",
          });
        }
      }
    }
  }

  // Audit expansion test data
  const expansionData = loadExpansionTestData();
  for (const row of expansionData) {
    const categoryTokens = splitCategoryTokens(row.name);
    if (categoryTokens.length === 0) continue;
    const keywords = getCategoryKeywords(categoryTokens);

    for (const word of row.words) {
      if (word.length > 13) {
        issues.push({
          file: "csvExpansionData.csv",
          category: row.name,
          word,
          issue: `Word exceeds 13-character limit (${word.length} chars)`,
          severity: "error",
        });
      }

      if (!wordMatchesCategory(word, keywords)) {
        issues.push({
          file: "csvExpansionData.csv",
          category: row.name,
          word,
          issue: `Word "${word}" may not semantically fit category "${row.name}". No relationship found between word and category keywords: [${categoryTokens.join(", ")}]`,
          severity: "warning",
        });
      }
    }
  }

  return issues;
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

// ═══════════════════════════════════════════════════════════════
// NEW: Semantic Coherence Audit Tool
// ═══════════════════════════════════════════════════════════════

const AUDIT_SEMANTIC_COHERENCE_TOOL: Tool = {
  name: "audit_semantic_coherence",
  description:
    "Workflow 4: Audit all CSV data for semantic coherence — compares words in each category against the category name to flag potential mismatches (e.g., a briefcase in Pants/Shorts). Also flags words exceeding the 13-character limit. Ignores definitions. Reports findings without making changes.",
  inputSchema: {
    type: "object",
    properties: {
      dataSource: {
        type: "string",
        enum: ["all", "pool", "theme", "emoji", "synonyms", "expansion"],
        description: "Which data source to audit (default: all)",
      },
      severity: {
        type: "string",
        enum: ["all", "error", "warning"],
        description: "Filter by minimum severity (default: all)",
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
 */
function parseLevelSequence(): { modes: string[]; baseCycle: string[]; totalLevels: number } | null {
  const typesContent = readFileSync(join(PROJECT_ROOT, "types.ts"), "utf-8");

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

  const categoryNames = new Map<string, string[]>();
  let totalRows = 0;

  for (const { rows, fileName } of allData) {
    for (const row of rows) {
      totalRows++;

      if (!categoryNames.has(row.name)) {
        categoryNames.set(row.name, []);
      }
      categoryNames.get(row.name)!.push(fileName);

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

      const wordsInRow = new Map<string, number>();
      for (const word of row.words) {
        const cleanWord = word.trim().toLowerCase();
        if (!cleanWord) continue;
        wordsInRow.set(cleanWord, (wordsInRow.get(cleanWord) || 0) + 1);
      }
      for (const [word, count] of wordsInRow.entries()) {
        if (count > 1) {
          issues.push(`${fileName}: Category '${row.name}' has duplicate word "${word}" appearing ${count} times in the same row.`);
        }
      }
    }
  }

  for (const [name, files] of categoryNames.entries()) {
    if (files.length > 1) {
      warnings.push(`Category "${name}" appears in ${files.length} files: ${files.join(", ")}`);
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

  output += `### Per-File Statistics\n`;
  for (const { rows, fileName } of allData) {
    output += `- ${fileName}: ${rows.length} categories\n`;
  }

  return output;
}

async function handleFindUnusedCategories(args: Record<string, unknown>): Promise<string> {
  const minDifficulty = args.minDifficulty ? Number(args.minDifficulty) : 0;
  const allData = loadAllCSVData();

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

function readFileLines(filePath: string): string[] | null {
  try {
    const content = readFileSync(filePath, "utf-8");
    return content.split("\n");
  } catch {
    return null;
  }
}

function auditSingleComponent(file: string, filePath: string, checks: string[]): ConventionIssue[] {
  const issues: ConventionIssue[] = [];
  const lines = readFileLines(filePath);
  if (!lines) return issues;

  const runAll = checks.includes("all");
  const fullContent = lines.join("\n");

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
            category = "types";
          }
        }
        importLines.push({ lineNum: i + 1, text: line, category });
      }
    }

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
        break;
      }
      prevOrder = currOrder;
      prevLineNum = imp.lineNum;
      prevCat = imp.category;
    }
  }

  if (runAll || checks.includes("touch-targets")) {
    const buttonRegex = /<button\b([^>]*)>/gi;
    let match1: RegExpExecArray | null;
    while ((match1 = buttonRegex.exec(fullContent)) !== null) {
      const attrs = match1[1];
      const lineNum = fullContent.substring(0, match1.index).split("\n").length;

      const hasMinW = /min-w-\[?48px\]?/i.test(attrs);
      const hasMinH = /min-h-\[?48px\]?/i.test(attrs);

      if (!hasMinW || !hasMinH) {
        const missing: string[] = [];
        if (!hasMinW) missing.push("min-w-[48px]");
        if (!hasMinH) missing.push("min-h-[48px]");

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

  if (runAll || checks.includes("aria-labels")) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.match(/<button\b/i) && !line.match(/aria-label\s*=/i)) {
        let hasText = false;
        for (let j = i; j < Math.min(i + 3, lines.length); j++) {
          const nextLine = lines[j];
          if (/[a-zA-Z]{3,}/.test(nextLine.replace(/<[^>]+>/g, "").trim())) {
            hasText = true;
            break;
          }
        }

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

  if (runAll || checks.includes("neon-colors")) {
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

  if (runAll || checks.includes("naming")) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

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

  const errors = allIssues.filter((i) => i.severity === "error");
  const warnings = allIssues.filter((i) => i.severity === "warning");
  const infos = allIssues.filter((i) => i.severity === "info");

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

  if (runAll || scope === "storage") {
    const storagePath = join(SERVICES_DIR, "storage.ts");
    if (existsSync(storagePath)) {
      const storageContent = readFileSync(storagePath, "utf-8");
      const usedKeys = new Set<string>();

      const keyRegex = /localStorage\.(?:get|set)Item\s*\(\s*['"]([^'"]+)['"]/g;
      let match;
      while ((match = keyRegex.exec(storageContent)) !== null) {
        usedKeys.add(match[1]);
      }

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

      const appPath = join(PROJECT_ROOT, "App.tsx");
      if (existsSync(appPath)) {
        const appContent = readFileSync(appPath, "utf-8");
        const appKeyRegex = /localStorage\.(?:get|set)Item\s*\(\s*['"]([^'"]+)['"]/g;
        while ((match = appKeyRegex.exec(appContent)) !== null) {
          usedKeys.add(match[1]);
        }
      }

      for (const key of usedKeys) {
        if (!KNOWN_STORAGE_KEYS.has(key)) {
          warnings.push(`localStorage key "${key}" is in use but not documented in KNOWN_STORAGE_KEYS. Consider adding it.`);
        }
      }

      if (usedKeys.size > 0) {
        passes.push(`✅ Storage: ${usedKeys.size} localStorage keys in active use.`);
      }

      for (const knownKey of KNOWN_STORAGE_KEYS) {
        if (!usedKeys.has(knownKey)) {
          if (knownKey.includes("_level_")) continue;
          warnings.push(`Known storage key "${knownKey}" is not found in any getItem/setItem call. It may be orphaned or used via dynamic key construction.`);
        }
      }
    } else {
      issues.push("❌ Storage: storage.ts not found in services/");
    }
  }

  if (runAll || scope === "mode-mappings") {
    const appPath = join(PROJECT_ROOT, "App.tsx");
    if (existsSync(appPath)) {
      const appContent = readFileSync(appPath, "utf-8");

      for (const [mode, expected] of Object.entries(MODE_DATA_SOURCE_MAP)) {
        const modeSection = appContent.match(new RegExp(`case\\s+GameMode\\.${mode}\\s*:`, "i"));
        if (!modeSection) {
          if (!["LEVEL_FILTER", "LEVEL_GROUP"].includes(mode)) {
            warnings.push(`Mode mapping: ${mode} not found in App.tsx renderContent switch. It may be handled by a default case.`);
          }
          continue;
        }

        const matchingFiles = readdirSync(SERVICES_DIR).filter(
          (f) => f.startsWith(expected.pattern) && !f.endsWith(".csv") && !f.endsWith(".md")
        );

        if (matchingFiles.length === 0) {
          issues.push(`❌ Mode mapping: ${mode} requires ${expected.description}, but no matching files found in services/.`);
        } else {
          passes.push(`✅ ${mode}: Data source verified — ${matchingFiles.length} file(s) matching '${expected.pattern}'.`);
        }
      }

      const themedInApp = appContent.match(/GameMode\.LEVEL_THEME/g);
      if (themedInApp) {
        const themedSection = appContent.match(/LEVEL_THEME[^}]*?csvTheme/i);
        if (!themedSection) {
          warnings.push(`⚠️ Rule #11: THEMED level may not be using csvThemeData*.ts. Verify data loading in App.tsx.`);
        }
      }

      const emojiInApp = appContent.match(/GameMode\.LEVEL_EMOJI/g);
      if (emojiInApp) {
        const emojiSection = appContent.match(/LEVEL_EMOJI[^}]*?emoji/i);
        if (!emojiSection) {
          warnings.push(`⚠️ Rule #11: EMOJI level may not be using emojiData.ts. Verify data loading in App.tsx.`);
        }
      }

      const synInApp = appContent.match(/GameMode\.LEVEL_SYNONYMS/g);
      if (synInApp) {
        const synSection = appContent.match(/LEVEL_SYNONYMS[^}]*?synonym/i);
        if (!synSection) {
          warnings.push(`⚠️ Rule #11: SYNONYMS level may not be using CSV_SYNONYMS_*.ts. Verify data loading in App.tsx.`);
        }
      }
    }
  }

  if (runAll || scope === "csv-format") {
    const allData = loadAllCSVData();
    let totalRowsChecked = 0;
    let formatViolations = 0;

    for (const { rows, fileName } of allData) {
      for (const row of rows) {
        totalRowsChecked++;

        for (const word of row.words) {
          if (word.length > 13) {
            formatViolations++;
            warnings.push(`CSV format: "${word}" in ${fileName} (${row.name}) exceeds 13-character limit (${word.length} chars).`);
          }
        }

        if (row.definitions.length > 0 && row.words.length !== row.definitions.length) {
          formatViolations++;
          warnings.push(`CSV format: ${fileName} - "${row.name}" has ${row.words.length} words but ${row.definitions.length} definitions (mismatch).`);
        }

        if (![1, 3, 5].includes(row.difficulty)) {
          formatViolations++;
          warnings.push(`CSV format: ${fileName} - "${row.name}" has difficulty ${row.difficulty} (expected 1, 3, or 5).`);
        }

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

  if (runAll || scope === "word-uniqueness") {
    const allData = loadAllCSVData();
    let rowDuplicateCount = 0;
    let totalWords = 0;

    for (const { rows, fileName } of allData) {
      for (const row of rows) {
        const wordsInRow = new Map<string, number>();
        for (const word of row.words) {
          const cleanWord = word.trim().toLowerCase();
          if (!cleanWord) continue;
          totalWords++;
          wordsInRow.set(cleanWord, (wordsInRow.get(cleanWord) || 0) + 1);
        }
        for (const [word, count] of wordsInRow.entries()) {
          if (count > 1) {
            rowDuplicateCount++;
            issues.push(`Word uniqueness: ${fileName} - "${row.name}" has duplicate word "${word}" appearing ${count} times in the same row.`);
          }
        }
      }
    }

    if (rowDuplicateCount === 0) {
      passes.push(`✅ Word uniqueness: No duplicate words found within any single row (${totalWords} total words checked).`);
    } else {
      issues.push(`❌ Word uniqueness: ${rowDuplicateCount} duplicate word(s) found within the same row.`);
    }
  }

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

  const parsed = parseLevelSequence();
  if (!parsed) {
    return "❌ Could not find DETERMINISTIC_LEVEL_SEQUENCE or BASE_CYCLE in types.ts";
  }

  const uniqueModes = [...new Set(parsed.modes)];

  const componentFiles = existsSync(COMPONENTS_DIR)
    ? readdirSync(COMPONENTS_DIR).filter((f) => f.endsWith(".tsx") && !f.endsWith(".d.ts"))
    : [];

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

  const serviceFiles = existsSync(SERVICES_DIR)
    ? readdirSync(SERVICES_DIR).filter((f) => f.endsWith(".ts") || f.endsWith(".csv"))
    : [];

  const STUB_PATTERNS = [
    /\/\/\s*stub/i,
    /\/\/\s*TODO:\s*implement/i,
    /\/\/\s*placeholder/i,
    /return\s+null\s*;?\s*\}/i,
    /return\s*\(\s*<div[^>]*>\s*<\/div>\s*\)\s*;?\s*\}/i,
    /return\s*\(\s*<div[^>]*>\s*Stub/i,
  ];

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

    let isStub = false;
    if (componentExists) {
      try {
        const content = readFileSync(join(COMPONENTS_DIR, mapping.file), "utf-8");
        isStub = STUB_PATTERNS.some((pattern) => pattern.test(content));

        const lineCount = content.split("\n").filter((l) => l.trim()).length;
        if (lineCount < 30) {
          isStub = true;
        }
      } catch {
        // can't read
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

  let output = `## 🔍 Level Coverage Audit\n\n`;
  output += `### 📊 Summary\n`;
  output += `| Status | Count |\n`;
  output += `|--------|-------|\n`;
  output += `| ✅ OK | ${gaps.filter((g) => g.status === "ok").length} |\n`;
  output += `| 📝 Stub/Incomplete | ${gaps.filter((g) => g.status === "stub-incomplete").length} |\n`;
  output += `| ❌ Missing | ${gaps.filter((g) => g.status === "missing-file").length} |\n`;
  output += `| ❓ Unverified | ${gaps.filter((g) => g.status === "unverified").length} |\n`;
  output += `| **Total modes** | **${uniqueModes.length}** |\n\n`;

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

  output += `### Data Source Files Match\n`;
  const dataSourceStatuses = new Set(gaps.map((g) => g.dataSource));
  for (const ds of dataSourceStatuses) {
    if (ds === "unknown") continue;
    const matches = serviceFiles.filter((f) => f.startsWith(ds));
    output += `- \`${ds}*\` → ${matches.length} file(s): ${matches.join(", ") || "none"}\n`;
  }
  output += "\n";

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

// ═══════════════════════════════════════════════════════════════
// Workflow 4 Implementation: Semantic Coherence Audit
// ═══════════════════════════════════════════════════════════════

async function handleAuditSemanticCoherence(args: Record<string, unknown>): Promise<string> {
  const dataSource = String(args.dataSource || "all");
  const severityFilter = String(args.severity || "all");

  const allIssues = runSemanticAudit();

  // Filter by data source
  const filteredIssues = allIssues.filter((issue) => {
    if (dataSource === "all") return true;

    const fileName = issue.file.toLowerCase();
    switch (dataSource) {
      case "pool": return fileName.includes("csvpooldata");
      case "theme": return fileName.includes("csvthemedata");
      case "emoji": return fileName.includes("emojidata");
      case "synonyms": return fileName.includes("csv_synonyms");
      case "expansion": return fileName.includes("csvexpansiondata");
      default: return true;
    }
  });

  // Filter by severity
  const severityFiltered = filteredIssues.filter((issue) => {
    if (severityFilter === "all") return true;
    return issue.severity === severityFilter;
  });

  const errors = severityFiltered.filter((i) => i.severity === "error");
  const warnings = severityFiltered.filter((i) => i.severity === "warning");
  const infos = severityFiltered.filter((i) => i.severity === "info");

  // Group by file
  const byFile: Record<string, SemanticIssue[]> = {};
  for (const issue of severityFiltered) {
    if (!byFile[issue.file]) byFile[issue.file] = [];
    byFile[issue.file].push(issue);
  }

  let output = `## 🔍 Semantic Coherence Audit\n\n`;
  output += `**Data sources audited:** ${dataSource}\n`;
  output += `**Severity filter:** ${severityFilter}\n\n`;

  // Summary
  output += `### 📊 Summary\n`;
  output += `| Severity | Count |\n`;
  output += `|----------|-------|\n`;
  output += `| ❌ Error (char limit) | ${errors.length} |\n`;
  output += `| ⚠️ Warning (semantic) | ${warnings.length} |\n`;
  output += `| ℹ️ Info | ${infos.length} |\n`;
  output += `| **Total issues** | **${severityFiltered.length}** |\n\n`;

  if (severityFiltered.length === 0) {
    output += "✅ **All checks passed!** No semantic issues or character limit violations found.\n";
    return output;
  }

  // Character limit violations first (errors)
  if (errors.length > 0) {
    output += `### ❌ Character Limit Violations (${errors.length})\n`;
    output += `Words exceeding the 13-character maximum:\n\n`;
    output += `| File | Category | Word | Length |\n`;
    output += `|------|----------|------|--------|\n`;
    for (const e of errors) {
      const wordLen = e.word.length;
      output += `| ${e.file} | ${e.category} | \`${e.word}\` | ${wordLen} |\n`;
    }
    output += "\n";
  }

  // Semantic mismatches (warnings)
  if (warnings.length > 0) {
    output += `### ⚠️ Semantic Coherence Warnings (${warnings.length})\n`;
    output += `Words that may not semantically fit their category:\n\n`;

    // Group by file
    const sortedFiles = Object.keys(byFile).sort();
    for (const file of sortedFiles) {
      const fileWarnings = (byFile[file] || []).filter((i) => i.severity === "warning");
      if (fileWarnings.length === 0) continue;

      output += `#### ${file} (${fileWarnings.length} warnings)\n\n`;
      output += `| Category | Word | Issue |\n`;
      output += `|----------|------|-------|\n`;
      for (const w of fileWarnings) {
        const shortIssue = w.issue.length > 80 ? w.issue.substring(0, 77) + "..." : w.issue;
        output += `| ${w.category} | \`${w.word}\` | ${shortIssue} |\n`;
      }
      output += "\n";
    }
  }

  // Breakdown by file
  output += `### 📁 Per-File Breakdown\n\n`;
  output += `| File | Errors | Warnings | Total |\n`;
  output += `|------|--------|----------|-------|\n`;
  for (const file of Object.keys(byFile).sort()) {
    const fileIssues = byFile[file];
    const fileErrors = fileIssues.filter((i) => i.severity === "error").length;
    const fileWarnings = fileIssues.filter((i) => i.severity === "warning").length;
    output += `| ${file} | ${fileErrors} | ${fileWarnings} | ${fileIssues.length} |\n`;
  }
  output += "\n";

  output += `---\n`;
  output += `**Note:** This audit compares words against category names using heuristic matching.\n`;
  output += `False positives are possible — especially for words not in the knowledge base.\n`;
  output += `Review each warning and decide whether the word truly belongs or needs correction.\n`;
  output += `No changes have been made to the data files.\n`;

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
    AUDIT_SEMANTIC_COHERENCE_TOOL,
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

      case "audit_semantic_coherence":
        return {
          content: [{ type: "text", text: await handleAuditSemanticCoherence(args || {}) }],
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