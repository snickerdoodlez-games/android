import { GameMode, DETERMINISTIC_LEVEL_SEQUENCE, CSVRow } from '../types';
import { getConsolidatedData, getGlobalData, getPoolData } from './csvData';
import { getSynonymData } from './synonymData';
import { getEmojiData } from './emojiData';
import { getThemedDataMap } from './csvThemeDataLoader';
import { getExpansionData } from './csvExpansionDataLoader';
import { shuffleArray, checkVisualFit } from './csvUtils';
import { getStats } from './storage';

// ─── Constants ───────────────────────────────────────────────────────────────

const WORDS_PER_ROW = 4;
const EMOJI_COL_COUNT = 3;
const MM_TILES_PER_ROUND = 4;
const DEFAULT_ROW_COUNT = 5;
const MEDIUM_ROW_COUNT = 6;
const HARD_ROW_COUNT = 7;
const STAR_THRESHOLD_MEDIUM = 20;
const STAR_THRESHOLD_HARD = 50;
const MAX_VALIDATION_ATTEMPTS = 10;
const FILTERED_POOL_MIN_SIZE = 8;
const FALLBACK_POOL_MIN_SIZE = 5;
const GLOBAL_DATA_INTERVAL = 20;
const EXPANSION_STAGES: readonly { rows: number; cols: number }[] = [
  { rows: 3, cols: 2 },
  { rows: 5, cols: 3 },
  { rows: 7, cols: 4 },
];
const MAX_CACHE_SIZE = 5;

const difficultyValue = (label?: string): number => {
  if (label === 'easy') return 1;
  if (label === 'medium') return 3;
  if (label === 'hard') return 5;
  return 0; // "auto"
};

// ─── Logging ─────────────────────────────────────────────────────────────────

export interface PrecheckLogEntry {
  timestamp: string;
  levelIndex: number;
  mode: GameMode | string;
  reason: string;
  attemptedCategories: string[];
  conflictingWords: string[];
  themeName?: string;
}

export interface PrecheckResult {
  isValid: boolean;
  data: CSVRow[];
  errorDetails?: string;
}

let sessionLogs: PrecheckLogEntry[] = [];
export const getPrecheckLogs = () => sessionLogs;

const logInvalidBoard = (entry: PrecheckLogEntry) => {
  sessionLogs.push(entry);
  const existing = localStorage.getItem('LevelPrecheckLog.txt') || '';
  const themePart = entry.themeName ? ` | Theme: ${entry.themeName}` : '';
  const logLine = `[${entry.timestamp}] Level: ${entry.levelIndex} | Mode: ${entry.mode} | Reason: ${entry.reason}${themePart} | Cats: ${entry.attemptedCategories.join(', ')} | Conflicts: ${entry.conflictingWords.join(', ')}\n`;
  localStorage.setItem('LevelPrecheckLog.txt', existing + logLine);
};

/** Log a successful themed level selection to the precheck log. */
const logThemedSuccess = (
  levelIndex: number,
  mode: GameMode,
  attempt: number,
  data: CSVRow[],
  themeName: string,
) => {
  const timestamp = new Date().toLocaleString();
  const reason = `Level ${levelIndex}: Validated successfully (attempt ${attempt}).`;
  const logLine = `[${timestamp}] Level: ${levelIndex} | Mode: ${mode} | Reason: ${reason} | Theme: ${themeName} | Cats: ${data.map(c => c.name).join(', ')} | Conflicts: \n`;
  const existing = localStorage.getItem('LevelPrecheckLog.txt') || '';
  localStorage.setItem('LevelPrecheckLog.txt', existing + logLine);
};

// ─── Validation ──────────────────────────────────────────────────────────────

/**
 * Select `rowCount` categories with `colCount` distinct-tile words each.
 * Shuffles the pool, deduplicates category names / words, and shuffles word
 * order within each category so tiles don't cluster on the grid.
 */
export function validateStandardLevel(
  pool: CSVRow[],
  rowCount: number,
  colCount: number,
  levelIndex: number,
  mode: GameMode | string = 'Standard',
  themeName?: string,
): PrecheckResult {
  if (!pool || pool.length === 0) {
    return { isValid: false, data: [], errorDetails: 'Pool is empty' };
  }

  const selectedCategories: CSVRow[] = [];
  const usedWords = new Set<string>();
  const usedCategoryNames = new Set<string>();
  const shuffledPool = shuffleArray([...pool]);
  const isThemed = mode === GameMode.LEVEL_THEME;
  const isEmojiMode = mode === GameMode.LEVEL_EMOJI;

  for (const cat of shuffledPool) {
    if (selectedCategories.length === rowCount) break;

    const normalizedCatName = cat.name.trim().toUpperCase();
    if (usedCategoryNames.has(normalizedCatName)) continue;
    if (!isThemed && usedWords.has(normalizedCatName)) continue;

    const validIndices: number[] = [];
    for (let wi = 0; wi < cat.words.length; wi++) {
      const cleanWord = cat.words[wi].trim().toUpperCase();
      if (usedWords.has(cleanWord)) continue;
      if (!isThemed && usedCategoryNames.has(cleanWord)) continue;
      if (!checkVisualFit(cleanWord, colCount, isEmojiMode)) continue;
      validIndices.push(wi);
    }

    if (validIndices.length >= colCount) {
      const finalIndices = validIndices.slice(0, colCount);
      const finalWords = finalIndices.map(i => cat.words[i]);
      finalWords.forEach(w => usedWords.add(w.trim().toUpperCase()));
      usedCategoryNames.add(normalizedCatName);

      const alignedDefinitions =
        cat.definitions && cat.definitions.length > 0
          ? finalIndices.map(i => {
              const d = cat.definitions![i];
              return d !== undefined ? d : '';
            })
          : undefined;

      // Shuffle word order within category so tiles don't cluster
      const shuffleOrder = finalIndices.map((_, idx) => idx);
      for (let si = shuffleOrder.length - 1; si > 0; si--) {
        const sj = Math.floor(Math.random() * (si + 1));
        [shuffleOrder[si], shuffleOrder[sj]] = [shuffleOrder[sj], shuffleOrder[si]];
      }
      const shuffledWords = shuffleOrder.map(i => finalWords[i]);
      const shuffledDefinitions = alignedDefinitions
        ? shuffleOrder.map(i => alignedDefinitions[i])
        : undefined;

      selectedCategories.push({
        ...cat,
        words: shuffledWords,
        definitions: shuffledDefinitions,
      });
    }
  }

  if (selectedCategories.length < rowCount) {
    const error = `Level ${levelIndex}: Needed ${rowCount}, found ${selectedCategories.length}.`;
    logInvalidBoard({
      timestamp: new Date().toLocaleString(),
      levelIndex,
      mode,
      reason: error,
      attemptedCategories: selectedCategories.map(c => c.name),
      conflictingWords: [],
      themeName,
    });
    return { isValid: false, data: [], errorDetails: error };
  }

  return { isValid: true, data: selectedCategories };
}

export const getValidatedLevelData = (
  targetRowCount: number,
  sourceData: CSVRow[],
  wordsPerRow: number = WORDS_PER_ROW,
  levelIndex: number = 0,
  mode: GameMode | string = 'Standard',
  themeName?: string,
): CSVRow[] => {
  const result = validateStandardLevel(sourceData, targetRowCount, wordsPerRow, levelIndex, mode, themeName);
  return result.isValid ? result.data : [];
};

/** Validates that the pool can supply enough categories for expansion's final stage. */
export function validateExpansionLevel(
  pool: CSVRow[],
  stages: readonly { rows: number; cols: number }[],
  levelIndex: number,
  themeName?: string,
): PrecheckResult {
  const finalStage = stages[stages.length - 1];
  return validateStandardLevel(pool, finalStage.rows, finalStage.cols, levelIndex, GameMode.LEVEL_EXPANSION, themeName);
}

// ─── Cache ───────────────────────────────────────────────────────────────────

export interface LevelPackage {
  mode: GameMode;
  data: CSVRow[];
  themeName?: string;
}

const levelPackageCache = new Map<string, LevelPackage>();

const getAndPromoteCachedPackage = (key: string): LevelPackage | undefined => {
  const cached = levelPackageCache.get(key);
  if (cached) {
    levelPackageCache.delete(key);
    levelPackageCache.set(key, cached);
  }
  return cached;
};

const setCachedLevelPackage = (key: string, pkg: LevelPackage): void => {
  if (levelPackageCache.size >= MAX_CACHE_SIZE) {
    const oldestKey = levelPackageCache.keys().next().value;
    if (oldestKey !== undefined) {
      levelPackageCache.delete(oldestKey);
    }
  }
  levelPackageCache.set(key, pkg);
};

export const clearLevelPackageCache = (): void => {
  levelPackageCache.clear();
};

// ─── Difficulty / row-count helpers ──────────────────────────────────────────

/** Compute the star‑based target difficulty (1, 3, or 5). */
const getTargetDifficulty = (level: number, stars: number): number => {
  if (stars >= STAR_THRESHOLD_HARD) return 5;
  if (stars >= STAR_THRESHOLD_MEDIUM) return 3;
  if (level <= 40) return 1;
  if (level <= 100) return 3;
  return 5;
};

/**
 * Determine how many tile rows the grid should have.
 * Respects user-selected difficulty first; falls back to star‑based sizing.
 */
const computeRowCount = (stars: number, selectedDifficulty?: string): number => {
  if (selectedDifficulty) {
    return selectedDifficulty === 'easy'
      ? DEFAULT_ROW_COUNT
      : selectedDifficulty === 'medium'
        ? MEDIUM_ROW_COUNT
        : HARD_ROW_COUNT;
  }
  return stars >= STAR_THRESHOLD_HARD
    ? HARD_ROW_COUNT
    : stars >= STAR_THRESHOLD_MEDIUM
      ? MEDIUM_ROW_COUNT
      : DEFAULT_ROW_COUNT;
};

/**
 * Determine the effective target difficulty.
 * Respects user-selected difficulty first; falls back to star‑based auto.
 */
const computeTargetDifficulty = (
  levelIndex: number,
  stars: number,
  selectedDifficulty?: string,
): number => {
  const fromLabel = difficultyValue(selectedDifficulty);
  return fromLabel > 0 ? fromLabel : getTargetDifficulty(levelIndex, stars);
};

// ─── Mode helpers ────────────────────────────────────────────────────────────

/** Get the deterministic game mode for a given level, respecting enabled-modes filter. */
export const getLevelMode = (levelIndex: number, enabledModes: GameMode[] = []): GameMode => {
  const sequence = DETERMINISTIC_LEVEL_SEQUENCE;
  const baseIndex = (levelIndex - 1) % sequence.length;
  const mode = sequence[baseIndex];

  if (enabledModes.length === 0 || enabledModes.includes(mode)) {
    return mode;
  }

  // Walk forward through the sequence to find the next enabled mode
  for (let i = 1; i < sequence.length; i++) {
    const nextMode = sequence[(baseIndex + i) % sequence.length];
    if (enabledModes.includes(nextMode)) return nextMode;
  }

  return mode; // fallback (shouldn't happen)
};

/** Fetch the raw pool and optional theme name for a given mode. */
const resolvePoolForMode = (
  mode: GameMode,
  levelIndex: number,
  attemptIndex: number,
): { pool: CSVRow[]; themeName?: string } => {
  switch (mode) {
    case GameMode.LEVEL_SYNONYMS:
      return { pool: getSynonymData() };

    case GameMode.LEVEL_EMOJI:
      return { pool: getEmojiData() };

    case GameMode.LEVEL_THEME: {
      const themesMap = getThemedDataMap();
      const themeNames = Array.from(themesMap.keys()) as string[];
      if (themeNames.length === 0) {
        return { pool: getConsolidatedData() };
      }

      const startIdx = levelIndex % themeNames.length;
      const themeIdx = (startIdx + attemptIndex) % themeNames.length;
      const candidateName = themeNames[themeIdx];
      const themedPool = themesMap.get(candidateName ?? '') ?? [];

      if (themedPool.length > 0) {
        return { pool: themedPool, themeName: candidateName };
      }
      // Empty themed pool or missing — fall back to consolidated
      return { pool: getConsolidatedData() };
    }

    case GameMode.LEVEL_EXPANSION:
      return { pool: getPoolData() };

    case GameMode.LEVEL_EXPANSION_TEST:
      return { pool: getExpansionData() };

    default: {
      const consolidated = getConsolidatedData();
      // Every 20th level mixes in global data for variety
      if (levelIndex % GLOBAL_DATA_INTERVAL === 0) {
        return { pool: [...consolidated, ...getGlobalData()] };
      }
      return { pool: consolidated };
    }
  }
};

// ─── Pool filtering ──────────────────────────────────────────────────────────

/** Filter a pool by difficulty, applying mastery-star gates. */
const filterPoolByDifficulty = (
  pool: CSVRow[],
  targetDiff: number,
  stars: number,
  categoryStarProgress: Record<string, { rating3ThreeStarCount: number }>,
): CSVRow[] => {
  const hardOrMaster = (row: CSVRow): boolean => {
    const rowDiff = row.difficulty ?? 1;
    // Mastery override: 50+ stars unlocks hard + medium unconditionally
    if (stars >= STAR_THRESHOLD_HARD) return rowDiff === 5 || rowDiff === 3;
    // Medium gate
    if (rowDiff === 3 && stars < STAR_THRESHOLD_MEDIUM) return false;
    // Hard gate
    if (rowDiff === 5) {
      const progress = categoryStarProgress[row.broadCategory ?? 'General'];
      if (!progress || progress.rating3ThreeStarCount < 2) return false;
    }
    return rowDiff === targetDiff;
  };

  // Try exact difficulty match first
  const filtered = pool.filter(hardOrMaster);
  if (filtered.length >= FILTERED_POOL_MIN_SIZE) return filtered;

  // Relax to same-or-lower difficulty
  const relaxed = pool.filter(r => (r.difficulty ?? 1) <= targetDiff);
  if (relaxed.length >= FALLBACK_POOL_MIN_SIZE) return relaxed;

  // Last resort: return full pool
  return pool;
};

// ─── Validation routing ──────────────────────────────────────────────────────

/** Run the appropriate validator for the given mode. */
const validatePoolForMode = (
  mode: GameMode,
  pool: CSVRow[],
  rowCount: number,
  levelIndex: number,
  targetDiff: number,
  themeName?: string,
): PrecheckResult => {
  if (mode === GameMode.LEVEL_EXPANSION || mode === GameMode.LEVEL_EXPANSION_TEST) {
    return validateExpansionLevel(pool, EXPANSION_STAGES, levelIndex, themeName);
  }
  if (mode === GameMode.LEVEL_EMOJI) {
    return validateStandardLevel(pool, rowCount, EMOJI_COL_COUNT, levelIndex, GameMode.LEVEL_EMOJI, themeName);
  }
  if (mode === GameMode.LEVEL_MIND_MATCH) {
    const rounds = targetDiff === 1 ? 1 : targetDiff === 3 ? 2 : 3;
    return validateStandardLevel(pool, rounds * MM_TILES_PER_ROUND, WORDS_PER_ROW, levelIndex, GameMode.LEVEL_MIND_MATCH, themeName);
  }
  return validateStandardLevel(pool, rowCount, WORDS_PER_ROW, levelIndex, mode, themeName);
};

// ─── Fallback ────────────────────────────────────────────────────────────────

/** Build a fallback LevelPackage when all retry attempts have failed. */
const buildFallbackPackage = (
  mode: GameMode,
  levelIndex: number,
  stats: ReturnType<typeof getStats>,
  selectedDifficulty?: string,
  themesMap?: Map<string, CSVRow[]>,
): LevelPackage => {
  const fallbackRowCount = computeRowCount(stats.totalStars, selectedDifficulty);

  if (mode === GameMode.LEVEL_THEME && themesMap) {
    const fallbackThemeNames = Array.from(themesMap.keys()) as string[];
    const themeName = fallbackThemeNames[levelIndex % fallbackThemeNames.length];
    const themedData = themesMap.get(themeName);

    if (themedData && themedData.length > 0) {
      const themedResult = validateStandardLevel(
        themedData,
        fallbackRowCount,
        WORDS_PER_ROW,
        levelIndex,
        GameMode.LEVEL_THEME,
        themeName,
      );
      if (themedResult.isValid) {
        return { mode, data: themedResult.data, themeName };
      }
    }
    // Themed pool insufficient — use consolidated without a theme name
    const consResult = validateStandardLevel(
      getConsolidatedData(),
      fallbackRowCount,
      WORDS_PER_ROW,
      levelIndex,
      mode,
    );
    return {
      mode,
      data: consResult.isValid
        ? consResult.data
        : getConsolidatedData().slice(0, fallbackRowCount),
    };
  }

  if (mode === GameMode.LEVEL_SYNONYMS) {
    const synonymPool = getSynonymData();
    const data =
      synonymPool.length > 0
        ? synonymPool.slice(0, fallbackRowCount)
        : getConsolidatedData().slice(0, fallbackRowCount);
    return { mode, data };
  }

  // Generic fallback: slice consolidated data
  return {
    mode,
    data: getConsolidatedData().slice(0, fallbackRowCount),
  };
};

// ─── Main entry point ────────────────────────────────────────────────────────

export const getLevelPackage = (
  levelIndex: number,
  enabledModes: GameMode[] = [],
  customPoolIds: string[] = [],
  forcedMode?: GameMode,
  selectedDifficulty?: string,
): LevelPackage => {
  const mode = forcedMode ?? getLevelMode(levelIndex, enabledModes);

  // Check cache
  const cacheKey = `${levelIndex}|${enabledModes.join(',')}|${forcedMode ?? ''}|${selectedDifficulty ?? 'auto'}`;
  const cached = getAndPromoteCachedPackage(cacheKey);
  if (cached) return cached;

  const stats = getStats();
  const targetDiff = computeTargetDifficulty(levelIndex, stats.totalStars, selectedDifficulty);
  const rowCount = computeRowCount(stats.totalStars, selectedDifficulty);

  for (let attempt = 1; attempt <= MAX_VALIDATION_ATTEMPTS; attempt++) {
    // Resolve pool for the current mode (retries cycle themed themes)
    const { pool, themeName } = resolvePoolForMode(mode, levelIndex, attempt - 1);

    // Filter by difficulty (skipped for themed — row count already gates)
    const finalPool =
      mode === GameMode.LEVEL_THEME
        ? pool
        : filterPoolByDifficulty(pool, targetDiff, stats.totalStars, stats.categoryStarProgress);

    const validationResult = validatePoolForMode(mode, finalPool, rowCount, levelIndex, targetDiff, themeName);

    if (validationResult.isValid) {
      // Only set themeName if the data truly came from the themed source
      const themesMap = getThemedDataMap();
      const effectiveThemeName =
        mode === GameMode.LEVEL_THEME && pool.length > 0 && themesMap.has(themeName ?? '')
          ? themeName
          : undefined;

      if (mode === GameMode.LEVEL_THEME && effectiveThemeName) {
        logThemedSuccess(levelIndex, mode, attempt, validationResult.data, effectiveThemeName);
      }

      const pkg: LevelPackage = { mode, data: validationResult.data, themeName: effectiveThemeName };
      setCachedLevelPackage(cacheKey, pkg);
      return pkg;
    }
  }

  // All attempts exhausted — build a graceful fallback
  const fallbackThemesMap = mode === GameMode.LEVEL_THEME ? getThemedDataMap() : undefined;
  const fallback = buildFallbackPackage(mode, levelIndex, stats, selectedDifficulty, fallbackThemesMap);
  setCachedLevelPackage(cacheKey, fallback);
  return fallback;
};