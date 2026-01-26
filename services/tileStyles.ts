import { TileData } from '../types';

export const TILE_RADII = {
  small: '8px',
  medium: '14px',
};

export const TILE_ANIMATION_CURVE = [0.2, 0.8, 0.2, 1]; 
export const SWAP_SPEED = 0.8; 

// Machine-Precise Arcade Typography with Soft encompassing shadow
export const ARCADE_OUTLINE = {
  textShadow: `
    1px 1px 1.2px #000, 
    -1px -1px 1.2px #000, 
    1px -1px 1.2px #000, 
    -1px 1px 1.2px #000, 
    1.5px 0 1.2px #000, 
    -1.5px 0 1.2px #000, 
    0 1.5px 1.2px #000, 
    0 -1.5px 1.2px #000, 
    3px 3px 2.5px rgba(0,0,0,1),
    0 0 18px rgba(0,0,0,0.95),
    0 0 8px rgba(0,0,0,0.9)
  `,
  paintOrder: 'stroke fill' as const,
  fontWeight: 700, 
};

export const CASCADE_OUTLINE = {
  textShadow: `
    1px 1px 1.2px #000, 
    -1px -1px 1.2px #000, 
    1px -1px 1.2px #000, 
    -1px 1px 1.2px #000, 
    1.5px 0 1.2px #000, 
    -1.5px 0 1.2px #000, 
    0 1.5px 1.2px #000, 
    0 -1.5px 1.2px #000, 
    3px 3px 2.5px rgba(0,0,0,1),
    0 0 18px rgba(0,0,0,0.95)
  `,
  paintOrder: 'stroke fill' as const,
  fontWeight: 700,
};

export const EMOJI_OUTLINE = {
  textShadow: `
    2px 2px 1.5px #000, 
    -1px -1px 1.2px #000, 
    1px -1px 1.2px #000, 
    -1px 1px 1.2px #000, 
    4px 4px 4px rgba(0,0,0,0.6),
    0 0 18px rgba(0,0,0,0.9)
  `,
  filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.4))',
  paintOrder: 'stroke fill' as const
};

export const SELECTION_VARIANTS = {
  neutral: { 
    scale: 1, 
    rotate: 0,
    opacity: 1,
    borderWidth: '2px',
    boxShadow: '0 0 0px rgba(255,255,255,0)',
    transition: { duration: 0.4, ease: "easeInOut" } // Sped up from 0.8
  },
  selected: { 
    scale: 1, 
    rotate: 0,
    zIndex: 50,
    borderWidth: '0px', 
    boxShadow: [
      'inset 0 0 10px rgba(255,255,255,0.4), 0 0 15px rgba(255,255,255,0.2)',
      'inset 0 0 20px rgba(255,255,255,0.7), 0 0 25px rgba(255,255,255,0.5)',
      'inset 0 0 10px rgba(255,255,255,0.4), 0 0 15px rgba(255,255,255,0.2)'
    ],
    transition: { 
      boxShadow: { repeat: Infinity, duration: 0.6, ease: "easeInOut" }, // Sped up from 1.2
      scale: { duration: 0.2 } // Sped up from 0.4
    }
  },
  swapping: { 
    scale: 1.1, 
    rotate: 0, 
    zIndex: 60,
    borderWidth: '0px',
    transition: { duration: 0.4, ease: "easeInOut" } // Sped up from 0.8
  },
  'swap-target': { 
    scale: 1.1, 
    rotate: 0, 
    zIndex: 60,
    borderWidth: '0px',
    boxShadow: [
      'inset 0 0 10px rgba(255,255,255,0.4), 0 0 15px rgba(255,255,255,0.2)',
      'inset 0 0 20px rgba(255,255,255,0.7), 0 0 25px rgba(255,255,255,0.5)',
      'inset 0 0 10px rgba(255,255,255,0.4), 0 0 15px rgba(255,255,255,0.2)'
    ],
    transition: { 
      boxShadow: { repeat: Infinity, duration: 0.6, ease: "easeInOut" }, // Sped up from 1.2
      scale: { duration: 0.4, ease: "easeInOut" } // Sped up from 0.8
    }
  },
  solved: { 
    scale: 0.95, 
    rotate: 0, 
    zIndex: 5,
    borderWidth: '2px',
    transition: { duration: 0.4, ease: "easeOut" } // Sped up from 0.8
  },
  hint: {
    scale: 1.05,
    borderWidth: '4px',
    borderColor: '#F9FF00',
    boxShadow: [
      '0 0 0px #F9FF00',
      '0 0 20px #F9FF00',
      '0 0 0px #F9FF00'
    ],
    transition: {
      boxShadow: { repeat: Infinity, duration: 0.5 } // Sped up from 1.0
    }
  },
  wrong: { 
    x: [0, -12, 10, -8, 6, -4, 2, 0], 
    transition: { duration: 0.3, ease: "linear" } // Sped up from 0.4
  },
  'correct-preview': { 
    scale: 1.1, 
    zIndex: 25,
    transition: { yoyo: Infinity, duration: 0.15 } // Sped up from 0.3
  },
  locked: { 
    scale: 0.95, 
    opacity: 0.8 
  },
  'fading-out-bg': { 
    opacity: [0.6, 1],
    scale: [0.95, 1],
    filter: 'brightness(1)',
    transition: { duration: 0.2, ease: "easeInOut" } // Sped up from 0.4
  }
};

export const TEXT_VARIANTS = {
  initial: { opacity: 0, scale: 0.8 },
  neutral: { opacity: 1, scale: 1, transition: { duration: 0.2 } }, // Sped up from 0.4
  selected: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  solved: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  wrong: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  swapping: { opacity: 0.7, scale: 0.9, transition: { duration: 0.2 } },
  'swap-target': { opacity: 0.7, scale: 0.9, transition: { duration: 0.2 } },
  hint: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
};

export const getTileStatusClasses = (status: string, color?: string) => {
  const base = "border-white transition-all duration-200 ";
  if (status === 'solved') {
    // Return the color class string directly if it exists, otherwise use a default arcade style.
    // This allows the color definition to fully specify its shadow (glow + inset).
    return base + (color || 'bg-zinc-800 shadow-[inset_0_0_15px_rgba(255,255,255,0.95)]');
  }
  if (status === 'hint') return base + "bg-zinc-900 border-neon-yellow shadow-[0_0_15px_#F9FF00]";
  if (status === 'wrong') return base + "bg-neon-red shadow-[0_0_25px_#FF073A]";
  if (status === 'locked') return base + "border-neon-yellow shadow-[0_0_12px_rgba(249,255,0,0.6)]";
  if (status === 'correct-preview') return base + "border-neon-green shadow-[0_0_20px_#39FF14]";
  if (status === 'selected' || status === 'swap-target' || status === 'swapping') return "border-none"; 
  if (status === 'neutral') return base + (color ? `${color} border-white/60` : "bg-zinc-900");
  return base + "bg-black border-zinc-700";
};

export const getTypographicClasses = (word: string, isEmoji?: boolean, isSolved?: boolean, isCascade?: boolean, isNarrow?: boolean, rowCount: number = 0) => {
  if (isEmoji) {
    // Dynamic Font Scaling: If 7 rows are active, the emoji font-size reduces to maintain fit
    const isCompact = rowCount >= 7;
    if (isCompact) {
      return isSolved ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl";
    }
    return isSolved ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl";
  }
  
  const words = (word || '').trim().split(/\s+/);
  const maxWordLen = Math.max(...words.map(w => w.length));
  const lineCount = words.length;
  
  let size = "text-base"; 
  
  if (isCascade || isNarrow) {
    if (lineCount >= 3 || maxWordLen > 8) size = "text-[10px] md:text-[11px]";
    else if (lineCount === 2 || maxWordLen > 6) size = "text-[12px] md:text-[13px]";
    else size = "text-[14px] md:text-[16px]";
  } else {
    if (lineCount >= 3 || maxWordLen > 10) size = "text-[10px] md:text-xs";
    else if (lineCount === 2 || maxWordLen > 7) size = "text-sm md:text-base";
    else size = "text-lg md:text-xl";
  }

  return `${size} font-black font-oswald uppercase leading-[1.1] tracking-wide`;
};