import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CSVRow, TileData, THEMES, GameMode } from '../types';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import LevelLayout from './LevelLayout';
import { audio } from '../services/audioService';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import { shuffleArray } from '../services/csvUtils';

const MAX_ROWS = 7;
const MAX_COLS = 5;

const ROUND_TARGETS = [
  { rows: 3, cols: 2 }, 
  { rows: 5, cols: 3 }, 
  { rows: 6, cols: 4 }, 
  { rows: 7, cols: 5 }, 
];

const Level7_Expansion: React.FC<any> = ({ 
  csvData, onComplete, levelIndex, hintsEnabled, onOpenSettings, setHintsEnabled, isReviewing, onNext, isAutoPlaying, stars, mode
}) => {
  const [round, setRound] = useState(1);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isExpanding, setIsExpanding] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [gridData, setGridData] = useState<(TileData | null)[][]>(Array.from({ length: MAX_ROWS }, () => Array(MAX_COLS).fill(null)));
  const [activeRowIndices, setActiveRowIndices] = useState<number[]>([0, 1, 2]);
  const [activeColIndices, setActiveColIndices] = useState<number[]>([0, 1]);
  const [selectedPos, setSelectedPos] = useState<{ r: number, c: number } | null>(null);
  const [moves, setMoves] = useState(0);
  
  const startTimeRef = useRef(Date.now());
  const lastActivityRef = useRef(Date.now());
  const particleRef = useRef<ParticleHandle>(null);
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [definitionTestId, setDefinitionTestId] = useState<string | null>(null);
  const definitionTestedRef = useRef<Set<string>>(new Set());
  const definitionTestPhaseRef = useRef<boolean>(true);

  const getSolvedRowCount = useCallback(() => {
    let count = 0;
    for (let rIdx of activeRowIndices) {
      const row = activeColIndices.map(cIdx => gridData[rIdx][cIdx]);
      if (row.every(t => t?.status === 'solved')) count++;
    }
    return count;
  }, [activeRowIndices, activeColIndices, gridData]);

  useEffect(() => {
    const target = ROUND_TARGETS[0];
    const fullMatrix = Array.from({ length: MAX_ROWS }, () => Array(MAX_COLS).fill(null));
    csvData.forEach((cat: any, rIdx: number) => {
      cat.words.forEach((word: string, cIdx: number) => {
        if (rIdx < MAX_ROWS && cIdx < MAX_COLS) {
          const wordDef = cat.definitions?.[cIdx];
          const definition = (wordDef && wordDef.trim().length > 0) ? wordDef : (cat.catDict || '');
          fullMatrix[rIdx][cIdx] = {
            id: Math.random().toString(36).substr(2, 9),
            word: word,
            definition,
            categoryId: cat.id,
            categoryName: cat.name.includes(':') ? cat.name.split(':')[1].trim() : cat.name,
            status: 'neutral',
            isSolved: false
          };
        }
      });
    });
    const visibleIndices: [number, number][] = [];
    for (let r = 0; r < target.rows; r++) for (let c = 0; c < target.cols; c++) visibleIndices.push([r, c]);
    const visibleTilesSource = visibleIndices.map(([r, c]) => ({ ...fullMatrix[r][c] }));
    const scrambled = shuffleArray(visibleTilesSource);
    visibleIndices.forEach(([r, c], i) => { fullMatrix[r][c] = scrambled[i]; });
    setGridData(fullMatrix);
    setActiveRowIndices(Array.from({ length: target.rows }, (_, i) => i));
    setActiveColIndices(Array.from({ length: target.cols }, (_, i) => i));
    setIsInitializing(false);
    startTimeRef.current = Date.now();
    lastActivityRef.current = Date.now();
  }, [csvData]);

  const checkMatches = useCallback((currentGrid: (TileData | null)[][]) => {
    let changed = false;
    let newlySolvedCount = 0;
    const updatedGrid = currentGrid.map(row => [...row]);
    
    activeRowIndices.forEach(rIdx => {
      const rowTiles = activeColIndices.map(cIdx => updatedGrid[rIdx][cIdx]!);
      const solved = rowTiles.every(t => t.status === 'solved');
      if (solved) { newlySolvedCount++; return; }
      
      const firstTile = rowTiles[0];
      if (firstTile && rowTiles.every(t => t.categoryId === firstTile.categoryId)) {
        changed = true; newlySolvedCount++; audio.playRowSolved();
        const color = THEMES[0].solvedColors[rIdx % THEMES[0].solvedColors.length];
        activeColIndices.forEach(cIdx => {
          const tile = updatedGrid[rIdx][cIdx];
          if (tile) {
            const rect = tileRefs.current.get(tile.id)?.getBoundingClientRect();
            if (rect && particleRef.current) particleRef.current.explode(rect.left + rect.width / 2, rect.top + rect.height / 2, "#FFFFFF");
            updatedGrid[rIdx][cIdx] = { ...tile, status: 'solved', isSolved: true, color };
          }
        });
      }
    });
    
    if (changed) setGridData(updatedGrid);
    if (newlySolvedCount === activeRowIndices.length) {
      if (round < 4) setTimeout(() => expandGrid(), 1000);
      else if (!isComplete) {
        audio.playWin(); setIsComplete(true);
        setTimeout(() => onComplete({ timeMs: Date.now() - startTimeRef.current, moves, solvedCategoryIds: csvData.slice(0, MAX_ROWS).map((c:any) => c.id), solvedWords: updatedGrid.flat().filter(t => t?.status === 'solved').map(t => t!.word) }), 1000);
      }
    }
  }, [activeRowIndices, activeColIndices, round, isComplete, moves, onComplete, csvData]);

  const expandGrid = useCallback(() => {
    const nextRound = round + 1;
    if (nextRound > 4) return;
    setIsExpanding(true); audio.playLevelStart();
    const target = ROUND_TARGETS[nextRound - 1];
    setGridData(prev => {
      const next = prev.map(row => [...row]);
      const nonSolvedIndices: [number, number][] = [];
      const nonSolvedTiles: TileData[] = [];
      for (let r = 0; r < target.rows; r++) {
        for (let c = 0; c < target.cols; c++) {
          const t = next[r][c];
          if (!t || t.status !== 'solved') {
            nonSolvedIndices.push([r, c]);
            if (t) nonSolvedTiles.push(t);
          }
        }
      }
      const scrambled = shuffleArray(nonSolvedTiles);
      nonSolvedIndices.forEach(([r, c], i) => { if (scrambled[i]) next[r][c] = scrambled[i]; });
      return next;
    });
    setActiveRowIndices(Array.from({ length: target.rows }, (_, i) => i));
    setActiveColIndices(Array.from({ length: target.cols }, (_, i) => i));
    setRound(nextRound); setIsExpanding(false); lastActivityRef.current = Date.now();
  }, [round]);

  const handleTileClick = useCallback((r: number, c: number) => {
    lastActivityRef.current = Date.now();
    if (isComplete || isSwapping || isExpanding || isReviewing) return;
    const tile = gridData[r][c];
    if (!tile || tile.status === 'solved' || tile.status === 'locked') return;

    if (selectedPos === null) {
      audio.playSelect(); setSelectedPos({ r, c });
      setGridData(prev => {
        const next = prev.map(row => [...row]);
        if (next[r][c]) next[r][c] = { ...next[r][c]!, status: 'selected' };
        return next;
      });
    } else if (selectedPos.r === r && selectedPos.c === c) {
      setSelectedPos(null);
      setGridData(prev => {
        const next = prev.map(row => [...row]);
        if (next[r][c]) next[r][c] = { ...next[r][c]!, status: 'neutral' };
        return next;
      });
    } else {
      const { r: r1, c: c1 } = selectedPos;
      setIsSwapping(true); setMoves(m => m + 1); audio.playSwap();
      setGridData(prev => {
        const next = prev.map(row => [...row]);
        if (next[r1][c1]) next[r1][c1] = { ...next[r1][c1]!, status: 'swapping' };
        if (next[r][c]) next[r][c] = { ...next[r][c]!, status: 'swap-target' };
        return next;
      });
      setTimeout(() => {
        setGridData(prev => {
          const next = prev.map(row => [...row]);
          const t1 = next[r1][c1]; const t2 = next[r][c];
          if (t1 && t2) {
            next[r1][c1] = { ...t1, word: t2.word, categoryId: t2.categoryId, categoryName: t2.categoryName, definition: t2.definition, color: t2.color };
            next[r][c] = { ...t2, word: t1.word, categoryId: t1.categoryId, categoryName: t1.categoryName, definition: t1.definition, color: t1.color };
          }
          return next;
        });
        setTimeout(() => {
          setGridData(prev => prev.map(row => row.map(t => (t?.status === 'fading-out-bg' || t?.status === 'swapping' || t?.status === 'swap-target') ? { ...t, status: 'fading-out-bg' as const } : t)));
          setTimeout(() => {
            setGridData(prev => {
              const final = prev.map(row => row.map(t => t?.status === 'fading-out-bg' ? { ...t, status: 'neutral' as const } : t));
              setTimeout(() => checkMatches(final), 50); return final;
            });
            setSelectedPos(null); setIsSwapping(false);
          }, 200); 
        }, 400); 
      }, 50);
    }
  }, [isComplete, isSwapping, isExpanding, isReviewing, gridData, selectedPos, checkMatches]);

  // AUTO PLAY LOGIC
  useEffect(() => {
    if (!isAutoPlaying || isComplete || isSwapping || isExpanding || isReviewing) return;

    const timer = setTimeout(() => {
      for (let rIdx of activeRowIndices) {
        const row = activeColIndices.map(cIdx => gridData[rIdx][cIdx]!);
        if (row.some(t => !t) || row.every(t => t.status === 'solved')) continue;
        const targetCatId = csvData[rIdx]?.id;
        if (row.every(t => t.categoryId === targetCatId)) { checkMatches(gridData); return; }

        const wrongIdxInRow = row.findIndex(t => t.categoryId !== targetCatId);
        if (wrongIdxInRow !== -1) {
          const wrongPos = { r: rIdx, c: activeColIndices[wrongIdxInRow] };
          let correctPos: { r: number, c: number } | null = null;
          for (let rr of activeRowIndices) {
            for (let cc of activeColIndices) {
              const t = gridData[rr][cc];
              if (t && t.categoryId === targetCatId && (rr !== rIdx)) { correctPos = { r: rr, c: cc }; break; }
            }
            if (correctPos) break;
          }
          if (correctPos) {
            if (!selectedPos) handleTileClick(wrongPos.r, wrongPos.c);
            else handleTileClick(correctPos.r, correctPos.c);
            return;
          }
        }
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, isComplete, isSwapping, isExpanding, isReviewing, gridData, selectedPos, handleTileClick, activeRowIndices, activeColIndices, csvData, checkMatches, definitionTestId]);

  if (isInitializing) return null;

  return (
    <LevelLayout modeName="EXPANSION" levelIndex={levelIndex} onOpenSettings={() => onOpenSettings?.([])} isReviewing={isReviewing} onNext={onNext} hintsEnabled={hintsEnabled} onToggleHints={() => setHintsEnabled?.(!hintsEnabled)} stars={stars}>
      <ParticleOverlay ref={particleRef} />
      <div className="flex-1 flex flex-col gap-0 h-full w-full overflow-visible relative">
         {activeRowIndices.map(rIdx => {
             const rowTiles = activeColIndices.map(cIdx => gridData[rIdx][cIdx]);
             const solved = rowTiles.every(t => t?.status === 'solved');
             const firstTile = rowTiles[0];
             return (
               <div key={rIdx} className="flex-1 relative min-h-0 overflow-visible">
                  {solved && <SolvedRowBackground seed={firstTile?.categoryId || rIdx} />}
                  {solved && (
                    <div className="absolute top-0 left-6 z-[100] transform -translate-y-full">
                      <div className="px-3 py-1 text-[10px] font-black uppercase bg-black border-2 border-white text-white rounded-t-lg shadow-[0_-4px_12px_rgba(0,0,0,0.8)] whitespace-nowrap">
                        {firstTile?.categoryName}
                      </div>
                    </div>
                  )}
                  <div className={`grid gap-0.5 w-full h-full relative z-10 transition-all duration-300 ${solved ? 'p-[10px]' : 'p-0.5'}`}
                       style={{ gridTemplateColumns: `repeat(${activeColIndices.length}, 1fr)` }}>
                    {rowTiles.map((t, cIdx) => (
                      t && <Tile key={t.id} data={t} onClick={() => handleTileClick(rIdx, cIdx)} isNarrow={activeColIndices.length > 4} showDefinitionOverride={t.id === definitionTestId} ref={el => { if(el) tileRefs.current.set(t.id, el); }} />
                    ))}
                  </div>
               </div>
             );
         })}
      </div>
    </LevelLayout>
  );
};
export default Level7_Expansion;
