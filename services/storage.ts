
import { auth, db, ref, set, get, child } from './firebaseConfig.ts';
import { GameMode } from '../types.ts';

export const STORAGE_KEYS = {
  LEVEL: 'wp_level',
  STATS: 'wp_stats',
  MODES: 'wp_modes',
  TUTORIAL: 'wp_tutorial_seen',
  CUSTOM_POOL: 'wp_custom_pool'
};

/**
 * Retrieves the current level index from local storage.
 */
export const getSavedLevel = (): number => {
  const level = localStorage.getItem(STORAGE_KEYS.LEVEL);
  return level ? parseInt(level, 10) : 1;
};

/**
 * Saves the current level index to local storage and syncs to Firebase if authenticated.
 */
export const saveLevel = (level: number) => {
  localStorage.setItem(STORAGE_KEYS.LEVEL, level.toString());
  if (auth.currentUser) {
    set(ref(db, `users/${auth.currentUser.uid}/level`), level);
  }
};

/**
 * Retrieves the user's game statistics.
 */
export const getStats = () => {
  const data = localStorage.getItem(STORAGE_KEYS.STATS);
  const defaultStats = {
    levelsCompleted: 0,
    totalMoves: 0,
    totalTimeMs: 0,
    rowsSolved: 0,
    solvedCategoryIds: [],
    solvedWords: [],
    totalScore: 0,
    totalStars: 0,
    solvedBroadCategories: []
  };
  return data ? { ...defaultStats, ...JSON.parse(data) } : defaultStats;
};

/**
 * Updates user statistics with new level completion data.
 */
export const updateStats = (newStats: any) => {
  const current = getStats();
  const updated = {
    ...current,
    levelsCompleted: current.levelsCompleted + (newStats.levelsCompleted || 0),
    totalMoves: current.totalMoves + (newStats.totalMoves || 0),
    totalTimeMs: current.totalTimeMs + (newStats.totalTimeMs || 0),
    totalScore: current.totalScore + (newStats.totalScore || 0),
    totalStars: current.totalStars + (newStats.totalStars || 0),
    solvedCategoryIds: Array.from(new Set([...current.solvedCategoryIds, ...(newStats.solvedCategoryIds || [])])),
    solvedWords: Array.from(new Set([...current.solvedWords, ...(newStats.solvedWords || [])])),
    solvedBroadCategories: Array.from(new Set([...(current.solvedBroadCategories || []), ...(newStats.lastLevelBroadCategories || [])]))
  };
  localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(updated));
  if (auth.currentUser) {
    set(ref(db, `users/${auth.currentUser.uid}/stats`), updated);
  }
};

/**
 * Gets the list of game modes enabled by the user.
 */
export const getEnabledModes = (): GameMode[] => {
  const data = localStorage.getItem(STORAGE_KEYS.MODES);
  return data ? JSON.parse(data) : [GameMode.CLASSIC, GameMode.LEVEL_EMOJI, GameMode.LEVEL_MIND_MATCH, GameMode.LEVEL_SYNONYMS, GameMode.LEVEL_EXPANSION, GameMode.LEVEL_THEMED];
};

/**
 * Saves the user's preferred game modes.
 */
export const saveEnabledModes = (modes: GameMode[]) => {
  localStorage.setItem(STORAGE_KEYS.MODES, JSON.stringify(modes));
};

/**
 * Checks if the tutorial has been viewed.
 */
export const isTutorialSeen = (): boolean => {
  return localStorage.getItem(STORAGE_KEYS.TUTORIAL) === 'true';
};

/**
 * Marks the tutorial as seen.
 */
export const markTutorialSeen = () => {
  localStorage.setItem(STORAGE_KEYS.TUTORIAL, 'true');
};

/**
 * Retrieves the custom category pool IDs.
 */
export const getCustomPool = (): string[] => {
  const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_POOL);
  return data ? JSON.parse(data) : [];
};

/**
 * Saves the custom category pool IDs.
 */
export const saveCustomPool = (ids: string[]) => {
  localStorage.setItem(STORAGE_KEYS.CUSTOM_POOL, JSON.stringify(ids));
};

/**
 * Synchronizes user data from Firebase to local storage.
 */
export const syncFromCloud = async () => {
  const user = auth.currentUser;
  if (!user) return;
  try {
    const snapshot = await get(child(ref(db), `users/${user.uid}`));
    if (snapshot.exists()) {
      const data = snapshot.val();
      if (data.level) localStorage.setItem(STORAGE_KEYS.LEVEL, data.level.toString());
      if (data.stats) localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(data.stats));
    }
  } catch (e) {
    console.warn("Cloud sync failed:", e);
  }
};

/**
 * Resets all user progress in Firebase and local storage.
 */
export const resetAllProgress = async () => {
  const user = auth.currentUser;
  if (user) {
    try {
      // Reset in Firebase
      await set(ref(db, `users/${user.uid}/level`), 1);
      await set(ref(db, `users/${user.uid}/stats`), {
        levelsCompleted: 0,
        totalMoves: 0,
        totalTimeMs: 0,
        rowsSolved: 0,
        solvedCategoryIds: [],
        solvedWords: [],
        totalScore: 0,
        totalStars: 0,
        solvedBroadCategories: []
      });
    } catch (e) {
      console.warn("Failed to reset cloud progress:", e);
    }
  }
  // Reset localStorage
  localStorage.clear();
  sessionStorage.clear();
};
