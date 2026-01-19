
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
  // SVG Paths
  const HINT_ICON_PATH = "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z";
  
  // Updated Cog Icon Path (Material Design)
  const MENU_ICON_PATH = "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84a.484.484 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.488.488 0 0 0-.59.22L2.65 8.91a.49.49 0 0 0 .12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.27.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z";

  return (
    <header 
      className="flex items-center justify-between px-2 sm:px-4 shrink-0 z-[60] bg-black select-none w-full gap-2 text-right overflow-hidden"
      style={{ height: HEADER_HEIGHT, minHeight: HEADER_HEIGHT }}
    >
      {/* Left Side Content Area (Takes available space) */}
      <div className="flex-1 flex items-center justify-start gap-3 h-full">
        {leftContent}
      </div>

      {/* Right Side Content Area */}
      <div className="flex items-center gap-2 justify-end">
        
        {/* Children (usually extra stats or controls) - Always visible if present */}
        {children}

        {isReviewing && onNext ? (
          /* NEXT PUZZLE Button - Replaces Title, Counter, and Hint Button in Review Mode */
          <div className="pr-1">
            <button 
              onClick={onNext} 
              className="px-6 py-1.5 md:px-10 md:py-2 text-white font-black font-oswald text-sm md:text-base rounded-small border-4 border-white shadow-[0_0_20px_rgba(255,255,255,1)] hover:scale-105 active:scale-95 transition-all whitespace-nowrap bg-black"
              style={ARCADE_OUTLINE}
            >
              NEXT PUZZLE
            </button>
          </div>
        ) : (
          /* Standard Gameplay Header Content */
          <>
            {/* Title Block */}
            <div className="flex flex-col items-end justify-center mr-2">
              <div className="flex items-center gap-2 mb-0.5 justify-end">
                <span className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-widest font-oswald">LVL {levelIndex}</span>
                {rowsLeft !== undefined && (
                  <span className="text-[10px] md:text-xs text-neon-blue font-bold uppercase border-l border-zinc-800 pl-2 font-oswald">ROWS: {rowsLeft}</span>
                )}
              </div>
              <ArcadeStyledText 
                text={modeName} 
                sizeClass="text-2xl md:text-3xl" 
                // Updated gradient loop: Red -> Orange -> Yellow -> Green -> Cyan -> Blue -> Red
                gradient="linear-gradient(to right, #FF073A, #FF5F1F, #F9FF00, #39FF14, #00FFFF, #0066FF, #FF073A)"
              />
            </div>

            {/* Hint Icon Button */}
            {onToggleHints && (
              <button 
                onClick={onToggleHints}
                className="transform transition-transform active:scale-95 hover:scale-110"
                title="Toggle Hints"
              >
                <ArcadeIcon 
                  path={HINT_ICON_PATH} 
                  active={hintsEnabled} 
                  sizeClass="w-7 h-7 md:w-8 md:h-8"
                />
              </button>
            )}
          </>
        )}

        {/* Settings Icon Button */}
        <button 
          onClick={onOpenSettings} 
          className="transform transition-transform active:scale-95 hover:scale-110 ml-1"
          title="Settings"
        >
          <ArcadeIcon 
            path={MENU_ICON_PATH} 
            active={true}
            sizeClass="w-7 h-7 md:w-8 md:h-8"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
