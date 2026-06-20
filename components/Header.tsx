import React, { useState, useEffect } from 'react';
import { HEADER_MIN_HEIGHT } from '../types';
import { ARCADE_OUTLINE } from '../services/tileStyles';
import { audio } from '../services/audioService';
import ArcadeStyledText from './ArcadeStyledText';
import ArcadeIcon from './ArcadeIcon';

interface HeaderProps {
  modeName: string;
  levelIndex: number;
  onOpenSettings: () => void;
  isReviewing?: boolean;
  onNext?: () => void;
  showHintButton?: boolean; 
  onTurnOffHints?: () => void;
  onManualHint?: () => void;
  onToggleHints?: () => void;
  hintsEnabled?: boolean;
  children?: React.ReactNode; 
  leftContent?: React.ReactNode;
  rowsLeft?: number;
  stars?: number;
  hintCount?: number;
  onHintClick?: () => void;
  hintsDisabledForLevel?: boolean;
}

const NEON_CYCLE_COLORS = [
  '#FF073A', // red
  '#FF5F1F', // orange
  '#F9FF00', // yellow
  '#39FF14', // lime
  '#00F000', // green
  '#00FF9F', // mint
  '#00FFFF', // cyan
  '#00BFFF', // sky-blue
  '#0066FF', // blue
  '#B026FF', // violet
  '#D400FF', // purple
  '#FF00FF', // magenta
  '#FF1FBF', // pink
  '#FF0055'  // rose
];

const Header: React.FC<HeaderProps> = ({ 
  modeName, 
  levelIndex, 
  onOpenSettings, 
  isReviewing, 
  onNext, 
  hintsEnabled,
  onToggleHints,
  children,
  leftContent,
  rowsLeft,
  stars,
  hintCount,
  onHintClick,
  hintsDisabledForLevel,
}) => {
  const LIGHTBULB_PATH = "M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zM9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1z";
  const MENU_ICON_PATH = "M3 6h18M3 12h18M3 18h18";

  // Next Level button click burst animation
  const [nextButtonBurst, setNextButtonBurst] = useState(false);
  // Light bulb hint flash animation
  const [hintFlash, setHintFlash] = useState(false);

  // Listen for hint-used event to trigger light bulb flash animation
  useEffect(() => {
    const handleHintUsed = () => setHintFlash(true);
    window.addEventListener('hint-used', handleHintUsed);
    return () => window.removeEventListener('hint-used', handleHintUsed);
  }, []);

  // Reset hint flash after animation completes
  useEffect(() => {
    if (hintFlash) {
      const timer = setTimeout(() => setHintFlash(false), 600);
      return () => clearTimeout(timer);
    }
  }, [hintFlash]);

  const MODE_NAME_COLORS: Record<string, string> = {
    'WORD PAIRING': '#00FFFF',
    'SYNONYMS': '#39FF14',
    'THEMED': '#FF00FF',
    'EMOJI': '#F9FF00',
    'MIND MATCH': '#FF5F1F',
    'EXPANSION': '#FF073A',
    'FILTER': '#0066FF',
    'CASCADE': '#B026FF',
    'GROUP': '#FF1FBF',
    'HIDDEN': '#D400FF',
  };
  const currentColor = MODE_NAME_COLORS[modeName] || '#00FFFF';

  // Logic for cycling the button color
  const [cycleIndex, setCycleIndex] = useState(0);

  // Star cascade animation: reveal stars one at a time with sound
  const [visibleStars, setVisibleStars] = useState(0);
  useEffect(() => {
    if (isReviewing && (stars || 0) > 0) {
      setVisibleStars(0);
      const timers: ReturnType<typeof setTimeout>[] = [];
      for (let s = 1; s <= (stars || 0); s++) {
        timers.push(setTimeout(() => {
          setVisibleStars(s);
          // Delay sound by the CSS starPop animation-delay for each star:
          //   Star 1: 0.2s → 200ms  |  Star 2: 0.4s → 400ms  |  Star 3: 0.6s → 600ms
          timers.push(setTimeout(() => {
            audio.playStar();
          }, s * 200));
        }, s * 400));
      }
      return () => timers.forEach(clearTimeout);
    } else {
      setVisibleStars(0);
    }
  }, [isReviewing, stars]);

  useEffect(() => {
    if (isReviewing) {
      // Pick random start when the level completion UI triggers
      setCycleIndex(Math.floor(Math.random() * NEON_CYCLE_COLORS.length));
      
      const interval = setInterval(() => {
        setCycleIndex((prev) => (prev + 1) % NEON_CYCLE_COLORS.length);
      }, 1500);
      
      return () => clearInterval(interval);
    }
  }, [isReviewing]);

  // Handle Next Level button click with burst animation
  const handleNextClick = () => {
    setNextButtonBurst(true);
    setTimeout(() => setNextButtonBurst(false), 500);
    if (onNext) onNext();
  };

  return (
    <header 
      className="relative flex flex-col justify-between px-2 sm:px-4 shrink-0 z-[10] bg-black select-none w-full overflow-hidden border-b border-zinc-900 transition-all duration-300 ease-in-out"
      style={{ minHeight: HEADER_MIN_HEIGHT }}
    >
      <div className="flex items-center justify-end w-full py-[5px] md:py-[5px]"> 
        {leftContent}
        <div className="flex items-center gap-1 flex-grow justify-end">
          <span className="text-xs md:text-sm text-white font-black uppercase tracking-tight font-oswald whitespace-nowrap">LVL {levelIndex}</span>
          {rowsLeft !== undefined && (
            <span className="text-xs md:text-sm text-neon-blue font-black uppercase border-l border-zinc-800 pl-1 font-oswald whitespace-nowrap">ROWS: {rowsLeft}</span>
          )}
          <ArcadeStyledText 
            text={modeName} 
            sizeClass="text-2xl md:text-3xl" 
            gradient="#FFFFFF"
            className="whitespace-nowrap ml-1"
          />
        </div>

        <div className="flex items-center ml-auto gap-1">
           {/* Hint Lightbulb Button — always visible */}
          {onHintClick && hintCount !== undefined && (
            <button 
              onClick={onHintClick} 
              className="relative transform transition-transform active:scale-90 p-0.5 min-w-[48px] min-h-[48px] flex items-center justify-center floating-ui-btn"
              aria-label={!hintsEnabled ? 'Hints are turned off. Tap to watch an ad for 2 hints.' : hintsDisabledForLevel ? 'Maximum 2 hints used this level. Tap to watch an ad for 2 hints.' : hintCount <= 0 ? 'Out of hints. Tap to watch an ad for 2 hints.' : `Hints available: ${hintCount}. Tap to use a hint.`}
            >
              {/* Pulsing glow behind bulb when hints are depleted, fade in and fade out */}
              {!hintsDisabledForLevel && hintCount <= 0 && hintsEnabled && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div 
                    className="rounded-full animate-hint-glow-pulse"
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'radial-gradient(circle, rgba(249,255,0,0.7) 0%, rgba(249,255,0,0.25) 40%, transparent 70%)',
                      filter: 'blur(6px)',
                    }}
                  />
                </div>
              )}
              {/* Hint flash burst effect */}
              {hintFlash && hintCount > 0 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div 
                    className="rounded-full animate-ping-once"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'radial-gradient(circle, rgba(249,255,0,0.9) 0%, rgba(249,255,0,0.4) 30%, transparent 70%)',
                    }}
                  />
                </div>
              )}
              <ArcadeIcon 
                path={LIGHTBULB_PATH} 
                active={!hintsDisabledForLevel && hintCount > 0} 
                sizeClass={`w-8 h-8 ${hintFlash ? 'scale-125 transition-transform duration-300' : 'transition-transform duration-300'}`} 
                color={hintsDisabledForLevel ? "#555555" : (hintCount > 0 ? "#F9FF00" : "#444444")}
                className={hintsDisabledForLevel ? "drop-shadow-[0_0_6px_rgba(85,85,85,0.6)]" : (hintCount <= 0 ? "drop-shadow-[0_0_15px_rgba(249,255,0,0.5)]" : hintFlash ? "drop-shadow-[0_0_20px_rgba(249,255,0,0.9)]" : "")}
              />
              {/* Hint count badge — never greyed out */}
              <span 
                className="absolute -top-0.5 -right-0.5 min-w-[20px] h-[20px] flex items-center justify-center rounded-full text-[11px] font-black font-oswald leading-none"
                style={{
                  backgroundColor: '#F9FF00',
                  color: '#000000',
                  border: '1.5px solid white',
                  boxShadow: '0 0 8px rgba(249, 255, 0, 0.7)',
                  padding: '0 4px',
                }}
              >
                {hintCount}
              </span>
            </button>
          )}

          <button 
            onClick={onOpenSettings} 
            className="transform transition-transform active:scale-90 p-0.5 min-w-[48px] min-h-[48px] flex items-center justify-center floating-ui-btn"
            aria-label="Open settings menu"
          >
            <ArcadeIcon path={MENU_ICON_PATH} active={true} sizeClass="w-8 h-8" color="#FFFFFF" />
          </button>
        </div>
      </div>

      {isReviewing && onNext && (
        <div className="relative flex flex-col items-center justify-center py-4 md:py-6 w-full">
          <button 
            onClick={handleNextClick} 
            className={`px-10 py-5 min-w-[48px] min-h-[48px] text-white font-black font-oswald text-3xl md:text-4xl uppercase rounded-medium border-4 border-white shadow-[0_0_25px_rgba(255,255,255,0.6)] active:scale-95 animate-border-pulse transition-colors duration-[1500ms] ease-linear relative z-[1] ${nextButtonBurst ? 'scale-110 shadow-[0_0_45px_rgba(255,255,255,0.9)]' : ''}`}
            style={{
              ...ARCADE_OUTLINE,
              backgroundColor: NEON_CYCLE_COLORS[cycleIndex],
              transition: nextButtonBurst ? 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease-out, background-color 1500ms ease-linear' : 'background-color 1500ms ease-linear',
            }}
          >
            NEXT LEVEL
          </button>

          {/* Star Display — cascading pop animation with sound, stars appear one at a time. Overlaps button slightly via negative margin and higher z-index. */}
          <div className="flex gap-3 -mt-2 relative z-[2]">
            {[1, 2, 3].map((s) => {
              const earned = s <= visibleStars;
              const totalEarned = s <= (stars || 0);
              const isVisible = isReviewing ? earned : totalEarned;
              return (
                <span 
                  key={s} 
                  className={`text-5xl md:text-6xl transition-all duration-300 ${
                    isVisible
                      ? `star text-neon-yellow scale-110 drop-shadow-[0_0_15px_rgba(249,255,0,0.9)]` 
                      : 'text-zinc-800 opacity-20 scale-90'
                  }`}
                  style={{ 
                    textShadow: isVisible
                      ? `
                          -1.5px -1.5px 0 #FFF, 1.5px -1.5px 0 #FFF, -1.5px 1.5px 0 #FFF, 1.5px 1.5px 0 #FFF,
                          -3.5px -3.5px 0 #000, 3.5px -3.5px 0 #000, -3.5px 3.5px 0 #000, 3.5px 3.5px 0 #000,
                          0 0 10px #F9FF00, 0 0 20px #F9FF00
                        `
                      : 'none'
                  }}
                >
                  ★
                </span>
              );
            })}
          </div>
        </div>
      )}

      <div 
        className="absolute bottom-0 left-0 w-full h-[2px] bg-[linear-gradient(to_right,#FF073A,#FF5F1F,#F9FF00,#00F000,#00FFFF,#0066FF,#B026FF,#FF1FBF,#FF073A)]"
        style={{ 
          backgroundSize: '200% 100%',
          animation: 'rainbow-flow 3s linear infinite'
        }}
      />
    </header>
  );
};

export default React.memo(Header);