import { GameMode, DETERMINISTIC_LEVEL_SEQUENCE, CSVRow, LevelPackage } from '../types.ts';
import { getConsolidatedData, getGlobalData } from './csvData.ts';
import { getSynonymData } from './synonymData.ts';
import { getEmojiData } from './emojiData.ts';
import { getThemedDataMap } from './themeData.ts';
import { shuffleArray, checkVisualFit } from './csvUtils.ts';
import { getStats } from './storage.ts';

export interface PrecheckLogEntry {
  timestamp: string;
  levelIndex: number;
  mode: GameMode | string;
  reason: string;
  attemptedCategories: string[];
  conflictingWords: string[];
}

/**
 * Determines the game mode for a specific level index based on a deterministic sequence.
 */
export const getLevelMode = (levelIndex: number, enabledModes: GameMode[]): GameMode => {
  const sequence = DETERMINISTIC_LEVEL_SEQUENCE;
  const rawMode = sequence[(levelIndex - 1) % sequence.length];
  // Fallback to first enabled mode if the sequence mode isn't enabled
  if (enabledModes.includes(rawMode)) return rawMode;
  return enabledModes.length > 0 ? enabledModes[0] : GameMode.CLASSIC;
};

/**
 * Filters and shuffles a pool of categories to provide validated data for a level.
 */
export const getValidatedLevelData = (count: number, pool: CSVRow[], minWords: number = 4, levelIndex: number = 1, filterType?: string): CSVRow[] => {
  const filtered = pool.filter(c => c.words.length >= minWords);
  return shuffleArray(filtered).slice(0, count);
};

/**
 * Generates the complete level configuration package including data, mode, and definitions.
 */
export const getLevelPackage = (
  levelIndex: number,
  enabledModes: GameMode[],
  customPoolIds: string[],
  forcedMode?: GameMode,
  difficultyOverride?: 'easy' | 'medium' | 'hard'
): LevelPackage => {
  const mode = forcedMode || getLevelMode(levelIndex, enabledModes);
  let data: CSVRow[] = [];
  let themeName: string | undefined;

  // Dynamic sizing based on difficulty
  const rowCount = difficultyOverride === 'easy' ? 4 : (difficultyOverride === 'hard' ? 6 : 5);
  // Specific category counts for Mind Match
  const mindMatchCount = difficultyOverride === 'easy' ? 4 : (difficultyOverride === 'hard' ? 12 : 8);

  // Fetch data based on mode
  if (mode === GameMode.LEVEL_EMOJI) {
    data = getValidatedLevelData(rowCount, getEmojiData(), 3);
  } else if (mode === GameMode.LEVEL_SYNONYMS) {
    data = getValidatedLevelData(rowCount, getSynonymData(), 4);
  } else if (mode === GameMode.LEVEL_THEMED) {
    const themedMap = getThemedDataMap();
    const themes = Array.from(themedMap.keys());
    themeName = themes[levelIndex % themes.length];
    data = getValidatedLevelData(rowCount, themedMap.get(themeName) || [], 4);
  } else if (mode === GameMode.LEVEL_MIND_MATCH) {
    data = getValidatedLevelData(mindMatchCount, getConsolidatedData(), 4);
  } else if (mode === GameMode.LEVEL_EXPANSION) {
    data = getValidatedLevelData(6, getConsolidatedData(), 4);
  } else if (mode === GameMode.LEVEL_CASCADE) {
    data = getValidatedLevelData(10, getConsolidatedData(), 4);
  } else if (mode === GameMode.LEVEL_FILTER) {
    data = getValidatedLevelData(10, getConsolidatedData(), 4);
  } else {
    data = getValidatedLevelData(rowCount, getConsolidatedData(), 4);
  }

  // Aggregate definitions from ALL available master data sources to maximize coverage
  const definitions: Record<string, string> = {};

  // 1. Core and Pool Data
  getConsolidatedData().forEach(cat => {
    if (cat.wordDefinitions) {
      Object.entries(cat.wordDefinitions).forEach(([word, def]) => {
        definitions[word.toUpperCase()] = def;
      });
    }
  });

  // 2. Synonym Data (Crucial for Synonym mode definitions)
  getSynonymData().forEach(cat => {
    if (cat.wordDefinitions) {
      Object.entries(cat.wordDefinitions).forEach(([word, def]) => {
        definitions[word.toUpperCase()] = def;
      });
    }
  });

  return { mode, data, themeName, definitions };
};
