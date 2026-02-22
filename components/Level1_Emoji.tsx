import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { TileData, THEMES, LevelProps, NEON_PALETTE } from '../types';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import LevelLayout from './LevelLayout';
import { audio } from '../services/audioService';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import { shuffleArray } from '../services/csvUtils';

const m = motion as any;

const Level1_Emoji: React.FC<LevelProps> = ({
  csvData, onComplete, levelIndex, hintsEnabled, setHintsEnabled, onOpenSettings, isReviewing, onNext, isAutoPlaying, stars
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
      if (row.length === 0) continue;
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
    setIsComplete(false);
    setMoves(0);
    setIsSwapping(false);
    setSelectedId(null);

    const newTiles: TileData[] = [];
    csvData.forEach((cat) => {
      cat.words.slice(0, 3).forEach((emoji) => {
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
      if (idx1 === -1 || idx2 === -1) return;
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
          }, 260);
        }, 320);
      }, 40);
    }
  }, [isComplete, isSwapping, isReviewing, selectedId, tiles, checkMatches]);

  useEffect(() => {
    if (!isAutoPlaying || isComplete || isSwapping || isReviewing) return;
    const timer = setTimeout(() => {
      const rowCount = tiles.length / GRID_WIDTH;
      for (let r = 0; r < rowCount; r++) {
        const row = tiles.slice(r * GRID_WIDTH, r * GRID_WIDTH + GRID_WIDTH);
        if (row.length === 0 || row.every(t => t.status === 'solved')) continue;

        const targetCatId = row[0].categoryId;
        if (row.every(t => t.categoryId === targetCatId)) {
          checkMatches(tiles);
          return;
        }

        const wrongTileIdx = row.findIndex(t => t.categoryId !== targetCatId);
        if (wrongTileIdx !== -1) {
          const globalIdx = r * GRID_WIDTH + wrongTileIdx;
          const correctTileIdx = tiles.findIndex((t, idx) => t.categoryId === targetCatId && idx >= (r + 1) * GRID_WIDTH);
          if (correctTileIdx !== -1) {
            if (selectedId === null) handleTileClick(tiles[globalIdx].id);
            else handleTileClick(tiles[correctTileIdx].id);
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
    <LevelLayout modeName="EMOJI" levelIndex={levelIndex} onOpenSettings={() => onOpenSettings()} isReviewing={isReviewing} onNext={onNext} hintsEnabled={hintsEnabled} onToggleHints={() => setHintsEnabled(!hintsEnabled)} stars={stars}>
      <ParticleOverlay ref={particleRef} />
      <div className="flex-1 flex flex-col gap-0 w-full overflow-visible min-h-0">
        {Array.from({ length: currentRowCount }).map((_, r) => {
          const row = tiles.slice(r * GRID_WIDTH, r * GRID_WIDTH + GRID_WIDTH);
          if (row.length === 0) return null;
          const rowColor = THEMES[0].solvedColors[r % THEMES[0].solvedColors.length];
          const solved = row.every(t => t.status === 'solved');
          const firstTile = row[0];
          return (
            <div key={r} className="flex-1 relative min-h-0 overflow-visible">
              {solved && <SolvedRowBackground seed={firstTile.categoryId} colorClass={rowColor} animationKey="level1-emoji" />}
              {solved && (
                <m.div
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-[-24px] left-0 z-[9000] transform -translate-y-full"
                >
                  <div
                    className="px-3 py-1 text-[11px] md:text-xs font-black uppercase border-x-2 border-t-2 border-b-0 border-white rounded-t-lg shadow-[0_-4px_12px_rgba(0,0,0,0.8)] whitespace-nowrap"
                    style={{
                      backgroundColor: '#000000',
                      color: '#FFFFFF'
                    }}
                  >
                    {firstTile.categoryName}
                  </div>
                </m.div>
              )}
              <div className={`grid grid-cols-3 gap-0.5 w-full h-full min-h-0 relative z-10 transition-all duration-300 ${solved ? 'p-0.5' : 'p-0.5'}`}>
                {row.map(tile => <Tile key={tile.id} data={tile} targetColor={rowColor} rowCount={currentRowCount} onClick={handleTileClick} ref={el => { if (el) tileRefs.current.set(tile.id, el); }} />)}
              </div>
            </div>
          );
        })}
      </div>
    </LevelLayout>
  );
};
export default Level1_Emoji;