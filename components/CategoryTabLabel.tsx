import React, { useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const m = motion as any;

const LONG_PRESS_DURATION = 600;

interface CategoryTabLabelProps {
  name: string;
  catDict?: string;
  className?: string;
}

const CategoryTabLabel: React.FC<CategoryTabLabelProps> = ({ name, catDict, className }) => {
  const [showDef, setShowDef] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pointerWasCancelled = useRef(false);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const onPointerDown = useCallback(() => {
    if (!catDict) return;
    pointerWasCancelled.current = false;
    clearTimer();
    timerRef.current = setTimeout(() => {
      setShowDef(true);
    }, LONG_PRESS_DURATION);
  }, [catDict, clearTimer]);

  const onPointerUp = useCallback(() => {
    if (pointerWasCancelled.current) return;
    clearTimer();
  }, [clearTimer]);

  const onPointerCancel = useCallback(() => {
    pointerWasCancelled.current = true;
  }, []);

  return (
    <>
      <div
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        className={`${className || ''} ${catDict ? 'touch-action-manipulation cursor-pointer' : ''}`}
      >
        {name}
      </div>
      {showDef && catDict && createPortal(
        <AnimatePresence>
        <m.div
          key="cat-def-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80" onClick={() => setShowDef(false)}>
          <m.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.39, 0.575, 0.565, 1.0] }}
            className="bg-black border-2 border-white rounded-large px-8 py-8 mx-6 shadow-[0_0_40px_rgba(0,255,255,0.5)] max-w-[90vw] w-full" style={{ maxWidth: '400px' }} onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <h2 className="text-[clamp(1.25rem,5vw,2rem)] font-black font-raleway uppercase definition-text text-center tracking-wider leading-tight mb-1 animate-focus-in-expand" style={{ animationDelay: '0.1s' }}>{name}</h2>
            <div className="w-12 h-0.5 bg-neon-aqua mx-auto my-4 shadow-[0_0_8px_#00FFFF]" />
            <p className="text-[clamp(0.8125rem,3.5vw,1.125rem)] leading-relaxed definition-text font-raleway text-center whitespace-normal break-words max-w-[65ch] mx-auto animate-focus-in-expand" style={{ animationDelay: '0.5s' }}>{catDict}</p>
            <div className="mt-6 mb-4 w-full h-px bg-zinc-800" />
            <button className="block mx-auto px-8 py-2 min-h-[48px] bg-white text-black font-black font-raleway text-[clamp(0.75rem,3vw,1rem)] uppercase rounded-medium hover:scale-105 active:scale-95 transition-all" onClick={() => setShowDef(false)} aria-label="Close definition overlay">TAP TO CLOSE</button>
          </m.div>
        </m.div>
        </AnimatePresence>, document.body)}
    </>
  );
};

export default React.memo(CategoryTabLabel);