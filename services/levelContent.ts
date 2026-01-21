import { GameMode, DETERMINISTIC_LEVEL_SEQUENCE, CSVRow } from '../types';
import { getConsolidatedData, getGlobalData } from './csvData';
import { getSynonymData } from './synonymData';
import { getEmojiData } from './emojiData';
import { getThemedDataMap } from './themeData';

export interface LevelPackage {
  mode: GameMode;
  data: any[];
  themeName?: string;
}

/**
 * Deterministically returns the mode for a level index, skipping disabled modes.
 */
export const getLevelMode = (levelIndex: number, enabledModes: GameMode[] = []): GameMode => {
  const sequence = DETERMINISTIC_LEVEL_SEQUENCE;
  let baseIndex = (levelIndex - 1) % sequence.length;
  let mode = sequence[baseIndex];

  // Logic to find next enabled mode if current one is toggled off
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

/**
 * Returns the deterministic mode and necessary data for a specific level index.
 * The sequence loops every 100 levels as requested.
 * Skips disabled modes by finding the next enabled one in the sequence.
 * Supports forcedMode for immediate debug loading.
 */
export const getLevelPackage = (levelIndex: number, enabledModes: GameMode[] = [], customPoolIds: string[] = [], forcedMode?: GameMode): LevelPackage => {
  // Use forcedMode if provided (for debug/settings jumping), otherwise find deterministic mode
  const mode = forcedMode || getLevelMode(levelIndex, enabledModes);
  
  let data: any[] = [];
  let themeName: string | undefined;
  
  switch (mode) {
    case GameMode.LEVEL_SYNONYMS:
      data = getSynonymData();
      break;
    case GameMode.LEVEL_EMOJI:
      data = getEmojiData();
      break;
    case GameMode.LEVEL_THEMED:
      const themesMap = getThemedDataMap();
      // Fix: Explicitly cast Array.from result to string[] to resolve Error on line 57 (inferred as unknown[])
      const themeNames = Array.from(themesMap.keys()) as string[];
      themeName = themeNames[(levelIndex - 1) % themeNames.length];
      data = themesMap.get(themeName || '') || [];
      break;
    default:
      // Standard flow for Classic, Mind Match, Expansion, Cascade
      data = getConsolidatedData();
      
      // Inject Global/Translation data in 5% of levels (1 in 20)
      if (levelIndex % 20 === 0) {
          data = [...data, ...getGlobalData()];
      }
      break;
  }

  if (customPoolIds.length > 0 && mode !== GameMode.LEVEL_THEMED) {
    const filtered = data.filter((row: CSVRow) => customPoolIds.includes(row.id));
    if (filtered.length >= 4) {
      data = filtered;
    }
  }

  return { mode, data, themeName };
};
