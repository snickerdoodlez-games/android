import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CSVRow, TileData, GameMode, THEMES } from '../types';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import LevelLayout from './LevelLayout';
import { getThemedCategories } from '../services/csvData';
import { getValidatedLevelData } from '../services/levelPreCheck';
import { audio } from '../services/audioService';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import { shuffleArray } from '../services/csvUtils';

interface Level1Props {
  // Added key to satisfy strict JSX attribute checking in App.tsx
  key?: React.Key;
  csvData: CSVRow[];
  onComplete: (stats: any) => void;
  onExit: () => void;
  mode: GameMode; 
  levelIndex: number;
  hintsEnabled: boolean;
  onOpenSettings?: (cats?: {name: string, isSolved: boolean}[]) => void;
  setHintsEnabled?: (val: boolean) => void;
  isReviewing?: boolean;
  onNext?: () => void;
  isAutoPlaying?: boolean;
  themeName?: string;
}

export default function Level1_Standard({ 
  csvData, onComplete, onExit, mode, levelIndex, hintsEnabled, onOpenSettings, setHintsEnabled,
  isReviewing, onNext, isAutoPlaying, themeName
}: Level1Props) {
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [moves, setMoves] = useState(0);
  const [hintTriggerCount, setHintTriggerCount] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [loadError, setLoadError] = useState<string | null>(null);
  const lastProgressTimeRef = useRef(Date.now());
  const startTimeRef = useRef(Date.now());
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const particleRef = useRef<ParticleHandle>(null);

  const checkMatches = useCallback((currentTiles: TileData[]) => {
    const rowCount = Math.floor(currentTiles.length / 4);
    let solvedRows = 0;
    const updatedTiles = [...currentTiles];
    let changed = false;

    for (let r = 0; r < rowCount; r++) {
      const row = updatedTiles.slice(r * 4, r * 4 + 4);
      if (row.every(t => t.status === 'solved')) { solvedRows++; continue; }
      const firstId = row[0].categoryId;
      if (row.every(t => t.categoryId === firstId)) {
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
      const solvedCategoryIds = Array.from(new Set(updatedTiles.map(t => t.categoryId)));
      const solvedWords = updatedTiles.map(t => t.word);
      setTimeout(() => onComplete({ 
        timeMs: Date.now() - startTimeRef.current, 
        hintsUsedCount: hintTriggerCount, 
        moves: moves, 
        mistakes: mistakes,
        solvedCategoryIds,
        solvedWords
      }), 3000);
    }
  }, [isComplete, hintTriggerCount, moves, onComplete, mistakes]);

  useEffect(() => {
    if (!csvData || csvData.length === 0) { setLoadError("No game data"); setIsInitializing(false); return; }
    try {
        let sourcePool = csvData;
        
        // If mode is THEMED, we expect exactly 7 rows already prepared by levelContent.ts
        const requiredRows = 7;
        const validatedCategories = getValidatedLevelData(requiredRows, sourcePool, 4);
        
        if (validatedCategories.length < requiredRows) { 
            // Fallback for non-themed or small sets
            setLoadError("Not enough categories"); 
            setIsInitializing(false); 
            return; 
        }

        const newTiles: TileData[] = [];
        validatedCategories.forEach(cat => {
            cat.words.slice(0, 4).forEach(w => {
                newTiles.push({ 
                  id: Math.random().toString(36).substr(2, 9), 
                  word: w, 
                  categoryId: cat.id, 
                  categoryName: cat.name.includes(':') ? cat.name.split(':')[1].trim() : cat.name, 
                  status: 'neutral', 
                  isSolved: false 
                });
            });
        });
        setTiles(shuffleArray(newTiles));
        setIsInitializing(false); setMoves(0); setMistakes(0);
        startTimeRef.current = Date.now(); lastProgressTimeRef.current = Date.now();
    } catch (e) { setLoadError("Init failure"); setIsInitializing(false); }
  }, [csvData, mode, levelIndex]);

  // --- AUTO PLAY LOGIC ---
  useEffect(() => {
    if (!isAutoPlaying || isComplete || isSwapping || isInitializing || isReviewing) return;

    const performMove = () => {
      if (document.hidden) return;

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

      if (targetRowIndex === -1) return;

      const rowStart = targetRowIndex * ROW_SIZE;
      const rowEnd = rowStart + ROW_SIZE;
      const rowTiles = tiles.slice(rowStart, rowEnd);
      
      // Fixed: Explicitly typed as string[] to avoid 'unknown' as index type errors in sort callback
      const unsolvedCats = Array.from(new Set(tiles.filter(t => !t.isSolved).map(t => t.categoryId))) as string[];
      if (unsolvedCats.length === 0) return;

      const counts: Record<string, number> = {};
      rowTiles.forEach(t => { 
          if (!t.isSolved) counts[t.categoryId] = (counts[t.categoryId] || 0) + 1; 
      });
      
      const targetCatId = unsolvedCats.sort((a, b) => (counts[b] || 0) - (counts[a] || 0))[0];

      const destId = rowTiles.find(t => t.categoryId !== targetCatId && !t.isSolved)?.id;
      const sourceId = tiles.find((t, idx) => t.categoryId === targetCatId && !t.isSolved && (idx < rowStart || idx >= rowEnd))?.id;

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

    const timer = setTimeout(performMove, 500);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, isComplete, isSwapping, tiles, isInitializing, isReviewing, selectedId]);

  const handleTileClick = (id: string) => {
    if (isComplete || isSwapping) return;
    const tile = tiles.find(t => t.id === id);
    if (!tile || tile.status === 'solved' || tile.status === 'locked') return;
    if (selectedId === null) { audio.playSelect(); setSelectedId(id); setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'selected' } : t)); }
    else if (selectedId === id) { setSelectedId(null); setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'neutral' } : t)); }
    else {
      const idx1 = tiles.findIndex(t => t.id === selectedId);
      const idx2 = tiles.findIndex(t => t.id === id);
      setIsSwapping(true); setMoves(m => m + 1); audio.playSwap();
      setTiles(prev => prev.map(t => t.id === selectedId ? { ...t, status: 'swapping' } : t.id === id ? { ...t, status: 'swap-target' } : t));
      setTimeout(() => {
          setTiles(prev => {
              const next = [...prev];
              const t1 = next[idx1]; const t2 = next[idx2];
              next[idx1] = { ...t1, word: t2.word, categoryId: t2.categoryId, categoryName: t2.categoryName };
              next[idx2] = { ...t2, word: t1.word, categoryId: t1.categoryId, categoryName: t1.categoryName };
              return next;
          });
          setTimeout(() => {
              setTiles(prev => prev.map(t => (t.id === selectedId || t.id === id) ? { ...t, status: 'fading-out-bg' } : t));
              setTimeout(() => {
                  setTiles(prev => {
                      const final = prev.map(t => (t.status === 'fading-out-bg') ? { ...t, status: 'neutral' as const } : t);
                      setTimeout(() => checkMatches(final), 50); return final;
                  });
                  setSelectedId(null); setIsSwapping(false);
              }, 250);
          }, 450);
      }, 50);
    }
  };

  if (isInitializing) return null;

  const displayModeName = (mode === GameMode.LEVEL_THEMED && themeName) 
    ? themeName.toUpperCase() 
    : (mode === GameMode.LEVEL_SYNONYMS ? "SYNONYMS" : mode === GameMode.LEVEL_THEMED ? "THEMED" : "CLASSIC");

  return (
    <LevelLayout modeName={displayModeName} levelIndex={levelIndex} onOpenSettings={() => onOpenSettings?.([])} isReviewing={isReviewing} onNext={onNext} hintsEnabled={hintsEnabled} onToggleHints={() => setHintsEnabled?.(!hintsEnabled)}>
      <ParticleOverlay ref={particleRef} />
      {/* flex-col + flex-1 on rows ensures vertical space is fully utilized */}
      <div className="flex-1 flex flex-col gap-1.5 pointer-events-auto h-full pb-2">
         {Array.from({ length: tiles.length / 4 }).map((_, r) => {
             const row = tiles.slice(r * 4, r * 4 + 4);
             const solved = row.every(t => t.status === 'solved');
             return (
               <div key={r} className="flex-1 relative min-h-0 overflow-visible">
                  {solved && <SolvedRowBackground seed={row[0].categoryId} />}
                  {solved && (
                    <div className="absolute top-0 left-8 z-[100] transform -translate-y-[calc(100%-4px)]">
                      <div className="px-3 py-0.5 rounded-t-lg text-[9px] font-black uppercase bg-black border-x-2 border-t-2 border-white text-white shadow-[0_-4px_12px_rgba(0,0,0,0.5)]">{row[0].categoryName}</div>
                    </div>
                  )}
                  {/* h-full ensures the grid stretches within its allocated flex row */}
                  <div className={`grid grid-cols-4 gap-1.5 w-full h-full relative z-10 rounded-small transition-all duration-300 ${solved ? 'p-3' : 'p-1'}`}>
                    {row.map(tile => <Tile key={tile.id} data={tile} onClick={handleTileClick} ref={el => { if(el) tileRefs.current.set(tile.id, el); }} />)}
                  </div>
               </div>
             );
         })}
      </div>
    </LevelLayout>
  );
}