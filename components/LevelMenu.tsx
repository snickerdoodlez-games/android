
import React from 'react';

interface MenuProps {
  onStart: (difficulty?: 'easy' | 'medium' | 'hard') => void;
  onSettings: () => void;
  onStats: () => void;
  lastLevel?: number;
  totalStars: number;
  onDebug?: () => void;
  starsMedium: number;
  starsHard: number;
}

export const LevelMenu: React.FC<MenuProps> = ({ 
  onStart, 
  onSettings, 
  onStats, 
  lastLevel, 
  totalStars,
  starsMedium,
  starsHard 
}) => {
  const levelToDisplay = lastLevel ? lastLevel : 1;
  const buttonText = levelToDisplay > 1 ? `CONTINUE LEVEL ${levelToDisplay}` : "START GAME";

  // Threshold Logic using dynamic props
  const showDifficultyMenu = totalStars >= starsMedium;
  const showHardMode = totalStars >= starsHard;

  return (
    <div className="flex flex-col items-center h-full w-full max-w-2xl mx-auto px-4 relative bg-black font-oswald">

      {/* Center Content: Title + Start Button + Difficulty Menu */}
      {/* Reduced padding bottom (pb-1) to bring it flush with footer buttons */}
      <div className="flex-1 flex flex-col items-center justify-end w-full pb-1 transition-all duration-500 ease-in-out">

        {/* Logo */}
        {/* Reduced mb to 1 to minimize gap to button */}
        <div className="flex flex-col items-center justify-center mb-1 w-full animate-zoom-in">
          <img 
            src="/logo.svg" 
            alt="WORD PAIRING MACHINE" 
            className="w-full max-w-[320px] md:max-w-[450px] h-auto object-contain mx-auto"
          />
        </div>

        {/* Start Button Container */}
        <div className="flex flex-col gap-3 w-full max-w-xs animate-fade-in items-center z-30 transition-all duration-500">
          
          <div className="relative w-full group hover:scale-105 transition-transform duration-300 active:scale-95 cursor-pointer" onClick={() => onStart()}>
            <button
              className="
                relative w-full bg-white rounded-large px-8 py-5
                flex items-center justify-center
                border-2 border-black
                shadow-none
                active:translate-y-[2px]
                transition-all duration-75 z-10
              "
            >
              <span className="text-2xl md:text-3xl font-black font-oswald text-black tracking-widest uppercase italic text-center">
                {buttonText}
              </span>
            </button>
          </div>

          {/* --- DIFFICULTY MENU --- */}
          {showDifficultyMenu && (
            <div className="flex flex-col items-center w-full mt-1 animate-in fade-in slide-in-from-top-4 duration-500">
              <p className="text-[#00FFFF] text-[10px] tracking-[0.4em] font-bold uppercase mb-2 opacity-70">
                Difficulty Selection
              </p>
              
              <div className="flex flex-col gap-2 w-full">
                {/* CASUAL */}
                <button 
                  onClick={() => onStart('easy')}
                  className="w-full rounded-full border-2 border-[#FFFFFF] py-2 text-[#ffffff] font-black uppercase text-sm tracking-widest shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:bg-white/10 transition-colors active:scale-95"
                >
                  Casual
                </button>

                {/* FLUENT */}
                <button 
                  onClick={() => onStart('medium')}
                  className="w-full rounded-full border-2 border-[#FFFFFF] py-2 text-[#ffffff] font-black uppercase text-sm tracking-widest shadow-[0_0_10px_rgba(0,255,255,0.4)] hover:bg-white/10 transition-colors active:scale-95"
                >
                  Fluent
                </button>

                {/* ELOQUENT */}
                {showHardMode && (
                  <button 
                    onClick={() => onStart('hard')}
                    className="w-full rounded-full border-2 border-[#FFFFFF] py-2 text-[#ffffff] font-black uppercase text-sm tracking-widest shadow-[0_0_10px_rgba(255,0,255,0.4)] hover:bg-white/10 transition-colors active:scale-95"
                  >
                    Eloquent
                  </button>
                )}
              </div>
            </div>
          )}
          
          {/* Lock Hint: Only shows when menu is hidden */}
          {!showDifficultyMenu && (
            <p className="mt-6 text-white text-[10px] tracking-[0.2em] uppercase font-bold">
              Reach {starsMedium} Stars to Unlock Modes
            </p>
          )}

        </div>
      </div>

      {/* Bottom Buttons */}
      {/* Reduced pb-8 to bring buttons up slightly, removed mt-auto to let flex-1 push them down naturally but keep them grouped */}
      <div className="w-full flex flex-wrap justify-center gap-4 pb-8 pt-2 animate-fade-in px-4 relative z-30 shrink-0" style={{ animationDelay: '0.5s' }}>
        <button
          onClick={onStats}
          className="group relative px-6 py-3 rounded-medium flex-1 min-w-[120px] max-w-[180px] bg-transparent text-white hover:scale-105 transition-all duration-300 text-sm font-bold tracking-widest uppercase font-oswald"
        >
          STATS
        </button>
        <button
          onClick={onSettings}
          className="group relative px-6 py-3 rounded-medium flex-1 min-w-[120px] max-w-[180px] bg-transparent text-white hover:scale-105 transition-all duration-300 text-sm font-bold tracking-widest uppercase font-oswald"
        >
          SETTINGS
        </button>
      </div>
    </div>
  );
};

export default LevelMenu;
