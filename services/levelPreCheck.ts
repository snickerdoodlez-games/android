import { CSVRow } from '../types';
import { MAX_WORD_LENGTH, shuffleArray } from './csvUtils';

/**
 * Rigorously checks category data before a level starts to guarantee solvability.
 * Ensures no word overlap between any categories selected for the same board.
 */
export const getValidatedLevelData = (
  targetCount: number,
  sourceData: CSVRow[],
  wordsPerCategory: number = 4
): CSVRow[] => {
  if (!sourceData || sourceData.length === 0) return [];

  const selectedCategories: CSVRow[] = [];
  const globalUsedWords = new Set<string>();
  const globalCategoryNames = new Set<string>();

  const useFamous = Math.random() < 0.10;
  let famousAdded = false;

  const shuffledPool = shuffleArray(sourceData);

  for (const candidate of shuffledPool) {
    if (selectedCategories.length >= targetCount) break;

    const isFamous = candidate.name.startsWith('Famous');
    if (isFamous && (famousAdded || !useFamous)) continue;

    const candidateNameUpper = candidate.name.trim().toUpperCase();
    if (globalUsedWords.has(candidateNameUpper)) continue;
    if (globalCategoryNames.has(candidateNameUpper)) continue;

    const validWords = [];
    for (const w of candidate.words) {
        const cleanWord = w.trim().toUpperCase();
        if (cleanWord.length > MAX_WORD_LENGTH) continue;
        
        // Strictest possible overlap check
        if (globalUsedWords.has(cleanWord)) continue;
        if (globalCategoryNames.has(cleanWord)) continue;
        if (cleanWord === candidateNameUpper) continue;
        
        validWords.push(w);
    }

    if (validWords.length >= wordsPerCategory) {
        const shuffledWords = shuffleArray(validWords);
        const wordsToUse = shuffledWords.slice(0, wordsPerCategory);
        
        wordsToUse.forEach(w => globalUsedWords.add(w.trim().toUpperCase()));
        globalCategoryNames.add(candidateNameUpper);
        
        selectedCategories.push({
            ...candidate,
            words: wordsToUse
        });

        if (isFamous) famousAdded = true;
    }
  }

  // Safety Fallback with filtered categories only
  if (selectedCategories.length < targetCount) {
    const existingIds = new Set(selectedCategories.map(c => c.id));
    for (const candidate of shuffledPool) {
        if (selectedCategories.length >= targetCount) break;
        if (existingIds.has(candidate.id)) continue;
        if (candidate.words.length >= wordsPerCategory) {
            selectedCategories.push({
                ...candidate,
                words: candidate.words.slice(0, wordsPerCategory)
            });
            existingIds.add(candidate.id);
        }
    }
  }

  return selectedCategories;
};
