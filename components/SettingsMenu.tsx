import React from 'react';
import { GameMode } from '../types';
import Privacy from '../plugins/privacy';
import { useTheme } from './ThemeContext';
import { DifficultyLevel } from '../services/storage';

export interface SettingsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMainMenu: () => void;
  isMusicOn: boolean;
  toggleMusic: () => void;
  enabledModes: GameMode[];
  toggleMode: (mode: GameMode) => void;
  onSelectMode?: (mode: GameMode) => void;
  hintsEnabled: boolean;
  setHintsEnabled: (val: boolean) => void;
  onResetProgress: () => void;
  onStats?: () => void;

  categories?: { name: string, isSolved: boolean }[];
  privacyOptionsRequired?: boolean;
  onShowPrivacyOptions?: () => void;
  selectedDifficulty?: DifficultyLevel | undefined;
  unlockedDifficulties?: DifficultyLevel[];
  onDifficultyChange?: (diff: DifficultyLevel) => void;
  onSelectExpansionTest?: () => void;

  // Development Menu
  isAutoPlaying?: boolean;
  onToggleAutoPlay?: () => void;
  levelIndex?: number;
  onLevelChange?: (index: number) => void;
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

const SettingsMenu: React.FC<SettingsMenuProps> = ({ 
  isOpen, onClose, onMainMenu, isMusicOn, toggleMusic, 
  enabledModes, toggleMode, onSelectMode, hintsEnabled, setHintsEnabled,
  onResetProgress, onStats, categories = [],

  privacyOptionsRequired,
  onShowPrivacyOptions,
  selectedDifficulty,
  unlockedDifficulties = [],
  onDifficultyChange,
  onSelectExpansionTest,

  isAutoPlaying,
  onToggleAutoPlay,
  levelIndex,
  onLevelChange,
}) => {
  const { theme, toggleTheme } = useTheme();

  if (!isOpen) return null;

  const handleConsent = async () => {
    if (onShowPrivacyOptions) {
        onShowPrivacyOptions();
        return;
    }
    try {
      await Privacy.showPrivacyOptionsForm();
    } catch (error) {
      console.error('Error showing privacy options form:', error);
    }
  };

  return (
    <div className="absolute inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 animate-fade-in font-oswald">
      <div className="w-full max-sm bg-zinc-950 border-4 border-white ring-2 ring-white ring-offset-0 rounded-large p-4 shadow-[0_0_50px_rgba(255,255,255,0.3)] flex flex-col gap-3 overflow-hidden max-h-[95vh]">
        <div className="relative flex justify-center items-center border-b-2 border-zinc-800 pb-2 shrink-0">
          <h2 className="text-xl font-black text-white uppercase tracking-[0.3em] font-oswald not-italic">SETTINGS</h2>
          <button className="absolute right-0 text-zinc-400 hover:text-neon-red transition-colors p-1 min-w-[48px] min-h-[48px] flex items-center justify-center" onClick={onClose} aria-label="Close settings">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 shrink-0">
            <button onClick={onMainMenu} className="col-span-2 py-2.5 min-h-[48px] bg-neon-red border-2 border-white text-white font-black font-raleway text-2xl uppercase rounded-medium hover:bg-red-500 transition-all shadow-[0_0_15px_rgba(255,7,58,0.4)]" aria-label="Exit to main menu">EXIT TO MAIN MENU</button>
            <button onClick={toggleMusic} className={`col-span-1 py-2.5 min-h-[48px] rounded-medium border-2 transition-all font-bold font-raleway text-lg uppercase ${isMusicOn ? 'bg-zinc-900 border-white text-white' : 'bg-black border-zinc-800 text-zinc-600'}`} aria-label={`Sound ${isMusicOn ? 'on' : 'off'}`}>SOUND: {isMusicOn ? 'ON' : 'OFF'}</button>
            <button onClick={toggleTheme} className={`col-span-1 py-2.5 min-h-[48px] rounded-medium border-2 transition-all font-bold font-raleway text-lg uppercase ${theme === 'light' ? 'bg-zinc-900 border-neon-yellow text-neon-yellow shadow-[0_0_10px_#F9FF00]' : 'bg-black border-zinc-800 text-zinc-600'}`} aria-label={`Theme: ${theme}`}>THEME: {theme === 'dark' ? 'DARK' : 'LIGHT'}</button>
        </div>

        {categories.length > 0 && (
          <div className="flex flex-col gap-1 shrink-0">
             <h3 className="text-neon-pink font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5 drop-shadow-[0_0_2px_rgba(255,31,191,0.5)]">CURRENT GOALS</h3>
             <div className="grid grid-cols-2 gap-1.5 py-1">
                 {categories.map((cat) => (
                     <div key={cat.name} className={`px-2 py-1.5 rounded-small border flex items-center justify-between text-[10px] font-bold uppercase font-oswald tracking-tighter transition-all ${cat.isSolved ? 'bg-neon-green/10 border-neon-green text-neon-green shadow-[0_0_5px_#00FF66]' : 'bg-black border-zinc-700 text-zinc-300'}`}>
                        <span className="truncate mr-1">{cat.name}</span>
                        {cat.isSolved && <span className="text-xs">✓</span>}
                     </div>
                 ))}
             </div>
          </div>
        )}

        {/* Difficulty Selection — only shown when 2+ difficulties unlocked (Medium at 20 stars) */}
        {onDifficultyChange && unlockedDifficulties.length > 1 && (
          <div className="flex flex-col gap-1 shrink-0">
            <h3 className="text-neon-yellow font-oswald text-xs uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5 drop-shadow-[0_0_2px_rgba(249,255,0,0.5)]">DIFFICULTY</h3>
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              {(['easy', 'medium', 'hard'] as DifficultyLevel[]).map((diff) => {
                const isUnlocked = unlockedDifficulties.includes(diff);
                if (!isUnlocked) return null;
                const isSelected = selectedDifficulty === diff;
                return (
                  <button
                    key={diff}
                    onClick={() => onDifficultyChange(diff)}
                    className={`
                      flex flex-col items-center justify-center p-1 min-w-[48px] min-h-[48px] rounded-medium border-2 transition-all h-12
                      ${isSelected
                        ? `${DIFFICULTY_COLORS[diff]} bg-zinc-900`
                        : 'bg-black border-zinc-800 text-zinc-600 hover:border-white hover:text-white'
                      }
                    `}
                    aria-label={`Select ${DIFFICULTY_LABELS[diff]} difficulty`}
                  >
                    <span className="font-bold font-raleway text-xs uppercase leading-none">{DIFFICULTY_LABELS[diff]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {onStats && (
          <button 
            onClick={() => { onStats(); }}
            className="w-full py-2.5 min-h-[48px] bg-zinc-900 border-2 border-neon-blue text-white font-black font-raleway text-lg uppercase rounded-medium hover:bg-zinc-800 transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)]"
            aria-label="View player statistics"
          >
            STATS
          </button>
        )}


        {/* Developer Menu */}
        {(onToggleAutoPlay || onLevelChange) && (
          <div className="flex flex-col gap-1 shrink-0 border-t border-zinc-800 pt-2">
            <h3 className="text-neon-lime font-oswald text-xs uppercase tracking-[0.2em] font-black pb-0.5 drop-shadow-[0_0_2px_rgba(57,255,20,0.5)]">DEV MENU</h3>
            {onToggleAutoPlay && (
              <button
                onClick={onToggleAutoPlay}
                className={`w-full py-2 min-h-[40px] rounded-medium border-2 transition-all font-bold font-raleway text-sm uppercase ${isAutoPlaying ? 'bg-neon-lime/20 border-neon-lime text-neon-lime' : 'bg-black border-zinc-800 text-zinc-600'}`}
                aria-label={`Auto-play ${isAutoPlaying ? 'on' : 'off'}`}
              >
                AUTO-PLAY: {isAutoPlaying ? 'ON' : 'OFF'}
              </button>
            )}
            {onLevelChange && levelIndex !== undefined && (
              <div className="flex items-center gap-2">
                <span className="text-white font-oswald text-xs uppercase tracking-wider">LVL {levelIndex}</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => onLevelChange(Math.max(0, levelIndex - 1))}
                    className="min-w-[40px] min-h-[40px] bg-zinc-900 border border-zinc-700 text-white rounded-small font-black text-lg active:scale-95 transition-all"
                    aria-label="Decrease level index"
                  >
                    −
                  </button>
                  <button
                    onClick={() => onLevelChange(levelIndex + 1)}
                    className="min-w-[40px] min-h-[40px] bg-zinc-900 border border-zinc-700 text-white rounded-small font-black text-lg active:scale-95 transition-all"
                    aria-label="Increase level index"
                  >
                    +
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-auto flex flex-col gap-2 pt-2 shrink-0">
            {privacyOptionsRequired && (
              <button onClick={handleConsent} className="py-2 min-h-[48px] bg-zinc-900 border border-zinc-600 text-zinc-400 rounded-medium font-bold text-lg font-raleway uppercase hover:text-white hover:border-white transition-all" aria-label="Open privacy consent options">CONSENT</button>
            )}
            <button onClick={onResetProgress} className="w-full py-2 min-h-[48px] bg-black border border-neon-red text-neon-red rounded-medium font-bold text-lg font-raleway uppercase shadow-[0_0_5px_rgba(255,7,58,0.2)]" aria-label="Reset all game progress">RESET PROGRESS</button>
            <button onClick={onClose} className="w-full py-3.5 min-h-[48px] bg-white text-black font-black font-raleway text-4xl uppercase rounded-medium active:scale-95 transition-all shadow-[0_0_20px_white]">RESUME PLAY</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu;