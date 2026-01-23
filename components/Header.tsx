
import React from 'react';
import { HEADER_HEIGHT } from '../types';
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
}

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
  rowsLeft
}) => {
  const HINT_ICON_PATH = "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z";
  const MENU_ICON_PATH = "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84a.484.484 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.488.488 0 0 0-.59.22L2.65 8.91a.49.49 0 0 0 .12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.27.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z";

  const titleColors = [
    '#FF073A', '#00FFFF', '#39FF14', '#F9FF00', '#D400FF', '#FF1FBF', '#0066FF', '#FF5F1F'
  ];
  const currentColor = titleColors[levelIndex % titleColors.length];

  return (
    <header 
      className="relative flex items-center justify-end px-2 sm:px-4 shrink-0 z-[10] bg-black select-none w-full overflow-hidden border-b border-zinc-900"
      style={{ height: HEADER_HEIGHT, minHeight: HEADER_HEIGHT }}
    >
      {isReviewing && onNext ? (
        <button 
          onClick={onNext} 
          className="px-6 py-0 text-white font-black font-oswald text-lg md:text-xl uppercase rounded-medium border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.8)] bg-black active:scale-95 animate-border-pulse transition-all"
          style={ARCADE_OUTLINE}
        >
          NEXT LEVEL
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-[9px] text-zinc-500 font-black uppercase tracking-tight font-oswald whitespace-nowrap">LVL {levelIndex}</span>
            {rowsLeft !== undefined && (
              <span className="text-[9px] text-neon-blue font-black uppercase border-l border-zinc-800 pl-1 font-oswald whitespace-nowrap">ROWS: {rowsLeft}</span>
            )}
            <ArcadeStyledText 
              text={modeName} 
              sizeClass="text-xl md:text-2xl" 
              gradient={currentColor}
              className="whitespace-nowrap ml-1"
            />
          </div>

          <div className="flex items-center">
            {onToggleHints && (
              <button onClick={onToggleHints} className="transform transition-transform active:scale-90 p-0.5">
                <ArcadeIcon path={HINT_ICON_PATH} active={hintsEnabled} sizeClass="w-7 h-7" />
              </button>
            )}
            <button onClick={onOpenSettings} className="transform transition-transform active:scale-90 p-0.5">
              <ArcadeIcon path={MENU_ICON_PATH} active={true} sizeClass="w-7 h-7" color="#FFFFFF" />
            </button>
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
