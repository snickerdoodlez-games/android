
export interface CSVRow {
  id: string;
  name: string;
  words: string[];
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
}

export interface LevelScoreBreakdown {
  levelIndex: number;
  mode: string;
  basePoints: number;
  timeBonus: number;
  hintPenalty: number;
  moveBonus: number;
  mindMatchLossPenalty: number;
  levelTotal: number;
  newGrandTotal: number;
  previousGrandTotal: number;
}

export enum GameMode {
  MENU = 'MENU',
  CLASSIC = 'CLASSIC',
  LEVEL_THEMED = 'LEVEL_THEMED',
  LEVEL_EMOJI = 'LEVEL_EMOJI',
  LEVEL_MIND_MATCH = 'LEVEL_MIND_MATCH',
  LEVEL_SYNONYMS = 'LEVEL_SYNONYMS',
  LEVEL_EXPANSION = 'LEVEL_EXPANSION',
  LEVEL_CASCADE = 'LEVEL_CASCADE'
}

// Layout Constants
export const HEADER_HEIGHT = 65;
export const FOOTER_HEIGHT = 60;

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

// Gradient from Red -> Orange -> Yellow -> Green -> Cyan -> Blue -> Purple -> Pink
export const SOLVED_COLORS = [
  'bg-neon-red shadow-[0_0_15px_#FF073A] border-white',
  'bg-neon-orange shadow-[0_0_15px_#FF5F1F] border-white',
  'bg-neon-yellow shadow-[0_0_15px_#F9FF00] border-white',
  'bg-neon-lime shadow-[0_0_15px_#39FF14] border-white',
  'bg-neon-green shadow-[0_0_15px_#00F000] border-white',
  'bg-neon-mint shadow-[0_0_15px_#00FF9F] border-white',
  'bg-neon-cyan shadow-[0_0_15px_#00FFFF] border-white',
  'bg-neon-sky-blue shadow-[0_0_15px_#00BFFF] border-white',
  'bg-neon-blue shadow-[0_0_15px_#0066FF] border-white',
  'bg-neon-violet shadow-[0_0_15px_#B026FF] border-white',
  'bg-neon-purple shadow-[0_0_15px_#D400FF] border-white',
  'bg-neon-magenta shadow-[0_0_15px_#FF00FF] border-white',
  'bg-neon-pink shadow-[0_0_15px_#FF1FBF] border-white',
  'bg-neon-rose shadow-[0_0_15_#FF0055] border-white'
];

export const THEMES: Theme[] = [
  {
    name: 'NEON ARCADE',
    gradient: 'from-black to-zinc-900',
    solvedColors: SOLVED_COLORS
  }
];

const C = GameMode.CLASSIC;
const E = GameMode.LEVEL_EMOJI;
const M = GameMode.LEVEL_MIND_MATCH;
const S = GameMode.LEVEL_SYNONYMS;
const T = GameMode.LEVEL_THEMED;
const X = GameMode.LEVEL_EXPANSION;

// Sequence updated to exclude Cascade (K) and re-loop across 6 modes to reach 100 entries.
export const DETERMINISTIC_LEVEL_SEQUENCE: GameMode[] = [
  C, E, M, S, X, T, C, E, M, S, 
  X, T, C, E, M, S, X, T, C, E, 
  M, S, X, T, C, E, M, S, X, T, 
  C, E, M, S, X, T, C, E, M, S, 
  X, T, C, E, M, S, X, T, C, E, 
  M, S, X, T, C, E, M, S, X, T, 
  C, E, M, S, X, T, C, E, M, S, 
  X, T, C, E, M, S, X, T, C, E, 
  M, S, X, T, C, E, M, S, X, T, 
  C, E, M, S, X, T, C, E, M, S
];
