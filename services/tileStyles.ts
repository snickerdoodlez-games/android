
import { TileData } from '../types';

export const TILE_RADII = {
  small: '8px',
  medium: '16px',
};

export const TILE_ANIMATION_CURVE = [0.2, 0.8, 0.2, 1]; 
export const SWAP_SPEED = 0.3; 

// Robust Arcade Outline: White fill (handled by text-white class) + Heavy Black Stroke/Shadow
export const ARCADE_OUTLINE = {
  textShadow: '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 3px 3px 0px rgba(0,0,0,0.6)',
  WebkitTextStroke: '1px black',
  paintOrder: 'stroke fill',
  fontWeight: 900, // Enforce heavy weight
};

// Emoji Outline: Black Outline for contrast
export const EMOJI_OUTLINE = {
  textShadow: `
    2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
    2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
    0 4px 4px rgba(0,0,0,0.4)
  `,
  filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.3))',
  paintOrder: 'stroke fill'
};

const NEON_HEX_PALETTE = [
  '#FF073A', // Neon Red
  '#FF5F1F', // Neon Orange
  '#F9FF00', // Neon Yellow
  '#39FF14', // Neon Lime
  '#00F000', // Electric Green
  '#00FF9F', // Neon Mint
  '#00FFFF', // Electric Cyan
  '#00BFFF', // Sky Blue
  '#0066FF', // Electric Blue
  '#B026FF', // Neon Violet
  '#D400FF', // Electric Purple
  '#FF00FF', // Magenta
  '#FF1FBF', // Shocking Pink
  '#FF0055', // Neon Rose
];

// Mapping of BG classes to vibrant, unique neon gradients
const NEON_GRADIENTS_MAP: Record<string, string> = {
  'bg-neon-red': 'linear-gradient(180deg, #FF073A 0%, #D400FF 100%)',        // Red -> Purple
  'bg-neon-orange': 'linear-gradient(180deg, #FF5F1F 0%, #F9FF00 100%)',     // Orange -> Yellow
  'bg-neon-yellow': 'linear-gradient(180deg, #F9FF00 0%, #39FF14 100%)',     // Yellow -> Lime
  'bg-neon-lime': 'linear-gradient(180deg, #39FF14 0%, #00E5FF 100%)',       // Lime -> Cyan
  'bg-neon-green': 'linear-gradient(180deg, #00F000 0%, #0066FF 100%)',      // Green -> Blue
  'bg-neon-mint': 'linear-gradient(180deg, #00FF9F 0%, #FF1FBF 100%)',       // Mint -> Pink
  'bg-neon-cyan': 'linear-gradient(180deg, #00FFFF 0%, #B026FF 100%)',       // Cyan -> Violet
  'bg-neon-sky-blue': 'linear-gradient(180deg, #00BFFF 0%, #FF00FF 100%)',   // Sky Blue -> Magenta
  'bg-neon-blue': 'linear-gradient(180deg, #0066FF 0%, #FF073A 100%)',       // Blue -> Red
  'bg-neon-violet': 'linear-gradient(180deg, #B026FF 0%, #00FFFF 100%)',     // Violet -> Cyan
  'bg-neon-purple': 'linear-gradient(180deg, #D400FF 0%, #FF5F1F 100%)',     // Purple -> Orange
  'bg-neon-magenta': 'linear-gradient(180deg, #FF00FF 0%, #F9FF00 100%)',    // Magenta -> Yellow
  'bg-neon-pink': 'linear-gradient(180deg, #FF1FBF 0%, #00F000 100%)',       // Pink -> Green
  'bg-neon-rose': 'linear-gradient(180deg, #FF0055 0%, #00BFFF 100%)',       // Rose -> Sky Blue
};

// Fallback gradients if no color match found
const FALLBACK_GRADIENTS = [
  'linear-gradient(180deg, #FF073A 0%, #7B00FF 33%, #0066FF 66%, #39FF14 100%)',
  'linear-gradient(180deg, #00E5FF 0%, #FF1FBF 100%)',
  'linear-gradient(180deg, #F9FF00 0%, #FF5F1F 100%)',
];

export const getSolvedGradient = (colorClass?: string, seed?: string): string => {
  // 1. Try to match specific color class from the defined palette
  if (colorClass) {
    for (const [key, gradient] of Object.entries(NEON_GRADIENTS_MAP)) {
      if (colorClass.includes(key)) {
        return `${gradient} fixed`;
      }
    }
  }
  
  // 2. Fallback: Deterministic selection based on seed (e.g., categoryId)
  if (seed) {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash % FALLBACK_GRADIENTS.length);
    return `${FALLBACK_GRADIENTS[index]} fixed`;
  }

  // 3. Absolute Fallback
  return `${FALLBACK_GRADIENTS[0]} fixed`;
};

export const getColorFromCategory = (name: string): string => {
  if (!name) return '#27272a';
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash % NEON_HEX_PALETTE.length);
  return NEON_HEX_PALETTE[index];
};

export const SELECTION_VARIANTS: any = {
  neutral: { 
    scale: 1, 
    zIndex: 10,
    transition: { duration: 0.1 } 
  },
  selected: { 
    scale: 1.03,
    transition: { duration: 0.1 },
    zIndex: 50
  },
  'correct-preview': {
    scale: 1.05,
    transition: { duration: 0.2 },
    zIndex: 55
  },
  'swap-target': { 
    scale: 1.03,
    transition: { duration: 0.1 },
    zIndex: 40 
  },
  swapping: {
    scale: 1.05,
    zIndex: 100, 
    transition: { duration: 0.1 }
  },
  'fading-out-bg': {
    scale: 1,
    transition: { duration: 0.25 }
  },
  solved: { 
    scale: [1, 1.12, 1],
    transition: { duration: 0.3, ease: "easeOut" },
    zIndex: 20
  },
  wrong: {
    x: [0, -6, 6, -6, 6, 0],
    scale: 1.02,
    transition: { duration: 0.3 },
    zIndex: 60
  }
};

export const getTileStatusClasses = (status: TileData['status'], colorProp?: string): string => {
  const whiteGlow = 'border-4 border-white shadow-[0_0_20px_rgba(255,255,255,1)]';
  const greenGlow = 'border-4 border-white shadow-[0_0_20px_#39FF14]';
  const redGlow = 'border-4 border-white shadow-[0_0_20px_#FF073A]';
  
  switch (status) {
    case 'selected':
    case 'swapping':
      return `${whiteGlow} z-50`;
    case 'swap-target':
      return `${whiteGlow} z-40`;
    case 'correct-preview':
      return `bg-neon-lime ${greenGlow} z-55`;
    case 'locked':
      return `${whiteGlow} z-30`;
    case 'fading-out-bg':
       return `border-4 border-white shadow-none transition-colors duration-250`;
    case 'solved':
      return colorProp ? `${colorProp} border-4 border-white shadow-none` : 'bg-zinc-800 border-4 border-white shadow-none';
    case 'wrong':
      return `bg-neon-red ${redGlow} z-60`;
    default:
      return 'bg-black border-4 border-white shadow-none';
  }
};

export const getTypographicClasses = (word: string, isEmoji?: boolean, isSolved?: boolean): string => {
  // Ensure Oswald font is explicitly applied alongside other typographic styles
  const base = "font-oswald font-black uppercase leading-none";
  
  if (isEmoji) {
    // Drastically reduce size when solved to ensure scaling is visible and row fits well
    return isSolved ? `${base} text-2xl md:text-3xl` : `${base} text-4xl md:text-6xl`;
  }
  const text = word || '';
  const len = text.length;
  
  if (len > 12) {
      return `${base} text-[10px] md:text-[16px] lg:text-[22px] tracking-tight`;
  }
  if (len > 9) {
      return `${base} text-[12px] md:text-[20px] lg:text-[28px] tracking-tight`;
  }
  if (len > 6) {
      return `${base} text-[14px] md:text-[26px] lg:text-[36px] tracking-tight`;
  }
  
  return `${base} text-[18px] md:text-[32px] lg:text-[48px] tracking-wide`;
};
