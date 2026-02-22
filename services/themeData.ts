import { CSVRow } from '../types';
import { CSV_THEME_DATA_1 } from './csvThemeData1';
import { CSV_THEME_DATA_2 } from './csvThemeData2';
import { CSV_THEME_DATA_3 } from './csvThemeData3';
import { CSV_THEME_DATA_4 } from './csvThemeData4';
import { CSV_THEME_DATA_5 } from './csvThemeData5';
import { CSV_THEME_DATA_6 } from './csvThemeData6';

/**
 * Robust CSV parser for the 15-column themed data.
 */
const parseThemeCSV = (csv: string): Map<string, CSVRow[]> => {
  const lines = csv.trim().split('\n');
  const themesMap = new Map<string, CSVRow[]>();
  
  if (lines.length < 2) return themesMap;

  // Header row is index 0
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const parts: string[] = [];
    let current = '';
    let inQuote = false;
    
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        if (inQuote && line[j + 1] === '"') {
          current += '"';
          j++; 
        } else {
          inQuote = !inQuote;
        }
      } else if (char === ',' && !inQuote) {
        parts.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    parts.push(current.trim());

    if (parts.length >= 15) {
      const id = parts[0];
      const themeName = parts[1].trim().toUpperCase();
      const themeDef = parts[2].trim();
      const categoryName = parts[3].trim();
      const categoryDef = parts[4].trim();
      
      const words: string[] = [];
      const wordDefinitions: Record<string, string> = {};

      // Words are at 5, 7, 9, 11
      const wordIndices = [5, 7, 9, 11];
      wordIndices.forEach(idx => {
        let word = parts[idx]?.replace(/^"+|"+$/g, '').trim();
        let def = parts[idx + 1]?.replace(/^"+|"+$/g, '').trim();
        
        if (word && word.length > 0) {
          words.push(word);
          if (def) {
            wordDefinitions[word.toUpperCase()] = def;
          }
        }
      });

      const difficulty = parseInt(parts[13], 10) || 1;
      const broadCategory = parts[14] || "General";

      if (!themesMap.has(themeName)) {
        themesMap.set(themeName, []);
      }
      
      themesMap.get(themeName)!.push({
        id,
        name: categoryName,
        categoryDefinition: categoryDef,
        words,
        wordDefinitions,
        difficulty,
        broadCategory
      });
    }
  }
  
  return themesMap;
};

let cachedThemedData: Map<string, CSVRow[]> | null = null;

/**
 * Returns a map of theme names to their list of categories.
 */
export const getThemedDataMap = (): Map<string, CSVRow[]> => {
  if (cachedThemedData) return cachedThemedData;
  
  const combinedCSV = [
    CSV_THEME_DATA_1,
    CSV_THEME_DATA_2,
    CSV_THEME_DATA_3,
    CSV_THEME_DATA_4,
    CSV_THEME_DATA_5,
    CSV_THEME_DATA_6
  ].join('\n');
  
  cachedThemedData = parseThemeCSV(combinedCSV);
  return cachedThemedData;
};
