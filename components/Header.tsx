
import React, { useState, useEffect } from 'react';
import { HEADER_MIN_HEIGHT } from '../types';
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
  onManualHintManualHint?: () => void;
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
  const MENU_ICON_PATH = "M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.07-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.03 7.03 0 0 0-1.63-.94l-.36-2.54a.5.5 0 0 0-.49-.42h-3.84a.5.5 0 0 0-.49.42l-.36 2.54c-.59.24-1.13.55-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.61 8.84a.5.5 0 0 0 .12.64l2.03 1.58c-.05.31-.08.65-.08.94s.03.63.08.94l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32c.12.22.39.31.6.22l2.39-.96c.5.38 1.04.7 1.63.94l.36 2.54c.05.24.25.42.49.42h3.84c.24 0 .44-.18.49-.42l.36-2.54c.59-.24 1.13-.56 1.63-.94l2.39.96c.22.09.48 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.02-1.58zM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5z";

  // Select a neon color for the background based on the level index
  const levelNeonColor = NEON_CYCLE_COLORS[levelIndex % NEON_CYCLE_COLORS.length];

  // Logic for cycling the button color
  const [cycleIndex, setCycleIndex] = useState(0);

  useEffect(() => {
    if (isReviewing) {
      setCycleIndex(Math.floor(Math.random() * NEON_CYCLE_COLORS.length));
      const interval = setInterval(() => {
        setCycleIndex((prev) => (prev + 1) % NEON_CYCLE_COLORS.length);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isReviewing]);

  const starStyle = {
    color: '#F9FF00',
    textShadow: 'none',
    filter: 'none'
  };

  return (
    <header
      className="relative flex flex-col justify-between px-2 sm:px-4 shrink-0 z-[5000] bg-black select-none w-full overflow-hidden border-b border-zinc-900 transition-all duration-300 ease-in-out"
      style={{ minHeight: isReviewing ? 'auto' : HEADER_MIN_HEIGHT }}
    >
      <div className={`flex items-center justify-end w-full ${isReviewing ? 'pt-1 pb-0' : 'pt-[5px] pb-1'}`}>
        {leftContent}

        <div className="flex items-baseline justify-end flex-grow gap-2 sm:gap-4 overflow-hidden">
          <div className="flex flex-col items-end justify-center shrink-0">
            <span className="text-lg md:text-2xl text-[#F9FF00] font-black uppercase tracking-tight font-oswald whitespace-nowrap leading-none">LVL {levelIndex}</span>
            {rowsLeft !== undefined && (
              <span className="text-[10px] md:text-xs text-neon-blue font-black uppercase font-oswald whitespace-nowrap leading-none mt-0.5">ROWS: {rowsLeft}</span>
            )}
          </div>

          <span
            className="text-[clamp(1.2rem,5vw,2.25rem)] font-black uppercase font-oswald leading-none tracking-tight select-none px-[2px] whitespace-nowrap overflow-visible flex-shrink transition-all duration-300"
            style={{
              color: '#FFFFFF',
              textShadow: 'none',
              filter: 'none'
            }}
          >
            {modeName}
          </span>

          <div className="flex items-baseline gap-0.5 shrink-0">
            <span
              className="text-xl md:text-3xl font-black italic leading-none transition-colors duration-300"
              style={starStyle}
            >
              {stars || 0}
            </span>
            <span
              className="text-3xl md:text-5xl leading-none transition-colors duration-300"
              style={starStyle}
            >
              ★
            </span>
          </div>
        </div>

        <div className="flex items-center self-center mt-2 ml-2 sm:ml-3 shrink-0">
          <button onClick={onOpenSettings} className="transform transition-transform active:scale-90 p-1 flex items-center justify-center">
            <ArcadeIcon
              path={MENU_ICON_PATH}
              active={true}
              sizeClass="w-9 h-9"
              color="#FFFFFF"
              noOutline={true}
              style={{ filter: 'none' }}
            />
          </button>
        </div>
      </div>

      {isReviewing && onNext && (
        <div className="flex flex-col items-center justify-center pt-3 pb-1 w-full gap-0.5">
          <button
            onClick={onNext}
            className="px-8 py-2.5 rounded-medium border-4 border-white shadow-[inset:5px_5px_0px_rgba(0,0,0,1)] active:scale-95 animate-border-pulse transition-colors duration-[1500ms] ease-linear flex items-center justify-center mb-0.5"
            style={{
              backgroundColor: NEON_CYCLE_COLORS[cycleIndex]
            }}
          >
            <ArcadeStyledText
              text="NEXT LEVEL"
              sizeClass="text-xl md:text-2xl"
              gradient="#FFFFFF"
              className="pointer-events-none"
            />
          </button>

          <div className="flex gap-1 animate-pop">
            {[1, 2, 3].map((s) => (
              <span
                key={s}
                className="text-2xl md:text-3xl scale-110 transition-all duration-700"
                style={{ textShadow: 'none', color: '#F9FF00' }}
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
