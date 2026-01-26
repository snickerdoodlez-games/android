import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { getStats } from '../services/storage';
import { getConsolidatedData } from '../services/csvData';
import { getSynonymData } from '../services/synonymData';
import { getEmojiData } from '../services/emojiData';
import { BROAD_CATEGORIES, RANKS } from '../types';

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

  const totalCategories = useMemo(() => {
      return getConsolidatedData().length + getSynonymData().length + getEmojiData().length;
  }, []);

  const totalWords = useMemo(() => {
      const allWords = new Set<string>();
      [...getConsolidatedData(), ...getSynonymData(), ...getEmojiData()].forEach(cat => {
         cat.words.forEach(w => allWords.add(w.trim().toUpperCase()));
      });
      return allWords.size;
  }, []);

  const playerRank = useMemo(() => {
    return RANKS.slice().reverse().find(r => stats.totalScore >= r.min) || RANKS[0];
  }, [stats.totalScore]);

  // AVERAGE STAR RATING CALCULATION
  const averageRating = useMemo(() => {
    if (!stats.levelsCompleted) return "0.0";
    return (stats.totalStars / stats.levelsCompleted).toFixed(1);
  }, [stats.totalStars, stats.levelsCompleted]);

  return (
    <div className="absolute inset-0 z-[600] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 font-oswald">
      <MotionDiv 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm bg-zinc-900 border-4 border-white rounded-large p-6 shadow-[0_0_40px_rgba(255,255,255,0.2)] flex flex-col gap-6"
      >
        <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
          <div className="flex flex-col items-start leading-none">
              <h2 className="text-3xl font-black text-neon-blue uppercase tracking-tighter italic">HALL OF FAME</h2>
              <span className="text-neon-yellow text-sm font-bold tracking-widest uppercase">RANK: {playerRank.name}</span>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white p-2">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* PROMINENT METRICS GRID */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
           <StatBox label="TOTAL SCORE" value={stats.totalScore.toLocaleString()} color="text-neon-green" />
           <StatBox label="STARS ACHIEVED" value={`${stats.totalStars || 0} ★`} color="text-neon-yellow" isLarge={true} />
           <StatBox label="AVG RATING" value={`${averageRating} ★`} color="text-zinc-400" />
           <StatBox label="LEVELS BEAT" value={stats.levelsCompleted} color="text-neon-pink" />
           <div className="col-span-2">
             <StatBox label="TOTAL TIME PLAYED" value={timeStr} color="text-white" />
           </div>
        </div>

        <div className="mt-2 p-3 bg-black/50 border border-zinc-800 rounded-medium flex flex-col gap-4 overflow-y-auto max-h-[40vh] no-scrollbar">
           <div>
               <h3 className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mb-1">BROAD CATEGORY MASTERY</h3>
               <div className="text-2xl font-black text-neon-blue leading-none mb-1">{stats.solvedBroadCategories?.length || 0} / {BROAD_CATEGORIES.length}</div>
               <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-neon-blue shadow-[0_0_10px_#00E5FF]" 
                    style={{ width: `${Math.min(100, ((stats.solvedBroadCategories?.length || 0) / BROAD_CATEGORIES.length) * 100)}%` }} 
                  />
               </div>
           </div>

           <div>
               <h3 className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mb-1">ROW MASTERY</h3>
               <div className="text-2xl font-black text-neon-yellow leading-none mb-1">{stats.solvedCategoryIds.length} / {totalCategories}</div>
               <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-neon-yellow shadow-[0_0_10px_#F9FF00]" 
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
          className="w-full py-4 bg-white text-black font-black text-xl uppercase rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg mt-auto"
        >
          BACK TO GAME
        </button>
      </MotionDiv>
    </div>
  );
};

const StatBox = ({ label, value, color, isLarge = false }: { label: string, value: string | number, color: string, isLarge?: boolean }) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest leading-none">{label}</span>
    <span className={`${isLarge ? 'text-2xl' : 'text-xl'} font-black ${color} tracking-tight`}>{value}</span>
  </div>
);

export default StatsOverlay;