import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TileData, GameMode, THEMES } from '../types';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import LevelLayout from './LevelLayout';
import { audio } from '../services/audioService';
import { shuffleArray } from '../services/csvUtils';

export default function Level_Themed({ 
  csvData, onComplete, mode, levelIndex, hintsEnabled, onOpenSettings, setHintsEnabled,
  isReviewing, onNext, isAutoPlaying, themeName, stars
}: any) {
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [moves, setMoves] = useState(0);

  const startTimeRef = useRef(Date.now());
  const lastActivityRef = useRef(Date.now());
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const tilesRef = useRef(tiles);
  tilesRef.current = tiles;

  const checkMatches = useCallback((currentTiles: TileData[]) => {
    const rowCount = Math.floor(currentTiles.length / 4);
    let solvedRows = 0;
    const updatedTiles = [...currentTiles];
    let changed = false;

    for (let r = 0; r < rowCount; r++) {
      const row = updatedTiles.slice(r * 4, r * 4 + 4);
      if (row.every(t => t.status === 'solved')) { solvedRows++; continue; }
      if (row.every(t => t.categoryId === row[0].categoryId)) {
        changed = true; solvedRows++; audio.playRowSolved();
        const color = THEMES[0].solvedColors[r % THEMES[0].solvedColors.length];
        for (let i = r * 4; i < r * 4 + 4; i++) {
            const tile = updatedTiles[i];
            updatedTiles[i] = { ...updatedTiles[i], status: 'solved', isSolved: true, color };
        }
      }
    }
    if (changed) setTiles(updatedTiles);
    if (solvedRows === rowCount && rowCount > 0 && !isComplete) { 
      audio.playWin(); setIsComplete(true);
      setTimeout(() => onComplete({ timeMs: Date.now() - startTimeRef.current, moves, solvedCategoryIds: Array.from(new Set(updatedTiles.map(t => t.categoryId))), solvedWords: updatedTiles.map(t => t.word) }), 1000);
    }
  }, [isComplete, moves, onComplete]);

  useEffect(() => {
    const newTiles: TileData[] = [];
    csvData.forEach((cat: any) => {
        cat.words.forEach((w: string, wIdx: number) => {
            const wordDef = cat.definitions?.[wIdx];
            const definition = (wordDef && wordDef.trim().length > 0) ? wordDef : (cat.catDict || '');
            newTiles.push({ id: Math.random().toString(36).substr(2, 9), word: w, categoryId: cat.id, categoryName: cat.name.includes(':') ? cat.name.split(':')[1].trim() : cat.name, definition, status: 'neutral', isSolved: false });
        });
    });
    setTiles(shuffleArray(newTiles));
    setIsInitializing(false);
    startTimeRef.current = Date.now();
    lastActivityRef.current = Date.now();
  }, [csvData]);

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
              n[idx1] = { ...t1, word: t2.word, categoryId: t2.categoryId, categoryName: t2.categoryName, definition: t2.definition };
              n[idx2] = { ...t2, word: t1.word, categoryId: t1.categoryId, categoryName: t1.categoryName, definition: t1.definition };
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

  // AUTO PLAY LOGIC
  useEffect(() => {
    if (!isAutoPlaying || isComplete || isSwapping || isReviewing) return;
    const timer = setTimeout(() => {
      for (let r = 0; r < tiles.length / 4; r++) {
        const row = tiles.slice(r * 4, r * 4 + 4);
        if (row.every(t => t.status === 'solved')) continue;
        const targetCatId = row[0].categoryId;
        if (row.every(t => t.categoryId === targetCatId)) { checkMatches(tiles); return; }
        const wrongTileIdx = row.findIndex(t => t.categoryId !== targetCatId);
        if (wrongTileIdx !== -1) {
          const globalIdx = r * 4 + wrongTileIdx;
          const correctTileIdx = tiles.findIndex((t, idx) => t.categoryId === targetCatId && idx >= (r+1)*4);
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

  if (isInitializing) return null;
  const displayModeName = themeName || "THEME";

  return (
    <LevelLayout modeName={displayModeName} levelIndex={levelIndex} onOpenSettings={() => onOpenSettings?.([])} isReviewing={isReviewing} onNext={onNext} hintsEnabled={hintsEnabled} onToggleHints={() => setHintsEnabled?.(!hintsEnabled)} stars={stars}>
      <div className="flex-1 flex flex-col gap-0 h-full w-full overflow-visible relative">
         {Array.from({ length: tiles.length / 4 }).map((_, r) => {
             const row = tiles.slice(r * 4, r * 4 + 4);
             const solved = row.every(t => t.status === 'solved');
             return (
               <div key={r} className="flex-1 relative min-h-0 overflow-visible">
                  {solved && <SolvedRowBackground seed={row[0].categoryId} />}
                  {solved && (
                    <div className="absolute top-0 left-6 z-[100] transform -translate-y-full">
                      <div className="px-3 py-1 text-[clamp(0.625rem,2.5vw,0.875rem)] font-black uppercase bg-black border-2 border-white text-white rounded-t-lg shadow-[0_-4px_12px_rgba(0,0,0,0.8)] whitespace-nowrap">
                        {row[0].categoryName}
                      </div>
                    </div>
                  )}
                  <div className={`grid grid-cols-4 gap-0.5 w-full h-full relative z-10 transition-all duration-300 ${solved ? 'p-[10px]' : 'p-0.5'}`}>
                    {row.map(tile => <Tile key={tile.id} data={tile} onClick={handleTileClick} ref={(el: any) => { if(el) tileRefs.current.set(tile.id, el); }} />)}
                  </div>
               </div>
             );
         })}
      </div>
    </LevelLayout>
  );
}
