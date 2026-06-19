import { GameMode, DETERMINISTIC_LEVEL_SEQUENCE, CSVRow } from '../types';
import { getConsolidatedData, getGlobalData, getPoolData } from './csvData';
import { getSynonymData } from './synonymData';
import { getEmojiData } from './emojiData';
import { getThemedDataMap } from './csvThemeDataLoader';
import { shuffleArray, checkVisualFit } from './csvUtils';
import { getStats } from './storage';

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

export function validateStandardLevel(
  pool: CSVRow[], 
  rowCount: number, 
  colCount: number,
  levelIndex: number,
  mode: GameMode | string = "Standard",
  themeName?: string
): PrecheckResult {
  if (!pool || pool.length === 0) return { isValid: false, data: [], errorDetails: "Pool is empty" };

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
      const alignedDefinitions = cat.definitions && cat.definitions.length > 0
        ? finalIndices.map(i => { const d = cat.definitions![i]; return d !== undefined ? d : ''; })
        : undefined;
      // Shuffle words within the category so they appear in unpredictable positions
      // This prevents same-category tiles from clustering in the rendered grid
      const shuffleOrder = finalIndices.map((_, idx) => idx);
      for (let si = shuffleOrder.length - 1; si > 0; si--) {
        const sj = Math.floor(Math.random() * (si + 1));
        [shuffleOrder[si], shuffleOrder[sj]] = [shuffleOrder[sj], shuffleOrder[si]];
      }
      const shuffledWords = shuffleOrder.map(i => finalWords[i]);
      const shuffledDefinitions = alignedDefinitions
        ? shuffleOrder.map(i => alignedDefinitions[i])
        : undefined;
      selectedCategories.push({ ...cat, words: shuffledWords, definitions: shuffledDefinitions });
    }
  }

  if (selectedCategories.length < rowCount) {
    const error = `Level ${levelIndex}: Needed ${rowCount}, found ${selectedCategories.length}.`;
    logInvalidBoard({ timestamp: new Date().toLocaleString(), levelIndex, mode, reason: error, attemptedCategories: selectedCategories.map(c => c.name), conflictingWords: [], themeName });
    return { isValid: false, data: [], errorDetails: error };
  }
  return { isValid: true, data: selectedCategories };
}

export const getValidatedLevelData = (targetRowCount: number, sourceData: CSVRow[], wordsPerRow: number = 4, levelIndex: number = 0, mode: GameMode | string = "Standard", themeName?: string): CSVRow[] => {
  const result = validateStandardLevel(sourceData, targetRowCount, wordsPerRow, levelIndex, mode, themeName);
  return result.isValid ? result.data : [];
};

export function validateExpansionLevel(pool: CSVRow[], stages: { rows: number, cols: number }[], levelIndex: number, themeName?: string): PrecheckResult {
  const finalStage = stages[stages.length - 1];
  return validateStandardLevel(pool, finalStage.rows, finalStage.cols, levelIndex, GameMode.LEVEL_EXPANSION, themeName);
}

export interface LevelPackage {
  mode: GameMode;
  data: CSVRow[];
  themeName?: string;
}

const EXPANSION_STAGES = [{ rows: 3, cols: 2 }, { rows: 5, cols: 3 }, { rows: 7, cols: 4 }];

// Simple LRU-like cache keyed by `${levelIndex}|${enabledModes.join(',')}|${forcedMode||''}`
const levelPackageCache = new Map<string, LevelPackage>();
const MAX_CACHE_SIZE = 5;

const getCachedLevelPackage = (key: string): LevelPackage | undefined => {
  const cached = levelPackageCache.get(key);
  if (cached) {
    // Move to end (most recently used) by re-inserting
    levelPackageCache.delete(key);
    levelPackageCache.set(key, cached);
    return cached;
  }
  return undefined;
};

const setCachedLevelPackage = (key: string, pkg: LevelPackage) => {
  // Evict oldest if at capacity
  if (levelPackageCache.size >= MAX_CACHE_SIZE) {
    const oldestKey = levelPackageCache.keys().next().value;
    if (oldestKey !== undefined) levelPackageCache.delete(oldestKey);
  }
  levelPackageCache.set(key, pkg);
};

export const clearLevelPackageCache = () => {
  levelPackageCache.clear();
};

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

export const getLevelPackage = (levelIndex: number, enabledModes: GameMode[] = [], customPoolIds: string[] = [], forcedMode?: GameMode, selectedDifficulty?: string): LevelPackage => {
  const mode = forcedMode || getLevelMode(levelIndex, enabledModes);
  
  // Check cache first — include selectedDifficulty in the key
  const cacheKey = `${levelIndex}|${enabledModes.join(',')}|${forcedMode || ''}|${selectedDifficulty || 'auto'}`;
  const cached = getCachedLevelPackage(cacheKey);
  if (cached) return cached;

  const stats = getStats();
  // Use user-selected difficulty if provided, otherwise use star-based auto-difficulty
  const targetDiff = selectedDifficulty
    ? (selectedDifficulty === 'easy' ? 1 : selectedDifficulty === 'medium' ? 3 : 5)
    : getTargetDifficulty(levelIndex, stats.totalStars);
  
  let attempt = 0;
  const MAX_ATTEMPTS = 10;

  // Determine grid size: user-selected difficulty takes priority over star-based auto
  // Computed once up-front so it's available for themed retry relaxation logic
  let rowCount: number;
  if (selectedDifficulty) {
    rowCount = selectedDifficulty === 'easy' ? 5 : selectedDifficulty === 'medium' ? 6 : 7;
  } else {
    rowCount = stats.totalStars >= 50 ? 7 : (stats.totalStars >= 20 ? 6 : 5);
  }

  while (attempt < MAX_ATTEMPTS) {

    attempt++;
    let pool: CSVRow[] = [];
    let themeName: string | undefined;
    
    // Re-fetch themed data map on each retry — theme data loads asynchronously
    // and may not be available on the first attempt.
    const themesMap = getThemedDataMap();
    const themeNames = Array.from(themesMap.keys()) as string[];
    
    switch (mode) {
      case GameMode.LEVEL_SYNONYMS: pool = getSynonymData(); break;
      case GameMode.LEVEL_EMOJI: pool = getEmojiData(); break;
       case GameMode.LEVEL_THEME:
         // Try deterministic themes in order, skipping any that fail validation.
         // Start at the deterministic index and advance on each retry.
         {
           const startIdx = levelIndex % themeNames.length;
           const triedCount = attempt - 1;
           const themeIdx = (startIdx + triedCount) % themeNames.length;
           const candidateName = themeNames[themeIdx];
           const themedPool = themesMap.get(candidateName || '');
           if (themedPool && themedPool.length > 0) {
             pool = themedPool;
             themeName = candidateName;
           } else if (themedPool && themedPool.length === 0) {
             // Empty themed pool — skip to consolidated data
             pool = getConsolidatedData();
             themeName = undefined;
           } else {
             // No themed data for this name — try next or fallback
             pool = getConsolidatedData();
             themeName = undefined;
           }
           // If we've tried all themes and none work, the loop will naturally
           // exhaust; the fallback code after the loop handles the consolidated case.
         }
         break;
      case GameMode.LEVEL_EXPANSION:
        pool = getPoolData();
        break;
      default:
        pool = getConsolidatedData();
        if (levelIndex % 20 === 0) pool = [...pool, ...getGlobalData()];
        break;
    }

    let finalPool: CSVRow[];
    
    if (mode === GameMode.LEVEL_THEME) {
      // THEME mode: use the full pool — row count already reflects difficulty
      // (easy = 5, medium = 6, hard = 7). Filtering by difficulty is redundant
      // and causes theme data shortages since themes have limited categories.
      finalPool = pool;
    } else {
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
      
      finalPool = filteredPool.length >= 8 ? filteredPool : pool.filter(r => (r.difficulty || 1) <= targetDiff);
      if (finalPool.length < 5) finalPool = pool;
    }

    let validationResult;

    if (mode === GameMode.LEVEL_EXPANSION) {
      validationResult = validateExpansionLevel(finalPool, EXPANSION_STAGES, levelIndex, themeName);
    } else if (mode === GameMode.LEVEL_EMOJI) {
      validationResult = validateStandardLevel(finalPool, rowCount, 3, levelIndex, GameMode.LEVEL_EMOJI, themeName);
    } else if (mode === GameMode.LEVEL_MIND_MATCH) {
      let mmRounds = targetDiff === 1 ? 1 : (targetDiff === 3 ? 2 : 3);
      validationResult = validateStandardLevel(finalPool, mmRounds * 4, 4, levelIndex, GameMode.LEVEL_MIND_MATCH, themeName);
    } else {
      validationResult = validateStandardLevel(finalPool, rowCount, 4, levelIndex, mode, themeName);
    }

    if (validationResult.isValid) {
      // Only set themeName if the pool data actually came from themed source (not fallback consolidated)
      const effectiveThemeName = (mode === GameMode.LEVEL_THEME && pool.length > 0 && themesMap.has(themeName || ''))
        ? themeName
        : undefined;
      // Log success for themed levels so the precheck log shows which theme was actually selected
      if (mode === GameMode.LEVEL_THEME && effectiveThemeName) {
        const successEntry: PrecheckLogEntry = {
          timestamp: new Date().toLocaleString(),
          levelIndex,
          mode,
          reason: `Level ${levelIndex}: Validated successfully (attempt ${attempt}).`,
          attemptedCategories: validationResult.data.map(c => c.name),
          conflictingWords: [],
          themeName: effectiveThemeName,
        };
        const logLine = `[${successEntry.timestamp}] Level: ${successEntry.levelIndex} | Mode: ${successEntry.mode} | Reason: ${successEntry.reason} | Theme: ${effectiveThemeName} | Cats: ${successEntry.attemptedCategories.join(', ')} | Conflicts: \n`;
        const existing = localStorage.getItem('LevelPrecheckLog.txt') || '';
        localStorage.setItem('LevelPrecheckLog.txt', existing + logLine);
      }
      const pkg: LevelPackage = { mode, data: validationResult.data, themeName: effectiveThemeName };
      setCachedLevelPackage(cacheKey, pkg);
      return pkg;
    }
  }

  // Fallback: validate the themed pool properly instead of blindly slicing.
  // Blind slicing can include categories with fewer than colCount valid words,
  // producing an incomplete grid that is unsolvable.
  let fallbackRowCount = selectedDifficulty
    ? (selectedDifficulty === 'easy' ? 5 : selectedDifficulty === 'medium' ? 6 : 7)
    : (stats.totalStars >= 50 ? 7 : (stats.totalStars >= 20 ? 6 : 5));
  
   let fallbackData: CSVRow[];
   let fallbackThemeName: string | undefined;
   if (mode === GameMode.LEVEL_THEME) {
     const fallbackThemesMap = getThemedDataMap();
     const fallbackThemeNames = Array.from(fallbackThemesMap.keys()) as string[];
     fallbackThemeName = fallbackThemeNames[levelIndex % fallbackThemeNames.length];
     const themedData = fallbackThemesMap.get(fallbackThemeName);
     if (themedData && themedData.length > 0) {
       // Run validation with the full themed pool to pick only valid categories
       const fallbackValidation = validateStandardLevel(themedData, fallbackRowCount, 4, levelIndex, GameMode.LEVEL_THEME, fallbackThemeName);
       if (fallbackValidation.isValid) {
         fallbackData = fallbackValidation.data;
       } else {
         // Themed pool still insufficient — fall back to consolidated data
         const consValidation = validateStandardLevel(getConsolidatedData(), fallbackRowCount, 4, levelIndex, mode);
         fallbackData = consValidation.isValid ? consValidation.data : getConsolidatedData().slice(0, fallbackRowCount);
         fallbackThemeName = undefined;
       }
     } else {
       // No themed data available — use consolidated data and clear themeName to avoid mislabeling
       const consValidation = validateStandardLevel(getConsolidatedData(), fallbackRowCount, 4, levelIndex, mode);
       fallbackData = consValidation.isValid ? consValidation.data : getConsolidatedData().slice(0, fallbackRowCount);
       fallbackThemeName = undefined;
     }
   } else if (mode === GameMode.LEVEL_SYNONYMS) {
    const synonymPool = getSynonymData();
    fallbackData = synonymPool.length > 0 ? synonymPool.slice(0, fallbackRowCount) : getConsolidatedData().slice(0, fallbackRowCount);
  } else {
    fallbackData = getConsolidatedData().slice(0, fallbackRowCount);
  }
  const fallback: LevelPackage = { mode, data: fallbackData, themeName: fallbackThemeName };
  setCachedLevelPackage(cacheKey, fallback);
  return fallback;

};