import React, { useState, useEffect, useRef } from 'react';
import { GameMode, TileData } from '../types';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import { audio } from '../services/audioService';
import Header from './Header';

interface TutorialProps {
  mode: GameMode;
  onComplete: () => void;
}

// ============================================================
// Mock Data for Tutorial Boards - Each mode gets unique tiles
// ============================================================

// BASICS (CLASSIC) tiles - 4 rows, demonstrative
const BASICS_TILES: TileData[] = [
  // Row 1: Fruits (needs Pear) - has Dog (intruder)
  { id: 'b0', word: 'APPLE', categoryId: 'fruit', categoryName: 'FRUIT', status: 'neutral' },
  { id: 'b1', word: 'BANANA', categoryId: 'fruit', categoryName: 'FRUIT', status: 'neutral' },
  { id: 'b2', word: 'GRAPE', categoryId: 'fruit', categoryName: 'FRUIT', status: 'neutral' },
  { id: 'b3', word: 'DOG', categoryId: 'animal', categoryName: 'ANIMAL', status: 'neutral' },
  // Row 2: Animals (needs Dog) - has Pear (intruder)
  { id: 'b4', word: 'CAT', categoryId: 'animal', categoryName: 'ANIMAL', status: 'neutral' },
  { id: 'b5', word: 'LION', categoryId: 'animal', categoryName: 'ANIMAL', status: 'neutral' },
  { id: 'b6', word: 'TIGER', categoryId: 'animal', categoryName: 'ANIMAL', status: 'neutral' },
  { id: 'b7', word: 'PEAR', categoryId: 'fruit', categoryName: 'FRUIT', status: 'neutral' },
  // Row 3: Colors (scrambled)
  { id: 'b8', word: 'RED', categoryId: 'color', categoryName: 'COLOR', status: 'neutral' },
  { id: 'b9', word: 'BLUE', categoryId: 'color', categoryName: 'COLOR', status: 'neutral' },
  { id: 'b10', word: 'GREEN', categoryId: 'color', categoryName: 'COLOR', status: 'neutral' },
  { id: 'b11', word: 'YELLOW', categoryId: 'color', categoryName: 'COLOR', status: 'neutral' },
  // Row 4: Tools (scrambled)
  { id: 'b12', word: 'HAMMER', categoryId: 'tool', categoryName: 'TOOL', status: 'neutral' },
  { id: 'b13', word: 'DRILL', categoryId: 'tool', categoryName: 'TOOL', status: 'neutral' },
  { id: 'b14', word: 'SAW', categoryId: 'tool', categoryName: 'TOOL', status: 'neutral' },
  { id: 'b15', word: 'WRENCH', categoryId: 'tool', categoryName: 'TOOL', status: 'neutral' },
];

// EMOJI tiles - no definitions on tutorial tiles
const EMOJI_TILES: TileData[] = [
  { id: 'e0', word: '🍎', categoryId: 'fruit', categoryName: 'FRUIT', status: 'neutral', isEmoji: true },
  { id: 'e1', word: '🍌', categoryId: 'fruit', categoryName: 'FRUIT', status: 'neutral', isEmoji: true },
  { id: 'e2', word: '🍇', categoryId: 'fruit', categoryName: 'FRUIT', status: 'neutral', isEmoji: true },
  { id: 'e3', word: '🐕', categoryId: 'animal', categoryName: 'ANIMAL', status: 'neutral', isEmoji: true },
  { id: 'e4', word: '🐱', categoryId: 'animal', categoryName: 'ANIMAL', status: 'neutral', isEmoji: true },
  { id: 'e5', word: '🦁', categoryId: 'animal', categoryName: 'ANIMAL', status: 'neutral', isEmoji: true },
  { id: 'e6', word: '🐯', categoryId: 'animal', categoryName: 'ANIMAL', status: 'neutral', isEmoji: true },
  { id: 'e7', word: '🍐', categoryId: 'fruit', categoryName: 'FRUIT', status: 'neutral', isEmoji: true },
  { id: 'e8', word: '🔴', categoryId: 'color', categoryName: 'COLOR', status: 'neutral', isEmoji: true },
  { id: 'e9', word: '🔵', categoryId: 'color', categoryName: 'COLOR', status: 'neutral', isEmoji: true },
  { id: 'e10', word: '🟢', categoryId: 'color', categoryName: 'COLOR', status: 'neutral', isEmoji: true },
  { id: 'e11', word: '🟡', categoryId: 'color', categoryName: 'COLOR', status: 'neutral', isEmoji: true },
  { id: 'e12', word: '🔨', categoryId: 'tool', categoryName: 'TOOL', status: 'neutral', isEmoji: true },
  { id: 'e13', word: '🪛', categoryId: 'tool', categoryName: 'TOOL', status: 'neutral', isEmoji: true },
  { id: 'e14', word: '🪚', categoryId: 'tool', categoryName: 'TOOL', status: 'neutral', isEmoji: true },
  { id: 'e15', word: '🔧', categoryId: 'tool', categoryName: 'TOOL', status: 'neutral', isEmoji: true },
];

// SYNONYMS tiles - no definitions on tutorial tiles
const SYNONYM_TILES: TileData[] = [
  { id: 's0', word: 'BIG', categoryId: 'size', categoryName: 'LARGE', status: 'neutral' },
  { id: 's1', word: 'HUGE', categoryId: 'size', categoryName: 'LARGE', status: 'neutral' },
  { id: 's2', word: 'LARGE', categoryId: 'size', categoryName: 'LARGE', status: 'neutral' },
  { id: 's3', word: 'GLAD', categoryId: 'emotion', categoryName: 'HAPPY', status: 'neutral' },
  { id: 's4', word: 'HAPPY', categoryId: 'emotion', categoryName: 'HAPPY', status: 'neutral' },
  { id: 's5', word: 'JOYFUL', categoryId: 'emotion', categoryName: 'HAPPY', status: 'neutral' },
  { id: 's6', word: 'SMALL', categoryId: 'size2', categoryName: 'TINY', status: 'neutral' },
  { id: 's7', word: 'TINY', categoryId: 'size2', categoryName: 'TINY', status: 'neutral' },
  { id: 's8', word: 'QUICK', categoryId: 'speed', categoryName: 'FAST', status: 'neutral' },
  { id: 's9', word: 'FAST', categoryId: 'speed', categoryName: 'FAST', status: 'neutral' },
  { id: 's10', word: 'RAPID', categoryId: 'speed', categoryName: 'FAST', status: 'neutral' },
  { id: 's11', word: 'SAD', categoryId: 'emotion2', categoryName: 'UNHAPPY', status: 'neutral' },
  { id: 's12', word: 'UNHAPPY', categoryId: 'emotion2', categoryName: 'UNHAPPY', status: 'neutral' },
  { id: 's13', word: 'LITTLE', categoryId: 'size2', categoryName: 'TINY', status: 'neutral' },
  { id: 's14', word: 'SPEEDY', categoryId: 'speed', categoryName: 'FAST', status: 'neutral' },
  { id: 's15', word: 'MISERABLE', categoryId: 'emotion2', categoryName: 'UNHAPPY', status: 'neutral' },
];

// THEMED tiles - no definitions on tutorial tiles
const THEMED_TILES: TileData[] = [
  { id: 't0', word: 'MERCURY', categoryId: 'planet', categoryName: 'PLANETS', status: 'neutral' },
  { id: 't1', word: 'VENUS', categoryId: 'planet', categoryName: 'PLANETS', status: 'neutral' },
  { id: 't2', word: 'EARTH', categoryId: 'planet', categoryName: 'PLANETS', status: 'neutral' },
  { id: 't3', word: 'MARS', categoryId: 'planet', categoryName: 'PLANETS', status: 'neutral' },
  { id: 't4', word: 'GRAVITY', categoryId: 'physics', categoryName: 'PHYSICS', status: 'neutral' },
  { id: 't5', word: 'ENERGY', categoryId: 'physics', categoryName: 'PHYSICS', status: 'neutral' },
  { id: 't6', word: 'FORCE', categoryId: 'physics', categoryName: 'PHYSICS', status: 'neutral' },
  { id: 't7', word: 'MOTION', categoryId: 'physics', categoryName: 'PHYSICS', status: 'neutral' },
  { id: 't8', word: 'OXYGEN', categoryId: 'element', categoryName: 'ELEMENTS', status: 'neutral' },
  { id: 't9', word: 'HYDROGEN', categoryId: 'element', categoryName: 'ELEMENTS', status: 'neutral' },
  { id: 't10', word: 'CARBON', categoryId: 'element', categoryName: 'ELEMENTS', status: 'neutral' },
  { id: 't11', word: 'NITROGEN', categoryId: 'element', categoryName: 'ELEMENTS', status: 'neutral' },
  { id: 't12', word: 'BEETHOVEN', categoryId: 'composer', categoryName: 'COMPOSERS', status: 'neutral' },
  { id: 't13', word: 'MOZART', categoryId: 'composer', categoryName: 'COMPOSERS', status: 'neutral' },
  { id: 't14', word: 'BACH', categoryId: 'composer', categoryName: 'COMPOSERS', status: 'neutral' },
  { id: 't15', word: 'CHOPIN', categoryId: 'composer', categoryName: 'COMPOSERS', status: 'neutral' },
];

// EXPANSION tiles (2 rows demo, expanded state) - no definitions on tutorial tiles
const EXPANSION_TILES: TileData[] = [
  { id: 'x0', word: 'SUN', categoryId: 'star', categoryName: 'STARS', status: 'neutral' },
  { id: 'x1', word: 'SIRIUS', categoryId: 'star', categoryName: 'STARS', status: 'neutral' },
  { id: 'x2', word: 'VEGA', categoryId: 'star', categoryName: 'STARS', status: 'neutral' },
  { id: 'x3', word: 'RIGEL', categoryId: 'star', categoryName: 'STARS', status: 'neutral' },
  { id: 'x4', word: 'PIANO', categoryId: 'keyboard', categoryName: 'KEYBOARD', status: 'neutral' },
  { id: 'x5', word: 'GUITAR', categoryId: 'string', categoryName: 'STRINGS', status: 'neutral' },
  { id: 'x6', word: 'DRUMS', categoryId: 'percussion', categoryName: 'PERCUSSION', status: 'neutral' },
  { id: 'x7', word: 'VIOLIN', categoryId: 'string', categoryName: 'STRINGS', status: 'neutral' },
  { id: 'x8', word: 'FLUTE', categoryId: 'wind', categoryName: 'WOODWIND', status: 'neutral' },
  { id: 'x9', word: 'TRUMPET', categoryId: 'brass', categoryName: 'BRASS', status: 'neutral' },
  { id: 'x10', word: 'CELLO', categoryId: 'string', categoryName: 'STRINGS', status: 'neutral' },
  { id: 'x11', word: 'HARP', categoryId: 'string', categoryName: 'STRINGS', status: 'neutral' },
];

// MIND MATCH tiles (2 categories, 2 tiles each for tutorial) - no definitions on tutorial tiles
const MIND_MATCH_TILES: TileData[] = [
  { id: 'm0', word: 'OCEAN', categoryId: 'water', categoryName: 'BODIES OF WATER', status: 'neutral' },
  { id: 'm1', word: 'LAKE', categoryId: 'water', categoryName: 'BODIES OF WATER', status: 'neutral' },
  { id: 'm2', word: 'RIVER', categoryId: 'water', categoryName: 'BODIES OF WATER', status: 'neutral' },
  { id: 'm3', word: 'POND', categoryId: 'water', categoryName: 'BODIES OF WATER', status: 'neutral' },
  { id: 'm4', word: 'DESERT', categoryId: 'land', categoryName: 'LANDSCAPES', status: 'neutral' },
  { id: 'm5', word: 'MOUNTAIN', categoryId: 'land', categoryName: 'LANDSCAPES', status: 'neutral' },
  { id: 'm6', word: 'FOREST', categoryId: 'land', categoryName: 'LANDSCAPES', status: 'neutral' },
  { id: 'm7', word: 'VALLEY', categoryId: 'land', categoryName: 'LANDSCAPES', status: 'neutral' },
  // Dummy second round tiles (3rd category, 4 tiles - will swap in)
  { id: 'm8', word: 'SPRING', categoryId: 'season', categoryName: 'SEASONS', status: 'neutral' },
  { id: 'm9', word: 'SUMMER', categoryId: 'season', categoryName: 'SEASONS', status: 'neutral' },
  { id: 'm10', word: 'AUTUMN', categoryId: 'season', categoryName: 'SEASONS', status: 'neutral' },
  { id: 'm11', word: 'WINTER', categoryId: 'season', categoryName: 'SEASONS', status: 'neutral' },
];

const getModeName = (m: GameMode): string => {
  if (m === GameMode.CLASSIC) return "CLASSIC GRID";
  if (m === GameMode.LEVEL_EMOJI) return "EMOJI MATCH";
  if (m === GameMode.LEVEL_SYNONYMS) return "SYNONYMS";
  if (m === GameMode.LEVEL_THEMED) return "THEMED";
  if (m === GameMode.LEVEL_MIND_MATCH) return "MIND MATCH";
  if (m === GameMode.LEVEL_EXPANSION) return "EXPANSION";
  return "TUTORIAL";
};

const getTutorialTitle = (m: GameMode): string => {
  if (m === GameMode.CLASSIC) return "HOW TO PLAY";
  if (m === GameMode.LEVEL_EMOJI) return "EMOJI MODE";
  if (m === GameMode.LEVEL_SYNONYMS) return "SYNONYMS MODE";
  if (m === GameMode.LEVEL_THEMED) return "THEMED MODE";
  if (m === GameMode.LEVEL_MIND_MATCH) return "MIND MATCH";
  if (m === GameMode.LEVEL_EXPANSION) return "EXPANSION MODE";
  return "TUTORIAL";
};

// ============================================================
// Helper: Scramble tiles by swapping two pairs
// ============================================================
const scrambleTiles = (tiles: TileData[]): TileData[] => {
  const result = JSON.parse(JSON.stringify(tiles));
  if (result.length >= 16) {
    const temp1 = result[10]; result[10] = result[13]; result[13] = temp1;
    const temp2 = result[11]; result[11] = result[12]; result[12] = temp2;
  }
  return result;
};

const scrambleTiles8 = (tiles: TileData[]): TileData[] => {
  const result = JSON.parse(JSON.stringify(tiles));
  if (result.length >= 8) {
    const temp1 = result[2]; result[2] = result[6]; result[6] = temp1;
    const temp2 = result[3]; result[3] = result[7]; result[7] = temp2;
  }
  return result;
};

// ============================================================
// Animation helpers
// ============================================================
const animateSwap = async (tileRefs: Map<string, HTMLDivElement>, id1: string, id2: string) => {
  const el1 = tileRefs.get(id1);
  const el2 = tileRefs.get(id2);
  audio.playSwap();

  if (el1 && el2) {
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();
    const dx = rect2.left - rect1.left;
    const dy = rect2.top - rect1.top;

    el1.style.transition = 'transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s';
    el1.style.transform = `translate(${dx}px, ${dy}px) scale(1.1)`;
    el1.style.zIndex = '50';
    el1.style.boxShadow = '0 10px 20px rgba(0,0,0,0.5)';

    el2.style.transition = 'transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s';
    el2.style.transform = `translate(${-dx}px, ${-dy}px) scale(0.9)`;
    el2.style.zIndex = '40';

    await new Promise(r => setTimeout(r, 400));

    el1.style.transition = '';
    el1.style.transform = '';
    el1.style.zIndex = '';
    el1.style.boxShadow = '';
    el2.style.transition = '';
    el2.style.transform = '';
    el2.style.zIndex = '';
  }
};

// ============================================================
// Helper: Row rendering (shared across modes)
// ============================================================
const renderGrid = (
  tiles: TileData[],
  tileRefs: Map<string, HTMLDivElement>,
  cols: number = 4
) => {
  const rows = [];
  const rowCount = Math.ceil(tiles.length / cols);

  for (let r = 0; r < rowCount; r++) {
    const rowTiles = tiles.slice(r * cols, r * cols + cols);
    const isRowSolved = rowTiles.every(t => t.status === 'solved');
    const categoryName = rowTiles[0]?.categoryName;

    rows.push(
      <div key={r} className="flex-1 relative min-h-0 overflow-visible">
        {isRowSolved && <SolvedRowBackground seed={rowTiles[0].categoryId} />}
        {isRowSolved && (
          <div className="absolute top-0 left-6 z-[100] transform -translate-y-full">
            <div className="px-3 py-1 text-[clamp(0.625rem,2.5vw,0.875rem)] font-black uppercase bg-black border-2 border-white text-white rounded-t-lg shadow-[0_-4px_12px_rgba(0,0,0,0.8)] whitespace-nowrap">
              {categoryName}
            </div>
          </div>
        )}
        <div className={`grid grid-cols-${cols} gap-0.5 w-full h-full relative z-10 transition-all duration-300 ${isRowSolved ? 'p-[10px]' : 'p-0.5'}`}>
          {rowTiles.map((tile) => (
            <Tile
              key={tile.id}
              data={tile}
              onClick={() => {}}
              disabled={false}
              ref={(el) => {
                if (el) tileRefs.set(tile.id, el);
                else tileRefs.delete(tile.id);
              }}
            />
          ))}
        </div>
      </div>
    );
  }
  return rows;
};

// ============================================================
// Individual Tutorial Sequences
// ============================================================

const BasicsTutorial: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [tiles, setTiles] = useState<TileData[]>(() => scrambleTiles(BASICS_TILES));
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const hasSeenDefinition = useRef(false);

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      // Step 0: Welcome message
      await new Promise(r => setTimeout(r, 800));
      if (!mounted) return;
      setStep(0);

      // Wait for user interaction or timeout
      await new Promise(r => setTimeout(r, 5000));
      if (!mounted) return;
      hasSeenDefinition.current = true;

      // Step 1: Find 4 matching tiles
      await new Promise(r => setTimeout(r, 400));
      if (!mounted) return;
      setStep(1);
      await new Promise(r => setTimeout(r, 600));
      if (!mounted) return;

      // --- PAIR 1: DRILL (idx13) <-> GREEN (idx10) ---
      const idA = 'b13';
      const idB = 'b10';
      await new Promise(r => setTimeout(r, 300));
      if (!mounted) return;

      setTiles(prev => prev.map(t => t.id === idA ? { ...t, status: 'selected' } : t));
      audio.playSelect();
      await new Promise(r => setTimeout(r, 400));
      if (!mounted) return;
      setTiles(prev => prev.map(t => t.id === idB ? { ...t, status: 'swap-target' } : t));
      audio.playSelect();
      await new Promise(r => setTimeout(r, 200));
      if (!mounted) return;
      await animateSwap(tileRefs.current, idA, idB);
      setTiles(prev => {
        const next = [...prev];
        const idxA = next.findIndex(t => t.id === idA);
        const idxB = next.findIndex(t => t.id === idB);
        [next[idxA], next[idxB]] = [next[idxB], next[idxA]];
        next[idxA] = { ...next[idxA], status: 'neutral' };
        next[idxB] = { ...next[idxB], status: 'neutral' };
        return next;
      });
      audio.playSelect();
      await new Promise(r => setTimeout(r, 400));
      if (!mounted) return;

      // --- PAIR 2: SAW (idx12) <-> YELLOW (idx11) ---
      const idC = 'b12';
      const idD = 'b11';
      await new Promise(r => setTimeout(r, 300));
      if (!mounted) return;
      setTiles(prev => prev.map(t => t.id === idC ? { ...t, status: 'selected' } : t));
      audio.playSelect();
      await new Promise(r => setTimeout(r, 400));
      if (!mounted) return;
      setTiles(prev => prev.map(t => t.id === idD ? { ...t, status: 'swap-target' } : t));
      audio.playSelect();
      await new Promise(r => setTimeout(r, 200));
      if (!mounted) return;
      await animateSwap(tileRefs.current, idC, idD);
      setTiles(prev => {
        const next = [...prev];
        const idxC = next.findIndex(t => t.id === idC);
        const idxD = next.findIndex(t => t.id === idD);
        [next[idxC], next[idxD]] = [next[idxD], next[idxC]];
        next[idxC] = { ...next[idxC], status: 'neutral' };
        next[idxD] = { ...next[idxD], status: 'neutral' };
        return next;
      });
      await new Promise(r => setTimeout(r, 400));
      if (!mounted) return;

      // Solve rows 3 and 4 (Colors and Tools are now properly grouped)
      setStep(2);
      audio.playRowSolved();
      setTiles(prev => prev.map((t, idx) => {
        if (idx >= 8 && idx < 12) return { ...t, status: 'solved', color: 'bg-neon-green border-white' };
        if (idx >= 12) return { ...t, status: 'solved', color: 'bg-neon-yellow border-white' };
        return t;
      }));
      await new Promise(r => setTimeout(r, 800));
      if (!mounted) return;

      // --- NOW SWAP INTRUDERS (DOG <-> PEAR) ---
      audio.playSelect();
      setTiles(prev => prev.map(t => t.id === 'b3' ? { ...t, status: 'selected' } : t));
      setStep(3);
      await new Promise(r => setTimeout(r, 800));
      if (!mounted) return;
      audio.playSelect();
      setTiles(prev => prev.map(t => t.id === 'b7' ? { ...t, status: 'swap-target' } : t));
      await new Promise(r => setTimeout(r, 200));
      if (!mounted) return;
      await animateSwap(tileRefs.current, 'b3', 'b7');
      setTiles(prev => {
        const next = [...prev];
        const i1 = next.findIndex(t => t.id === 'b3');
        const i2 = next.findIndex(t => t.id === 'b7');
        [next[i1], next[i2]] = [next[i2], next[i1]];
        next[i1] = { ...next[i1], status: 'neutral' };
        next[i2] = { ...next[i2], status: 'neutral' };
        return next;
      });
      await new Promise(r => setTimeout(r, 300));
      if (!mounted) return;

      // Solve all rows
      audio.playRowSolved();
      audio.playWin();
      setTiles(current => current.map((t, idx) => {
        if (idx < 4) return { ...t, status: 'solved', color: 'bg-neon-blue border-white' };
        if (idx >= 4 && idx < 8) return { ...t, status: 'solved', color: 'bg-neon-pink border-white' };
        if (idx >= 8 && idx < 12) return { ...t, status: 'solved', color: 'bg-neon-green border-white' };
        if (idx >= 12) return { ...t, status: 'solved', color: 'bg-neon-yellow border-white' };
        return t;
      }));
      setStep(4);
      await new Promise(r => setTimeout(r, 1000));
      if (!mounted) return;
      setStep(5);
    };
    run();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="flex-1 w-full relative flex flex-col pt-0 p-1 sm:p-2 min-h-0 bg-black items-center justify-center overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex-1 flex flex-col gap-0 w-full max-w-sm max-h-[55vh] overflow-visible mt-8">
          {renderGrid(tiles, tileRefs.current)}
        </div>

        {/* Instructions */}
        <div className="h-14 flex items-center justify-center mb-3 shrink-0 w-full px-4">
          {step === 0 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-cyan animate-fade-in shadow-[0_0_15px_rgba(0,255,255,0.3)] text-center">
              <p className="text-neon-cyan font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">FIND 4 TILES THAT BELONG TOGETHER</p>
            </div>
          )}
          {step === 1 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-blue animate-fade-in shadow-[0_0_15px_rgba(0,229,255,0.3)] text-center">
              <p className="text-neon-blue font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">SWAP TILES TO MAKE A MATCH</p>
            </div>
          )}
          {step === 2 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-yellow animate-fade-in shadow-[0_0_15px_rgba(249,255,0,0.3)] text-center">
              <p className="text-neon-yellow font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">MATCHED ROWS ARE LOCKED!</p>
            </div>
          )}
          {step === 3 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-pink animate-fade-in shadow-[0_0_15px_rgba(255,31,191,0.3)] text-center">
              <p className="text-neon-pink font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">FIX INTRUDER TILES!</p>
            </div>
          )}
          {step === 4 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-lime animate-fade-in shadow-[0_0_15px_rgba(57,255,20,0.3)] text-center">
              <p className="text-neon-lime font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">ALL ROWS SOLVED! GREAT JOB!</p>
            </div>
          )}
        </div>
      </div>
      {step === 5 && (
        <div className="absolute inset-0 z-[210] flex items-center justify-center bg-black/50">
          <button onClick={onComplete} className="px-10 py-4 bg-black text-white border-2 border-white font-bold font-oswald text-3xl rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-[0_0_60px_rgba(255,255,255,0.6)] animate-pop">
            DONE
          </button>
        </div>
      )}
    </div>
  );
};

const EmojiTutorial: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [tiles, setTiles] = useState<TileData[]>(() => scrambleTiles(EMOJI_TILES));
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      await new Promise(r => setTimeout(r, 800));
      if (!mounted) return;
      setStep(0);
      await new Promise(r => setTimeout(r, 3000));
      if (!mounted) return;

      // Step 1: Swap drill/green
      const idA = 'e13'; const idB = 'e10';
      setTiles(prev => prev.map(t => t.id === idA ? { ...t, status: 'selected' } : t));
      audio.playSelect();
      await new Promise(r => setTimeout(r, 400));
      if (!mounted) return;
      setTiles(prev => prev.map(t => t.id === idB ? { ...t, status: 'swap-target' } : t));
      audio.playSelect();
      await new Promise(r => setTimeout(r, 200));
      if (!mounted) return;
      await animateSwap(tileRefs.current, idA, idB);
      setTiles(prev => {
        const next = [...prev];
        const idxA = next.findIndex(t => t.id === idA);
        const idxB = next.findIndex(t => t.id === idB);
        [next[idxA], next[idxB]] = [next[idxB], next[idxA]];
        next[idxA] = { ...next[idxA], status: 'neutral' };
        next[idxB] = { ...next[idxB], status: 'neutral' };
        return next;
      });
      await new Promise(r => setTimeout(r, 300));
      if (!mounted) return;

      // Swap saw/yellow
      const idC = 'e12'; const idD = 'e11';
      setTiles(prev => prev.map(t => t.id === idC ? { ...t, status: 'selected' } : t));
      audio.playSelect();
      await new Promise(r => setTimeout(r, 400));
      if (!mounted) return;
      setTiles(prev => prev.map(t => t.id === idD ? { ...t, status: 'swap-target' } : t));
      audio.playSelect();
      await new Promise(r => setTimeout(r, 200));
      if (!mounted) return;
      await animateSwap(tileRefs.current, idC, idD);
      setTiles(prev => {
        const next = [...prev];
        const idxC = next.findIndex(t => t.id === idC);
        const idxD = next.findIndex(t => t.id === idD);
        [next[idxC], next[idxD]] = [next[idxD], next[idxC]];
        next[idxC] = { ...next[idxC], status: 'neutral' };
        next[idxD] = { ...next[idxD], status: 'neutral' };
        return next;
      });
      await new Promise(r => setTimeout(r, 400));
      if (!mounted) return;

      setStep(1);
      audio.playRowSolved();
      setTiles(prev => prev.map((t, idx) => {
        if (idx >= 8 && idx < 12) return { ...t, status: 'solved', color: 'bg-neon-green border-white' };
        if (idx >= 12) return { ...t, status: 'solved', color: 'bg-neon-yellow border-white' };
        return t;
      }));
      await new Promise(r => setTimeout(r, 800));
      if (!mounted) return;

      // Swap intruders
      audio.playSelect();
      setTiles(prev => prev.map(t => t.id === 'e3' ? { ...t, status: 'selected' } : t));
      setStep(2);
      await new Promise(r => setTimeout(r, 600));
      if (!mounted) return;
      audio.playSelect();
      setTiles(prev => prev.map(t => t.id === 'e7' ? { ...t, status: 'swap-target' } : t));
      await new Promise(r => setTimeout(r, 200));
      if (!mounted) return;
      await animateSwap(tileRefs.current, 'e3', 'e7');
      setTiles(prev => {
        const next = [...prev];
        const i1 = next.findIndex(t => t.id === 'e3');
        const i2 = next.findIndex(t => t.id === 'e7');
        [next[i1], next[i2]] = [next[i2], next[i1]];
        next[i1] = { ...next[i1], status: 'neutral' };
        next[i2] = { ...next[i2], status: 'neutral' };
        return next;
      });
      await new Promise(r => setTimeout(r, 300));
      if (!mounted) return;

      audio.playRowSolved();
      audio.playWin();
      setTiles(current => current.map((t, idx) => {
        if (idx < 4) return { ...t, status: 'solved', color: 'bg-neon-blue border-white' };
        if (idx >= 4 && idx < 8) return { ...t, status: 'solved', color: 'bg-neon-pink border-white' };
        if (idx >= 8 && idx < 12) return { ...t, status: 'solved', color: 'bg-neon-green border-white' };
        if (idx >= 12) return { ...t, status: 'solved', color: 'bg-neon-yellow border-white' };
        return t;
      }));
      setStep(3);
      await new Promise(r => setTimeout(r, 1000));
      if (!mounted) return;
      setStep(4);
    };
    run();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="flex-1 w-full relative flex flex-col pt-0 p-1 sm:p-2 min-h-0 bg-black items-center justify-center overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex-1 flex flex-col gap-0 w-full max-w-sm max-h-[55vh] overflow-visible mt-8">
          {renderGrid(tiles, tileRefs.current)}
        </div>
        <div className="h-14 flex items-center justify-center mb-3 shrink-0 w-full px-4">
          {step === 0 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-yellow animate-fade-in shadow-[0_0_15px_rgba(249,255,0,0.3)] text-center">
              <p className="text-neon-yellow font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">MATCH EMOJI TILES BY CATEGORY</p>
            </div>
          )}
          {step === 1 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-lime animate-fade-in shadow-[0_0_15px_rgba(57,255,20,0.3)] text-center">
              <p className="text-neon-lime font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">SWAP EMOJIS TO GROUP THEM</p>
            </div>
          )}
          {step === 2 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-pink animate-fade-in shadow-[0_0_15px_rgba(255,31,191,0.3)] text-center">
              <p className="text-neon-pink font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">WATCH FOR INTRUDER EMOJIS!</p>
            </div>
          )}
          {step === 3 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-cyan animate-fade-in shadow-[0_0_15px_rgba(0,255,255,0.3)] text-center">
              <p className="text-neon-cyan font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">ALL ROWS SOLVED! SAME RULES APPLY</p>
            </div>
          )}
        </div>
      </div>
      {step === 4 && (
        <div className="absolute inset-0 z-[210] flex items-center justify-center bg-black/50">
          <button onClick={onComplete} className="px-10 py-4 bg-black text-white border-2 border-white font-bold font-oswald text-3xl rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-[0_0_60px_rgba(255,255,255,0.6)] animate-pop">
            DONE
          </button>
        </div>
      )}
    </div>
  );
};

const SynonymsTutorial: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [tiles, setTiles] = useState<TileData[]>(SYNONYM_TILES);
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      await new Promise(r => setTimeout(r, 800));
      if (!mounted) return;
      setStep(0);
      await new Promise(r => setTimeout(r, 3000));
      if (!mounted) return;
      setStep(1);
      await new Promise(r => setTimeout(r, 1000));
      if (!mounted) return;

      // Solve synonym groups one by one
      // Group 1: BIG/HUGE/LARGE (idx 0-2)
      setTiles(prev => prev.map((t, idx) => idx < 3 ? { ...t, status: 'solved', color: 'bg-neon-blue border-white' } : t));
      audio.playRowSolved();
      await new Promise(r => setTimeout(r, 600));
      if (!mounted) return;

      // Group 2: GLAD/HAPPY/JOYFUL (idx 3-5)
      setTiles(prev => prev.map((t, idx) => (idx >= 3 && idx <= 5) ? { ...t, status: 'solved', color: 'bg-neon-pink border-white' } : t));
      audio.playRowSolved();
      await new Promise(r => setTimeout(r, 600));
      if (!mounted) return;

      // Group 3: SMALL/TINY/LITTLE (idx 6,7,12)
      setTiles(prev => prev.map((t, idx) => (idx === 6 || idx === 7 || idx === 12) ? { ...t, status: 'solved', color: 'bg-neon-green border-white' } : t));
      audio.playRowSolved();
      await new Promise(r => setTimeout(r, 600));
      if (!mounted) return;

      // Group 4: QUICK/FAST/RAPID/SPEEDY (idx 8-10, 14)
      setTiles(prev => prev.map((t, idx) => (idx === 8 || idx === 9 || idx === 10 || idx === 14) ? { ...t, status: 'solved', color: 'bg-neon-yellow border-white' } : t));
      audio.playRowSolved();
      await new Promise(r => setTimeout(r, 600));
      if (!mounted) return;

      // Group 5: SAD/UNHAPPY/MISERABLE (idx 11,13,15)
      audio.playWin();
      setTiles(prev => prev.map((t, idx) => (idx === 11 || idx === 13 || idx === 15) ? { ...t, status: 'solved', color: 'bg-neon-orange border-white' } : t));
      setStep(2);
      await new Promise(r => setTimeout(r, 1000));
      if (!mounted) return;
      setStep(3);
    };
    run();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="flex-1 w-full relative flex flex-col pt-0 p-1 sm:p-2 min-h-0 bg-black items-center justify-center overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex-1 flex flex-col gap-0 w-full max-w-sm max-h-[55vh] overflow-visible mt-8">
          {renderGrid(tiles, tileRefs.current)}
        </div>
        <div className="h-14 flex items-center justify-center mb-3 shrink-0 w-full px-4">
          {step === 0 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-lime animate-fade-in shadow-[0_0_15px_rgba(57,255,20,0.3)] text-center">
              <p className="text-neon-lime font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">GROUP SYNONYMS - WORDS WITH SIMILAR MEANINGS</p>
            </div>
          )}
          {step === 1 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-white/20 animate-pop text-center">
              <p className="text-white font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">MATCH WORDS THAT MEAN THE SAME THING</p>
            </div>
          )}
          {step === 2 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-lime animate-fade-in shadow-[0_0_15px_rgba(57,255,20,0.3)] text-center">
              <p className="text-neon-lime font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">ALL SYNONYMS GROUPED! COMPLETE THE SET</p>
            </div>
          )}
        </div>
      </div>
      {step === 3 && (
        <div className="absolute inset-0 z-[210] flex items-center justify-center bg-black/50">
          <button onClick={onComplete} className="px-10 py-4 bg-black text-white border-2 border-white font-bold font-oswald text-3xl rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-[0_0_60px_rgba(255,255,255,0.6)] animate-pop">
            DONE
          </button>
        </div>
      )}
    </div>
  );
};

const ThemedTutorial: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [tiles, setTiles] = useState<TileData[]>(THEMED_TILES);
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      await new Promise(r => setTimeout(r, 800));
      if (!mounted) return;
      setStep(0);
      await new Promise(r => setTimeout(r, 3000));
      if (!mounted) return;
      setStep(1);
      await new Promise(r => setTimeout(r, 800));
      if (!mounted) return;

      // Solve Planets (idx 0-3)
      setTiles(prev => prev.map((t, idx) => idx < 4 ? { ...t, status: 'solved', color: 'bg-neon-blue border-white' } : t));
      audio.playRowSolved();
      await new Promise(r => setTimeout(r, 600));
      if (!mounted) return;

      // Solve Physics (idx 4-7)
      setTiles(prev => prev.map((t, idx) => (idx >= 4 && idx <= 7) ? { ...t, status: 'solved', color: 'bg-neon-pink border-white' } : t));
      audio.playRowSolved();
      await new Promise(r => setTimeout(r, 600));
      if (!mounted) return;

      // Solve Elements (idx 8-11)
      setTiles(prev => prev.map((t, idx) => (idx >= 8 && idx <= 11) ? { ...t, status: 'solved', color: 'bg-neon-green border-white' } : t));
      audio.playRowSolved();
      await new Promise(r => setTimeout(r, 600));
      if (!mounted) return;

      // Solve Composers (idx 12-15)
      audio.playWin();
      setTiles(prev => prev.map((t, idx) => idx >= 12 ? { ...t, status: 'solved', color: 'bg-neon-yellow border-white' } : t));
      setStep(2);
      await new Promise(r => setTimeout(r, 1000));
      if (!mounted) return;
      setStep(3);
    };
    run();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="flex-1 w-full relative flex flex-col pt-0 p-1 sm:p-2 min-h-0 bg-black items-center justify-center overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex-1 flex flex-col gap-0 w-full max-w-sm max-h-[55vh] overflow-visible mt-8">
          {renderGrid(tiles, tileRefs.current)}
        </div>
        <div className="h-14 flex items-center justify-center mb-3 shrink-0 w-full px-4">
          {step === 0 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-magenta animate-fade-in shadow-[0_0_15px_rgba(255,0,255,0.3)] text-center">
              <p className="text-neon-magenta font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">THEMED MODE - TIED CATEGORIES AWAIT</p>
            </div>
          )}
          {step === 1 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-white/20 animate-pop text-center">
              <p className="text-white font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">EACH THEME HAS 4 RELATED CATEGORIES</p>
            </div>
          )}
          {step === 2 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-magenta animate-fade-in shadow-[0_0_15px_rgba(255,0,255,0.3)] text-center">
              <p className="text-neon-magenta font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">ALL CATEGORIES SOLVED! SAME SWAP RULES</p>
            </div>
          )}
        </div>
      </div>
      {step === 3 && (
        <div className="absolute inset-0 z-[210] flex items-center justify-center bg-black/50">
          <button onClick={onComplete} className="px-10 py-4 bg-black text-white border-2 border-white font-bold font-oswald text-3xl rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-[0_0_60px_rgba(255,255,255,0.6)] animate-pop">
            DONE
          </button>
        </div>
      )}
    </div>
  );
};

const MindMatchTutorial: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [tiles, setTiles] = useState<TileData[]>(MIND_MATCH_TILES);
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      await new Promise(r => setTimeout(r, 800));
      if (!mounted) return;
      // Show timer ticking down
      setStep(0);
      // Animate timer bar
      for (let i = 0; i < 15; i++) {
        await new Promise(r => setTimeout(r, 150));
        if (!mounted) return;
        setProgress(100 - (i * 7));
      }
      await new Promise(r => setTimeout(r, 500));
      if (!mounted) return;
      setStep(1);
      await new Promise(r => setTimeout(r, 1000));
      if (!mounted) return;

      // Round 1: Solve Water Bodies (idx 0-3)
      setTiles(prev => prev.map((t, idx) => idx < 4 ? { ...t, status: 'solved', color: 'bg-neon-blue border-white' } : t));
      audio.playRowSolved();
      await new Promise(r => setTimeout(r, 600));
      if (!mounted) return;

      // Round 1: Solve Landscapes (idx 4-7)
      setTiles(prev => prev.map((t, idx) => (idx >= 4 && idx <= 7) ? { ...t, status: 'solved', color: 'bg-neon-green border-white' } : t));
      audio.playRowSolved();
      setStep(2);
      await new Promise(r => setTimeout(r, 1000));
      if (!mounted) return;

      // Round 2: Show new tiles replacing old ones
      setTiles(MIND_MATCH_TILES.slice(8, 12));
      setStep(3);
      await new Promise(r => setTimeout(r, 800));
      if (!mounted) return;

      // Solve Seasons (idx 8-11)
      setTiles(prev => prev.map(t => ({ ...t, status: 'solved', color: 'bg-neon-pink border-white' })));
      audio.playWin();
      setStep(4);
      await new Promise(r => setTimeout(r, 1200));
      if (!mounted) return;
      setStep(5);
    };
    run();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="flex-1 w-full relative flex flex-col pt-0 p-1 sm:p-2 min-h-0 bg-black items-center justify-center overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center">
        {/* Timer bar */}
        {step < 2 && (
          <div className="w-full max-w-sm mb-2 mt-2">
            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700">
              <div className="h-full bg-neon-orange transition-all duration-300 ease-linear rounded-full" style={{ width: `${progress}%` }} />
            </div>
            <p className="text-neon-orange text-xs font-oswald font-bold text-center mt-1 uppercase tracking-wider">TIME</p>
          </div>
        )}
        {step === 2 && (
          <div className="w-full max-w-sm mb-2 mt-2 text-center">
            <p className="text-neon-cyan font-oswald text-sm font-bold uppercase tracking-wider animate-pop">ROUND 1 COMPLETE!</p>
          </div>
        )}
        <div className="flex-1 flex flex-col gap-0 w-full max-w-sm max-h-[45vh] overflow-visible mt-4">
          {renderGrid(tiles, tileRefs.current)}
        </div>
        <div className="h-14 flex items-center justify-center mb-3 shrink-0 w-full px-4">
          {step === 0 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-orange animate-fade-in shadow-[0_0_15px_rgba(255,95,31,0.3)] text-center">
              <p className="text-neon-orange font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">MATCH BEFORE TIME RUNS OUT!</p>
            </div>
          )}
          {step === 1 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-white/20 animate-pop text-center">
              <p className="text-white font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">TAP TILES TO GROUP THEM BY CATEGORY</p>
            </div>
          )}
          {step === 2 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-cyan animate-fade-in shadow-[0_0_15px_rgba(0,255,255,0.3)] text-center">
              <p className="text-neon-cyan font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">3 ROUNDS - NEW TILES EACH ROUND!</p>
            </div>
          )}
          {step === 3 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-white/20 animate-pop text-center">
              <p className="text-white font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">MATCH THE NEW SET OF TILES</p>
            </div>
          )}
          {step === 4 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-orange animate-fade-in shadow-[0_0_15px_rgba(255,95,31,0.3)] text-center">
              <p className="text-neon-orange font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">3 STRIKES AND IT'S GAME OVER!</p>
            </div>
          )}
        </div>
      </div>
      {step === 5 && (
        <div className="absolute inset-0 z-[210] flex items-center justify-center bg-black/50">
          <button onClick={onComplete} className="px-10 py-4 bg-black text-white border-2 border-white font-bold font-oswald text-3xl rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-[0_0_60px_rgba(255,255,255,0.6)] animate-pop">
            DONE
          </button>
        </div>
      )}
    </div>
  );
};

const ExpansionTutorial: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [tiles, setTiles] = useState<TileData[]>(EXPANSION_TILES.slice(0, 8));
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      await new Promise(r => setTimeout(r, 800));
      if (!mounted) return;
      setStep(0);
      await new Promise(r => setTimeout(r, 2500));
      if (!mounted) return;
      // Show first 2 rows
      setStep(1);
      await new Promise(r => setTimeout(r, 1000));
      if (!mounted) return;

      // Solve Strings (2nd row in initial view)
      setTiles(prev => prev.map((t, idx) => (idx >= 4 && idx <= 7) ? { ...t, status: 'solved', color: 'bg-neon-blue border-white' } : t));
      audio.playRowSolved();
      await new Promise(r => setTimeout(r, 600));
      if (!mounted) return;

      // EXPAND: Show remaining tiles
      setExpanded(true);
      setTiles(prev => {
        const remaining = EXPANSION_TILES.slice(8);
        return [...prev, ...remaining.map(t => ({ ...t, status: 'neutral' as const }))];
      });
      setStep(3);
      await new Promise(r => setTimeout(r, 800));
      if (!mounted) return;

      // Solve new rows
      setTiles(prev => prev.map((t, idx) => {
        if (idx === 0 || idx === 1 || idx === 2 || idx === 3) return { ...t, status: 'solved', color: 'bg-neon-green border-white' };
        if (idx === 4 || idx === 5 || idx === 6 || idx === 7) return { ...t, status: 'solved', color: 'bg-neon-blue border-white' };
        if (idx === 8 || idx === 9) return { ...t, status: 'solved', color: 'bg-neon-yellow border-white' };
        if (idx === 10 || idx === 11) return { ...t, status: 'solved', color: 'bg-neon-pink border-white' };
        return t;
      }));
      audio.playWin();
      setStep(4);
      await new Promise(r => setTimeout(r, 1000));
      if (!mounted) return;
      setStep(5);
    };
    run();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="flex-1 w-full relative flex flex-col pt-0 p-1 sm:p-2 min-h-0 bg-black items-center justify-center overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className={`flex-1 flex flex-col gap-0 w-full max-w-sm overflow-visible mt-8 transition-all duration-500 ${expanded ? 'max-h-[70vh]' : 'max-h-[40vh]'}`}>
          {renderGrid(tiles, tileRefs.current)}
        </div>
        <div className="h-14 flex items-center justify-center mb-3 shrink-0 w-full px-4">
          {step === 0 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-red animate-fade-in shadow-[0_0_15px_rgba(255,7,58,0.3)] text-center">
              <p className="text-neon-red font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">EXPANSION MODE - START WITH FEWER ROWS</p>
            </div>
          )}
          {step === 1 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-white/20 animate-pop text-center">
              <p className="text-white font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">SOLVE A ROW TO UNLOCK NEW TILES!</p>
            </div>
          )}
          {step === 3 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-red animate-fade-in shadow-[0_0_15px_rgba(255,7,58,0.3)] text-center">
              <p className="text-neon-red font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">GRID GROWS AS YOU PROGRESS!</p>
            </div>
          )}
          {step === 4 && (
            <div className="bg-zinc-800 px-6 py-3 rounded-full border border-neon-lime animate-fade-in shadow-[0_0_15px_rgba(57,255,20,0.3)] text-center">
              <p className="text-neon-lime font-oswald text-lg md:text-xl font-bold tracking-wide uppercase">MORE ROWS, MORE CHALLENGES!</p>
            </div>
          )}
        </div>
      </div>
      {step === 5 && (
        <div className="absolute inset-0 z-[210] flex items-center justify-center bg-black/50">
          <button onClick={onComplete} className="px-10 py-4 bg-black text-white border-2 border-white font-bold font-oswald text-3xl rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-[0_0_60px_rgba(255,255,255,0.6)] animate-pop">
            DONE
          </button>
        </div>
      )}
    </div>
  );
};

// ============================================================
// Main TutorialOverlay Component - Routes to mode-specific tutorial
// ============================================================

const TutorialOverlay: React.FC<TutorialProps> = ({ mode, onComplete }) => {
  const [showSkip, setShowSkip] = useState(true);

  // Show skip button for a brief moment, then hide
  useEffect(() => {
    const t = setTimeout(() => setShowSkip(false), 3000);
    return () => clearTimeout(t);
  }, []);

  const renderTutorialContent = () => {
    switch (mode) {
      case GameMode.LEVEL_EMOJI:
        return <EmojiTutorial onComplete={onComplete} />;
      case GameMode.LEVEL_SYNONYMS:
        return <SynonymsTutorial onComplete={onComplete} />;
      case GameMode.LEVEL_THEMED:
        return <ThemedTutorial onComplete={onComplete} />;
      case GameMode.LEVEL_MIND_MATCH:
        return <MindMatchTutorial onComplete={onComplete} />;
      case GameMode.LEVEL_EXPANSION:
        return <ExpansionTutorial onComplete={onComplete} />;
      case GameMode.CLASSIC:
      default:
        return <BasicsTutorial onComplete={onComplete} />;
    }
  };

  return (
    <div className="absolute inset-0 z-[200] bg-black flex flex-col font-oswald animate-fade-in">
      <Header
        modeName={getModeName(mode)}
        levelIndex={1}
        onOpenSettings={() => {}}
        isReviewing={false}
        hintsEnabled={true}
        onManualHint={() => {}}
        onToggleHints={() => {}}
      />

      <div className="flex-1 w-full relative flex flex-col min-h-0 bg-black overflow-hidden">
        {renderTutorialContent()}
      </div>

      {/* Skip button (shows briefly, then disappears) */}
      {showSkip && (
        <button
          onClick={onComplete}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-zinc-500 font-oswald text-sm uppercase tracking-widest hover:text-white transition-colors z-[220]"
        >
          SKIP TUTORIAL
        </button>
      )}
    </div>
  );
};

export default TutorialOverlay;
