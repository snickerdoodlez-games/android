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
 * Parses a single CSV string (from one csvThemeData file) into a Map of theme name -> CSVRow[].
 *
 * CSV format (15 columns):
 *   ID, theme, themedef, category, catdef, word1, worddef1, word2, worddef2, word3, worddef3, word4, worddef4, score, cat21
 */
function parseThemeCSV(csv: string, themeMap: Map<string, CSVRow[]>): void {
  const lines = csv.trim().split('\n');
  if (lines.length < 2) return;

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

// Module-level cache
let cachedMap: Map<string, CSVRow[]> | null = null;
let initPromise: Promise<void> | null = null;

async function loadThemeData(): Promise<void> {
  if (cachedMap) return;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    const themeMap = new Map<string, CSVRow[]>();

    // Import raw CSV files via Vite's ?raw import to bypass TypeScript compilation
    // This avoids the ~83s TTFB delay caused by compiling large TS string constants
    const mod1 = await import('./csvThemeData1.csv?raw');
    const mod2 = await import('./csvThemeData2.csv?raw');
    const mod3 = await import('./csvThemeData3.csv?raw');
    const mod4 = await import('./csvThemeData4.csv?raw');
    const mod5 = await import('./csvThemeData5.csv?raw');
    const mod6 = await import('./csvThemeData6.csv?raw');
    const mod7 = await import('./csvThemeData7.csv?raw');
    const mod8 = await import('./csvThemeData8.csv?raw');
    const mod9 = await import('./csvThemeData9.csv?raw');

    const csvFiles = [
      (mod1 as any).default || (mod1 as any),
      (mod2 as any).default || (mod2 as any),
      (mod3 as any).default || (mod3 as any),
      (mod4 as any).default || (mod4 as any),
      (mod5 as any).default || (mod5 as any),
      (mod6 as any).default || (mod6 as any),
      (mod7 as any).default || (mod7 as any),
      (mod8 as any).default || (mod8 as any),
      (mod9 as any).default || (mod9 as any),
    ];

    for (const csv of csvFiles) {
      const csvString = typeof csv === 'string' ? csv : String(csv || '');
      if (csvString.trim()) {
        parseThemeCSV(csvString, themeMap);
      }
    }

    // Shuffle the categories within each theme so they don't appear in CSV file order
    for (const [themeName, categories] of themeMap) {
      themeMap.set(themeName, shuffleArray(categories));
    }

    cachedMap = themeMap;
  })();

  return initPromise;
}

// Start loading immediately at module scope (non-blocking)
loadThemeData();

/** Wait for theme data to finish loading. */
export function waitForThemeDataInit(): Promise<void> {
  return loadThemeData();
}

/**
 * Returns a Map of theme name -> CSVRow[] (categories for that theme).
 * The result is cached after the first call.
 * Returns an empty Map if data hasn't loaded yet (caller should retry or use fallback).
 */
export function getThemedDataMap(): Map<string, CSVRow[]> {
  if (cachedMap) return cachedMap;
  return new Map(); // Empty map as fallback until data loads
}