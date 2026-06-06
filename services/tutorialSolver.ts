// ============================================================
// Tutorial Solver - Finds misplaced tiles for in-level tutorial
// ============================================================
// This utility computes which swaps the tutorial should make
// to solve a row on the actual level content.

import { TileData } from '../types';

/**
 * Find a row in a flat tile array that is NOT yet solved and has
 * exactly 1 or 2 misplaced tiles (intruders).
 */
export function findFixableRow(tiles: TileData[], cols: number): {
  rowIndex: number;
  intruderIndices: number[]; // indices within the row array (0-cols-1)
} | null {
  const rowCount = Math.floor(tiles.length / cols);

  for (let r = 0; r < rowCount; r++) {
    const row = tiles.slice(r * cols, r * cols + cols);
    
    // Skip already solved rows
    if (row.every(t => t.status === 'solved')) continue;

    // Count which category appears most in this row
    const catCounts = new Map<string, number>();
    row.forEach(t => {
      catCounts.set(t.categoryId, (catCounts.get(t.categoryId) || 0) + 1);
    });

    // Find the majority category
    let majorityCat = '';
    let maxCount = 0;
    catCounts.forEach((count, cat) => {
      if (count > maxCount) { maxCount = count; majorityCat = cat; }
    });

    // If no majority or row is already solved, skip
    if (!majorityCat || maxCount < 2) continue;

    // Find intruders (tiles NOT belonging to majority category)
    const intruders: number[] = [];
    row.forEach((t, idx) => {
      if (t.categoryId !== majorityCat) intruders.push(idx);
    });

    // We can only handle rows with 1 or 2 intruders
    if (intruders.length === 0) continue;
    if (intruders.length <= 2) {
      return { rowIndex: r, intruderIndices: intruders };
    }
  }

  return null;
}

/**
 * Find a tile in the array that belongs to `targetCategoryId`
 * but is located at a different row (r * cols + some idx).
 * Returns the global index of a matching tile.
 */
export function findTileFromOtherRow(
  tiles: TileData[],
  targetCategoryId: string,
  excludeRow: number,
  cols: number
): number | null {
  const rowCount = Math.floor(tiles.length / cols);

  for (let r = 0; r < rowCount; r++) {
    if (r === excludeRow) continue;
    const row = tiles.slice(r * cols, r * cols + cols);
    for (let c = 0; c < row.length; c++) {
      const t = row[c];
      if (t.categoryId === targetCategoryId && t.status !== 'solved' && t.status !== 'locked') {
        return r * cols + c;
      }
    }
  }

  return null;
}

/**
 * Get the instruction text for each tutorial step
 */
export interface TutorialStep {
  message: string;
  colorClass: string;
  borderColor: string;
}

export function getTutorialSteps(modeName: string): TutorialStep[] {
  switch (modeName) {
    case 'CLASSIC':
      return [
        { message: 'FIND 4 TILES THAT BELONG TOGETHER', colorClass: 'text-neon-cyan', borderColor: 'border-neon-cyan' },
        { message: 'SWAP TILES TO GROUP THEM', colorClass: 'text-neon-blue', borderColor: 'border-neon-blue' },
        { message: 'MATCHED ROWS ARE LOCKED!', colorClass: 'text-neon-lime', borderColor: 'border-neon-lime' },
        { message: 'YOUR TURN! FINISH THE LEVEL', colorClass: 'text-white', borderColor: 'border-white' },
      ];
    case 'THEMED':
      return [
        { message: 'THEMED CATEGORIES AWAIT!', colorClass: 'text-neon-magenta', borderColor: 'border-neon-magenta' },
        { message: 'SWAP TILES BY THEME', colorClass: 'text-neon-blue', borderColor: 'border-neon-blue' },
        { message: 'MATCHED ROWS ARE LOCKED!', colorClass: 'text-neon-lime', borderColor: 'border-neon-lime' },
        { message: 'YOUR TURN! FINISH THE LEVEL', colorClass: 'text-white', borderColor: 'border-white' },
      ];
    case 'SYNONYMS':
      return [
        { message: 'GROUP WORDS WITH SIMILAR MEANINGS', colorClass: 'text-neon-lime', borderColor: 'border-neon-lime' },
        { message: 'SWAP SYNONYMS TOGETHER', colorClass: 'text-neon-blue', borderColor: 'border-neon-blue' },
        { message: 'MATCHED ROWS ARE LOCKED!', colorClass: 'text-neon-lime', borderColor: 'border-neon-lime' },
        { message: 'YOUR TURN! FINISH THE LEVEL', colorClass: 'text-white', borderColor: 'border-white' },
      ];
    case 'EMOJI':
      return [
        { message: 'MATCH EMOJI TILES BY CATEGORY', colorClass: 'text-neon-yellow', borderColor: 'border-neon-yellow' },
        { message: 'SWAP EMOJIS TO GROUP THEM', colorClass: 'text-neon-blue', borderColor: 'border-neon-blue' },
        { message: 'MATCHED ROWS ARE LOCKED!', colorClass: 'text-neon-lime', borderColor: 'border-neon-lime' },
        { message: 'YOUR TURN! FINISH THE LEVEL', colorClass: 'text-white', borderColor: 'border-white' },
      ];
    case 'MIND MATCH':
      return [
        { message: 'SELECT 4 MATCHING TILES', colorClass: 'text-neon-orange', borderColor: 'border-neon-orange' },
        { message: 'GROUP THEM BY CATEGORY', colorClass: 'text-neon-blue', borderColor: 'border-neon-blue' },
        { message: 'CORRECT GROUP IS LOCKED!', colorClass: 'text-neon-lime', borderColor: 'border-neon-lime' },
        { message: 'YOUR TURN! FINISH THE LEVEL', colorClass: 'text-white', borderColor: 'border-white' },
      ];
    case 'EXPANSION':
      return [
        { message: 'SOLVE A ROW TO EXPAND THE GRID', colorClass: 'text-neon-red', borderColor: 'border-neon-red' },
        { message: 'SWAP TILES TO FIX THE ROW', colorClass: 'text-neon-blue', borderColor: 'border-neon-blue' },
        { message: 'ROW SOLVED! MORE TILES APPEAR!', colorClass: 'text-neon-lime', borderColor: 'border-neon-lime' },
        { message: 'YOUR TURN! FINISH THE LEVEL', colorClass: 'text-white', borderColor: 'border-white' },
      ];
    default:
      return [
        { message: 'FIND 4 TILES THAT BELONG TOGETHER', colorClass: 'text-neon-cyan', borderColor: 'border-neon-cyan' },
        { message: 'SWAP TILES TO GROUP THEM', colorClass: 'text-neon-blue', borderColor: 'border-neon-blue' },
        { message: 'MATCHED ROWS ARE LOCKED!', colorClass: 'text-neon-lime', borderColor: 'border-neon-lime' },
        { message: 'YOUR TURN! FINISH THE LEVEL', colorClass: 'text-white', borderColor: 'border-white' },
      ];
  }
}
