
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { CSVRow, TileData, THEMES, Theme } from '../types';
import Tile from './Tile';
import Header from './Header';
import { getValidatedLevelData } from '../services/levelPreCheck';
import { audio } from '../services/audioService';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import SolvedRowBackground from './SolvedRowBackground';
import ArcadeStyledText from './ArcadeStyledText';
import { getSolvedGradient } from '../services/tileStyles';

interface Level5Props {
  csvData: CSVRow[];
  onComplete: (stats?: any) => void;
  onExit: () => void;
  levelIndex: number;
  onThemeChange?: (colors: string[]) => void;
  hintsEnabled: boolean;
  setHintsEnabled?: (val: boolean) => void;
  onOpenSettings?: (cats?: {name: string, isSolved: boolean}[]) => void;
  isReviewing?: boolean;
  onNext?: () => void;
  isAutoPlaying?: boolean;
}

const Level5_Group: React.FC<Level5Props> = ({ 
    csvData, onComplete, levelIndex, onOpenSettings, isReviewing, onNext, hintsEnabled, setHintsEnabled, isAutoPlaying
}) => {
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [round, setRound] = useState(1);
  const [mistakes, setMistakes] = useState(0);
  const [roundMistakes, setRoundMistakes] = useState(0);
  const [roundsWon, setRoundsWon] = useState(0);
  const [timeLeft, setTimeLeft] = useState(90);
  const [isComplete, setIsComplete] = useState(false);
  const [hintTriggerCount, setHintTriggerCount] = useState(0);
  const [solvedIds, setSolvedIds] = useState<string[]>([]);
  
  const lastProgressTimeRef = useRef(Date.now());
  const particleRef = useRef<ParticleHandle>(null);
  const startTimeRef = useRef(Date.now());
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const solvedWordsRef = useRef<string[]>([]);

  // Reset hint timer and selections when hints are toggled
  useEffect(() => {
    setSelectedIds([]);
    if (hintsEnabled) {
      lastProgressTimeRef.current = Date.now();
    }
  }, [hintsEnabled]);

  // Initialize data for the round
  useEffect(() => {
    if (isReviewing || isComplete) return;

    const validatedCategories = getValidatedLevelData(4, csvData, 4);
    const newTiles: TileData[] = [];
    
    for (const cat of validatedCategories) {
        // getValidatedLevelData now shuffles, so taking first 4 is safe
        const uniqueWords = cat.words.slice(0, 4);
        uniqueWords.forEach(w => {
            newTiles.push({ 
                id: Math.random().toString(36).substr(2, 9), 
                word: w, 
                categoryId: cat.id, 
                categoryName: cat.name, 
                status: 'neutral' 
            });
        });
    }

    setTiles(newTiles.sort(() => 0.5 - Math.random()));
    setSelectedIds([]);
    setRoundMistakes(0);
    // Timer adds 20s per round deduction roughly, but clamped
    setTimeLeft(Math.max(15, 90 - (round - 1) * 20));
    lastProgressTimeRef.current = Date.now();
  }, [round, csvData, isReviewing]);

  // Handle Game Over / Timeout
  const handleGameOver = useCallback(() => {
    if (isComplete) return;
    audio.playError(); // Audio feedback for timeout
    setIsComplete(true);
    // Ensure we trigger the completion callback with current stats
    // Even if time runs out, we pass the rounds won so far
    onComplete({ 
        roundsWon: roundsWon, 
        timeMs: Date.now() - startTimeRef.current, 
        moves: 12, 
        failed: true, 
        mistakes: mistakes,
        hintsUsedCount: hintTriggerCount,
        solvedCategoryIds: solvedIds,
        solvedWords: solvedWordsRef.current
    });
  }, [isComplete, roundsWon, mistakes, hintTriggerCount, solvedIds, onComplete]);

  // Main game timer - Only decrements time
  useEffect(() => {
    if (isComplete || isReviewing) return;
    const timer = setInterval(() => {
      if (!document.hidden) { // Only decrement if visible
          setTimeLeft(p => Math.max(0, p - 1));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [isComplete, isReviewing, round]);

  // Effect to watch time and trigger game over reliably
  useEffect(() => {
    if (timeLeft === 0 && !isComplete && !isReviewing) {
      handleGameOver();
    }
  }, [timeLeft, isComplete, isReviewing, handleGameOver]);

  // Handle automatic hints
  useEffect(() => {
    if (isComplete || isReviewing || !hintsEnabled) return;
    const interval = setInterval(() => {
      if (document.hidden) return; // Prevent hints when backgrounded
      if (Date.now() - lastProgressTimeRef.current > 90000) {
        triggerHint();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [tiles, isComplete, isReviewing, hintsEnabled]);

  const triggerHint = () => {
    if (isComplete || isReviewing || !hintsEnabled) return;
    const unsolved = tiles.filter(t => t.status !== 'solved');
    if (unsolved.length < 2) return;
    
    const cat = unsolved[0].categoryId;
    const matches = unsolved.filter(t => t.categoryId === cat).slice(0, 2);
    
    setTiles(curr => curr.map(t => {
      if (matches.some(m => m.id === t.id)) return { ...t, status: 'correct-preview' };
      return t;
    }));
    
    audio.playTick();
    setHintTriggerCount(prev => prev + 1);
    lastProgressTimeRef.current = Date.now();
    setTimeout(() => {
      setTiles(curr => curr.map(t => t.status === 'correct-preview' ? { ...t, status: 'neutral' } : t));
    }, 1500);
  };

  const finishLevel = useCallback((finalRoundsWon: number, finalMistakes: number, finalSolvedIds: string[]) => {
    if (isComplete) return; // Prevent double firing
    
    // Play win sound only if at least one round was won
    if (finalRoundsWon > 0) {
        audio.playWin();
    } else {
        audio.playError();
    }

    setIsComplete(true);
    
    // immediate call to onComplete to trigger Next Puzzle button
    // We do NOT mark failed=true here, because finishing 3 rounds is a valid completion flow, even with 0 score.
    onComplete({ 
        roundsWon: finalRoundsWon, 
        timeMs: Date.now() - startTimeRef.current, 
        moves: 12, 
        hintsUsedCount: hintTriggerCount, 
        mistakes: finalMistakes,
        solvedCategoryIds: finalSolvedIds,
        solvedWords: solvedWordsRef.current
    });
  }, [onComplete, hintTriggerCount, isComplete]);

  const proceedToNextRound = useCallback((currentRoundsWon: number, currentMistakes: number, currentSolvedIds: string[]) => {
    if (round >= 3) {
      finishLevel(currentRoundsWon, currentMistakes, currentSolvedIds);
    } else {
      // Only advance round if not yet at 3
      setTimeout(() => setRound(r => r + 1), 600);
    }
  }, [round, finishLevel]);

  const validate = useCallback((ids: string[], currentTiles: TileData[]) => {
    const selected = currentTiles.filter(t => ids.includes(t.id));
    
    // Check for Match
    if (selected.length === 4 && selected.every(t => t.categoryId === selected[0].categoryId)) {
      audio.playRowSolved();
      lastProgressTimeRef.current = Date.now();
      const matchedCatId = selected[0].categoryId;
      
      const newSolvedIds = Array.from(new Set([...solvedIds, matchedCatId]));
      setSolvedIds(newSolvedIds);

      // Track solved words
      const words = selected.map(t => t.word);
      solvedWordsRef.current.push(...words);

      // Gradient color selection based on how many groups solved so far this round/total
      // Using newSolvedIds.length to cycle through theme colors
      const themeColors = THEMES[0].solvedColors;
      // Find the index of this category in the current board to keep color consistent if we can
      // But simple cycling based on solved count is often safer visually
      const color = themeColors[(newSolvedIds.length - 1) % themeColors.length];

      const nextTiles = currentTiles.map(t => 
        ids.includes(t.id) ? { ...t, status: 'solved' as const, color } : t
      );
      
      setTiles(nextTiles);
      setSelectedIds([]);

      // Particle Color extraction (approximated from class name or default green)
      let hexColor = "#39FF14"; // Default Neon Lime
      if (color.includes("red")) hexColor = "#FF073A";
      else if (color.includes("orange")) hexColor = "#FF5F1F";
      else if (color.includes("yellow")) hexColor = "#F9FF00";
      else if (color.includes("gold")) hexColor = "#F9FF00"; // Map gold to yellow
      else if (color.includes("cyan")) hexColor = "#00FFFF";
      else if (color.includes("blue")) hexColor = "#0066FF";
      else if (color.includes("purple")) hexColor = "#D400FF";
      else if (color.includes("violet")) hexColor = "#B026FF";
      else if (color.includes("pink")) hexColor = "#FF1FBF";
      else if (color.includes("magenta")) hexColor = "#FF00FF";

      ids.forEach(id => {
          const rect = tileRefs.current.get(id)?.getBoundingClientRect();
          if (rect && particleRef.current) particleRef.current.explode(rect.left + rect.width / 2, rect.top + rect.height / 2, hexColor);
      });

      // Round progression check - All tiles solved
      if (nextTiles.every(t => t.status === 'solved')) {
          const nextWonCount = roundsWon + 1;
          setRoundsWon(nextWonCount);
          // Directly call proceed with new values, avoiding state setter side-effects
          proceedToNextRound(nextWonCount, mistakes, newSolvedIds);
      }
    } else if (ids.length === 4) {
      // Mistake Logic
      audio.playError();
      const nextTotalMistakes = mistakes + 1;
      const nextRoundMistakes = roundMistakes + 1;
      
      setMistakes(nextTotalMistakes);
      setRoundMistakes(nextRoundMistakes);
      
      setTiles(prev => prev.map(t => ids.includes(t.id) ? { ...t, status: 'wrong' as const } : t));
      
      setTimeout(() => {
        // Changed limit to 3 mistakes per round
        if (nextRoundMistakes >= 3) {
          // Skipping round due to 3 mistakes - Pass current roundsWon as it didn't increase
          proceedToNextRound(roundsWon, nextTotalMistakes, solvedIds);
        } else {
          setTiles(prev => prev.map(t => t.status === 'wrong' ? { ...t, status: 'neutral' as const } : t));
          setSelectedIds([]);
        }
      }, 500);
    }
  }, [round, roundMistakes, mistakes, solvedIds, proceedToNextRound, roundsWon]);

  // --- AUTO PLAY LOGIC ---
  useEffect(() => {
    if (!isAutoPlaying || isComplete || isReviewing) return;

    const performMove = () => {
        if (document.hidden) return; // Prevent logic in background

        // If we have 4 selected, we are waiting for validation to run (which clears selection)
        if (selectedIds.length === 4) return;

        let targetCatId: string | null = null;

        // If we already have tiles selected, we MUST continue with that category
        if (selectedIds.length > 0) {
            const firstSelected = tiles.find(t => t.id === selectedIds[0]);
            if (firstSelected) targetCatId = firstSelected.categoryId;
        } else {
            // Start a new group - pick first available neutral tile
            const firstUnsolved = tiles.find(t => t.status === 'neutral');
            if (firstUnsolved) targetCatId = firstUnsolved.categoryId;
        }

        if (targetCatId) {
            // Find the next available tile in this category
            const nextTile = tiles.find(t => 
                t.categoryId === targetCatId && 
                t.status === 'neutral' && 
                !selectedIds.includes(t.id)
            );

            if (nextTile) {
                // Perform single click - state update will trigger next effect cycle
                handleTileClick(nextTile.id);
            }
        }
    };

    // Paced moves
    const timer = setTimeout(performMove, 400);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, isComplete, isReviewing, tiles, selectedIds]);

  const handleTileClick = (id: string) => {
    if (isComplete || timeLeft === 0 || isReviewing) return;
    const clickedTile = tiles.find(t => t.id === id);
    if (!clickedTile || clickedTile.status === 'solved' || clickedTile.status === 'wrong') return;

    audio.playSelect();
    
    // Calculate next selection state
    const alreadySelected = selectedIds.includes(id);
    const nextIds = alreadySelected 
      ? selectedIds.filter(x => x !== id) 
      : [...selectedIds, id].slice(0, 4);

    setSelectedIds(nextIds);

    // Update tile statuses for feedback
    const isNearMatch = () => {
      if (nextIds.length === 3) {
        const items = tiles.filter(t => nextIds.includes(t.id));
        return items.every(t => t.categoryId === items[0].categoryId);
      }
      return false;
    };

    const matching = isNearMatch();

    setTiles(prevTiles => prevTiles.map(t => {
      if (t.status === 'solved') return t;
      if (nextIds.includes(t.id)) {
        return { ...t, status: matching ? 'correct-preview' as const : 'selected' as const };
      }
      return { ...t, status: 'neutral' as const };
    }));

    // Trigger validation on 4th selection
    if (nextIds.length === 4) {
      setTimeout(() => validate(nextIds, tiles), 150);
    }
  };

  const currentCategories = useMemo(() => {
    // Determine unique categories from the current board state
    const uniqueCats = new Map<string, {name: string, isSolved: boolean, color?: string}>();
    
    tiles.forEach(t => {
      if (!uniqueCats.has(t.categoryId)) {
        // Find if this category is fully solved (all 4 tiles solved)
        const allTilesForCat = tiles.filter(tile => tile.categoryId === t.categoryId);
        const allSolved = allTilesForCat.every(tile => tile.status === 'solved');
        // If solved, pick the color from the first tile (assuming they share color)
        const color = allSolved ? allTilesForCat[0].color : undefined;
        
        uniqueCats.set(t.categoryId, {
          name: t.categoryName,
          isSolved: allSolved,
          color: color
        });
      }
    });
    
    return Array.from(uniqueCats.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, [tiles]);

  return (
    <div className="flex flex-col h-full w-full max-w-4xl mx-auto overflow-hidden relative bg-black">
      <Header 
        modeName="MIND MATCH" 
        levelIndex={levelIndex} 
        onOpenSettings={() => onOpenSettings?.(currentCategories.map(c => ({ name: c.name, isSolved: c.isSolved })))} 
        isReviewing={isReviewing} 
        onNext={onNext}
        hintsEnabled={hintsEnabled}
        onToggleHints={() => setHintsEnabled?.(!hintsEnabled)}
        leftContent={
          <div className="flex items-center gap-4 pl-1">
             <div className="flex flex-col items-center">
                <div className="mb-0.5 text-[10px] font-bold text-zinc-400 font-oswald tracking-widest uppercase">
                    TIMER
                </div>
                <span className={`text-lg md:text-xl font-bold font-oswald ${timeLeft < 10 ? "text-neon-red animate-pulse" : "text-white"}`}>
                    {timeLeft}s
                </span>
             </div>
             <div className="flex flex-col items-center">
                <div className="mb-0.5 text-[10px] font-bold text-zinc-400 font-oswald tracking-widest uppercase">
                    ROUND
                </div>
                <span className="text-lg md:text-xl font-bold font-oswald text-white">
                    {round}/3
                </span>
             </div>
             <div className="flex flex-col items-center">
                <div className="mb-0.5 text-[10px] font-bold text-zinc-400 font-oswald tracking-widest uppercase">
                    MISS
                </div>
                <span className="text-lg md:text-xl font-bold font-oswald text-white">
                    {roundMistakes}/3
                </span>
             </div>
          </div>
        }
      />
      
      <main className="flex-1 flex flex-col p-2 pt-0 w-full relative">
          {/* Category Tracker Header - Updated to Grid */}
          <div className="w-full mb-2 z-20 px-1">
             <div className="grid grid-cols-2 gap-2 w-full">
               {currentCategories.map((cat) => (
                 <div 
                    key={cat.name} 
                    className={`
                      relative w-full h-8 md:h-12 rounded-lg border-2 border-white
                      flex items-center justify-center overflow-hidden transition-all duration-500
                      ${cat.isSolved ? 'shadow-none' : 'bg-black'}
                    `}
                    style={cat.isSolved ? { background: getSolvedGradient(cat.color, cat.name) } : {}}
                 >
                    <span className={`
                      relative z-10 font-black font-oswald uppercase text-xs md:text-sm tracking-wide text-center px-1 leading-tight
                      ${cat.isSolved ? 'text-white' : 'text-zinc-300'}
                    `}
                    style={cat.isSolved ? { 
                      textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 4px rgba(0,0,0,0.8)' 
                    } : {}}
                    >
                      {cat.name}
                    </span>
                 </div>
               ))}
             </div>
          </div>

          <div className="grid grid-cols-4 gap-2 flex-1 min-h-0">
            {tiles.map(tile => (
              <Tile 
                key={tile.id} 
                data={tile} 
                onClick={handleTileClick} 
                ref={el => { if(el) tileRefs.current.set(tile.id, el); }}
              />
            ))}
          </div>
      </main>
      <ParticleOverlay ref={particleRef} />
    </div>
  );
};
export default Level5_Group;
