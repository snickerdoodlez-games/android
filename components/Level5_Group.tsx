import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CSVRow, TileData, THEMES, LevelProps, NEON_PALETTE } from '../types';
import Tile from './Tile';
import LevelLayout from './LevelLayout';
import { audio } from '../services/audioService';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import { ARCADE_OUTLINE } from '../services/tileStyles';

const m = motion as any;

export default function Level5_Group({
  csvData, onComplete, levelIndex, onOpenSettings, isReviewing, onNext, hintsEnabled, setHintsEnabled, isAutoPlaying, stars, definitions
}: LevelProps) {
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [round, setRound] = useState(1);
  const [totalMistakes, setTotalMistakes] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isComplete, setIsComplete] = useState(false);
  const [solvedCategoryIds, setSolvedCategoryIds] = useState<string[]>([]);
  const [solvedWords, setSolvedWords] = useState<string[]>([]);
  const [totalMoves, setTotalMoves] = useState(0);
  const [isInitializing, setIsInitializing] = useState(true);
  const [activeDefinition, setActiveDefinition] = useState<{ word: string, text: string } | null>(null);
  const [modalColor, setModalColor] = useState("");

  const lastActivityRef = useRef(Date.now());
  const particleRef = useRef<ParticleHandle>(null);
  const overallStartTimeRef = useRef(Date.now());
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const totalRounds = useMemo(() => {
    const rounds = Math.floor(csvData.length / 4);
    return Math.max(1, rounds);
  }, [csvData]);

  const activeCategoriesInRound = useMemo(() => {
    const map = new Map();
    tiles.forEach(t => {
      if (!map.has(t.categoryId)) {
        const items = tiles.filter(x => x.categoryId === t.categoryId);
        map.set(t.categoryId, {
          name: t.categoryName,
          id: t.categoryId,
          isSolved: items.every(x => x.status === 'solved'),
          color: items[0]?.color
        });
      }
    });
    return Array.from(map.values());
  }, [tiles]);

  const initRound = useCallback((targetRound: number) => {
    if (isReviewing) return;

    const startIndex = (targetRound - 1) * 4;
    const roundData = csvData.slice(startIndex, startIndex + 4);

    if (roundData.length === 0) return;

    const newTiles: TileData[] = [];
    roundData.forEach((cat, catIdx) => {
      const colorIndex = ((targetRound - 1) * 4 + catIdx) % THEMES[0].solvedColors.length;
      const categoryColor = THEMES[0].solvedColors[colorIndex];
      cat.words.slice(0, 4).forEach(w => {
        const cleanWord = w.toUpperCase();
        newTiles.push({
          id: Math.random().toString(36).substr(2, 9),
          word: w,
          categoryId: cat.id,
          categoryName: cat.name.includes(':') ? cat.name.split(':')[1].trim() : cat.name,
          status: 'neutral',
          color: categoryColor,
          definition: cat.wordDefinitions?.[cleanWord] || definitions[cleanWord]
        });
      });
    });
    setTiles(newTiles.sort(() => 0.5 - Math.random()));
    setSelectedIds([]);
    lastActivityRef.current = Date.now();
  }, [csvData, isReviewing, definitions]);

  useEffect(() => {
    audio.resume();
    overallStartTimeRef.current = Date.now();
    setSolvedCategoryIds([]);
    setSolvedWords([]);
    setTotalMistakes(0);
    setTotalMoves(0);
    setRound(1);
    setIsComplete(false);

    // Timer values: Easy=30s, Medium=55s, Hard=110s
    const initialTime = totalRounds === 1 ? 30 : (totalRounds === 2 ? 55 : 110);
    setTimeLeft(initialTime);

    initRound(1);
    setIsInitializing(false);
  }, [levelIndex, totalRounds, initRound]);

  useEffect(() => {
    if (round > 1 && round <= totalRounds && !isReviewing && !isComplete) {
      initRound(round);
    }
  }, [round, totalRounds, isReviewing, isComplete, initRound]);

  useEffect(() => {
    if (isInitializing || isReviewing || isComplete) return;

    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else {
      audio.playError();
      onComplete({
        failed: true,
        timeMs: Date.now() - overallStartTimeRef.current,
        mistakes: totalMistakes,
        moves: totalMoves,
        solvedCategoryIds,
        solvedWords
      });
    }
  }, [timeLeft, isInitializing, isComplete, isReviewing, totalMistakes, totalMoves, solvedCategoryIds, solvedWords, onComplete]);

  const validateSelection = useCallback((ids: string[], currentTiles: TileData[]) => {
    const sel = currentTiles.filter(t => ids.includes(t.id));
    if (sel.length === 4 && sel.every(t => t.categoryId === sel[0].categoryId)) {
      audio.playRowSolved();

      const categoryId = sel[0].categoryId;
      const categoryWords = sel.map(s => s.word);
      const updatedSolvedCats = [...solvedCategoryIds];
      if (!updatedSolvedCats.includes(categoryId)) {
        updatedSolvedCats.push(categoryId);
      }
      setSolvedCategoryIds(updatedSolvedCats);
      const updatedSolvedWords = [...solvedWords, ...categoryWords];
      setSolvedWords(updatedSolvedWords);
      const solvedColor = sel[0]?.color || THEMES[0].solvedColors[0];

      const next = currentTiles.map(t => ids.includes(t.id) ? { ...t, status: 'solved' as const, color: solvedColor } : t);
      setTiles(next);
      setSelectedIds([]);

      ids.forEach(id => {
        const rect = tileRefs.current.get(id)?.getBoundingClientRect();
        if (rect && particleRef.current) particleRef.current.explode(rect.left + rect.width / 2, rect.top + rect.height / 2, "#FFFFFF");
      });

      if (next.every(t => t.status === 'solved')) {
        if (round >= totalRounds) {
          audio.playWin();
          setIsComplete(true);
          setTimeout(() => {
            onComplete({
              timeMs: Date.now() - overallStartTimeRef.current,
              moves: totalMoves + 1,
              mistakes: totalMistakes,
              solvedCategoryIds: updatedSolvedCats,
              solvedWords: updatedSolvedWords
            });
          }, 800);
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
      setTimeout(() => {
        setTiles(p => p.map(t => t.status === 'wrong' ? { ...t, status: 'neutral' as const } : t));
        setSelectedIds([]);
      }, 500);
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

  const handleLongPress = useCallback((word: string, definition?: string) => {
    if (isReviewing) return;
    audio.playSelect();
    const neonColors = ['bg-neon-yellow-1', 'bg-neon-lime-1', 'bg-neon-lime', 'bg-neon-green-1', 'bg-neon-green', 'bg-neon-mint-1', 'bg-neon-mint', 'bg-neon-cyan', 'bg-neon-sky-blue', 'bg-neon-blue', 'bg-neon-violet', 'bg-neon-purple', 'bg-neon-magenta', 'bg-neon-pink', 'bg-neon-rose', 'bg-neon-orange'];
    setModalColor(neonColors[Math.floor(Math.random() * neonColors.length)]);
    setActiveDefinition({
      word: word.toUpperCase(),
      text: definition || definitions[word.toUpperCase()] || "Definition not found."
    });
  }, [isReviewing, definitions]);

  useEffect(() => {
    if (!isAutoPlaying || isComplete || isReviewing || timeLeft === 0) return;
    const timer = setTimeout(() => {
      const unsolvedCategory = activeCategoriesInRound.find(c => !c.isSolved);
      if (!unsolvedCategory) return;
      const unsolvedCategoryTiles = tiles.filter(t => t.categoryId === unsolvedCategory.id && t.status !== 'solved');
      const nextToClick = unsolvedCategoryTiles.find(t => !selectedIds.includes(t.id));
      if (nextToClick) {
        handleTileClick(nextToClick.id);
      } else {
        const currentlySelectedUnsolved = tiles.filter(t => selectedIds.includes(t.id) && t.categoryId === unsolvedCategory.id);
        if (currentlySelectedUnsolved.length === 4) {
          validateSelection(selectedIds, tiles);
        }
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, isComplete, isReviewing, timeLeft, tiles, selectedIds, handleTileClick, round, activeCategoriesInRound, validateSelection]);

  if (isInitializing) return null;
  const neonHex = NEON_PALETTE[modalColor] || '#FFFFFF';

  return (
    <LevelLayout
      modeName="MIND MATCH"
      levelIndex={levelIndex}
      onOpenSettings={() => onOpenSettings()}
      isReviewing={isReviewing}
      onNext={onNext}
      hintsEnabled={hintsEnabled}
      onToggleHints={() => setHintsEnabled?.(!hintsEnabled)}
      stars={stars}
      headerExtras={(
        <div className="flex items-center gap-4 pl-1">
          <div className="flex flex-col items-end leading-none">
            <span className="text-[8px] font-bold text-zinc-500 uppercase">TIME</span>
            <span className={`text-sm font-black ${timeLeft < 10 ? "text-neon-red animate-pulse" : "text-white"}`}>{timeLeft}s</span>
          </div>
          <div className="flex flex-col items-end leading-none">
            <span className="text-[8px] font-bold text-zinc-500 uppercase">ROUND</span>
            <span className="text-sm font-black text-white">{round}/{totalRounds}</span>
          </div>
        </div>
      )}
    >
      <div className="flex-1 flex flex-col p-1 w-full relative h-full overflow-visible">
        <div className="grid grid-cols-2 gap-1 mb-1 shrink-0">
          {activeCategoriesInRound.map(c => {
            const bgClass = (c.color || '').split(' ').find(token => token.startsWith('bg-neon-'));
            const solvedFillColor = bgClass ? (NEON_PALETTE[bgClass] || '#3f3f46') : '#3f3f46';
            const solvedTextColor = (c.color || '').includes('text-white') ? '#FFFFFF' : '#000000';

            return (
              <div
                key={c.id}
                className="h-16 rounded-lg border-2 border-white flex items-center justify-center transition-all"
                style={c.isSolved ? { backgroundColor: solvedFillColor } : { backgroundColor: '#000000' }}
              >
                <span
                  className={`font-black font-oswald text-lg uppercase text-center px-2 ${c.isSolved ? '' : 'text-zinc-600'}`}
                  style={c.isSolved ? { ...ARCADE_OUTLINE, color: solvedTextColor } : {}}
                >
                  {c.name}
                </span>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-4 gap-0.5 flex-1 p-0.5 overflow-visible">
          {tiles.map(t => (
            <Tile key={t.id} data={t} onClick={handleTileClick} onLongPress={handleLongPress} ref={(el: any) => { if (el) tileRefs.current.set(t.id, el); }} />
          ))}
        </div>
      </div>
      <ParticleOverlay ref={particleRef} />
      <AnimatePresence>
        {activeDefinition && (
          <m.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActiveDefinition(null)}
            className="fixed inset-0 z-[20000] bg-black/90 flex items-center justify-center p-8 backdrop-blur-md"
          >
            <m.div
              initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
              className="bg-black p-10 rounded-medium max-w-sm w-full text-center relative"
              style={{ boxShadow: `0 0 0 2px #FFFFFF, 0 0 0 6px #000000, 0 0 0 14px #FFFFFF, 0 0 80px 20px ${neonHex}` }}
            >
              <h2 className="text-4xl font-black uppercase mb-6 italic tracking-tighter border-b-4 border-white pb-2 inline-block text-white" style={{ textShadow: '4px 4px 0px rgba(0,0,0,1)' }}>{activeDefinition.word}</h2>
              <p className="text-xl md:text-2xl leading-snug font-bold uppercase font-oswald mt-4 text-white" style={{ textShadow: '2px 2px 0px rgba(0,0,0,1)' }}>{activeDefinition.text}</p>
              <div className="mt-10 bg-black text-white font-black py-3 px-8 inline-block uppercase italic text-sm rounded-small active:scale-95 transition-transform" style={{ boxShadow: `0 0 0 2px #FFFFFF, 0 0 0 6px #000000` }}>Tap to Dismiss</div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </LevelLayout>
  );
}
