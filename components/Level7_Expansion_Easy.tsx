import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CSVRow, TileData, THEMES, GameMode } from '../types';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import LevelLayout from './LevelLayout';
import { audio } from '../services/audioService';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import { shuffleArray } from '../services/csvUtils';
import { isModeTutorialSeen, markModeTutorialSeen } from '../services/storage';
import { getTutorialSteps } from '../services/tutorialSolver';

const MAX_ROWS = 5;
const MAX_COLS = 4;

const ROUND_TARGETS = [
  { rows: 2, cols: 2 }, 
  { rows: 3, cols: 3 }, 
  { rows: 5, cols: 4 }, 
];

const Level7_Expansion_Easy: React.FC<any> = ({ 
  csvData, onComplete, levelIndex, hintsEnabled, onOpenSettings, setHintsEnabled, isReviewing, onNext, isAutoPlaying, stars, mode 
}) => {
  const [round, setRound] = useState(1);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isExpanding, setIsExpanding] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [gridData, setGridData] = useState<(TileData | null)[][]>(Array.from({ length: MAX_ROWS }, () => Array(MAX_COLS).fill(null)));
  const [activeRowIndices, setActiveRowIndices] = useState<number[]>([]);
  const [activeColIndices, setActiveColIndices] = useState<number[]>([]);
  const [selectedPos, setSelectedPos] = useState<{ r: number, c: number } | null>(null);
  const [moves, setMoves] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [isTutorialPlaying, setIsTutorialPlaying] = useState(false);
  const [tutorialInstruction, setTutorialInstruction] = useState<{ message: string; colorClass: string; borderColor: string } | null>(null);
  
  const startTimeRef = useRef(Date.now());
  const particleRef = useRef<ParticleHandle>(null);
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [definitionTestId, setDefinitionTestId] = useState<string | null>(null);
  const definitionTestedRef = useRef<Set<string>>(new Set());
  const definitionTestPhaseRef = useRef<boolean>(true);
  const tutorialCheckedRef = useRef(false);
  const tutorialRowSolvedRef = useRef(0);

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
    for (let r = 0; r < target.rows; r++) {
      for (let c = 0; c < target.cols; c++) {
        visibleIndices.push([r, c]);
      }
    }
    
    const visibleTilesSource = visibleIndices.map(([r, c]) => ({ ...fullMatrix[r][c] }));
    const scrambled = shuffleArray(visibleTilesSource);
    visibleIndices.forEach(([r, c], i) => { fullMatrix[r][c] = scrambled[i]; });
    
    setGridData(fullMatrix);
    setActiveRowIndices(Array.from({ length: target.rows }, (_, i) => i));
    setActiveColIndices(Array.from({ length: target.cols }, (_, i) => i));
    setIsInitializing(false);
    startTimeRef.current = Date.now();
  }, [csvData]);

  const getSolvedRowCount = useCallback(() => {
    let count = 0;
    for (let rIdx of activeRowIndices) {
      const row = activeColIndices.map(cIdx => gridData[rIdx][cIdx]);
      if (row.every(t => t?.status === 'solved')) count++;
    }
    return count;
  }, [activeRowIndices, activeColIndices, gridData]);

  const checkMatches = useCallback((currentGrid: (TileData | null)[][], wasSwap: boolean = false) => {
    let matchFoundInRound = false;
    const updatedGrid = currentGrid.map(row => [...row]);
    let currentNewlySolved = 0;

    activeRowIndices.forEach(rIdx => {
      const rowTiles = activeColIndices.map(cIdx => updatedGrid[rIdx][cIdx]!);
      if (rowTiles.every(t => t.status === 'solved')) {
          currentNewlySolved++;
          return;
      }
      
      const firstTile = rowTiles[0];
      if (firstTile && rowTiles.every(t => t.categoryId === firstTile.categoryId)) {
        matchFoundInRound = true;
        currentNewlySolved++;
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
    
    if (matchFoundInRound) {
      setGridData(updatedGrid);
    } else if (wasSwap) {
      setMistakes(m => m + 1);
    }

    if (currentNewlySolved === activeRowIndices.length) {
      if (round < ROUND_TARGETS.length) {
        setTimeout(() => expandGrid(), 1000);
      } else if (!isComplete) {
        audio.playWin();
        setIsComplete(true);
        const finalTime = Date.now() - startTimeRef.current;
        setTimeout(() => onComplete({ 
          timeMs: finalTime, 
          moves, 
          mistakes,
          solvedCategoryIds: csvData.slice(0, MAX_ROWS).map((c:any) => c.id), 
          solvedWords: updatedGrid.flat().filter(t => t?.status === 'solved').map(t => t!.word) 
        }), 1000);
      }
    }
  }, [activeRowIndices, activeColIndices, round, isComplete, moves, mistakes, onComplete, csvData]);

  const expandGrid = useCallback(() => {
    const nextRound = round + 1;
    if (nextRound > ROUND_TARGETS.length) return;
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
    setRound(nextRound);
    setIsExpanding(false);
  }, [round]);

  const handleTileClick = useCallback((r: number, c: number) => {
    if (isComplete || isSwapping || isExpanding || isReviewing || isTutorialPlaying) return;
    const tile = gridData[r][c];
    if (!tile || tile.status === 'solved') return;

    if (selectedPos === null) {
      audio.playSelect();
      setSelectedPos({ r, c });
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
      setIsSwapping(true);
      setMoves(m => m + 1);
      audio.playSwap();
      setGridData(prev => {
        const next = prev.map(row => [...row]);
        if (next[r1][c1]) next[r1][c1] = { ...next[r1][c1]!, status: 'swapping' };
        if (next[r][c]) next[r][c] = { ...next[r][c]!, status: 'swap-target' };
        return next;
      });
      
      setTimeout(() => {
        setGridData(prev => {
          const next = prev.map(row => [...row]);
          const t1 = next[r1][c1];
          const t2 = next[r][c];
          if (t1 && t2) {
            next[r1][c1] = { ...t1, word: t2.word, categoryId: t2.categoryId, categoryName: t2.categoryName, definition: t2.definition };
            next[r][c] = { ...t2, word: t1.word, categoryId: t1.categoryId, categoryName: t1.categoryName, definition: t1.definition };
          }
          return next;
        });
        
        setTimeout(() => {
          setGridData(prev => {
            const final = prev.map(row => row.map(t => (t?.status === 'swapping' || t?.status === 'swap-target') ? { ...t, status: 'neutral' as const } : t));
            setTimeout(() => checkMatches(final, true), 50);
            return final;
          });
          setSelectedPos(null);
          setIsSwapping(false);
        }, 400); 
      }, 50);
    }
  }, [isComplete, isSwapping, isExpanding, isReviewing, isTutorialPlaying, gridData, selectedPos, checkMatches]);

  // --- TUTORIAL INIT ---
  useEffect(() => {
    if (isInitializing || tutorialCheckedRef.current) return;
    tutorialCheckedRef.current = true;

    if (!isModeTutorialSeen(GameMode.LEVEL_EXPANSION)) {
      setIsTutorialPlaying(true);
      const steps = getTutorialSteps('EXPANSION');
      setTutorialInstruction(steps[0]);
    }
  }, [isInitializing]);

  // --- TUTORIAL SOLVER ---
  useEffect(() => {
    if (!isTutorialPlaying || isSwapping || isExpanding || isComplete || isReviewing) return;

    const timer = setTimeout(() => {
      const solvedCount = getSolvedRowCount();
      const totalRows = activeRowIndices.length;
      const steps = getTutorialSteps('EXPANSION');

      // End tutorial after 2 rows or if can't find a fixable row
      if (solvedCount >= 2 || solvedCount >= totalRows) {
        setIsTutorialPlaying(false);
        markModeTutorialSeen(GameMode.LEVEL_EXPANSION);
        setTutorialInstruction(steps[3]);
        return;
      }

      if (solvedCount === 0 && selectedPos === null) {
        setTutorialInstruction(steps[0]);
      } else if (selectedPos !== null) {
        setTutorialInstruction(steps[1]);
      } else if (solvedCount === 1) {
        setTutorialInstruction(steps[2]);
      }

      // Auto-solve: find and fix a non-solved row
      for (let rIdx of activeRowIndices) {
        const row = activeColIndices.map(cIdx => gridData[rIdx][cIdx]);
        if (row.some(t => !t) || row.every(t => t?.status === 'solved')) continue;

        const targetCatId = csvData[rIdx]?.id;
        if (row.every(t => t?.categoryId === targetCatId)) {
          checkMatches(gridData);
          return;
        }

        const wrongIdxInRow = row.findIndex(t => t?.categoryId !== targetCatId);
        if (wrongIdxInRow !== -1) {
          const wrongPos = { r: rIdx, c: activeColIndices[wrongIdxInRow] };
          
          let correctPos: { r: number, c: number } | null = null;
          for (let rr of activeRowIndices) {
            for (let cc of activeColIndices) {
              const t = gridData[rr][cc];
              if (t && t.status !== 'solved' && t.categoryId === targetCatId && rr !== rIdx) {
                correctPos = { r: rr, c: cc };
                break;
              }
            }
            if (correctPos) break;
          }

          if (correctPos) {
            if (!selectedPos) {
              handleTileClick(wrongPos.r, wrongPos.c);
            } else if (selectedPos.r === wrongPos.r && selectedPos.c === wrongPos.c) {
              handleTileClick(correctPos.r, correctPos.c);
            } else {
              handleTileClick(correctPos.r, correctPos.c);
            }
            return;
          }
        }
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [isTutorialPlaying, isSwapping, isExpanding, isComplete, isReviewing, gridData, selectedPos, handleTileClick, activeRowIndices, activeColIndices, csvData, checkMatches, getSolvedRowCount]);

  // AUTO PLAY LOGIC W/ DEFINITION TESTING
  useEffect(() => {
    if (!isAutoPlaying || isComplete || isSwapping || isExpanding || isReviewing || isTutorialPlaying) return;

    const timer = setTimeout(() => {
      // PHASE 1: Test definitions on half the unsolved tiles before solving
      if (definitionTestPhaseRef.current) {
        const allTiles = gridData.flat().filter(t => t !== null) as TileData[];
        const unsolvedTiles = allTiles.filter(t => t.status !== 'solved' && t.definition && !definitionTestedRef.current.has(t.id));
        const targetTestCount = Math.ceil(allTiles.filter(t => t.status !== 'solved').length / 2);
        
        const hasDefinitions = unsolvedTiles.length > 0 && unsolvedTiles.some(t => t.definition && t.definition.trim().length > 0);
        if (!hasDefinitions) {
          definitionTestPhaseRef.current = false;
          setDefinitionTestId(null);
          return;
        }
        
        if (definitionTestedRef.current.size < targetTestCount && unsolvedTiles.length > 0) {
          if (definitionTestId === null) {
            const pickTile = unsolvedTiles[Math.floor(Math.random() * unsolvedTiles.length)];
            setDefinitionTestId(pickTile.id);
          }
          return;
        }
        
        definitionTestPhaseRef.current = false;
        setDefinitionTestId(null);
        return;
      }

      // PHASE 2: Normal solving
      for (let rIdx of activeRowIndices) {
        const row = activeColIndices.map(cIdx => gridData[rIdx][cIdx]);
        if (row.some(t => !t) || row.every(t => t?.status === 'solved')) continue;

        const targetCatId = csvData[rIdx]?.id;
        if (row.every(t => t?.categoryId === targetCatId)) {
          checkMatches(gridData);
          return;
        }
      }

      for (let rIdx of activeRowIndices) {
        const row = activeColIndices.map(cIdx => gridData[rIdx][cIdx]);
        if (row.some(t => !t) || row.every(t => t?.status === 'solved')) continue;

        const targetCatId = csvData[rIdx]?.id;
        const wrongIdxInRow = row.findIndex(t => t?.categoryId !== targetCatId);
        
        if (wrongIdxInRow !== -1) {
          const wrongPos = { r: rIdx, c: activeColIndices[wrongIdxInRow] };
          let correctPos: { r: number, c: number } | null = null;
          for (let rr of activeRowIndices) {
            for (let cc of activeColIndices) {
              const t = gridData[rr][cc];
              if (t && t.status !== 'solved' && t.categoryId === targetCatId && rr !== rIdx) {
                correctPos = { r: rr, c: cc };
                break;
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
    }, 600);

    return () => clearTimeout(timer);
  }, [isAutoPlaying, isComplete, isSwapping, isExpanding, isReviewing, isTutorialPlaying, gridData, selectedPos, handleTileClick, activeRowIndices, activeColIndices, csvData, checkMatches, definitionTestId]);

  // Mark definition as tested after showing it for enough time
  useEffect(() => {
    if (!isAutoPlaying || definitionTestId === null) return;
    const timer = setTimeout(() => {
      definitionTestedRef.current.add(definitionTestId);
      setDefinitionTestId(null);
    }, 800);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, definitionTestId]);

  // Reset definition testing state when level resets
  useEffect(() => {
    if (!isAutoPlaying) {
      definitionTestedRef.current.clear();
      definitionTestPhaseRef.current = true;
      setDefinitionTestId(null);
    }
  }, [isAutoPlaying, csvData]);

  if (isInitializing) return null;

  return (
    <LevelLayout modeName="EXPANSION (EASY)" levelIndex={levelIndex} onOpenSettings={() => onOpenSettings?.([])} isReviewing={isReviewing} onNext={onNext} hintsEnabled={hintsEnabled} onToggleHints={() => setHintsEnabled?.(!hintsEnabled)} stars={stars}>
      <ParticleOverlay ref={particleRef} />
      <div className="flex-1 flex flex-col gap-0.5 pointer-events-auto h-full overflow-visible relative">
        {/* Tutorial Instruction Overlay */}
        {tutorialInstruction && (
          <div className="absolute top-2 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <div className={`px-4 py-2 bg-black border-2 ${tutorialInstruction.borderColor} rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.3)]`}>
              <span className={`text-sm font-black uppercase tracking-wider ${tutorialInstruction.colorClass}`}>
                {tutorialInstruction.message}
              </span>
            </div>
          </div>
        )}
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
export default Level7_Expansion_Easy;
