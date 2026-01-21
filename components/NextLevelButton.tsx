import React, { useState, useEffect } from 'react';
import { ARCADE_OUTLINE } from '../services/tileStyles';

interface Props {
  onClick: () => void;
  label?: string;
  isMain?: boolean; 
  themeColors?: string[]; 
  levelIndex?: number; 
}

const NextLevelButton: React.FC<Props> = ({ onClick, label = "NEXT PUZZLE", isMain = false, themeColors, levelIndex }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [opacity, setOpacity] = useState(0);

  const primaryColorClass = themeColors && themeColors.length > 0 ? themeColors[0] : 'bg-white';
  const secondaryColorClass = themeColors && themeColors.length > 1 ? themeColors[1] : 'bg-white';

  useEffect(() => {
    if (!isMain && levelIndex) {
        setDisplayedText(`LEVEL ${levelIndex} COMPLETE`);
        setOpacity(1);
        const timer1 = setTimeout(() => setOpacity(0), 1250);
        const timer2 = setTimeout(() => {
            setDisplayedText(label);
            setOpacity(1);
        }, 1550);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    } else {
        setDisplayedText(label);
        setOpacity(1);
    }
  }, [isMain, levelIndex, label]);

  return (
    <div className="relative group cursor-pointer p-4 flex flex-col items-center justify-center" onClick={onClick}>
      <div className={`absolute inset-4 rounded-small blur-lg opacity-40 group-hover:opacity-60 transition duration-500 bg-white`}></div>
       <div className={`absolute inset-4 rounded-small blur-lg opacity-40 group-hover:opacity-60 transition duration-500 bg-gradient-to-r ${primaryColorClass.replace('bg-', 'from-')} ${secondaryColorClass.replace('bg-', 'to-')}`}></div>
      <button className="relative px-12 py-4 md:px-16 md:py-6 bg-black border-4 border-white rounded-small flex items-center justify-center overflow-hidden transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,1)] z-20 min-w-[280px] min-h-[70px]">
        <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer pointer-events-none z-20"></div>
        <div className="flex flex-col items-center justify-center z-30 transition-opacity duration-300 ease-in-out" style={{ opacity: opacity }}>
            <span className="text-2xl md:text-3xl font-bold font-oswald uppercase tracking-widest text-white whitespace-nowrap" style={ARCADE_OUTLINE}>{displayedText}</span>
        </div>
      </button>
      <p className="mt-4 text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em] animate-pulse">click to review puzzle</p>
    </div>
  );
};
export default NextLevelButton;
