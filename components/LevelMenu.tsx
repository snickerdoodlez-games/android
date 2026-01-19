
import React from 'react';
import ArcadeStyledText from './ArcadeStyledText';

interface MenuProps {
  onStart: () => void;
  onSettings: () => void;
  onStats: () => void;
  lastLevel?: number;
  onDebug?: () => void;
}

export const LevelMenu: React.FC<MenuProps> = ({ onStart, onSettings, onStats, lastLevel }) => {
  const levelToDisplay = lastLevel ? lastLevel : 1;
  const buttonText = levelToDisplay > 1 ? `CONTINUE LEVEL ${levelToDisplay}` : "START GAME";

  return (
    <div className="flex flex-col items-center h-full w-full max-w-2xl mx-auto px-4 relative bg-black font-oswald">

      {/* Center Content: Title + Start Button */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">

        {/* Logo Image Restored - Removed drop-shadow */}
        <div className="flex flex-col items-center justify-center mb-16 w-full animate-zoom-in">
            <img 
              src="/logo.svg" 
              alt="WORD PAIRING MACHINE" 
              className="w-full max-w-[320px] md:max-w-[450px] h-auto object-contain"
            />
        </div>

        <div className="flex flex-col gap-4 w-full max-w-xs animate-fade-in items-center z-30" style={{ animationDelay: '0.4s' }}>

          {/* Button Container with Hover Scale */}
          <div className="relative w-full group hover:scale-105 transition-transform duration-300 active:scale-95 cursor-pointer" onClick={onStart}>
            
            {/* The Button with Standard White Text - Explicitly removed shadow and gradient text */}
            <button
              className="
                relative w-full bg-black rounded-large px-8 py-5
                flex items-center justify-center
                border-2 border-white
                shadow-none
                active:translate-y-[2px]
                transition-all duration-75 z-10
              "
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
            group relative px-6 py-3 rounded-medium flex-1 min-w-[120px] max-w-[180px]
            bg-transparent text-neon-aqua hover:text-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
          "
        >
          STATS
        </button>
        <button
          onClick={onSettings}
          className="
            group relative px-6 py-3 rounded-medium flex-1 min-w-[120px] max-w-[180px]
            bg-transparent text-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
          "
        >
          SETTINGS
        </button>
      </div>
    </div>
  );
};

export default LevelMenu;
