import { CSVRow } from '../types';

export const MAX_WORD_LENGTH = 50;

// Fisher-Yates shuffle algorithm for unbiased randomization
// This ensures every element has an equal probability of being selected.
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Parse a single CSV line into its field parts, handling quoted values
// Two formats are supported:
//   1. "" pairs toggle quote mode (e.g., ""hello"" → hello)
//   2. Single " toggles quote mode (standard CSV, e.g., "hello" → hello)
// This ensures commas inside quoted fields are treated as content,
// not as field separators.
export function parseCSVLine(line: string): string[] {
  const parts: string[] = [];
  let current = '';
  let inQuote = false;
  
  for (let j = 0; j < line.length; j++) {
    const char = line[j];
    if (char === '"' && line[j+1] === '"') {
      // "" pair toggles quote mode (the format's way of marking quoted fields)
      inQuote = !inQuote;
      j++;  // skip the second quote of the pair
    } else if (char === '"') {
      // Single " also toggles quote mode for standard CSV quoting
      inQuote = !inQuote;
    } else if (char === ',' && !inQuote) {
      parts.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  parts.push(current);
  return parts;
}

export const parseCSV = (csv: string): CSVRow[] => {
  const lines = csv.trim().split('\n');
  const rawData: CSVRow[] = [];
  
  if (lines.length < 2) return [];

  // Detect format from the header row
  const headerParts = parseCSVLine(lines[0].trim());
  const hasCatDict = headerParts.length >= 3 && 
    headerParts[2].toUpperCase().trim() === 'CATDICT';

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const parts = parseCSVLine(line);

    // Minimum requirement: ID, Category Name, at least some content
    if (parts.length < 5) continue;

    const id = parts[0].trim();
    const name = parts[1].trim(); 
    
    // Extract Metadata from the end of the row as per specification
    const rawDiff = parts[parts.length - 2]?.trim();
    const difficulty = parseInt(rawDiff, 10) || 1;
    
    // Broad Category is the final column
    const broadCategory = parts[parts.length - 1]?.trim() || "General";

    if (hasCatDict) {
      // New format: ID,Category,CATDICT,WORD1,WORDDEF1,WORD2,WORDDEF2,...
      // parts[2] = CATDICT (category description)
      // parts[3..10] = WORD1,WORDDEF1,WORD2,WORDDEF2,WORD3,WORDDEF3,WORD4,WORDDEF4
      const catDict = parts[2].trim();
      const words: string[] = [];
      const definitions: string[] = [];
      
      // Extract WORD/WORDDEF pairs starting at index 3, stepping by 2
      for (let j = 3; j <= 9 && j + 1 < parts.length; j += 2) {
        const word = parts[j]?.trim();
        const def = parts[j + 1]?.trim();
        if (word && word.length > 0 && word.length <= MAX_WORD_LENGTH) {
          words.push(word);
          // Only push definition if it's a non-empty string
          definitions.push(def && def.length > 0 ? def : '');
        }
      }

      if (words.length >= 3) {
        rawData.push({ 
          id, 
          name, 
          catDict,
          words, 
          definitions,
          difficulty, 
          broadCategory 
        });
      }
    } else {
      // Old format: id,category,word1,word2,...,Score,Category
      // Words are everything between the ID/Name and the Metadata
      const words = parts.slice(2, parts.length - 2)
          .map(w => w.trim())
          .filter(w => w.length > 0 && w.length <= MAX_WORD_LENGTH);

      if (words.length >= 3) {
        rawData.push({ 
          id, 
          name, 
          words, 
          difficulty, 
          broadCategory 
        });
      }
    }
  }
  return rawData;
};

/**
 * PRE-CHECK UTILITY: Visual Fit Logic
 * This mimics the browser's rendering engine to see if a word fits 
 * within the physical boundaries of a game tile on the current device.
 */
export const checkVisualFit = (word: string, colCount: number, isEmoji: boolean): boolean => {
  // If we're server-side or don't have a window, skip the check
  if (typeof window === 'undefined' || !document.createElement('canvas')) return true;

  // 1. Determine the available space for a single tile on THIS device
  const rootElement = document.getElementById('root');
  const containerWidth = rootElement ? rootElement.offsetWidth : window.innerWidth;
  
  // These values are estimated based on typical game layout padding and gaps.
  // The goal is to approximate the usable width for a tile as accurately as possible.
  const gamePadding = 4 * 2; // Roughly px-2 on main content container of LevelLayout
  const gapSize = 4; // Roughly gap-1 (0.25rem * 16px/rem = 4px) between tiles

  const effectiveContentWidth = containerWidth - gamePadding;
  const availableWidthPerColumn = (effectiveContentWidth - (colCount - 1) * gapSize) / colCount;

  // 2. Measure the word using the Game's Font
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return true;

  let fontSize;
  if (isEmoji) {
    // Emojis typically use larger font sizes. Text-5xl is 3rem.
    fontSize = '3rem'; 
  } else {
    // For text, adjust font size based on column count (narrower columns need smaller text)
    if (colCount >= 5) { // For modes like Cascade (6 cols) or wide Expansion stages (5 cols)
      fontSize = '0.9rem'; 
    } else { // Standard 3 or 4 columns
      fontSize = '1.1rem'; // User's suggested default for text.
    }
  }
  
  // MATCH YOUR CSS: This ensures the measurement is 100% accurate to the UI
  // font-black in CSS corresponds to fontWeight 900.
  context.font = `900 ${fontSize} Oswald, sans-serif`; 
  const textWidth = context.measureText(word.toUpperCase()).width;

  // 3. Return TRUE if it fits with a small safety buffer (e.g., 6 pixels)
  // This buffer accounts for minor rendering differences or internal tile padding.
  const safetyBuffer = 6; 
  return textWidth < (availableWidthPerColumn - safetyBuffer);
};