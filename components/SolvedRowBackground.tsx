import React from 'react';
import { motion } from 'framer-motion';
import { NEON_PALETTE } from '../types';

interface SolvedRowBackgroundProps {
  seed: string | number;
  colorClass?: string;
  className?: string;
  animationKey?: 'level1-standard' | 'level1-emoji' | 'expansion-easy' | 'expansion-medium' | 'expansion-hard' | 'tutorial';
}

const SOLVED_ROW_ANIMATION_BANK = {
  'level1-standard': {
    animate: { opacity: [0.9, 1, 0.9], scale: [1, 1.008, 1] },
    transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }
  },
  'level1-emoji': {
    animate: { opacity: [0.86, 1, 0.86], filter: ['saturate(1)', 'saturate(1.14)', 'saturate(1)'] },
    transition: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' }
  },
  'expansion-easy': {
    animate: { opacity: [0.88, 1, 0.88], y: [0, -1, 0] },
    transition: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
  },
  'expansion-medium': {
    animate: { opacity: [0.84, 1, 0.84], scaleX: [1, 1.012, 1] },
    transition: { duration: 1.25, repeat: Infinity, ease: 'easeInOut' }
  },
  'expansion-hard': {
    animate: { opacity: [0.8, 1, 0.8], filter: ['contrast(1)', 'contrast(1.12)', 'contrast(1)'] },
    transition: { duration: 0.95, repeat: Infinity, ease: 'easeInOut' }
  },
  tutorial: {
    animate: { opacity: [0.92, 1, 0.92], scale: [1, 1.006, 1] },
    transition: { duration: 2.1, repeat: Infinity, ease: 'easeInOut' }
  }
} as const;

const SolvedRowBackground: React.FC<SolvedRowBackgroundProps> = ({ colorClass, className = "", animationKey = 'level1-standard' }) => {
  const colorToken = colorClass?.split(' ').find(c => c.startsWith('bg-neon-'));
  const rowHex = (colorToken && NEON_PALETTE[colorToken]) || '#fd073a';
  const animationPreset = SOLVED_ROW_ANIMATION_BANK[animationKey] || SOLVED_ROW_ANIMATION_BANK['level1-standard'];

  return (
    <motion.div
      className={`absolute inset-0 z-0 rounded-medium overflow-hidden pointer-events-none ${className}`}
      initial={{ opacity: 0.92, scale: 1 }}
      animate={animationPreset.animate}
      transition={animationPreset.transition}
      style={{
        background: 'transparent',
        border: `2px solid ${rowHex}80`,
        boxShadow: `inset 0 0 0 1px ${rowHex}66, 0 0 14px ${rowHex}66, 0 0 28px ${rowHex}40`
      }}
    />
  );
};

export default React.memo(SolvedRowBackground);
