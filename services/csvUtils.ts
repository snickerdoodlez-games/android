import { CSVRow } from '../types';

export const MAX_WORD_LENGTH = 50;
export const MAX_CHARACTERS_PER_LINE = 13;

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

/**
 * Checks whether a word fits within the max characters per line constraint.
 * A word is rejected (returns false) if it exceeds MAX_CHARACTERS_PER_LINE
 * and does NOT contain a space or newline (i.e., it's a single long unbreakable word).
 * Multi-word strings with spaces or line breaks are acceptable at any length
 * because they can wrap across lines in the tile.
 */
export const wordFitsPerLine = (word: string): boolean => {
  const hasBreak = word.includes(' ') || word.includes('\n');
  if (!hasBreak && word.length > MAX_CHARACTERS_PER_LINE) return false;
  return true;
};
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

      // Reject row if any word exceeds max characters per line without a break
      if (!words.every(wordFitsPerLine)) continue;

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

      // Reject row if any word exceeds max characters per line without a break
      if (!words.every(wordFitsPerLine)) continue;

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
// Reusable canvas for text measurement to avoid creating new DOM elements
let measurementCanvas: HTMLCanvasElement | null = null;
let measurementContext: CanvasRenderingContext2D | null = null;

const getMeasurementContext = (): CanvasRenderingContext2D | null => {
  if (measurementContext) return measurementContext;
  if (typeof window === 'undefined') return null;
  try {
    measurementCanvas = document.createElement('canvas');
    measurementContext = measurementCanvas.getContext('2d');
    return measurementContext;
  } catch {
    return null;
  }
};

/**
 * Distributes tiles across rows so no row contains more than one tile from the same category.
 * Tiles are built in category-major order (all words of category A, then B, then C...).
 * This function redistributes them round-robin: each row gets exactly one tile from each category,
 * making the initial grid as scrambled as possible.
 *
 * @param tiles - Tiles built in category-major order (category[0].tile[0..n], category[1].tile[0..n], ...)
 * @param colCount - Number of columns per row (e.g., 4 for standard, 3 for emoji)
 * @returns A new array with tiles distributed such that no row has duplicate categories
 */
export function distributeTilesAcrossRows<T extends { categoryId: string }>(tiles: T[], colCount: number): T[] {
  const rowCount = Math.floor(tiles.length / colCount);
  if (rowCount === 0) return shuffleArray(tiles);
  
  // Group tiles by category (preserving order within each category)
  const categoryGroups: Map<string, T[]> = new Map();
  for (const tile of tiles) {
    const existing = categoryGroups.get(tile.categoryId);
    if (existing) {
      existing.push(tile);
    } else {
      categoryGroups.set(tile.categoryId, [tile]);
    }
  }
  
  // Create result grid: rowCount rows × colCount columns, initially empty
  const grid: (T | null)[][] = Array.from({ length: rowCount }, () => Array(colCount).fill(null));
  
  // Track which columns have been filled for each row
  const rowFillCount: number[] = Array(rowCount).fill(0);
  
  // For each category, place its tiles into different rows (one per row)
  for (const [_, catTiles] of categoryGroups) {
    // Fisher-Yates shuffle the category's tiles first for unpredictability
    const shuffled = [...catTiles];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Pick random distinct rows for each tile in this category
    const availableRows = Array.from({ length: rowCount }, (_, i) => i);
    // Shuffle available rows
    for (let i = availableRows.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [availableRows[i], availableRows[j]] = [availableRows[j], availableRows[i]];
    }
    
    for (let t = 0; t < shuffled.length && t < rowCount; t++) {
      const row = availableRows[t];
      if (rowFillCount[row] < colCount) {
        grid[row][rowFillCount[row]] = shuffled[t];
        rowFillCount[row]++;
      }
    }
  }
  
  // Flatten grid back to 1D array, putting any remaining unplaced tiles at the end
  const result: T[] = [];
  const placed = new Set<T>();
  for (let r = 0; r < rowCount; r++) {
    for (let c = 0; c < colCount; c++) {
      const tile = grid[r][c];
      if (tile) {
        result.push(tile);
        placed.add(tile);
      }
    }
  }
  
  // Append any tiles that didn't fit (shouldn't happen if category<->count math is right)
  for (const tile of tiles) {
    if (!placed.has(tile)) {
      result.push(tile);
    }
  }
  
  return result;
}

export const checkVisualFit = (word: string, colCount: number, isEmoji: boolean): boolean => {
  const context = getMeasurementContext();
  if (!context) return true;

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

