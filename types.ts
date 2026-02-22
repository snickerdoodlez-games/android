export interface WordItem {
  word: string;
  definition: string;
}

export interface CSVRow {
  id: string;
  name: string;
  categoryDefinition?: string;
  words: string[];
  wordDefinitions?: Record<string, string>; // Maps word to its specific definition
  difficulty?: number;
  broadCategory?: string;
  rawParts?: string[];
}

export interface LevelPackage {
  mode: GameMode;
  data: CSVRow[];
  themeName?: string;
  definitions: Record<string, string>;
}

export interface TileData {
  id: string;
  word: string;
  categoryId: string;
  categoryName: string;
  status: 'neutral' | 'selected' | 'solved' | 'wrong' | 'correct-preview' | 'placeholder' | 'hint' | 'exiting' | 'flipping-out' | 'flipping-in' | 'placeholder-colored' | 'locked' | 'swap-target' | 'swapping' | 'fading-out-bg';
  color?: string;
  isEmoji?: boolean;
  isSolved?: boolean;
  isHidden?: boolean;
  definition?: string;
  categoryDefinition?: string;
}

export interface LevelCompleteStats {
  timeMs: number;
  moves: number;
  solvedCategoryIds?: string[];
  solvedWords?: string[];
  failed?: boolean;
  mistakes?: number;
  hintsUsedCount?: number;
}

export interface LevelProps {
  csvData: CSVRow[];
  onComplete: (stats: LevelCompleteStats) => void;
  levelIndex: number;
  difficulty: number;
  category: string;
  hintsEnabled: boolean;
  setHintsEnabled: (val: boolean) => void;
  onOpenSettings: () => void;
  isReviewing: boolean;
  onNext: () => void;
  isAutoPlaying: boolean;
  stars: number;
  definitions: Record<string, string>;
  mode?: GameMode;
  themeName?: string;
}

export interface LevelSummary {
  levelIndex: number;
  mode: string;
  timeMs: number;
  mistakes: number;
  moves: number;
  score: number;
  difficulty: number;
  stars: number;
  solvedCategoryIds: string[];
  solvedWords: string[];
  broadCategories: string[];
}

export enum GameMode {
  MENU = 'MENU',
  CLASSIC = 'CLASSIC',
  LEVEL_THEMED = 'LEVEL_THEMED',
  LEVEL_EMOJI = 'LEVEL_EMOJI',
  LEVEL_MIND_MATCH = 'LEVEL_MIND_MATCH',
  LEVEL_SYNONYMS = 'LEVEL_SYNONYMS',
  LEVEL_EXPANSION = 'LEVEL_EXPANSION',
  LEVEL_CASCADE = 'LEVEL_CASCADE',
  HIDDEN = 'HIDDEN',
  LEVEL_FILTER = 'LEVEL_FILTER'
}

export const HEADER_MIN_HEIGHT = 32;
export const FOOTER_HEIGHT = 70;

export interface Theme {
  name: string;
  gradient: string;
  solvedColors: string[];
}

export const NEON_PALETTE: Record<string, string> = {
  // Game row palette (top-to-bottom)
  'bg-neon-row-1': '#fd073a',
  'bg-neon-row-2': '#ff5f1f',
  'bg-neon-row-3': '#ccd100',
  'bg-neon-row-4': '#39ff14',
  'bg-neon-row-5': '#00ffff',
  'bg-neon-row-6': '#ff00ff',
  'bg-neon-row-7': '#680e68',

  // Yellow-Greens
  'bg-neon-red': '#FFFF00',
  'bg-neon-yellow-1': '#FFFF00',
  'bg-neon-yellow-2': '#FFEE00',
  'bg-neon-yellow-3': '#FFDD00',
  'bg-neon-lime-1': '#CCFF00',
  'bg-neon-lime': '#99FF00',
  'bg-neon-lime-2': '#66FF00',
  'bg-neon-green-1': '#33FF00',
  'bg-neon-green': '#00FF33',

  // Green-Cyans
  'bg-neon-mint-1': '#00FF66',
  'bg-neon-mint': '#00FF99',
  'bg-neon-mint-2': '#00FFCC',

  'bg-neon-sky-blue': '#0099FF',

  // Blue-Magentas
  'bg-neon-blue': '#0033FF',
  'bg-neon-violet-1': '#3300FF',
  'bg-neon-violet': '#6600FF',
  'bg-neon-purple-1': '#9900FF',
  'bg-neon-purple': '#CC00FF',
  'bg-neon-magenta': '#FF00FF',

  // Pinks-Reds
  'bg-neon-pink-1': '#FF0099',
  'bg-neon-pink': '#FF0066',
  'bg-neon-rose-1': '#FF0033',
  'bg-neon-rose': '#FF0000',
  'bg-neon-orange-1': '#FF3300',
  'bg-neon-orange': '#FF6600',

  // Orange-Yellows
  'bg-neon-orange-2': '#FF9900',
  'bg-neon-gold-1': '#FFAA00',
  'bg-neon-gold': '#FFBB00',
  'bg-neon-gold-2': '#FFCC00',
  'bg-zinc-800': '#27272a',
  'bg-black': '#000000',
};

export const SOLVED_COLORS = [
  'bg-neon-row-1 border-white text-white',
  'bg-neon-row-2 border-white text-white',
  'bg-neon-row-3 border-white text-black',
  'bg-neon-row-4 border-white text-black',
  'bg-neon-row-5 border-white text-black',
  'bg-neon-row-6 border-white text-white',
  'bg-neon-row-7 border-white text-white'
];

export const THEMES: Theme[] = [
  {
    name: 'NEON ARCADE',
    gradient: 'linear-gradient(135deg, #FF0099, #FF0066, #FF0033, #FF0000, #FF3300, #FF6600, #FF9900, #FFCC00, #FFFF00, #CCFF00, #99FF00, #66FF00, #33FF00, #00FF33, #0099FF, #0033FF, #3300FF, #6600FF, #9900FF, #CC00FF, #FF00FF)',
    solvedColors: SOLVED_COLORS
  }
];

export const BROAD_CATEGORIES = [
  "Nature", "Animals", "Astronomy", "Food", "History",
  "Geography", "Religion", "Technology", "Science", "Music",
  "Literature", "Movies", "Television", "Economics", "Politics",
  "Lifestyle", "Gaming", "Cars", "Sports", "Art", "Mythology"
];

export const RANKS = [
  { name: 'NOVICE', min: 0 },
  { name: 'SEMI-PRO', min: 10000 },
  { name: 'PRO', min: 25000 },
  { name: 'VETERAN', min: 50000 },
  { name: 'ELITE', min: 100000 },
  { name: 'MASTER', min: 250000 },
  { name: 'GRANDMASTER', min: 500000 },
  { name: 'LEGEND', min: 1000000 }
];

const C = GameMode.CLASSIC;
const E = GameMode.LEVEL_EMOJI;
const M = GameMode.LEVEL_MIND_MATCH;
const S = GameMode.LEVEL_SYNONYMS;
const T = GameMode.LEVEL_THEMED;
const X = GameMode.LEVEL_EXPANSION;
const F = GameMode.LEVEL_FILTER;

export const DETERMINISTIC_LEVEL_SEQUENCE: GameMode[] = [
  C, E, M, S, T, F, X, C, E, M,
  S, T, F, X, C, E, M, S, T, F,
  X, C, E, M, S, T, F, X, C, E,
  M, S, T, F, X, C, E, M, S, T,
  F, X, C, E, M, S, T, F, X, C,
  E, M, S, T, F, X, C, E, M, S,
  T, F, X, C, E, M, S, T, F, X,
  C, E, M, S, T, F, X, C, E, M,
  S, T, F, X, C, E, M, S, T, F,
  X, C, E, M, S, T, F, X, C, E
];