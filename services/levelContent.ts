import { GameMode, DETERMINISTIC_LEVEL_SEQUENCE, CSVRow } from '../types';
import { getConsolidatedData, getGlobalData } from './csvData';
import { getSynonymData } from './synonymData';
import { getEmojiData } from './emojiData';
import { getThemedDataMap } from './themeData';
import { shuffleArray, checkVisualFit } from './csvUtils';
import { getStats } from './storage';

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
  if (!pool || pool.length === 0) return { isValid: false, data: [], errorDetails: "Pool is empty" };

  const selectedCategories: CSVRow[] = [];
  const usedWords = new Set<string>();
  const usedCategoryNames = new Set<string>();
  const shuffledPool = shuffleArray([...pool]);
  const isThemed = mode === GameMode.LEVEL_THEMED;
  const isEmojiMode = mode === GameMode.LEVEL_EMOJI;

  for (const cat of shuffledPool) {
    if (selectedCategories.length === rowCount) break;
    const normalizedCatName = cat.name.trim().toUpperCase();
    if (usedCategoryNames.has(normalizedCatName)) continue;
    if (!isThemed && usedWords.has(normalizedCatName)) continue;

    const validWords: string[] = [];
    const validIndices: number[] = [];
    for (let wi = 0; wi < cat.words.length; wi++) {
      const word = cat.words[wi];
      const cleanWord = word.trim().toUpperCase();
      if (usedWords.has(cleanWord)) continue;
      if (!isThemed && usedCategoryNames.has(cleanWord)) continue;
      if (!checkVisualFit(cleanWord, colCount, isEmojiMode)) continue; 
      validWords.push(word);
      validIndices.push(wi);
    }

    if (validWords.length >= colCount) {
      const finalIndices = validIndices.slice(0, colCount);
      const finalWords = validWords.slice(0, colCount);
      finalWords.forEach(w => usedWords.add(w.trim().toUpperCase()));
      usedCategoryNames.add(normalizedCatName);
      // Sync definitions with filtered words - preserve index alignment with words array
      // DO NOT filter out empty strings as it breaks index alignment with finalWords
      const finalDefinitions = cat.definitions && cat.definitions.length > 0
        ? finalIndices.map(i => { const d = cat.definitions![i]; return d !== undefined ? d : ''; })
        : undefined;
      selectedCategories.push({ ...cat, words: finalWords, definitions: finalDefinitions });
    }
  }

  if (selectedCategories.length < rowCount) {
    const error = `Level ${levelIndex}: Needed ${rowCount}, found ${selectedCategories.length}.`;
    logInvalidBoard({ timestamp: new Date().toLocaleString(), levelIndex, mode, reason: error, attemptedCategories: selectedCategories.map(c => c.name), conflictingWords: [] });
    return { isValid: false, data: [], errorDetails: error };
  }
  return { isValid: true, data: selectedCategories };
}

export const getValidatedLevelData = (targetRowCount: number, sourceData: CSVRow[], wordsPerRow: number = 4, levelIndex: number = 0, mode: GameMode | string = "Standard"): CSVRow[] => {
  const result = validateStandardLevel(sourceData, targetRowCount, wordsPerRow, levelIndex, mode);
  return result.isValid ? result.data : [];
};

export function validateExpansionLevel(pool: CSVRow[], stages: { rows: number, cols: number }[], levelIndex: number): PrecheckResult {
  const finalStage = stages[stages.length - 1];
  return validateStandardLevel(pool, finalStage.rows, finalStage.cols, levelIndex, GameMode.LEVEL_EXPANSION);
}

export interface LevelPackage {
  mode: GameMode;
  data: CSVRow[];
  themeName?: string;
}

const EXPANSION_STAGES = [{ rows: 3, cols: 2 }, { rows: 5, cols: 3 }, { rows: 6, cols: 4 }, { rows: 7, cols: 5 }];

const getTargetDifficulty = (level: number, stars: number): number => {
  if (stars >= 50) return 5;
  if (stars >= 20) return 3;
  if (level <= 40) return 1;
  if (level <= 100) return 3;
  return 5;
};

export const getLevelMode = (levelIndex: number, enabledModes: GameMode[] = []): GameMode => {
  const sequence = DETERMINISTIC_LEVEL_SEQUENCE;
  let baseIndex = (levelIndex - 1) % sequence.length;
  let mode = sequence[baseIndex];
  if (enabledModes.length > 0 && !enabledModes.includes(mode)) {
    for (let i = 1; i < sequence.length; i++) {
      const nextMode = sequence[(baseIndex + i) % sequence.length];
      if (enabledModes.includes(nextMode)) { mode = nextMode; break; }
    }
  }
  return mode;
};

export const getLevelPackage = (levelIndex: number, enabledModes: GameMode[] = [], customPoolIds: string[] = [], forcedMode?: GameMode): LevelPackage => {
  const mode = forcedMode || getLevelMode(levelIndex, enabledModes);
  const stats = getStats();
  const targetDiff = getTargetDifficulty(levelIndex, stats.totalStars);
  
  let attempt = 0;
  const MAX_ATTEMPTS = 10;
  const themesMap = getThemedDataMap();
  const themeNames = Array.from(themesMap.keys()) as string[];

  while (attempt < MAX_ATTEMPTS) {
    attempt++;
    let pool: CSVRow[] = [];
    let themeName: string | undefined;
    
    switch (mode) {
      case GameMode.LEVEL_SYNONYMS: pool = getSynonymData(); break;
      case GameMode.LEVEL_EMOJI: pool = getEmojiData(); break;
      case GameMode.LEVEL_THEMED:
        themeName = themeNames[(levelIndex - 1 + attempt) % themeNames.length];
        pool = themesMap.get(themeName || '') || getConsolidatedData();
        break;
      default:
        pool = getConsolidatedData();
        if (levelIndex % 20 === 0) pool = [...pool, ...getGlobalData()];
        break;
    }

    const filteredPool = pool.filter(row => {
        const rowDiff = row.difficulty || 1;
        // MASTERY OVERRIDE: If 50+ stars, ignore the win-count gate
        if (stats.totalStars >= 50) return rowDiff === 5 || rowDiff === 3;
        
        if (rowDiff === 3 && stats.totalStars < 20) return false;
        if (rowDiff === 5) {
            const progress = stats.categoryStarProgress[row.broadCategory || "General"];
            if (!progress || progress.rating3ThreeStarCount < 2) return false;
        }
        return rowDiff === targetDiff;
    });
    
    let finalPool = filteredPool.length >= 8 ? filteredPool : pool.filter(r => (r.difficulty || 1) <= targetDiff);
    if (finalPool.length < 5) finalPool = pool;

    let validationResult;
    // Determine grid size based on Mastery stars
    let rowCount = stats.totalStars >= 50 ? 7 : (stats.totalStars >= 20 ? 6 : 5);

    if (mode === GameMode.LEVEL_EXPANSION) {
      validationResult = validateExpansionLevel(finalPool, EXPANSION_STAGES, levelIndex);
    } else if (mode === GameMode.LEVEL_EMOJI) {
      validationResult = validateStandardLevel(finalPool, rowCount, 3, levelIndex, GameMode.LEVEL_EMOJI);
    } else if (mode === GameMode.LEVEL_MIND_MATCH) {
      let mmRounds = targetDiff === 1 ? 1 : (targetDiff === 3 ? 2 : 3);
      validationResult = validateStandardLevel(finalPool, mmRounds * 4, 4, levelIndex, GameMode.LEVEL_MIND_MATCH);
    } else {
      validationResult = validateStandardLevel(finalPool, rowCount, 4, levelIndex, mode);
    }

    if (validationResult.isValid) return { mode, data: validationResult.data, themeName };
  }

  return { mode, data: getConsolidatedData().slice(0, 7) };
};