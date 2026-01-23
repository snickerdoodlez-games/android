
import { GameMode, DETERMINISTIC_LEVEL_SEQUENCE, CSVRow } from '../types';
import { getConsolidatedData, getGlobalData } from './csvData';
import { getSynonymData } from './synonymData';
import { getEmojiData } from './emojiData';
import { getThemedDataMap } from './themeData';
import { shuffleArray } from './csvUtils';

/**
 * LevelPrecheck System (Unified)
 * Ensures all boards are valid, unique, and solvable.
 */

export interface PrecheckLogEntry {
  timestamp: string;
  levelIndex: number;
  mode: GameMode | string;
  reason: string;
  attemptedCategories: string[];
  conflictingWords: string[];
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
  const logLine = `[${entry.timestamp}] Level: ${entry.levelIndex} | Mode: ${entry.mode} | Reason: ${entry.reason} | Cats: ${entry.attemptedCategories.join(', ')} | Conflicts: ${entry.conflictingWords.join(', ')}\n`;
  localStorage.setItem('LevelPrecheckLog.txt', existing + logLine);
};

export function validateStandardLevel(
  pool: CSVRow[], 
  rowCount: number, 
  colCount: number,
  levelIndex: number,
  mode: GameMode | string = "Standard"
): PrecheckResult {
  if (!pool || pool.length === 0) {
    return { isValid: false, data: [], errorDetails: "Pool is empty" };
  }

  const selectedCategories: CSVRow[] = [];
  const usedWords = new Set<string>();
  const usedCategoryNames = new Set<string>();

  // Shuffle pool for varied gameplay
  const shuffledPool = shuffleArray([...pool]);
  const isThemed = mode === GameMode.LEVEL_THEMED;

  for (const cat of shuffledPool) {
    if (selectedCategories.length === rowCount) break;

    const normalizedCatName = cat.name.trim().toUpperCase();
    if (usedCategoryNames.has(normalizedCatName)) continue;

    // Strict Validation: A category name cannot be a word already on the board unless it's themed
    if (!isThemed && usedWords.has(normalizedCatName)) continue;

    const validWords: string[] = [];
    for (const word of cat.words) {
      const cleanWord = word.trim().toUpperCase();
      
      // Global Word Uniqueness: Check for duplicates
      if (usedWords.has(cleanWord)) continue;

      // Strict Validation: A word cannot match a category name on the board unless themed
      if (!isThemed && usedCategoryNames.has(cleanWord)) continue;
      
      validWords.push(word);
    }

    if (validWords.length >= colCount) {
      const finalWords = validWords.slice(0, colCount);
      finalWords.forEach(w => usedWords.add(w.trim().toUpperCase()));
      usedCategoryNames.add(normalizedCatName);
      selectedCategories.push({ ...cat, words: finalWords });
    }
  }

  if (selectedCategories.length < rowCount) {
    const error = `Level ${levelIndex}: Insufficient unique categories. Needed ${rowCount}, found ${selectedCategories.length}.`;
    logInvalidBoard({
      timestamp: new Date().toLocaleString(),
      levelIndex,
      mode,
      reason: error,
      attemptedCategories: selectedCategories.map(c => c.name),
      conflictingWords: []
    });
    return { isValid: false, data: [], errorDetails: error };
  }

  return { isValid: true, data: selectedCategories };
}

export const getValidatedLevelData = (
  targetRowCount: number,
  sourceData: CSVRow[],
  wordsPerRow: number = 4,
  levelIndex: number = 0,
  mode: GameMode | string = "Standard"
): CSVRow[] => {
  const result = validateStandardLevel(sourceData, targetRowCount, wordsPerRow, levelIndex, mode);
  return result.isValid ? result.data : [];
};

export function validateExpansionLevel(
  pool: CSVRow[],
  stages: { rows: number, cols: number }[],
  levelIndex: number
): PrecheckResult {
  const finalStage = stages[stages.length - 1];
  const baseValidation = validateStandardLevel(pool, finalStage.rows, finalStage.cols, levelIndex, GameMode.LEVEL_EXPANSION);
  if (!baseValidation.isValid) return baseValidation;

  const categories = baseValidation.data;
  // Final check for structural viability
  if (categories.length < finalStage.rows) {
     return { isValid: false, data: [], errorDetails: `Expansion level failed at final stage check` };
  }

  return { isValid: true, data: categories };
}

export function getLevelPrecheckLogs(): string {
  return localStorage.getItem('LevelPrecheckLog.txt') || '--- NO LOG ENTRIES ---';
}

export interface LevelPackage {
  mode: GameMode;
  data: CSVRow[];
  themeName?: string;
}

const EXPANSION_STAGES = [
  { rows: 3, cols: 2 }, 
  { rows: 5, cols: 3 }, 
  { rows: 6, cols: 4 }, 
  { rows: 7, cols: 5 }, 
];

export const getLevelMode = (levelIndex: number, enabledModes: GameMode[] = []): GameMode => {
  const sequence = DETERMINISTIC_LEVEL_SEQUENCE;
  let baseIndex = (levelIndex - 1) % sequence.length;
  let mode = sequence[baseIndex];

  if (enabledModes.length > 0 && !enabledModes.includes(mode)) {
    for (let i = 1; i < sequence.length; i++) {
      const nextMode = sequence[(baseIndex + i) % sequence.length];
      if (enabledModes.includes(nextMode)) {
        mode = nextMode;
        break;
      }
    }
  }
  return mode;
};

export const getLevelPackage = (levelIndex: number, enabledModes: GameMode[] = [], customPoolIds: string[] = [], forcedMode?: GameMode): LevelPackage => {
  const mode = forcedMode || getLevelMode(levelIndex, enabledModes);
  let attempt = 0;
  const MAX_ATTEMPTS = 10;

  const themesMap = getThemedDataMap();
  const themeNames = Array.from(themesMap.keys()) as string[];

  while (attempt < MAX_ATTEMPTS) {
    attempt++;
    let pool: CSVRow[] = [];
    let themeName: string | undefined;
    
    switch (mode) {
      case GameMode.LEVEL_SYNONYMS:
        pool = getSynonymData();
        break;
      case GameMode.LEVEL_EMOJI:
        pool = getEmojiData();
        break;
      case GameMode.LEVEL_THEMED:
        if (themeNames.length > 0) {
          themeName = themeNames[(levelIndex - 1 + attempt) % themeNames.length];
          pool = themesMap.get(themeName || '') || [];
        } else {
          pool = getConsolidatedData();
        }
        break;
      default:
        pool = getConsolidatedData();
        if (levelIndex % 20 === 0) pool = [...pool, ...getGlobalData()];
        break;
    }

    if (customPoolIds.length > 0 && mode !== GameMode.LEVEL_THEMED) {
      pool = pool.filter((row: CSVRow) => customPoolIds.includes(row.id));
    }

    let validationResult;
    if (mode === GameMode.LEVEL_EXPANSION) {
      validationResult = validateExpansionLevel(pool, EXPANSION_STAGES, levelIndex);
    } else if (mode === GameMode.LEVEL_EMOJI) {
      validationResult = validateStandardLevel(pool, 7, 3, levelIndex, GameMode.LEVEL_EMOJI);
    } else if (mode === GameMode.LEVEL_MIND_MATCH) {
      validationResult = validateStandardLevel(pool, 4, 4, levelIndex, GameMode.LEVEL_MIND_MATCH);
    } else {
      validationResult = validateStandardLevel(pool, 7, 4, levelIndex, mode);
    }

    if (validationResult.isValid) {
      return { mode, data: validationResult.data, themeName };
    }
  }

  // Final Fallback
  const fallbackData = getValidatedLevelData(7, getConsolidatedData(), 4, levelIndex, GameMode.CLASSIC);
  return { mode, data: fallbackData.length >= 7 ? fallbackData : getConsolidatedData().slice(0, 7) };
};
