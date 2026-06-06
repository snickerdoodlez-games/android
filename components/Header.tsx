import React, { useState, useEffect } from 'react';
import { HEADER_MIN_HEIGHT } from '../types';
import { ARCADE_OUTLINE } from '../services/tileStyles';
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
  stars
}) => {
  const MENU_ICON_PATH = "M3 6h18M3 12h18M3 18h18";

  const MODE_NAME_COLORS: Record<string, string> = {
    'CLASSIC': '#00FFFF',
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

  return (
    <header 
      className="relative flex flex-col justify-between px-2 sm:px-4 shrink-0 z-[10] bg-black select-none w-full overflow-hidden border-b border-zinc-900 transition-all duration-300 ease-in-out"
      style={{ minHeight: HEADER_MIN_HEIGHT }}
    >
      <div className="flex items-center justify-end w-full py-[5px] md:py-[5px]"> 
        {leftContent}
        <div className="flex items-center gap-1 flex-grow justify-end">
          <span className="text-xs md:text-sm text-zinc-500 font-black uppercase tracking-tight font-oswald whitespace-nowrap">LVL {levelIndex}</span>
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

        <div className="flex items-center ml-auto">
          {/* Hint button UI suppressed per requirement */}
          <button onClick={onOpenSettings} className="transform transition-transform active:scale-90 p-0.5">
            <ArcadeIcon path={MENU_ICON_PATH} active={true} sizeClass="w-8 h-8" color="#FFFFFF" />
          </button>
        </div>
      </div>

      {isReviewing && onNext && (
        <div className="flex flex-col items-center justify-center py-4 md:py-6 w-full gap-4">
          <button 
            onClick={onNext} 
            className="px-10 py-5 text-white font-black font-oswald text-3xl md:text-4xl uppercase rounded-medium border-4 border-white shadow-[0_0_25px_rgba(255,255,255,0.6)] active:scale-95 animate-border-pulse transition-colors duration-[1500ms] ease-linear"
            style={{
              ...ARCADE_OUTLINE,
              backgroundColor: NEON_CYCLE_COLORS[cycleIndex]
            }}
          >
            NEXT LEVEL
          </button>

          {/* Star Display Integration */}
          <div className="flex gap-3 animate-pop">
            {[1, 2, 3].map((s) => (
              <span 
                key={s} 
                className={`text-5xl md:text-6xl transition-all duration-700 ${
                  s <= (stars || 0) 
                    ? 'text-neon-yellow scale-110 drop-shadow-[0_0_15px_rgba(249,255,0,0.9)]' 
                    : 'text-zinc-800 opacity-20 scale-90'
                }`}
                style={{ 
                  textShadow: s <= (stars || 0) 
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
            ))}
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