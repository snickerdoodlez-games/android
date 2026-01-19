
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { TileData, THEMES } from '../types';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import LevelLayout from './LevelLayout';
import { getEmojiData } from '../services/emojiData';
import { getValidatedLevelData } from '../services/levelPreCheck';
import { audio } from '../services/audioService';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import { getSolvedGradient } from '../services/tileStyles';

interface LevelEmojiProps {
  onComplete: (stats: { timeMs: number, hintsUsedCount: number, hintsUsed: number, moves: number, rowEfficiency: number, mistakes: number, solvedCategoryIds: string[], solvedWords: string[] }) => void;
  onExit: () => void;
  levelIndex: number;
  onThemeChange?: (colors: string[]) => void;
  hintsEnabled: boolean;
  setHintsEnabled: (val: boolean) => void;
  onOpenSettings?: (cats?: {name: string, isSolved: boolean}[]) => void;
  isReviewing?: boolean;
  onNext?: () => void;
  isAutoPlaying?: boolean;
}

const Level1_Emoji: React.FC<LevelEmojiProps> = ({ 
    onComplete, levelIndex, hintsEnabled, setHintsEnabled, onOpenSettings, isReviewing, onNext, isAutoPlaying
}) => {
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [moves, setMoves] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [hintTriggerCount, setHintTriggerCount] = useState(0);
  const [efficientRowsCount, setEfficientRowsCount] = useState(0);
  const [glowingRows, setGlowingRows] = useState<Set<number>>(new Set());

  const startTimeRef = useRef(Date.now());
  const lastProgressTimeRef = useRef(Date.now());
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const particleRef = useRef<ParticleHandle>(null);
  const GRID_WIDTH = 3; 

  useEffect(() => {
    if (isSwapping) {
      const t = setTimeout(() => {
        setIsSwapping(false);
        setSelectedId(null);
      }, 2000);
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

  useEffect(() => {
    if (isInitializing || isComplete) return;
    const newGlowingRows = new Set<number>();
    for (let r = 0; r < tiles.length / GRID_WIDTH; r++) {
      const row = tiles.slice(r * GRID_WIDTH, r * GRID_WIDTH + GRID_WIDTH);
      if (row.every(t => t.status === 'solved')) continue;
      const counts: Record<string, number> = {};
      row.forEach(t => { counts[t.categoryId] = (counts[t.categoryId] || 0) + 1; });
      if (Object.values(counts).some(count => count === 2)) {
        newGlowingRows.add(r);
      }
    }
    setGlowingRows(newGlowingRows);
  }, [tiles, isInitializing, isComplete]);

  const checkMatches = useCallback((currentTiles: TileData[]) => {
    const updatedTiles = [...currentTiles];
    let changed = false;
    let solvedRows = 0;
    const rowCount = updatedTiles.length / GRID_WIDTH;

    for (let r = 0; r < rowCount; r++) {
      const row = updatedTiles.slice(r * GRID_WIDTH, r * GRID_WIDTH + GRID_WIDTH);
      if (row.every(t => t.status === 'solved')) {
          solvedRows++;
          continue;
      }
      if (row.every(t => t.categoryId === row[0].categoryId)) {
        changed = true; 
        solvedRows++;
        audio.playRowSolved();
        lastProgressTimeRef.current = Date.now(); // Reset timer only on successful match
        setEfficientRowsCount(prev => prev + 1);
        
        const color = THEMES[0].solvedColors[r % THEMES[0].solvedColors.length];
        for (let i = r * GRID_WIDTH; i < r * GRID_WIDTH + GRID_WIDTH; i++) {
          const tileId = updatedTiles[i].id;
          const rect = tileRefs.current.get(tileId)?.getBoundingClientRect();
          if (rect && particleRef.current) {
            particleRef.current.explode(rect.left + rect.width / 2, rect.top + rect.height / 2, "#FFFFFF");
          }
          updatedTiles[i] = { ...updatedTiles[i], status: 'solved', color, isSolved: true };
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
        mistakes: mistakes,
        rowEfficiency: efficientRowsCount,
        solvedCategoryIds,
        solvedWords
      }), 1000);
    }
  }, [isComplete, moves, onComplete, hintTriggerCount, mistakes, efficientRowsCount]);

  // --- AUTO PLAY LOGIC ---
  useEffect(() => {
    if (!isAutoPlaying || isComplete || isSwapping || isInitializing || isReviewing) return;

    const performMove = () => {
        if (document.hidden) return; // Prevent logic in background

        const ROW_SIZE = GRID_WIDTH; // 3 for Emoji
        const numRows = Math.floor(tiles.length / ROW_SIZE);
        let targetRowIndex = -1;
        
        for (let r = 0; r < numRows; r++) {
            const rowTiles = tiles.slice(r * ROW_SIZE, (r + 1) * ROW_SIZE);
            if (!rowTiles.every(t => t.status === 'solved')) {
                targetRowIndex = r;
                break;
            }
        }

        if (targetRowIndex === -1) return; 

        // Identify a target category
        const availableCategories = new Set(tiles.filter(t => !t.isSolved).map(t => t.categoryId));
        if (availableCategories.size === 0) return;
        
        const targetCatId = Array.from(availableCategories)[0];

        // Find Source
        const rowStart = targetRowIndex * ROW_SIZE;
        const rowEnd = rowStart + ROW_SIZE;
        
        let sourceId = null;
        for (let i = 0; i < tiles.length; i++) {
            if (i >= rowStart && i < rowEnd) continue; 
            if (tiles[i].categoryId === targetCatId && !tiles[i].isSolved) {
                sourceId = tiles[i].id;
                break;
            }
        }

        // Find Destination
        let destId = null;
        for (let i = rowStart; i < rowEnd; i++) {
            if (tiles[i].categoryId !== targetCatId && !tiles[i].isSolved) {
                destId = tiles[i].id;
                break;
            }
        }

        // Execute Move
        if (sourceId && destId) {
            if (!selectedId) {
                handleTileClick(sourceId);
            } else if (selectedId === sourceId) {
                handleTileClick(destId);
            } else if (selectedId === destId) {
                handleTileClick(sourceId);
            } else {
                handleTileClick(selectedId);
            }
        }
    };

    const timer = setTimeout(performMove, 400);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, isComplete, isSwapping, tiles, isInitializing, isReviewing, selectedId]);

  useEffect(() => {
    const rawEmojiData = getEmojiData();
    const TARGET_ROWS = 7;
    const validatedCategories = getValidatedLevelData(TARGET_ROWS, rawEmojiData, 3);

    const newTiles: TileData[] = [];
    
    for (const cat of validatedCategories) {
        const uniqueSelection = cat.words.slice(0, 3);
        
        uniqueSelection.forEach(emoji => {
             newTiles.push({ 
                 id: Math.random().toString(36).substr(2, 9), 
                 word: emoji, 
                 categoryId: cat.id, 
                 categoryName: cat.name, 
                 status: 'neutral', 
                 isEmoji: true,
                 isSolved: false
             });
        });
    }

    setTiles(newTiles.sort(() => 0.5 - Math.random())); 
    setIsInitializing(false); 
    setMoves(0); 
    setMistakes(0);
    setEfficientRowsCount(0);
    startTimeRef.current = Date.now(); 
    lastProgressTimeRef.current = Date.now();
  }, [levelIndex]);

  const triggerHint = () => {
    if (isComplete || isSwapping || !hintsEnabled) return;
    const neutralTiles = tiles.filter(t => t.status === 'neutral' || t.status === 'selected');
    if (neutralTiles.length < 2) return;

    const possibleHintCats: string[] = Array.from(new Set(neutralTiles.map(t => t.categoryId)));
    if (possibleHintCats.length === 0) return;

    const categoriesWithLocked = new Map<string, number>(); 
    for (let r = 0; r < tiles.length / GRID_WIDTH; r++) {
        const row = tiles.slice(r * GRID_WIDTH, r * GRID_WIDTH + GRID_WIDTH);
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
        for (let r = 0; r < tiles.length / GRID_WIDTH; r++) {
            const row = tiles.slice(r * GRID_WIDTH, r * GRID_WIDTH + GRID_WIDTH);
            if (!row.every(t => t.status === 'solved') && !row.some(t => t.status === 'locked')) availableRows.push(r);
        }
        if (availableRows.length === 0) return;
        targetRowIndex = availableRows[Math.floor(Math.random() * availableRows.length)];
    }

    const next = [...tiles];
    const rowStart = targetRowIndex * GRID_WIDTH;
    
    pairToLock.forEach((tileToLock) => {
        let targetSlot = -1;
        for (let s = 0; s < GRID_WIDTH; s++) {
            if (next[rowStart + s].status !== 'locked' && next[rowStart + s].status !== 'solved') {
                targetSlot = rowStart + s;
                break;
            }
        }
        if (targetSlot === -1) return;
        
        const currentIdx = next.findIndex(t => t.id === tileToLock.id);
        if (currentIdx !== targetSlot) {
            const temp = next[targetSlot];
            next[targetSlot] = { ...next[currentIdx], status: 'locked' };
            next[currentIdx] = { ...temp, status: temp.status === 'locked' ? 'locked' : 'neutral' };
        } else {
            next[targetSlot] = { ...next[targetSlot], status: 'locked' };
        }
    });

    setTiles(next);
    audio.playTick();
    setHintTriggerCount(prev => prev + 1);
    lastProgressTimeRef.current = Date.now();
    
    setTimeout(() => checkMatches(next), 50);
  };

  useEffect(() => {
    if (isComplete || isInitializing || !hintsEnabled) return;
    const interval = setInterval(() => {
      if (document.hidden) return; // Prevent hints when backgrounded
      if (Date.now() - lastProgressTimeRef.current > 90000) triggerHint();
    }, 1000);
    return () => clearInterval(interval);
  }, [isComplete, isInitializing, hintsEnabled, tiles]);

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

  if (isInitializing) return null;

  return (
    <LevelLayout 
      modeName="EMOJI" 
      levelIndex={levelIndex} 
      onOpenSettings={() => onOpenSettings?.(targetCategories)} 
      isReviewing={isReviewing} 
      onNext={onNext}
      hintsEnabled={hintsEnabled}
      onToggleHints={() => setHintsEnabled(!hintsEnabled)}
    >
      <ParticleOverlay ref={particleRef} />
      <div className="flex-1 flex flex-col gap-1.5 overflow-visible pointer-events-auto">
         {Array.from({ length: tiles.length / GRID_WIDTH }).map((_, r) => {
             const row = tiles.slice(r * GRID_WIDTH, r * GRID_WIDTH + GRID_WIDTH);
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
                  <div className={`grid grid-cols-3 gap-1.5 w-full h-full relative z-10 rounded-small transition-all duration-300 ${solved ? 'p-3' : 'p-1'}`}>
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
export default Level1_Emoji;
