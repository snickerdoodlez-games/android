import { CSVRow } from '../types';

// CSV format:
// Category,EmojiTotal,Emoji1,EmojiDesc1,Emoji2,EmojiDesc2,...,Emoji8,EmojiDesc8,
// Category = category name shown when row is solved
// EmojiTotal = concatenated emojis (not used for tile data)
// Emoji* = actual emoji character (the "word")
// EmojiDesc* = definition shown on long-press

let parsedEmojiData: CSVRow[] | null = null;
let loadPromise: Promise<void> | null = null;

const parseCSVLine = (line: string): string[] => {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (!inQuotes && char === ',') {
      result.push(current.trim());
      current = '';
      continue;
    }
    current += char;
  }
  result.push(current.trim());
  return result;
};

const parseEmojiCSV = (raw: string): CSVRow[] => {
  if (!raw || raw.trim().length === 0) return [];
  const lines = raw.split('\n').filter(line => line.trim().length > 0);
  if (lines.length <= 1) return [];

  // Skip header line
  const dataLines = lines.slice(1);
  const result: CSVRow[] = [];
  let idCounter = 90000;

  for (const line of dataLines) {
    try {
      const fields = parseCSVLine(line);
      if (fields.length < 4) continue; // Need at least Category + EmojiTotal + Emoji1 + EmojiDesc1

      const category = fields[0]?.trim() || '';
      // fields[1] is EmojiTotal (concatenated emojis) — not used
      const words: string[] = [];
      const definitions: string[] = [];

      // Emoji/Desc pairs start at index 2
      for (let i = 2; i + 1 < fields.length; i += 2) {
        const emoji = fields[i]?.trim() || '';
        const desc = fields[i + 1]?.trim() || '';
        if (emoji.length > 0) {
          words.push(emoji);
          definitions.push(desc || emoji);
        }
      }

      // Remove duplicate emojis within the same category (rule #8)
      const seen = new Set<string>();
      const uniqueWords: string[] = [];
      const uniqueDefs: string[] = [];
      for (let i = 0; i < words.length; i++) {
        if (!seen.has(words[i])) {
          seen.add(words[i]);
          uniqueWords.push(words[i]);
          uniqueDefs.push(definitions[i]);
        }
      }

      if (uniqueWords.length >= 3 && category) {
        result.push({
          id: (idCounter++).toString(),
          name: category,
          words: uniqueWords,
          definitions: uniqueDefs,
        });
      }
    } catch (e) {
      continue;
    }
  }

  return result;
};

export const ensureEmojiDataInitialized = (): void => {
  if (parsedEmojiData && parsedEmojiData.length > 0) return;
  if (loadPromise) return;
  loadPromise = (async () => {
    try {
      const csvModule = await import('./emojiData.csv?raw');
      const rawData = (csvModule as any).default || (csvModule as any).toString();
      parsedEmojiData = parseEmojiCSV(rawData);
      console.log(`[EmojiData] Loaded ${parsedEmojiData.length} categories`);
    } catch (e) {
      console.error('Failed to load emoji CSV data:', e);
      parsedEmojiData = [];
    }
  })();
};

export const getEmojiData = (): CSVRow[] => {
  if (parsedEmojiData && parsedEmojiData.length > 0) return parsedEmojiData;
  return [];
};

export const waitForEmojiDataInit = (): Promise<void> => {
  if (parsedEmojiData && parsedEmojiData.length > 0) return Promise.resolve();
  ensureEmojiDataInitialized();
  return loadPromise || Promise.resolve();
};

// Start loading immediately on import
ensureEmojiDataInitialized();