import { TileData, NEON_PALETTE, SOLVED_COLORS } from '../types';

export const TILE_RADII = {
  small: '8px',
  medium: '14px'
};

export const TILE_ANIMATION_CURVE = [0.2, 0.8, 0.2, 1];
export const SWAP_SPEED = 0.8;

// --- 3D POP STYLES ---

// For WHITE text (Default/Neutral tiles):
export const POP_STYLE_LIGHT = {
  textShadow: '2px 2px 0px rgba(0,0,0,0.95), 0 0 8px rgba(255,255,255,0.6)',
  WebkitTextStroke: '0px',
  filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.8)) drop-shadow(0 0 6px rgba(255,255,255,0.4))',
  fontWeight: 900
};

// For BLACK text (Selected/Solved Light tiles):
export const POP_STYLE_DARK = {
  textShadow: '2px 2px 0px #000, 0 0 8px rgba(255,255,255,0.8)',
  WebkitTextStroke: '0px',
  filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.8)) drop-shadow(0 0 8px rgba(255,255,255,0.6))',
  fontWeight: 900
};

// Exports for backward compatibility
export const ARCADE_OUTLINE = POP_STYLE_LIGHT;
export const SOLVED_OUTLINE = POP_STYLE_LIGHT;
export const CASCADE_OUTLINE = POP_STYLE_LIGHT;

export const EMOJI_OUTLINE = {
  textShadow: '2px 2px 0px rgba(0,0,0,0.9), 0 0 10px rgba(255,255,255,0.5)',
  WebkitTextStroke: '0px',
  filter: 'drop-shadow(2px 2px 3px rgba(0,0,0,0.8)) drop-shadow(0 0 8px rgba(255,255,255,0.4))'
};

export const SELECTION_VARIANTS = {
  neutral: { scale: 1, zIndex: 9500, rotateX: 0 },
  selected: { scale: 1, zIndex: 9500, rotateX: 0 },
  'swap-target': { scale: 1, zIndex: 9500, rotateX: 0 },
  swapping: { scale: 1, zIndex: 9500, rotateX: 0 },
  solved: {
    scale: [1, 1.02, 1],
    zIndex: 9999,
    rotateX: 0,
    filter: ['brightness(1)', 'brightness(1.12)', 'brightness(1)'],
    transition: { duration: 1.15, ease: 'easeInOut', repeat: Infinity }
  },
  wrong: { x: [0, -5, 5, -5, 5, 0], scale: 1, transition: { duration: 0.4 } },
  'correct-preview': { scale: 1, zIndex: 9500 },
  placeholder: { scale: 1, opacity: 0 },
  hint: { scale: 1, borderOpacity: [1, 0.4, 1], transition: { repeat: Infinity, duration: 1.5 } },
  exiting: { scale: 0, opacity: 0, transition: { duration: 0.3 } },
  'flipping-out': { rotateX: 90, transition: { duration: 0.15, ease: 'easeIn' } },
  'flipping-in': { rotateX: 0, transition: { duration: 0.15, ease: 'easeOut' } },
  'placeholder-colored': { scale: 1, opacity: 1 },
  locked: { scale: 1, opacity: 0.8 },
  'fading-out-bg': { scale: 1, opacity: 1 }
};

export const TEXT_VARIANTS = {
  initial: { opacity: 0, scale: 0.5 },
  neutral: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  selected: { opacity: 1, scale: 1, transition: { duration: 0 } },
  solved: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  swapping: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  'swap-target': { opacity: 1, scale: 1, transition: { duration: 0.2 } }
};

export const EMOJI_TEXT_VARIANTS = {
  initial: { opacity: 0, scale: 0.5, rotate: -180 },
  neutral: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 200, damping: 15 } },
  selected: { opacity: 1, scale: 1, rotate: 0 },
  solved: { opacity: 1, scale: 0.7, rotate: 0 },
  exit: { opacity: 0, scale: 0, rotate: 180 },
  swapping: { opacity: 1, scale: 1 },
  'swap-target': { opacity: 1, scale: 1 }
};

export const getTileStatusClasses = (status: TileData['status'], solvedColor?: string, categoryId?: string) => {
  let classes = "border-[6px] relative ";

  // Default border color
  let categoryHexColor = '#ffffff'; // Default white

  // Use solvedColor (the row's target color) for border color
  if (solvedColor) {
    const bgClass = solvedColor.split(' ').find(c => c.startsWith('bg-neon-'));
    if (bgClass) {
      categoryHexColor = NEON_PALETTE[bgClass] || '#ffffff';
    }
  }

  const hexForRGBA = categoryHexColor.replace('#', '');
  const r = parseInt(hexForRGBA.substring(0, 2), 16);
  const g = parseInt(hexForRGBA.substring(2, 4), 16);
  const b = parseInt(hexForRGBA.substring(4, 6), 16);

  switch (status) {
    case 'neutral':
    case 'swapping':
      classes += "overflow-hidden z-[9500]";
      classes += " shadow-none";
      break;
    case 'swap-target':
      classes += "overflow-visible z-[9999]";
      classes += " animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8),0_0_18px_rgba(255,255,255,0.55)]";
      break;
    case 'selected':
      classes += "overflow-visible z-[9999]";
      classes += " shadow-none";
      break;
    case 'solved':
      // Solved border/shadow only; bg/text handled inline in Tile.tsx
      if (solvedColor) {
        classes += ` border-white opacity-100 z-[9999] overflow-visible`;
        classes += ` shadow-[inset_0_7px_5px_rgba(0,0,0,0.68),inset_7px_0_5px_rgba(0,0,0,0.68),inset_0_-3px_3px_rgba(0,0,0,0.4),inset_-3px_0_3px_rgba(0,0,0,0.4),0_0_20px_rgba(255,255,255,0.8),0_0_40px_rgba(255,255,255,0.4)]`;
      } else {
        classes += ` border-white opacity-100 z-[9999] overflow-visible`;
        classes += ` shadow-[inset_0_7px_5px_rgba(0,0,0,0.68),inset_7px_0_5px_rgba(0,0,0,0.68),inset_0_-3px_3px_rgba(0,0,0,0.4),inset_-3px_0_3px_rgba(0,0,0,0.4),0_0_20px_rgba(255,0,128,0.8),0_0_40px_rgba(255,0,128,0.4)]`;
      }
      break;
    case 'wrong':
      classes += "border-neon-rose shadow-[0_0_15px_rgba(255,0,0,0.8)] z-[9999] overflow-hidden";
      break;
    case 'correct-preview':
      classes += "border-neon-green shadow-[0_0_15px_rgba(51,255,0,0.8)] z-[9999] overflow-hidden";
      break;
    case 'hint':
      classes += "border-neon-yellow-1 shadow-[0_0_26px_rgba(255,255,0,0.95),0_0_44px_rgba(255,255,0,0.7),inset_0_0_10px_rgba(255,255,0,0.45)] animate-pulse z-[9999] overflow-visible";
      break;
    case 'locked':
      classes += "border-zinc-700 opacity-60 cursor-not-allowed overflow-hidden z-[9500]";
      break;
    case 'fading-out-bg':
      classes += "border-white shadow-md overflow-hidden z-[9500]";
      break;
    default:
      classes += "border-[#FFFF00] shadow-lg overflow-hidden z-[9500]";
      break;
  }

  return classes;
};

export const getTypographicClasses = (
  word: string,
  isEmoji: boolean = false,
  isSolved: boolean = false,
  isCascade: boolean = false,
  isNarrow: boolean = false,
  rowCount: number = 5
) => {
  if (!word) return "opacity-0";
  if (isEmoji) {
    return "text-4xl sm:text-5xl md:text-6xl leading-none select-none filter-none";
  }

  const length = word.length;

  if (isCascade) {
    if (length <= 3) return "text-lg font-black tracking-widest";
    if (length <= 5) return "text-base font-black tracking-wider";
    if (length <= 7) return "text-sm font-black tracking-wide";
    return "text-xs font-black tracking-normal leading-tight";
  }

  let baseSize = "text-sm";
  let weight = "font-black";
  let tracking = "tracking-tight"; // Switched to tight to allow larger glyphs

  if (isNarrow) {
    if (length <= 4) baseSize = "text-sm sm:text-base";
    else if (length <= 7) baseSize = "text-xs sm:text-sm";
    else baseSize = "text-[10px] sm:text-xs";
  } else {
    // Row counts usually correlate to number of columns/difficulty
    if (rowCount >= 7) {
      if (length <= 4) baseSize = "text-sm sm:text-base";
      else if (length <= 8) baseSize = "text-xs sm:text-sm";
      else baseSize = "text-[10px] sm:text-xs";
    } else {
      // Default 4-col layout
      if (length <= 4) baseSize = "text-lg sm:text-2xl";
      else if (length <= 7) baseSize = "text-base sm:text-lg";
      else if (length <= 10) baseSize = "text-sm sm:text-base";
      else baseSize = "text-xs sm:text-sm";
    }
  }

  return `${baseSize} ${weight} ${tracking} uppercase leading-[0.9] select-none text-center break-words w-full`;
};
