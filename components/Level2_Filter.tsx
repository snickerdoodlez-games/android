import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { CSVRow, TileData, THEMES, Theme } from '../types';
import Tile from './Tile';
import LevelLayout from './LevelLayout';
import { getValidatedLevelData } from '../services/levelContent';
import { MAX_WORD_LENGTH, shuffleArray } from '../services/csvUtils';
import { audio } from '../services/audioService';

interface Level2Props {
  key?: React.Key;
  csvData: CSVRow[];
  onExit: () => void;
  onComplete: (stats?: any) => void;
  onGameOver: () => void;
  levelIndex: number;
  /* Added difficulty and category to fix type errors in App.tsx */
  difficulty?: number;
  category?: string;
  onThemeChange?: (colors: string[]) => void;
  hintsEnabled: boolean;
  setHintsEnabled: (val: boolean) => void;
  onOpenSettings?: (cats?: {name: string, isSolved: boolean}[]) => void;
  isReviewing?: boolean;
  onNext?: () => void;
  isAutoPlaying?: boolean;
  stars?: number;
  hintCount?: number;
  onHintClick?: () => void;
  hintsDisabledForLevel?: boolean;
}

const Level2_Filter: React.FC<Level2Props> = ({ 
    csvData, onComplete, onGameOver, levelIndex, 
    onThemeChange, hintsEnabled, setHintsEnabled, onOpenSettings,
    isReviewing, onNext, isAutoPlaying, stars,
    hintCount, onHintClick, hintsDisabledForLevel
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

  const lastActivityRef = useRef(Date.now());
  const startTimeRef = useRef(Date.now());
  const solvedWordsRef = useRef<string[]>([]);
  
  const ROUNDS_TO_PLAY = 6;
  const MISTAKE_LIMIT = 5;

  useEffect(() => { 
    audio.resume(); 
    startTimeRef.current = Date.now(); 
    lastActivityRef.current = Date.now();
    solvedWordsRef.current = [];
  }, [levelIndex]);

  const initRound = (immediate = false) => {
    if (isLevelComplete) return;
    if (!immediate) setIsTransitioning(true);
    const setupRound = () => {
      setCurrentTheme(THEMES[0]);
      setFoundCount(0); 
      lastActivityRef.current = Date.now();
      const validatedPool = getValidatedLevelData(10, csvData, 6, levelIndex, "Hidden");
      if (validatedPool.length === 0) { setInitError(true); setIsTransitioning(false); return; }
      const target = validatedPool[0];
      const decoyPool = validatedPool.slice(1);
      setTargetCategory(target);
      const correctWords = target.words.slice(0, 6);
      const correctDefs = target.definitions?.slice(0, 6) || [];
      const allDecoyWords = decoyPool.flatMap(c => c.words);
      const incorrectWords = shuffleArray(allDecoyWords).slice(0, 6);
      const roundTiles: TileData[] = shuffleArray([
          ...correctWords.map((w, idx) => ({ id: Math.random().toString(36).substr(2, 9), word: w, categoryId: target.id, categoryName: target.name, definition: correctDefs[idx], status: 'neutral' as const })),
          ...incorrectWords.map(w => ({ id: Math.random().toString(36).substr(2, 9), word: w, categoryId: 'incorrect', categoryName: 'Incorrect', status: 'neutral' as const }))
      ]);
      setTiles(roundTiles); 
      setIsTransitioning(false);
    };
    if (immediate) setupRound(); else setTimeout(setupRound, 400);
  };

  useEffect(() => { initRound(true); }, [csvData]);

  // Hint Logic: 120,000ms = 2 minutes
  useEffect(() => {
    if (!hintsEnabled || isLevelComplete || isReviewing || isTransitioning) return;
    const interval = setInterval(() => {
      if (Date.now() - lastActivityRef.current > 120000) {
        setTiles(prev => {
          if (prev.some(t => t.status === 'hint')) return prev;
          const firstCorrectUnsolved = prev.find(t => t.categoryId === targetCategory?.id && t.status === 'neutral');
          if (!firstCorrectUnsolved) return prev;
          return prev.map(t => t.id === firstCorrectUnsolved.id ? { ...t, status: 'hint' as const } : t);
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [hintsEnabled, isLevelComplete, isReviewing, isTransitioning, targetCategory]);

  const handleTileClick = useCallback((id: string) => {
    lastActivityRef.current = Date.now();
    if (isTransitioning || isLevelComplete || feedbackMsg) return;

    const tileIndex = tiles.findIndex(t => t.id === id);
    if (tileIndex === -1 || ['solved', 'wrong', 'locked'].includes(tiles[tileIndex].status)) return;
    
    // Clear hint status on click
    setTiles(prev => prev.map(t => t.status === 'hint' ? { ...t, status: 'neutral' as const } : t));

    setMoves(prev => prev + 1);
    const tile = tiles[tileIndex];
    if (tile.categoryId === targetCategory?.id) {
        audio.playCorrect();
        const color = currentTheme.solvedColors[foundCount % currentTheme.solvedColors.length];
        setTiles(prev => {
            const next = [...prev];
            next[tileIndex] = { ...tile, status: 'solved', color };
            return next;
        });
solvedWordsRef.current.push(`${tile.word}|${tile.categoryName}`);
        setFoundCount(prev => {
            const next = prev + 1;
            if (next === 6) {
                setFeedbackMsg("MATCH!");
                setRoundsPlayed(r => {
                    const nextRound = r + 1;
                    if (nextRound >= ROUNDS_TO_PLAY) {
                        setTimeout(() => {
                            setIsLevelComplete(true);
                            onComplete({ mode: 'HIDDEN', mistakes: totalMistakes, hintsUsedCount: hintTriggerCount, moves, timeMs: Date.now() - startTimeRef.current, solvedWords: solvedWordsRef.current });
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
        setMistakes(nextMistakes); setTotalMistakes(prev => prev + 1);
        setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'wrong' } : t));
        if (nextMistakes >= MISTAKE_LIMIT) { setIsLevelComplete(true); onGameOver(); }
        else { setTimeout(() => setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'neutral' } : t)), 500); }
    }
  }, [isTransitioning, isLevelComplete, feedbackMsg, tiles, targetCategory, currentTheme, foundCount, mistakes, totalMistakes, hintTriggerCount, moves, onComplete, onGameOver]);

  // AUTO PLAY LOGIC
  useEffect(() => {
    if (!isAutoPlaying || isLevelComplete || isTransitioning || feedbackMsg) return;

    const timer = setTimeout(() => {
      // Normal solving
      const autoTick = () => {
        if (document.hidden) return;
        const targetTile = tiles.find(t => t.categoryId === targetCategory?.id && t.status !== 'solved');
        if (targetTile) { handleTileClick(targetTile.id); }
      };
      autoTick();
    }, 150);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, isLevelComplete, isTransitioning, feedbackMsg, tiles, targetCategory, handleTileClick]);

  if (initError) return null;

  return (
    <LevelLayout modeName="HIDDEN" levelIndex={levelIndex} onOpenSettings={() => onOpenSettings?.([{ name: targetCategory?.name || "Loading", isSolved: foundCount === 6 }])} isReviewing={isReviewing} onNext={onNext} hintsEnabled={hintsEnabled} onToggleHints={() => setHintsEnabled(!hintsEnabled)} stars={stars} hintCount={hintCount} onHintClick={onHintClick} hintsDisabledForLevel={hintsDisabledForLevel}
      headerExtras={(
        <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
                <span className="text-[8px] text-neon-green font-bold uppercase tracking-widest">FOUND</span>
                <span className="text-sm font-black text-neon-green">{foundCount}/6</span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-widest">ROUND</span>
                <span className="text-sm font-black text-white">{roundsPlayed + 1}/{ROUNDS_TO_PLAY}</span>
            </div>
        </div>
      )}
    >
      <div className="w-full flex-1 grid grid-cols-3 gap-1 p-1 min-h-0 relative z-10 h-full">
          {tiles.map((tile, idx) => (<div key={tile.id} className="relative w-full h-full"><Tile data={tile} onClick={handleTileClick} gridEntryDelay={0.05 + Math.floor(idx / 3) * 0.1} /></div>))}
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
              <div key={i} className={`w-3 h-3 rounded-full border-2 ${i < mistakes ? 'bg-neon-red border-white' : 'bg-zinc-800 border-zinc-700'}`} />
          ))}
      </div>
    </LevelLayout>
  );
};
export default Level2_Filter;