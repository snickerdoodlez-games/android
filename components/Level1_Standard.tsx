import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TileData, GameMode, THEMES, LevelProps, NEON_PALETTE } from '../types';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import LevelLayout from './LevelLayout';
import { audio } from '../services/audioService';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import { shuffleArray } from '../services/csvUtils';
import { motion, AnimatePresence } from 'framer-motion';

const m = motion as any;

export default function Level1_Standard({
  csvData, onComplete, mode, levelIndex, hintsEnabled, onOpenSettings, setHintsEnabled,
  isReviewing, onNext, isAutoPlaying, themeName, stars, definitions
}: LevelProps) {
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [moves, setMoves] = useState(0);
  const [activeDefinition, setActiveDefinition] = useState<{ word: string, text: string } | null>(null);
  const [modalColor, setModalColor] = useState("");

  const startTimeRef = useRef(Date.now());
  const lastActivityRef = useRef(Date.now());
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const particleRef = useRef<ParticleHandle>(null);
  const categoryLongPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const checkMatches = useCallback((currentTiles: TileData[]) => {
    const rowCount = Math.floor(currentTiles.length / 4);
    let solvedRows = 0;
    const updatedTiles = [...currentTiles];
    let changed = false;

    for (let r = 0; r < rowCount; r++) {
      const row = updatedTiles.slice(r * 4, r * 4 + 4);
      if (row.length === 0) continue;
      if (row.every(t => t.status === 'solved')) { solvedRows++; continue; }
      if (row.every(t => t.categoryId === row[0].categoryId)) {
        changed = true; solvedRows++; audio.playRowSolved();
        const color = THEMES[0].solvedColors[r % THEMES[0].solvedColors.length];
        for (let i = r * 4; i < r * 4 + 4; i++) {
          const tile = updatedTiles[i];
          const rect = tileRefs.current.get(tile.id)?.getBoundingClientRect();
          if (rect && particleRef.current) particleRef.current.explode(rect.left + rect.width / 2, rect.top + rect.height / 2, "#FFFFFF");
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
    setIsComplete(false);
    setMoves(0);
    setIsSwapping(false);
    setSelectedId(null);

    const newTiles: TileData[] = [];
    const targetData = csvData;

    targetData.forEach((cat) => {
      cat.words.slice(0, 4).forEach((w) => {
        const cleanWord = w.toUpperCase();
        newTiles.push({
          id: Math.random().toString(36).substr(2, 9),
          word: w,
          categoryId: cat.id,
          categoryName: cat.name.includes(':') ? cat.name.split(':')[1].trim() : cat.name,
          status: 'neutral',
          isSolved: false,
          definition: cat.wordDefinitions?.[cleanWord] || definitions[cleanWord],
          categoryDefinition: cat.categoryDefinition
        });
      });
    });
    setTiles(shuffleArray(newTiles));
    setIsInitializing(false);
    startTimeRef.current = Date.now();
    lastActivityRef.current = Date.now();
  }, [csvData, definitions]);

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
      // Let tile #2 briefly use the same selected animation as tile #1 before swap begins.
      setTiles(p => p.map(t => (t.id === selectedId || t.id === id) ? { ...t, status: 'selected' } : t));
      setTimeout(() => {
        setTiles(p => p.map(t => t.id === selectedId ? { ...t, status: 'swapping' } : t.id === id ? { ...t, status: 'swap-target' } : t));
        setTimeout(() => {
          setTiles(p => {
            const n = [...p]; const t1 = n[idx1]; const t2 = n[idx2];
            n[idx1] = { ...t1, word: t2.word, categoryId: t2.categoryId, categoryName: t2.categoryName, definition: t2.definition, categoryDefinition: t2.categoryDefinition };
            n[idx2] = { ...t2, word: t1.word, categoryId: t1.categoryId, categoryName: t1.categoryName, definition: t1.definition, categoryDefinition: t1.categoryDefinition };
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
      }, 160);
    }
  }, [isComplete, isSwapping, isReviewing, selectedId, tiles, checkMatches]);

  const handleLongPress = useCallback((word: string, definition?: string) => {
    if (isReviewing || isSwapping) return;
    audio.playSelect();
    const neonColors = [
      'bg-neon-yellow-1', 'bg-neon-lime-1', 'bg-neon-lime', 'bg-neon-green-1',
      'bg-neon-green', 'bg-neon-mint-1', 'bg-neon-mint', 'bg-neon-cyan',
      'bg-neon-sky-blue', 'bg-neon-blue', 'bg-neon-violet', 'bg-neon-purple',
      'bg-neon-magenta', 'bg-neon-pink', 'bg-neon-rose', 'bg-neon-orange'
    ];
    setModalColor(neonColors[Math.floor(Math.random() * neonColors.length)]);
    setActiveDefinition({
      word: word.toUpperCase(),
      text: definition || definitions[word.toUpperCase()] || "Definition not found."
    });
  }, [isReviewing, isSwapping, definitions]);

  const handleCategoryPressStart = (catName: string, catDef?: string) => {
    if (isReviewing) return;
    categoryLongPressTimer.current = setTimeout(() => {
      handleLongPress(catName, catDef);
    }, 500);
  };

  const handleCategoryPressEnd = () => {
    if (categoryLongPressTimer.current) clearTimeout(categoryLongPressTimer.current);
  };

  useEffect(() => {
    if (!isAutoPlaying || isComplete || isSwapping || isReviewing) return;
    const timer = setTimeout(() => {
      for (let r = 0; r < tiles.length / 4; r++) {
        const row = tiles.slice(r * 4, r * 4 + 4);
        if (row.length === 0 || row.every(t => t.status === 'solved')) continue;
        const targetCatId = row[0].categoryId;
        if (row.every(t => t.categoryId === targetCatId)) {
          checkMatches(tiles);
          return;
        }
        const wrongTileIdx = row.findIndex(t => t.categoryId !== targetCatId);
        if (wrongTileIdx !== -1) {
          const globalIdx = r * 4 + wrongTileIdx;
          const correctTileIdx = tiles.findIndex((t, idx) => t.categoryId === targetCatId && idx >= (r + 1) * 4);
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
  const displayModeName = (mode === GameMode.LEVEL_SYNONYMS ? "SYNONYMS" : mode === GameMode.LEVEL_THEMED ? themeName?.toUpperCase() || "THEMED" : "CLASSIC");

  const neonHex = NEON_PALETTE[modalColor] || '#FFFFFF';

  return (
    <LevelLayout modeName={displayModeName} levelIndex={levelIndex} onOpenSettings={() => onOpenSettings()} isReviewing={isReviewing} onNext={onNext} hintsEnabled={hintsEnabled} onToggleHints={() => setHintsEnabled(!hintsEnabled)} stars={stars}>
      <ParticleOverlay ref={particleRef} />

      <div className="flex-1 flex flex-col gap-0 w-full overflow-visible min-h-0">
        {Array.from({ length: tiles.length / 4 }).map((_, r) => {
          const row = tiles.slice(r * 4, r * 4 + 4);
          if (row.length === 0) return null;
          const rowTileColor = THEMES[0].solvedColors[r % THEMES[0].solvedColors.length];
          const solved = row.every(t => t.status === 'solved');
          const firstTile = row[0];
          return (
            <div
              key={r}
              className="flex-1 relative min-h-0 overflow-visible"
            >
              {solved && <SolvedRowBackground seed={firstTile?.categoryId || r} colorClass={rowTileColor} animationKey="level1-standard" />}
              {solved && (
                <m.div
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-[-24px] left-0 z-[9000] transform -translate-y-full cursor-help touch-none"
                  onPointerDown={() => handleCategoryPressStart(firstTile.categoryName, firstTile.categoryDefinition)}
                  onPointerUp={handleCategoryPressEnd}
                  onPointerLeave={handleCategoryPressEnd}
                >
                  <div
                    className="px-3 py-1 text-[11px] md:text-xs font-black uppercase border-x-2 border-t-2 border-b-0 border-white rounded-t-lg shadow-[0_-4px_12px_rgba(0,0,0,0.8)] whitespace-nowrap active:scale-95 transition-transform"
                    style={{
                      backgroundColor: '#000000',
                      color: '#FFFFFF'
                    }}
                  >
                    {firstTile.categoryName}
                  </div>
                </m.div>
              )}
              <div className={`grid grid-cols-4 gap-0.5 w-full h-full relative z-10 transition-all duration-300 ${solved ? 'p-0.5' : 'p-0.5'}`}>
                {row.map(tile => (
                  <Tile
                    key={tile.id}
                    data={tile}
                    targetColor={rowTileColor}
                    onClick={handleTileClick}
                    onLongPress={handleLongPress}
                    ref={(el: any) => { if (el) tileRefs.current.set(tile.id, el); }}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {activeDefinition && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveDefinition(null)}
            className="fixed inset-0 z-[20000] bg-black/90 flex items-center justify-center p-8 backdrop-blur-md"
          >
            <m.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="bg-black p-10 rounded-medium max-w-sm w-full text-center relative"
              style={{
                boxShadow: `
                  0 0 0 2px #FFFFFF,
                  0 0 0 6px #000000,
                  0 0 0 14px #FFFFFF,
                  0 0 80px 20px ${neonHex}
                `
              }}
            >
              <h2
                className="text-4xl font-black uppercase mb-6 italic tracking-tighter border-b-4 border-white pb-2 inline-block text-white"
                style={{ textShadow: '4px 4px 0px rgba(0,0,0,1)' }}
              >
                {activeDefinition.word}
              </h2>
              <p
                className="text-xl md:text-2xl leading-snug font-bold uppercase font-oswald mt-4 text-white"
                style={{ textShadow: '2px 2px 0px rgba(0,0,0,1)' }}
              >
                {activeDefinition.text}
              </p>
              <div
                className="mt-10 bg-black text-white font-black py-3 px-8 inline-block uppercase italic text-sm rounded-small active:scale-95 transition-transform"
                style={{
                  boxShadow: `
                    0 0 0 2px #FFFFFF,
                    0 0 0 6px #000000
                  `
                }}
              >
                Tap to Dismiss
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </LevelLayout>
  );
}