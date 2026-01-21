import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TileData } from '../types';
import { 
  SELECTION_VARIANTS, 
  ARCADE_OUTLINE, 
  CASCADE_OUTLINE,
  EMOJI_OUTLINE,
  getTileStatusClasses, 
  getTypographicClasses,
  getSolvedGradient
} from '../services/tileStyles';

const m = motion as any;

interface TileProps {
  data: TileData;
  onClick: (id: string) => void;
  disabled?: boolean;
  targetColor?: string; 
  isCascade?: boolean; // Prop to identify Level 8 tiles
}

const FONT_STYLE = { 
  fontFamily: '"Oswald", sans-serif',
  backfaceVisibility: 'hidden' as const,
  WebkitFontSmoothing: 'antialiased' as const,
};

const Tile = React.forwardRef<HTMLDivElement, TileProps>(({ data, onClick, disabled, targetColor, isCascade, ...props }, ref) => {
  const isTransitioning = data.status === 'swapping' || data.status === 'swap-target';
  const isSolved = data.status === 'solved';
  const isSelected = data.status === 'selected';
  const isCorrectPreview = data.status === 'correct-preview';
  const isLocked = data.status === 'locked';
  const isFadingBg = data.status === 'fading-out-bg';

  // Level 8 uses colors even in neutral state
  const statusClasses = getTileStatusClasses(data.status, (isCascade || isSolved) ? (data.color || targetColor) : undefined);
  const textClasses = getTypographicClasses(data.word, data.isEmoji, isSolved, isCascade);
  
  let styleOverride: React.CSSProperties = {};
  
  if (isSolved) {
    const colorClass = data.color || targetColor;
    styleOverride.background = getSolvedGradient(colorClass, data.categoryId);
    styleOverride.backgroundSize = '100% 100vh'; 
    styleOverride.backgroundRepeat = 'no-repeat';
  } else if (isSelected || data.status === 'swapping') {
    styleOverride.backgroundColor = '#0066FF'; // Deep Neon Blue
  } else if (data.status === 'swap-target') {
    styleOverride.backgroundColor = '#FF1FBF'; // Neon Pink
  } else if (isLocked) {
    styleOverride.backgroundColor = '#F9FF00'; // Neon Yellow base
  } else if (isCorrectPreview) {
    styleOverride.backgroundColor = '#39FF14'; // Neon Lime
  } else if (isFadingBg) {
    styleOverride.backgroundColor = '#000000';
  }

  const renderWordContent = () => {
    if (data.isEmoji) return data.word;
    const words = (data.word || '').trim().split(/\s+/);
    if (words.length <= 1) return data.word;
    return words.map((word, idx) => (
      <span key={idx} className="block w-full leading-[1.0] whitespace-nowrap">
        {word}
      </span>
    ));
  };

  const emojiFilterStyle = data.isEmoji ? {
    filter: isSolved 
      ? `drop-shadow(0 0 8px rgba(255,255,255,0.7)) brightness(1.3)` 
      : isSelected || isTransitioning || isCorrectPreview
        ? 'drop-shadow(0 0 12px #FFFFFF)' 
        : 'none'
  } : {};

  return (
    <div className={`relative w-full h-full flex flex-col justify-end overflow-visible touch-action-manipulation`}>
      <m.div 
        layout
        ref={ref}
        initial="neutral"
        animate={data.status}
        variants={SELECTION_VARIANTS}
        onClick={() => !disabled && onClick(data.id)}
        // Conditional overflow and clipping based on isCascade
        className={`relative w-full flex items-center justify-center cursor-pointer select-none rounded-small z-10 ${statusClasses} h-full touch-action-manipulation ${isCascade ? 'overflow-visible' : 'overflow-hidden'}`}
        style={{
          ...FONT_STYLE,
          ...styleOverride,
          transition: 'background-color 0.25s ease-in-out, background 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out'
        }}
        {...props}
      >
         <AnimatePresence mode="wait">
           <m.span 
              key={data.word} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.2, 
                ease: "easeInOut"
              }}
              // Whitespace-nowrap for Cascade to extend words as requested
              className={`${textClasses} text-white z-30 text-center px-0 pointer-events-none w-full flex flex-col items-center justify-center ${isCascade ? 'whitespace-nowrap overflow-visible' : ''}`}
              style={{
                ...(data.isEmoji ? EMOJI_OUTLINE : isCascade ? CASCADE_OUTLINE : ARCADE_OUTLINE),
                ...emojiFilterStyle
              }}
           >
             {renderWordContent()}
           </m.span>
         </AnimatePresence>
      </m.div>
    </div>
  );
});

Tile.displayName = 'Tile';
export default React.memo(Tile);
