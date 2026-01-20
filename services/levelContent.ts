
import { GameMode, DETERMINISTIC_LEVEL_SEQUENCE, CSVRow } from '../types';
import { getConsolidatedData, getGlobalData } from './csvData';
import { getSynonymData } from './synonymData';
import { getEmojiData } from './emojiData';

export interface LevelPackage {
  mode: GameMode;
  data: any[];
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
 */
export const getLevelPackage = (levelIndex: number, enabledModes: GameMode[] = [], customPoolIds: string[] = []): LevelPackage => {
  // Use the extracted getLevelMode function
  const mode = getLevelMode(levelIndex, enabledModes);
  
  let data: any[] = [];
  
  switch (mode) {
    case GameMode.LEVEL_SYNONYMS:
      data = getSynonymData();
      break;
    case GameMode.LEVEL_EMOJI:
      data = getEmojiData();
      break;
    default:
      // Standard flow for Classic, Themed, Mind Match
      data = getConsolidatedData();
      
      // Inject Global/Translation data in 5% of levels (1 in 20)
      // Deterministic based on levelIndex
      if (levelIndex % 20 === 0) {
          data = [...data, ...getGlobalData()];
      }
      break;
  }

  // If user has a custom pool, filter the data to ONLY include those categories.
  // We apply this for all modes that use ID-based categories.
  if (customPoolIds.length > 0) {
    const filtered = data.filter((row: CSVRow) => customPoolIds.includes(row.id));
    // If we have enough for at least one level, use the filtered set.
    // Otherwise, fallback to full data to avoid crashing (e.g. if user selected 0 categories).
    if (filtered.length >= 4) {
      data = filtered;
    }
  }

  return { mode, data };
};
