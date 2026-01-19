
import { CSVRow } from '../types';
import { MASTER_CSV_DATA } from './masterData';
import { FAMOUS_PEOPLE_DATA } from './famousPeopleData';
import { GLOBAL_CSV_DATA } from './globalCSV';
import { CSV_MEDIUM_DATA } from './csvMedium';
import { parseCSV, parseClusterCSV, MAX_WORD_LENGTH, shuffleArray } from './csvUtils';

// Re-export MAX_WORD_LENGTH for backward compatibility if any file imports it from here
export { MAX_WORD_LENGTH };

let cachedData: CSVRow[] | null = null;
let cachedGlobalData: CSVRow[] | null = null;

const FALLBACK_DATA: CSVRow[] = [
    { id: 'fb1', name: 'Colors', words: ['Red', 'Blue', 'Green', 'Yellow'] },
    { id: 'fb2', name: 'Animals', words: ['Dog', 'Cat', 'Bird', 'Fish'] },
    { id: 'fb3', name: 'Fruits', words: ['Apple', 'Banana', 'Orange', 'Grape'] },
    { id: 'fb4', name: 'Planets', words: ['Earth', 'Mars', 'Venus', 'Jupiter'] },
    { id: 'fb5', name: 'Seasons', words: ['Spring', 'Summer', 'Fall', 'Winter'] },
    { id: 'fb6', name: 'Directions', words: ['North', 'South', 'East', 'West'] },
    { id: 'fb7', name: 'Elements', words: ['Fire', 'Water', 'Air', 'Earth'] }
];

export const getConsolidatedData = (): CSVRow[] => {
  if (cachedData && cachedData.length > 0) return cachedData;

  try {
      // Consolidate all data sources EXCEPT Global (Translation) data
      // Global data is now injected sparingly (5% of levels) via getGlobalData()
      const allRows: CSVRow[] = [
        ...parseCSV(MASTER_CSV_DATA || ""),
        ...parseClusterCSV(CSV_MEDIUM_DATA || ""), 
        ...parseCSV(FAMOUS_PEOPLE_DATA || "")
      ];

      if (allRows.length === 0) {
          console.warn("CSV Parsing returned 0 rows. Using fallback.");
          return FALLBACK_DATA;
      }

      // Merge duplicates by category name across all files
      const mergedMap = new Map<string, CSVRow>();
      for (const row of allRows) {
          if (!row.name) continue;
          const normalizedName = row.name.toUpperCase().trim();
          
          // Skip accidental header rows or empty names
          if (normalizedName === 'CATEGORY' || normalizedName === 'NAME' || normalizedName === '') continue;

          if (mergedMap.has(normalizedName)) {
              const existing = mergedMap.get(normalizedName)!;
              const combinedWords = Array.from(new Set([...existing.words, ...row.words]));
              existing.words = combinedWords;
          } else {
              mergedMap.set(normalizedName, { ...row });
          }
      }

      cachedData = Array.from(mergedMap.values()).filter(row => row.words.length >= 4);
      
      if (cachedData.length === 0) {
          return FALLBACK_DATA;
      }
      
      return cachedData;
  } catch (e) {
      console.error("Error loading CSV data", e);
      return FALLBACK_DATA;
  }
};

export const getGlobalData = (): CSVRow[] => {
    if (cachedGlobalData) return cachedGlobalData;
    // Parse global data separately
    cachedGlobalData = parseCSV(GLOBAL_CSV_DATA || "");
    return cachedGlobalData;
};

export const getRandomCategories = (count: number, sourceData?: CSVRow[]): CSVRow[] => {
  const data = sourceData || getConsolidatedData();
  if (data.length === 0) return [];

  // Use robust shuffle instead of weak sort
  const shuffled = shuffleArray(data);
  return shuffled.slice(0, count);
};

export const getThemedCategories = (count: number, sourceData?: CSVRow[]): { name: string, categories: CSVRow[] } => {
  const data = sourceData || getConsolidatedData();
  // Use robust shuffle instead of weak sort
  const shuffled = shuffleArray(data);
  return { 
    name: "VARIETY PACK", 
    categories: shuffled.slice(0, count) 
  };
};

export const getDailyCategories = (count: number, sourceData?: CSVRow[]): CSVRow[] => {
  const data = sourceData || getConsolidatedData();
  if (data.length === 0) return [];

  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  
  const seededRandom = (seed: number) => {
    var t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };

  const results: CSVRow[] = [];
  const temp = [...data];
  let s = seed;
  for (let i = 0; i < count && temp.length > 0; i++) {
    const r = seededRandom(s++);
    const idx = Math.floor(r * temp.length);
    results.push(temp.splice(idx, 1)[0]);
  }
  return results;
};

export const getWordsFromCategory = (category: CSVRow, count: number): string[] => {
  const fitWords = category.words.filter(w => w.length <= MAX_WORD_LENGTH);
  // Use robust shuffle for word selection as well
  return shuffleArray(fitWords).slice(0, count);
};

export const parseRawCSV = (csv: string): CSVRow[] => {
    return parseCSV(csv);
};
