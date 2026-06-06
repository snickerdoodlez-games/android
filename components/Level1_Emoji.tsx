import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TileData, GameMode, THEMES } from '../types';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import LevelLayout from './LevelLayout';
import { audio } from '../services/audioService';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import { shuffleArray } from '../services/csvUtils';

const Level1_Emoji: React.FC<any> = ({ 
    csvData, onComplete, levelIndex, hintsEnabled, setHintsEnabled, onOpenSettings, isReviewing, onNext, isAutoPlaying, stars, mode
}) => {
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [moves, setMoves] = useState(0);

  const startTimeRef = useRef(Date.now());
  const lastActivityRef = useRef(Date.now());
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const particleRef = useRef<ParticleHandle>(null);
  const GRID_WIDTH = 3;

  const checkMatches = useCallback((currentTiles: TileData[]) => {
    const updatedTiles = [...currentTiles];
    let changed = false;
    let solvedRows = 0;
    const rowCount = updatedTiles.length / GRID_WIDTH;

    for (let r = 0; r < rowCount; r++) {
      const row = updatedTiles.slice(r * GRID_WIDTH, r * GRID_WIDTH + GRID_WIDTH);
      if (row.every(t => t.status === 'solved')) { solvedRows++; continue; }
      if (row.every(t => t.categoryId === row[0].categoryId)) {
        changed = true; solvedRows++; audio.playRowSolved();
        const color = THEMES[0].solvedColors[r % THEMES[0].solvedColors.length];
        for (let i = r * GRID_WIDTH; i < r * GRID_WIDTH + GRID_WIDTH; i++) {
          const rect = tileRefs.current.get(updatedTiles[i].id)?.getBoundingClientRect();
          if (rect && particleRef.current) particleRef.current.explode(rect.left + rect.width / 2, rect.top + rect.height / 2, "#FFFFFF");
          updatedTiles[i] = { ...updatedTiles[i], status: 'solved', color, isSolved: true };
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
        cat.words.slice(0, 3).forEach((emoji: string) => {
             newTiles.push({ id: Math.random().toString(36).substr(2, 9), word: emoji, categoryId: cat.id, categoryName: cat.name, status: 'neutral', isEmoji: true, isSolved: false });
        });
    });
    setTiles(shuffleArray(newTiles)); 
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

  // AUTO PLAY LOGIC
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
          const correctTileIdx = tiles.findIndex((t, idx) => t.categoryId === targetCatId && idx >= (r+1)*GRID_WIDTH);
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

  const currentRowCount = tiles.length / GRID_WIDTH;

  return (
    <LevelLayout modeName="EMOJI" levelIndex={levelIndex} onOpenSettings={() => onOpenSettings?.([])} isReviewing={isReviewing} onNext={onNext} hintsEnabled={hintsEnabled} onToggleHints={() => setHintsEnabled(!hintsEnabled)} stars={stars}>
      <ParticleOverlay ref={particleRef} />
      <div className="flex-1 flex flex-col gap-0 h-full w-full overflow-visible relative">
         {Array.from({ length: currentRowCount }).map((_, r) => {
             const row = tiles.slice(r * GRID_WIDTH, r * GRID_WIDTH + GRID_WIDTH);
             const solved = row.every(t => t.status === 'solved');
             const firstTile = row[0];
             return (
               <div key={r} className="flex-1 relative min-h-0 overflow-visible">
                  {solved && <SolvedRowBackground seed={firstTile.categoryId} />}
                  {solved && (
                    <div className="absolute top-0 left-6 z-[100] transform -translate-y-full">
                      <div className="px-3 py-1 text-[10px] font-black uppercase bg-black border-2 border-white text-white rounded-t-lg shadow-[0_-4px_12px_rgba(0,0,0,0.8)] whitespace-nowrap">
                        {firstTile.categoryName}
                      </div>
                    </div>
                  )}
                  <div className={`grid grid-cols-3 gap-0.5 w-full h-full relative z-10 transition-all duration-300 ${solved ? 'p-[10px]' : 'p-0.5'}`}>
                    {row.map(tile => <Tile key={tile.id} data={tile} onClick={handleTileClick} rowCount={currentRowCount} ref={el => { if(el) tileRefs.current.set(tile.id, el); }} />)}
                  </div>
               </div>
             );
         })}
      </div>
    </LevelLayout>
  );
};
export default Level1_Emoji;
