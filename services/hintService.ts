/**
 * Hint Service
 * Manages hint count, ad-based hint regeneration, and star-based hint earning.
 * Persists hint state to localStorage for continuity across sessions.
 */

const STORAGE_KEY_HINTS = 'wpm_hints_available';
const STORAGE_KEY_HINTS_EARNED = 'wpm_hints_total_earned';
const STORAGE_KEY_LAST_STAR_MILESTONE = 'wpm_last_star_milestone';
const STORAGE_KEY_LEVEL_HINTS_PREFIX = 'wpm_level_hints_';

const DEFAULT_HINTS = 2;
const AD_REWARD_HINTS = 3;
const STARS_PER_HINT = 100;

/**
 * Get the current number of available hints.
 */
export const getAvailableHints = (): number => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_HINTS);
    if (stored === null) {
      // First time - initialize with defaults
      localStorage.setItem(STORAGE_KEY_HINTS, String(DEFAULT_HINTS));
      localStorage.setItem(STORAGE_KEY_HINTS_EARNED, '0');
      localStorage.setItem(STORAGE_KEY_LAST_STAR_MILESTONE, '0');
      return DEFAULT_HINTS;
    }
    const val = parseInt(stored, 10);
    return isNaN(val) ? DEFAULT_HINTS : Math.max(0, val);
  } catch {
    return DEFAULT_HINTS;
  }
};

/**
 * Set the number of available hints.
 */
export const setAvailableHints = (count: number): void => {
  localStorage.setItem(STORAGE_KEY_HINTS, String(Math.max(0, Math.floor(count))));
};

/**
 * Use one hint. Returns the new count.
 */
export const useHint = (): number => {
  const current = getAvailableHints();
  if (current <= 0) return 0;
  const next = current - 1;
  setAvailableHints(next);
  return next;
};

/**
 * Add hints (e.g., from ad reward). Returns the new count.
 */
export const addHints = (amount: number): number => {
  const current = getAvailableHints();
  const next = current + amount;
  setAvailableHints(next);
  
  // Track total earned
  const totalEarned = getTotalHintsEarned();
  localStorage.setItem(STORAGE_KEY_HINTS_EARNED, String(totalEarned + amount));
  
  return next;
};

/**
 * Get total hints ever earned (for analytics/stats).
 */
export const getTotalHintsEarned = (): number => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_HINTS_EARNED);
    if (stored === null) return 0;
    const val = parseInt(stored, 10);
    return isNaN(val) ? 0 : val;
  } catch {
    return 0;
  }
};

/**
 * Get the last star milestone that triggered a hint reward.
 */
export const getLastStarMilestone = (): number => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_LAST_STAR_MILESTONE);
    if (stored === null) return 0;
    const val = parseInt(stored, 10);
    return isNaN(val) ? 0 : val;
  } catch {
    return 0;
  }
};

/**
 * Check if the player has reached a new 30-star milestone and award a hint.
 * Returns the number of hints awarded (0 or 1).
 * Should be called after stars are updated (e.g., after level completion).
 */
export const checkAndAwardStarHint = (totalStars: number): number => {
  const lastMilestone = getLastStarMilestone();
  const currentMilestone = Math.floor(totalStars / STARS_PER_HINT) * STARS_PER_HINT;
  
  if (currentMilestone > lastMilestone) {
    // Award 2 hints for each new 100-star milestone crossed
    const milestonesCrossed = (currentMilestone - lastMilestone) / STARS_PER_HINT;
    const hintsToAward = milestonesCrossed * 2;
    if (hintsToAward > 0) {
      addHints(hintsToAward);
      localStorage.setItem(STORAGE_KEY_LAST_STAR_MILESTONE, String(currentMilestone));
      return hintsToAward;
    }
  }
  return 0;
};

/**
 * Reset hints to default (e.g., on progress reset).
 */
export const resetHints = (): void => {
  setAvailableHints(DEFAULT_HINTS);
  localStorage.setItem(STORAGE_KEY_HINTS_EARNED, '0');
  localStorage.setItem(STORAGE_KEY_LAST_STAR_MILESTONE, '0');
};

/**
 * Get the number of hints already used on a specific level.
 */
export const getHintsUsedOnLevel = (levelIndex: number): number => {
  try {
    const stored = localStorage.getItem(`${STORAGE_KEY_LEVEL_HINTS_PREFIX}${levelIndex}`);
    if (stored === null) return 0;
    const val = parseInt(stored, 10);
    return isNaN(val) ? 0 : Math.max(0, val);
  } catch {
    return 0;
  }
};

/**
 * Record that a hint was used on a specific level.
 * Returns the new count of hints used on that level.
 */
export const recordHintUsedOnLevel = (levelIndex: number): number => {
  const current = getHintsUsedOnLevel(levelIndex);
  const next = current + 1;
  localStorage.setItem(`${STORAGE_KEY_LEVEL_HINTS_PREFIX}${levelIndex}`, String(next));
  return next;
};

/**
 * Clear per-level hint tracking for a specific level.
 */
export const resetLevelHints = (levelIndex: number): void => {
  localStorage.removeItem(`${STORAGE_KEY_LEVEL_HINTS_PREFIX}${levelIndex}`);
};