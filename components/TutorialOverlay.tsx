
import React, { useState, useEffect, useRef } from 'react';
import { GameMode, TileData } from '../types';
import Tile from './Tile';
import { audio } from '../services/audioService';
import Header from './Header';

interface TutorialProps {
  mode: GameMode;
  onComplete: () => void;
}

// Mock Data for the Tutorial Board - Using Partial TileData to match structure
const TUTORIAL_TILES: TileData[] = [
  // Row 1: Fruits (Needs Pear) - Has Dog (Intruder)
  { id: 't0', word: 'APPLE', categoryId: 'fruit', categoryName: 'FRUIT', status: 'neutral' },
  { id: 't1', word: 'BANANA', categoryId: 'fruit', categoryName: 'FRUIT', status: 'neutral' },
  { id: 't2', word: 'GRAPE', categoryId: 'fruit', categoryName: 'FRUIT', status: 'neutral' },
  { id: 't3', word: 'DOG', categoryId: 'animal', categoryName: 'ANIMAL', status: 'neutral' }, // Intruder

  // Row 2: Animals (Needs Dog) - Has Pear (Intruder)
  { id: 't4', word: 'CAT', categoryId: 'animal', categoryName: 'ANIMAL', status: 'neutral' },
  { id: 't5', word: 'LION', categoryId: 'animal', categoryName: 'ANIMAL', status: 'neutral' },
  { id: 't6', word: 'TIGER', categoryId: 'animal', categoryName: 'ANIMAL', status: 'neutral' },
  { id: 't7', word: 'PEAR', categoryId: 'fruit', categoryName: 'FRUIT', status: 'neutral' }, // Intruder

  // Row 3: Colors (Will be mixed initially)
  { id: 't8', word: 'RED', categoryId: 'color', categoryName: 'COLOR', status: 'neutral' },
  { id: 't9', word: 'BLUE', categoryId: 'color', categoryName: 'COLOR', status: 'neutral' },
  { id: 't10', word: 'GREEN', categoryId: 'color', categoryName: 'COLOR', status: 'neutral' },
  { id: 't11', word: 'YELLOW', categoryId: 'color', categoryName: 'COLOR', status: 'neutral' },

  // Row 4: Tools (Will be mixed initially)
  { id: 't12', word: 'HAMMER', categoryId: 'tool', categoryName: 'TOOL', status: 'neutral' },
  { id: 't13', word: 'DRILL', categoryId: 'tool', categoryName: 'TOOL', status: 'neutral' },
  { id: 't14', word: 'SAW', categoryId: 'tool', categoryName: 'TOOL', status: 'neutral' },
  { id: 't15', word: 'WRENCH', categoryId: 'tool', categoryName: 'TOOL', status: 'neutral' },
];

const getInitialTiles = (): TileData[] => {
    const tiles = JSON.parse(JSON.stringify(TUTORIAL_TILES));
    // Scramble Row 3 & 4 for the demo
    const temp1 = tiles[10];
    tiles[10] = tiles[13];
    tiles[13] = temp1;

    const temp2 = tiles[11];
    tiles[11] = tiles[12];
    tiles[12] = temp2;
    
    return tiles;
};

const getModeName = (m: GameMode) => {
    if (m === GameMode.CLASSIC) return "CLASSIC GRID";
    if (m === GameMode.LEVEL_EMOJI) return "EMOJI MATCH";
    if (m === GameMode.LEVEL_SYNONYMS) return "SYNONYMS";
    if (m === GameMode.LEVEL_THEMED) return "THEMED";
    if (m === GameMode.LEVEL_MIND_MATCH) return "MIND MATCH";
    return "TUTORIAL";
};

const TutorialOverlay: React.FC<TutorialProps> = ({ mode, onComplete }) => {
  const isSwapMode = mode === GameMode.CLASSIC || mode === GameMode.LEVEL_EMOJI || mode === GameMode.LEVEL_THEMED || mode === GameMode.LEVEL_SYNONYMS;
  
  const [step, setStep] = useState(1);
  const [tiles, setTiles] = useState<TileData[]>(isSwapMode ? getInitialTiles() : TUTORIAL_TILES);
  
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const animateSwap = async (id1: string, id2: string) => {
      const el1 = tileRefs.current.get(id1);
      const el2 = tileRefs.current.get(id2);

      audio.playSwap();

      if (el1 && el2) {
          const rect1 = el1.getBoundingClientRect();
          const rect2 = el2.getBoundingClientRect();
          const dx = rect2.left - rect1.left;
          const dy = rect2.top - rect1.top;

          // Note: Tutorial uses physical transform animation for clarity, 
          // while game logic uses fade/text swap. 
          el1.style.transition = 'transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s';
          el1.style.transform = `translate(${dx}px, ${dy}px) scale(1.1)`;
          el1.style.zIndex = '50';
          el1.style.boxShadow = '0 10px 20px rgba(0,0,0,0.5)';

          el2.style.transition = 'transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s';
          el2.style.transform = `translate(${-dx}px, ${-dy}px) scale(0.9)`;
          el2.style.zIndex = '40';

          await new Promise(r => setTimeout(r, 400));

          el1.style.transition = '';
          el1.style.transform = '';
          el1.style.zIndex = '';
          el1.style.boxShadow = '';
          el2.style.transition = '';
          el2.style.transform = '';
          el2.style.zIndex = '';
      }
  };

  useEffect(() => {
    if (!isSwapMode) return;

    let mounted = true;

    const runAutoSolve = async () => {
        await new Promise(r => setTimeout(r, 600));
        if (!mounted) return;

        // --- PAIR 1 ---
        const idA = 't13'; 
        const idB = 't10'; 

        await new Promise(r => setTimeout(r, 300));
        if (!mounted) return;

        // Select First (Blue)
        setTiles(prev => prev.map(t => t.id === idA ? { ...t, status: 'selected' } : t));
        audio.playSelect();
        await new Promise(r => setTimeout(r, 400));
        if (!mounted) return;

        // Select Second (Pink - Swap Target)
        // Use 'swap-target' to show Pink
        setTiles(prev => prev.map(t => t.id === idB ? { ...t, status: 'swap-target' } : t));
        audio.playSelect();
        await new Promise(r => setTimeout(r, 200));
        if (!mounted) return;

        await animateSwap(idA, idB);

        setTiles(prev => {
            const next = [...prev];
            const idxA = next.findIndex(t => t.id === idA);
            const idxB = next.findIndex(t => t.id === idB);
            [next[idxA], next[idxB]] = [next[idxB], next[idxA]];
            next[idxA] = { ...next[idxA], status: 'neutral' };
            next[idxB] = { ...next[idxB], status: 'neutral' };
            return next;
        });
        await new Promise(r => setTimeout(r, 400));
        if (!mounted) return;

        // --- PAIR 2 ---
        const idC = 't12'; 
        const idD = 't11'; 

        await new Promise(r => setTimeout(r, 300));
        if (!mounted) return;

        setTiles(prev => prev.map(t => t.id === idC ? { ...t, status: 'selected' } : t));
        audio.playSelect();
        await new Promise(r => setTimeout(r, 400));
        if (!mounted) return;

        setTiles(prev => prev.map(t => t.id === idD ? { ...t, status: 'swap-target' } : t));
        audio.playSelect();
        await new Promise(r => setTimeout(r, 200));
        if (!mounted) return;

        await animateSwap(idC, idD);

        setTiles(prev => {
            const next = [...prev];
            const idxC = next.findIndex(t => t.id === idC);
            const idxD = next.findIndex(t => t.id === idD);
            [next[idxC], next[idxD]] = [next[idxD], next[idxC]];
            next[idxC] = { ...next[idxC], status: 'neutral' };
            next[idxD] = { ...next[idxD], status: 'neutral' };
            return next;
        });

        await new Promise(r => setTimeout(r, 400));
        if (!mounted) return;

        audio.playRowSolved();
        setTiles(prev => prev.map((t, idx) => {
            if (idx >= 8 && idx < 12) return { ...t, status: 'solved', color: 'bg-neon-green border-white' }; 
            if (idx >= 12) return { ...t, status: 'solved', color: 'bg-neon-yellow border-white' }; 
            return t;
        }));

        setStep(4);
        await new Promise(r => setTimeout(r, 600));
        if (!mounted) return;
        
        // --- PAIR 3 (Intruders) ---
        audio.playSelect();
        setTiles(prev => prev.map(t => t.id === 't3' ? { ...t, status: 'selected' } : t));
        setStep(5);

        await new Promise(r => setTimeout(r, 800));
        if (!mounted) return;

        audio.playSelect();
        setTiles(prev => prev.map(t => t.id === 't7' ? { ...t, status: 'swap-target' } : t));
        await new Promise(r => setTimeout(r, 200));
        
        await animateSwap('t3', 't7'); 
        
        setTiles(prev => {
            const next = [...prev];
            const i1 = next.findIndex(t => t.id === 't3');
            const i2 = next.findIndex(t => t.id === 't7');
            [next[i1], next[i2]] = [next[i2], next[i1]];
            next[i1] = { ...next[i1], status: 'neutral' };
            next[i2] = { ...next[i2], status: 'neutral' };
            return next;
        });
        
        await new Promise(r => setTimeout(r, 300));
        if (!mounted) return;

        audio.playRowSolved();
        audio.playWin(); 

        setTiles(current => current.map((t, idx) => {
            if (idx < 4) return { ...t, status: 'solved', color: 'bg-neon-blue border-white' };
            if (idx >= 4 && idx < 8) return { ...t, status: 'solved', color: 'bg-neon-pink border-white' };
            if (idx >= 8 && idx < 12) return { ...t, status: 'solved', color: 'bg-neon-green border-white' };
            if (idx >= 12) return { ...t, status: 'solved', color: 'bg-neon-yellow border-white' };
            return t;
        }));

        await new Promise(r => setTimeout(r, 800));
        if (!mounted) return;
        
        setStep(6); // Trigger Hint Highlight

        await new Promise(r => setTimeout(r, 2500));
        if (!mounted) return;

        setStep(7); // Trigger Settings Highlight

        await new Promise(r => setTimeout(r, 2500));
        if (!mounted) return;

        setStep(8); // Show Start
    };

    runAutoSolve();

    return () => { mounted = false; };
  }, [isSwapMode]);

  useEffect(() => {
      if (!isSwapMode) {
          const t = setTimeout(() => {
              onComplete();
          }, 3000);
          return () => clearTimeout(t);
      }
  }, [isSwapMode, onComplete]);

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < 4; i++) {
        const rowTiles = tiles.slice(i * 4, i * 4 + 4);
        const isRowSolved = rowTiles.every(t => t.status === 'solved');
        const categoryName = rowTiles[0]?.categoryName;
        const solvedRowClass = 'bg-black border-4 border-white rounded-medium';
        
        rows.push(
            <div key={i} className={`relative w-full z-10 flex flex-col justify-center min-h-0 flex-1 overflow-visible`}>
                <div className="relative w-full h-full p-1">
                    {isRowSolved && (
                        <div className={`absolute inset-0 z-0 animate-fade-in ${solvedRowClass}`} />
                    )}
                    
                    {isRowSolved && (
                        <div className="absolute top-0 left-6 z-[100] transform" style={{ transform: 'translateY(calc(-100% + 4px))' }}>
                            <div className="animate-pop bg-black text-white px-3 py-1 rounded-t-lg text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight border-x-4 border-t-4 border-b-0 border-white shadow-[0_-4px_12px_rgba(0,0,0,0.8)] font-oswald">
                                {categoryName}
                            </div>
                        </div>
                    )}

                    <div className={`grid grid-cols-4 gap-2 w-full h-full relative z-10 transition-all duration-300 ${isRowSolved ? 'drop-shadow-xl p-3' : ''}`}>
                    {rowTiles.map((tile) => (
                        <div key={tile.id} className="relative w-full h-full">
                            <Tile 
                                data={tile} 
                                data-tile-id={tile.id}
                                onClick={() => {}} 
                                disabled={true}
                                ref={(el) => {
                                    if (el) tileRefs.current.set(tile.id, el);
                                    else tileRefs.current.delete(tile.id);
                                }}
                            />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        );
    }
    return rows;
  };

  return (
    <div className="absolute inset-0 z-[200] bg-black flex flex-col font-oswald animate-fade-in">
        {/* Use standard Header for consistency and to show hints/settings at all times */}
        <Header 
            modeName={getModeName(mode)}
            levelIndex={1}
            onOpenSettings={() => {}} // No-op during tutorial
            isReviewing={false}
            hintsEnabled={true}
            onManualHint={() => {}} // No-op during tutorial
            onToggleHints={() => {}} // Provide a dummy handler to display the hint button
        />

        <div className="flex-1 w-full relative flex flex-col pt-0 p-1 sm:p-2 min-h-0 bg-black items-center justify-center overflow-hidden">
            <div className={`w-full h-full flex flex-col items-center justify-center transition-all duration-500 ${step >= 6 ? 'blur-sm opacity-40 scale-95' : ''}`}>
                
                {/* Game Board Container - Mimics standard game sizing */}
                {/* Added overflow-visible to ensure category tabs aren't clipped */}
                <div className="w-full max-w-sm aspect-square max-h-[55vh] bg-zinc-900/50 rounded-xl p-2 mb-4 border-2 border-zinc-700 relative flex flex-col shrink-0 shadow-2xl overflow-visible mt-8">
                     <div className="w-full h-full flex flex-col gap-1">
                        {renderRows()}
                     </div>
                </div>

                {/* Instructions */}
                <div className="h-16 flex items-center justify-center mb-4 shrink-0 w-full px-4">
                     {step === 1 && (
                         <div className="bg-zinc-800 px-6 py-3 rounded-full border border-white/20 animate-pop shadow-lg text-center">
                             <p className="text-white font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">FIND 4 TILES THAT BELONG TOGETHER</p>
                         </div>
                     )}
                     {(step === 2 || step === 3) && (
                         <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-blue animate-fade-in shadow-[0_0_15px_rgba(0,229,255,0.3)] text-center">
                             <p className="text-neon-blue font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">SWAP TO MAKE A MATCH</p>
                         </div>
                     )}
                </div>
                
                <button 
                    onClick={onComplete}
                    className={`text-zinc-500 font-oswald text-sm uppercase tracking-widest hover:text-white transition-colors mt-auto pb-4 ${step >= 6 ? 'opacity-0 pointer-events-none' : ''}`}
                >
                    SKIP TUTORIAL
                </button>
            </div>
        </div>

        {/* Step 6: Hint Highlight - Pointing to the real header button location */}
        {step === 6 && (
          <div className="absolute top-[60px] right-[50px] z-[220] animate-bounce">
             <div className="relative">
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-neon-yellow absolute -top-2 right-4"></div>
                <div className="bg-zinc-800 p-3 rounded-lg border border-neon-yellow text-center shadow-[0_0_15px_rgba(255,255,0,0.3)]">
                    <p className="text-neon-yellow font-oswald text-sm font-bold uppercase">TURN HINTS<br/>ON AND OFF</p>
                </div>
             </div>
          </div>
        )}

        {/* Step 7: Settings Highlight - Pointing to the real header button location */}
        {step === 7 && (
          <div className="absolute top-[60px] right-[10px] z-[220] animate-bounce">
             <div className="relative">
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-neon-blue absolute -top-2 right-2"></div>
                <div className="bg-zinc-800 p-3 rounded-lg border border-neon-blue text-center shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                    <p className="text-neon-blue font-oswald text-sm font-bold uppercase">SETTINGS</p>
                </div>
             </div>
          </div>
        )}

        {step === 8 && (
             <div className="absolute inset-0 z-[210] flex items-center justify-center">
                 <button 
                    onClick={onComplete}
                    className="px-10 py-4 bg-black text-white border-2 border-white font-bold font-oswald text-3xl rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-[0_0_60px_rgba(255,255,255,0.6)] animate-pop"
                 >
                     START
                 </button>
             </div>
        )}
    </div>
  );
};

export default TutorialOverlay;
