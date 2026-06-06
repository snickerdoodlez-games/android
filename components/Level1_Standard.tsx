import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TileData, GameMode, THEMES, CSVRow } from '../types';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import LevelLayout from './LevelLayout';
import { audio } from '../services/audioService';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import { shuffleArray } from '../services/csvUtils';
import { isModeTutorialSeen, markModeTutorialSeen } from '../services/storage';
import { getTutorialSteps } from '../services/tutorialSolver';

export default function Level1_Standard({ 
  csvData, onComplete, mode, levelIndex, hintsEnabled, onOpenSettings, setHintsEnabled,
  isReviewing, onNext, isAutoPlaying, themeName, stars
}: any) {
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [moves, setMoves] = useState(0);
  const [isTutorialPlaying, setIsTutorialPlaying] = useState(false);
  const [tutorialInstruction, setTutorialInstruction] = useState<{ message: string; colorClass: string; borderColor: string } | null>(null);

  const startTimeRef = useRef(Date.now());
  const lastActivityRef = useRef(Date.now());
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const particleRef = useRef<ParticleHandle>(null);
  const [definitionTestId, setDefinitionTestId] = useState<string | null>(null);
  const definitionTestedRef = useRef<Set<string>>(new Set());
  const definitionTestPhaseRef = useRef<boolean>(true);
  const tutorialCheckedRef = useRef(false);

  const getModeName = useCallback(() => {
    if (mode === GameMode.LEVEL_SYNONYMS) return 'SYNONYMS';
    if (mode === GameMode.LEVEL_THEMED) return 'THEMED';
    return 'CLASSIC';
  }, [mode]);

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
    if (isComplete || isSwapping || isReviewing || isTutorialPlaying) return;
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
  }, [isComplete, isSwapping, isReviewing, isTutorialPlaying, selectedId, tiles, checkMatches]);

  // --- TUTORIAL INIT ---
  useEffect(() => {
    if (isInitializing || tutorialCheckedRef.current) return;
    tutorialCheckedRef.current = true;

    if (!isModeTutorialSeen(mode)) {
      setIsTutorialPlaying(true);
      const steps = getTutorialSteps(getModeName());
      setTutorialInstruction(steps[0]);
    }
  }, [isInitializing, mode, getModeName]);

  // --- TUTORIAL SOLVER ---
  useEffect(() => {
    if (!isTutorialPlaying || isSwapping || isComplete || isReviewing) return;

    const timer = setTimeout(() => {
      const solvedCount = tiles.filter(t => t.status === 'solved').length / 4;
      const totalRows = tiles.length / 4;
      const steps = getTutorialSteps(getModeName());

      if (solvedCount >= 2 || solvedCount >= totalRows) {
        setIsTutorialPlaying(false);
        markModeTutorialSeen(mode);
        setTutorialInstruction(steps[3]);
        return;
      }

      if (solvedCount === 0 && selectedId === null) {
        setTutorialInstruction(steps[0]);
      } else if (selectedId !== null) {
        setTutorialInstruction(steps[1]);
      } else if (solvedCount === 1) {
        setTutorialInstruction(steps[2]);
      }

      for (let r = 0; r < totalRows; r++) {
        const row = tiles.slice(r * 4, r * 4 + 4);
        if (row.some(t => t.status === 'solved')) continue;

        const targetCatId = row[0].categoryId;
        if (row.every(t => t.categoryId === targetCatId)) {
          checkMatches(tiles);
          return;
        }

        const wrongTileIdx = row.findIndex(t => t.categoryId !== targetCatId);
        if (wrongTileIdx !== -1) {
          const globalIdx = r * 4 + wrongTileIdx;
          const correctTileIdx = tiles.findIndex((t, idx) => t.categoryId === targetCatId && idx >= (r+1) * 4);
          if (correctTileIdx !== -1) {
            if (selectedId === null) {
              handleTileClick(tiles[globalIdx].id);
            } else if (selectedId === tiles[globalIdx].id) {
              handleTileClick(tiles[correctTileIdx].id);
            } else {
              handleTileClick(tiles[correctTileIdx].id);
            }
            return;
          }
        }
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [isTutorialPlaying, isSwapping, isComplete, isReviewing, tiles, selectedId, handleTileClick, checkMatches, mode, getModeName]);

  // AUTO PLAY LOGIC W/ DEFINITION TESTING
  useEffect(() => {
    if (!isAutoPlaying || isComplete || isSwapping || isReviewing || isTutorialPlaying) return;
    const timer = setTimeout(() => {
      if (definitionTestPhaseRef.current) {
        const allUnsolved = tiles.filter(t => t.status !== 'solved');
        const unsolvedTiles = allUnsolved.filter(t => t.definition && !definitionTestedRef.current.has(t.id));
        const hasDefinitions = allUnsolved.some(t => t.definition && t.definition.trim().length > 0);
        const targetTestCount = Math.ceil(allUnsolved.length / 2);
        if (!hasDefinitions) { definitionTestPhaseRef.current = false; setDefinitionTestId(null); return; }
        if (definitionTestedRef.current.size < targetTestCount && unsolvedTiles.length > 0) {
          if (definitionTestId === null) {
            const pickTile = unsolvedTiles[Math.floor(Math.random() * unsolvedTiles.length)];
            setDefinitionTestId(pickTile.id);
          }
          return;
        }
        definitionTestPhaseRef.current = false; setDefinitionTestId(null); return;
      }
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
  }, [isAutoPlaying, isComplete, isSwapping, isReviewing, isTutorialPlaying, tiles, selectedId, handleTileClick, checkMatches, definitionTestId]);

  useEffect(() => {
    if (!isAutoPlaying || definitionTestId === null) return;
    const timer = setTimeout(() => { definitionTestedRef.current.add(definitionTestId); setDefinitionTestId(null); }, 800);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, definitionTestId]);

  useEffect(() => {
    if (!isAutoPlaying) { definitionTestedRef.current.clear(); definitionTestPhaseRef.current = true; setDefinitionTestId(null); }
  }, [isAutoPlaying, csvData]);

  if (isInitializing) return null;
  const displayModeName = (mode === GameMode.LEVEL_SYNONYMS ? "SYNONYMS" : mode === GameMode.LEVEL_THEMED ? themeName?.toUpperCase() || "THEMED" : "CLASSIC");

  return (
    <LevelLayout modeName={displayModeName} levelIndex={levelIndex} onOpenSettings={() => onOpenSettings?.([])} isReviewing={isReviewing} onNext={onNext} hintsEnabled={hintsEnabled} onToggleHints={() => setHintsEnabled?.(!hintsEnabled)} stars={stars}>
      <ParticleOverlay ref={particleRef} />
      <div className="flex-1 flex flex-col gap-0 h-full w-full overflow-visible relative">
        {tutorialInstruction && (
          <div className="absolute top-2 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <div className={`px-4 py-2 bg-black border-2 ${tutorialInstruction.borderColor} rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.3)]`}>
              <span className={`text-sm font-black uppercase tracking-wider ${tutorialInstruction.colorClass}`}>
                {tutorialInstruction.message}
              </span>
            </div>
          </div>
        )}
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
                    {row.map(tile => <Tile key={tile.id} data={tile} onClick={handleTileClick} showDefinitionOverride={tile.id === definitionTestId} ref={(el: any) => { if(el) tileRefs.current.set(tile.id, el); }} />)}
                  </div>
               </div>
             );
         })}
      </div>
    </LevelLayout>
  );
}
