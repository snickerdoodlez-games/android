import { TileData } from '../types';

export const TILE_RADII = {
  small: '8px',
  medium: '16px',
};

export const TILE_ANIMATION_CURVE = [0.2, 0.8, 0.2, 1]; 
export const SWAP_SPEED = 0.3; 

// Crisp 2px solid white border as per aesthetic rules
export const ARCADE_OUTLINE = {
  textShadow: '2px 2px 0 #000, 2px -1px 0 #000, -1px 2px 0 #000, -1px -1px 0 #000, 1px 1px 0 #000, 0 0 6px rgba(0,0,0,0.6)',
  WebkitTextStroke: '1px black',
  paintOrder: 'stroke fill',
  fontWeight: 900,
};

export const CASCADE_OUTLINE = {
  textShadow: '2px 2px 0 #000, 2px -1px 0 #000, -1px 2px 0 #000, -1px -1px 0 #000, 1px 1px 0 #000, 0 0 8px rgba(0,0,0,0.8)',
  WebkitTextStroke: '1px black',
  paintOrder: 'stroke fill',
  fontWeight: 900,
};

export const EMOJI_OUTLINE = {
  textShadow: `
    3px 3px 0 #000, -1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000,
    1.5px 0 0 #000, -1.5px 0 0 #000, 0 1.5px 0 #000, 0 -1.5px 0 #000,
    0 3px 6px rgba(0,0,0,0.6)
  `,
  filter: 'drop-shadow(0 3px 3px rgba(0,0,0,0.4))',
  paintOrder: 'stroke fill'
};

const NEON_HEX_PALETTE = [
  '#FF073A', '#FF5F1F', '#F9FF00', '#39FF14', '#00F000', '#00FF9F', '#00FFFF', '#00BFFF', '#0066FF', '#B026FF', '#D400FF', '#FF00FF', '#FF1FBF', '#FF0055',
];

const NEON_GRADIENTS_MAP: Record<string, string> = {
  'bg-neon-red': 'linear-gradient(180deg, #FF073A 0%, #D400FF 100%)',
  'bg-neon-orange': 'linear-gradient(180deg, #FF5F1F 0%, #F9FF00 100%)',
  'bg-neon-yellow': 'linear-gradient(180deg, #F9FF00 0%, #39FF14 100%)',
  'bg-neon-lime': 'linear-gradient(180deg, #39FF14 0%, #00E5FF 100%)',
  'bg-neon-green': 'linear-gradient(180deg, #00F000 0%, #0066FF 100%)',
  'bg-neon-mint': 'linear-gradient(180deg, #00FF9F 0%, #FF1FBF 100%)',
  'bg-neon-cyan': 'linear-gradient(180deg, #00FFFF 0%, #B026FF 100%)',
  'bg-neon-sky-blue': 'linear-gradient(180deg, #00BFFF 0%, #FF00FF 100%)',
  'bg-neon-blue': 'linear-gradient(180deg, #0066FF 0%, #FF073A 100%)',
  'bg-neon-violet': 'linear-gradient(180deg, #B026FF 0%, #00FFFF 100%)',
  'bg-neon-purple': 'linear-gradient(180deg, #D400FF 0%, #FF5F1F 100%)',
  'bg-neon-magenta': 'linear-gradient(180deg, #FF00FF 0%, #F9FF00 100%)',
  'bg-neon-pink': 'linear-gradient(180deg, #FF1FBF 0%, #00F000 100%)',
  'bg-neon-rose': 'linear-gradient(180deg, #FF0055 0%, #00BFFF 100%)',
};

const FALLBACK_GRADIENTS = [
  'linear-gradient(180deg, #FF073A 0%, #7B00FF 33%, #0066FF 66%, #39FF14 100%)',
  'linear-gradient(180deg, #00E5FF 0%, #FF1FBF 100%)',
  'linear-gradient(180deg, #F9FF00 0%, #FF5F1F 100%)',
];

export const getSolvedGradient = (colorClass?: string, seed?: string): string => {
  if (colorClass) {
    for (const [key, gradient] of Object.entries(NEON_GRADIENTS_MAP)) {
      if (colorClass.includes(key)) {
        return `${gradient} fixed`;
      }
    }
  }
  if (seed) {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash % FALLBACK_GRADIENTS.length);
    return `${FALLBACK_GRADIENTS[index]} fixed`;
  }
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
  neutral: { scale: 1, zIndex: 10, transition: { duration: 0.1 } },
  selected: { scale: 1.05, transition: { duration: 0.1 }, zIndex: 50 },
  'correct-preview': { scale: 1.1, transition: { duration: 0.2 }, zIndex: 55 },
  'swap-target': { scale: 1.05, transition: { duration: 0.1 }, zIndex: 40 },
  swapping: { scale: 1.1, zIndex: 100, transition: { duration: 0.1 } },
  'fading-out-bg': { scale: 1, transition: { duration: 0.25 } },
  solved: { scale: [1, 1.1, 1], transition: { duration: 0.3, ease: "easeOut" }, zIndex: 20 },
  wrong: { x: [0, -8, 8, -8, 8, 0], scale: 1.05, transition: { duration: 0.3 }, zIndex: 60 }
};

export const getTileStatusClasses = (status: TileData['status'], colorProp?: string): string => {
  const whiteGlow = 'border-2 border-white shadow-[0_0_12px_rgba(255,255,255,0.7)]';
  
  switch (status) {
    case 'selected':
    case 'swapping':
      return `${whiteGlow} z-50`;
    case 'swap-target':
      return `${whiteGlow} z-40`;
    case 'correct-preview':
      return `bg-neon-lime border-2 border-white shadow-[0_0_15px_#39FF14] z-55`;
    case 'locked':
      return `bg-neon-yellow border-2 border-white shadow-[0_0_15px_#F9FF00] z-30`;
    case 'fading-out-bg':
       return `border-2 border-white shadow-none transition-colors duration-250`;
    case 'solved':
      return colorProp ? `${colorProp} border-2 border-white shadow-none` : 'bg-zinc-800 border-2 border-white shadow-none';
    case 'wrong':
      return `bg-neon-red border-2 border-white shadow-[0_0_15px_#FF073A] z-60`;
    default:
      if (colorProp) return `${colorProp} border-2 border-white shadow-none`;
      return 'bg-zinc-900 border-2 border-white shadow-[0_0_4px_rgba(255,255,255,0.1)]';
  }
};

export const getTypographicClasses = (word: string, isEmoji?: boolean, isSolved?: boolean, isCascade?: boolean): string => {
  const base = "font-oswald font-black uppercase leading-none";
  
  if (isEmoji) {
    return isSolved ? `${base} text-xl md:text-2xl` : `${base} text-3xl md:text-4xl`;
  }

  const text = word || '';
  const len = text.length;

  if (isCascade) {
    if (len > 12) return `${base} text-[8px] md:text-[9px] tracking-tighter`;
    if (len > 8) return `${base} text-[9px] md:text-[11px] tracking-tight`;
    return `${base} text-[11px] md:text-[13px] tracking-normal`;
  }

  // Adjusted for "not so big" feedback
  if (len > 12) return `${base} text-[11px] md:text-[12px] tracking-tighter`;
  if (len > 8) return `${base} text-[14px] md:text-[16px] tracking-tight`;
  return `${base} text-[18px] md:text-[22px] tracking-normal`;
};
