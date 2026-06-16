import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { TileData, GameMode, THEMES, CSVRow, SOLVED_COLORS } from '../types';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import LevelLayout from './LevelLayout';
import CategoryTabLabel from './CategoryTabLabel';
import { audio } from '../services/audioService';
import { shuffleArray, distributeTilesAcrossRows } from '../services/csvUtils';

export default function Level1_Standard({ 
  csvData, onComplete, mode, levelIndex, hintsEnabled, onOpenSettings, setHintsEnabled,
  isReviewing, onNext, isAutoPlaying, themeName, stars, hintCount, onHintClick, hintsDisabledForLevel
}: any) {
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [moves, setMoves] = useState(0);

  const tilesRef = useRef<TileData[]>([]);
  const startTimeRef = useRef(Date.now());
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const isCompleteRef = useRef(false);
  const movesRef = useRef(0);
  const onCompleteRef = useRef(onComplete);
  const isSwappingRef = useRef(false);
  const selectedIdRef = useRef<string | null>(null);
  const isReviewingRef = useRef(false);
  const hintedRowsRef = useRef(new Set<number>());
  onCompleteRef.current = onComplete;
  isCompleteRef.current = isComplete;
  movesRef.current = moves;
  isReviewingRef.current = isReviewing;
  tilesRef.current = tiles;

  const checkMatches = useCallback((currentTiles: TileData[]) => {
    const rowCount = Math.floor(currentTiles.length / 4);
    let solvedRows = 0;
    const updatedTiles = [...currentTiles];
    let changed = false;
    const newlySolvedRowIndices: number[] = [];

    for (let r = 0; r < rowCount; r++) {
      const row = updatedTiles.slice(r * 4, r * 4 + 4);
      if (row.every(t => t.status === 'solved')) { solvedRows++; continue; }
      if (row.every(t => t.categoryId === row[0].categoryId)) {
        changed = true;
        newlySolvedRowIndices.push(r);
        solvedRows++;
      }
    }

    if (!changed) return;

    audio.playRowSolved();

    if (solvedRows === rowCount && rowCount > 0 && !isCompleteRef.current) {
      for (const r of newlySolvedRowIndices) {
        const color = THEMES[0].solvedColors[r % THEMES[0].solvedColors.length];
        for (let i = r * 4; i < r * 4 + 4; i++) {
          updatedTiles[i] = { ...updatedTiles[i], status: 'solved', isSolved: true, color };
        }
      }
      setTiles(updatedTiles);
      audio.playWin(); setIsComplete(true);
      setTimeout(() => onCompleteRef.current({ timeMs: Date.now() - startTimeRef.current, moves: movesRef.current, solvedCategoryIds: Array.from(new Set(updatedTiles.map(t => `${t.categoryId} | ${t.categoryName}`))), solvedWords: updatedTiles.map(t => `${t.word}|${t.categoryName}`) }), 1200);
    } else {
      for (const r of newlySolvedRowIndices) {
        const color = THEMES[0].solvedColors[r % THEMES[0].solvedColors.length];
        const staggerDelay = r * 150;
        for (let i = 0; i < 4; i++) {
          const tileIdx = r * 4 + i;
          const tileDelay = staggerDelay + i * 80;
          setTimeout(() => {
            setTiles(prev => {
              const next = [...prev];
              if (next[tileIdx]) {
                next[tileIdx] = { ...next[tileIdx], status: 'solved', isSolved: true, color };
              }
              return next;
            });
          }, tileDelay);
        }
      }
    }
  }, []);

  useEffect(() => {
    const newTiles: TileData[] = [];
    csvData.forEach((cat: any) => {
        cat.words.forEach((w: string, wIdx: number) => {
            const wordDef = cat.definitions?.[wIdx];
            const definition = (wordDef && wordDef.trim().length > 0) ? wordDef : (cat.catDict || '');
            newTiles.push({ id: Math.random().toString(36).substr(2, 9), word: w, categoryId: cat.id, categoryName: cat.name.includes(':') ? cat.name.split(':')[1].trim() : cat.name, definition, status: 'neutral', isSolved: false });
        });
    });
    setTiles(distributeTilesAcrossRows(newTiles, 4));
    setIsInitializing(false);
    startTimeRef.current = Date.now();
  }, [csvData]);

  const handleTileClick = useCallback((id: string) => {
    if (isCompleteRef.current || isSwappingRef.current || isReviewingRef.current) return;
    const currentTiles = tilesRef.current;
    const tile = currentTiles.find(t => t.id === id);
    if (!tile || tile.status === 'solved' || tile.status === 'locked') return;
    const firstId = selectedIdRef.current;

    if (firstId === null) {
      audio.playSelect(); selectedIdRef.current = id;
      setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'selected' as const } : t));
      return;
    }
    if (firstId === id) {
      selectedIdRef.current = null;
      setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'neutral' as const } : t));
      return;
    }
    isSwappingRef.current = true; selectedIdRef.current = null;
    audio.playSwap(); movesRef.current++; setMoves(movesRef.current);
    const secondId = id;
    setTiles(prev => prev.map(t => 
      t.id === firstId ? { ...t, status: 'swapping' as const } : 
      t.id === secondId ? { ...t, status: 'swap-target' as const } : t
    ));
    setTimeout(() => {
      setTiles(p => {
        const i1 = p.findIndex(t => t.id === firstId);
        const i2 = p.findIndex(t => t.id === secondId);
        if (i1 === -1 || i2 === -1) return p;
        const n = [...p]; const t1 = n[i1]; const t2 = n[i2];
        n[i1] = { ...t1, word: t2.word, categoryId: t2.categoryId, categoryName: t2.categoryName, definition: t2.definition };
        n[i2] = { ...t2, word: t1.word, categoryId: t1.categoryId, categoryName: t1.categoryName, definition: t1.definition };
        return n;
      });
      setTimeout(() => {
        setTiles(p => {
          const f = p.map(t => (t.id === firstId || t.id === secondId) ? { ...t, status: 'neutral' as const } : t);
          setTimeout(() => checkMatches(f), 0);
          return f;
        });
        isSwappingRef.current = false;
      }, 450);
    }, 50);
  }, [checkMatches]);

  useEffect(() => {
    if (!isAutoPlaying || isComplete || isReviewing) return;
    let isCancelled = false; let timerId: ReturnType<typeof setTimeout> | null = null;
    const autoTick = () => {
      if (isCancelled || isCompleteRef.current || isReviewingRef.current) return;
      if (isSwappingRef.current) { timerId = setTimeout(autoTick, 100); return; }
      const currentTiles = tilesRef.current;
      if (currentTiles.length === 0) { timerId = setTimeout(autoTick, 200); return; }
      for (let r = 0; r < currentTiles.length / 4; r++) {
        const row = currentTiles.slice(r * 4, r * 4 + 4);
        if (row.every(t => t.status === 'solved')) continue;
        const targetCatId = row[0].categoryId;
        if (row.every(t => t.categoryId === targetCatId)) { checkMatches(currentTiles); timerId = setTimeout(autoTick, 200); return; }
        const wrongTileIdx = row.findIndex(t => t.categoryId !== targetCatId);
        if (wrongTileIdx !== -1) {
          const globalIdx = r * 4 + wrongTileIdx;
          const correctTileIdx = currentTiles.findIndex((t, idx) => t.categoryId === targetCatId && t.status !== 'solved' && idx >= (r+1)*4);
          if (correctTileIdx !== -1) {
            if (selectedIdRef.current === null) handleTileClick(currentTiles[globalIdx].id);
            else handleTileClick(currentTiles[correctTileIdx].id);
            timerId = setTimeout(autoTick, 600); return;
          }
        }
      }
      timerId = setTimeout(autoTick, 200);
    };
    timerId = setTimeout(autoTick, 200);
    return () => { isCancelled = true; if (timerId) clearTimeout(timerId); };
  }, [isAutoPlaying, isComplete, isReviewing]);

  // CELEBRATION: When all rows are solved, cycle colors starting from actual solved row colors
  useEffect(() => {
    if (!isComplete) return;
    
    // Determine starting colors based on actual solved row colors
    let solvedRowColors: string[] = [];
    const rowCount = Math.floor(tiles.length / 4);
    for (let r = 0; r < rowCount; r++) {
      const row = tiles.slice(r * 4, r * 4 + 4);
      if (row.every(t => t.status === 'solved')) {
        solvedRowColors.push(row[0].color || SOLVED_COLORS[r % SOLVED_COLORS.length]);
      }
    }
    
    let colorIdx = 0;
    let colorTimeout: ReturnType<typeof setTimeout> | null = null;
    let interval: ReturnType<typeof setInterval> | null = null;
    // If we have solved row colors, start cycling from their colors
    if (solvedRowColors.length > 0) {
      const startColor = solvedRowColors[0];
      const startIdx = SOLVED_COLORS.indexOf(startColor);
      if (startIdx >= 0) colorIdx = startIdx;
    }

    const startCycling = () => {
      interval = setInterval(() => {
        colorIdx = (colorIdx + 1) % SOLVED_COLORS.length;
        setTiles(prev => prev.map(t => {
          if (t.status === 'solved') {
            const rowIdx = Math.floor(prev.indexOf(t) / 4);
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
  }, [isComplete, tiles]);

  const [isSquishing, setIsSquishing] = useState(false);
  useEffect(() => {
    if (isComplete) {
      const t = setTimeout(() => setIsSquishing(true), 200);
      return () => clearTimeout(t);
    } else {
      setIsSquishing(false);
    }
  }, [isComplete]);

  const rowElements = useMemo(() => {
    if (tiles.length === 0) return null;
    return Array.from({ length: tiles.length / 4 }).map((_, r) => {
      const row = tiles.slice(r * 4, r * 4 + 4);
      const solved = row.every(t => t.status === 'solved');
      const catRow = csvData && csvData.length > 0 ? csvData.find((cr: any) => cr.id === row[0].categoryId) : null;
      const catDict = catRow?.catDict || '';
      return (
        <div key={r} className={`flex-1 relative min-h-0 overflow-visible ${isSquishing ? 'level-complete-squish' : ''}`}>
          {solved && <SolvedRowBackground seed={row[0].categoryId} />}
          {solved && (
            <div className="absolute top-0 left-6 z-[100] transform -translate-y-full">
              <div className="px-3 py-1 text-[clamp(0.625rem,2.5vw,0.875rem)] font-black uppercase bg-black border-2 border-white text-white rounded-t-lg shadow-[0_-4px_12px_rgba(0,0,0,0.8)] whitespace-nowrap">
                <CategoryTabLabel name={row[0].categoryName} catDict={catDict} />
              </div>
            </div>
          )}
           <div className={`grid grid-cols-4 gap-0.5 w-full h-full relative z-10 transition-all duration-300 ${solved ? 'p-[10px]' : 'p-0.5'}`}>
             {row.map((tile, colIdx) => {
               const globalIdx = r * 4 + colIdx;
               return <Tile key={tile.id} data={tile} onClick={handleTileClick} gridEntryDelay={0.05 + r * 0.1} ref={(el: any) => { if(el) tileRefs.current.set(tile.id, el); }} />;
             })}
          </div>
        </div>
      );
    });
  }, [tiles, handleTileClick, csvData, isSquishing]);

  const performHint = useCallback(() => {
    const currentTiles = tilesRef.current;
    if (currentTiles.length === 0 || isCompleteRef.current || isReviewingRef.current || isSwappingRef.current) return;
    const rowCount = Math.floor(currentTiles.length / 4);
    const colCount = 4;
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
          const srcIdx = matchingPool[s];
          const dstIdx = wrongIndices[s];
          const srcTile = n[srcIdx];
          const dstTile = n[dstIdx];
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
  }, [checkMatches]);
  
  useEffect(() => {
    const handler = () => { if (hintsEnabled && !hintsDisabledForLevel) performHint(); };
    window.addEventListener('hint-used', handler);
    return () => window.removeEventListener('hint-used', handler);
  }, [hintsEnabled, hintsDisabledForLevel, performHint]);

  if (isInitializing) return null;
  const displayModeName = mode === GameMode.LEVEL_SYNONYMS ? "SYNONYMS" : "WORD PAIRING";

  return (
    <LevelLayout 
      modeName={displayModeName} levelIndex={levelIndex} 
      onOpenSettings={() => onOpenSettings?.([])} isReviewing={isReviewing} onNext={onNext} 
      hintsEnabled={hintsEnabled} onToggleHints={() => setHintsEnabled?.(!hintsEnabled)} 
      stars={stars} hintCount={hintCount} onHintClick={onHintClick} hintsDisabledForLevel={hintsDisabledForLevel}
    >
      <div className="flex-1 flex flex-col gap-0 h-full w-full overflow-visible relative">
        {rowElements}
      </div>
    </LevelLayout>
  );
}