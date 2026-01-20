
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { CSVRow, TileData, THEMES } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import Tile from './Tile';
import LevelLayout from './LevelLayout';
import { getValidatedLevelData } from '../services/levelPreCheck';
import { audio } from '../services/audioService';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import { shuffleArray } from '../services/csvUtils';

const COLS = 6;
const ROWS = 9;
const INITIAL_SPAWN_INTERVAL = 2500; // ms
const SPEED_STEP = 200; // ms decrease per speed level
const MIN_SPAWN_INTERVAL = 800; // ms

interface CascadeLevelProps {
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

type CascadeTile = TileData & { row: number; col: number };

const Level8_Cascade: React.FC<CascadeLevelProps> = ({ 
  csvData, onComplete, levelIndex, hintsEnabled, onOpenSettings, setHintsEnabled,
  isReviewing, onNext, isAutoPlaying 
}) => {
  const [grid, setGrid] = useState<(CascadeTile | null)[][]>(
    Array.from({ length: ROWS }, () => Array(COLS).fill(null))
  );
  const [clearedCount, setClearedCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [activePool, setActivePool] = useState<CSVRow[]>([]);
  
  const particleRef = useRef<ParticleHandle>(null);
  const startTimeRef = useRef(Date.now());
  // Fix: use any for timeout ref to avoid NodeJS.Timeout namespace error in browser environment
  const spawnTimerRef = useRef<any>(null);

  const speedLevel = Math.floor(clearedCount / 10) + 1;
  const spawnInterval = Math.max(MIN_SPAWN_INTERVAL, INITIAL_SPAWN_INTERVAL - (speedLevel - 1) * SPEED_STEP);

  // Initialize data pool
  useEffect(() => {
    const categories = getValidatedLevelData(8, csvData, 10);
    setActivePool(categories);
    setIsInitializing(false);
  }, [csvData]);

  const handleGameOver = useCallback(() => {
    if (isGameOver) return;
    setIsGameOver(true);
    audio.playError();
    
    // Total cleared tiles are the score for this mode
    onComplete({
      timeMs: Date.now() - startTimeRef.current,
      clearedTiles: clearedCount,
      speedReached: speedLevel,
      moves: clearedCount / 2, // approximation
      mistakes: 0,
      failed: clearedCount < 20 // fail if didn't get far
    });
  }, [isGameOver, clearedCount, speedLevel, onComplete]);

  // Spawning logic
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

  // Gravity logic
  useEffect(() => {
    if (isGameOver || isReviewing || isInitializing) return;

    const gravityInterval = setInterval(() => {
      setGrid(prev => {
        let changed = false;
        const next = prev.map(row => [...row]);

        // Process from bottom up
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

  // Spawning interval
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

  // Cluster matching
  const handleTileClick = (id: string) => {
    if (isGameOver || isReviewing) return;

    setGrid(prev => {
      // Find the clicked tile's coordinates
      let startR = -1, startC = -1;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          if (prev[r][c]?.id === id) {
            startR = r;
            startC = c;
            break;
          }
        }
      }

      if (startR === -1) return prev;
      const targetCatId = prev[startR][startC]!.categoryId;

      // DFS to find cluster
      const cluster: { r: number, c: number }[] = [];
      const visited = new Set<string>();
      const stack = [{ r: startR, c: startC }];

      while (stack.length > 0) {
        const { r, c } = stack.pop()!;
        const key = `${r},${c}`;
        if (visited.has(key)) continue;
        visited.add(key);

        if (prev[r][c]?.categoryId === targetCatId) {
          cluster.push({ r, c });
          // Check neighbors
          if (r > 0) stack.push({ r: r - 1, c });
          if (r < ROWS - 1) stack.push({ r: r + 1, c });
          if (c > 0) stack.push({ r, c: c - 1 });
          if (c < COLS - 1) stack.push({ r, c: c + 1 });
        }
      }

      if (cluster.length >= 2) {
        audio.playRowSolved();
        setClearedCount(prev => prev + cluster.length);
        const next = prev.map(row => [...row]);
        cluster.forEach(({ r, c }) => {
          // Trigger particles
          if (particleRef.current) {
             const rect = document.querySelector(`[data-tile-id="${next[r][c]!.id}"]`)?.getBoundingClientRect();
             if (rect) particleRef.current.explode(rect.left + rect.width / 2, rect.top + rect.height / 2, "#FFFFFF");
          }
          next[r][c] = null;
        });
        return next;
      } else {
        audio.playSelect();
        return prev;
      }
    });
  };

  // Auto-play for CASCADE
  useEffect(() => {
    if (!isAutoPlaying || isGameOver || isReviewing) return;

    const autoTick = () => {
      // Look for any existing cluster of 2+
      let bestCluster: string[] = [];
      
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
            if (grid[curr.r][curr.c]?.categoryId === t.categoryId) {
              cluster.push(curr);
              if (curr.r > 0) stack.push({ r: curr.r - 1, c: curr.c });
              if (curr.r < ROWS - 1) stack.push({ r: curr.r + 1, c: curr.c });
              if (curr.c > 0) stack.push({ r: curr.r, c: curr.c - 1 });
              if (curr.c < COLS - 1) stack.push({ r: curr.r, c: curr.c + 1 });
            }
          }

          if (cluster.length >= 2) {
             handleTileClick(t.id);
             return;
          }
        }
      }
    };

    const timer = setTimeout(autoTick, 1000);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, grid, isGameOver, isReviewing]);

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
         <div className="w-full h-full max-w-md bg-zinc-900/30 border-4 border-white rounded-medium relative shadow-2xl flex flex-col p-1 overflow-hidden">
            {/* Background Grid markers for visual reference */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-9 opacity-5 pointer-events-none">
               {Array.from({ length: 54 }).map((_, i) => <div key={i} className="border border-white" />)}
            </div>

            <div className="flex-1 grid grid-cols-6 grid-rows-9 gap-1 relative z-10">
               {grid.map((row, r) => 
                 row.map((tile, c) => (
                   <div key={tile ? tile.id : `empty-${r}-${c}`} className="relative w-full h-full">
                     {tile && (
                       <motion.div
                         layout
                         initial={{ y: -50, opacity: 0 }}
                         animate={{ y: 0, opacity: 1 }}
                         className="absolute inset-0"
                       >
                         <Tile 
                            data={tile} 
                            onClick={handleTileClick} 
                            data-tile-id={tile.id}
                         />
                       </motion.div>
                     )}
                   </div>
                 ))
               )}
            </div>

            {/* Danger Zone Indicator */}
            <div className="absolute top-0 left-0 w-full h-1/9 bg-neon-red/10 animate-pulse pointer-events-none" />
         </div>
      </div>
    </LevelLayout>
  );
};

export default Level8_Cascade;
