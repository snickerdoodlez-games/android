import { CSVRow } from '../types';
import { MASTER_CSV_DATA } from './masterData';
import { GLOBAL_CSV_DATA } from './globalCSV';
import { parseCSV, MAX_WORD_LENGTH, shuffleArray } from './csvUtils';

export { MAX_WORD_LENGTH };

// Module-level caches to ensure parsing only happens once
let initializedConsolidatedPool: CSVRow[] = [];
let initializedGlobalPool: CSVRow[] = [];
let initializedPoolOnly: CSVRow[] = [];

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
 * Initializes the data pools if they haven't been already.
 * This is called internally but can be pre-warmed.
 */
    const ensureDataInitialized = () => {
    if (initializedConsolidatedPool.length > 0) return;

    try {
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
        // FamousPeopleData has been removed - only pool data is used
        initializedConsolidatedPool = [...initializedPoolOnly];
        if (initializedConsolidatedPool.length === 0) initializedConsolidatedPool = FALLBACK_DATA;
        
        // Also pre-warm global data
        initializedGlobalPool = shuffleArray(parseCSV(GLOBAL_CSV_DATA || ""));

    } catch (e) {
        console.error("Critical error during CSV initialization:", e);
        initializedConsolidatedPool = FALLBACK_DATA;
        initializedPoolOnly = FALLBACK_DATA;
    }
};

export const getConsolidatedData = (): CSVRow[] => {
  ensureDataInitialized();
  return initializedConsolidatedPool;
};

/**
 * Returns only the pool data (csvPoolData1-13), without famous people data.
 * Used by game modes that need only the standard pool categories.
 */
export const getPoolData = (): CSVRow[] => {
    ensureDataInitialized();
    return initializedPoolOnly;
};

export const getGlobalData = (): CSVRow[] => {
    ensureDataInitialized();
    return initializedGlobalPool;
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