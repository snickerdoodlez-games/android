import React from 'react';
import { DifficultyLevel } from '../services/storage';

interface MenuProps {
  onStart: () => void;
  onSettings: () => void;
  onStats: () => void;
  lastLevel?: number;
  selectedDifficulty: DifficultyLevel | undefined;
  unlockedDifficulties: DifficultyLevel[];
  onDifficultyChange: (diff: DifficultyLevel) => void;
}

const DIFFICULTY_LABELS: Record<DifficultyLevel, string> = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
};

const DIFFICULTY_COLORS: Record<DifficultyLevel, string> = {
  easy: 'border-white text-white',
  medium: 'border-white text-white',
  hard: 'border-white text-white',
};

export const LevelMenu: React.FC<MenuProps> = ({ 
  onStart, onSettings, onStats, lastLevel,
  selectedDifficulty, unlockedDifficulties, onDifficultyChange 
}) => {
  const levelToDisplay = lastLevel ? lastLevel : 1;
  const buttonText = levelToDisplay > 1 ? `CONTINUE LEVEL ${levelToDisplay}` : "START GAME";

  return (
    <div className="flex flex-col items-center h-full w-full max-w-2xl mx-auto px-4 relative bg-black font-oswald overflow-y-auto no-scrollbar">

      {/* Center Content: Title + Start Button */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">

        {/* Logo Image */}
        <div className="flex flex-col items-center justify-center mb-10 w-full animate-zoom-in">
            <img 
              src="/logo.svg" 
              alt="WORD PAIRING MACHINE" 
              className="w-full max-w-[320px] md:max-w-[450px] h-auto object-contain"
            />
        </div>

        {/* Difficulty Selection — only shown when 2+ difficulties unlocked (Medium at 20 stars) */}
        {unlockedDifficulties.length > 1 && (
          <div className="flex flex-col items-center gap-2 w-full max-w-xs mb-6 animate-fade-in z-30" style={{ animationDelay: '0.2s' }}>
            <span className="text-xs text-zinc-500 font-bold uppercase tracking-[0.3em] font-oswald">Difficulty</span>
            <div className="flex gap-2 w-full">
              {(['easy', 'medium', 'hard'] as DifficultyLevel[]).map((diff) => {
                const isUnlocked = unlockedDifficulties.includes(diff);
                const isSelected = selectedDifficulty === diff;
                if (!isUnlocked) return null;
                return (
                  <button
                    key={diff}
                    onClick={() => onDifficultyChange(diff)}
                    className={`
                      flex-1 py-2.5 min-h-[48px] rounded-medium border-2 transition-all font-oswald
                      flex items-center justify-center gap-1 text-xs uppercase font-bold tracking-wider
                      ${isSelected
                        ? `${DIFFICULTY_COLORS[diff]} bg-zinc-900`
                        : 'bg-black border-zinc-700 text-zinc-500 hover:border-white hover:text-white'
                      }
                    `}
                    aria-label={`Select ${DIFFICULTY_LABELS[diff]} difficulty`}
                  >
                    <span>{DIFFICULTY_LABELS[diff]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-4 w-full max-w-xs animate-fade-in items-center z-30" style={{ animationDelay: '0.4s' }}>

          {/* Button Container with Hover Scale */}
          <div className="relative w-full group hover:scale-105 transition-transform duration-300 active:scale-95 cursor-pointer" onClick={onStart}>
            
            {/* The Button with Standard White Text */}
            <button
              className="
                relative w-full min-w-[48px] min-h-[48px] bg-black rounded-large px-8 py-5
                flex items-center justify-center
                border-2 border-white
                shadow-none
                active:translate-y-[2px]
                transition-all duration-75 z-10
              "
              aria-label={buttonText}
            >
              <span className="text-2xl md:text-3xl font-black font-oswald text-white tracking-widest uppercase">
                {buttonText}
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="w-full flex flex-wrap justify-center gap-6 pb-12 mt-auto animate-fade-in px-4 relative z-30" style={{ animationDelay: '0.5s' }}>
        <button
          onClick={onStats}
          className="
            group relative px-6 py-3.5 min-w-[48px] min-h-[48px] rounded-medium flex-1 max-w-[180px]
            bg-transparent text-neon-aqua hover:text-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
          "
          aria-label="View player statistics"
        >
          STATS
        </button>
        <button
          onClick={onSettings}
          className="
            group relative px-6 py-3.5 min-w-[48px] min-h-[48px] rounded-medium flex-1 max-w-[180px]
            bg-transparent text-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
          "
          aria-label="Open settings"
        >
          SETTINGS
        </button>
      </div>
    </div>
  );
};

export default LevelMenu;