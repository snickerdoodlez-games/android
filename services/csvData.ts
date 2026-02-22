import { CSVRow } from '../types.ts';
import { parseCSV, MAX_WORD_LENGTH } from './csvUtils.ts';

// Import all data pools
import { MASTER_CSV_DATA } from './masterData.ts';
import { CSV_POOL_1 } from './csvPoolData1.ts';
import { CSV_POOL_2 } from './csvPoolData2.ts';
import { CSV_POOL_3 } from './csvPoolData3.ts';
import { CSV_POOL_4 } from './csvPoolData4.ts';
import { CSV_POOL_5 } from './csvPoolData5.ts';
import { CSV_POOL_6 } from './csvPoolData6.ts';
import { CSV_POOL_7 } from './csvPoolData7.ts';
import { CSV_POOL_9 } from './csvPoolData9.ts';
import { CSV_POOL_10 } from './csvPoolData10.ts';
import { CSV_POOL_11 } from './csvPoolData11.ts';
import { CSV_POOL_12 } from './csvPoolData12.ts';
import { CSV_POOL_13 } from './csvPoolData13.ts';

export { MAX_WORD_LENGTH };

/**
 * Parses and returns the global category data from all master sources and pools.
 */
export const getGlobalData = (): CSVRow[] => {
  const sources = [
    MASTER_CSV_DATA,
    CSV_POOL_1,
    CSV_POOL_2,
    CSV_POOL_3,
    CSV_POOL_4,
    CSV_POOL_5,
    CSV_POOL_6,
    CSV_POOL_7,
    CSV_POOL_9,
    CSV_POOL_10,
    CSV_POOL_11,
    CSV_POOL_12,
    CSV_POOL_13,
  ];

  return sources.flatMap(src => parseCSV(src));
};

/**
 * Returns a consolidated pool of category data for level generation.
 */
export const getConsolidatedData = (): CSVRow[] => {
  return getGlobalData();
};