import { CSVRow } from '../types';

export const MAX_WORD_LENGTH = 50;

// Fisher-Yates shuffle algorithm for unbiased randomization
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * Robust CSV parser that handles:
 * 1. Standard quoting: "Field content"
 * 2. Escaped quotes: "Field with ""escaped"" quote"
 * 3. Non-standard AI-generated quoting: ""Field content""
 */
export const parseCSV = (csv: string): CSVRow[] => {
  if (!csv) return [];
  const lines = csv.trim().split('\n');
  const rawData: CSVRow[] = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Pre-processing: Normalize the non-standard ""..."" quoting to standard "..."
    // We check for instances of ,"" or "" at the start/end to avoid breaking standard escaped quotes
    let sanitizedLine = line
      .replace(/^""/, '"')
      .replace(/""$/, '"')
      .replace(/,""/g, ',"')
      .replace(/"",/g, '",');

    const parts: string[] = [];
    let current = '';
    let inQuote = false;
    
    for (let j = 0; j < sanitizedLine.length; j++) {
      const char = sanitizedLine[j];
      
      if (char === '"') {
        if (inQuote && sanitizedLine[j + 1] === '"') {
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

    // Skip Header Rows
    const lowId = parts[0]?.toLowerCase();
    const lowName = parts[1]?.toLowerCase();
    if (lowId === 'id' || lowName === 'category' || lowName === 'name' || lowId === 'theme') continue;

    // Detection for the 13-column structure:
    // 0: ID, 1: Category, 2: CATDICT, 3-10: Words/Defs, 11: SCORE, 12: BROAD_CAT
    if (parts.length >= 11) {
      const id = parts[0];
      const name = parts[1]; 
      const categoryDefinition = parts[2];
      
      const words: string[] = [];
      const wordDefinitions: Record<string, string> = {};

      const wordIndices = [3, 5, 7, 9];
      wordIndices.forEach(idx => {
        let word = parts[idx]?.replace(/^"+|"+$/g, '').trim();
        let def = parts[idx + 1]?.replace(/^"+|"+$/g, '').trim();
        
        if (word && word.length > 0 && word.length <= MAX_WORD_LENGTH) {
            words.push(word);
            if (def) {
                wordDefinitions[word.toUpperCase()] = def;
            }
        }
      });

      const difficulty = parseInt(parts[11], 10) || 1;
      const broadCategory = parts[12] || "General";

      if (words.length >= 3) {
        rawData.push({ 
          id, 
          name, 
          categoryDefinition,
          words, 
          wordDefinitions,
          difficulty, 
          broadCategory,
          rawParts: parts 
        });
      }
    }
  }
  return rawData;
};

let sharedCanvas: HTMLCanvasElement | null = null;
let sharedContext: CanvasRenderingContext2D | null = null;

export const checkVisualFit = (word: string, availableWidth: number, isEmojiMode: boolean): boolean => {
  if (typeof window === 'undefined') return true;
  if (isEmojiMode) return true;
  if (word.length <= 4) return true;

  if (!sharedCanvas) {
    sharedCanvas = document.createElement('canvas');
    sharedContext = sharedCanvas.getContext('2d');
  }
  if (!sharedContext) return true;

  const fontSize = availableWidth < 80 ? '0.9rem' : '1.1rem';
  sharedContext.font = `900 ${fontSize} Oswald, sans-serif`; 
  
  const textWidth = sharedContext.measureText(word.toUpperCase()).width;
  const safetyBuffer = 10; 
  
  return textWidth < (availableWidth - safetyBuffer);
};