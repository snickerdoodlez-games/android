import {
  getLevelMode,
  validateStandardLevel,
  validateExpansionLevel,
  getValidatedLevelData,
  clearLevelPackageCache,
} from '../services/levelContent';
import { GameMode, CSVRow } from '../types';

describe('Level Content Service', () => {
  // Reset cache between tests
  beforeEach(() => {
    clearLevelPackageCache();
  });

  // ============ getLevelMode ============
  describe('getLevelMode', () => {
    it('should follow the deterministic sequence for level 1 (CLASSIC)', () => {
      const mode = getLevelMode(1, []);
      expect(mode).toBe(GameMode.CLASSIC);
    });

    it('should return LEVEL_EMOJI for level 2', () => {
      const mode = getLevelMode(2, []);
      expect(mode).toBe(GameMode.LEVEL_EMOJI);
    });

    it('should return LEVEL_MIND_MATCH for level 3', () => {
      const mode = getLevelMode(3, []);
      expect(mode).toBe(GameMode.LEVEL_MIND_MATCH);
    });

    it('should return LEVEL_SYNONYMS for level 4', () => {
      const mode = getLevelMode(4, []);
      expect(mode).toBe(GameMode.LEVEL_SYNONYMS);
    });

    it('should return LEVEL_EXPANSION for level 5', () => {
      const mode = getLevelMode(5, []);
      expect(mode).toBe(GameMode.LEVEL_EXPANSION);
    });

    it('should return LEVEL_THEME for level 6', () => {
      const mode = getLevelMode(6, []);
      expect(mode).toBe(GameMode.LEVEL_THEME);
    });

    it('should cycle back to CLASSIC for level 7', () => {
      const mode = getLevelMode(7, []);
      expect(mode).toBe(GameMode.CLASSIC);
    });

    it('should wrap around for levels beyond sequence length', () => {
      // Sequence length is 84 - level 85 should be same as level 1
      const mode1 = getLevelMode(1, []);
      const mode85 = getLevelMode(85, []);
      expect(mode85).toBe(mode1);
    });

    it('should skip disabled modes and use the next available', () => {
      // If CLASSIC is disabled, level 1 should fall through to the next enabled mode
      const enabledModes = [GameMode.LEVEL_EMOJI];
      const mode = getLevelMode(1, enabledModes);
      expect(mode).toBe(GameMode.LEVEL_EMOJI);
    });
  });

  // ============ validateStandardLevel ============
  describe('validateStandardLevel', () => {
    const makePool = (): CSVRow[] => [
      { id: '1', name: 'Colors', words: ['Red', 'Blue', 'Green', 'Yellow', 'Purple'], difficulty: 1, broadCategory: 'Art' },
      { id: '2', name: 'Animals', words: ['Dog', 'Cat', 'Bird', 'Fish'], difficulty: 1, broadCategory: 'Animals' },
      { id: '3', name: 'Fruits', words: ['Apple', 'Banana', 'Orange', 'Grape'], difficulty: 1, broadCategory: 'Food' },
      { id: '4', name: 'Planets', words: ['Mars', 'Venus', 'Jupiter', 'Saturn'], difficulty: 1, broadCategory: 'Astronomy' },
      { id: '5', name: 'Seasons', words: ['Spring', 'Summer', 'Fall', 'Winter'], difficulty: 1, broadCategory: 'Nature' },
    ];

    it('should return a valid result with 5 rows x 4 cols', () => {
      const result = validateStandardLevel(makePool(), 5, 4, 1, GameMode.CLASSIC);
      expect(result.isValid).toBe(true);
      expect(result.data).toHaveLength(5);
    });

    it('should return invalid when pool is empty', () => {
      const result = validateStandardLevel([], 5, 4, 1, GameMode.CLASSIC);
      expect(result.isValid).toBe(false);
      expect(result.errorDetails).toContain('empty');
    });

    it('should return invalid when not enough categories available', () => {
      const smallPool = makePool().slice(0, 2); // Only 2 categories
      const result = validateStandardLevel(smallPool, 5, 4, 1, GameMode.CLASSIC);
      expect(result.isValid).toBe(false);
      expect(result.errorDetails).toContain('Needed');
    });

    it('should not have duplicate words across selected categories', () => {
      const result = validateStandardLevel(makePool(), 5, 4, 1, GameMode.CLASSIC);
      expect(result.isValid).toBe(true);
      const allWords = result.data.flatMap(cat => cat.words.map(w => w.toUpperCase().trim()));
      const uniqueWords = new Set(allWords);
      expect(uniqueWords.size).toBe(allWords.length);
    });

    it('should provide each category with exactly colCount words', () => {
      const result = validateStandardLevel(makePool(), 5, 4, 1, GameMode.CLASSIC);
      expect(result.isValid).toBe(true);
      result.data.forEach(cat => {
        expect(cat.words).toHaveLength(4);
      });
    });
  });

  // ============ validateExpansionLevel ============
  describe('validateExpansionLevel', () => {
    it('should validate using the final stage dimensions', () => {
      const pool: CSVRow[] = [
        { id: '1', name: 'Colors', words: ['Red', 'Blue', 'Green', 'Yellow'], difficulty: 1, broadCategory: 'Art' },
        { id: '2', name: 'Animals', words: ['Dog', 'Cat', 'Bird', 'Fish'], difficulty: 1, broadCategory: 'Animals' },
        { id: '3', name: 'Fruits', words: ['Apple', 'Banana', 'Orange', 'Grape'], difficulty: 1, broadCategory: 'Food' },
        { id: '4', name: 'Planets', words: ['Mars', 'Venus', 'Jupiter', 'Saturn'], difficulty: 1, broadCategory: 'Astronomy' },
        { id: '5', name: 'Seasons', words: ['Spring', 'Summer', 'Fall', 'Winter'], difficulty: 1, broadCategory: 'Nature' },
        { id: '6', name: 'Directions', words: ['North', 'South', 'East', 'West'], difficulty: 1, broadCategory: 'Nature' },
        { id: '7', name: 'Elements', words: ['Fire', 'Water', 'Air', 'EarthX'], difficulty: 1, broadCategory: 'Nature' },
      ];
      const stages = [{ rows: 3, cols: 2 }, { rows: 5, cols: 3 }, { rows: 7, cols: 4 }];
      const result = validateExpansionLevel(pool, stages, 5);
      // Needs 7 categories each with at least 4 words
      expect(result.isValid).toBe(true);
      expect(result.data).toHaveLength(7);
    });
  });

  // ============ getValidatedLevelData ============
  describe('getValidatedLevelData', () => {
    it('should return data when validation passes', () => {
      const pool: CSVRow[] = [
        { id: '1', name: 'Colors', words: ['Red', 'Blue', 'Green', 'Yellow'], difficulty: 1, broadCategory: 'Art' },
        { id: '2', name: 'Animals', words: ['Dog', 'Cat', 'Bird', 'Fish'], difficulty: 1, broadCategory: 'Animals' },
        { id: '3', name: 'Fruits', words: ['Apple', 'Banana', 'Orange', 'Grape'], difficulty: 1, broadCategory: 'Food' },
        { id: '4', name: 'Planets', words: ['Mars', 'Venus', 'Jupiter', 'Saturn'], difficulty: 1, broadCategory: 'Astronomy' },
        { id: '5', name: 'Seasons', words: ['Spring', 'Summer', 'Fall', 'Winter'], difficulty: 1, broadCategory: 'Nature' },
      ];
      const result = getValidatedLevelData(5, pool, 4, 1, GameMode.CLASSIC);
      expect(result).toHaveLength(5);
    });

    it('should return empty array when validation fails', () => {
      const data = getValidatedLevelData(10, [], 4, 1, GameMode.CLASSIC);
      expect(data).toEqual([]);
    });
  });
});
