import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { CSVRow, TileData, THEMES, GameMode } from '../types';
import Tile from './Tile';
import Header from './Header';
import { audio } from '../services/audioService';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import { ARCADE_OUTLINE } from '../services/tileStyles';

export default function Level5_Group({ 
    csvData, onComplete, levelIndex, onOpenSettings, isReviewing, onNext, hintsEnabled, setHintsEnabled, isAutoPlaying, stars, mode
}: any) {
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [round, setRound] = useState(1);
  const [totalMistakes, setTotalMistakes] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [solvedCategoryIds, setSolvedCategoryIds] = useState<string[]>([]); 
  const [solvedWords, setSolvedWords] = useState<string[]>([]); 
  const [totalMoves, setTotalMoves] = useState(0);
  const [isInitializing, setIsInitializing] = useState(true);
  
  const lastActivityRef = useRef(Date.now());
  const particleRef = useRef<ParticleHandle>(null);
  const overallStartTimeRef = useRef(Date.now());
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const totalRounds = useMemo(() => Math.floor(csvData.length / 4), [csvData]);

  const activeCategoriesInRound = useMemo(() => {
    const map = new Map();
    tiles.forEach(t => {
      if (!map.has(t.categoryId)) {
        const items = tiles.filter(x => x.categoryId === t.categoryId);
        map.set(t.categoryId, { name: t.categoryName, id: t.categoryId, isSolved: items.every(x => x.status === 'solved'), color: items[0]?.color });
      }
    });
    return Array.from(map.values());
  }, [tiles]);

  const initRound = useCallback((targetRound: number) => {
    if (isReviewing || isComplete) return;
    const startIndex = (targetRound - 1) * 4;
    const roundData = csvData.slice(startIndex, startIndex + 4);
    if (roundData.length < 4) return;
    const newTiles: TileData[] = [];
    roundData.forEach((cat: any) => {
        cat.words.slice(0, 4).forEach((w: string, wIdx: number) => {
            const wordDef = cat.definitions?.[wIdx];
            const definition = (wordDef && wordDef.trim().length > 0) ? wordDef : (cat.catDict || '');
            newTiles.push({ id: Math.random().toString(36).substr(2, 9), word: w, categoryId: cat.id, categoryName: cat.name, definition, status: 'neutral' });
        });
    });
    setTiles(newTiles.sort(() => 0.5 - Math.random())); 
    setSelectedIds([]);
    lastActivityRef.current = Date.now();
  }, [csvData, isReviewing, isComplete]);

  useEffect(() => {
    audio.resume(); 
    overallStartTimeRef.current = Date.now();
    setSolvedCategoryIds([]); setSolvedWords([]);
    setTotalMistakes(0); setTotalMoves(0); setRound(1);
    const initialTime = totalRounds === 1 ? 45 : (totalRounds === 2 ? 80 : 110);
    setTimeLeft(initialTime);
    initRound(1);
    setIsInitializing(false);
  }, [levelIndex, totalRounds, initRound]); 

  useEffect(() => {
    if (round > 1 && round <= totalRounds && !isReviewing && !isComplete) {
      initRound(round);
    }
  }, [round, totalRounds, isReviewing, isComplete, initRound]);

  const validateSelection = useCallback((ids: string[], currentTiles: TileData[]) => {
    const sel = currentTiles.filter(t => ids.includes(t.id));
    if (sel.length === 4 && sel.every(t => t.categoryId === sel[0].categoryId)) {
      audio.playRowSolved();
      const categoryId = sel[0].categoryId;
      const categoryWords = sel.map(s => s.word);
      const updatedSolvedCats = [...solvedCategoryIds];
      if (!updatedSolvedCats.includes(categoryId)) updatedSolvedCats.push(categoryId);
      setSolvedCategoryIds(updatedSolvedCats);
      const updatedSolvedWords = [...solvedWords, ...categoryWords];
      setSolvedWords(updatedSolvedWords);
      const colorIndex = (updatedSolvedCats.length - 1) % THEMES[0].solvedColors.length;
      const color = THEMES[0].solvedColors[colorIndex];
      const next = currentTiles.map(t => ids.includes(t.id) ? { ...t, status: 'solved' as const, color } : t);
      setTiles(next); setSelectedIds([]);
      ids.forEach(id => {
          const rect = tileRefs.current.get(id)?.getBoundingClientRect();
          if (rect && particleRef.current) particleRef.current.explode(rect.left + rect.width / 2, rect.top + rect.height / 2, "#FFFFFF");
      });
      if (next.every(t => t.status === 'solved')) {
          if (round >= totalRounds) { 
            audio.playWin(); setIsComplete(true);
            onComplete({ timeMs: Date.now() - overallStartTimeRef.current, moves: totalMoves + 1, mistakes: totalMistakes, solvedCategoryIds: updatedSolvedCats, solvedWords: updatedSolvedWords }); 
          } else {
            setTotalMoves(prev => prev + 1);
            setTimeout(() => setRound(r => r + 1), 600); 
          }
      }
    } else if (ids.length === 4) {
      audio.playError();
      setTotalMistakes(m => m + 1);
      setTotalMoves(prev => prev + 1);
      setTiles(p => p.map(t => ids.includes(t.id) ? { ...t, status: 'wrong' as const } : t));
      setTimeout(() => { setTiles(p => p.map(t => t.status === 'wrong' ? { ...t, status: 'neutral' as const } : t)); setSelectedIds([]); }, 500);
    }
  }, [round, totalMistakes, totalRounds, solvedCategoryIds, solvedWords, onComplete, totalMoves]);

  const handleTileClick = useCallback((id: string) => {
    lastActivityRef.current = Date.now();
    if (isComplete || timeLeft === 0 || isReviewing) return;
    const clicked = tiles.find(t => t.id === id);
    if (!clicked || clicked.status === 'solved' || clicked.status === 'wrong' || clicked.status === 'locked') return;
    audio.playSelect();
    const isSel = selectedIds.includes(id);
    const nextIds = isSel ? selectedIds.filter(x => x !== id) : [...selectedIds, id].slice(0, 4);
    setSelectedIds(nextIds);
    setTiles(p => p.map(t => (t.status === 'solved' || t.status === 'locked') ? t : nextIds.includes(t.id) ? { ...t, status: 'selected' as const } : { ...t, status: 'neutral' as const }));
    if (nextIds.length === 4) setTimeout(() => validateSelection(nextIds, tiles), 150);
  }, [isComplete, timeLeft, isReviewing, selectedIds, tiles, validateSelection]);

  // TIMER LOGIC
  useEffect(() => {
    if (isInitializing || isReviewing || isComplete) return;
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else {
      audio.playError();
      onComplete({ failed: true, timeMs: Date.now() - overallStartTimeRef.current, mistakes: totalMistakes, moves: totalMoves, solvedCategoryIds, solvedWords });
    }
  }, [timeLeft, isInitializing, isComplete, isReviewing, totalMistakes, totalMoves, solvedCategoryIds, solvedWords, onComplete]);

  // AUTO PLAY LOGIC
  useEffect(() => {
    if (!isAutoPlaying || isComplete || isReviewing || timeLeft === 0) return;
    const timer = setTimeout(() => {
      const unsolvedCategory = activeCategoriesInRound.find(c => !c.isSolved);
      if (!unsolvedCategory) return;
      const unsolvedCategoryTiles = tiles.filter(t => t.categoryId === unsolvedCategory.id && t.status !== 'solved');
      const nextToClick = unsolvedCategoryTiles.find(t => !selectedIds.includes(t.id));
      if (nextToClick) { handleTileClick(nextToClick.id); }
      else {
        const currentlySelectedUnsolved = tiles.filter(t => selectedIds.includes(t.id) && t.categoryId === unsolvedCategory.id);
        if (currentlySelectedUnsolved.length === 4) { validateSelection(selectedIds, tiles); }
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, isComplete, isReviewing, timeLeft, tiles, selectedIds, handleTileClick, round, activeCategoriesInRound, validateSelection]);

  if (isInitializing) return null;

  return (
    <div className="flex flex-col h-full w-full max-w-4xl mx-auto overflow-hidden bg-black">
      <Header modeName="MIND MATCH" levelIndex={levelIndex} onOpenSettings={() => onOpenSettings?.([])} isReviewing={isReviewing} onNext={onNext} hintsEnabled={hintsEnabled} onToggleHints={() => setHintsEnabled?.(!hintsEnabled)} stars={stars}
        leftContent={ <div className="flex items-center gap-4 pl-1"><div className="flex flex-col items-end leading-none"><span className="text-[8px] font-bold text-zinc-500 uppercase">TIME</span><span className={`text-sm font-black ${timeLeft < 10 ? "text-neon-red animate-pulse" : "text-white"}`}>{timeLeft}s</span></div><div className="flex flex-col items-end leading-none"><span className="text-[8px] font-bold text-zinc-500 uppercase">ROUND</span><span className="text-sm font-black text-white">{round}/{totalRounds}</span></div></div> }
      />
      <main className="flex-1 flex flex-col p-1 w-full relative">
          <div className={`grid grid-cols-2 gap-1 mb-1`}>
             {activeCategoriesInRound.map(c => (
               <div key={c.name} className={`h-8 rounded-lg border-2 border-white flex items-center justify-center transition-all ${c.isSolved ? (c.color || 'bg-zinc-800') : 'bg-black'}`}>
                  <span className={`font-black font-oswald text-[10px] uppercase text-center px-1 ${c.isSolved ? 'text-white' : 'text-zinc-600'}`} style={c.isSolved ? ARCADE_OUTLINE : {}}>{c.name}</span>
               </div>
             ))}
          </div>
          <div className="grid grid-cols-4 gap-0.5 flex-1 p-0.5">
            {tiles.map(t => <Tile key={t.id} data={t} onClick={handleTileClick} ref={(el: any) => { if(el) tileRefs.current.set(t.id, el); }} />)}
          </div>
      </main>
      <ParticleOverlay ref={particleRef} />
    </div>
  );
}
