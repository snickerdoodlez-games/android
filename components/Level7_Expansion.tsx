
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CSVRow, TileData, THEMES } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import LevelLayout from './LevelLayout';
import { getValidatedLevelData } from '../services/levelPreCheck';
import { audio } from '../services/audioService';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import { shuffleArray } from '../services/csvUtils';
import { getSolvedGradient } from '../services/tileStyles';

// Fix for motion.div types in some envs
const MotionDiv = motion.div as any;

interface LevelProps {
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

// Configuration for each round
const ROUND_CONFIGS = [
  { round: 1, cols: 2, rows: 3 }, // 6 tiles
  { round: 2, cols: 3, rows: 5 }, // 15 tiles
  { round: 3, cols: 4, rows: 7 }, // 28 tiles
];

const Level7_Expansion: React.FC<LevelProps> = ({ 
  csvData, onComplete, levelIndex, hintsEnabled, onOpenSettings, setHintsEnabled,
  isReviewing, onNext, isAutoPlaying
}) => {
  const [round, setRound] = useState(1);
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [activeCategoryRows, setActiveCategoryRows] = useState<CSVRow[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isExpanding, setIsExpanding] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  
  // Stats
  const [moves, setMoves] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [hintTriggerCount, setHintTriggerCount] = useState(0);
  const [efficientRowsCount, setEfficientRowsCount] = useState(0);
  const [glowingRows, setGlowingRows] = useState<Set<number>>(new Set());
  const [accumulatedSolvedWords, setAccumulatedSolvedWords] = useState<string[]>([]);
  const [accumulatedCategoryIds, setAccumulatedCategoryIds] = useState<string[]>([]);

  const lastProgressTimeRef = useRef(Date.now());
  const startTimeRef = useRef(Date.now());
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const particleRef = useRef<ParticleHandle>(null);

  // Refs to access latest state in timeouts/callbacks
  const tilesRef = useRef(tiles);
  const activeRowsRef = useRef<CSVRow[]>(activeCategoryRows);
  
  useEffect(() => { tilesRef.current = tiles; }, [tiles]);
  useEffect(() => { activeRowsRef.current = activeCategoryRows; }, [activeCategoryRows]);

  const currentConfig = ROUND_CONFIGS[round - 1];

  // Helper to get fresh words for an existing category
  const getNewWordsForCategory = (catId: string, currentWords: string[], countNeeded: number): string[] => {
    const masterRow = csvData.find(r => r.id === catId);
    if (!masterRow) return [];

    const currentSet = new Set(currentWords.map(w => w.toUpperCase().trim()));
    const available = masterRow.words.filter(w => !currentSet.has(w.toUpperCase().trim()));
    return shuffleArray<string>(available).slice(0, countNeeded);
  };

  const initOrExpandRound = useCallback((targetRound: number) => {
    const nextConfig = ROUND_CONFIGS[targetRound - 1];
    const prevConfig = targetRound > 1 ? ROUND_CONFIGS[targetRound - 2] : null;

    if (targetRound === 1) {
        // --- INITIAL SETUP ---
        const MAX_COLS = 4;
        const newRows: CSVRow[] = getValidatedLevelData(nextConfig.rows, csvData, MAX_COLS);
        
        setActiveCategoryRows(newRows);
        activeRowsRef.current = newRows;

        const newTiles: TileData[] = [];
        newRows.forEach(cat => {
            const wordsForLevel: string[] = cat.words.slice(0, nextConfig.cols);
            wordsForLevel.forEach(w => {
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
    } else if (prevConfig) {
        // --- EXPANSION LOGIC ---
        
        // 1. RECONSTRUCT ACTIVE ROWS ORDER BASED ON CURRENT BOARD STATE
        const currentVisualRows: string[] = []; // Array of category IDs
        for(let r=0; r < prevConfig.rows; r++) {
            const rowTiles = tilesRef.current.slice(r * prevConfig.cols, (r + 1) * prevConfig.cols);
            if (rowTiles.length > 0) {
                currentVisualRows.push(rowTiles[0].categoryId);
            }
        }

        // Reorder the activeRowsRef to match the visual board state
        const reorderedActiveRows: CSVRow[] = [];
        const poolOfRows = [...activeRowsRef.current];
        
        currentVisualRows.forEach(id => {
            const idx = poolOfRows.findIndex(row => row.id === id);
            if (idx !== -1) {
                reorderedActiveRows.push(poolOfRows[idx]);
                poolOfRows.splice(idx, 1); // Remove so we don't duplicate
            }
        });
        reorderedActiveRows.push(...poolOfRows);

        // 2. DETERMINE NEW ROWS NEEDED
        let nextActiveRows = [...reorderedActiveRows];
        const rowsToAdd = nextConfig.rows - prevConfig.rows;
        
        if (rowsToAdd > 0) {
            const existingIds = new Set(nextActiveRows.map(r => r.id));
            const availablePool = csvData.filter(r => !existingIds.has(r.id));
            const newRows = getValidatedLevelData(rowsToAdd, availablePool, 4);
            nextActiveRows = [...nextActiveRows, ...newRows];
        }
        
        setActiveCategoryRows(nextActiveRows);
        activeRowsRef.current = nextActiveRows;

        // 3. BUILD NEW GRID
        const newTileGrid = new Array(nextConfig.rows * nextConfig.cols).fill(null);
        const tilesToShuffleAndPlace: TileData[] = [];

        // 4. PROCESS EXISTING ROWS (Lock old tiles, Generate new fillers)
        for (let r = 0; r < prevConfig.rows; r++) {
            const prevRowStart = r * prevConfig.cols;
            const newRowStart = r * nextConfig.cols;
            
            // Get the tiles that were in this row in the previous round
            const existingTiles = tilesRef.current.slice(prevRowStart, prevRowStart + prevConfig.cols);
            
            // Lock them into the START of the new row
            existingTiles.forEach((tile, offset) => {
                newTileGrid[newRowStart + offset] = {
                    ...tile,
                    status: 'solved',
                    isSolved: true,
                    color: tile.color || THEMES[0].solvedColors[r % THEMES[0].solvedColors.length]
                };
            });

            // Generate NEW tiles for this category to fill the rest of the row
            const catId = nextActiveRows[r].id; // Use the reordered list
            const catName = nextActiveRows[r].name;
            const currentWords = existingTiles.map(t => t.word);
            const countNeeded = nextConfig.cols - prevConfig.cols;
            
            const newWords = getNewWordsForCategory(catId, currentWords, countNeeded);
            
            newWords.forEach(w => {
                tilesToShuffleAndPlace.push({
                    id: Math.random().toString(36).substr(2, 9),
                    word: w,
                    categoryId: catId,
                    categoryName: catName.includes(':') ? catName.split(':')[1].trim() : catName,
                    status: 'neutral',
                    isSolved: false
                });
            });
        }

        // 5. PROCESS BRAND NEW ROWS
        for (let r = prevConfig.rows; r < nextConfig.rows; r++) {
            const cat = nextActiveRows[r];
            const words = shuffleArray(cat.words).slice(0, nextConfig.cols);
            
            words.forEach(w => {
                tilesToShuffleAndPlace.push({
                    id: Math.random().toString(36).substr(2, 9),
                    word: w,
                    categoryId: cat.id,
                    categoryName: cat.name.includes(':') ? cat.name.split(':')[1].trim() : cat.name,
                    status: 'neutral',
                    isSolved: false
                });
            });
        }

        // 6. INITIAL FILL
        const shuffledPool = shuffleArray(tilesToShuffleAndPlace);
        for (let i = 0; i < newTileGrid.length; i++) {
            if (newTileGrid[i] === null) {
                // Just fill linearly first, we will fix conflicts in step 7
                if (shuffledPool.length > 0) {
                    newTileGrid[i] = shuffledPool.pop()!;
                }
            }
        }

        // 7. ANTI-SELF-SOLVE PASS
        for (let i = 0; i < newTileGrid.length; i++) {
            const tile = newTileGrid[i];
            if (!tile || tile.status === 'solved' || tile.status === 'locked') continue;

            const rowIdx = Math.floor(i / nextConfig.cols);
            const rowCatId = nextActiveRows[rowIdx]?.id;

            if (tile.categoryId === rowCatId) {
                let swapped = false;
                for (let j = 0; j < newTileGrid.length; j++) {
                    const other = newTileGrid[j];
                    if (!other || other.status === 'solved' || other.status === 'locked') continue;
                    
                    const otherRowIdx = Math.floor(j / nextConfig.cols);
                    if (otherRowIdx === rowIdx) continue;

                    const otherRowCatId = nextActiveRows[otherRowIdx]?.id;

                    if (other.categoryId !== rowCatId && tile.categoryId !== otherRowCatId) {
                        newTileGrid[i] = other;
                        newTileGrid[j] = tile;
                        swapped = true;
                        break;
                    }
                }
                
                if (!swapped) {
                     for (let j = 0; j < newTileGrid.length; j++) {
                        const other = newTileGrid[j];
                        if (!other || other.status === 'solved' || other.status === 'locked') continue;
                        const otherRowIdx = Math.floor(j / nextConfig.cols);
                        if (otherRowIdx !== rowIdx) {
                             newTileGrid[i] = other;
                             newTileGrid[j] = tile;
                             break;
                        }
                     }
                }
            }
        }
        
        setTiles(newTileGrid);
    }

    setRound(targetRound);
    setIsExpanding(false);
    setIsInitializing(false);
    setIsSwapping(false);
    setSelectedId(null);
    lastProgressTimeRef.current = Date.now();
    
    if (targetRound > 1) {
        audio.playLevelStart(); 
    }

  }, [csvData]); 

  // Initial Load
  useEffect(() => {
    initOrExpandRound(1);
    setMoves(0);
    setMistakes(0);
    setHintTriggerCount(0);
    setEfficientRowsCount(0);
    setAccumulatedSolvedWords([]);
    setAccumulatedCategoryIds([]);
    startTimeRef.current = Date.now();
  }, [levelIndex, initOrExpandRound]); 

  // --- GAMEPLAY LOGIC ---

  const checkMatches = useCallback((currentTiles: TileData[]) => {
    const config = ROUND_CONFIGS[round - 1];
    const rowSize = config.cols;
    const rowCount = Math.floor(currentTiles.length / rowSize);
    
    const updatedTiles = [...currentTiles];
    let changed = false;
    let newlySolvedRows = 0;

    for (let r = 0; r < rowCount; r++) {
      const rowStart = r * rowSize;
      const rowEnd = rowStart + rowSize;
      const rowSegment = updatedTiles.slice(rowStart, rowEnd);

      if (rowSegment.every(t => t.status === 'solved')) {
          newlySolvedRows++;
          continue;
      }

      if (rowSegment.length < rowSize) continue;

      const firstId = rowSegment[0].categoryId;
      const allMatch = rowSegment.every(t => t && t.categoryId === firstId);

      if (allMatch) {
        changed = true;
        newlySolvedRows++;
        audio.playRowSolved();
        lastProgressTimeRef.current = Date.now();
        setEfficientRowsCount(prev => prev + 1);

        const color = THEMES[0].solvedColors[r % THEMES[0].solvedColors.length];
        
        for (let i = rowStart; i < rowEnd; i++) {
            const tile = updatedTiles[i];
            const rect = tileRefs.current.get(tile.id)?.getBoundingClientRect();
            // Only explode particles for newly solved tiles
            if (rect && particleRef.current && tile.status !== 'solved') {
                particleRef.current.explode(rect.left + rect.width / 2, rect.top + rect.height / 2, "#FFFFFF");
            }
            updatedTiles[i] = { ...tile, status: 'solved', isSolved: true, color };
        }
      }
    }

    if (changed) {
        setTiles(updatedTiles);
    } else if (selectedId) {
        setMistakes(m => m + 1);
    }

    if (newlySolvedRows === rowCount && rowCount > 0) {
        if (round < 3) {
            audio.playWin(); 
            setIsExpanding(true);
            
            // Auto Play Optimization: Fast forward expansion
            const delay = isAutoPlaying ? 500 : 1000;
            
            setTimeout(() => {
                initOrExpandRound(round + 1);
            }, delay); 
        } else if (!isComplete) {
            audio.playWin();
            setIsComplete(true);
            const solvedCategoryIds = Array.from(new Set([...accumulatedCategoryIds, ...updatedTiles.map(t => t.categoryId)]));
            const solvedWords = [...accumulatedSolvedWords, ...updatedTiles.map(t => t.word)];

            setTimeout(() => onComplete({ 
                timeMs: Date.now() - startTimeRef.current, 
                hintsUsedCount: hintTriggerCount, 
                hintsUsed: hintTriggerCount,
                moves: moves, 
                rowEfficiency: efficientRowsCount,
                mistakes: mistakes,
                solvedCategoryIds,
                solvedWords
            }), 1000);
        }
    }
  }, [round, isComplete, moves, hintTriggerCount, efficientRowsCount, mistakes, accumulatedCategoryIds, accumulatedSolvedWords, onComplete, selectedId, initOrExpandRound, isAutoPlaying]);

  // Glowing Hint Logic
  useEffect(() => {
    if (isInitializing || isExpanding || isComplete) return;
    const config = currentConfig;
    const newGlowingRows = new Set<number>();
    
    const rowSize = config.cols;
    const rowCount = Math.floor(tiles.length / rowSize);

    for (let r = 0; r < rowCount; r++) {
      const row = tiles.slice(r * rowSize, (r + 1) * rowSize);
      if (row.every(t => t.status === 'solved')) continue;
      
      const counts: Record<string, number> = {};
      row.forEach(t => { counts[t.categoryId] = (counts[t.categoryId] || 0) + 1; });
      
      if (Object.values(counts).some(count => count === (rowSize - 1))) {
        newGlowingRows.add(r);
      }
    }
    setGlowingRows(newGlowingRows);
  }, [tiles, isInitializing, isExpanding, isComplete, currentConfig]);

  const handleTileClick = (id: string) => {
    if (isComplete || isSwapping || isExpanding) return;
    const tile = tiles.find(t => t.id === id);
    if (!tile || tile.status === 'solved' || tile.status === 'locked') return;
    
    if (selectedId === null) {
      audio.playSelect(); 
      setSelectedId(id);
      setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'selected' } : t));
    } else if (selectedId === id) {
      setSelectedId(null); 
      setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'neutral' } : t));
    } else {
      const idx1 = tiles.findIndex(t => t.id === (selectedId as string));
      const idx2 = tiles.findIndex(t => t.id === id);
      if (idx1 === -1 || idx2 === -1) return;

      setIsSwapping(true); 
      setMoves(m => m + 1); 
      audio.playSwap();
      
      setTiles(prev => prev.map(t => {
        if (t.id === selectedId) return { ...t, status: 'swapping' };
        if (t.id === id) return { ...t, status: 'swap-target' };
        return t;
      }));
      
      setTimeout(() => {
          setTiles(prev => {
              const next = [...prev];
              const t1 = next[idx1];
              const t2 = next[idx2];
              
              next[idx1] = { ...t1, word: t2.word, categoryId: t2.categoryId, categoryName: t2.categoryName };
              next[idx2] = { ...t2, word: t1.word, categoryId: t1.categoryId, categoryName: t1.categoryName };

              return next;
          });

          setTimeout(() => {
              setTiles(prev => prev.map(t => (t.id === selectedId || t.id === id) ? { ...t, status: 'fading-out-bg' } : t));
              
              setTimeout(() => {
                  setTiles(prev => {
                      const final = prev.map(t => (t.status === 'fading-out-bg') ? { ...t, status: 'neutral' as const } : t);
                      setTimeout(() => checkMatches(final), 50);
                      return final;
                  });
                  setSelectedId(null);
                  setIsSwapping(false);
              }, 250);
          }, 450);
      }, 50);
    }
  };

  // --- AUTO PLAY LOGIC ---
  useEffect(() => {
    if (!isAutoPlaying || isComplete || isSwapping || isExpanding || isReviewing) return;

    const performMove = () => {
        if (document.hidden) return; 

        const config = currentConfig;
        const rowSize = config.cols;
        const rowCount = Math.floor(tiles.length / rowSize);
        let targetRowIndex = -1;
        
        // Find first unsolved row
        for (let r = 0; r < rowCount; r++) {
            const rowTiles = tiles.slice(r * rowSize, (r + 1) * rowSize);
            if (!rowTiles.every(t => t.status === 'solved' || t.status === 'locked')) {
                targetRowIndex = r;
                break;
            }
        }

        if (targetRowIndex === -1) return; 

        const rowStart = targetRowIndex * rowSize;
        const rowEnd = rowStart + rowSize;
        const targetRowTiles = tiles.slice(rowStart, rowEnd);

        let targetCatId: string | null = null;

        const establishedTile = targetRowTiles.find(t => t.status === 'solved' || t.status === 'locked');
        if (establishedTile) {
            targetCatId = establishedTile.categoryId;
        } else {
            const counts: Record<string, number> = {};
            for (const t of targetRowTiles) {
                if (!t.isSolved && t.status !== 'solved') {
                    counts[t.categoryId] = (counts[t.categoryId] || 0) + 1;
                }
            }
            const sortedCats = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
            if (sortedCats.length > 0) targetCatId = sortedCats[0];
        }

        if (!targetCatId) {
             const available = targetRowTiles.filter(t => !t.isSolved && t.status !== 'solved');
             if (available.length > 0) targetCatId = available[0].categoryId;
        }
        
        if (!targetCatId) {
             const available = tiles.filter(t => !t.isSolved && t.status !== 'solved');
             if (available.length > 0) targetCatId = available[0].categoryId;
        }

        if (!targetCatId) return;

        let sourceId = null;
        for (let i = 0; i < tiles.length; i++) {
            if (i >= rowStart && i < rowEnd) continue; 
            if (tiles[i].categoryId === targetCatId && !tiles[i].isSolved && tiles[i].status !== 'solved' && tiles[i].status !== 'locked') {
                sourceId = tiles[i].id;
                break;
            }
        }

        let destId = null;
        for (let i = rowStart; i < rowEnd; i++) {
            if (tiles[i].categoryId !== targetCatId && !tiles[i].isSolved && tiles[i].status !== 'solved' && tiles[i].status !== 'locked') {
                destId = tiles[i].id;
                break;
            }
        }

        if (sourceId && destId) {
            if (!selectedId) handleTileClick(sourceId);
            else if (selectedId === sourceId) handleTileClick(destId);
            else if (selectedId === destId) handleTileClick(sourceId);
            else handleTileClick(selectedId);
        }
    };

    const timer = setTimeout(performMove, 400); 
    return () => clearTimeout(timer);
  }, [isAutoPlaying, isComplete, isSwapping, isExpanding, tiles, selectedId, currentConfig, round]);

  // Hint Trigger
  const triggerHint = useCallback(() => {
    if (isComplete || isSwapping || isExpanding || !hintsEnabled) return;
    const config = currentConfig;
    const rowSize = config.cols;
    
    // Find all rows that aren't fully solved or locked
    const rowCount = Math.floor(tiles.length / rowSize);
    const candidateRows: number[] = [];
    for (let r = 0; r < rowCount; r++) {
      const row = tiles.slice(r * rowSize, (r + 1) * rowSize);
      if (!row.every(t => t.status === 'solved' || t.status === 'locked')) {
        candidateRows.push(r);
      }
    }

    if (candidateRows.length === 0) return;

    // Prioritize rows with fewest neutral tiles (closest to completion)
    const sortedRows = candidateRows.sort((a, b) => {
        const countA = tiles.slice(a * rowSize, (a + 1) * rowSize).filter(t => t.status === 'neutral' || t.status === 'selected').length;
        const countB = tiles.slice(b * rowSize, (b + 1) * rowSize).filter(t => t.status === 'neutral' || t.status === 'selected').length;
        return countA - countB;
    });

    const targetRowIndex = sortedRows[0];
    const targetRowStart = targetRowIndex * rowSize;
    const targetRowEnd = targetRowStart + rowSize;
    const targetRowTiles = tiles.slice(targetRowStart, targetRowEnd);
    
    const neutralInRow = targetRowTiles.filter(t => t.status === 'neutral' || t.status === 'selected');
    if (neutralInRow.length === 0) return;

    // Determine the category of this row
    // If no tiles are solved/locked, pick a category from the neutral pool
    let targetCatId: string | null = null;
    const solvedOrLocked = targetRowTiles.find(t => t.status === 'solved' || t.status === 'locked');
    if (solvedOrLocked) {
        targetCatId = solvedOrLocked.categoryId;
    } else {
        targetCatId = neutralInRow[0].categoryId;
    }

    if (!targetCatId) return;

    const next = [...tiles];
    const neutralGlobal = tiles.filter(t => (t.status === 'neutral' || t.status === 'selected') && t.categoryId === targetCatId);

    if (neutralInRow.length === 1) {
        // --- SINGLE TILE HINT (Solve the row) ---
        const slotToSolve = neutralInRow[0];
        const correctTileGlobal = neutralGlobal.find(t => t.id !== slotToSolve.id) || slotToSolve;
        
        // Find position of correctTileGlobal in "next" array
        const currentPos = next.findIndex(t => t.id === correctTileGlobal.id);
        const targetPos = next.findIndex(t => t.id === slotToSolve.id);

        if (currentPos !== -1 && targetPos !== -1 && currentPos !== targetPos) {
            // Swap it in
            const temp = next[targetPos];
            next[targetPos] = { ...next[currentPos], status: 'locked' };
            next[currentPos] = { ...temp, status: temp.status === 'locked' ? 'locked' : 'neutral' };
        } else {
            next[targetPos] = { ...next[targetPos], status: 'locked' };
        }

        setTiles(next);
        audio.playTick();
        setHintTriggerCount(prev => prev + 1);
        lastProgressTimeRef.current = Date.now();

        // 1.5 second delay before solving the row
        setTimeout(() => {
            setTiles(prev => {
                const final = [...prev];
                checkMatches(final);
                return final;
            });
        }, 1500);

    } else {
        // --- TWO TILE HINT (Classic behavior) ---
        const pairToLock = neutralGlobal.slice(0, 2);
        if (pairToLock.length < 2) return;

        pairToLock.forEach((tileToLock) => {
            let targetSlot = -1;
            for (let s = 0; s < rowSize; s++) {
                const idx = targetRowStart + s;
                if (next[idx].status !== 'locked' && next[idx].status !== 'solved') {
                    targetSlot = idx;
                    break;
                }
            }
            
            if (targetSlot !== -1) {
                 const currentIdx = next.findIndex(t => t.id === tileToLock.id);
                 if (currentIdx !== targetSlot) {
                     const temp = next[targetSlot];
                     next[targetSlot] = { ...next[currentIdx], status: 'locked' };
                     next[currentIdx] = { ...temp, status: temp.status === 'locked' ? 'locked' : 'neutral' };
                 } else {
                     next[targetSlot] = { ...next[targetSlot], status: 'locked' };
                 }
            }
        });
        
        setTiles(next);
        audio.playTick();
        setHintTriggerCount(prev => prev + 1);
        lastProgressTimeRef.current = Date.now();
        
        setTimeout(() => checkMatches(next), 50);
    }
  }, [tiles, isComplete, isSwapping, isExpanding, hintsEnabled, currentConfig, checkMatches]);

  // Periodic Hint
  useEffect(() => {
    if (isComplete || isInitializing || isExpanding || !hintsEnabled) return;
    const interval = setInterval(() => {
        if (document.hidden) return;
        if (Date.now() - lastProgressTimeRef.current > 90000) {
            triggerHint();
        }
    }, 1000);
    return () => clearInterval(interval);
  }, [isComplete, isInitializing, isExpanding, hintsEnabled, triggerHint]);

  if (isInitializing) {
      return (
          <div className="flex-1 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"></div>
          </div>
      );
  }

  const gridColsClass = currentConfig.cols === 2 ? 'grid-cols-2' : currentConfig.cols === 3 ? 'grid-cols-3' : 'grid-cols-4';

  return (
    <LevelLayout 
      modeName="EXPANSION" 
      levelIndex={levelIndex} 
      onOpenSettings={() => onOpenSettings?.([])} 
      isReviewing={isReviewing} 
      onNext={onNext}
      hintsEnabled={hintsEnabled}
      onToggleHints={() => setHintsEnabled?.(!hintsEnabled)}
    >
      <ParticleOverlay ref={particleRef} />
      
      <div className="flex-1 flex flex-col items-center justify-center w-full h-full overflow-visible">
         <MotionDiv 
            layout
            className={`w-full h-full flex flex-col gap-2 p-2 transition-all duration-700 ease-in-out`}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
         >
             {Array.from({ length: tiles.length / currentConfig.cols }).map((_, r) => {
                 const row = tiles.slice(r * currentConfig.cols, r * currentConfig.cols + currentConfig.cols);
                 if (row.length === 0) return null;
                 
                 const solved = row.every(t => t.status === 'solved');
                 const showCategoryTab = solved || (row.length > 0 && row[0].status === 'solved');
                 const isGlowing = glowingRows.has(r);
                 
                 return (
                   <MotionDiv 
                        layout
                        key={`row-${r}`}
                        className="flex-1 relative min-h-0 overflow-visible w-full"
                   >
                      {solved && <SolvedRowBackground seed={row[0].categoryId} />}
                      <div className={`
                        absolute inset-0 z-0 transition-opacity duration-500 rounded-medium
                        ${isGlowing && !solved ? 'bg-white/5 border border-white/40 animate-pulse-highlight' : 'opacity-0'}
                      `} />
                      {showCategoryTab && (
                        <div className="absolute top-0 left-8 z-[100] transform -translate-y-[calc(100%-4px)]">
                          <div className="px-3 py-0.5 rounded-t-lg text-[9px] font-black uppercase bg-black border-x-4 border-t-4 border-white text-white whitespace-nowrap shadow-[0_-4px_12px_rgba(0,0,0,0.5)]">
                            {row[0].categoryName}
                          </div>
                        </div>
                      )}
                      <div className={`grid ${gridColsClass} gap-1.5 w-full h-full relative z-10 rounded-small transition-all duration-300 ${solved ? 'p-3' : 'p-1'}`}>
                        {row.map(tile => (
                          <Tile 
                            key={tile.id} 
                            data={tile} 
                            onClick={handleTileClick} 
                            ref={el => { if(el) tileRefs.current.set(tile.id, el); }} 
                          />
                        ))}
                      </div>
                   </MotionDiv>
                 );
             })}
         </MotionDiv>
      </div>
    </LevelLayout>
  );
};

export default Level7_Expansion;
