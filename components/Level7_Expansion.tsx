
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { CSVRow, TileData, THEMES, LevelProps } from '../types';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import LevelLayout from './LevelLayout';
import { audio } from '../services/audioService';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import { shuffleArray } from '../services/csvUtils';

const m = motion as any;

const MAX_ROWS_ABS = 7;
const MAX_COLS_ABS = 5;

interface RoundTarget {
  rows: number;
  cols: number;
}

const getRoundTargets = (rowCount: number): RoundTarget[] => {
  if (rowCount <= 5) return [
    { rows: 2, cols: 2 },
    { rows: 4, cols: 3 },
    { rows: rowCount, cols: 4 }
  ];
  if (rowCount === 6) return [
    { rows: 2, cols: 2 },
    { rows: 4, cols: 3 },
    { rows: 6, cols: 4 }
  ];
  return [
    { rows: 2, cols: 2 },
    { rows: 5, cols: 3 },
    { rows: 6, cols: 4 },
    { rows: 7, cols: 5 }
  ];
};

const Level7_Expansion: React.FC<LevelProps> = ({ 
  csvData, onComplete, levelIndex, hintsEnabled, onOpenSettings, setHintsEnabled, isReviewing, onNext, isAutoPlaying, stars 
}) => {
  const [round, setRound] = useState(1);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isExpanding, setIsExpanding] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [gridData, setGridData] = useState<(TileData | null)[][]>(Array.from({ length: MAX_ROWS_ABS }, () => Array(MAX_COLS_ABS).fill(null)));
  const [activeRowIndices, setActiveRowIndices] = useState<number[]>([]);
  const [activeColIndices, setActiveColIndices] = useState<number[]>([]);
  const [selectedPos, setSelectedPos] = useState<{ r: number, c: number } | null>(null);
  const [moves, setMoves] = useState(0);
  const [roundTargets, setRoundTargets] = useState<RoundTarget[]>([]);
  
  const startTimeRef = useRef(Date.now());
  const lastActivityRef = useRef(Date.now());
  const particleRef = useRef<ParticleHandle>(null);
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Keep a master set of all possible tiles for this level
  const masterTilesRef = useRef<TileData[][]>([]);
  
  useEffect(() => {
    if (!csvData || csvData.length === 0) return;
    
    const actualRowCount = Math.min(csvData.length, MAX_ROWS_ABS);
    const targets = getRoundTargets(actualRowCount);
    setRoundTargets(targets);

    // 1. Generate master tile set
    const master: TileData[][] = [];
    csvData.forEach((cat, rIdx) => {
      if (rIdx < actualRowCount) {
        const row: TileData[] = [];
        cat.words.forEach((word, cIdx) => {
          if (cIdx < MAX_COLS_ABS) {
            row.push({
              id: `tile-${rIdx}-${cIdx}-${Math.random().toString(36).substr(2, 5)}`,
              word: word,
              categoryId: cat.id,
              categoryName: cat.name.includes(':') ? cat.name.split(':')[1].trim() : cat.name,
              status: 'neutral',
              isSolved: false
            });
          }
        });
        master.push(row);
      }
    });
    masterTilesRef.current = master;

    // 2. Setup Round 1
    const target = targets[0];
    const initialGrid = Array.from({ length: MAX_ROWS_ABS }, () => Array(MAX_COLS_ABS).fill(null)) as (TileData | null)[][];
    
    const visibleTiles: TileData[] = [];
    for (let r = 0; r < target.rows; r++) {
      for (let c = 0; c < target.cols; c++) {
        const t = master[r]?.[c];
        if (t) visibleTiles.push({...t});
      }
    }

    const scrambled = shuffleArray(visibleTiles);
    let sIdx = 0;
    for (let r = 0; r < target.rows; r++) {
      for (let c = 0; c < target.cols; c++) {
        initialGrid[r][c] = scrambled[sIdx++];
      }
    }
    
    setGridData(initialGrid);
    setActiveRowIndices(Array.from({ length: target.rows }, (_, i) => i));
    setActiveColIndices(Array.from({ length: target.cols }, (_, i) => i));
    setIsInitializing(false);
    startTimeRef.current = Date.now();
    lastActivityRef.current = Date.now();
    setRound(1);
    setIsComplete(false);
    setMoves(0);
    setSelectedPos(null);
  }, [csvData, levelIndex]);

  const checkMatches = useCallback((currentGrid: (TileData | null)[][]) => {
    if (activeRowIndices.length === 0 || activeColIndices.length === 0) return;

    let newlySolvedCount = 0;
    const updatedGrid = currentGrid.map(row => [...row]);
    let gridChanged = false;
    
    activeRowIndices.forEach(rIdx => {
      if (!updatedGrid[rIdx]) return;
      const rowTiles = activeColIndices.map(cIdx => updatedGrid[rIdx][cIdx]);
      if (rowTiles.some(t => !t)) return; 
      
      const isAlreadySolved = rowTiles.every(t => t?.status === 'solved');
      if (isAlreadySolved) { newlySolvedCount++; return; }
      
      const firstTile = rowTiles[0];
      if (firstTile && rowTiles.every(t => t?.categoryId === firstTile.categoryId)) {
        gridChanged = true;
        newlySolvedCount++;
        audio.playRowSolved();
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
    
    if (gridChanged) setGridData(updatedGrid);
    
    if (newlySolvedCount === activeRowIndices.length && newlySolvedCount > 0) {
      if (round < roundTargets.length) {
        setTimeout(() => expandGrid(updatedGrid), 800);
      } else if (!isComplete) {
        audio.playWin();
        setIsComplete(true);
        setTimeout(() => onComplete({ 
          timeMs: Date.now() - startTimeRef.current, 
          moves, 
          solvedCategoryIds: csvData.slice(0, activeRowIndices.length).map((c) => c.id), 
          solvedWords: updatedGrid.flat().filter(t => t?.status === 'solved').map(t => t!.word) 
        }), 1000);
      }
    }
  }, [activeRowIndices, activeColIndices, round, roundTargets, isComplete, moves, onComplete, csvData]);

  const expandGrid = useCallback((currentGrid: (TileData | null)[][]) => {
    const nextRound = round + 1;
    if (nextRound > roundTargets.length) return;
    
    setIsExpanding(true);
    audio.playLevelStart();
    const target = roundTargets[nextRound - 1];
    const master = masterTilesRef.current;

    setGridData(prev => {
      const next = prev.map(row => [...row]);
      const nonSolvedPositions: [number, number][] = [];
      const tilesToScramble: TileData[] = [];
      
      for (let r = 0; r < target.rows; r++) {
        const isRowSolved = activeColIndices.every(cIdx => currentGrid[r]?.[cIdx]?.status === 'solved');
        
        for (let c = 0; c < target.cols; c++) {
          if (isRowSolved && c < activeColIndices.length) {
            continue; 
          }
          
          nonSolvedPositions.push([r, c]);
          const existingTile = next[r]?.[c];
          if (existingTile && existingTile.status !== 'solved') {
            tilesToScramble.push(existingTile);
          } else if (!existingTile) {
            const newTile = master[r]?.[c];
            if (newTile) tilesToScramble.push({...newTile});
          }
        }
      }
      
      const scrambled = shuffleArray(tilesToScramble);
      nonSolvedPositions.forEach(([r, c], i) => { 
        if (i < scrambled.length) {
          next[r][c] = scrambled[i];
        }
      });
      return next;
    });

    setActiveRowIndices(Array.from({ length: target.rows }, (_, i) => i));
    setActiveColIndices(Array.from({ length: target.cols }, (_, i) => i));
    setRound(nextRound);
    setIsExpanding(false);
    lastActivityRef.current = Date.now();
  }, [round, roundTargets, activeColIndices]);

  const handleTileClick = useCallback((r: number, c: number) => {
    lastActivityRef.current = Date.now();
    if (isComplete || isSwapping || isExpanding || isReviewing) return;
    const tile = gridData[r]?.[c];
    if (!tile || tile.status === 'solved' || tile.status === 'locked') return;

    if (selectedPos === null) {
      audio.playSelect();
      setSelectedPos({ r, c });
      setGridData(prev => {
        const next = prev.map(row => [...row]);
        if (next[r]?.[c]) next[r][c] = { ...next[r][c]!, status: 'selected' };
        return next;
      });
    } else if (selectedPos.r === r && selectedPos.c === c) {
      setSelectedPos(null);
      setGridData(prev => {
        const next = prev.map(row => [...row]);
        if (next[r]?.[c]) next[r][c] = { ...next[r][c]!, status: 'neutral' };
        return next;
      });
    } else {
      const { r: r1, c: c1 } = selectedPos;
      setIsSwapping(true);
      setMoves(m => m + 1);
      audio.playSwap();
      
      setGridData(prev => {
        const next = prev.map(row => [...row]);
        if (next[r1]?.[c1]) next[r1][c1] = { ...next[r1][c1]!, status: 'swapping' };
        if (next[r]?.[c]) next[r][c] = { ...next[r][c]!, status: 'swap-target' };
        return next;
      });

      setTimeout(() => {
        setGridData(prev => {
          const next = prev.map(row => [...row]);
          const t1 = next[r1]?.[c1];
          const t2 = next[r]?.[c];
          if (t1 && t2) {
            next[r1][c1] = { ...t1, word: t2.word, categoryId: t2.categoryId, categoryName: t2.categoryName, color: t2.color };
            next[r][c] = { ...t2, word: t1.word, categoryId: t1.categoryId, categoryName: t1.categoryName, color: t1.color };
          }
          return next;
        });
        
        setTimeout(() => {
          setGridData(prev => prev.map(row => row.map(t => 
            (t?.status === 'fading-out-bg' || t?.status === 'swapping' || t?.status === 'swap-target') 
            ? { ...t, status: 'fading-out-bg' as const } 
            : t
          )));
          
          setTimeout(() => {
            setGridData(prev => {
              const final = prev.map(row => row.map(t => t?.status === 'fading-out-bg' ? { ...t, status: 'neutral' as const } : t));
              setTimeout(() => checkMatches(final), 50);
              return final;
            });
            setSelectedPos(null);
            setIsSwapping(false);
          }, 200); 
        }, 250); 
      }, 20);
    }
  }, [isComplete, isSwapping, isExpanding, isReviewing, gridData, selectedPos, checkMatches]);

  useEffect(() => {
    if (!isAutoPlaying || isComplete || isSwapping || isExpanding || isReviewing || activeRowIndices.length === 0) return;
    const timer = setTimeout(() => {
      for (let rIdx of activeRowIndices) {
        if (!gridData[rIdx]) continue;
        const row = activeColIndices.map(cIdx => gridData[rIdx][cIdx]);
        if (row.some(t => !t) || row.every(t => t?.status === 'solved')) continue;

        const targetCatId = masterTilesRef.current[rIdx]?.[0]?.categoryId;
        if (row.every(t => t?.categoryId === targetCatId)) {
          checkMatches(gridData);
          return;
        }

        const wrongIdxInRow = row.findIndex(t => t && t.categoryId !== targetCatId && t.status !== 'solved');
        if (wrongIdxInRow !== -1) {
          const wrongPos = { r: rIdx, c: activeColIndices[wrongIdxInRow] };
          let correctPos: { r: number, c: number } | null = null;
          for (let rr of activeRowIndices) {
            if (!gridData[rr]) continue;
            for (let cc of activeColIndices) {
              const t = gridData[rr][cc];
              if (t && t.categoryId === targetCatId && t.status !== 'solved') {
                const isAlreadyInCorrectRow = rr === rIdx;
                if (!isAlreadyInCorrectRow) {
                  correctPos = { r: rr, c: cc };
                  break;
                }
              }
            }
            if (correctPos) break;
          }

          if (correctPos) {
            if (!selectedPos) {
              handleTileClick(wrongPos.r, wrongPos.c);
            } else {
              handleTileClick(correctPos.r, correctPos.c);
            }
            return;
          }
        }
      }
    }, 800);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, isComplete, isSwapping, isExpanding, isReviewing, gridData, selectedPos, handleTileClick, activeRowIndices, activeColIndices, checkMatches]);

  if (isInitializing) return null;

  return (
    <LevelLayout 
      modeName="EXPANSION" 
      levelIndex={levelIndex} 
      onOpenSettings={() => onOpenSettings()} 
      isReviewing={isReviewing} 
      onNext={onNext} 
      hintsEnabled={hintsEnabled} 
      onToggleHints={() => setHintsEnabled?.(!hintsEnabled)} 
      stars={stars}
    >
      <ParticleOverlay ref={particleRef} />
      <div className="flex-1 flex flex-col gap-0.5 h-full w-full overflow-visible p-1">
         {activeRowIndices.map(rIdx => {
             const rowTiles = activeColIndices.map(cIdx => gridData[rIdx]?.[cIdx]);
             const rowColor = THEMES[0].solvedColors[rIdx % THEMES[0].solvedColors.length];
             const solved = rowTiles.every(t => t?.status === 'solved');
             const firstTile = rowTiles[0];
             
             return (
               <div key={rIdx} className="flex-1 relative min-h-0 overflow-visible">
                  {solved && <SolvedRowBackground seed={firstTile?.categoryId || rIdx} />}
                  {solved && (
                    <m.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute bottom-full left-1 mb-[-2px] z-[9999]"
                    >
                      <div className="px-2 py-0.5 text-[9px] font-black uppercase bg-black border-x-2 border-t-2 border-b-0 border-white text-white rounded-t-lg shadow-[0_-4px_12px_rgba(0,0,0,0.8)] whitespace-nowrap">
                        {firstTile?.categoryName}
                      </div>
                    </m.div>
                  )}
                  <div className={`grid gap-0.5 w-full h-full relative z-10 transition-all duration-300 ${solved ? 'p-0.5' : 'p-0.5'}`}
                       style={{ gridTemplateColumns: `repeat(${activeColIndices.length}, 1fr)` }}>
                    {rowTiles.map((t, cIdx) => (
                      t && (
                        <Tile 
                          key={t.id} 
                          data={t} 
                          targetColor={rowColor} 
                          onClick={() => handleTileClick(rIdx, activeColIndices[cIdx])} 
                          isNarrow={activeColIndices.length >= 5} 
                          rowCount={activeRowIndices.length}
                          ref={el => { if(el) tileRefs.current.set(t.id, el); }} 
                        />
                      )
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
