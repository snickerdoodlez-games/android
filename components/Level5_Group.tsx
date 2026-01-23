
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { CSVRow, TileData, THEMES, Theme } from '../types';
import Tile from './Tile';
import Header from './Header';
import { getValidatedLevelData } from '../services/levelContent';
import { audio } from '../services/audioService';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import { ARCADE_OUTLINE } from '../services/tileStyles';

export default function Level5_Group({ 
    csvData, onComplete, levelIndex, onOpenSettings, isReviewing, onNext, hintsEnabled, setHintsEnabled, isAutoPlaying
}: any) {
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [round, setRound] = useState(1);
  const [mistakes, setMistakes] = useState(0);
  const [roundsWon, setRoundsWon] = useState(0);
  const [timeLeft, setTimeLeft] = useState(90);
  const [isComplete, setIsComplete] = useState(false);
  const [solvedIds, setSolvedIds] = useState<string[]>([]);
  
  const lastActivityRef = useRef(Date.now());
  const particleRef = useRef<ParticleHandle>(null);
  const startTimeRef = useRef(Date.now());
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    if (isReviewing || isComplete) return;
    const data = getValidatedLevelData(4, csvData, 4, levelIndex, "MindMatch");
    const newTiles: TileData[] = [];
    data.forEach(cat => {
        cat.words.slice(0, 4).forEach(w => {
            newTiles.push({ id: Math.random().toString(36).substr(2, 9), word: w, categoryId: cat.id, categoryName: cat.name, status: 'neutral' });
        });
    });
    setTiles(newTiles.sort(() => 0.5 - Math.random()));
    setSelectedIds([]);
    setSolvedIds([]);
    setTimeLeft(Math.max(15, 90 - (round - 1) * 20));
    lastActivityRef.current = Date.now();
  }, [round, csvData, isReviewing, levelIndex]);

  const validate = useCallback((ids: string[], currentTiles: TileData[]) => {
    const sel = currentTiles.filter(t => ids.includes(t.id));
    if (sel.length === 4 && sel.every(t => t.categoryId === sel[0].categoryId)) {
      audio.playRowSolved();
      
      const categoryId = sel[0].categoryId;
      const updatedSolvedIds = [...solvedIds, categoryId];
      setSolvedIds(updatedSolvedIds);
      
      // Select color based on the order this category was solved to ensure uniqueness
      const colorIndex = (updatedSolvedIds.length - 1) % THEMES[0].solvedColors.length;
      const color = THEMES[0].solvedColors[colorIndex];
      
      const next = currentTiles.map(t => ids.includes(t.id) ? { ...t, status: 'solved' as const, color } : t);
      setTiles(next); setSelectedIds([]);
      ids.forEach(id => {
          const rect = tileRefs.current.get(id)?.getBoundingClientRect();
          if (rect && particleRef.current) particleRef.current.explode(rect.left + rect.width / 2, rect.top + rect.height / 2, "#FFFFFF");
      });
      if (next.every(t => t.status === 'solved')) {
          const nw = roundsWon + 1; setRoundsWon(nw);
          if (round >= 3) { audio.playWin(); setIsComplete(true); onComplete({ roundsWon: nw, timeMs: Date.now() - startTimeRef.current, moves: 12, mistakes, solvedCategoryIds: updatedSolvedIds }); }
          else setTimeout(() => setRound(r => r + 1), 600);
      }
    } else if (ids.length === 4) {
      audio.playError();
      setMistakes(m => m + 1);
      setTiles(p => p.map(t => ids.includes(t.id) ? { ...t, status: 'wrong' as const } : t));
      setTimeout(() => {
        setTiles(p => p.map(t => t.status === 'wrong' ? { ...t, status: 'neutral' as const } : t));
        setSelectedIds([]);
      }, 500);
    }
  }, [round, mistakes, solvedIds, roundsWon, onComplete]);

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
    if (nextIds.length === 4) setTimeout(() => validate(nextIds, tiles), 150);
  }, [isComplete, timeLeft, isReviewing, selectedIds, tiles, validate]);

  // AUTO PLAY LOGIC - SPED UP
  useEffect(() => {
    if (!isAutoPlaying || isComplete || isReviewing || timeLeft === 0) return;
    const timer = setTimeout(() => {
      const unsolvedTile = tiles.find(t => t.status !== 'solved');
      if (!unsolvedTile) return;
      const sameCatTiles = tiles.filter(t => t.categoryId === unsolvedTile.categoryId && t.status !== 'solved');
      const nextToClick = sameCatTiles.find(t => !selectedIds.includes(t.id));
      if (nextToClick) handleTileClick(nextToClick.id);
    }, 150);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, isComplete, isReviewing, timeLeft, tiles, selectedIds, handleTileClick]);

  const cats = useMemo(() => {
    const map = new Map();
    tiles.forEach(t => {
      if (!map.has(t.categoryId)) {
        const items = tiles.filter(x => x.categoryId === t.categoryId);
        map.set(t.categoryId, { name: t.categoryName, isSolved: items.every(x => x.status === 'solved'), color: items[0].color });
      }
    });
    return Array.from(map.values());
  }, [tiles]);

  return (
    <div className="flex flex-col h-full w-full max-w-4xl mx-auto overflow-hidden bg-black">
      <Header modeName="MIND MATCH" levelIndex={levelIndex} onOpenSettings={() => onOpenSettings?.([])} isReviewing={isReviewing} onNext={onNext} hintsEnabled={hintsEnabled} onToggleHints={() => setHintsEnabled?.(!hintsEnabled)}
        leftContent={ <div className="flex items-center gap-4 pl-1">
             <div className="flex flex-col items-end leading-none"><span className="text-[8px] font-bold text-zinc-500 uppercase">TIME</span><span className={`text-sm font-black ${timeLeft < 10 ? "text-neon-red animate-pulse" : "text-white"}`}>{timeLeft}s</span></div>
             <div className="flex flex-col items-end leading-none"><span className="text-[8px] font-bold text-zinc-500 uppercase">ROUND</span><span className="text-sm font-black text-white">{round}/3</span></div>
        </div> }
      />
      <main className="flex-1 flex flex-col p-1 w-full relative">
          <div className="grid grid-cols-2 gap-1 mb-1">
             {cats.map(c => (
               <div key={c.name} className={`h-8 rounded-lg border-2 border-white flex items-center justify-center transition-all ${c.isSolved ? (c.color || 'bg-zinc-800') : 'bg-black'}`}>
                  <span 
                    className={`font-black font-oswald text-[10px] uppercase text-center px-1 ${c.isSolved ? 'text-white' : 'text-zinc-600'}`}
                    style={c.isSolved ? ARCADE_OUTLINE : {}}
                  >
                    {c.name}
                  </span>
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
