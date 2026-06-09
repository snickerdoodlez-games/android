import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { TileData, GameMode, THEMES, CSVRow } from '../types';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import LevelLayout from './LevelLayout';
import { audio } from '../services/audioService';
import { shuffleArray } from '../services/csvUtils';

export default function Level1_Standard({ 
  csvData, onComplete, mode, levelIndex, hintsEnabled, onOpenSettings, setHintsEnabled,
  isReviewing, onNext, isAutoPlaying, themeName, stars
}: any) {
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [moves, setMoves] = useState(0);

  // ALL mutable state lives in refs for synchronous access without stale closures
  const tilesRef = useRef<TileData[]>([]);
  const startTimeRef = useRef(Date.now());
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const isCompleteRef = useRef(false);
  const movesRef = useRef(0);
  const onCompleteRef = useRef(onComplete);
  const isSwappingRef = useRef(false);
  const selectedIdRef = useRef<string | null>(null);
  const isReviewingRef = useRef(false);
  onCompleteRef.current = onComplete;
  isCompleteRef.current = isComplete;
  movesRef.current = moves;
  isReviewingRef.current = isReviewing;

  // Keep tilesRef in sync with tiles state for synchronous reads in callbacks
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
            updatedTiles[i] = { ...updatedTiles[i], status: 'solved', isSolved: true, color };
        }
      }
    }
    if (changed) setTiles(updatedTiles);
    if (solvedRows === rowCount && rowCount > 0 && !isCompleteRef.current) { 
      audio.playWin(); setIsComplete(true);
      setTimeout(() => onCompleteRef.current({ timeMs: Date.now() - startTimeRef.current, moves: movesRef.current, solvedCategoryIds: Array.from(new Set(updatedTiles.map(t => t.categoryId))), solvedWords: updatedTiles.map(t => t.word) }), 1000);
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
    setTiles(shuffleArray(newTiles));
    setIsInitializing(false);
    startTimeRef.current = Date.now();
  }, [csvData]);

  // All logic uses refs for synchronous reads. No stale closures.
  // All setTiles calls are top-level (never inside another updater).
  const handleTileClick = useCallback((id: string) => {
    // Guard: no clicks when complete, swapping, or reviewing
    if (isCompleteRef.current || isSwappingRef.current || isReviewingRef.current) return;

    // Read current tile data from ref (always up to date)
    const currentTiles = tilesRef.current;
    const tile = currentTiles.find(t => t.id === id);
    if (!tile || tile.status === 'solved' || tile.status === 'locked') return;

    const firstId = selectedIdRef.current;

    if (firstId === null) {
      // --- FIRST SELECTION ---
      audio.playSelect();
      selectedIdRef.current = id;
      setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'selected' as const } : t));
      return;
    }

    if (firstId === id) {
      // --- DESELECT ---
      selectedIdRef.current = null;
      setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'neutral' as const } : t));
      return;
    }

    // --- SWAP TWO TILES ---

    // Lock clicks, clear selection, play sound, increment moves
    isSwappingRef.current = true;
    selectedIdRef.current = null;
    audio.playSwap();
    movesRef.current++;
    setMoves(movesRef.current);

    const secondId = id;

    // Setup visual swapping state
    setTiles(prev => prev.map(t => 
      t.id === firstId ? { ...t, status: 'swapping' as const } : 
      t.id === secondId ? { ...t, status: 'swap-target' as const } : t
    ));

    // After 50ms, swap the word data, then animate back to neutral and check matches
    setTimeout(() => {
      setTiles(p => {
        const i1 = p.findIndex(t => t.id === firstId);
        const i2 = p.findIndex(t => t.id === secondId);
        if (i1 === -1 || i2 === -1) return p;
        const n = [...p];
        const t1 = n[i1]; const t2 = n[i2];
        n[i1] = { ...t1, word: t2.word, categoryId: t2.categoryId, categoryName: t2.categoryName, definition: t2.definition };
        n[i2] = { ...t2, word: t1.word, categoryId: t1.categoryId, categoryName: t1.categoryName, definition: t1.definition };
        return n;
      });

      // After 450ms, reset to neutral and check matches (single transition, no double fade)
      setTimeout(() => {
        setTiles(p => {
          const f = p.map(t => 
            (t.id === firstId || t.id === secondId) ? { ...t, status: 'neutral' as const } : t
          );
          // Defer checkMatches to next tick so state is committed first
          setTimeout(() => checkMatches(f), 0);
          return f;
        });
        isSwappingRef.current = false;
      }, 450);
    }, 50);

  }, [checkMatches]); // Stable - only depends on checkMatches which is also stable

  // AUTO PLAY LOGIC - Self-chaining timer loop that checks refs for state
  useEffect(() => {
    if (!isAutoPlaying || isComplete || isReviewing) return;
    
    let isCancelled = false;
    let timerId: ReturnType<typeof setTimeout> | null = null;
    
    const autoTick = () => {
      if (isCancelled || isCompleteRef.current || isReviewingRef.current) return;
      
      // If a swap animation is in progress, wait for it to finish
      if (isSwappingRef.current) {
        timerId = setTimeout(autoTick, 100);
        return;
      }
      
      const currentTiles = tilesRef.current;
      if (currentTiles.length === 0) {
        timerId = setTimeout(autoTick, 200);
        return;
      }
      
      // Scan each row for work to do
      for (let r = 0; r < currentTiles.length / 4; r++) {
        const row = currentTiles.slice(r * 4, r * 4 + 4);
        if (row.every(t => t.status === 'solved')) continue;
        
        const targetCatId = row[0].categoryId;
        
        // Row tiles already all match - trigger solved check
        if (row.every(t => t.categoryId === targetCatId)) {
          checkMatches(currentTiles);
          timerId = setTimeout(autoTick, 200);
          return;
        }
        
        // Find a wrong tile in this row and a correct tile from a later row
        const wrongTileIdx = row.findIndex(t => t.categoryId !== targetCatId);
        if (wrongTileIdx !== -1) {
          const globalIdx = r * 4 + wrongTileIdx;
          const correctTileIdx = currentTiles.findIndex((t, idx) => t.categoryId === targetCatId && idx >= (r+1)*4);
          if (correctTileIdx !== -1) {
            if (selectedIdRef.current === null) {
              handleTileClick(currentTiles[globalIdx].id);
            } else {
              handleTileClick(currentTiles[correctTileIdx].id);
            }
            // Chain next tick after swap animation completes (~500ms)
            timerId = setTimeout(autoTick, 600);
            return;
          }
        }
      }
      
      // No work found - check again later
      timerId = setTimeout(autoTick, 200);
    };
    
    // Start the auto-play chain
    timerId = setTimeout(autoTick, 200);
    
    return () => {
      isCancelled = true;
      if (timerId) clearTimeout(timerId);
    };
  }, [isAutoPlaying, isComplete, isReviewing]);

  const rowElements = useMemo(() => {
    if (tiles.length === 0) return null;
    return Array.from({ length: tiles.length / 4 }).map((_, r) => {
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
    });
  }, [tiles, handleTileClick]);

  if (isInitializing) return null;
  const displayModeName = mode === GameMode.LEVEL_SYNONYMS ? "SYNONYMS" : "WORD PAIRING";

  return (
    <LevelLayout modeName={displayModeName} levelIndex={levelIndex} onOpenSettings={() => onOpenSettings?.([])} isReviewing={isReviewing} onNext={onNext} hintsEnabled={hintsEnabled} onToggleHints={() => setHintsEnabled?.(!hintsEnabled)} stars={stars}>
      <div className="flex-1 flex flex-col gap-0 h-full w-full overflow-visible relative">
        {rowElements}
      </div>
    </LevelLayout>
  );
}
