
import { CSVRow } from '../types';
import { parseCSV, shuffleArray } from './csvUtils';
import { CSV_SYNONYMS_1 } from './CSV_SYNONYMS_1';
import { CSV_SYNONYMS_2 } from './CSV_SYNONYMS_2';
import { CSV_SYNONYMS_3 } from './CSV_SYNONYMS_3';
import { CSV_SYNONYMS_4 } from './CSV_SYNONYMS_4';

let cachedSynonymData: CSVRow[] | null = null;

export const getSynonymData = (): CSVRow[] => {
  if (cachedSynonymData) return cachedSynonymData;

  // Concatenate all 4 CSV synonym data files and parse with the standard CSV parser
  const combinedCSV = [CSV_SYNONYMS_1, CSV_SYNONYMS_2, CSV_SYNONYMS_3, CSV_SYNONYMS_4]
    .map(csv => csv.trim())
    .filter(csv => csv.length > 0)
    .join('\n');

  const parsedData = parseCSV(combinedCSV);

  // Only keep the header from the first file, remove duplicate headers from files 2-4
  const data = parsedData.filter(row => row.name !== 'CATEGORY' && row.name !== 'Category');

  cachedSynonymData = shuffleArray(data);
  return cachedSynonymData;
};
