import React from 'react';

interface HowToPlayProps {
  onStart: () => void;
}

const HowToPlay: React.FC<HowToPlayProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center h-full w-full max-w-2xl mx-auto px-6 relative bg-black font-oswald">
      
      {/* Centered Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        
        {/* Title */}
        <div className="mb-16 animate-zoom-in">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider text-white text-center">
            How to <span className="text-[#00FFFF] drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">Play</span>
          </h1>
        </div>

        {/* Instruction Cards */}
        <div className="flex flex-col gap-6 w-full max-w-md animate-fade-in" style={{ animationDelay: '0.3s' }}>
          
          {/* Instruction 1 */}
          <div className="flex items-center gap-5 bg-zinc-900 border border-zinc-700 rounded-xl px-6 py-5">
            <span className="text-3xl shrink-0">🔤</span>
            <p className="text-lg md:text-xl text-white font-medium leading-tight max-w-[65ch]">
              Match <span className="text-[#00FFFF] font-bold">4 tiles</span> in a row to reveal their category
            </p>
          </div>

          {/* Instruction 2 */}
          <div className="flex items-center gap-5 bg-zinc-900 border border-zinc-700 rounded-xl px-6 py-5">
            <span className="text-3xl shrink-0">🔄</span>
            <p className="text-lg md:text-xl text-white font-medium leading-tight max-w-[65ch]">
              Swap tiles position by <span className="text-[#FF00FF] font-bold">clicking</span> on two tiles
            </p>
          </div>

          {/* Instruction 3 */}
          <div className="flex items-center gap-5 bg-zinc-900 border border-zinc-700 rounded-xl px-6 py-5">
            <span className="text-3xl shrink-0">👆</span>
            <p className="text-lg md:text-xl text-white font-medium leading-tight max-w-[65ch]">
              <span className="text-[#FF5F1F] font-bold">Long press</span> a tile to reveal a definition
            </p>
          </div>

        </div>

        {/* Start Button */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="relative group hover:scale-105 transition-transform duration-300 active:scale-95 cursor-pointer" onClick={onStart}>
            <button
              className="
                relative w-full min-w-[48px] min-h-[48px] bg-black rounded-xl px-10 py-5
                flex items-center justify-center
                border-2 border-white
                shadow-[0_0_20px_rgba(0,255,255,0.4),inset_0_0_15px_rgba(0,255,255,0.1)]
                active:translate-y-[2px]
                transition-all duration-75 z-10
              "
              aria-label="Start playing the game"
            >
              <span className="text-2xl md:text-3xl font-black font-oswald text-white tracking-widest uppercase">
                START PLAYING
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HowToPlay;
