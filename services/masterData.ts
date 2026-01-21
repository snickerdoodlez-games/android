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

// Consolidate all pool files into one master string
// Note: CSV_POOL_1 includes the header row. Subsequent pools do not.
export const MASTER_CSV_DATA = [
  CSV_POOL_1,
  CSV_POOL_2,
  CSV_POOL_3,
  CSV_POOL_4,
  CSV_POOL_5,
  CSV_POOL_6,
  CSV_POOL_7,
  CSV_POOL_8,
  CSV_POOL_9,
  CSV_POOL_10,
  CSV_POOL_11,
  CSV_POOL_12
].join('\n');