import { CSVRow } from '../types';

// CSV format:
// ID,Category,CATDICT,WORD1,WORDDEF1,WORD2,WORDDEF2,...,WORD7,WORDDEF7,SCORE,CAT21
// Indices: 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
// Words at 3,5,7,9,11,13,15; defs at 4,6,8,10,12,14,16; SCORE at 17, CAT21 at 18

let parsedExpansionData: CSVRow[] | null = null;
let loadPromise: Promise<void> | null = null;

const parseExpansionCSV = (raw: string): CSVRow[] => {
  if (!raw || raw.trim().length === 0) return [];
  const lines = raw.split('\n').filter(line => line.trim().length > 0);
  if (lines.length <= 1) return [];
  const dataLines = lines.slice(1);
  const result: CSVRow[] = [];
  for (const line of dataLines) {
    try {
      const fields = parseCSVLine(line);
      if (fields.length < 18) continue;
      const id = fields[0]?.trim() || '';
      const category = fields[1]?.trim() || '';
      const catDef = fields[2]?.replace(/^"""/, '').replace(/"""$/, '').trim() || '';
      const words: string[] = [];
      const definitions: string[] = [];
      const wordIndices = [3, 5, 7, 9, 11, 13, 15];
      const defIndices = [4, 6, 8, 10, 12, 14, 16];
      for (let i = 0; i < 7; i++) {
        const word = fields[wordIndices[i]]?.trim() || '';
        const def = fields[defIndices[i]]?.replace(/^"""/, '').replace(/"""$/, '').trim() || '';
        if (word) { words.push(word); definitions.push(def); }
      }
      const score = parseInt(fields[17]?.trim() || '1', 10);
      const broadCat = fields[18]?.trim() || 'General';
      if (words.length >= 4 && category) {
        result.push({ id, name: category, catDict: catDef, words, definitions, difficulty: score, broadCategory: broadCat });
      }
    } catch (e) { continue; }
  }
  return result;
};

const parseCSVLine = (line: string): string[] => {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i]; const nextChar = line[i + 1] || ''; const nextNextChar = line[i + 2] || '';
    if (!inQuotes && char === '"' && nextChar === '"' && nextNextChar === '"') { inQuotes = true; i += 2; continue; }
    if (inQuotes) {
      if (char === '"' && nextChar === '"' && nextNextChar === '"') { inQuotes = false; result.push(current); current = ''; i += 2; if (i + 1 < line.length && line[i + 1] === ',') i++; continue; }
      current += char; continue;
    }
    if (char === ',') { result.push(current.trim()); current = ''; continue; }
    current += char;
  }
  result.push(current.trim());
  return result;
};

export const ensureExpansionDataInitialized = (): void => {
  if (parsedExpansionData && parsedExpansionData.length > 0) return;
  if (loadPromise) return;
  loadPromise = (async () => {
    try {
      const csvModule = await import('./csvExpansionData.csv?raw');
      const rawData = (csvModule as any).default || (csvModule as any).toString();
      parsedExpansionData = parseExpansionCSV(rawData);
      console.log(`[ExpansionData] Loaded ${parsedExpansionData.length} categories`);
    } catch (e) { console.error('Failed to load expansion CSV data:', e); parsedExpansionData = []; }
  })();
};

export const getExpansionData = (): CSVRow[] => {
  if (parsedExpansionData && parsedExpansionData.length > 0) return parsedExpansionData;
  return [];
};

export const waitForExpansionDataInit = (): Promise<void> => {
  if (parsedExpansionData && parsedExpansionData.length > 0) return Promise.resolve();
  ensureExpansionDataInitialized();
  return loadPromise || Promise.resolve();
};

ensureExpansionDataInitialized();