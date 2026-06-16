import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TileData, GameMode, THEMES, SOLVED_COLORS } from '../types';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import LevelLayout from './LevelLayout';
import CategoryTabLabel from './CategoryTabLabel';
import { audio } from '../services/audioService';
import { shuffleArray, distributeTilesAcrossRows } from '../services/csvUtils';

const Level1_Emoji: React.FC<any> = ({ 
    csvData, onComplete, levelIndex, hintsEnabled, setHintsEnabled, onOpenSettings, isReviewing, onNext, isAutoPlaying, stars, mode, hintCount, onHintClick, hintsDisabledForLevel
}) => {
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [moves, setMoves] = useState(0);

  const tilesRef = useRef<TileData[]>([]);
  const startTimeRef = useRef(Date.now());
  const lastActivityRef = useRef(Date.now());
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const isCompleteRef = useRef(false);
  const isSwappingRef = useRef(false);
  const isReviewingRef = useRef(false);
  const selectedIdRef = useRef<string | null>(null);
  const onCompleteRef = useRef(onComplete);
  const hintedRowsRef = useRef(new Set<number>());
  const GRID_WIDTH = 3;
  onCompleteRef.current = onComplete;
  isCompleteRef.current = isComplete;
  isSwappingRef.current = isSwapping;
  isReviewingRef.current = isReviewing;
  selectedIdRef.current = selectedId;
  tilesRef.current = tiles;

  const checkMatches = useCallback((currentTiles: TileData[]) => {
    const updatedTiles = [...currentTiles]; let changed = false; let solvedRows = 0;
    const rowCount = updatedTiles.length / GRID_WIDTH;
    for (let r = 0; r < rowCount; r++) {
      const row = updatedTiles.slice(r * GRID_WIDTH, r * GRID_WIDTH + GRID_WIDTH);
      if (row.every(t => t.status === 'solved')) { solvedRows++; continue; }
      if (row.every(t => t.categoryId === row[0].categoryId)) {
        changed = true; solvedRows++; audio.playRowSolved();
        const color = THEMES[0].solvedColors[r % THEMES[0].solvedColors.length];
        for (let i = r * GRID_WIDTH; i < r * GRID_WIDTH + GRID_WIDTH; i++) {
          updatedTiles[i] = { ...updatedTiles[i], status: 'solved', color, isSolved: true };
        }
      }
    }
    if (changed) setTiles(updatedTiles);
    if (solvedRows === rowCount && rowCount > 0 && !isComplete) {
      audio.playWin(); setIsComplete(true);
      setTimeout(() => onComplete({ timeMs: Date.now() - startTimeRef.current, moves, solvedCategoryIds: Array.from(new Set(updatedTiles.map(t => `${t.categoryId} | ${t.categoryName}`))), solvedWords: updatedTiles.map(t => `${t.word}|${t.categoryName}`) }), 1000);
    }
  }, [isComplete, moves, onComplete]);

  useEffect(() => {
    const newTiles: TileData[] = [];
    csvData.forEach((cat: any) => {
        cat.words.slice(0, 3).forEach((emoji: string) => {
             newTiles.push({ id: Math.random().toString(36).substr(2, 9), word: emoji, categoryId: cat.id, categoryName: cat.name, status: 'neutral', isEmoji: true, isSolved: false });
        });
    });
    setTiles(distributeTilesAcrossRows(newTiles, GRID_WIDTH));
    setIsInitializing(false);
    startTimeRef.current = Date.now();
    lastActivityRef.current = Date.now();
  }, [csvData, levelIndex]);

  const handleTileClick = useCallback((id: string) => {
    lastActivityRef.current = Date.now();
    if (isComplete || isSwapping || isReviewing) return;
    const tile = tiles.find(t => t.id === id);
    if (!tile || tile.status === 'solved' || tile.status === 'locked') return;
    if (selectedId === null) {
      audio.playSelect(); setSelectedId(id);
      setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'selected' } : t));
    } else if (selectedId === id) {
      setSelectedId(null); setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'neutral' } : t));
    } else {
      const idx1 = tiles.findIndex(t => t.id === selectedId);
      const idx2 = tiles.findIndex(t => t.id === id);
      setIsSwapping(true); setMoves(m => m + 1); audio.playSwap();
      setTiles(p => p.map(t => t.id === selectedId ? { ...t, status: 'swapping' } : t.id === id ? { ...t, status: 'swap-target' } : t));
      setTimeout(() => {
          setTiles(p => {
              const n = [...p]; const t1 = n[idx1]; const t2 = n[idx2];
              n[idx1] = { ...t1, word: t2.word, categoryId: t2.categoryId, categoryName: t2.categoryName, isEmoji: t2.isEmoji };
              n[idx2] = { ...t2, word: t1.word, categoryId: t1.categoryId, categoryName: t1.categoryName, isEmoji: t1.isEmoji };
              return n;
          });
          setTimeout(() => {
              setTiles(p => p.map(t => (t.id === selectedId || t.id === id) ? { ...t, status: 'fading-out-bg' } : t));
              setTimeout(() => {
                  setTiles(p => {
                      const f = p.map(t => (t.status === 'fading-out-bg') ? { ...t, status: 'neutral' as const } : t);
                      setTimeout(() => checkMatches(f), 50); return f;
                  });
                  setSelectedId(null); setIsSwapping(false);
              }, 400);
          }, 400);
      }, 50);
    }
  }, [isComplete, isSwapping, isReviewing, selectedId, tiles, checkMatches]);

  useEffect(() => {
    if (!isAutoPlaying || isComplete || isSwapping || isReviewing) return;
    const timer = setTimeout(() => {
      for (let r = 0; r < tiles.length / GRID_WIDTH; r++) {
        const row = tiles.slice(r * GRID_WIDTH, r * GRID_WIDTH + GRID_WIDTH);
        if (row.every(t => t.status === 'solved')) continue;
        const targetCatId = row[0].categoryId;
        if (row.every(t => t.categoryId === targetCatId)) { checkMatches(tiles); return; }
        const wrongTileIdx = row.findIndex(t => t.categoryId !== targetCatId);
        if (wrongTileIdx !== -1) {
          const globalIdx = r * GRID_WIDTH + wrongTileIdx;
          const correctTileIdx = tiles.findIndex((t, idx) => t.categoryId === targetCatId && t.status !== 'solved' && idx >= (r+1)*GRID_WIDTH);
          if (correctTileIdx !== -1) {
             if (selectedId === null) { handleTileClick(tiles[globalIdx].id); }
             else { handleTileClick(tiles[correctTileIdx].id); }
             return;
          }
        }
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, isComplete, isSwapping, isReviewing, tiles, selectedId, handleTileClick, checkMatches]);

  const performHint = useCallback(() => {
    const currentTiles = tilesRef.current;
    if (currentTiles.length === 0 || isCompleteRef.current || isReviewingRef.current || isSwappingRef.current) return;
    const rowCount = Math.floor(currentTiles.length / GRID_WIDTH); const colCount = GRID_WIDTH;
    const hintedRows = hintedRowsRef.current;
    const solvedColors = THEMES[0].solvedColors;
    
    const shuffledRows = Array.from({ length: rowCount }, (_, i) => i);
    for (let i = shuffledRows.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [shuffledRows[i], shuffledRows[j]] = [shuffledRows[j], shuffledRows[i]]; }
    
    for (const r of shuffledRows) {
      if (hintedRows.has(r)) continue;
      const rowStart = r * colCount;
      const row = currentTiles.slice(rowStart, rowStart + colCount);
      if (row.every(t => t.status === 'solved')) continue;
      
      const catCounts: Record<string, number> = {};
      for (const t of row) { if (t.status !== 'solved' && t.status !== 'locked') catCounts[t.categoryId] = (catCounts[t.categoryId] || 0) + 1; }
      let targetCatId = row[0].categoryId;
      let maxCount = 0;
      for (const [cid, count] of Object.entries(catCounts)) { if (count > maxCount) { maxCount = count; targetCatId = cid; } }
      
      if (row.every(t => t.categoryId === targetCatId)) continue;
      
      const matchingPool: number[] = [];
      for (let i = 0; i < currentTiles.length; i++) {
        if (Math.floor(i / colCount) === r) continue;
        const t = currentTiles[i];
        if (t.categoryId === targetCatId && t.status !== 'solved' && t.status !== 'locked') matchingPool.push(i);
      }
      
      const wrongIndices: number[] = [];
      for (let i = 0; i < colCount; i++) {
        const t = row[i];
        if (t.categoryId !== targetCatId && t.status !== 'solved' && t.status !== 'locked') wrongIndices.push(rowStart + i);
      }
      
      const swapCount = Math.min(wrongIndices.length, matchingPool.length);
      if (swapCount === 0) continue;
      
      hintedRows.add(r);
      
      setTiles(p => {
        const n = [...p];
        const color = solvedColors[r % solvedColors.length];
        for (let s = 0; s < swapCount; s++) {
          const srcIdx = matchingPool[s]; const dstIdx = wrongIndices[s];
          const srcTile = n[srcIdx]; const dstTile = n[dstIdx];
          n[dstIdx] = { ...srcTile, status: 'neutral' as const };
          n[srcIdx] = { ...dstTile, status: 'neutral' as const };
        }
        for (let i = 0; i < colCount; i++) {
          const idx = rowStart + i;
          if (n[idx] && n[idx].status !== 'solved') {
            n[idx] = { ...n[idx], status: 'solved' as const, isSolved: true, color };
          }
        }
        setTimeout(() => checkMatches(n), 50);
        return n;
      });
      audio.playRowSolved();
      window.dispatchEvent(new CustomEvent('hint-applied'));
      return;
    }
  }, []);
  
  useEffect(() => {
    const handler = () => { if (hintsEnabled && !hintsDisabledForLevel) performHint(); };
    window.addEventListener('hint-used', handler);
    return () => window.removeEventListener('hint-used', handler);
  }, [hintsEnabled, hintsDisabledForLevel, performHint]);

  // CELEBRATION: When all rows are solved, cycle through alternating neon colors
  // Start after a 0.75s delay so all rows have their initial colors set before cycling
  useEffect(() => {
    if (!isComplete) return;
    let colorIdx = 0;
    let colorTimeout: ReturnType<typeof setTimeout> | null = null;
    let interval: ReturnType<typeof setInterval> | null = null;

    const startCycling = () => {
      interval = setInterval(() => {
        colorIdx = (colorIdx + 1) % SOLVED_COLORS.length;
        setTiles(prev => prev.map(t => {
          if (t.status === 'solved') {
            const rowIdx = Math.floor(prev.indexOf(t) / GRID_WIDTH);
            const offsetColor = SOLVED_COLORS[(colorIdx + rowIdx) % SOLVED_COLORS.length];
            return { ...t, color: offsetColor };
          }
          return t;
        }));
      }, 100);
    };

    colorTimeout = setTimeout(startCycling, 750);

    return () => {
      if (colorTimeout) clearTimeout(colorTimeout);
      if (interval) clearInterval(interval);
    };
  }, [isComplete]);

  if (isInitializing) return null;
  const currentRowCount = tiles.length / GRID_WIDTH;

  return (
    <LevelLayout modeName="EMOJI" levelIndex={levelIndex} onOpenSettings={() => onOpenSettings?.([])} isReviewing={isReviewing} onNext={onNext} hintsEnabled={hintsEnabled} onToggleHints={() => setHintsEnabled(!hintsEnabled)} stars={stars} hintCount={hintCount} onHintClick={onHintClick} hintsDisabledForLevel={hintsDisabledForLevel}>
      <div className="flex-1 flex flex-col gap-0 h-full w-full overflow-visible relative">
         {Array.from({ length: currentRowCount }).map((_, r) => {
             const row = tiles.slice(r * GRID_WIDTH, r * GRID_WIDTH + GRID_WIDTH);
             const solved = row.every(t => t.status === 'solved');
             const firstTile = row[0];
             const catRow = csvData && csvData.length > 0 ? csvData.find((cr: any) => cr.id === firstTile.categoryId) : null;
             const catDict = catRow?.catDict || '';
             return (
               <div key={r} className="flex-1 relative min-h-0 overflow-visible">
                  {solved && <SolvedRowBackground seed={firstTile.categoryId} />}
                  {solved && (
                    <div className="absolute top-0 left-6 z-[100] transform -translate-y-full">
                      <div className="px-3 py-1 text-[10px] font-black uppercase bg-black border-2 border-white text-white rounded-t-lg shadow-[0_-4px_12px_rgba(0,0,0,0.8)] whitespace-nowrap">
                        <CategoryTabLabel name={firstTile.categoryName} catDict={catDict} />
                      </div>
                    </div>
                  )}
                  <div className={`grid grid-cols-3 gap-0.5 w-full h-full relative z-10 transition-all duration-300 ${solved ? 'p-[10px]' : 'p-0.5'}`}>
                    {row.map((tile, colIdx) => <Tile key={tile.id} data={tile} onClick={handleTileClick} rowCount={currentRowCount} gridEntryDelay={0.05 + r * 0.1} ref={el => { if(el) tileRefs.current.set(tile.id, el); }} />)}
                  </div>
               </div>
             );
         })}
      </div>
    </LevelLayout>
  );
};
export default Level1_Emoji;