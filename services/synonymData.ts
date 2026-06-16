import { CSVRow } from '../types';
import { parseCSV, shuffleArray } from './csvUtils';

let cachedSynonymData: CSVRow[] | null = null;
let initPromise: Promise<void> | null = null;

async function loadSynonymData(): Promise<void> {
  if (cachedSynonymData) return;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    // Dynamic imports to avoid eager parsing of ~685KB of synonym data at startup
    const { CSV_SYNONYMS_1 } = await import('./CSV_SYNONYMS_1');
    const { CSV_SYNONYMS_2 } = await import('./CSV_SYNONYMS_2');
    const { CSV_SYNONYMS_3 } = await import('./CSV_SYNONYMS_3');
    const { CSV_SYNONYMS_4 } = await import('./CSV_SYNONYMS_4');

    // Concatenate all 4 CSV synonym data files and parse with the standard CSV parser
    const combinedCSV = [CSV_SYNONYMS_1, CSV_SYNONYMS_2, CSV_SYNONYMS_3, CSV_SYNONYMS_4]
      .map(csv => csv.trim())
      .filter(csv => csv.length > 0)
      .join('\n');

    const parsedData = parseCSV(combinedCSV);

    // Only keep the header from the first file, remove duplicate headers from files 2-4
    const data = parsedData.filter(row => row.name !== 'CATEGORY' && row.name !== 'Category');

    cachedSynonymData = shuffleArray(data);
  })();

  return initPromise;
}

// Start loading immediately at module scope (non-blocking)
loadSynonymData();

export const waitForSynonymDataInit = (): Promise<void> => {
  loadSynonymData();
  return initPromise || Promise.resolve();
};

export const getSynonymData = (): CSVRow[] => {
  if (cachedSynonymData) return cachedSynonymData;
  // Trigger async load if not already started
  loadSynonymData();
  return [];
};