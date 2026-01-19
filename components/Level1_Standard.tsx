
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { CSVRow, TileData, GameMode, THEMES } from '../types';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import LevelLayout from './LevelLayout';
import { getThemedCategories } from '../services/csvData';
import { getValidatedLevelData } from '../services/levelPreCheck';
import { audio } from '../services/audioService';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import { getSolvedGradient } from '../services/tileStyles';

interface Level1Props {
  csvData: CSVRow[];
  onComplete: (stats: { timeMs: number, hintsUsedCount: number, hintsUsed: number, moves: number, rowEfficiency: number, mistakes: number, solvedCategoryIds: string[], solvedWords: string[] }) => void;
  onExit: () => void;
  mode: GameMode; 
  levelIndex: number;
  onThemeChange?: (colors: string[]) => void;
  hintsEnabled: boolean;
  onOpenSettings?: (cats?: {name: string, isSolved: boolean}[]) => void;
  setHintsEnabled?: (val: boolean) => void;
  isReviewing?: boolean;
  onNext?: () => void;
  isAutoPlaying?: boolean;
}

const Level1_Standard: React.FC<Level1Props> = ({ 
  csvData, onComplete, mode, levelIndex, hintsEnabled, onOpenSettings, setHintsEnabled,
  isReviewing, onNext, isAutoPlaying
}) => {
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [moves, setMoves] = useState(0);
  const [hintTriggerCount, setHintTriggerCount] = useState(0);
  const [efficientRowsCount, setEfficientRowsCount] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [glowingRows, setGlowingRows] = useState<Set<number>>(new Set());
  const [loadError, setLoadError] = useState<string | null>(null);
  
  const lastProgressTimeRef = useRef(Date.now());
  const startTimeRef = useRef(Date.now());
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const particleRef = useRef<ParticleHandle>(null);

  useEffect(() => {
    if (isSwapping) {
      const t = setTimeout(() => {
        setIsSwapping(false);
        setSelectedId(null);
      }, 2000); // Safety timeout
      return () => clearTimeout(t);
    }
  }, [isSwapping]);

  useEffect(() => {
    setIsSwapping(false);
    setSelectedId(null);
    if (hintsEnabled) {
      lastProgressTimeRef.current = Date.now();
    }
  }, [hintsEnabled]);

  const targetCategories = useMemo(() => {
      const cats = new Map<string, { name: string, isSolved: boolean }>();
      tiles.forEach(t => {
          if (!cats.has(t.categoryId)) {
              const catTiles = tiles.filter(tile => tile.categoryId === t.categoryId);
              cats.set(t.categoryId, { name: t.categoryName, isSolved: catTiles.every(tile => tile.status === 'solved') });
          }
      });
      return Array.from(cats.values());
  }, [tiles]);

  const getModeTitle = () => {
      switch(mode) {
          case GameMode.LEVEL_SYNONYMS: return "SYNONYMS";
          case GameMode.LEVEL_THEMED: return "THEMED";
          default: return "CLASSIC";
      }
  };

  useEffect(() => {
    if (isInitializing || isComplete) return;
    const newGlowingRows = new Set<number>();
    for (let r = 0; r < tiles.length / 4; r++) {
      const row = tiles.slice(r * 4, r * 4 + 4);
      if (row.every(t => t.status === 'solved')) continue;
      
      const counts: Record<string, number> = {};
      row.forEach(t => { counts[t.categoryId] = (counts[t.categoryId] || 0) + 1; });
      
      if (Object.values(counts).some(count => count === 3)) {
        newGlowingRows.add(r);
      }
    }
    setGlowingRows(newGlowingRows);
  }, [tiles, isInitializing, isComplete]);

  const checkMatches = useCallback((currentTiles: TileData[]) => {
    const rowCount = Math.floor(currentTiles.length / 4);
    let solvedRows = 0;
    const updatedTiles = [...currentTiles];
    let changed = false;

    for (let r = 0; r < rowCount; r++) {
      const row = updatedTiles.slice(r * 4, r * 4 + 4);
      if (row.every(t => t.status === 'solved')) { solvedRows++; continue; }

      const firstId = row[0].categoryId;
      const allMatch = row.every(t => t.categoryId === firstId);

      if (allMatch && firstId !== 'blank') {
        changed = true; solvedRows++; audio.playRowSolved();
        lastProgressTimeRef.current = Date.now(); // Reset timer only on successful match
        setEfficientRowsCount(prev => prev + 1);
        
        const color = THEMES[0].solvedColors[r % THEMES[0].solvedColors.length];
        for (let i = r * 4; i < r * 4 + 4; i++) {
            const tile = updatedTiles[i];
            const rect = tileRefs.current.get(tile.id)?.getBoundingClientRect();
            if (rect && particleRef.current) {
                particleRef.current.explode(rect.left + rect.width / 2, rect.top + rect.height / 2, "#FFFFFF");
            }
            updatedTiles[i] = { ...updatedTiles[i], status: 'solved', isSolved: true, color };
        }
      }
    }

    if (changed) {
        setTiles(updatedTiles);
    } else {
        setMistakes(m => m + 1);
    }
    
    if (solvedRows === rowCount && rowCount > 0 && !isComplete) { 
      audio.playWin(); 
      setIsComplete(true);
      
      const solvedCategoryIds = Array.from(new Set(updatedTiles.map(t => t.categoryId)));
      const solvedWords = updatedTiles.map(t => t.word);

      setTimeout(() => onComplete({ 
        timeMs: Date.now() - startTimeRef.current, 
        hintsUsedCount: hintTriggerCount, 
        hintsUsed: hintTriggerCount,
        moves: moves, 
        rowEfficiency: efficientRowsCount,
        mistakes: mistakes,
        solvedCategoryIds,
        solvedWords
      }), 1000);
    }
  }, [isComplete, hintTriggerCount, moves, onComplete, efficientRowsCount, mistakes]);

  // --- AUTO PLAY LOGIC ---
  useEffect(() => {
    if (!isAutoPlaying || isComplete || isSwapping || isInitializing || isReviewing) return;

    const performMove = () => {
        if (document.hidden) return; // Stop if backgrounded

        // Logic to calculate the "Best Move"
        const ROW_SIZE = 4;
        const numRows = Math.floor(tiles.length / ROW_SIZE);
        let targetRowIndex = -1;
        
        for (let r = 0; r < numRows; r++) {
            const rowTiles = tiles.slice(r * ROW_SIZE, (r + 1) * ROW_SIZE);
            if (!rowTiles.every(t => t.status === 'solved')) {
                targetRowIndex = r;
                break;
            }
        }

        if (targetRowIndex === -1) return; // All solved

        // Identify Target Category for this row
        const availableCategories = new Set(tiles.filter(t => !t.isSolved).map(t => t.categoryId));
        if (availableCategories.size === 0) return;
        const targetCatId = Array.from(availableCategories)[0];

        // Find Source (Tile of targetCatId NOT in target row)
        const rowStart = targetRowIndex * ROW_SIZE;
        const rowEnd = rowStart + ROW_SIZE;
        
        let sourceId = null;
        for (let i = 0; i < tiles.length; i++) {
            if (i >= rowStart && i < rowEnd) continue; // Skip if already in target row
            if (tiles[i].categoryId === targetCatId && !tiles[i].isSolved) {
                sourceId = tiles[i].id;
                break;
            }
        }

        // Find Destination (Tile in target row that is NOT targetCatId)
        let destId = null;
        for (let i = rowStart; i < rowEnd; i++) {
            if (tiles[i].categoryId !== targetCatId && !tiles[i].isSolved) {
                destId = tiles[i].id;
                break;
            }
        }

        // Execution
        if (sourceId && destId) {
            // If nothing selected, select Source
            if (!selectedId) {
                handleTileClick(sourceId);
            } 
            // If Source is selected, click Dest
            else if (selectedId === sourceId) {
                handleTileClick(destId);
            }
            // If Dest is selected (rare/weird state), click Source
            else if (selectedId === destId) {
                handleTileClick(sourceId);
            }
            // If random other tile selected, deselect it
            else {
                handleTileClick(selectedId);
            }
        }
    };

    const timer = setTimeout(performMove, 400); // 400ms pace
    return () => clearTimeout(timer);
  }, [isAutoPlaying, isComplete, isSwapping, tiles, isInitializing, isReviewing, selectedId]);

  useEffect(() => {
    // If no data, render empty board to avoid infinite loading
    if (!csvData || csvData.length === 0) {
        setLoadError("No game data available");
        setIsInitializing(false);
        return;
    }
    
    try {
        let sourcePool = csvData;
        if (mode === GameMode.LEVEL_THEMED) {
            const themePackage = getThemedCategories(csvData.length, csvData);
            sourcePool = themePackage.categories;
        }

        const validatedCategories = getValidatedLevelData(7, sourcePool, 4);

        if (validatedCategories.length < 4) {
             setLoadError("Not enough valid categories found");
             setIsInitializing(false);
             return;
        }

        const newTiles: TileData[] = [];
        
        for (const cat of validatedCategories) {
            // Note: getValidatedLevelData now shuffles words, so taking first 4 is safe and random
            const selectedWords = cat.words.slice(0, 4);
            
            selectedWords.forEach(w => {
                newTiles.push({ 
                    id: Math.random().toString(36).substr(2, 9), 
                    word: w, 
                    categoryId: cat.id, 
                    categoryName: cat.name.includes(':') ? cat.name.split(':')[1].trim() : cat.name, 
                    status: 'neutral', 
                    isSolved: false 
                });
            });
        }

        setTiles(newTiles.sort(() => 0.5 - Math.random()));
        setIsComplete(false); 
        setIsInitializing(false); 
        setMoves(0); 
        setMistakes(0);
        startTimeRef.current = Date.now(); 
        lastProgressTimeRef.current = Date.now();
        setHintTriggerCount(0); 
        setEfficientRowsCount(0);
        setLoadError(null);
    } catch (e) {
        console.error("Level init error", e);
        setLoadError("Failed to initialize level");
        setIsInitializing(false);
    }
  }, [csvData, mode, levelIndex]);

  const triggerHint = useCallback(() => {
    if (isComplete || isSwapping || !hintsEnabled) return;
    const neutralTiles = tiles.filter(t => t.status === 'neutral' || t.status === 'selected');
    if (neutralTiles.length < 2) return;

    const possibleHintCats: string[] = Array.from(new Set(neutralTiles.map(t => t.categoryId)));
    if (possibleHintCats.length === 0) return;

    const categoriesWithLocked = new Map<string, number>();
    for (let r = 0; r < tiles.length / 4; r++) {
        const row = tiles.slice(r * 4, r * 4 + 4);
        const lockedInRow = row.filter(t => t.status === 'locked');
        if (lockedInRow.length > 0) categoriesWithLocked.set(lockedInRow[0].categoryId, r);
    }

    let targetCatId: string | undefined = possibleHintCats.find(cid => categoriesWithLocked.has(cid));
    if (!targetCatId) targetCatId = possibleHintCats[Math.floor(Math.random() * possibleHintCats.length)];
    if (!targetCatId) return;

    const catNeutralTiles = neutralTiles.filter(t => t.categoryId === targetCatId);
    if (catNeutralTiles.length < 2) return; 

    const pairToLock = catNeutralTiles.slice(0, 2);
    let targetRowIndex = categoriesWithLocked.get(targetCatId) ?? -1;

    if (targetRowIndex === -1) {
        const availableRows: number[] = [];
        for (let r = 0; r < tiles.length / 4; r++) {
            const row = tiles.slice(r * 4, r * 4 + 4);
            const isSolved = row.every(t => t.status === 'solved');
            const hasLocked = row.some(t => t.status === 'locked');
            if (!isSolved && !hasLocked) availableRows.push(r);
        }
        if (availableRows.length === 0) return;
        targetRowIndex = availableRows[Math.floor(Math.random() * availableRows.length)];
    }

    const next = [...tiles];
    const rowStart = targetRowIndex * 4;

    pairToLock.forEach((tileToLock) => {
        // Find a slot in target row that isn't locked/solved
        let targetSlot = -1;
        for (let s = 0; s < 4; s++) { // 4 columns
            if (next[rowStart + s].status !== 'locked' && next[rowStart + s].status !== 'solved') {
                targetSlot = rowStart + s;
                break;
            }
        }
        
        if (targetSlot !== -1) {
             const currentIdx = next.findIndex(t => t.id === tileToLock.id);
             if (currentIdx !== targetSlot) {
                 // Swap
                 const temp = next[targetSlot];
                 next[targetSlot] = { ...next[currentIdx], status: 'locked' };
                 next[currentIdx] = { ...temp, status: temp.status === 'locked' ? 'locked' : 'neutral' };
             } else {
                 next[targetSlot] = { ...next[targetSlot], status: 'locked' };
             }
        }
    });
    
    setTiles(next);
    audio.playTick();
    setHintTriggerCount(prev => prev + 1);
    lastProgressTimeRef.current = Date.now();
    
    // Trigger match check after a short delay
    setTimeout(() => checkMatches(next), 50);
  }, [tiles, isComplete, isSwapping, hintsEnabled, checkMatches]);

  useEffect(() => {
    if (isComplete || isInitializing || !hintsEnabled) return;
    const interval = setInterval(() => {
        if (document.hidden) return; // Prevent hints when backgrounded
        if (Date.now() - lastProgressTimeRef.current > 90000) { // 90s
            triggerHint();
        }
    }, 1000);
    return () => clearInterval(interval);
  }, [isComplete, isInitializing, hintsEnabled, tiles, triggerHint]);

  const handleTileClick = (id: string) => {
    if (isComplete || isSwapping) return;
    const tile = tiles.find(t => t.id === id);
    if (!tile || tile.status === 'solved' || tile.status === 'locked') return;
    
    if (selectedId === null) {
      audio.playSelect(); 
      setSelectedId(id);
      setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'selected' } : t));
    } else if (selectedId === id) {
      setSelectedId(null); 
      setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'neutral' } : t));
    } else {
      const idx1 = tiles.findIndex(t => t.id === (selectedId as string));
      const idx2 = tiles.findIndex(t => t.id === id);
      if (idx1 === -1 || idx2 === -1) return;

      setIsSwapping(true); 
      setMoves(m => m + 1); 
      audio.playSwap();
      // Removed lastProgressTimeRef update here.
      
      // 1. Set Colors: First selection (Blue) stays Blue (swapping), Second becomes Pink (swap-target)
      setTiles(prev => prev.map(t => {
        if (t.id === selectedId) return { ...t, status: 'swapping' };
        if (t.id === id) return { ...t, status: 'swap-target' };
        return t;
      }));
      
      // 2. Perform Data Swap (Words fade out/in)
      setTimeout(() => {
          setTiles(prev => {
              const next = [...prev];
              const t1 = next[idx1];
              const t2 = next[idx2];
              
              // Swap content but keep statuses/ids to animate
              next[idx1] = { ...t1, word: t2.word, categoryId: t2.categoryId, categoryName: t2.categoryName, isEmoji: t2.isEmoji };
              next[idx2] = { ...t2, word: t1.word, categoryId: t1.categoryId, categoryName: t1.categoryName, isEmoji: t1.isEmoji };

              return next;
          });

          // 3. Wait for text fade (approx 0.4s total cycle), then fade background
          setTimeout(() => {
              setTiles(prev => prev.map(t => (t.id === selectedId || t.id === id) ? { ...t, status: 'fading-out-bg' } : t));
              
              // 4. Fade background (0.25s) then neutralize
              setTimeout(() => {
                  setTiles(prev => {
                      const final = prev.map(t => (t.status === 'fading-out-bg') ? { ...t, status: 'neutral' as const } : t);
                      setTimeout(() => checkMatches(final), 50);
                      return final;
                  });
                  setSelectedId(null);
                  setIsSwapping(false);
              }, 250);
          }, 450);
      }, 50);
    }
  };

  if (isInitializing) {
      return (
          <div className="flex-1 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"></div>
          </div>
      );
  }

  if (loadError) {
      return (
          <div className="flex-1 flex items-center justify-center p-4">
              <div className="text-center text-neon-red font-oswald text-xl border-2 border-neon-red p-4 rounded-lg bg-black">
                  {loadError}
                  <button onClick={() => window.location.reload()} className="block mt-4 w-full py-2 bg-white text-black font-bold uppercase rounded hover:bg-zinc-200">
                      Retry
                  </button>
              </div>
          </div>
      );
  }

  return (
    <LevelLayout 
      modeName={getModeTitle()} 
      levelIndex={levelIndex} 
      onOpenSettings={() => onOpenSettings?.(targetCategories)} 
      isReviewing={isReviewing} 
      onNext={onNext}
      hintsEnabled={hintsEnabled}
      onToggleHints={() => setHintsEnabled?.(!hintsEnabled)}
    >
      <ParticleOverlay ref={particleRef} />
      <div className="flex-1 flex flex-col gap-1.5 overflow-visible pointer-events-auto">
         {Array.from({ length: tiles.length / 4 }).map((_, r) => {
             const row = tiles.slice(r * 4, r * 4 + 4);
             // Safety check in case of empty rows
             if (row.length === 0) return null;
             
             const solved = row.every(t => t.status === 'solved');
             const isGlowing = glowingRows.has(r);
             
             return (
               <div key={r} className="flex-1 relative min-h-0 overflow-visible">
                  {solved && <SolvedRowBackground seed={row[0].categoryId} />}
                  <div className={`
                    absolute inset-0 z-0 transition-opacity duration-500 rounded-medium
                    ${isGlowing && !solved ? 'bg-white/5 border border-white/40 animate-pulse-highlight' : 'opacity-0'}
                  `} />
                  {solved && (
                    <div className="absolute top-0 left-8 z-[100] transform -translate-y-[calc(100%-4px)]">
                      <div className="px-3 py-0.5 rounded-t-lg text-[9px] font-black uppercase bg-black border-x-4 border-t-4 border-white text-white whitespace-nowrap shadow-[0_-4px_12px_rgba(0,0,0,0.5)]">
                        {row[0].categoryName}
                      </div>
                    </div>
                  )}
                  <div className={`grid grid-cols-4 gap-1.5 w-full h-full relative z-10 rounded-small transition-all duration-300 ${solved ? 'p-3' : 'p-1'}`}>
                    {row.map(tile => (
                      <Tile 
                        key={tile.id} 
                        data={tile} 
                        onClick={handleTileClick} 
                        ref={el => { if(el) tileRefs.current.set(tile.id, el); }} 
                      />
                    ))}
                  </div>
               </div>
             );
         })}
      </div>
    </LevelLayout>
  );
};

export default Level1_Standard;
