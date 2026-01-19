
import React from 'react';
import { GameMode } from '../types';
import Privacy from '../plugins/privacy';

export interface SettingsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMainMenu: () => void;
  isMusicOn: boolean;
  toggleMusic: () => void;
  enabledModes: GameMode[];
  toggleMode: (mode: GameMode) => void;
  hintsEnabled: boolean;
  setHintsEnabled: (val: boolean) => void;
  onShowTutorial: () => void;
  onResetProgress: () => void;
  categories?: { name: string, isSolved: boolean }[];
  isAutoPlaying: boolean;
  toggleAutoPlay: () => void;
  privacyOptionsRequired?: boolean;
  onShowPrivacyOptions?: () => void;
  onOpenAdInspector?: () => void;
}

const MODE_LABELS: Partial<Record<GameMode, string>> = {
  [GameMode.CLASSIC]: "Classic",
  [GameMode.LEVEL_THEMED]: "Themed",
  [GameMode.LEVEL_MIND_MATCH]: "Mind",
  [GameMode.LEVEL_SYNONYMS]: "Synonyms",
  [GameMode.LEVEL_EMOJI]: "Emoji",
  [GameMode.LEVEL_EXPANSION]: "Expansion"
};

const SettingsMenu: React.FC<SettingsMenuProps> = ({ 
  isOpen, onClose, onMainMenu, isMusicOn, toggleMusic, 
  enabledModes, toggleMode, hintsEnabled, setHintsEnabled,
  onShowTutorial, onResetProgress, categories = [],
  isAutoPlaying, toggleAutoPlay,
  privacyOptionsRequired,
  onShowPrivacyOptions,
  onOpenAdInspector
}) => {
  if (!isOpen) return null;

  const hasCategories = categories && categories.length > 0;

  const handleConsent = async () => {
    if (onShowPrivacyOptions) {
        onShowPrivacyOptions();
        return;
    }

    try {
      console.log('Requesting Privacy Options via AdMob wrapper...');
      await Privacy.showPrivacyOptionsForm();
      console.log('Privacy Options request handled.');
    } catch (error) {
      console.error('Error showing privacy options form:', error);
    }
  };

  return (
    <div className="absolute inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 animate-fade-in font-oswald">
      <div className="w-full max-w-sm bg-zinc-950 border-4 border-white rounded-large p-4 shadow-[0_0_50px_rgba(0,229,255,0.3)] flex flex-col gap-3 overflow-hidden max-h-[95vh]">
        <div className="flex justify-between items-center border-b-2 border-zinc-800 pb-2 shrink-0">
          <h2 className="text-xl font-black font-oswald text-neon-blue uppercase tracking-widest italic drop-shadow-[0_0_5px_rgba(0,229,255,0.8)]">SETTINGS</h2>
          <button className="text-zinc-400 hover:text-neon-red transition-colors p-1" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 shrink-0">
            <button onClick={onMainMenu} className="col-span-2 py-2.5 bg-neon-red border-2 border-white text-white font-black font-oswald text-lg uppercase rounded-medium hover:bg-red-500 transition-all shadow-[0_0_15px_rgba(255,7,58,0.4)]">EXIT TO MAIN MENU</button>
            <button onClick={toggleMusic} className={`p-2.5 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${isMusicOn ? 'bg-zinc-900 border-neon-green text-neon-green shadow-[0_0_10px_#00FF66]' : 'bg-black border-zinc-800 text-zinc-600'}`}>SOUND: {isMusicOn ? 'ON' : 'OFF'}</button>
            <button onClick={() => setHintsEnabled(!hintsEnabled)} className={`p-2.5 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${hintsEnabled ? 'bg-zinc-900 border-neon-blue text-neon-blue shadow-[0_0_10px_#00E5FF]' : 'bg-black border-zinc-800 text-zinc-600'}`}>HINTS: {hintsEnabled ? 'ON' : 'OFF'}</button>
        </div>

        {hasCategories && (
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

        <div className="flex flex-col gap-1 shrink-0">
          <h3 className="text-neon-aqua font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5 drop-shadow-[0_0_2px_rgba(0,255,255,0.5)]">GAME MODES</h3>
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            {(Object.keys(MODE_LABELS) as GameMode[]).map((m) => {
              const isEnabled = enabledModes.includes(m);
              return (
                <button key={m} onClick={() => toggleMode(m)} className={`flex flex-col items-center justify-center p-1 rounded-medium border transition-all h-10 ${isEnabled ? 'bg-zinc-900 border-neon-aqua text-white shadow-[0_0_8px_rgba(0,255,246,0.3)]' : 'bg-black border-zinc-800 text-zinc-600'}`}>
                  <span className="font-bold font-oswald text-[9px] uppercase leading-none mb-0.5">{MODE_LABELS[m]}</span>
                  <div className={`w-1.5 h-1.5 rounded-full ${isEnabled ? 'bg-neon-aqua shadow-[0_0_5px_#00FFF6]' : 'bg-zinc-800'}`} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-2 pt-2 border-t border-zinc-800 shrink-0">
            <div className={`grid ${privacyOptionsRequired ? 'grid-cols-3' : 'grid-cols-2'} gap-2`}>
                <button onClick={onShowTutorial} className="py-2 bg-zinc-900 border border-neon-yellow text-neon-yellow rounded-medium font-bold text-[9px] font-oswald uppercase shadow-[0_0_8px_rgba(249,255,0,0.2)]">HOW TO PLAY</button>
                
                {privacyOptionsRequired && (
                  <button onClick={handleConsent} className="py-2 bg-zinc-900 border border-zinc-600 text-zinc-400 rounded-medium font-bold text-[9px] font-oswald uppercase hover:text-white hover:border-white transition-all">CONSENT</button>
                )}
                
                <button onClick={onOpenAdInspector} className="py-2 bg-zinc-900 border border-zinc-600 text-zinc-400 rounded-medium font-bold text-[9px] font-oswald uppercase hover:text-white hover:border-white transition-all">ADMOB</button>
            </div>
            
            <button onClick={onResetProgress} className="w-full py-2 bg-black border border-neon-red text-neon-red rounded-medium font-bold text-[10px] font-oswald uppercase shadow-[0_0_5px_rgba(255,7,58,0.2)]">RESET PROGRESS</button>
            <button onClick={onClose} className="w-full py-3.5 bg-white text-black font-black font-oswald text-xl uppercase rounded-medium active:scale-95 transition-all shadow-[0_0_20px_white]">RESUME PLAY</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu;
