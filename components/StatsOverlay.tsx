
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { getStats } from '../services/storage';
import { getConsolidatedData } from '../services/csvData';
import { getSynonymData } from '../services/synonymData';
import { getEmojiData } from '../services/emojiData';

// Fix: Cast motion.div to any to bypass environment-specific prop type errors
const MotionDiv = motion.div as any;

interface StatsOverlayProps {
  onClose: () => void;
}

const StatsOverlay: React.FC<StatsOverlayProps> = ({ onClose }) => {
  const stats = getStats();
  const timeSec = stats.totalTimeMs / 1000;
  const timeStr = timeSec > 3600 
    ? `${Math.floor(timeSec / 3600)}h ${Math.floor((timeSec % 3600) / 60)}m` 
    : timeSec > 60 
    ? `${Math.floor(timeSec / 60)}m ${Math.floor(timeSec % 60)}s`
    : `${Math.floor(timeSec)}s`;

  // Calculate dynamic total categories from all data pools
  // Consolidated + Synonym + Emoji = Total Unique Categories available in game.
  const totalCategories = useMemo(() => {
      return getConsolidatedData().length + getSynonymData().length + getEmojiData().length;
  }, []);

  // Calculate total unique words across all datasets
  const totalWords = useMemo(() => {
      const allWords = new Set<string>();
      [...getConsolidatedData(), ...getSynonymData(), ...getEmojiData()].forEach(cat => {
         cat.words.forEach(w => allWords.add(w.trim().toUpperCase()));
      });
      return allWords.size;
  }, []);

  return (
    <div className="absolute inset-0 z-[600] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 font-oswald">
      {/* Use MotionDiv to resolve type issues */}
      <MotionDiv 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm bg-zinc-900 border-4 border-white rounded-large p-6 shadow-[0_0_40px_rgba(0,229,255,0.2)] flex flex-col gap-6"
      >
        <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
          <h2 className="text-3xl font-black text-neon-blue uppercase tracking-tighter italic">HALL OF FAME</h2>
          <button onClick={onClose} className="text-zinc-500 hover:text-white p-2">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <StatBox label="TOTAL SCORE" value={stats.totalScore} color="text-neon-yellow" />
           <StatBox label="LEVELS BEAT" value={stats.levelsCompleted} color="text-neon-pink" />
           <StatBox label="ROWS SOLVED" value={stats.rowsSolved} color="text-neon-green" />
           <StatBox label="TOTAL MOVES" value={stats.totalMoves} color="text-neon-aqua" />
           <StatBox label="TIME PLAYED" value={timeStr} color="text-white" />
           <StatBox label="HINTS USED" value={stats.hintsUsed} color="text-neon-red" />
        </div>

        <div className="mt-2 p-3 bg-black/50 border border-zinc-800 rounded-medium flex flex-col gap-3">
           <div>
               <h3 className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mb-1">CATEGORY MASTERY</h3>
               <div className="text-2xl font-black text-neon-gold leading-none mb-1">{stats.solvedCategoryIds.length} / {totalCategories}</div>
               <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-neon-gold shadow-[0_0_10px_#FFD400]" 
                    style={{ width: `${Math.min(100, (stats.solvedCategoryIds.length / totalCategories) * 100)}%` }} 
                  />
               </div>
           </div>

           <div>
               <h3 className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mb-1">WORD MASTERY</h3>
               <div className="text-2xl font-black text-neon-purple leading-none mb-1">{stats.solvedWords ? stats.solvedWords.length : 0} / {totalWords}</div>
               <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-neon-purple shadow-[0_0_10px_#D400FF]" 
                    style={{ width: `${Math.min(100, ((stats.solvedWords ? stats.solvedWords.length : 0) / totalWords) * 100)}%` }} 
                  />
               </div>
           </div>
        </div>

        <button 
          onClick={onClose}
          className="w-full py-4 bg-white text-black font-black text-xl uppercase rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg"
        >
          BACK TO GAME
        </button>
      </MotionDiv>
    </div>
  );
};

const StatBox = ({ label, value, color }: { label: string, value: string | number, color: string }) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest leading-none">{label}</span>
    <span className={`text-xl font-black ${color} tracking-tight`}>{value}</span>
  </div>
);

export default StatsOverlay;
