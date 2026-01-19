
import { CSVRow } from '../types';
import { GLOBAL_CSV_DATA } from './globalCSV';
import { parseCSV } from './csvUtils';

export const getTranslationData = (): CSVRow[] => {
  return parseCSV(GLOBAL_CSV_DATA);
};
