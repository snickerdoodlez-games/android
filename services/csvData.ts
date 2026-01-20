
import { CSVRow } from '../types';
import { MASTER_CSV_DATA } from './masterData';
import { FAMOUS_PEOPLE_DATA } from './famousPeopleData';
import { GLOBAL_CSV_DATA } from './globalCSV';
import { CSV_MEDIUM_DATA } from './csvMedium';
import { parseCSV, parseClusterCSV, MAX_WORD_LENGTH, shuffleArray } from './csvUtils';

export { MAX_WORD_LENGTH };

// Module-level caches to ensure parsing only happens once
let initializedConsolidatedPool: CSVRow[] = [];
let initializedGlobalPool: CSVRow[] = [];

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
        const allRows: CSVRow[] = [
            ...parseCSV(MASTER_CSV_DATA || ""),
            ...parseClusterCSV(CSV_MEDIUM_DATA || ""), 
            ...parseCSV(FAMOUS_PEOPLE_DATA || "")
        ];

        if (allRows.length === 0) {
            initializedConsolidatedPool = FALLBACK_DATA;
            return;
        }

        const mergedMap = new Map<string, CSVRow>();
        for (const row of allRows) {
            if (!row.name) continue;
            const normalizedName = row.name.toUpperCase().trim();
            if (normalizedName === 'CATEGORY' || normalizedName === 'NAME' || normalizedName === '') continue;

            if (mergedMap.has(normalizedName)) {
                const existing = mergedMap.get(normalizedName)!;
                const combinedWords = Array.from(new Set([...existing.words, ...row.words]));
                existing.words = combinedWords;
            } else {
                mergedMap.set(normalizedName, { ...row });
            }
        }

        initializedConsolidatedPool = Array.from(mergedMap.values()).filter(row => row.words.length >= 4);
        if (initializedConsolidatedPool.length === 0) initializedConsolidatedPool = FALLBACK_DATA;
        
        // Also pre-warm global data
        initializedGlobalPool = parseCSV(GLOBAL_CSV_DATA || "");

    } catch (e) {
        console.error("Critical error during CSV initialization:", e);
        initializedConsolidatedPool = FALLBACK_DATA;
    }
};

export const getConsolidatedData = (): CSVRow[] => {
  ensureDataInitialized();
  return initializedConsolidatedPool;
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

export const getThemedCategories = (count: number, sourceData?: CSVRow[]): { name: string, categories: CSVRow[] } => {
  const data = sourceData || getConsolidatedData();
  return { 
    name: "VARIETY PACK", 
    categories: shuffleArray(data).slice(0, count) 
  };
};

export const getWordsFromCategory = (category: CSVRow, count: number): string[] => {
  const fitWords = category.words.filter(w => w.length <= MAX_WORD_LENGTH);
  return shuffleArray(fitWords).slice(0, count);
};
