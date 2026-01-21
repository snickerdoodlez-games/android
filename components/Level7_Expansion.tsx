import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CSVRow, TileData, THEMES } from '../types';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import LevelLayout from './LevelLayout';
import { getValidatedLevelData } from '../services/levelPreCheck';
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

interface ExpansionProps {
  csvData: CSVRow[];
  onComplete: (stats: any) => void;
  onExit: () => void;
  levelIndex: number;
  hintsEnabled: boolean;
  onOpenSettings?: (cats?: {name: string, isSolved: boolean}[]) => void;
  setHintsEnabled?: (val: boolean) => void;
  isReviewing?: boolean;
  onNext?: () => void;
  isAutoPlaying?: boolean;
}

const Level7_Expansion: React.FC<ExpansionProps> = ({ 
  csvData, onComplete, onExit, levelIndex, hintsEnabled, onOpenSettings, setHintsEnabled, isReviewing, onNext, isAutoPlaying 
}) => {
  const [round, setRound] = useState(1);
  const [isInitializing, setIsInitializing] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isExpanding, setIsExpanding] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [gridData, setGridData] = useState<(TileData | null)[][]>(Array.from({ length: MAX_ROWS }, () => Array(MAX_COLS).fill(null)));
  const [activeRowIndices, setActiveRowIndices] = useState<number[]>([0, 1, 2]);
  const [activeColIndices, setActiveColIndices] = useState<number[]>([0, 1]);
  const [selectedPos, setSelectedPos] = useState<{ r: number, c: number } | null>(null);
  const [moves, setMoves] = useState(0);
  const [hintTriggerCount, setHintTriggerCount] = useState(0);
  
  const categoriesRef = useRef<CSVRow[]>([]);
  const startTimeRef = useRef(Date.now());
  const particleRef = useRef<ParticleHandle>(null);
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const scrambleTiles = useCallback((indices: [number, number][], tiles: TileData[]) => {
    let result = shuffleArray([...tiles]);
    for (let attempt = 0; attempt < 15; attempt++) {
      let luckyIndices: number[] = [];
      for (let i = 0; i < indices.length; i++) {
        const [row] = indices[i];
        const catId = result[i].categoryId;
        const targetRow = categoriesRef.current.findIndex(c => c.id === catId);
        if (targetRow === row) luckyIndices.push(i);
      }
      if (luckyIndices.length === 0) break;
      for (const luckyIdx of luckyIndices) {
        const [row] = indices[luckyIdx];
        const swapTargetIdx = result.findIndex((t, idx) => {
          const [targetRowIdx] = indices[idx];
          const tTargetRow = categoriesRef.current.findIndex(c => c.id === t.categoryId);
          return targetRowIdx !== categoriesRef.current.findIndex(c => c.id === result[luckyIdx].categoryId) && row !== tTargetRow;
        });
        if (swapTargetIdx !== -1) {
          const temp = result[luckyIdx];
          result[luckyIdx] = result[swapTargetIdx];
          result[swapTargetIdx] = temp;
        }
      }
    }
    return result;
  }, []);

  const initLevel = useCallback(() => {
    try {
        if (!csvData || csvData.length === 0) { setLoadError("No data"); setIsInitializing(false); return; }
        const categories = getValidatedLevelData(MAX_ROWS, csvData, MAX_COLS);
        if (categories.length < MAX_ROWS) { setLoadError("Data error"); setIsInitializing(false); return; }
        categoriesRef.current = categories;

        const fullMatrix = Array.from({ length: MAX_ROWS }, () => Array(MAX_COLS).fill(null));
        categories.forEach((cat, rIdx) => {
          const words = [...cat.words];
          for (let cIdx = 0; cIdx < MAX_COLS; cIdx++) {
            fullMatrix[rIdx][cIdx] = {
              id: Math.random().toString(36).substr(2, 9),
              word: words[cIdx],
              categoryId: cat.id,
              categoryName: cat.name.includes(':') ? cat.name.split(':')[1].trim() : cat.name,
              status: 'neutral',
              isSolved: false
            };
          }
        });

        const target = ROUND_TARGETS[0];
        const visibleIndices: [number, number][] = [];
        for (let r = 0; r < target.rows; r++) for (let c = 0; c < target.cols; c++) visibleIndices.push([r, c]);
        const visibleTilesSource = visibleIndices.map(([r, c]) => ({ ...fullMatrix[r][c] }));
        const scrambled = scrambleTiles(visibleIndices, visibleTilesSource);
        visibleIndices.forEach(([r, c], i) => { fullMatrix[r][c] = scrambled[i]; });

        setGridData(fullMatrix);
        setActiveRowIndices(Array.from({ length: target.rows }, (_, i) => i));
        setActiveColIndices(Array.from({ length: target.cols }, (_, i) => i));
        setIsInitializing(false);
        startTimeRef.current = Date.now();
    } catch (err) { setLoadError("Init failure"); setIsInitializing(false); }
  }, [csvData, scrambleTiles]);

  useEffect(() => { initLevel(); }, [levelIndex, initLevel]);

  const expandGrid = useCallback(() => {
    const nextRound = round + 1;
    if (nextRound > 4) return;
    setIsExpanding(true);
    audio.playLevelStart();
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
            nonSolvedTiles.push(t!);
          }
        }
      }
      const scrambled = scrambleTiles(nonSolvedIndices, nonSolvedTiles);
      nonSolvedIndices.forEach(([r, c], i) => { next[r][c] = scrambled[i]; });
      return next;
    });
    setActiveRowIndices(Array.from({ length: target.rows }, (_, i) => i));
    setActiveColIndices(Array.from({ length: target.cols }, (_, i) => i));
    setRound(nextRound);
    setIsExpanding(false);
  }, [round, scrambleTiles]);

  const checkMatches = useCallback((currentGrid: (TileData | null)[][]) => {
    let changed = false;
    let newlySolvedCount = 0;
    const updatedGrid = currentGrid.map(row => [...row]);

    activeRowIndices.forEach(rIdx => {
      const rowTiles = activeColIndices.map(cIdx => updatedGrid[rIdx][cIdx]!);
      if (rowTiles.every(t => t && t.status === 'solved')) { newlySolvedCount++; return; }
      const targetCatId = categoriesRef.current[rIdx].id;
      if (rowTiles.every(t => t.categoryId === targetCatId)) {
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
      if (round < 4) setTimeout(expandGrid, 1000);
      else if (!isComplete) {
        audio.playWin();
        setIsComplete(true);
        setTimeout(() => onComplete({
          timeMs: Date.now() - startTimeRef.current,
          hintsUsedCount: hintTriggerCount,
          moves: moves,
          mistakes: 0,
          solvedCategoryIds: Array.from(new Set(updatedGrid.flat().filter(t => t && t.status === 'solved').map(t => t!.categoryId))),
          solvedWords: updatedGrid.flat().filter(t => t && t.status === 'solved').map(t => t!.word)
        }), 3000);
      }
    }
  }, [activeRowIndices, activeColIndices, round, isComplete, expandGrid, hintTriggerCount, moves, onComplete]);

  const handleTileClick = (r: number, c: number) => {
    if (isComplete || isSwapping || isExpanding || isReviewing) return;
    const tile = gridData[r][c];
    if (!tile || tile.status === 'solved' || tile.status === 'locked') return;
    if (selectedPos === null) {
      audio.playSelect();
      setSelectedPos({ r, c });
      setGridData(prev => {
        const next = prev.map(row => [...row]);
        next[r][c] = { ...next[r][c]!, status: 'selected' };
        return next;
      });
    } else if (selectedPos.r === r && selectedPos.c === c) {
      setSelectedPos(null);
      setGridData(prev => {
        const next = prev.map(row => [...row]);
        next[r][c] = { ...next[r][c]!, status: 'neutral' };
        return next;
      });
    } else {
      const { r: r1, c: c1 } = selectedPos;
      setIsSwapping(true);
      setMoves(m => m + 1);
      audio.playSwap();
      setGridData(prev => {
        const next = prev.map(row => [...row]);
        next[r1][c1] = { ...next[r1][c1]!, status: 'swapping' };
        next[r][c] = { ...next[r][c]!, status: 'swap-target' };
        return next;
      });
      setTimeout(() => {
        setGridData(prev => {
          const next = prev.map(row => [...row]);
          const t1 = { ...next[r1][c1]! };
          const t2 = { ...next[r][c]! };
          next[r1][c1] = { ...t1, word: t2.word, categoryId: t2.categoryId, categoryName: t2.categoryName, color: t2.color };
          next[r][c] = { ...t2, word: t1.word, categoryId: t1.categoryId, categoryName: t1.categoryName, color: t1.color };
          return next;
        });
        setTimeout(() => {
          setGridData(prev => prev.map(row => row.map(t => (t?.status === 'swapping' || t?.status === 'swap-target') ? { ...t, status: 'fading-out-bg' as const } : t)));
          setTimeout(() => {
            setGridData(prev => {
              const final = prev.map(row => row.map(t => t?.status === 'fading-out-bg' ? { ...t, status: 'neutral' as const } : t));
              setTimeout(() => checkMatches(final), 50);
              return final;
            });
            setSelectedPos(null);
            setIsSwapping(false);
          }, 250);
        }, 450);
      }, 50);
    }
  };

  // Auto-play logic for testing/debug
  useEffect(() => {
    if (!isAutoPlaying || isComplete || isSwapping || isInitializing || isReviewing || isExpanding) return;
    const performMove = () => {
      if (document.hidden) return;
      let targetRow = activeRowIndices.find(r => !activeColIndices.every(c => gridData[r][c]?.status === 'solved'));
      if (targetRow === undefined) return;
      const correctCatId = categoriesRef.current[targetRow].id;
      const badCol = activeColIndices.find(c => gridData[targetRow!][c]?.categoryId !== correctCatId && gridData[targetRow!][c]?.status !== 'solved');
      if (badCol === undefined) return;
      let sourcePos: {r: number, c: number} | null = null;
      for (const r of activeRowIndices) {
        if (r === targetRow) continue;
        const c = activeColIndices.find(col => gridData[r][col]?.categoryId === correctCatId && gridData[r][col]?.status !== 'solved');
        if (c !== undefined) { sourcePos = { r, c }; break; }
      }
      if (sourcePos) {
        if (!selectedPos) handleTileClick(sourcePos.r, sourcePos.c);
        else if (selectedPos.r === sourcePos.r && selectedPos.c === sourcePos.c) handleTileClick(targetRow, badCol);
        else handleTileClick(selectedPos.r, selectedPos.c);
      }
    };
    const timer = setTimeout(performMove, 800);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, isComplete, isSwapping, gridData, isInitializing, isReviewing, isExpanding, selectedPos, activeRowIndices, activeColIndices]);

  if (isInitializing) return null;

  return (
    <LevelLayout modeName="EXPANSION" levelIndex={levelIndex} onOpenSettings={() => onOpenSettings?.([])} isReviewing={isReviewing} onNext={onNext} hintsEnabled={hintsEnabled} onToggleHints={() => setHintsEnabled?.(!hintsEnabled)}>
      <ParticleOverlay ref={particleRef} />
      {/* pt-20 (80px) ensures category tabs never clip behind the 65px header */}
      <div className="flex-1 flex flex-col gap-1.5 pointer-events-auto p-1 h-full overflow-visible pt-5 pb-2">
         {activeRowIndices.map(rIdx => {
             const rowTiles = activeColIndices.map(cIdx => gridData[rIdx][cIdx]);
             const solved = rowTiles.every(t => t?.status === 'solved');
             const firstTile = rowTiles[0];

             return (
               <div key={rIdx} className="flex-1 relative min-h-0 overflow-visible">
                  {solved && <SolvedRowBackground seed={firstTile?.categoryId || rIdx} />}
                  {solved && (
                    <div className="absolute top-0 left-8 z-[100] transform -translate-y-[calc(100%-4px)]">
                      <div className="px-3 py-0.5 rounded-t-lg text-[9px] font-black uppercase bg-black border-x-4 border-t-4 border-white text-white shadow-[0_-4px_12px_rgba(0,0,0,0.8)] whitespace-nowrap">
                        {firstTile?.categoryName}
                      </div>
                    </div>
                  )}
                  {/* h-full ensures the grid stretches vertically within the flex-1 row container */}
                  <div className={`grid gap-1.5 w-full h-full relative z-10 transition-all duration-300 ${solved ? 'p-2' : 'p-1'}`}
                       style={{ gridTemplateColumns: `repeat(${activeColIndices.length}, 1fr)` }}>
                    {rowTiles.map((t, cIdx) => (
                      t && <Tile 
                        key={t.id} 
                        data={t} 
                        onClick={() => handleTileClick(rIdx, cIdx)} 
                        isNarrow={activeColIndices.length > 4}
                        ref={el => { if(el) tileRefs.current.set(t.id, el); }}
                      />
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