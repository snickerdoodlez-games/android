import { CSVRow } from '../types';
import { parseCSV, MAX_WORD_LENGTH, shuffleArray } from './csvUtils';

// Static imports of pool data files — Vite bundles these into one chunk (no duplication)
import { CSV_POOL_1 } from './csvPoolData1';
import { CSV_POOL_2 } from './csvPoolData2';
import { CSV_POOL_3 } from './csvPoolData3';
import { CSV_POOL_4 } from './csvPoolData4';
import { CSV_POOL_5 } from './csvPoolData5';
import { CSV_POOL_6 } from './csvPoolData6';
import { CSV_POOL_7 } from './csvPoolData7';
import { CSV_POOL_8 } from './csvPoolData8';
import { CSV_POOL_9 } from './csvPoolData9';
import { CSV_POOL_10 } from './csvPoolData10';
import { CSV_POOL_11 } from './csvPoolData11';
import { CSV_POOL_12 } from './csvPoolData12';
import { CSV_POOL_13 } from './csvPoolData13';

// Concatenate all pool files into a single master string at module scope
// Note: CSV_POOL_1 includes the header row. Subsequent pools do not.
export const MASTER_CSV_DATA = [
  CSV_POOL_1, CSV_POOL_2, CSV_POOL_3, CSV_POOL_4, CSV_POOL_5,
  CSV_POOL_6, CSV_POOL_7, CSV_POOL_8, CSV_POOL_9, CSV_POOL_10,
  CSV_POOL_11, CSV_POOL_12, CSV_POOL_13,
].join('\n');

export { MAX_WORD_LENGTH };

// Module-level caches to ensure parsing only happens once
let initializedConsolidatedPool: CSVRow[] = [];
let initializedGlobalPool: CSVRow[] = [];
let initializedPoolOnly: CSVRow[] = [];
let initPromise: Promise<void> | null = null;

const FALLBACK_DATA: CSVRow[] = [
    { id: 'fb1', name: 'Colors', words: ['Red', 'Blue', 'Green', 'Yellow'] },
    { id: 'fb2', name: 'Animals', words: ['Dog', 'Cat', 'Bird', 'Fish'] },
    { id: 'fb3', name: 'Fruits', words: ['Apple', 'Banana', 'Orange', 'Grape'] },
    { id: 'fb4', name: 'Planets', words: ['Earth', 'Mars', 'Venus', 'Jupiter'] },
    { id: 'fb5', name: 'Seasons', words: ['Spring', 'Summer', 'Fall', 'Winter'] },
    { id: 'fb6', name: 'Directions', words: ['North', 'South', 'East', 'West'] },
    { id: 'fb7', name: 'Elements', words: ['Fire', 'Water', 'Air', 'Earth'] }
];

/**
 * Initializes the data pools asynchronously using dynamic imports.
 * This prevents Vite from having to eagerly transform ~2.6MB of CSV data
 * files at startup, dramatically improving dev server startup time.
 * 
 * Synchronous callers that need data before init completes will receive
 * FALLBACK_DATA until the full dataset is parsed and cached.
 */
export const ensureDataInitialized = (): void => {
    if (initializedConsolidatedPool.length > 0) return;
    if (initPromise) return; // Already loading

    initPromise = (async () => {
        try {
            // Use locally-concatenated MASTER_CSV_DATA (avoids duplicate chunk)
            // Only globalCSV is dynamically imported
            const { GLOBAL_CSV_DATA } = await import('./globalCSV');

            // Parse pool-only data (csvPoolData1-13, without famous people)
            const poolRows = parseCSV(MASTER_CSV_DATA || "");
            const poolMap = new Map<string, CSVRow>();
            for (const row of poolRows) {
                if (!row.name) continue;
                const normalizedName = row.name.toUpperCase().trim();
                if (normalizedName === 'CATEGORY' || normalizedName === 'NAME' || normalizedName === '') continue;
                if (poolMap.has(normalizedName)) {
                    const existing = poolMap.get(normalizedName)!;
                    // Merge words while preserving uniqueness and order
                    const existingWords = new Set(existing.words.map(w => w.toUpperCase().trim()));
                    const newWords: string[] = [];
                    const newDefs: string[] = [];

                    // Start with all existing words and their definitions
                    existing.words.forEach(w => newWords.push(w));
                    if (existing.definitions) {
                        existing.definitions.forEach(d => newDefs.push(d !== undefined ? d : ''));
                    }

                    // Add new words from the duplicate row (with their definitions)
                    for (let wi = 0; wi < row.words.length; wi++) {
                        const word = row.words[wi];
                        const wordUpper = word.toUpperCase().trim();
                        if (!existingWords.has(wordUpper)) {
                            existingWords.add(wordUpper);
                            newWords.push(word);
                            const def = row.definitions?.[wi];
                            newDefs.push(def !== undefined ? def : '');
                        }
                    }

                    existing.words = newWords;
                    existing.definitions = newDefs;
                } else {
                    poolMap.set(normalizedName, { ...row });
                }
            }
            initializedPoolOnly = shuffleArray(Array.from(poolMap.values()).filter(row => row.words.length >= 4));

            // Consolidated pool uses the same pool data (csvPoolData1-13)
            initializedConsolidatedPool = [...initializedPoolOnly];
            if (initializedConsolidatedPool.length === 0) initializedConsolidatedPool = FALLBACK_DATA;

            // Also pre-warm global data
            initializedGlobalPool = shuffleArray(parseCSV(GLOBAL_CSV_DATA || ""));

        } catch (e) {
            console.error("Critical error during CSV initialization:", e);
            initializedConsolidatedPool = FALLBACK_DATA;
            initializedPoolOnly = FALLBACK_DATA;
        }
    })();
};

// Kick off async initialization at module scope so it starts loading immediately
// without blocking Vite's dev server startup
ensureDataInitialized();

/**
 * Returns a promise that resolves when CSV data initialization completes.
 * Callers that need real data should await this before calling getters.
 */
export const waitForDataInit = (): Promise<void> => {
  ensureDataInitialized();
  return initPromise || Promise.resolve();
};

export const getConsolidatedData = (): CSVRow[] => {
  if (initializedConsolidatedPool.length > 0) return initializedConsolidatedPool;
  ensureDataInitialized();
  return FALLBACK_DATA;
};

/**
 * Returns only the pool data (csvPoolData1-13), without famous people data.
 * Used by game modes that need only the standard pool categories.
 */
export const getPoolData = (): CSVRow[] => {
    if (initializedPoolOnly.length > 0) return initializedPoolOnly;
    ensureDataInitialized();
    return FALLBACK_DATA;
};

export const getGlobalData = (): CSVRow[] => {
    if (initializedGlobalPool.length > 0) return initializedGlobalPool;
    ensureDataInitialized();
    return FALLBACK_DATA;
};

export const getRandomCategories = (count: number, sourceData?: CSVRow[]): CSVRow[] => {
  const data = sourceData || getConsolidatedData();
  if (data.length === 0) return [];
  return shuffleArray(data).slice(0, count);
};

export const getWordsFromCategory = (category: CSVRow, count: number): string[] => {
  const fitWords = category.words.filter(w => w.length <= MAX_WORD_LENGTH);
  return shuffleArray(fitWords).slice(0, count);
};
