import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { 
  SELECTION_VARIANTS, 
  TEXT_VARIANTS,
  ARCADE_OUTLINE, 
  CASCADE_OUTLINE,
  EMOJI_OUTLINE,
  getTileStatusClasses, 
  getTypographicClasses,
} from '../services/tileStyles';
import { TileData } from '../types';

const m = motion as any;

interface TileProps {
  data: TileData;
  onClick: (id: string) => void;
  disabled?: boolean;
  targetColor?: string; 
  isCascade?: boolean;
  isNarrow?: boolean;
  rowCount?: number; // Added to support typographic scaling
}

const FONT_STYLE = { 
  fontFamily: '"Oswald", sans-serif',
  backfaceVisibility: 'hidden' as const,
};

const Tile = React.forwardRef<HTMLDivElement, TileProps>(({ data, onClick, disabled, targetColor, isCascade, isNarrow, rowCount, ...props }, ref) => {
  const isTransitioning = data.status === 'swapping' || data.status === 'swap-target';
  const isSolved = data.status === 'solved';
  const isSelected = data.status === 'selected';
  const isSwapping = data.status === 'swapping';
  const isSwapTarget = data.status === 'swap-target';
  const isCorrectPreview = data.status === 'correct-preview';
  const isLocked = data.status === 'locked';

  const statusClasses = getTileStatusClasses(data.status, (isCascade || isSolved) ? (data.color || targetColor) : undefined);
  const textClasses = getTypographicClasses(data.word, data.isEmoji, isSolved, isCascade, isNarrow, rowCount);
  
  let styleOverride: React.CSSProperties = {};
  
  if (isSelected || isSwapTarget || isSwapping) {
    styleOverride.backgroundColor = '#000000';
  } else if (isLocked) {
    styleOverride.backgroundColor = '#F9FF00';
  } else if (isCorrectPreview) {
    styleOverride.backgroundColor = '#39FF14';
  }

  const renderWordContent = () => {
    if (data.isEmoji) return data.word;
    const words = (data.word || '').trim().split(/\s+/);
    if (words.length <= 1) return <span className="max-w-full truncate">{data.word}</span>;
    return words.map((word, idx) => (
      <span key={idx} className="block w-full leading-[1.0] whitespace-nowrap uppercase max-w-full truncate">
        {word}
      </span>
    ));
  };

  const emojiFilterStyle = data.isEmoji ? {
    filter: isSolved ? `brightness(1.2)` : 'none'
  } : {};

  const rainbowGradient = 'linear-gradient(to right, #FF073A, #FF5F1F, #F9FF00, #00F000, #00FFFF, #0066FF, #B026FF, #FF1FBF, #FF073A)';

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-visible touch-action-manipulation">
      <m.div 
        layout
        ref={ref}
        initial="neutral"
        animate={data.status}
        variants={SELECTION_VARIANTS}
        onClick={() => !disabled && onClick(data.id)}
        className={`relative w-full flex items-center justify-center cursor-pointer select-none rounded-small z-10 ${statusClasses} h-full touch-action-manipulation overflow-hidden`}
        style={{
          ...FONT_STYLE,
          ...styleOverride,
          boxSizing: 'border-box',
          transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
        }}
        {...props}
      >
         {/* SELECTION BORDER LAYERS - SYNCED 0.4s FADE (Sped up from 0.8s) */}
         <AnimatePresence>
           {(isSelected || isSwapTarget || isSwapping) && (
             <m.div 
                key="selection-border-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 z-0"
             >
               <m.div 
                 className="absolute inset-0"
                 style={{ 
                   background: isSwapTarget ? rainbowGradient : '#FFFFFF',
                   backgroundSize: '200% 100%',
                   animation: isSwapTarget ? 'rainbow-flow 1.5s linear infinite' : 'none'
                 }}
               >
                 <m.div 
                   className="absolute inset-[4px] rounded-[4px]"
                   style={{ 
                     background: isSwapTarget ? '#FFFFFF' : rainbowGradient,
                     backgroundSize: '200% 100%',
                     animation: (isSelected || isSwapping) ? 'rainbow-flow 1.5s linear infinite' : 'none'
                   }}
                 >
                   <div className="absolute inset-[3px] bg-black rounded-[2px]" />
                 </m.div>
               </m.div>
             </m.div>
           )}
         </AnimatePresence>

         {/* SHINE / SHIMMER LAYER - Sped up from 0.8s */}
         <AnimatePresence>
           {(isSelected || isSwapTarget || isTransitioning || isSolved) && (
             <m.div 
                className="absolute inset-0 pointer-events-none z-20 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: isTransitioning ? 0.9 : (isSelected || isSwapTarget) ? [0.3, 0.5, 0.3] : 0.4 
                }}
                transition={(isSelected || isSwapTarget) ? { duration: 0.75, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}
                exit={{ opacity: 0 }}
             >
               <m.div 
                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-[200%]"
                 animate={{ 
                    x: ['-100%', '100%'],
                 }}
                 transition={{ 
                    duration: isTransitioning ? 0.2 : (isSelected || isSwapTarget) ? 1.0 : 1.25, 
                    repeat: Infinity, 
                    ease: "linear" 
                 }}
                 style={{ skewX: '-25deg' }}
               />
             </m.div>
           )}
         </AnimatePresence>

         <AnimatePresence mode="wait">
           <m.span 
              key={data.word} 
              variants={TEXT_VARIANTS}
              initial="initial"
              animate={data.status}
              exit="exit"
              className={`${textClasses} text-white z-30 text-center px-2 pointer-events-none w-full flex flex-col items-center justify-center max-w-full`}
              style={{
                ...(data.isEmoji ? EMOJI_OUTLINE : isCascade ? CASCADE_OUTLINE : ARCADE_OUTLINE),
                ...emojiFilterStyle,
                maxHeight: '100%'
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