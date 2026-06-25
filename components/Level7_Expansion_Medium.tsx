import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CSVRow, TileData, THEMES, GameMode, SOLVED_COLORS } from '../types';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import LevelLayout from './LevelLayout';
import CategoryTabLabel from './CategoryTabLabel';
import { audio } from '../services/audioService';
import { shuffleArray } from '../services/csvUtils';

const MAX_ROWS = 6;
const MAX_COLS = 4;

const ROUND_TARGETS = [
  { rows: 2, cols: 2 }, 
  { rows: 4, cols: 3 }, 
  { rows: 6, cols: 4 }, 
];

const Level7_Expansion_Medium: React.FC<any> = ({ 
  csvData, onComplete, levelIndex, hintsEnabled, onOpenSettings, setHintsEnabled, isReviewing, onNext, isAutoPlaying, stars, mode, hintCount, onHintClick, hintsDisabledForLevel
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
  
  const startTimeRef = useRef(Date.now());
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const isCompleteRef = useRef(false);
  const isSwappingRef = useRef(false);
  const isReviewingRef = useRef(false);
  const hintedRowsRef = useRef(new Set<number>());
  const gridDataRef = useRef(gridData);
  const activeRowIndicesRef = useRef(activeRowIndices);
  const activeColIndicesRef = useRef(activeColIndices);
  const isExpandingRef = useRef(false);
  const roundRef = useRef(1);
  const onCompleteRef = useRef(onComplete);
  const movesRef = useRef(moves);
  const mistakesRef = useRef(mistakes);
  
  isCompleteRef.current = isComplete;
  isSwappingRef.current = isSwapping;
  isReviewingRef.current = isReviewing;
  isExpandingRef.current = isExpanding;
  roundRef.current = round;
  gridDataRef.current = gridData;
  activeRowIndicesRef.current = activeRowIndices;
  activeColIndicesRef.current = activeColIndices;
  onCompleteRef.current = onComplete;
  movesRef.current = moves;
  mistakesRef.current = mistakes;
  const handleTileClickRef = useRef<typeof handleTileClick>(null!);

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
          fullMatrix[rIdx][cIdx] = { id: Math.random().toString(36).substr(2, 9), word, definition, categoryId: cat.id, categoryName: cat.name.includes(':') ? cat.name.split(':')[1].trim() : cat.name, status: 'neutral', isSolved: false };
        }
      });
    });
    const visibleIndices: [number, number][] = [];
    for (let r = 0; r < target.rows; r++) { for (let c = 0; c < target.cols; c++) visibleIndices.push([r, c]); }
    const visibleTilesSource = visibleIndices.map(([r, c]) => ({ ...fullMatrix[r][c] }));
    const scrambled = shuffleArray(visibleTilesSource);
    visibleIndices.forEach(([r, c], i) => { fullMatrix[r][c] = scrambled[i]; });
    setGridData(fullMatrix);
    setActiveRowIndices(Array.from({ length: target.rows }, (_, i) => i));
    setActiveColIndices(Array.from({ length: target.cols }, (_, i) => i));
    setIsInitializing(false);
    startTimeRef.current = Date.now();
  }, [csvData]);

  const checkMatches = useCallback((currentGrid: (TileData | null)[][], wasSwap: boolean = false) => {
    if (isExpandingRef.current) return;
    let changedInRound = false, newlySolvedCount = 0;
    const updatedGrid = currentGrid.map(row => [...row]);
    const activeRows = activeRowIndicesRef.current;
    const activeCols = activeColIndicesRef.current;
    activeRows.forEach(rIdx => {
      const rowTiles = activeCols.map(cIdx => updatedGrid[rIdx][cIdx]!);
      if (rowTiles.every(t => t.status === 'solved')) { newlySolvedCount++; return; }
      const firstTile = rowTiles[0];
      if (firstTile && rowTiles.every(t => t.categoryId === firstTile.categoryId)) {
        changedInRound = true; newlySolvedCount++; audio.playRowSolved();
        const color = THEMES[0].solvedColors[rIdx % THEMES[0].solvedColors.length];
        activeCols.forEach(cIdx => { const tile = updatedGrid[rIdx][cIdx]; if (tile) updatedGrid[rIdx][cIdx] = { ...tile, status: 'solved', isSolved: true, color }; });
      }
    });
    if (changedInRound) setGridData(updatedGrid);
    else if (wasSwap) setMistakes(m => m + 1);
    if (newlySolvedCount === activeRows.length) {
      if (isExpandingRef.current || isCompleteRef.current) return;
      if (roundRef.current < ROUND_TARGETS.length) setTimeout(() => expandGrid(), 1000);
      else if (!isCompleteRef.current) { audio.playWin(); setIsComplete(true); const finalTime = Date.now() - startTimeRef.current; setTimeout(() => onCompleteRef.current({ timeMs: finalTime, moves: movesRef.current, mistakes: mistakesRef.current, solvedCategoryIds: csvData.slice(0, MAX_ROWS).map((c:any)=>`${c.id} | ${c.name}`), solvedWords: updatedGrid.flat().filter(t => t?.status === 'solved').map(t => `${t!.word}|${t!.categoryName}`) }), 1000); }
    }
  }, [csvData]);

  const expandGrid = useCallback(() => {
    if (isExpandingRef.current || isCompleteRef.current) return;
    const nextRound = roundRef.current + 1; if (nextRound > ROUND_TARGETS.length) return;
    isExpandingRef.current = true;
    setIsExpanding(true); audio.playLevelStart();
    const target = ROUND_TARGETS[nextRound - 1];
    setGridData(prev => {
      const next = prev.map(row => [...row]);
      const nonSolvedIndices: [number, number][] = []; const nonSolvedTiles: TileData[] = [];
      for (let r = 0; r < target.rows; r++) for (let c = 0; c < target.cols; c++) { const t = next[r][c]; if (!t || t.status !== 'solved') { nonSolvedIndices.push([r, c]); if (t) nonSolvedTiles.push(t); } }
      const scrambled = shuffleArray(nonSolvedTiles);
      nonSolvedIndices.forEach(([r, c], i) => { if (scrambled[i]) next[r][c] = scrambled[i]; });

      // Prevent auto-solved rows after expansion
      for (let r = 0; r < target.rows; r++) {
        const rowNonSolved: { c: number; tile: TileData }[] = [];
        for (let c = 0; c < target.cols; c++) {
          const t = next[r][c];
          if (t && t.status !== 'solved') rowNonSolved.push({ c, tile: t });
        }
        if (rowNonSolved.length < 2) continue;
        const firstCat = rowNonSolved[0].tile.categoryId;
        if (rowNonSolved.every(item => item.tile.categoryId === firstCat)) {
          let swapped = false;
          const lastIdx = rowNonSolved.length - 1;
          const swapC = rowNonSolved[lastIdx].c;
          for (let sr = 0; sr < target.rows && !swapped; sr++) {
            if (sr === r) continue;
            for (let sc = 0; sc < target.cols && !swapped; sc++) {
              const st = next[sr][sc];
              if (st && st.status !== 'solved' && st.categoryId !== firstCat) {
                next[r][swapC] = st;
                next[sr][sc] = rowNonSolved[lastIdx].tile;
                swapped = true;
              }
            }
          }
        }
      }
      return next;
    });
    setActiveRowIndices(Array.from({ length: target.rows }, (_, i) => i));
    setActiveColIndices(Array.from({ length: target.cols }, (_, i) => i));
    setRound(nextRound);
    isExpandingRef.current = false;
    setIsExpanding(false);
  }, []);

  const handleTileClick = useCallback((r: number, c: number) => {
    if (isComplete || isSwapping || isExpanding || isReviewing) return;
    const tile = gridData[r][c]; if (!tile || tile.status === 'solved') return;
    if (selectedPos === null) {
      audio.playSelect(); setSelectedPos({ r, c });
      setGridData(prev => { const next = prev.map(row => [...row]); if (next[r][c]) next[r][c] = { ...next[r][c]!, status: 'selected' }; return next; });
    } else if (selectedPos.r === r && selectedPos.c === c) {
      setSelectedPos(null);
      setGridData(prev => { const next = prev.map(row => [...row]); if (next[r][c]) next[r][c] = { ...next[r][c]!, status: 'neutral' }; return next; });
    } else {
      const { r: r1, c: c1 } = selectedPos; setIsSwapping(true); setMoves(m => m + 1); audio.playSwap();
      setGridData(prev => { const next = prev.map(row => [...row]); if (next[r1][c1]) next[r1][c1] = { ...next[r1][c1]!, status: 'swapping' }; if (next[r][c]) next[r][c] = { ...next[r][c]!, status: 'swap-target' }; return next; });
      setTimeout(() => {
        setGridData(prev => { const next = prev.map(row => [...row]); const t1 = next[r1][c1]; const t2 = next[r][c]; if (t1 && t2) { next[r1][c1] = { ...t1, word: t2.word, categoryId: t2.categoryId, categoryName: t2.categoryName, definition: t2.definition }; next[r][c] = { ...t2, word: t1.word, categoryId: t1.categoryId, categoryName: t1.categoryName, definition: t1.definition }; } return next; });
        setTimeout(() => { setGridData(prev => { const final = prev.map(row => row.map(t => (t?.status === 'swapping' || t?.status === 'swap-target') ? { ...t, status: 'neutral' as const } : t)); setTimeout(() => checkMatches(final, true), 50); return final; }); setSelectedPos(null); setIsSwapping(false); }, 400);
      }, 50);
    }
  }, [isComplete, isSwapping, isExpanding, isReviewing, gridData, selectedPos, checkMatches]);
  
  useEffect(() => { handleTileClickRef.current = handleTileClick; }, [handleTileClick]);

  useEffect(() => {
    if (!isAutoPlaying || isComplete || isReviewing) return;
    let isCancelled = false;
    let timerId: ReturnType<typeof setTimeout> | null = null;
    const autoTick = () => {
      if (isCancelled || isCompleteRef.current || isReviewingRef.current) return;
      if (isSwappingRef.current || isExpandingRef.current) { timerId = setTimeout(autoTick, 300); return; }
      const currentGrid = gridDataRef.current;
      const activeRows = activeRowIndicesRef.current;
      const activeCols = activeColIndicesRef.current;
      let foundSelected = false;
      for (let rr of activeRows) { for (let cc of activeCols) { const t = currentGrid[rr]?.[cc]; if (t && t.status === 'selected') { foundSelected = true; break; } } if (foundSelected) break; }
      for (let rIdx of activeRows) { const row = activeCols.map(cIdx => currentGrid[rIdx]?.[cIdx]); if (row.some(t => !t) || row.every(t => t?.status === 'solved')) continue; const targetCatId = csvData[rIdx]?.id; if (row.every(t => t?.categoryId === targetCatId)) { checkMatches(currentGrid); timerId = setTimeout(autoTick, 200); return; } }
      for (let rIdx of activeRows) { const row = activeCols.map(cIdx => currentGrid[rIdx]?.[cIdx]); if (row.some(t => !t) || row.every(t => t?.status === 'solved')) continue; const targetCatId = csvData[rIdx]?.id; const wrongIdxInRow = row.findIndex(t => t?.categoryId !== targetCatId); if (wrongIdxInRow !== -1) { const wrongPos = { r: rIdx, c: activeCols[wrongIdxInRow] }; let correctPos: { r: number, c: number } | null = null; for (let rr of activeRows) { for (let cc of activeCols) { const t = currentGrid[rr]?.[cc]; if (t && t.status !== 'solved' && t.categoryId === targetCatId && rr !== rIdx) { correctPos = { r: rr, c: cc }; break; } } if (correctPos) break; } if (correctPos) { if (foundSelected) { handleTileClickRef.current(correctPos.r, correctPos.c); timerId = setTimeout(autoTick, 250); return; } else if (!isSwappingRef.current) { handleTileClickRef.current(wrongPos.r, wrongPos.c); timerId = setTimeout(autoTick, 250); return; } } } }
      timerId = setTimeout(autoTick, 200);
    };
    timerId = setTimeout(autoTick, 200);
    return () => { isCancelled = true; if (timerId) clearTimeout(timerId); };
  }, [isAutoPlaying, isComplete, isReviewing]);


  const performHint = useCallback(() => {
    const currentGrid = gridDataRef.current; const activeRows = activeRowIndicesRef.current; const activeCols = activeColIndicesRef.current;
    const colCount = activeCols.length; const hintedRows = hintedRowsRef.current;
    if (isCompleteRef.current || isReviewingRef.current || isSwappingRef.current) return;
    if (colCount === 2) {
      const solvedColors = THEMES[0].solvedColors;
      setGridData(prev => {
        const next = prev.map(row => [...row]);
        for (const rIdx of activeRows) {
          const targetCatId = csvData[rIdx]?.id; if (!targetCatId) continue;
          for (const cIdx of activeCols) {
            const currentTile = next[rIdx][cIdx]; if (!currentTile || currentTile.categoryId === targetCatId) continue;
            for (const sr of activeRows) { if (sr === rIdx) continue; for (const sc of activeCols) { const srcTile = next[sr][sc]; if (srcTile && srcTile.categoryId === targetCatId) { next[sr][sc] = { ...currentTile, status: 'neutral' as const }; next[rIdx][cIdx] = { ...srcTile, status: 'neutral' as const }; break; } } }
          }
          const color = solvedColors[rIdx % solvedColors.length];
          for (const cIdx of activeCols) { const tile = next[rIdx][cIdx]; if (tile) next[rIdx][cIdx] = { ...tile, status: 'solved' as const, isSolved: true, color }; }
        }
        setTimeout(() => checkMatches(next), 50);
        return next;
      });
      audio.playRowSolved(); window.dispatchEvent(new CustomEvent('hint-applied')); return;
    }
    const solvedColors = THEMES[0].solvedColors;
    let bestRow: number | null = null;
    let bestWrongIndices: number[] = [];
    let bestMatchIndices: { r: number; c: number }[] = [];
    const shuffledRows = [...activeRows]; for (let i = shuffledRows.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [shuffledRows[i], shuffledRows[j]] = [shuffledRows[j], shuffledRows[i]]; }
    for (const rIdx of shuffledRows) {
      if (hintedRows.has(rIdx)) continue; const row = activeCols.map(cIdx => currentGrid[rIdx][cIdx]); if (row.some(t => !t) || row.every(t => t!.status === 'solved')) continue;
      const targetCatId = csvData[rIdx]?.id; if (!targetCatId) continue;
      const wrongIndices: number[] = []; for (const cIdx of activeCols) { const t = currentGrid[rIdx][cIdx]; if (t && t.categoryId !== targetCatId && t.status !== 'solved' && t.status !== 'locked') wrongIndices.push(cIdx); } if (wrongIndices.length === 0) continue;
      const matchIndices: { r: number; c: number }[] = []; const otherRows = activeRows.filter(r => r !== rIdx);
      for (const sr of otherRows) { for (const sc of activeCols) { const t = currentGrid[sr][sc]; if (t && t.categoryId === targetCatId && t.status !== 'solved' && t.status !== 'locked') matchIndices.push({ r: sr, c: sc }); } } if (matchIndices.length === 0) continue;
      bestRow = rIdx; bestWrongIndices = wrongIndices; bestMatchIndices = matchIndices; break;
    }
    if (bestRow === null) return;
    const swapCount = Math.min(bestWrongIndices.length, bestMatchIndices.length); if (swapCount === 0) return;
    hintedRows.add(bestRow);
    setGridData(prev => {
      const next = prev.map(row => [...row]);
      const color = solvedColors[bestRow! % solvedColors.length];
      for (let s = 0; s < swapCount; s++) {
        const srcR = bestMatchIndices[s].r; const srcC = bestMatchIndices[s].c; const dstC = bestWrongIndices[s];
        const srcTile = next[srcR][srcC]; const dstTile = next[bestRow!][dstC];
        if (srcTile && dstTile) { next[bestRow!][dstC] = { ...srcTile, status: 'neutral' as const }; next[srcR][srcC] = { ...dstTile, status: 'neutral' as const }; }
      }
      for (const cIdx of activeCols) { const tile = next[bestRow!][cIdx]; if (tile && tile.status !== 'solved') next[bestRow!][cIdx] = { ...tile, status: 'solved' as const, isSolved: true, color }; }
      setTimeout(() => checkMatches(next), 50);
      return next;
    });
    audio.playRowSolved(); window.dispatchEvent(new CustomEvent('hint-applied'));
  }, [csvData]);
  
  useEffect(() => {
    const handler = () => { if (hintsEnabled && !hintsDisabledForLevel) performHint(); };
    window.addEventListener('hint-used', handler); return () => window.removeEventListener('hint-used', handler);
  }, [hintsEnabled, hintsDisabledForLevel, performHint]);

  // CELEBRATION: When all rows are solved, cycle through alternating neon colors
  // Start after a 0.75s delay so all rows have their initial colors set before cycling
  useEffect(() => {
    if (!isComplete) return;
    let colorIdx = 0;
    let colorTimeout: ReturnType<typeof setTimeout> | null = null;
    let interval: ReturnType<typeof setInterval> | null = null;

    const startCycling = () => {
      interval = setInterval(() => {
        colorIdx = (colorIdx + 1) % SOLVED_COLORS.length;
        setGridData(prev => prev.map((row, rIdx) => row.map(t => {
          if (t && t.status === 'solved') {
            const offsetColor = SOLVED_COLORS[(colorIdx + rIdx) % SOLVED_COLORS.length];
            return { ...t, color: offsetColor };
          }
          return t;
        })));
      }, 100);
    };

    colorTimeout = setTimeout(startCycling, 750);

    return () => {
      if (colorTimeout) clearTimeout(colorTimeout);
      if (interval) clearInterval(interval);
    };
  }, [isComplete]);

  if (isInitializing) return null;

  return (
    <LevelLayout modeName="EXPANSION" levelIndex={levelIndex} onOpenSettings={() => onOpenSettings?.([])} isReviewing={isReviewing} onNext={onNext} hintsEnabled={hintsEnabled} onToggleHints={() => setHintsEnabled?.(!hintsEnabled)} stars={stars} hintCount={hintCount} onHintClick={onHintClick} hintsDisabledForLevel={hintsDisabledForLevel}>
      <div className="flex-1 flex flex-col gap-0.5 pointer-events-auto h-full overflow-visible relative">
         {activeRowIndices.map(rIdx => {
             const rowTiles = activeColIndices.map(cIdx => gridData[rIdx][cIdx]);
             const solved = rowTiles.every(t => t?.status === 'solved');
             const firstTile = rowTiles[0];
             return (
               <div key={rIdx} className="flex-1 relative min-h-0 overflow-visible">
                  {solved && <SolvedRowBackground seed={firstTile?.categoryId || rIdx} />}
                  {solved && (
                    <div className="absolute top-0 left-6 z-[100] transform -translate-y-full">
                      <div className="px-5 py-2 text-[clamp(0.75rem,3vw,0.9375rem)] font-black uppercase bg-black border-2 border-white text-white rounded-t-lg shadow-[0_-4px_12px_rgba(0,0,0,0.8)] whitespace-nowrap">
                        <CategoryTabLabel name={firstTile?.categoryName || ''} catDict={csvData?.find((r: any) => r.id === firstTile?.categoryId)?.catDict || ''} />
                      </div>
                    </div>
                  )}
                  <div className={`grid gap-0.5 w-full h-full relative z-10 transition-all duration-300 ${solved ? 'p-[10px]' : 'p-0.5'}`} style={{ gridTemplateColumns: `repeat(${activeColIndices.length}, 1fr)` }}>
                    {rowTiles.map((t, cIdx) => (t && <Tile key={t.id} data={t} onClick={() => handleTileClick(rIdx, cIdx)} isNarrow={activeColIndices.length > 4} isExpansion gridEntryDelay={0.05 + rIdx * 0.1} ref={el => { if(el) tileRefs.current.set(t.id, el); }} />))}
                  </div>
               </div>
             );
         })}
      </div>
    </LevelLayout>
  );
};
export default Level7_Expansion_Medium;