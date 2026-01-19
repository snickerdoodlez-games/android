
import React from 'react';
import { SOLVED_COLORS } from '../types';
import { ARCADE_OUTLINE } from '../services/tileStyles';

interface SuccessProps {
  onNextLevel: () => void;
  stats?: {
    mistakes?: number;
    mode?: string;
  };
}

const LevelSuccessScreen: React.FC<SuccessProps> = ({ onNextLevel, stats }) => {
  // Generate random confetti particles
  const particles = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100 + '%',
    animationDelay: Math.random() * 2 + 's',
    animationDuration: (Math.random() * 2 + 2) + 's',
    color: SOLVED_COLORS[Math.floor(Math.random() * SOLVED_COLORS.length)]
  }));

  return (
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center p-4 overflow-hidden bg-black">
      {/* Confetti Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute w-3 h-3 rounded-sm ${p.color} animate-fall shadow-[0_0_8px_currentColor]`}
          style={{
            left: p.left,
            top: '-5%',
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration
          }}
        />
      ))}
      
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-4 text-center font-oswald uppercase tracking-tighter animate-zoom-in drop-shadow-[0_0_35px_rgba(0,229,255,0.6)] italic">
          Level<br/><span className="text-neon-pink">Complete!</span>
        </h1>
        
        <div className="w-32 h-2 bg-neon-blue mb-10 animate-fade-in rounded-full shadow-[0_0_15px_#00E5FF]" style={{ animationDelay: '0.5s' }}></div>

        {stats && (
          <div className="flex flex-col gap-3 items-center mb-12 animate-slide-up" style={{ animationDelay: '0.7s' }}>
             {stats.mode && <div className="text-neon-aqua font-oswald text-2xl tracking-[0.2em] uppercase font-black">{stats.mode}</div>}
             {stats.mistakes !== undefined && (
               <div className={`text-3xl font-black font-oswald uppercase tracking-wide ${stats.mistakes === 0 ? 'text-neon-green' : 'text-zinc-200'}`}>
                 {stats.mistakes === 0 ? 'PERFECT RUN!' : `${stats.mistakes} MISTAKES`}
               </div>
             )}
          </div>
        )}

        <button
          onClick={onNextLevel}
          className="
            group relative px-16 py-6 rounded-small 
            bg-black text-white hover:scale-110 active:scale-95
            transition-all duration-300
            text-3xl font-bold tracking-widest uppercase font-oswald
            border-4 border-white
            shadow-[0_0_20px_rgba(255,255,255,1)]
            hover:shadow-[0_0_50px_rgba(255,255,255,1)]
            animate-pulse-fast
          "
          style={ARCADE_OUTLINE}
        >
          Next Level
          <span className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-4xl text-neon-blue">
            ➜
          </span>
        </button>
      </div>
    </div>
  );
};

export default LevelSuccessScreen;
