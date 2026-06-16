import { CSVRow } from '../types';
import { parseCSVLine, shuffleArray, wordFitsPerLine } from './csvUtils';

/**
 * Strips leading/trailing double-quote characters from a string.
 * This handles the inconsistency where some csvThemeData files use ""..."" (double-double-quotes)
 * and others use "..." (single double-quotes) for field quoting.
 */
function stripQuotes(value: string): string {
  let s = value.trim();
  // Remove leading/trailing double-quote characters
  while (s.startsWith('"')) s = s.substring(1);
  while (s.endsWith('"')) s = s.substring(0, s.length - 1);
  return s.trim();
}

/**
 * Combines and parses all csvThemeData CSV strings into a Map of theme name -> CSVRow[].
 *
 * CSV format (15 columns):
 *   ID, theme, themedef, category, catdef, word1, worddef1, word2, worddef2, word3, worddef3, word4, worddef4, score, cat21
 *
 * Index mapping:
 *   0  = ID
 *   1  = theme (theme name, used as the map key)
 *   2  = themedef (theme description, unused in CSVRow)
 *   3  = category (sub-category name -> CSVRow.name)
 *   4  = catdef (category description -> CSVRow.catDict)
 *   5  = word1
 *   6  = worddef1
 *   7  = word2
 *   8  = worddef2
 *   9  = word3
 *   10 = worddef3
 *   11 = word4
 *   12 = worddef4
 *   13 = score (difficulty)
 *   14 = cat21 (broad category)
 */
function parseAllThemeData(
  CSV_THEME_DATA_1: string,
  CSV_THEME_DATA_2: string,
  CSV_THEME_DATA_3: string,
  CSV_THEME_DATA_4: string,
  CSV_THEME_DATA_5: string,
  CSV_THEME_DATA_6: string,
  CSV_THEME_DATA_7: string,
  CSV_THEME_DATA_8: string,
  CSV_THEME_DATA_9: string,
): Map<string, CSVRow[]> {
  const themeMap = new Map<string, CSVRow[]>();

  // Combine all CSV strings
  const allCsv = [
    CSV_THEME_DATA_1,
    CSV_THEME_DATA_2,
    CSV_THEME_DATA_3,
    CSV_THEME_DATA_4,
    CSV_THEME_DATA_5,
    CSV_THEME_DATA_6,
    CSV_THEME_DATA_7,
    CSV_THEME_DATA_8,
    CSV_THEME_DATA_9,
  ];

  for (const csv of allCsv) {
    const lines = csv.trim().split('\n');
    if (lines.length < 2) continue;

    // Skip the header line (starts with "ID")
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const parts = parseCSVLine(line);
      // Need at least 15 columns for the full format
      if (parts.length < 15) continue;

      const id = stripQuotes(parts[0]);
      const themeName = stripQuotes(parts[1]);
      const categoryName = stripQuotes(parts[3]);
      const catDef = stripQuotes(parts[4]);

      // Extract 4 word/definition pairs (columns 5-12)
      const words: string[] = [];
      const definitions: string[] = [];
      for (let j = 0; j < 4; j++) {
        const wordIdx = 5 + j * 2;      // word columns: 5, 7, 9, 11
        const defIdx = 6 + j * 2;        // def columns: 6, 8, 10, 12
        if (wordIdx < parts.length && defIdx < parts.length) {
          const word = stripQuotes(parts[wordIdx]);
          const def = stripQuotes(parts[defIdx]);
          if (word && wordFitsPerLine(word)) {
            words.push(word);
            definitions.push(def || '');
          }
        }
      }

      if (words.length < 3) continue; // Skip rows with too few words

      const difficulty = parseInt(stripQuotes(parts[13]), 10) || 1;
      const broadCategory = stripQuotes(parts[14]) || 'General';

      const row: CSVRow = {
        id,
        name: categoryName,
        catDict: catDef,
        words,
        definitions,
        difficulty,
        broadCategory,
      };

      const existing = themeMap.get(themeName);
      if (existing) {
        existing.push(row);
      } else {
        themeMap.set(themeName, [row]);
      }
    }
  }

  // Shuffle the categories within each theme so they don't appear in CSV file order
  for (const [themeName, categories] of themeMap) {
    themeMap.set(themeName, shuffleArray(categories));
  }

  return themeMap;
}

// Module-level cache
let cachedMap: Map<string, CSVRow[]> | null = null;
let initPromise: Promise<void> | null = null;

async function loadThemeData(): Promise<void> {
  if (cachedMap) return;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    // Dynamic imports to avoid eager parsing of ~2MB of theme data at startup
    const { CSV_THEME_DATA_1 } = await import('./csvThemeData1');
    const { CSV_THEME_DATA_2 } = await import('./csvThemeData2');
    const { CSV_THEME_DATA_3 } = await import('./csvThemeData3');
    const { CSV_THEME_DATA_4 } = await import('./csvThemeData4');
    const { CSV_THEME_DATA_5 } = await import('./csvThemeData5');
    const { CSV_THEME_DATA_6 } = await import('./csvThemeData6');
    const { CSV_THEME_DATA_7 } = await import('./csvThemeData7');
    const { CSV_THEME_DATA_8 } = await import('./csvThemeData8');
    const { CSV_THEME_DATA_9 } = await import('./csvThemeData9');

    cachedMap = parseAllThemeData(
      CSV_THEME_DATA_1, CSV_THEME_DATA_2, CSV_THEME_DATA_3,
      CSV_THEME_DATA_4, CSV_THEME_DATA_5, CSV_THEME_DATA_6,
      CSV_THEME_DATA_7, CSV_THEME_DATA_8, CSV_THEME_DATA_9,
    );
  })();

  return initPromise;
}

// Start loading immediately at module scope (non-blocking)
loadThemeData();

/**
 * Returns a Map of theme name -> CSVRow[] (categories for that theme).
 * The result is cached after the first call.
 * Returns an empty Map if data hasn't loaded yet (caller should retry or use fallback).
 */
export function getThemedDataMap(): Map<string, CSVRow[]> {
  if (cachedMap) return cachedMap;
  // Trigger async load if not already started
  loadThemeData();
  return new Map(); // Empty map as fallback until data loads
}
