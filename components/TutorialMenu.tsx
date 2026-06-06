import React from 'react';
import { GameMode } from '../types';

interface TutorialMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTutorial: (mode: GameMode) => void;
}

interface TutorialEntry {
  mode: GameMode;
  title: string;
  subtitle: string;
  color: string;
}

const TUTORIALS: TutorialEntry[] = [
  {
    mode: GameMode.CLASSIC,
    title: "BASICS",
    subtitle: "HOW TO PLAY",
    color: "#00FFFF"
  },
  {
    mode: GameMode.LEVEL_EMOJI,
    title: "EMOJI MODE",
    subtitle: "EMOJI TILES",
    color: "#F9FF00"
  },
  {
    mode: GameMode.LEVEL_SYNONYMS,
    title: "SYNONYMS",
    subtitle: "SIMILAR MEANINGS",
    color: "#39FF14"
  },
  {
    mode: GameMode.LEVEL_THEMED,
    title: "THEMED",
    subtitle: "TIED CATEGORIES",
    color: "#FF00FF"
  },
  {
    mode: GameMode.LEVEL_MIND_MATCH,
    title: "MIND MATCH",
    subtitle: "TIMED ROUNDS",
    color: "#FF5F1F"
  },
  {
    mode: GameMode.LEVEL_EXPANSION,
    title: "EXPANSION",
    subtitle: "GROWING GRID",
    color: "#FF073A"
  }
];

const TutorialMenu: React.FC<TutorialMenuProps> = ({ isOpen, onClose, onSelectTutorial }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 animate-fade-in font-oswald">
      <div className="w-full max-w-sm bg-zinc-950 border-4 border-white rounded-large p-4 shadow-[0_0_50px_rgba(255,255,255,0.3)] flex flex-col gap-3 overflow-hidden max-h-[95vh]">
        <div className="relative flex justify-center items-center border-b-2 border-zinc-800 pb-2 shrink-0">
          <h2 className="text-xl font-black text-white uppercase tracking-widest italic">TUTORIALS</h2>
          <button className="absolute right-0 text-zinc-400 hover:text-neon-red transition-colors p-1" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <p className="text-zinc-400 text-xs font-oswald uppercase tracking-wider text-center pb-1 border-b border-zinc-800">
          SELECT A TUTORIAL TO REPLAY
        </p>

        <div className="flex flex-col gap-2 overflow-y-auto no-scrollbar">
          {TUTORIALS.map((tutorial) => (
            <button
              key={tutorial.mode}
              onClick={() => onSelectTutorial(tutorial.mode)}
              className="flex items-center justify-between p-3 rounded-medium border-2 border-zinc-800 bg-black hover:bg-zinc-900 transition-all hover:brightness-110 active:scale-[0.98] group"
              style={{
                borderColor: tutorial.color,
                boxShadow: `0 0 8px ${tutorial.color}33, inset 0 0 8px ${tutorial.color}11`,
              }}
            >
              <div className="flex flex-col items-start">
                <span className="text-white font-black font-oswald text-sm uppercase tracking-wider group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.5)] transition-all">
                  {tutorial.title}
                </span>
                <span className="text-zinc-500 font-oswald text-[10px] uppercase tracking-wider">
                  {tutorial.subtitle}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-white/40 group-hover:text-white transition-colors text-xs font-oswald uppercase tracking-wider">PLAY</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white/40 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        <button 
          onClick={onClose}
          className="w-full py-3.5 bg-white text-black font-black font-oswald text-xl uppercase rounded-medium active:scale-95 transition-all shadow-[0_0_20px_white] mt-2"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default TutorialMenu;
