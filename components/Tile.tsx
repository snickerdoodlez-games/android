
import { motion, AnimatePresence } from 'framer-motion';
import React, { useRef } from 'react';
import {
  SELECTION_VARIANTS,
  TEXT_VARIANTS,
  EMOJI_TEXT_VARIANTS,
  POP_STYLE_LIGHT,
  POP_STYLE_DARK,
  EMOJI_OUTLINE,
  getTileStatusClasses,
  getTypographicClasses
} from '../services/tileStyles';
import { TileData, NEON_PALETTE } from '../types';

const m = motion as any;
const BANK_HEX_PALETTE = ['#fd073a', '#ff5f1f', '#ccd100', '#39ff14', '#00ffff', '#ff00ff', '#680e68'];
const ROTATING_HARD_CONIC = `conic-gradient(from 0deg, ${BANK_HEX_PALETTE[0]} 0deg 72deg, ${BANK_HEX_PALETTE[1]} 72deg 144deg, ${BANK_HEX_PALETTE[2]} 144deg 216deg, ${BANK_HEX_PALETTE[3]} 216deg 288deg, ${BANK_HEX_PALETTE[4]} 288deg 360deg)`;

interface TileProps {
  data: TileData;
  onClick: (id: string) => void;
  onLongPress?: (word: string, definition?: string) => void;
  disabled?: boolean;
  targetColor?: string;
  isCascade?: boolean;
  isNarrow?: boolean;
  rowCount?: number;
}

const FONT_STYLE = {
  fontFamily: '"Oswald", sans-serif',
  backfaceVisibility: 'hidden' as const
};

type SelectedAnimationPreset = {
  name: string;
  type: 'draw-border';
  baseFill: string;
  borderColor: string;
  hoverColor: string;
  borderWidth: number;
  duration: number;
};

const SELECTED_ANIMATION_BANK: SelectedAnimationPreset[] = [
  {
    name: 'draw-border-v1',
    type: 'draw-border',
    baseFill: '#111111',
    borderColor: '#58afd1',
    hoverColor: '#ffe593',
    borderWidth: 6,
    duration: 0.25
  }
];

const SELECTED_ANIMATION_PRESET = SELECTED_ANIMATION_BANK[0];

const Tile = React.forwardRef<HTMLDivElement, TileProps>(({
  data, onClick, onLongPress, disabled, targetColor, isCascade, isNarrow, rowCount, ...props
}, ref) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isLongPressActive = useRef(false);

  const isSolved = data.status === 'solved';
  const isSelected = data.status === 'selected';
  const isSwapping = data.status === 'swapping';
  const isSwapTarget = data.status === 'swap-target';
  const isCorrectPreview = data.status === 'correct-preview';
  const isLocked = data.status === 'locked';

  // Use row color first so tiles in the same row share a consistent visual color.
  const solvedColor = targetColor || data.color;
  const borderHex = (() => {
    if (!solvedColor) return undefined;
    const bgClass = solvedColor.split(' ').find(c => c.startsWith('bg-neon-'));
    return bgClass ? NEON_PALETTE[bgClass] : undefined;
  })();
  const isUnsolvedBorderState =
    data.status === 'neutral' ||
    data.status === 'selected' ||
    data.status === 'swap-target' ||
    data.status === 'swapping' ||
    data.status === 'correct-preview';
  const statusClasses = getTileStatusClasses(data.status, solvedColor, data.categoryId);
  const textClasses = getTypographicClasses(data.word, data.isEmoji, isSolved, isCascade, isNarrow, rowCount);
  const variants = data.isEmoji ? EMOJI_TEXT_VARIANTS : TEXT_VARIANTS;

  const isDarkText =
    data.status === 'neutral' ||
    isSwapTarget ||
    isSwapping ||
    isCorrectPreview ||
    (isSolved && (solvedColor || '').includes('text-black'));

  const textStyle = data.isEmoji
    ? EMOJI_OUTLINE
    : (isDarkText ? POP_STYLE_DARK : POP_STYLE_LIGHT);

  const solvedTextColor = (solvedColor || '').includes('text-white') ? '#FFFFFF' : '#000000';
  const solvedFillColor = borderHex || '#FF0066';
  const solvedInsetShadow =
    'inset 0 7px 5px rgba(0,0,0,0.68), inset 7px 0 5px rgba(0,0,0,0.68), inset 0 -3px 3px rgba(0,0,0,0.4), inset -3px 0 3px rgba(0,0,0,0.4)';

  const styleOverride: React.CSSProperties = (() => {
    if (isSelected) {
      return {
        backgroundColor: SELECTED_ANIMATION_PRESET.baseFill,
        color: '#FFFFFF'
      };
    }
    if (isLocked) return { backgroundColor: '#18181B', color: '#71717A' };
    if (isSolved) {
      return {
        backgroundColor: solvedFillColor,
        color: solvedTextColor,
        boxShadow: solvedInsetShadow,
        borderColor: '#FFFFFF'
      };
    }
    if (data.status === 'wrong') return { backgroundColor: '#000000', color: '#FF0000' };
    if (data.status === 'hint') return { backgroundColor: '#000000', color: '#FFFF00' };
    return { backgroundColor: '#FFFFFF', color: '#000000' };
  })();
  const borderStyle: React.CSSProperties = isSelected
    ? {
      borderColor: 'transparent',
      boxShadow: 'none',
      filter: 'none',
      animation: 'none'
    }
    : {};
  const borderWidth = 6;
  const showSelectionOverlay = isSelected;
  const neutralTextOverride: React.CSSProperties = isSelected
    ? {
      textShadow: 'none',
      filter: 'none'
    }
    : {};

  const handlePointerDown = () => {
    if (disabled || isSwapping || isSwapTarget) return;
    isLongPressActive.current = false;
    timerRef.current = setTimeout(() => {
      isLongPressActive.current = true;
      if (onLongPress) onLongPress(data.word, data.definition);
    }, 500);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (!isLongPressActive.current) {
      onClick(data.id);
    }
  };

  const handlePointerLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

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
    filter: isSolved
      ? `brightness(1.2) drop-shadow(0px 4px 4px rgba(0,0,0,0.6))`
      : 'drop-shadow(0px 2px 2px rgba(0,0,0,0.3))'
  } : {};

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-visible touch-none min-h-0">
      <m.div
        layout
        ref={ref}
        initial="neutral"
        animate={data.status}
        variants={SELECTION_VARIANTS}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerLeave}
        transition={isSelected ? { duration: 0 } : { type: "spring", stiffness: 450, damping: 28 }}
        className={`relative w-full flex items-center justify-center cursor-pointer select-none rounded-small z-10 ${statusClasses} h-full ${showSelectionOverlay ? 'overflow-visible' : 'overflow-hidden'} min-h-0`}
        style={{
          ...FONT_STYLE,
          ...styleOverride,
          ...borderStyle,
          borderWidth: `${borderWidth}px`,
          boxSizing: 'border-box',
          transition: 'border-color 0.24s ease-out, border-width 0.24s cubic-bezier(0.22, 0.8, 0.2, 1), box-shadow 0.2s ease-out'
        }}
        {...props}
      >
        <AnimatePresence>
          {showSelectionOverlay && (
            <m.div
              className="absolute inset-0 pointer-events-none z-[2] rounded-small overflow-hidden"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <m.div
                className="absolute -inset-[20%]"
                style={{
                  background: ROTATING_HARD_CONIC,
                  transformOrigin: '50% 50%'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4.2, ease: 'linear', repeat: Infinity }}
              />
              <div
                className="absolute pointer-events-none rounded-small"
                style={{
                  inset: `${SELECTED_ANIMATION_PRESET.borderWidth + 1}px`,
                  background: SELECTED_ANIMATION_PRESET.baseFill
                }}
              />
            </m.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <m.span
            key={data.word}
            variants={variants}
            initial="initial"
            animate={data.status}
            exit="exit"
            className={`${textClasses} absolute inset-0 z-[9999] text-center px-2 pointer-events-none flex flex-col items-center justify-center max-w-full`}
            style={{
              ...textStyle,
              ...neutralTextOverride,
              ...emojiFilterStyle,
              maxHeight: '100%',
              color: 'currentColor',
              zIndex: 9999
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
