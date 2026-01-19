
import React from 'react';
import { motion } from 'framer-motion';
import { LevelScoreBreakdown } from '../types';
import { ARCADE_OUTLINE } from '../services/tileStyles';

// Fix: Cast motion.div to any to bypass environment-specific prop type errors
const MotionDiv = motion.div as any;

interface Props {
  breakdown: LevelScoreBreakdown;
  onNext: () => void;
  onReview: () => void;
}

const ScoreBreakdownOverlay: React.FC<Props> = ({ breakdown, onNext, onReview }) => {
  const hasMoveBonus = breakdown.moveBonus > 0;
  const hasTimeBonus = breakdown.timeBonus > 0;
  const hasHintPenalty = breakdown.hintPenalty < 0;

  return (
    <div className="absolute inset-0 z-[500] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 font-oswald overflow-hidden">
      {/* Use MotionDiv to resolve type issues */}
      <MotionDiv 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-md bg-zinc-900 border-4 border-white rounded-large p-8 shadow-[0_0_50px_rgba(255,255,255,0.2)] flex flex-col gap-6"
      >
        {/* Header removed completely as requested ("REPLACE WITH NOTHING") */}
        <div className="h-4"></div>

        <div className="space-y-3 py-4 border-y border-zinc-800">
          <ScoreLine label="BASE COMPLETION" value={breakdown.basePoints} color="text-white" />
          {hasTimeBonus && <ScoreLine label="TIME BONUS" value={breakdown.timeBonus} color="text-neon-green" />}
          {hasMoveBonus && <ScoreLine label="MINIMAL MOVES" value={breakdown.moveBonus} color="text-neon-aqua" />}
          {hasHintPenalty && <ScoreLine label="HINT DEDUCTION" value={breakdown.hintPenalty} color="text-neon-red" />}
          
          <div className="pt-4 mt-2 border-t border-dashed border-zinc-700 flex justify-between items-end">
            <span className="text-zinc-400 font-bold uppercase text-sm">LEVEL TOTAL</span>
            <span className="text-4xl font-black text-neon-yellow">+{breakdown.levelTotal}</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
            <button
              onClick={onNext}
              className="w-full py-5 bg-black text-white font-black text-3xl uppercase rounded-small border-4 border-white hover:scale-[1.03] active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,1)]"
              style={ARCADE_OUTLINE}
            >
              NEXT PUZZLE
            </button>
            <button 
              onClick={onReview}
              className="text-zinc-500 hover:text-deco-gold font-bold uppercase text-[10px] tracking-[0.2em] transition-colors mt-2"
            >
              click to review puzzle
            </button>
        </div>
      </MotionDiv>
    </div>
  );
};

const ScoreLine = ({ label, value, color }: { label: string, value: number, color: string }) => (
  <div className="flex justify-between items-center">
    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">{label}</span>
    <span className={`text-lg font-black ${color}`}>
      {value > 0 ? '+' : ''}{value}
    </span>
  </div>
);

export default ScoreBreakdownOverlay;
