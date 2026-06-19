export interface CSVRow {
  id: string;
  name: string;
  words: string[];
  catDict?: string; // Category description from new CSV format
  definitions?: string[]; // Definitions for each word (same index as words)
  difficulty?: number;
  broadCategory?: string;
}

export interface TileData {
  id: string;
  word: string;
  categoryId: string;
  categoryName: string;
  definition?: string; // Word definition shown on long-click
  status: 'neutral' | 'selected' | 'solved' | 'wrong' | 'correct-preview' | 'placeholder' | 'hint' | 'exiting' | 'flipping-out' | 'flipping-in' | 'placeholder-colored' | 'locked' | 'swap-target' | 'swapping' | 'fading-out-bg';
  color?: string;
  isEmoji?: boolean;
  isSolved?: boolean;
  isHidden?: boolean;
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
  LEVEL_THEME = 'LEVEL_THEME',
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
  'bg-neon-red': '#FF073A',
  'bg-neon-orange': '#FF5F1F',
  'bg-neon-yellow': '#F9FF00',
  'bg-neon-lime': '#39FF14',
  'bg-neon-green': '#00F000',
  'bg-neon-mint': '#00FF9F',
  'bg-neon-cyan': '#00FFFF',
  'bg-neon-sky-blue': '#00BFFF',
  'bg-neon-blue': '#0066FF',
  'bg-neon-violet': '#B026FF',
  'bg-neon-purple': '#D400FF',
  'bg-neon-magenta': '#FF00FF',
  'bg-neon-pink': '#FF1FBF',
  'bg-neon-rose': '#FF0055',
  'bg-zinc-800': '#27272a',
  'bg-black': '#000000',
};

export const SOLVED_COLORS = [
  'bg-neon-red border-white',
  'bg-neon-orange border-white',
  'bg-neon-yellow border-white',
  'bg-neon-lime border-white',
  'bg-[#00FFFF] border-white',
  'bg-[#FF00FF] border-white',
  // SEVENTH ROW (Index 6): Deep Purple
  'bg-[#A020F0] border-white',
  'bg-neon-sky-blue border-white',
  'bg-neon-blue border-white',
  'bg-neon-violet border-white',
  'bg-neon-purple border-white',
  'bg-neon-magenta border-white',
  'bg-neon-pink border-white',
  'bg-neon-rose border-white'
];

export const THEMES: Theme[] = [
  {
    name: 'NEON ARCADE',
    gradient: 'from-black to-zinc-900',
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
const X = GameMode.LEVEL_EXPANSION;

export const DETERMINISTIC_LEVEL_SEQUENCE: GameMode[] = [
  C, E, M, S, X, C, E, M, 
  S, X, C, E, M, S, X, 
  C, E, M, S, X, C, E, 
  M, S, X, C, E, M, S, X, 
  C, E, M, S, X, C, 
  E, M, S, X, C, E, M, S, 
  X, C, E, M, S, X, 
  C, E, M, S, X, C, E, M, 
  S, X, C, E, M, S, X, 
  C, E, M, S, X, C, E
];
