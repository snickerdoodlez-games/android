export const STORAGE_KEYS = {
  LEVEL: 'wpm_level',
  TUTORIAL_SEEN: 'wpm_tutorial_seen_v2',
  TUTORIAL_SEEN_L2: 'wpm_tutorial_seen_l2',
  TUTORIAL_SEEN_L5: 'wpm_tutorial_seen_l5',
  GAME_STATS: 'wpm_game_stats',
  DAILY_HISTORY: 'wpm_daily_history',
  ENABLED_MODES: 'wpm_enabled_modes',
  CUSTOM_POOL: 'wpm_custom_pool',
  AUTO_PLAY: 'wpm_auto_play'
};

export const getLocalISODate = (date: Date = new Date()): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getSavedLevel = (): number => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.LEVEL);
    if (!saved) return 1;
    const parsed = parseInt(saved, 10);
    return isNaN(parsed) ? 1 : parsed;
  } catch {
    return 1;
  }
};

export const saveLevel = (level: number) => {
  localStorage.setItem(STORAGE_KEYS.LEVEL, level.toString());
};

import { GameMode } from '../types';

const ALL_MODES = [
  GameMode.CLASSIC,
  GameMode.LEVEL_EMOJI,
  GameMode.LEVEL_SYNONYMS,
  GameMode.LEVEL_MIND_MATCH,
  GameMode.LEVEL_THEMED,
  GameMode.LEVEL_EXPANSION
];

export const getEnabledModes = (): GameMode[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.ENABLED_MODES);
    if (!stored) return ALL_MODES;
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : ALL_MODES;
  } catch {
    return ALL_MODES;
  }
};

export const saveEnabledModes = (modes: GameMode[]) => {
  localStorage.setItem(STORAGE_KEYS.ENABLED_MODES, JSON.stringify(modes));
};

export const getCustomPool = (): string[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.CUSTOM_POOL);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const saveCustomPool = (ids: string[]) => {
  localStorage.setItem(STORAGE_KEYS.CUSTOM_POOL, JSON.stringify(ids));
};

export const isTutorialSeen = (): boolean => {
  return !!localStorage.getItem(STORAGE_KEYS.TUTORIAL_SEEN);
};

export const markTutorialSeen = () => {
  localStorage.setItem(STORAGE_KEYS.TUTORIAL_SEEN, 'true');
};

export const getAutoPlay = (): boolean => {
  try {
    return localStorage.getItem(STORAGE_KEYS.AUTO_PLAY) === 'true';
  } catch {
    return false;
  }
};

export const saveAutoPlay = (enabled: boolean) => {
  localStorage.setItem(STORAGE_KEYS.AUTO_PLAY, enabled ? 'true' : 'false');
};

export interface CategoryMastery {
  rating3ThreeStarCount: number;
}

export interface GameStats {
  rowsSolved: number;
  levelsCompleted: number;
  totalTimeMs: number;
  hintsUsed: number;
  hintsRefused: number;
  totalMoves: number;
  solvedCategoryIds: string[];
  solvedWords: string[];
  totalScore: number;
  solvedBroadCategories: string[];
  totalStars: number;
  // Keyed by broadCategory name
  categoryStarProgress: Record<string, CategoryMastery>;
}

const DEFAULT_STATS: GameStats = {
  rowsSolved: 0,
  levelsCompleted: 0,
  totalTimeMs: 0,
  hintsUsed: 0,
  hintsRefused: 0,
  totalMoves: 0,
  solvedCategoryIds: [],
  solvedWords: [],
  totalScore: 0,
  solvedBroadCategories: [],
  totalStars: 0,
  categoryStarProgress: {}
};

export const getStats = (): GameStats => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.GAME_STATS);
    if (!stored) return DEFAULT_STATS;
    const parsed = JSON.parse(stored);
    return { 
      ...DEFAULT_STATS, 
      ...parsed,
      solvedWords: Array.isArray(parsed.solvedWords) ? parsed.solvedWords : [],
      solvedBroadCategories: Array.isArray(parsed.solvedBroadCategories) ? parsed.solvedBroadCategories : [],
      categoryStarProgress: parsed.categoryStarProgress || {}
    };
  } catch {
    return DEFAULT_STATS;
  }
};

export const updateStats = (updates: Partial<GameStats> & { lastLevelStars?: number, lastLevelDifficulty?: number, lastLevelBroadCategories?: string[] }) => {
  try {
    const current = getStats();
    
    let updatedCats = current.solvedCategoryIds;
    if (updates.solvedCategoryIds) {
        const newSet = new Set([...current.solvedCategoryIds, ...updates.solvedCategoryIds]);
        updatedCats = Array.from(newSet);
    }

    let updatedWords = current.solvedWords;
    if (updates.solvedWords) {
        const wordSet = new Set([...current.solvedWords, ...updates.solvedWords]);
        updatedWords = Array.from(wordSet);
    }

    let updatedBroad = current.solvedBroadCategories;
    if (updates.solvedBroadCategories) {
        const broadSet = new Set([...current.solvedBroadCategories, ...updates.solvedBroadCategories]);
        updatedBroad = Array.from(broadSet);
    }

    // Handle Star Gating Logic for Category Unlock (Rating 5 requires two 3-star wins in Rating 3)
    const updatedCategoryStarProgress = { ...current.categoryStarProgress };
    if (updates.lastLevelStars === 3 && updates.lastLevelDifficulty === 3 && updates.lastLevelBroadCategories) {
        updates.lastLevelBroadCategories.forEach(cat => {
            const currentProgress = updatedCategoryStarProgress[cat] || { rating3ThreeStarCount: 0 };
            updatedCategoryStarProgress[cat] = {
                rating3ThreeStarCount: currentProgress.rating3ThreeStarCount + 1
            };
        });
    }

    const updated: GameStats = {
        rowsSolved: current.rowsSolved + (updates.rowsSolved || 0),
        levelsCompleted: current.levelsCompleted + (updates.levelsCompleted || 0),
        totalTimeMs: current.totalTimeMs + (updates.totalTimeMs || 0),
        hintsUsed: current.hintsUsed + (updates.hintsUsed || 0),
        hintsRefused: current.hintsRefused + (updates.hintsRefused || 0),
        totalMoves: current.totalMoves + (updates.totalMoves || 0),
        solvedCategoryIds: updatedCats,
        solvedWords: updatedWords,
        totalScore: current.totalScore + (updates.totalScore || 0),
        solvedBroadCategories: updatedBroad,
        totalStars: current.totalStars + (updates.totalStars || 0),
        categoryStarProgress: updatedCategoryStarProgress
    };

    localStorage.setItem(STORAGE_KEYS.GAME_STATS, JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to update stats", e);
  }
};

export const getDailyHistory = (): string[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.DAILY_HISTORY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const markDailyCompleted = (dateStr: string) => {
  try {
    const history = getDailyHistory();
    if (!history.includes(dateStr)) {
      history.push(dateStr);
      localStorage.setItem(STORAGE_KEYS.DAILY_HISTORY, JSON.stringify(history));
    }
  } catch (e) {
    console.error("Failed to update daily history", e);
  }
};