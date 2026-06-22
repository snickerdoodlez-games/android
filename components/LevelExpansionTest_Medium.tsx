import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CSVRow, TileData, THEMES, GameMode, SOLVED_COLORS } from '../types';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import LevelLayout from './LevelLayout';
import CategoryTabLabel from './CategoryTabLabel';
import { audio } from '../services/audioService';
import { shuffleArray } from '../services/csvUtils';
import { getExpansionData, ensureExpansionDataInitialized } from '../services/csvExpansionDataLoader';

const MAX_ROWS = 6;
const MAX_COLS = 4;

const ROUND_TARGETS = [
  { rows: 2, cols: 2 }, 
  { rows: 4, cols: 3 }, 
  { rows: 6, cols: 4 }, 
];

const LevelExpansionTest_Medium: React.FC<any> = ({ 
  csvData, onComplete, levelIndex, hintsEnabled, onOpenSettings, setHintsEnabled, isReviewing, onNext, isAutoPlaying, stars, mode, hintCount, onHintClick, hintsDisabledForLevel
}) => {
  const [round, setRound] = useState(1);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isExpanding, setIsExpanding] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [gridData, setGridData] = useState<(TileData | null)[][]>(Array.from({ length: MAX_ROWS }, () => Array(MAX_COLS).fill(null)));
  const [activeRowIndices, setActiveRowIndices] = useState<number[]>([0, 1]);
  const [activeColIndices, setActiveColIndices] = useState<number[]>([0, 1]);
  const [selectedPos, setSelectedPos] = useState<{ r: number, c: number } | null>(null);
  const [moves, setMoves] = useState(0);
  const [isShrinking, setIsShrinking] = useState(false);
  const [isPoppingIn, setIsPoppingIn] = useState(false);
  const [isSquishing, setIsSquishing] = useState(false);
  
  const startTimeRef = useRef(Date.now());
  const lastActivityRef = useRef(Date.now());
  const usedWordsRef = useRef<Map<string, Set<string>>>(new Map());
  const isCompleteRef = useRef(false);
  const isSwappingRef = useRef(false);
  const isReviewingRef = useRef(false);
  const isExpandingRef = useRef(false);
  const roundRef = useRef(1);
  const hintedRowsRef = useRef(new Set<number>());
  const gridDataRef = useRef(gridData);
  const activeRowIndicesRef = useRef(activeRowIndices);
  const activeColIndicesRef = useRef(activeColIndices);
  const onCompleteRef = useRef(onComplete);
  const csvDataRef = useRef<any[]>([]);
  
  isCompleteRef.current = isComplete;
  isSwappingRef.current = isSwapping;
  isReviewingRef.current = isReviewing;
  isExpandingRef.current = isExpanding;
  roundRef.current = round;
  gridDataRef.current = gridData;
  activeRowIndicesRef.current = activeRowIndices;
  activeColIndicesRef.current = activeColIndices;
  onCompleteRef.current = onComplete;

  useEffect(() => {
    ensureExpansionDataInitialized();
    const pool = shuffleArray(getExpansionData());
    const selectedCats = pool.slice(0, MAX_ROWS);
    csvDataRef.current = selectedCats;
    
    const target = ROUND_TARGETS[0];
    const fullMatrix = Array.from({ length: MAX_ROWS }, () => Array(MAX_COLS).fill(null));
    const usedWordsMap = new Map<string, Set<string>>();
    
    selectedCats.forEach((cat: any, rIdx: number) => {
      usedWordsMap.set(cat.id, new Set<string>());
      cat.words.forEach((word: string, cIdx: number) => {
        if (cIdx < MAX_COLS) {
          const wordDef = cat.definitions?.[cIdx];
          const definition = (wordDef && wordDef.trim().length > 0) ? wordDef : (cat.catDict || '');
          fullMatrix[rIdx][cIdx] = {
            id: Math.random().toString(36).substr(2, 9), word, definition,
            categoryId: cat.id, categoryName: cat.name.includes(':') ? cat.name.split(':')[1].trim() : cat.name,
            status: 'neutral', isSolved: false
          };
          usedWordsMap.get(cat.id)!.add(word.toUpperCase().trim());
        }
      });
    });
    usedWordsRef.current = usedWordsMap;
    
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
  }, []);

  const checkMatches = useCallback((currentGrid: (TileData | null)[][]) => {
    if (isExpandingRef.current) return;
    let changed = false;
    let newlySolvedCount = 0;
    const updatedGrid = currentGrid.map(row => [...row]);
    
    activeRowIndicesRef.current.forEach(rIdx => {
      const rowTiles = activeColIndicesRef.current.map(cIdx => updatedGrid[rIdx][cIdx]).filter(Boolean) as TileData[];
      if (rowTiles.length === 0) return;
      const solved = rowTiles.every(t => t.status === 'solved');
      if (solved) { newlySolvedCount++; return; }
      
      const firstTile = rowTiles[0];
      if (firstTile && rowTiles.every(t => t.categoryId === firstTile.categoryId)) {
        changed = true; newlySolvedCount++; audio.playRowSolved();
        const color = THEMES[0].solvedColors[rIdx % THEMES[0].solvedColors.length];
        activeColIndicesRef.current.forEach(cIdx => {
          const tile = updatedGrid[rIdx][cIdx];
          if (tile) updatedGrid[rIdx][cIdx] = { ...tile, status: 'solved', isSolved: true, color };
        });
      }
    });

    if (changed) setGridData(updatedGrid);
    const activeRows = activeRowIndicesRef.current;
    if (newlySolvedCount === activeRows.length && !isCompleteRef.current) {
      if (roundRef.current < ROUND_TARGETS.length) {
        setTimeout(() => expandGrid(), 1000);
      } else {
        audio.playWin(); setIsComplete(true);
        const cats = csvDataRef.current;
        setTimeout(() => onCompleteRef.current({ timeMs: Date.now() - startTimeRef.current, moves, solvedCategoryIds: cats.map((c:any) => `${c.id} | ${c.name}`), solvedWords: updatedGrid.flat().filter(t => t?.status === 'solved').map(t => `${t!.word}|${t!.categoryName}`) }), 1200);
      }
    }
  }, []);

  const expandGrid = useCallback(() => {
    if (isExpandingRef.current || isCompleteRef.current) return;
    const nextRound = roundRef.current + 1;
    if (nextRound > ROUND_TARGETS.length) return;
    
    setIsShrinking(true);
    setIsExpanding(true);
    isExpandingRef.current = true;
    audio.playExpansion();
    
    const target = ROUND_TARGETS[nextRound - 1];
    const fullPool = getExpansionData();
    const usedWordsMap = usedWordsRef.current;
    
    setTimeout(() => {
      setIsShrinking(false);
      
      setActiveRowIndices(Array.from({ length: target.rows }, (_, i) => i));
      setActiveColIndices(Array.from({ length: target.cols }, (_, i) => i));
      setRound(nextRound);
      setIsPoppingIn(true);
      lastActivityRef.current = Date.now();
      
      setTimeout(() => {
        setIsPoppingIn(false);
        
        // Fill null positions from grid expansion
        setGridData(prev => {
          const next = prev.map(row => [...row]);
          for (let r = 0; r < target.rows; r++) {
            for (let c = 0; c < target.cols; c++) {
              if (!next[r][c]) {
                const cat = csvDataRef.current[r];
                if (!cat) continue;
                const fullCat = fullPool.find((fc: any) => fc.id === cat.id);
                if (!fullCat) continue;
                const catUsedWords = usedWordsMap.get(cat.id);
                if (!catUsedWords) { usedWordsMap.set(cat.id, new Set<string>()); continue; }
                const unused: number[] = [];
                for (let wi = 0; wi < fullCat.words.length; wi++) {
                  if (!catUsedWords.has(fullCat.words[wi].toUpperCase().trim())) unused.push(wi);
                }
                if (unused.length === 0) continue;
                const wi = unused[Math.floor(Math.random() * unused.length)];
                const w = fullCat.words[wi];
                const wd = fullCat.definitions?.[wi];
                const def = (wd && wd.trim().length > 0) ? wd : (fullCat.catDict || '');
                next[r][c] = {
                  id: Math.random().toString(36).substr(2, 9), word: w, definition: def,
                  categoryId: cat.id, categoryName: fullCat.name.includes(':') ? fullCat.name.split(':')[1].trim() : fullCat.name,
                  status: 'neutral', isSolved: false
                };
                catUsedWords.add(w.toUpperCase().trim());
              }
            }
          }
          return next;
        });
        
        // Pre-calculate flip decisions — pick new replacement words NOW
        // so the flip animation reveals the new word on the "back" of the tile.
        interface FlipInfo { col: number; newWord: string; newDef: string; newCatName: string; }
        const flipDecisions: Map<number, FlipInfo[]> = new Map();
        for (let r = 0; r < target.rows; r++) {
          const rowTiles = Array.from({ length: target.cols }, (_, c) => gridDataRef.current[r]?.[c]);
          if (!rowTiles.some(t => t && t.status === 'solved')) continue;
          const firstTile = rowTiles.find(t => t !== null);
          if (!firstTile) continue;
          const catId = firstTile.categoryId;
          const fullCat = fullPool.find((c: any) => c.id === catId);
          if (!fullCat) continue;
          const catUsedWords = usedWordsMap.get(catId);
          if (!catUsedWords) continue;
          const catName = fullCat.name.includes(':') ? fullCat.name.split(':')[1].trim() : fullCat.name;
          const unused: number[] = [];
          for (let wi = 0; wi < fullCat.words.length; wi++) {
            if (!catUsedWords.has(fullCat.words[wi].toUpperCase().trim())) unused.push(wi);
          }
          const maxFlip = Math.min(2, Math.min(target.cols - 1, unused.length));
          if (maxFlip === 0) continue;
          const flipCount = 1 + (maxFlip > 1 && Math.random() > 0.4 ? 1 : 0);
          const availableCols = shuffleArray(Array.from({ length: target.cols }, (_, i) => i));
          const chosenCols: number[] = [];
          const pickedAdjacent = new Set<number>();
          for (const col of availableCols) {
            if (chosenCols.length >= flipCount) break;
            if (pickedAdjacent.has(col)) continue;
            chosenCols.push(col);
            if (col > 0) pickedAdjacent.add(col - 1);
            if (col < target.cols - 1) pickedAdjacent.add(col + 1);
          }
          if (chosenCols.length === 0) chosenCols.push(availableCols[0]);
          if (chosenCols.length >= target.cols) chosenCols.pop();
          const newWordIndices = shuffleArray(unused).slice(0, chosenCols.length);
          const infos: FlipInfo[] = chosenCols.map((col, i) => {
            const wi = newWordIndices[i];
            const w = fullCat.words[wi];
            const wd = fullCat.definitions?.[wi];
            const def = (wd && wd.trim().length > 0) ? wd : (fullCat.catDict || '');
            catUsedWords.add(w.toUpperCase().trim());
            return { col, newWord: w, newDef: def, newCatName: catName };
          });
          flipDecisions.set(r, infos);
        }
        
        // Flip tiles row by row, staggered. The new word is set immediately
        // so it "appears on the back" as the tile rotates on its Y-axis.
        const FLIP_ROW_DELAY = 250;
        
        for (let r = 0; r < target.rows; r++) {
          setTimeout(() => {
            const infos = flipDecisions.get(r);
            if (!infos || infos.length === 0) return;
            audio.playFlip();
            const colSet = new Set(infos.map(fi => fi.col));
            setGridData(prev => {
              const next = prev.map(row => [...row]);
              for (let c = 0; c < target.cols; c++) {
                const t = next[r][c];
                if (t && t.status === 'solved' && colSet.has(c)) {
                  const fi = infos.find(info => info.col === c)!;
                  // Assign a DIFFERENT categoryId so the replacement tile cannot
                  // auto-match in its home row after scrambling. Pick from a random
                  // different row's solved category, or the same catId if only one row exists.
                  let differentCatId = catId;
                  if (target.rows > 1) {
                    const otherRows = Array.from({length: target.rows}, (_, i) => i).filter(rr => rr !== r);
                    const randomOtherRow = otherRows[Math.floor(Math.random() * otherRows.length)];
                    const otherRowTiles = Array.from({length: target.cols}, (_, cc) => gridDataRef.current[randomOtherRow]?.[cc]);
                    const otherSolved = otherRowTiles.find(tt => tt && tt.status === 'solved');
                    if (otherSolved) differentCatId = otherSolved.categoryId;
                  }
                  next[r][c] = {
                    ...t,
                    id: Math.random().toString(36).substr(2, 9),
                    status: 'flipping-out',
                    isSolved: false,
                    word: fi.newWord,
                    definition: fi.newDef,
                    categoryId: differentCatId,
                    categoryName: fi.newCatName,
                    color: undefined
                  };
                }
              }
              return next;
            });
          }, r * FLIP_ROW_DELAY);
        }
        
        const totalFlipDuration = (target.rows - 1) * FLIP_ROW_DELAY + 800;
        
        setTimeout(() => {
          // Flip animation complete — converted flipped tiles to neutral.
          // They already have their new words from the flip phase.
          setGridData(prev => {
            const next = prev.map(row => [...row]);
            for (let r = 0; r < target.rows; r++) {
              for (let c = 0; c < target.cols; c++) {
                const t = next[r][c];
                if (t && t.status === 'flipping-out') {
                  next[r][c] = { ...t, status: 'neutral' as const };
                }
              }
            }
            // Fill any remaining nulls (safety net)
            for (let rr = 0; rr < target.rows; rr++) {
              for (let cc = 0; cc < target.cols; cc++) {
                if (!next[rr][cc]) {
                  const cat = csvDataRef.current[rr];
                  if (!cat) continue;
                  const fullCat = fullPool.find((fc: any) => fc.id === cat.id);
                  if (!fullCat) continue;
                  const catUsedWords = usedWordsMap.get(cat.id);
                  if (!catUsedWords) continue;
                  const unused2: number[] = [];
                  for (let wi = 0; wi < fullCat.words.length; wi++) {
                    if (!catUsedWords.has(fullCat.words[wi].toUpperCase().trim())) unused2.push(wi);
                  }
                  const wi = unused2.length > 0 ? unused2[Math.floor(Math.random() * unused2.length)] : Math.floor(Math.random() * fullCat.words.length);
                  const w = fullCat.words[wi];
                  const wd = fullCat.definitions?.[wi];
                  const def = (wd && wd.trim().length > 0) ? wd : (fullCat.catDict || '');
                  next[rr][cc] = {
                    id: Math.random().toString(36).substr(2, 9), word: w, definition: def,
                    categoryId: cat.id, categoryName: fullCat.name.includes(':') ? fullCat.name.split(':')[1].trim() : fullCat.name,
                    status: 'neutral', isSolved: false
                  };
                  catUsedWords.add(w.toUpperCase().trim());
                }
              }
            }
            // Scramble all non-solved tiles
            const allIndices: [number, number][] = [];
            const allTiles: TileData[] = [];
            for (let rr = 0; rr < target.rows; rr++) {
              for (let cc = 0; cc < target.cols; cc++) {
                const t = next[rr][cc];
                if (t && t.status !== 'solved') {
                  allIndices.push([rr, cc]);
                  allTiles.push(t);
                }
              }
            }
            const scrambled = shuffleArray(allTiles);
            allIndices.forEach(([rr, cc], i) => { if (scrambled[i]) next[rr][cc] = scrambled[i]; });
            // Break up accidentally-solved rows
            for (let rr = 0; rr < target.rows; rr++) {
              const rowTiles: { c: number; tile: TileData }[] = [];
              for (let cc = 0; cc < target.cols; cc++) {
                const t = next[rr][cc];
                if (t) rowTiles.push({ c: cc, tile: t });
              }
              if (rowTiles.length < 2) continue;
              const firstCat = rowTiles[0].tile.categoryId;
              if (rowTiles.every(item => item.tile.categoryId === firstCat)) {
                let swapped = false;
                const lastIdx = rowTiles.length - 1;
                const swapC = rowTiles[lastIdx].c;
                for (let sr = 0; sr < target.rows && !swapped; sr++) {
                  if (sr === rr) continue;
                  for (let sc = 0; sc < target.cols && !swapped; sc++) {
                    const st = next[sr][sc];
                    if (st && st.status !== 'solved' && st.categoryId !== firstCat) {
                      next[rr][swapC] = st;
                      next[sr][sc] = rowTiles[lastIdx].tile;
                      swapped = true;
                    }
                  }
                }
              }
            }
            return next;
          });
          
          isExpandingRef.current = false;
          setIsExpanding(false);
        }, totalFlipDuration);
      }, 450);
    }, 450);
  }, []);

  const handleTileClick = useCallback((r: number, c: number) => {
    lastActivityRef.current = Date.now();
    if (isCompleteRef.current || isSwappingRef.current || isExpandingRef.current || isReviewingRef.current) return;
    const tile = gridDataRef.current[r]?.[c];
    if (!tile || tile.status === 'solved' || tile.status === 'locked' || tile.status === 'flipping-out') return;

    if (selectedPos === null) {
      audio.playSelect(); setSelectedPos({ r, c });
      setGridData(prev => { const next = prev.map(row => [...row]); if (next[r][c]) next[r][c] = { ...next[r][c]!, status: 'selected' }; return next; });
    } else if (selectedPos.r === r && selectedPos.c === c) {
      setSelectedPos(null);
      setGridData(prev => { const next = prev.map(row => [...row]); if (next[r][c]) next[r][c] = { ...next[r][c]!, status: 'neutral' }; return next; });
    } else {
      const { r: r1, c: c1 } = selectedPos;
      isSwappingRef.current = true; setIsSwapping(true); setMoves(m => m + 1); audio.playSwap();
      setGridData(prev => { const next = prev.map(row => [...row]); if (next[r1][c1]) next[r1][c1] = { ...next[r1][c1]!, status: 'swapping' }; if (next[r][c]) next[r][c] = { ...next[r][c]!, status: 'swap-target' }; return next; });
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
            setGridData(prev => { const final = prev.map(row => row.map(t => t?.status === 'fading-out-bg' ? { ...t, status: 'neutral' as const } : t)); setTimeout(() => checkMatches(final), 50); return final; });
            setSelectedPos(null); isSwappingRef.current = false; setIsSwapping(false);
          }, 200);
        }, 400);
      }, 50);
    }
  }, [checkMatches, selectedPos]);

  useEffect(() => {
    if (!isAutoPlaying || isComplete || isSwapping || isExpanding || isReviewing) return;
    const timer = setTimeout(() => {
      for (let rIdx of activeRowIndices) {
        const row = activeColIndices.map(cIdx => gridData[rIdx][cIdx]!);
        if (row.some(t => !t) || row.every(t => t.status === 'solved')) continue;
        const cats = csvDataRef.current;
        const targetCatId = cats[rIdx]?.id;
        if (row.every(t => t.categoryId === targetCatId)) { checkMatches(gridData); return; }
        const wrongIdxInRow = row.findIndex(t => t.categoryId !== targetCatId);
        if (wrongIdxInRow !== -1) {
          const wrongPos = { r: rIdx, c: activeColIndices[wrongIdxInRow] };
          let correctPos: { r: number, c: number } | null = null;
          for (let rr of activeRowIndices) { for (let cc of activeColIndices) { const t = gridData[rr][cc]; if (t && t.status !== 'solved' && t.categoryId === targetCatId && (rr !== rIdx)) { correctPos = { r: rr, c: cc }; break; } } if (correctPos) break; }
          if (correctPos) { if (!selectedPos) handleTileClick(wrongPos.r, wrongPos.c); else handleTileClick(correctPos.r, correctPos.c); return; }
        }
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, isComplete, isSwapping, isExpanding, isReviewing, gridData, selectedPos, handleTileClick, activeRowIndices, activeColIndices, checkMatches]);

  const performHint = useCallback(() => {
    if (isCompleteRef.current || isReviewingRef.current || isSwappingRef.current || isExpandingRef.current) return;
    const currentGrid = gridDataRef.current;
    const activeRows = activeRowIndicesRef.current;
    const activeCols = activeColIndicesRef.current;
    const colCount = activeCols.length;
    const hintedRows = hintedRowsRef.current;
    const cats = csvDataRef.current;
    
    if (colCount === 2) {
      setGridData(prev => {
        const next = prev.map(row => [...row]);
        const solvedColors = THEMES[0].solvedColors;
        for (const rIdx of activeRows) {
          const targetCatId = cats[rIdx]?.id;
          if (!targetCatId) continue;
          for (const cIdx of activeCols) {
            const currentTile = next[rIdx][cIdx];
            if (!currentTile || currentTile.categoryId === targetCatId) continue;
            for (const sr of activeRows) { 
              if (sr === rIdx) continue; 
              for (const sc of activeCols) { 
                const srcTile = next[sr][sc]; 
                if (srcTile && srcTile.categoryId === targetCatId) { 
                  next[sr][sc] = { ...currentTile, status: 'neutral' as const }; 
                  next[rIdx][cIdx] = { ...srcTile, status: 'neutral' as const }; 
                  break; 
                } 
              } 
            }
          }
          const color = solvedColors[rIdx % solvedColors.length];
          for (const cIdx of activeCols) { const tile = next[rIdx][cIdx]; if (tile) next[rIdx][cIdx] = { ...tile, status: 'solved' as const, isSolved: true, color }; }
        }
        setTimeout(() => checkMatches(next), 50);
        return next;
      });
      audio.playRowSolved();
      window.dispatchEvent(new CustomEvent('hint-applied'));
      return;
    }
    
    let bestRow: number | null = null;
    let bestWrongIndices: number[] = [];
    let bestMatchIndices: { r: number; c: number }[] = [];
    const shuffledRows = [...activeRows];
    for (let i = shuffledRows.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [shuffledRows[i], shuffledRows[j]] = [shuffledRows[j], shuffledRows[i]]; }
    
    for (const rIdx of shuffledRows) {
      if (hintedRows.has(rIdx)) continue;
      const row = activeCols.map(cIdx => currentGrid[rIdx][cIdx]);
      if (row.some(t => !t)) continue;
      if (row.every(t => t!.status === 'solved')) continue;
      const targetCatId = cats[rIdx]?.id;
      if (!targetCatId) continue;
      
      const wrongIndices: number[] = [];
      for (const cIdx of activeCols) { const t = currentGrid[rIdx][cIdx]; if (t && t.categoryId !== targetCatId && t.status !== 'solved' && t.status !== 'locked') wrongIndices.push(cIdx); }
      if (wrongIndices.length === 0) continue;
      
      const matchIndices: { r: number; c: number }[] = [];
      const otherRows = activeRows.filter(r => r !== rIdx);
      for (const sr of otherRows) {
        for (const sc of activeCols) { const t = currentGrid[sr][sc]; if (t && t.categoryId === targetCatId && t.status !== 'solved' && t.status !== 'locked') matchIndices.push({ r: sr, c: sc }); }
      }
      if (matchIndices.length === 0) continue;
      
      bestRow = rIdx;
      bestWrongIndices = wrongIndices;
      bestMatchIndices = matchIndices;
      break;
    }
    
    if (bestRow === null) return;
    const swapCount = Math.min(bestWrongIndices.length, bestMatchIndices.length);
    if (swapCount === 0) return;
    
    hintedRows.add(bestRow);
    
    setGridData(prev => {
      const next = prev.map(row => [...row]);
      const solvedColors = THEMES[0].solvedColors;
      const color = solvedColors[bestRow! % solvedColors.length];
      for (let s = 0; s < swapCount; s++) {
        const srcR = bestMatchIndices[s].r; const srcC = bestMatchIndices[s].c;
        const dstC = bestWrongIndices[s];
        const srcTile = next[srcR][srcC]; const dstTile = next[bestRow!][dstC];
        if (srcTile && dstTile) { next[bestRow!][dstC] = { ...srcTile, status: 'neutral' as const }; next[srcR][srcC] = { ...dstTile, status: 'neutral' as const }; }
      }
      for (const cIdx of activeCols) {
        const tile = next[bestRow!][cIdx];
        if (tile && tile.status !== 'solved') {
          next[bestRow!][cIdx] = { ...tile, status: 'solved' as const, isSolved: true, color };
        }
      }
      setTimeout(() => checkMatches(next), 50);
      return next;
    });
    
    audio.playRowSolved();
    window.dispatchEvent(new CustomEvent('hint-applied'));
  }, [checkMatches]);
  
  useEffect(() => {
    const handler = () => { if (hintsEnabled && !hintsDisabledForLevel) performHint(); };
    window.addEventListener('hint-used', handler);
    return () => window.removeEventListener('hint-used', handler);
  }, [hintsEnabled, hintsDisabledForLevel, performHint]);

  useEffect(() => {
    if (!isComplete) return;
    
    let solvedRowColors: string[] = [];
    for (const rIdx of activeRowIndicesRef.current) {
      const row = activeColIndicesRef.current.map(cIdx => gridData[rIdx]?.[cIdx]);
      if (row.every(t => t?.status === 'solved')) {
        solvedRowColors.push(row[0]?.color || SOLVED_COLORS[rIdx % SOLVED_COLORS.length]);
      }
    }
    
    let colorIdx = 0;
    let colorTimeout: ReturnType<typeof setTimeout> | null = null;
    let interval: ReturnType<typeof setInterval> | null = null;
    if (solvedRowColors.length > 0) {
      const startColor = solvedRowColors[0];
      const startIdx = SOLVED_COLORS.indexOf(startColor);
      if (startIdx >= 0) colorIdx = startIdx;
    }

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

  useEffect(() => {
    if (isComplete) {
      const t = setTimeout(() => setIsSquishing(true), 200);
      return () => clearTimeout(t);
    } else {
      setIsSquishing(false);
    }
  }, [isComplete]);

  if (isInitializing) return null;

  return (
    <LevelLayout modeName="EXPANSION TEST" levelIndex={levelIndex} onOpenSettings={() => onOpenSettings?.([])} isReviewing={isReviewing} onNext={onNext} hintsEnabled={hintsEnabled} onToggleHints={() => setHintsEnabled?.(!hintsEnabled)} stars={stars} hintCount={hintCount} onHintClick={onHintClick} hintsDisabledForLevel={hintsDisabledForLevel}>
      <div className="flex-1 flex flex-col gap-0 h-full w-full overflow-visible relative">
         {activeRowIndices.map(rIdx => {
             const rowTiles = activeColIndices.map(cIdx => gridData[rIdx][cIdx]);
             const solved = rowTiles.every(t => t?.status === 'solved');
             const firstTile = rowTiles[0];
             return (
               <div key={rIdx} className={`flex-1 relative min-h-0 overflow-visible ${isShrinking ? 'expansion-tile-shrink' : isPoppingIn && !rowTiles.every(t => t?.status === 'solved') ? 'expansion-tile-pop-in' : ''} ${isSquishing ? 'level-complete-squish' : ''}`}>
                  {solved && <SolvedRowBackground seed={firstTile?.categoryId || rIdx} />}
                  {solved && (
                    <div className="absolute top-0 left-6 z-[100] transform -translate-y-full">
                      <div className="px-3 py-1 text-[10px] font-black uppercase bg-black border-2 border-white text-white rounded-t-lg shadow-[0_-4px_12px_rgba(0,0,0,0.8)] whitespace-nowrap">
                        <CategoryTabLabel name={firstTile?.categoryName || ''} catDict={csvDataRef.current?.find((r: any) => r.id === firstTile?.categoryId)?.catDict || ''} />
                      </div>
                    </div>
                  )}
                  <div className={`grid gap-0.5 w-full h-full relative z-10 transition-all duration-300 ${solved ? 'p-[10px]' : 'p-0.5'}`} style={{ gridTemplateColumns: `repeat(${activeColIndices.length}, 1fr)` }}>
                    {rowTiles.map((t, cIdx) => (t && <Tile key={t.id} data={t} onClick={() => handleTileClick(rIdx, cIdx)} isNarrow={activeColIndices.length > 4} gridEntryDelay={0.05 + rIdx * 0.1} />))}
                  </div>
               </div>
             );
         })}
      </div>
    </LevelLayout>
  );
};
export default LevelExpansionTest_Medium;