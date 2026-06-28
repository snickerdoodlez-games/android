import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  SELECTION_VARIANTS, 
  TEXT_VARIANTS,
  ARCADE_OUTLINE, 
  EMOJI_OUTLINE,
  SOLVED_OUTLINE,
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
  isNarrow?: boolean;
  rowCount?: number;
  showDefinitionOverride?: boolean;
  gridEntryDelay?: number;
  isExpansion?: boolean;
}

const LONG_PRESS_DURATION = 600; // ms

const FONT_STYLE = { 
  fontFamily: '"Oswald", sans-serif',
  backfaceVisibility: 'hidden' as const,
};

const Tile = React.forwardRef<HTMLDivElement, TileProps>(({ data, onClick, disabled, targetColor, isNarrow, rowCount, showDefinitionOverride, gridEntryDelay, isExpansion, ...props }, ref) => {
  const [showDefinition, setShowDefinition] = useState(false);
  const [isShining, setIsShining] = useState(false);
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const longPressTriggered = useRef(false);
  const pointerWasCancelled = useRef(false);
  const tileRef = useRef<HTMLDivElement | null>(null);
  const shineTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shineEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isTransitioning = data.status === 'swapping' || data.status === 'swap-target';
  const isSolved = data.status === 'solved';
  const isSelected = data.status === 'selected';
  const isSwapping = data.status === 'swapping';
  const isSwapTarget = data.status === 'swap-target';
  const isCorrectPreview = data.status === 'correct-preview';
  const isLocked = data.status === 'locked';
  const isHint = data.status === 'hint';
  const isFlippingOut = data.status === 'flipping-out';
  const isFallingOut = data.status === 'falling-out';

  const statusClasses = getTileStatusClasses(data.status, isSolved ? (data.color || targetColor) : undefined);
  const textClasses = getTypographicClasses(data.word, data.isEmoji, isSolved, false, isNarrow, rowCount);
  
  let styleOverride: React.CSSProperties = {};
  
  if (isSelected || isSwapTarget || isSwapping) {
    styleOverride.backgroundColor = '#000000';
  } else if (isSolved) {
    // Solved tiles keep their background color but no glow
  } else if (isLocked) {
    styleOverride.backgroundColor = '#F9FF00';
  } else if (isCorrectPreview) {
    styleOverride.backgroundColor = '#39FF14';
  }
  const clearLongPress = useCallback(() => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  }, []);

  // Begin long press timer (shared by pointer and touch events)
  const startLongPress = useCallback(() => {
    if (disabled) return;
    longPressTriggered.current = false;
    pointerWasCancelled.current = false;
    clearLongPress();
    longPressTimer.current = setTimeout(() => {
      longPressTriggered.current = true;
      setShowDefinition(true);
    }, LONG_PRESS_DURATION);
  }, [disabled, clearLongPress]);

  // Cancel long press timer
  const cancelLongPress = useCallback(() => {
    clearLongPress();
  }, [clearLongPress]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerWasCancelled.current = false;
    startLongPress();
  }, [startLongPress]);

  const handlePointerUp = useCallback(() => {
    // FIX: If pointercancel fired (browser detected a gesture like long-press),
    // don't clear the timer. The timer needs to fire to show the definition overlay.
    // Without this check, pointerup fires after pointercancel on mobile and clears
    // the timer before it can reach LONG_PRESS_DURATION.
    if (pointerWasCancelled.current) return;
    cancelLongPress();
  }, [cancelLongPress]);

  // NOTE: handlePointerLeave intentionally does NOT cancel the long press timer.
  // On mobile browsers (Android Chrome), pointerleave fires BEFORE pointercancel
  // during gesture recognition (long-press detection). If we cancel here, the timer
  // never reaches LONG_PRESS_DURATION and the definition overlay never appears.
  // The timer is only cancelled on pointerup (finger lifts) or pointercancel (browser gesture cancel).
  const handlePointerLeave = useCallback(() => {
    // Do NOT cancel long press timer - see note above
  }, []);

  // CRITICAL FIX: When the browser detects a potential gesture (like scroll or long-press),
  // it fires pointercancel. We mark this so handlePointerUp won't clear the timer,
  // allowing the timeout to fire and show the definition overlay.
  const handlePointerCancel = useCallback(() => {
    pointerWasCancelled.current = true;
    longPressTriggered.current = true; // Suppress subsequent click from processing as tap
    // Intentionally do NOT clear the long press timer - let it fire.
  }, []);

  // When showDefinitionOverride is active (auto-play testing), show definition overlay
  useEffect(() => {
    if (showDefinitionOverride && data.definition) {
      setShowDefinition(true);
    } else if (!showDefinitionOverride) {
      setShowDefinition(false);
    }
  }, [showDefinitionOverride, data.definition]);

  const handleCloseDefinition = useCallback(() => {
    setShowDefinition(false);
    // Prevent long press re-triggering immediately after closing definition
    longPressTriggered.current = true;
    clearLongPress();
  }, [clearLongPress]);

  // Close definition on scroll
  useEffect(() => {
    if (!showDefinition) return;
    const handleScroll = () => setShowDefinition(false);
    document.addEventListener('scroll', handleScroll, true);
    return () => {
      document.removeEventListener('scroll', handleScroll, true);
    };
  }, [showDefinition]);

  // RANDOM SHINE: schedule a brief shimmer on neutral tiles at random intervals.
  // Paused when page is hidden to save battery.
  useEffect(() => {
    const isNeutral = data.status === 'neutral';
    if (!isNeutral || disabled) {
      setIsShining(false);
      if (shineTimerRef.current) { clearTimeout(shineTimerRef.current); shineTimerRef.current = null; }
      if (shineEndTimerRef.current) { clearTimeout(shineEndTimerRef.current); shineEndTimerRef.current = null; }
      return;
    }

    let pausedByVisibility = false;

    const scheduleShine = () => {
      // Don't schedule if page is hidden
      if (document.visibilityState === 'hidden') {
        pausedByVisibility = true;
        return;
      }
      pausedByVisibility = false;
      const delay = 4000 + Math.random() * 10000; // 4-14 seconds between shines
      shineTimerRef.current = setTimeout(() => {
        setIsShining(true);
        shineEndTimerRef.current = setTimeout(() => {
          setIsShining(false);
          scheduleShine();
        }, 900); // shine duration ~900ms
      }, delay);
    };

    scheduleShine();

    // Resume shine scheduling when page becomes visible again
    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && pausedByVisibility) {
        pausedByVisibility = false;
        scheduleShine();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      if (shineTimerRef.current) clearTimeout(shineTimerRef.current);
      if (shineEndTimerRef.current) clearTimeout(shineEndTimerRef.current);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [data.status, disabled]);

  const renderWordContent = () => {
    if (data.isEmoji) return data.word;
    const words = (data.word || '').trim().split(/\s+/);
    if (words.length <= 1) return <span className="max-w-full whitespace-nowrap overflow-visible">{data.word}</span>;
    return words.map((word, idx) => (
      <span key={idx} className="block w-full leading-[1.0] whitespace-nowrap uppercase max-w-full overflow-visible">
        {word}
      </span>
    ));
  };

  const emojiFilterStyle = data.isEmoji ? {
    filter: isSolved ? `brightness(1.2)` : 'none'
  } : {};

  const rainbowGradient = 'linear-gradient(to right, #FF073A, #FF5F1F, #F9FF00, #00F000, #00FFFF, #0066FF, #B026FF, #FF1FBF, #FF073A)';

  // Build additional CSS classes for new animations
  const animClasses: string[] = [];
  if (isHint) animClasses.push('tile-hint');
  if (isSolved && isExpansion) animClasses.push('solved-tile-expansion');
  else if (isSolved) animClasses.push('tile-flip-lock');
  if (isFlippingOut) animClasses.push('expansion-tile-unsolve');
  if (isFallingOut) animClasses.push('animate-tile-fall-out');
  if (gridEntryDelay !== undefined && gridEntryDelay >= 0) animClasses.push('tile-grid-entry');
  const extraClasses = animClasses.join(' ');

  // Grid entry inline delay style
  const gridEntryStyle: React.CSSProperties = (gridEntryDelay !== undefined && gridEntryDelay >= 0)
    ? { animationDelay: `${gridEntryDelay}s` }
    : {};

  // Definition overlay - renders in a portal to avoid clipping
  const definitionOverlay = (
    <m.div
      key="definition-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80"
      onClick={handleCloseDefinition}
    >
      <m.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.39, 0.575, 0.565, 1.0] }}
        className="rounded-large px-8 py-8 mx-6 max-w-[90vw] w-full bg-black border-2 border-white"
        style={{ maxWidth: '400px', boxShadow: '0 0 40px rgba(0,229,255,0.12)' }}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        {/* Word heading — larger for emojis */}
        <h2 className={`font-black font-raleway uppercase definition-text text-center tracking-wider leading-tight mb-1 animate-focus-in-expand ${data.isEmoji ? 'text-[clamp(3rem,12vw,6rem)]' : 'text-[clamp(1.25rem,5vw,2rem)]'}`} style={{ animationDelay: '0.1s' }}>
          {data.word}
        </h2>

        {/* Separator */}
        {data.definition && (
          <>
            <div className="w-12 h-0.5 mx-auto my-4" style={{ backgroundColor: 'var(--accent-active)', boxShadow: '0 0 8px rgba(0,229,255,0.5)' }} />
            
            {/* Definition text — larger for emojis */}
            <p className={`leading-relaxed definition-text font-raleway text-center whitespace-normal break-words max-w-[65ch] mx-auto animate-focus-in-expand ${data.isEmoji ? 'text-[clamp(1.25rem,5vw,2rem)]' : 'text-[clamp(0.8125rem,3.5vw,1.125rem)]'}`} style={{ animationDelay: '0.5s' }}>
              {data.definition}
            </p>
          </>
        )}

        {/* Separator before close button */}
        <div className="mt-6 mb-4 w-full h-px bg-zinc-800" />

        {/* Close button */}
        <button
          className="block mx-auto px-8 py-2 min-h-[48px] bg-white text-black font-black font-raleway text-[clamp(0.75rem,3vw,1rem)] uppercase rounded-medium hover:scale-105 active:scale-95 transition-all"
          onClick={handleCloseDefinition}
          aria-label="Close definition overlay"
        >
          TAP TO CLOSE
        </button>
      </m.div>
    </m.div>
  );

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-visible touch-action-manipulation">
      <m.div 
        ref={(el) => {
          tileRef.current = el;
          if (typeof ref === 'function') ref(el);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
        }}
        initial="neutral"
        animate={data.status}
        variants={SELECTION_VARIANTS}
        onClick={() => {
          if (!disabled && !longPressTriggered.current) {
            onClick(data.id);
          }
          longPressTriggered.current = false;
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerLeave}
        onPointerCancel={handlePointerCancel}
        onContextMenu={(e: React.MouseEvent) => { e.preventDefault(); }}
        className={`relative w-full flex items-center justify-center cursor-pointer select-none rounded-small z-10 ${statusClasses} ${extraClasses} h-full touch-action-manipulation overflow-hidden`}
        style={{
          ...FONT_STYLE,
          ...styleOverride,
          ...gridEntryStyle,
          boxSizing: 'border-box',
          transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
        }}
        {...props}
      >
         {/* SELECTION BORDER LAYERS - SYNCED 0.3s FADE (optimized from 0.4s) */}
         {(isSelected || isSwapTarget || isSwapping) && (
           <m.div 
              key="selection-border-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 z-0"
           >
             <div 
               className="absolute inset-0"
                style={{ 
                  backgroundImage: isSwapTarget ? rainbowGradient : 'none',
                  backgroundColor: isSwapTarget ? 'transparent' : '#FFFFFF',
                  backgroundSize: '200% 100%',
                  animation: isSwapTarget ? 'rainbow-flow 1.5s linear infinite' : 'none'
                }}
              >
                <div 
                  className="absolute inset-[4px] rounded-[4px]"
                  style={{ 
                    backgroundImage: isSwapTarget ? 'none' : rainbowGradient,
                    backgroundColor: isSwapTarget ? '#FFFFFF' : 'transparent',
                    backgroundSize: '200% 100%',
                    animation: (isSelected || isSwapping) ? 'rainbow-flow 1.5s linear infinite' : 'none'
                  }}
               >
                 <div className="absolute inset-[3px] bg-black rounded-[2px]" />
               </div>
             </div>
           </m.div>
         )}

         {/* SHINE / SHIMMER LAYER - for selection/swap transitions */}
         {(isSelected || isSwapTarget || isTransitioning) && (
           <div 
              className="absolute inset-0 pointer-events-none z-20 overflow-hidden opacity-50"
              style={{ animation: 'shimmer-tile 1.25s linear infinite' }}
           >
             <div 
               className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
               style={{ 
                 transform: 'skewX(-25deg) translateX(-100%)',
                 animation: 'shimmer-tile-slide 1.25s linear infinite'
               }}
             />
           </div>
         )}

         {/* RANDOM SHINE on neutral tiles at random times */}
         {isShining && (
           <div 
              className="absolute inset-0 pointer-events-none z-20 overflow-hidden opacity-40"
              style={{ animation: 'shimmer-tile 1.25s linear infinite' }}
           >
             <div 
               className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
               style={{ 
                 transform: 'skewX(-25deg) translateX(-100%)',
                 animation: 'shimmer-tile-slide 1.25s linear infinite'
               }}
             />
           </div>
         )}

          {/* SOLVE SHINE SWEEP — white streak sweeps left→right across the solved tile */}
          {isSolved && (
            <div className="absolute inset-0 z-25 pointer-events-none overflow-hidden rounded-small">
              <div 
                className="absolute top-0 h-full w-[30%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg]"
                style={{ animation: 'shine-sweep 0.55s ease-out forwards' }}
              />
            </div>
          )}

          {isFlippingOut ? (
            <m.span 
               key={data.word} 
               variants={TEXT_VARIANTS}
               initial="neutral"
               animate="neutral"
              className={`${textClasses} text-white z-30 text-center px-2 pointer-events-none w-full flex flex-col items-center justify-center max-w-full`}
              style={{
                ...(data.isEmoji ? EMOJI_OUTLINE : isSolved ? SOLVED_OUTLINE : ARCADE_OUTLINE),
                ...emojiFilterStyle,
                maxHeight: '100%'
              }}
           >
             {renderWordContent()}
           </m.span>
         ) : (
           <AnimatePresence mode="wait">
             <m.span 
                key={data.word} 
                variants={TEXT_VARIANTS}
                initial="initial"
                animate={data.status}
                exit="exit"
                className={`${textClasses} text-white z-30 text-center px-2 pointer-events-none w-full flex flex-col items-center justify-center max-w-full`}
                style={{
                  ...(data.isEmoji ? EMOJI_OUTLINE : isSolved ? SOLVED_OUTLINE : ARCADE_OUTLINE),
                  ...emojiFilterStyle,
                  maxHeight: '100%'
                }}
             >
               {renderWordContent()}
             </m.span>
           </AnimatePresence>
         )}
      </m.div>

      {/* DEFINITION OVERLAY - RENDERED VIA PORTAL TO AVOID CLIPPING */}
      {showDefinition && createPortal(
        <AnimatePresence>
          {definitionOverlay}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
});

Tile.displayName = 'Tile';
export default React.memo(Tile);