
import { CSVRow } from '../types';
import { MAX_WORD_LENGTH, shuffleArray } from './csvUtils';

/**
 * Rigorously checks category data before a level starts.
 * 1. Separates "Famous" categories to enforce 10% spawn rate and max 1 per puzzle.
 * 2. Ensures no words repeat across DIFFERENT categories (Global Uniqueness).
 * 3. Checks if a category has enough valid words remaining after filtering duplicates.
 * 4. CRITICAL: Randomly selects words from the ENTIRE row pool, not just the first 4.
 * 5. CONFLICT CHECK: Ensures category names do not appear as words, and words do not appear as category names.
 */
export const getValidatedLevelData = (
  targetCount: number,
  sourceData: CSVRow[],
  wordsPerCategory: number = 4
): CSVRow[] => {
  
  // Separation of concerns: Identify special "Famous" categories
  const famousPool = sourceData.filter(row => row.name.startsWith('Famous'));
  const standardPool = sourceData.filter(row => !row.name.startsWith('Famous'));

  const selectedCategories: CSVRow[] = [];
  const globalUsedWords = new Set<string>();
  const globalCategoryNames = new Set<string>();

  // Rule: 10% Chance to include a Famous category
  const useFamous = Math.random() < 0.10;
  let famousAdded = false;

  // Helper to process a candidate list
  const processCandidates = (candidates: CSVRow[]) => {
    // Shuffle the candidates to ensure randomness using Fisher-Yates
    const shuffledCandidates = shuffleArray(candidates);

    for (const candidate of shuffledCandidates) {
      // Stop if we filled the board
      if (selectedCategories.length >= targetCount) break;

      // Special check: If we already have a famous person, and this candidate is famous, skip it.
      // (This enforces Max 1 Famous Person per puzzle)
      if (famousAdded && candidate.name.startsWith('Famous')) continue;

      const candidateNameUpper = candidate.name.trim().toUpperCase();

      // CONFLICT CHECK 1: Ensure the category name itself isn't already used as a word in a previous category
      // e.g. If "PEPSI" is already a tile on the board, we cannot add a category named "PEPSI".
      if (globalUsedWords.has(candidateNameUpper)) {
          continue;
      }

      // Filter candidate words for uniqueness against the GLOBAL used set AND category names
      const validWords = candidate.words.filter(w => {
          const cleanWord = w.trim().toUpperCase();
          
          if (cleanWord.length > MAX_WORD_LENGTH) return false;
          
          // Conflict: Word already used in another category
          if (globalUsedWords.has(cleanWord)) return false;
          
          // Conflict: Word is the name of an already selected category
          // e.g. If "PEPSI" is an existing category, we cannot add "PEPSI" as a word in "SODA BRANDS".
          if (globalCategoryNames.has(cleanWord)) return false;

          // Conflict: Word is the name of THIS category (self-reference)
          if (cleanWord === candidateNameUpper) return false;

          return true;
      });

      // If valid, add it
      if (validWords.length >= wordsPerCategory) {
          // CRITICAL: Use Fisher-Yates shuffle on ALL valid words before slicing.
          // This guarantees we pull randomly from the ENTIRE available row data,
          // not just the first few entries.
          const shuffledWords = shuffleArray(validWords);
          const wordsToUse = shuffledWords.slice(0, wordsPerCategory);
          
          wordsToUse.forEach(w => globalUsedWords.add(w.trim().toUpperCase()));
          globalCategoryNames.add(candidateNameUpper);
          
          selectedCategories.push({
              ...candidate,
              words: wordsToUse
          });

          if (candidate.name.startsWith('Famous')) {
              famousAdded = true;
          }
      }
    }
  };

  // If we rolled the 10% chance, try to add one famous category first
  if (useFamous && famousPool.length > 0) {
      processCandidates(famousPool); // Takes 1 valid one or fails gracefully
  }

  // Fill the rest with standard categories
  processCandidates(standardPool);

  return selectedCategories;
};
