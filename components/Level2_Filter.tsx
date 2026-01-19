
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { CSVRow, TileData, THEMES, Theme } from '../types';
import Tile from './Tile';
import LevelLayout from './LevelLayout';
import { getValidatedLevelData } from '../services/levelPreCheck';
import { MAX_WORD_LENGTH, shuffleArray } from '../services/csvUtils';
import { audio } from '../services/audioService';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';

interface Level2Props {
  csvData: CSVRow[];
  onExit: () => void;
  onComplete: (stats?: any) => void;
  onGameOver: () => void;
  levelIndex: number;
  onThemeChange?: (colors: string[]) => void;
  hintsEnabled: boolean;
  setHintsEnabled: (val: boolean) => void;
  onOpenSettings?: (cats?: {name: string, isSolved: boolean}[]) => void;
  isReviewing?: boolean;
  onNext?: () => void;
  isAutoPlaying?: boolean;
}

const Level2_Filter: React.FC<Level2Props> = ({ 
    csvData, onComplete, onGameOver, levelIndex, 
    onThemeChange, hintsEnabled, setHintsEnabled, onOpenSettings,
    isReviewing, onNext, isAutoPlaying
}) => {
  const [targetCategory, setTargetCategory] = useState<CSVRow | null>(null);
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);
  const [isLevelComplete, setIsLevelComplete] = useState(false);
  const [totalMistakes, setTotalMistakes] = useState(0);
  const [initError, setInitError] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>(THEMES[0]);
  const [foundCount, setFoundCount] = useState(0);
  const [hintTriggerCount, setHintTriggerCount] = useState(0);
  const [moves, setMoves] = useState(0);

  const lastProgressTimeRef = useRef(Date.now());
  const startTimeRef = useRef(Date.now());
  const particleRef = useRef<ParticleHandle>(null);
  const solvedWordsRef = useRef<string[]>([]);
  
  const ROUNDS_TO_PLAY = 6;
  const MISTAKE_LIMIT = 5;
  const GRID_WIDTH = 3;

  useEffect(() => { 
    audio.resume(); 
    startTimeRef.current = Date.now(); 
    solvedWordsRef.current = [];
  }, [levelIndex]);

  // Reset hint timer when hints are toggled on to prevent immediate trigger
  useEffect(() => {
    if (hintsEnabled) {
      lastProgressTimeRef.current = Date.now();
    }
  }, [hintsEnabled]);

  // --- AUTO PLAY LOGIC ---
  useEffect(() => {
    if (!isAutoPlaying || isLevelComplete || isTransitioning || isReviewing || feedbackMsg) return;

    const performMove = () => {
        if (document.hidden) return;

        // Find a correct tile that isn't solved yet
        const correctTile = tiles.find(t => 
            t.categoryId === targetCategory?.id && 
            t.status !== 'solved' && 
            t.status !== 'locked'
        );

        if (correctTile) {
            handleTileClick(correctTile.id);
        }
    };

    const timer = setTimeout(performMove, 600);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, isLevelComplete, isTransitioning, tiles, feedbackMsg, targetCategory, isReviewing]);

  useEffect(() => {
    if (isLevelComplete || isTransitioning || !hintsEnabled) return;
    const interval = setInterval(() => {
      if (document.hidden) return; // Prevent hints when backgrounded
      if (Date.now() - lastProgressTimeRef.current > 90000) {
        triggerHint();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [tiles, isLevelComplete, isTransitioning, hintsEnabled]);

  const triggerHint = () => {
    if (!hintsEnabled) return;
    const correctUnsolved = tiles.filter(t => t.categoryId === targetCategory?.id && t.status === 'neutral');
    if (correctUnsolved.length < 2) return;
    
    const categoriesWithLocked = new Map<string, number>(); 
    for (let r = 0; r < tiles.length / GRID_WIDTH; r++) {
        const row = tiles.slice(r * GRID_WIDTH, r * GRID_WIDTH + GRID_WIDTH);
        const lockedInRow = row.filter(t => t.status === 'locked');
        if (lockedInRow.length > 0) {
            categoriesWithLocked.set(lockedInRow[0].categoryId, r);
        }
    }

    let targetRowIndex = categoriesWithLocked.get(targetCategory!.id) ?? -1;

    if (targetRowIndex === -1) {
        const availableRows: number[] = [];
        for (let r = 0; r < tiles.length / GRID_WIDTH; r++) {
            const row = tiles.slice(r * GRID_WIDTH, r * GRID_WIDTH + GRID_WIDTH);
            const hasStatus = row.some(t => t.status === 'locked' || t.status === 'solved' || t.status === 'wrong');
            if (!hasStatus) availableRows.push(r);
        }
        if (availableRows.length === 0) return;
        targetRowIndex = availableRows[Math.floor(Math.random() * availableRows.length)];
    }

    setTiles(prev => {
        const next = [...prev];
        const rowStart = targetRowIndex * GRID_WIDTH;
        const pair = correctUnsolved.slice(0, 2);
        
        pair.forEach((tileToLock) => {
            let targetSlot = -1;
            for (let s = 0; s < GRID_WIDTH; s++) {
                if (next[rowStart + s].status === 'neutral') {
                    targetSlot = rowStart + s;
                    break;
                }
            }
            if (targetSlot === -1) return;

            const currentIdx = next.findIndex(t => t.id === tileToLock.id);
            if (currentIdx !== targetSlot) {
                const temp = next[targetSlot];
                next[targetSlot] = { ...next[currentIdx], status: 'locked' };
                next[currentIdx] = { ...temp, status: temp.status === 'locked' ? 'locked' : 'neutral' };
            } else {
                next[targetSlot] = { ...next[targetSlot], status: 'locked' };
            }
        });
        return next;
    });
    
    audio.playTick();
    setHintTriggerCount(prev => prev + 1);
    lastProgressTimeRef.current = Date.now();
  };

  const initRound = (immediate = false) => {
    if (isLevelComplete) return;
    if (!immediate) setIsTransitioning(true);
    const setupRound = () => {
      const randomTheme = THEMES[0]; 
      setCurrentTheme(randomTheme);
      setFoundCount(0); 
      lastProgressTimeRef.current = Date.now();
      
      // Use pre-checker to get a large pool of non-conflicting categories
      // We grab 10 to have enough buffer for decoys
      const validatedPool = getValidatedLevelData(10, csvData, 6);
      
      if (validatedPool.length === 0) {
          setInitError(true); setIsTransitioning(false); return; 
      }

      // Pick the first one as target (randomized by pre-checker)
      const target = validatedPool[0];
      // Use the rest as sources for decoys (they are guaranteed unique words from target)
      const decoyPool = validatedPool.slice(1);

      setupWithCategory(target, decoyPool);
    };

    const setupWithCategory = (target: CSVRow, decoySources: CSVRow[]) => {
        setTargetCategory(target);
        
        // Target words (pre-validated for length)
        // getValidatedLevelData already shuffled the words, so taking 0-6 is random from full pool
        const correctWords = target.words.slice(0, 6);

        // Gather decoy words from other valid categories
        const allDecoyWords = decoySources.flatMap(c => c.words);
        
        // Use robust shuffle for decoys
        const incorrectWords = shuffleArray(allDecoyWords).slice(0, 6);
        
        // Combine and shuffle again for the board
        const roundTiles: TileData[] = shuffleArray([
            ...correctWords.map(w => ({ id: Math.random().toString(36).substr(2, 9), word: w, categoryId: target.id, categoryName: target.name, status: 'neutral' as const })),
            ...incorrectWords.map(w => ({ id: Math.random().toString(36).substr(2, 9), word: w, categoryId: 'incorrect', categoryName: 'Incorrect', status: 'neutral' as const }))
        ]);
        
        setTiles(roundTiles); 
        setIsTransitioning(false);
    };

    if (immediate) setupRound(); else setTimeout(setupRound, 400);
  };

  useEffect(() => { initRound(true); }, [csvData]);

  const handleTileClick = (id: string) => {
    if (isTransitioning || isLevelComplete || feedbackMsg) return;
    const tileIndex = tiles.findIndex(t => t.id === id);
    if (tileIndex === -1 || ['solved', 'wrong', 'locked'].includes(tiles[tileIndex].status)) return;
    setMoves(prev => prev + 1);
    const tile = tiles[tileIndex];
    if (tile.categoryId === targetCategory?.id) {
        audio.playCorrect(); lastProgressTimeRef.current = Date.now();
        const newTiles = [...tiles];
        const color = currentTheme.solvedColors[foundCount % currentTheme.solvedColors.length];
        newTiles[tileIndex] = { ...tile, status: 'solved', color };
        setTiles(newTiles);
        
        // Track solved word
        solvedWordsRef.current.push(tile.word);

        setFoundCount(prev => {
            const next = prev + 1;
            if (next === 6) {
                setFeedbackMsg("MATCH!");
                setRoundsPlayed(r => {
                    const nextRound = r + 1;
                    if (nextRound >= ROUNDS_TO_PLAY) {
                        setTimeout(() => {
                            setIsLevelComplete(true);
                            onComplete({ 
                                mode: 'TARGET FILTER', 
                                mistakes: totalMistakes, 
                                hintsUsedCount: hintTriggerCount, 
                                moves: moves, 
                                timeMs: Date.now() - startTimeRef.current,
                                solvedWords: solvedWordsRef.current 
                            });
                        }, 1000);
                    } else {
                        setTimeout(() => { setFeedbackMsg(null); initRound(); }, 1200);
                    }
                    return nextRound;
                });
            }
            return next;
        });
    } else {
        audio.playError();
        
        const nextMistakes = mistakes + 1;
        setMistakes(nextMistakes);
        setTotalMistakes(prev => prev + 1);
        
        setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'wrong' } : t));

        if (nextMistakes >= MISTAKE_LIMIT) {
            // Level Failed - Lock interactions and notify parent immediately
            setIsLevelComplete(true);
            onGameOver();
        } else {
            setTimeout(() => setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'neutral' } : t)), 500);
        }
    }
  };

  if (initError) return null;

  return (
    <LevelLayout
      modeName="TARGET FILTER"
      levelIndex={levelIndex}
      onOpenSettings={() => onOpenSettings?.([{ name: targetCategory?.name || "Loading", isSolved: foundCount === 6 }])}
      isReviewing={isReviewing}
      onNext={onNext}
      hintsEnabled={hintsEnabled}
      onToggleHints={() => setHintsEnabled(!hintsEnabled)}
      onTurnOffHints={() => { setHintsEnabled(false); }}
      headerExtras={(
        <div className="flex items-center gap-2 font-bold uppercase text-[9px]">
            <div className="bg-zinc-950 border border-zinc-700 px-2 py-1 rounded-full flex items-center shadow-sm">
                <span className="text-zinc-500 mr-1">FOUND</span><span className="text-white">{foundCount}/6</span>
            </div>
            <div className="bg-zinc-900 border border-zinc-700 px-2 py-1 rounded-full flex items-center shadow-sm">
                <span className="text-zinc-500 mr-1">ROUND</span><span className="text-white">{roundsPlayed + 1}/{ROUNDS_TO_PLAY}</span>
            </div>
        </div>
      )}
    >
      <ParticleOverlay ref={particleRef} />
      <div className="w-full flex-1 grid grid-cols-3 grid-rows-4 gap-3 py-2 min-h-0 relative z-10 pt-4">
          {tiles.map(tile => (<div key={tile.id} className="relative w-full h-full"><Tile data={tile} onClick={handleTileClick} /></div>))}
          {feedbackMsg && (
             <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
                 <div className="bg-black/90 border-4 border-white px-8 py-4 rounded-xl shadow-2xl animate-pop">
                    <span className="text-white font-black font-oswald text-4xl uppercase tracking-tighter italic shadow-[0_0_15px_rgba(255,255,255,0.5)]">{feedbackMsg}</span>
                 </div>
             </div>
          )}
      </div>
      <div className="w-full mt-2 bg-zinc-950/50 p-2 rounded-lg border border-zinc-800 flex justify-center gap-1 shrink-0">
          {Array.from({ length: MISTAKE_LIMIT }).map((_, i) => (
              <div key={i} className={`w-4 h-4 rounded-full border-2 ${i < mistakes ? 'bg-neon-red border-white shadow-[0_0_5px_red]' : 'bg-zinc-800 border-zinc-700'}`} />
          ))}
      </div>
    </LevelLayout>
  );
};
export default Level2_Filter;
