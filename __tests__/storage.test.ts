import {
  clearStatsCache,
  getLocalISODate,
  getSavedLevel,
  saveLevel,
  getStats,
  updateStats,
  getEnabledModes,
  saveEnabledModes,
  getCustomPool,
  saveCustomPool,
  getAutoPlay,
  saveAutoPlay,
  getDailyHistory,
  markDailyCompleted,
  saveAppState,
  getAppState,
  clearAppState,
  getTimeSinceLastActive,
  updateLastActiveTimestamp,
} from '../services/storage';
import { GameMode } from '../types';

describe('Storage Service', () => {
  // Clear localStorage and stats cache before each test to prevent state leakage
  beforeEach(() => {
    localStorage.clear();
    clearStatsCache();
  });

  // ============ getLocalISODate ============
  describe('getLocalISODate', () => {
    it('should return ISO date string for a given date', () => {
      const date = new Date(2024, 0, 15); // Jan 15, 2024
      const result = getLocalISODate(date);
      expect(result).toBe('2024-01-15');
    });

    it('should pad single-digit month and day', () => {
      const date = new Date(2024, 2, 5); // Mar 5, 2024
      const result = getLocalISODate(date);
      expect(result).toBe('2024-03-05');
    });

    it('should handle end of year', () => {
      const date = new Date(2024, 11, 31); // Dec 31, 2024
      const result = getLocalISODate(date);
      expect(result).toBe('2024-12-31');
    });
  });

  // ============ getSavedLevel / saveLevel ============
  describe('getSavedLevel / saveLevel', () => {
    it('should return 1 when no level is saved', () => {
      expect(getSavedLevel()).toBe(1);
    });

    it('should return saved level', () => {
      saveLevel(5);
      expect(getSavedLevel()).toBe(5);
    });

    it('should return updated level after saving', () => {
      saveLevel(5);
      saveLevel(10);
      expect(getSavedLevel()).toBe(10);
    });

    it('should handle corrupted localStorage gracefully', () => {
      localStorage.setItem('savedLevel', 'not-a-number');
      expect(getSavedLevel()).toBe(1);
    });
  });

  // ============ getStats / updateStats ============
  describe('getStats / updateStats', () => {
    it('should return default stats when nothing is saved', () => {
      const stats = getStats();
      expect(stats.levelsCompleted).toBe(0);
      expect(stats.totalScore).toBe(0);
      expect(stats.totalStars).toBe(0);
      expect(stats.rowsSolved).toBe(0);
      expect(stats.solvedCategoryIds).toEqual([]);
      expect(stats.solvedWords).toEqual([]);
    });

    it('should update stats cumulatively', () => {
      updateStats({ levelsCompleted: 1, totalScore: 100, totalStars: 2, rowsSolved: 5 });
      const stats = getStats();
      expect(stats.levelsCompleted).toBe(1);
      expect(stats.totalScore).toBe(100);
      expect(stats.totalStars).toBe(2);
      expect(stats.rowsSolved).toBe(5);
    });

    it('should accumulate values across multiple updates', () => {
      updateStats({ levelsCompleted: 1, totalScore: 100 });
      updateStats({ levelsCompleted: 2, totalScore: 200 });
      const stats = getStats();
      expect(stats.levelsCompleted).toBe(3); // 1 + 2
      expect(stats.totalScore).toBe(300); // 100 + 200
    });

    it('should merge solvedCategoryIds without duplicates', () => {
      updateStats({ solvedCategoryIds: ['cat1', 'cat2'] });
      updateStats({ solvedCategoryIds: ['cat2', 'cat3'] });
      const stats = getStats();
      expect(stats.solvedCategoryIds).toContain('cat1');
      expect(stats.solvedCategoryIds).toContain('cat2');
      expect(stats.solvedCategoryIds).toContain('cat3');
      expect(stats.solvedCategoryIds).toHaveLength(3);
    });

    it('should merge solvedWords without duplicates', () => {
      updateStats({ solvedWords: ['word1', 'word2'] });
      updateStats({ solvedWords: ['word2', 'word3'] });
      const stats = getStats();
      expect(stats.solvedWords).toContain('word1');
      expect(stats.solvedWords).toContain('word2');
      expect(stats.solvedWords).toContain('word3');
      expect(stats.solvedWords).toHaveLength(3);
    });

    it('should track star progress for rating 3 with 3-star wins', () => {
      updateStats({
        lastLevelStars: 3,
        lastLevelDifficulty: 3,
        lastLevelBroadCategories: ['Technology'],
      });
      const stats = getStats();
      expect(stats.categoryStarProgress['Technology'].rating3ThreeStarCount).toBe(1);
    });

    it('should not track star progress for non-3-star wins', () => {
      updateStats({
        lastLevelStars: 2,
        lastLevelDifficulty: 3,
        lastLevelBroadCategories: ['Technology'],
      });
      const stats = getStats();
      expect(stats.categoryStarProgress['Technology']).toBeUndefined();
    });
  });

  // ============ getEnabledModes / saveEnabledModes ============
  describe('getEnabledModes / saveEnabledModes', () => {
    it('should return all modes by default', () => {
      const modes = getEnabledModes();
      expect(modes).toContain(GameMode.CLASSIC);
      expect(modes).toContain(GameMode.LEVEL_EMOJI);
      expect(modes).toContain(GameMode.LEVEL_SYNONYMS);
    });

    it('should save and retrieve enabled modes', () => {
      saveEnabledModes([GameMode.CLASSIC, GameMode.LEVEL_EMOJI]);
      const modes = getEnabledModes();
      expect(modes).toHaveLength(2);
      expect(modes).toContain(GameMode.CLASSIC);
      expect(modes).toContain(GameMode.LEVEL_EMOJI);
      expect(modes).not.toContain(GameMode.LEVEL_SYNONYMS);
    });
  });

  // ============ getCustomPool / saveCustomPool ============
  describe('getCustomPool / saveCustomPool', () => {
    it('should return empty array when nothing saved', () => {
      expect(getCustomPool()).toEqual([]);
    });

    it('should save and retrieve custom pool IDs', () => {
      saveCustomPool(['cat1', 'cat2', 'cat3']);
      expect(getCustomPool()).toEqual(['cat1', 'cat2', 'cat3']);
    });
  });

  // ============ getAutoPlay / saveAutoPlay ============
  describe('getAutoPlay / saveAutoPlay', () => {
    it('should return false by default', () => {
      expect(getAutoPlay()).toBe(false);
    });

    it('should save and retrieve auto play setting', () => {
      saveAutoPlay(true);
      expect(getAutoPlay()).toBe(true);
      saveAutoPlay(false);
      expect(getAutoPlay()).toBe(false);
    });
  });

  // ============ getDailyHistory / markDailyCompleted ============
  describe('getDailyHistory / markDailyCompleted', () => {
    it('should return empty array initially', () => {
      expect(getDailyHistory()).toEqual([]);
    });

    it('should mark a date as completed', () => {
      markDailyCompleted('2024-01-15');
      const history = getDailyHistory();
      expect(history).toContain('2024-01-15');
    });

    it('should not duplicate dates', () => {
      markDailyCompleted('2024-01-15');
      markDailyCompleted('2024-01-15');
      const history = getDailyHistory();
      expect(history.filter(d => d === '2024-01-15')).toHaveLength(1);
    });
  });

  // ============ saveAppState / getAppState / clearAppState ============
  describe('saveAppState / getAppState / clearAppState', () => {
    it('should return null when no state saved', () => {
      expect(getAppState()).toBeNull();
    });

    it('should save and retrieve app state', () => {
      const state = { levelIndex: 5, gameMode: 'CLASSIC', score: 1000 };
      saveAppState(state);
      expect(getAppState()).toEqual(state);
    });

    it('should clear app state', () => {
      saveAppState({ levelIndex: 5, gameMode: 'CLASSIC', score: 1000 });
      clearAppState();
      expect(getAppState()).toBeNull();
    });
  });

  // ============ getTimeSinceLastActive / updateLastActiveTimestamp ============
  describe('getTimeSinceLastActive', () => {
    it('should return Infinity when no last active timestamp', () => {
      expect(getTimeSinceLastActive()).toBe(Infinity);
    });

    it('should update and return time since last active', () => {
      updateLastActiveTimestamp();
      const result = getTimeSinceLastActive();
      expect(typeof result).toBe('number');
      expect(result).toBeGreaterThanOrEqual(0);
    });
  });
});
