import { CSVRow } from '../types';
import { parseCSV } from './csvUtils';
import { CSV_SYNONYMS_1 } from './CSV_SYNONYMS_1';
import { CSV_SYNONYMS_2 } from './CSV_SYNONYMS_2';
import { CSV_SYNONYMS_3 } from './CSV_SYNONYMS_3';
import { CSV_SYNONYMS_4 } from './CSV_SYNONYMS_4';

let cachedSynonymData: CSVRow[] | null = null;

export const getSynonymData = (): CSVRow[] => {
  if (cachedSynonymData) return cachedSynonymData;

  const sources = [
    CSV_SYNONYMS_1,
    CSV_SYNONYMS_2,
    CSV_SYNONYMS_3,
    CSV_SYNONYMS_4
  ];

  const data: CSVRow[] = sources.flatMap(src => {
    const rows = parseCSV(src);
    // Map the name to include the "SYNONYMS:" prefix as per previous design
    return rows.map(row => ({
      ...row,
      name: `SYNONYMS: ${row.name.toUpperCase()}`
    }));
  });

  cachedSynonymData = data;
  return data;
};