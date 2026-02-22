import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CSVRow, TileData, THEMES } from '../types';
import { motion } from 'framer-motion';
import Tile from './Tile';
import LevelLayout from './LevelLayout';
import { getValidatedLevelData } from '../services/levelContent';
import { audio } from '../services/audioService';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';

const MotionDiv = motion.div as any;

const COLS = 6;
const ROWS = 9;
const INITIAL_SPAWN_INTERVAL = 2500;
const SPEED_STEP = 200;
const MIN_SPAWN_INTERVAL = 800;

interface CascadeLevelProps {
  key?: React.Key;
  csvData: CSVRow[];
  onComplete: (stats: any) => void;
  onExit: () => void;
  levelIndex: number;
  hintsEnabled: boolean;
  difficulty?: number;
  category?: string;
  onOpenSettings?: (cats?: { name: string, isSolved: boolean }[]) => void;
  setHintsEnabled?: (val: boolean) => void;
  isReviewing?: boolean;
  onNext?: () => void;
  isAutoPlaying?: boolean;
  stars?: number;
}

type CascadeTile = TileData & { row: number; col: number };

export default function Level8_Cascade({
  csvData, onComplete, onExit, levelIndex, hintsEnabled, onOpenSettings, setHintsEnabled,
  isReviewing, onNext, isAutoPlaying, stars
}: CascadeLevelProps) {
  const [grid, setGrid] = useState<(CascadeTile | null)[][]>(
    Array.from({ length: ROWS }, () => Array(COLS).fill(null))
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isSwapping, setIsSwapping] = useState(false);
  const [clearedCount, setClearedCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [activePool, setActivePool] = useState<CSVRow[]>([]);

  const particleRef = useRef<ParticleHandle>(null);
  const startTimeRef = useRef(Date.now());
  const spawnTimerRef = useRef<any>(null);

  const speedLevel = Math.floor(clearedCount / 10) + 1;
  const spawnInterval = Math.max(MIN_SPAWN_INTERVAL, INITIAL_SPAWN_INTERVAL - (speedLevel - 1) * SPEED_STEP);

  useEffect(() => {
    const categories = getValidatedLevelData(8, csvData, 4);
    setActivePool(categories);
    setIsInitializing(false);
  }, [csvData]);

  const handleGameOver = useCallback(() => {
    if (isGameOver) return;
    setIsGameOver(true);
    audio.playError();

    onComplete({
      timeMs: Date.now() - startTimeRef.current,
      clearedTiles: clearedCount,
      speedReached: speedLevel,
      moves: clearedCount / 2,
      mistakes: 0,
      failed: clearedCount < 20
    });
  }, [isGameOver, clearedCount, speedLevel, onComplete]);

  const spawnTile = useCallback(() => {
    if (isGameOver || isReviewing || activePool.length === 0) return;

    setGrid(prev => {
      const next = prev.map(row => [...row]);
      const availableCols = [];
      for (let c = 0; c < COLS; c++) {
        if (next[0][c] === null) availableCols.push(c);
      }

      if (availableCols.length === 0) {
        handleGameOver();
        return prev;
      }

      const col = availableCols[Math.floor(Math.random() * availableCols.length)];
      const cat = activePool[Math.floor(Math.random() * activePool.length)];
      const word = cat.words[Math.floor(Math.random() * cat.words.length)];

      const newTile: CascadeTile = {
        id: Math.random().toString(36).substr(2, 9),
        word: word,
        categoryId: cat.id,
        categoryName: cat.name.includes(':') ? cat.name.split(':')[1].trim() : cat.name,
        status: 'neutral',
        isSolved: false,
        row: 0,
        col: col,
        color: THEMES[0].solvedColors[parseInt(cat.id) % THEMES[0].solvedColors.length]
      };

      next[0][col] = newTile;
      return next;
    });
  }, [isGameOver, isReviewing, activePool, handleGameOver]);

  useEffect(() => {
    if (isGameOver || isReviewing || isInitializing) return;

    const gravityInterval = setInterval(() => {
      setGrid(prev => {
        let changed = false;
        const next = prev.map(row => [...row]);

        for (let r = ROWS - 2; r >= 0; r--) {
          for (let c = 0; c < COLS; c++) {
            if (next[r][c] !== null && next[r + 1][c] === null) {
              next[r + 1][c] = { ...next[r][c]!, row: r + 1 };
              next[r][c] = null;
              changed = true;
            }
          }
        }

        return changed ? next : prev;
      });
    }, 200);

    return () => clearInterval(gravityInterval);
  }, [isGameOver, isReviewing, isInitializing]);

  useEffect(() => {
    if (isGameOver || isReviewing || isInitializing) return;

    const tick = () => {
      spawnTile();
      spawnTimerRef.current = setTimeout(tick, spawnInterval);
    };

    spawnTimerRef.current = setTimeout(tick, spawnInterval);
    return () => {
      if (spawnTimerRef.current) clearTimeout(spawnTimerRef.current);
    };
  }, [isGameOver, isReviewing, isInitializing, spawnInterval, spawnTile]);

  const handleTileClick = (id: string) => {
    if (isGameOver || isReviewing || isSwapping) return;

    const findTile = (tid: string): { r: number, c: number, tile: CascadeTile } | null => {
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          if (grid[r][c]?.id === tid) return { r, c, tile: grid[r][c]! };
        }
      }
      return null;
    };

    const target = findTile(id);
    if (!target) return;

    if (selectedId === null) {
      audio.playSelect();
      setSelectedId(id);
      setGrid(prev => prev.map(row => row.map(t => t?.id === id ? { ...t, status: 'selected' as const } : t)));
    } else if (selectedId === id) {
      setSelectedId(null);
      setGrid(prev => prev.map(row => row.map(t => t?.id === id ? { ...t, status: 'neutral' as const } : t)));
    } else {
      const source = findTile(selectedId);
      if (!source) {
        setSelectedId(null);
        return;
      }

      setIsSwapping(true);
      audio.playSwap();

      setGrid(prev => prev.map(row => row.map(t => {
        if (!t) return null;
        if (t.id === selectedId) return { ...t, status: 'swapping' as const };
        if (t.id === id) return { ...t, status: 'swap-target' as const };
        return t;
      })));

      setTimeout(() => {
        setGrid(prev => {
          const next = prev.map(row => [...row]);
          const sTile = next[source.r][source.c];
          const tTile = next[target.r][target.c];

          if (sTile && tTile) {
            const sCopy = { ...sTile };
            const tCopy = { ...tTile };
            next[source.r][source.c] = {
              ...sCopy,
              word: tCopy.word,
              categoryId: tCopy.categoryId,
              categoryName: tCopy.categoryName,
              color: tCopy.color,
            };
            next[target.r][target.c] = {
              ...tCopy,
              word: sCopy.word,
              categoryId: sCopy.categoryId,
              categoryName: sCopy.categoryName,
              color: sCopy.color,
            };
          }
          return next;
        });

        setTimeout(() => {
          setGrid(prev => prev.map(row => row.map(t => {
            if (!t) return null;
            if (t.id === selectedId || t.id === id) {
              return { ...t, status: 'fading-out-bg' as const };
            }
            return t;
          })));

          setTimeout(() => {
            setGrid(prev => {
              const final = prev.map(row => row.map(t => {
                if (!t) null;
                if (t.status === 'fading-out-bg') {
                  return { ...t, status: 'neutral' as const };
                }
                return t;
              }));
              checkClusters(final);
              return final;
            });
            setSelectedId(null);
            setIsSwapping(false);
          }, 260);
        }, 360);
      }, 40);
    }
  };

  const checkClusters = (currentGrid: (CascadeTile | null)[][]) => {
    const toClear = new Set<string>();

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const startTile = currentGrid[r][c];
        if (!startTile) continue;

        const cluster: { r: number, c: number }[] = [];
        const visited = new Set<string>();
        const stack = [{ r, c }];

        while (stack.length > 0) {
          const curr = stack.pop()!;
          const key = `${curr.r},${curr.c}`;
          if (visited.has(key)) continue;
          visited.add(key);

          const currentTile = currentGrid[curr.r][curr.c];
          if (currentTile?.categoryId === startTile.categoryId) {
            cluster.push(curr);
            if (curr.r > 0) stack.push({ r: curr.r - 1, c: curr.c });
            if (curr.r < ROWS - 1) stack.push({ r: curr.r + 1, c: curr.c });
            if (curr.c > 0) stack.push({ r: curr.r, c: curr.c - 1 });
            if (curr.c < COLS - 1) stack.push({ r: curr.r, c: curr.c + 1 });
          }
        }

        if (cluster.length >= 2) {
          cluster.forEach(coord => toClear.add(`${coord.r},${coord.c}`));
        }
      }
    }

    if (toClear.size > 0) {
      audio.playRowSolved();
      setClearedCount(prev => prev + toClear.size);
      setGrid(prev => {
        const next = prev.map(row => [...row]);
        toClear.forEach(key => {
          const [r, c] = key.split(',').map(Number);
          const tile = next[r][c];
          if (tile && particleRef.current) {
            const el = document.querySelector(`[data-tile-id="${tile.id}"]`);
            const rect = el?.getBoundingClientRect();
            if (rect) particleRef.current.explode(rect.left + rect.width / 2, rect.top + rect.height / 2, "#FFFFFF");
          }
          next[r][c] = null;
        });
        return next;
      });
    }
  };

  useEffect(() => {
    if (!isAutoPlaying || isGameOver || isReviewing || isSwapping) return;

    const autoTick = () => {
      if (document.hidden) return;

      let foundCluster = false;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const t = grid[r][c];
          if (!t) continue;

          const cluster: { r: number, c: number }[] = [];
          const visited = new Set<string>();
          const stack = [{ r, c }];
          while (stack.length > 0) {
            const curr = stack.pop()!;
            const key = `${curr.r},${curr.c}`;
            if (visited.has(key)) continue;
            visited.add(key);
            const ct = grid[curr.r][curr.c];
            if (ct?.categoryId === t.categoryId) {
              cluster.push(curr);
              if (curr.r > 0) stack.push({ r: curr.r - 1, c: curr.c });
              if (curr.r < ROWS - 1) stack.push({ r: curr.r + 1, c: curr.c });
              if (curr.c > 0) stack.push({ r: curr.r, c: curr.c - 1 });
              if (curr.c < COLS - 1) stack.push({ r: curr.r, c: curr.c + 1 });
            }
          }
          if (cluster.length >= 2) {
            checkClusters(grid);
            foundCluster = true;
            break;
          }
        }
        if (foundCluster) break;
      }
      if (foundCluster) return;

      for (let r = ROWS - 1; r >= 0; r--) {
        for (let c = 0; c < COLS; c++) {
          const t1 = grid[r][c];
          if (!t1) continue;

          if (c < COLS - 1) {
            const t2 = grid[r][c + 1];
            if (t2 && t1.categoryId !== t2.categoryId) {
              if (selectedId === null) handleTileClick(t1.id);
              else if (selectedId === t1.id) handleTileClick(t2.id);
              return;
            }
          }
          if (r < ROWS - 1) {
            const t2 = grid[r + 1][c];
            if (t2 && t1.categoryId !== t2.categoryId) {
              if (selectedId === null) handleTileClick(t1.id);
              else if (selectedId === t1.id) handleTileClick(t2.id);
              return;
            }
          }
        }
      }
    };

    const timer = setTimeout(autoTick, 250);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, grid, isGameOver, isReviewing, isSwapping, selectedId]);

  if (isInitializing) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"></div>
      </div>
    );
  }

  return (
    <LevelLayout
      modeName="CASCADE"
      levelIndex={levelIndex}
      onOpenSettings={() => onOpenSettings?.([])}
      isReviewing={isReviewing}
      onNext={onNext}
      hintsEnabled={hintsEnabled}
      onToggleHints={() => setHintsEnabled?.(!hintsEnabled)}
      stars={stars}
      headerExtras={
        <div className="flex items-center gap-3 pr-2">
          <div className="flex flex-col items-end">
            <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-widest">SPEED</span>
            <span className="text-sm font-black text-white">{speedLevel}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-widest">CLEARED</span>
            <span className="text-sm font-black text-neon-green">{clearedCount}</span>
          </div>
        </div>
      }
    >
      <ParticleOverlay ref={particleRef} />

      <div className="flex-1 flex flex-col items-center justify-center w-full h-full relative p-2 overflow-hidden">
        <div className="w-full h-full max-w-md bg-zinc-900/30 border-2 border-white rounded-medium relative shadow-2xl flex flex-col p-1 overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-9 opacity-5 pointer-events-none">
            {Array.from({ length: 54 }).map((_, i) => <div key={i} className="border border-white" />)}
          </div>

          <div className="flex-1 grid grid-cols-6 grid-rows-9 gap-1 relative z-10">
            {grid.map((row, r) =>
              row.map((tile, c) => (
                <div key={tile ? tile.id : `empty-${r}-${c}`} className="relative w-full h-full">
                  {tile && (
                    <MotionDiv
                      layout
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="absolute inset-0"
                    >
                      <Tile
                        data={tile}
                        onClick={handleTileClick}
                        data-tile-id={tile.id}
                        isCascade={true}
                      />
                    </MotionDiv>
                  )}
                </div>
              ))
            )}
          </div>

          <div
            className="absolute top-0 left-0 w-full bg-neon-red/10 animate-pulse pointer-events-none"
            style={{ height: `${100 / 9}%` }}
          />
        </div>
      </div>
    </LevelLayout>
  );
}