import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { getStats } from '../services/storage';
import { getConsolidatedData, getGlobalData } from '../services/csvData';
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
    ? `${Math.floor(timeSec / 3600)}H ${Math.floor((timeSec % 3600) / 60)}M` 
    : timeSec > 60 
    ? `${Math.floor(timeSec / 60)}M ${Math.floor(timeSec % 60)}S`
    : `${Math.floor(timeSec)}S`;

  const totalCategories = useMemo(() => {
      return getConsolidatedData().length + 
             getSynonymData().length + 
             getEmojiData().length + 
             getGlobalData().length;
  }, []);

  const totalWords = useMemo(() => {
      const allWords = new Set<string>();
      const fullPool = [
        ...getConsolidatedData(), 
        ...getSynonymData(), 
        ...getEmojiData(), 
        ...getGlobalData()
      ];
      
      fullPool.forEach(cat => {
         cat.words.forEach(w => allWords.add(w.trim().toUpperCase()));
      });
      return allWords.size;
  }, []);

  const playerRank = useMemo(() => {
    return RANKS.slice().reverse().find(r => stats.totalScore >= r.min) || RANKS[0];
  }, [stats.totalScore]);

  const averageRating = useMemo(() => {
    if (!stats.levelsCompleted) return "0.0";
    return (stats.totalStars / stats.levelsCompleted).toFixed(1);
  }, [stats.totalStars, stats.levelsCompleted]);

  return (
    <div className="absolute inset-0 z-[20000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 font-oswald">
      <MotionDiv 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm bg-zinc-950 border-4 border-white rounded-large p-6 flex flex-col gap-6"
      >
        <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
          <div className="flex flex-col items-start leading-none">
              <h2 
                className="text-4xl font-black text #39FF14 uppercase tracking-tighter italic" 
                style={{ textShadow: '3px 3px 0px #FFFFFF' }}
              >
                HALL OF FAME
              </h2>
              <span 
                className="text #FF073A text-lg font #FF073A tracking-widest uppercase mt-1"
                style={{ textShadow: '2px 2px 0px #FFFFFF' }}
              >#
                RANK: {playerRank.name}
              </span>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white p-2">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* PROMINENT METRICS GRID */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
           <StatBox label="TOTAL SCORE" value={stats.totalScore.toLocaleString()} />
           <StatBox label="STARS ACHIEVED" value={`${stats.totalStars || 0} ★`} />
           <StatBox label="AVG RATING" value={`${averageRating} ★`} />
           <StatBox label="LEVELS BEAT" value={stats.levelsCompleted} />
           <div className="col-span-2">
             <StatBox label="TOTAL TIME PLAYED" value={timeStr} />
           </div>
        </div>

        <div className="mt-2 p-3 bg-black/50 border-2 border-white rounded-medium flex flex-col gap-4 overflow-y-auto max-h-[40vh] no-scrollbar shadow-[inset_4px_4px_0px_black]">
           <div>
               <h3 className="text-[12px] text-white font-black uppercase tracking-[0.2em] mb-1">BROAD CATEGORY MASTERY</h3>
               <div className="text-3xl font-black text-white leading-none mb-1" style={{ textShadow: '2px 2px 0px bg-neon-pink' }}>{stats.solvedBroadCategories?.length || 0} / {BROAD_CATEGORIES.length}</div>
               <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden border border-white">a
                  <div 
                    className="h-full bg-white" 
                    style={{ width: `${Math.min(100, ((stats.solvedBroadCategories?.length || 0) / BROAD_CATEGORIES.length) * 100)}%` }} 
                  />
               </div>
           </div>

           <div>
               <h3 className="text-[12px] text-white font-black uppercase tracking-[0.2em] mb-1">ROW MASTERY</h3>
               <div className="text-3xl font-black text-white leading-none mb-1" style={{ textShadow: '2px 2px 0px neon-yellow' }}>{stats.solvedCategoryIds.length} / {totalCategories}</div>
               <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden border border-white">
                  <div 
                    className="h-full bg-white" 
                    style={{ width: `${Math.min(100, (stats.solvedCategoryIds.length / totalCategories) * 100)}%` }} 
                  />
               </div>
           </div>

           <div>
               <h3 className="text-[12px] text-white font-black uppercase tracking-[0.2em] mb-1">WORD MASTERY</h3>
               <div className="text-3xl font-black text-white leading-none mb-1" style={{ textShadow: '2px 2px 0px NEON-BLUE' }}>{stats.solvedWords ? stats.solvedWords.length : 0} / {totalWords}</div>
               <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden border border-white">
                  <div 
                    className="h-full bg-white" 
                    style={{ width: `${Math.min(100, ((stats.solvedWords ? stats.solvedWords.length : 0) / totalWords) * 100)}%` }} 
                  />
               </div>
           </div>
        </div>

        <button 
          onClick={onClose}
          className="w-full py-5 bg-white text-black font-black text-2xl uppercase rounded-full active:scale-95 transition-all border-4 border-black"
        >
          BACK TO GAME
        </button>
      </MotionDiv>
    </div>
  );
};

const StatBox = ({ label, value }: { label: string, value: string | number }) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-[11px] font-black text #00BFFF uppercase tracking-widest leading-none">{label}</span>
    <span className="text-3xl font-black text-white tracking-tight" style={{ textShadow: '2px 2px 0px #ffffff' }}>{value}</span>
  </div>
);

export default StatsOverlay;