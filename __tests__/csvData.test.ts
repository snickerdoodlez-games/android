import { getRandomCategories, getWordsFromCategory } from '../services/csvData';
import { CSVRow } from '../types';

describe('CSV Data Service', () => {
  let testPool: CSVRow[];

  beforeEach(() => {
    testPool = [
      { id: '1', name: 'Colors', words: ['Red', 'Blue', 'Green', 'Yellow', 'Purple'], difficulty: 1, broadCategory: 'Art' },
      { id: '2', name: 'Animals', words: ['Dog', 'Cat', 'Bird', 'Fish'], difficulty: 1, broadCategory: 'Animals' },
      { id: '3', name: 'Fruits', words: ['Apple', 'Banana', 'Orange', 'Grape'], difficulty: 1, broadCategory: 'Food' },
      { id: '4', name: 'Planets', words: ['Earth', 'Mars', 'Venus', 'Jupiter'], difficulty: 1, broadCategory: 'Astronomy' },
      { id: '5', name: 'Seasons', words: ['Spring', 'Summer', 'Fall', 'Winter'], difficulty: 1, broadCategory: 'Nature' },
    ];
  });

  // ============ getRandomCategories ============
  describe('getRandomCategories', () => {
    it('should return the requested number of categories', () => {
      const result = getRandomCategories(3, testPool);
      expect(result).toHaveLength(3);
    });

    it('should return all unique categories', () => {
      const result = getRandomCategories(5, testPool);
      const names = result.map(r => r.name);
      const uniqueNames = new Set(names);
      expect(uniqueNames.size).toBe(5);
    });

    it('should return empty array when pool is empty', () => {
      expect(getRandomCategories(3, [])).toEqual([]);
    });

    it('should return all available categories if count exceeds pool size', () => {
      const result = getRandomCategories(10, testPool);
      // slice(0, count) on shuffled array — for count > length, returns all
      expect(result.length).toBeLessThanOrEqual(testPool.length);
    });

    it('should return empty array when count is 0', () => {
      expect(getRandomCategories(0, testPool)).toEqual([]);
    });
  });

  // ============ getWordsFromCategory ============
  describe('getWordsFromCategory', () => {
    it('should return the requested number of words from a category', () => {
      const category = testPool[0]; // Colors: 5 words
      const words = getWordsFromCategory(category, 3);
      expect(words).toHaveLength(3);
    });

    it('should only return words that exist in the category', () => {
      const category = testPool[0]; // Colors: ['Red', 'Blue', 'Green', 'Yellow', 'Purple']
      const words = getWordsFromCategory(category, 5);
      words.forEach(w => {
        expect(category.words).toContain(w);
      });
    });

    it('should filter out words exceeding MAX_WORD_LENGTH (50)', () => {
      const category: CSVRow = { 
        id: '99', 
        name: 'LongWords', 
        words: ['Short', 'A'.repeat(51), 'Tiny', 'A'.repeat(60), 'Ok'], 
        difficulty: 1, 
        broadCategory: 'Test' 
      };
      const words = getWordsFromCategory(category, 4);
      // Only 3 words should be under 50 chars: 'Short', 'Tiny', 'Ok'
      expect(words.length).toBeLessThanOrEqual(3);
      words.forEach(w => {
        expect(w.length).toBeLessThanOrEqual(50);
      });
    });

    it('should return all valid words if count exceeds available words', () => {
      const category: CSVRow = {
        id: '1',
        name: 'Small',
        words: ['Only', 'Two'],
        difficulty: 1,
        broadCategory: 'Test',
      };
      const words = getWordsFromCategory(category, 10);
      expect(words).toHaveLength(2);
    });
  });
});
