import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GameMode, TileData, THEMES, NEON_PALETTE } from '../types';
import Tile from './Tile';
import { audio } from '../services/audioService';
import LevelLayout from './LevelLayout';
import SolvedRowBackground from './SolvedRowBackground';
import { ARCADE_OUTLINE } from '../services/tileStyles';

const m = motion as any;

interface TutorialProps {
  mode: GameMode;
  onComplete: () => void;
}

const TUTORIAL_TILES: TileData[] = [
  { id: 't0', word: 'APPLE', categoryId: 'fruit', categoryName: 'FRUIT', status: 'neutral' },
  { id: 't1', word: 'BANANA', categoryId: 'fruit', categoryName: 'FRUIT', status: 'neutral' },
  { id: 't2', word: 'GRAPE', categoryId: 'fruit', categoryName: 'FRUIT', status: 'neutral' },
  { id: 't3', word: 'DOG', categoryId: 'animal', categoryName: 'ANIMAL', status: 'neutral' },
  { id: 't4', word: 'CAT', categoryId: 'animal', categoryName: 'ANIMAL', status: 'neutral' },
  { id: 't5', word: 'LION', categoryId: 'animal', categoryName: 'ANIMAL', status: 'neutral' },
  { id: 't6', word: 'TIGER', categoryId: 'animal', categoryName: 'ANIMAL', status: 'neutral' },
  { id: 't7', word: 'PEAR', categoryId: 'fruit', categoryName: 'FRUIT', status: 'neutral' },
  { id: 't8', word: 'RED', categoryId: 'color', categoryName: 'COLOR', status: 'neutral' },
  { id: 't9', word: 'BLUE', categoryId: 'color', categoryName: 'COLOR', status: 'neutral' },
  { id: 't10', word: 'GREEN', categoryId: 'color', categoryName: 'COLOR', status: 'neutral' },
  { id: 't11', word: 'YELLOW', categoryId: 'color', categoryName: 'COLOR', status: 'neutral' },
  { id: 't12', word: 'HAMMER', categoryId: 'tool', categoryName: 'TOOL', status: 'neutral' },
  { id: 't13', word: 'DRILL', categoryId: 'tool', categoryName: 'TOOL', status: 'neutral' },
  { id: 't14', word: 'SAW', categoryId: 'tool', categoryName: 'TOOL', status: 'neutral' },
  { id: 't15', word: 'WRENCH', categoryId: 'tool', categoryName: 'TOOL', status: 'neutral' },
];

const TUTORIAL_DEFINITIONS: Record<string, string> = {
  APPLE: 'A ROUND FRUIT WITH RED, GREEN, OR YELLOW SKIN.',
  BANANA: 'A LONG CURVED FRUIT WITH A SOFT SWEET INTERIOR.',
  GRAPE: 'A SMALL JUICY FRUIT THAT GROWS IN CLUSTERS.',
  DOG: 'A DOMESTIC ANIMAL KNOWN FOR LOYALTY AND COMPANIONSHIP.',
  CAT: 'A SMALL DOMESTIC ANIMAL WITH AGILITY AND SHARP SENSES.',
  LION: 'A LARGE WILD CAT OFTEN CALLED THE KING OF BEASTS.',
  TIGER: 'A LARGE STRIPED WILD CAT KNOWN FOR STRENGTH.',
  PEAR: 'A SWEET JUICY FRUIT WITH A NARROW TOP AND ROUND BASE.',
  RED: 'A PRIMARY COLOR AT THE LONG-WAVELENGTH END OF THE SPECTRUM.',
  BLUE: 'A PRIMARY COLOR BETWEEN GREEN AND VIOLET IN THE SPECTRUM.',
  GREEN: 'A COLOR BETWEEN BLUE AND YELLOW IN THE SPECTRUM; THE COLOR OF GRASS.',
  YELLOW: 'A BRIGHT PRIMARY COLOR BETWEEN GREEN AND ORANGE.',
  HAMMER: 'A TOOL USED TO DRIVE NAILS OR BREAK OBJECTS.',
  DRILL: 'A TOOL USED FOR MAKING HOLES OR FASTENING SCREWS.',
  SAW: 'A TOOL WITH A TOOTHED EDGE USED FOR CUTTING.',
  WRENCH: 'A TOOL USED TO GRIP AND TURN NUTS OR BOLTS.'
};

const TutorialOverlay: React.FC<TutorialProps> = ({ mode, onComplete }) => {
  const [step, setStep] = useState(0);
  const [tiles, setTiles] = useState<TileData[]>(JSON.parse(JSON.stringify(TUTORIAL_TILES)));
  const [activeDef, setActiveDef] = useState<{ word: string, text: string } | null>(null);
  const [instruction, setInstruction] = useState("FIND 4 TILES THAT BELONG TOGETHER");
  const [showInstructionOverlay, setShowInstructionOverlay] = useState(true);
  const [modalColor, setModalColor] = useState("bg-neon-green");
  const [awaitingSwapSequence, setAwaitingSwapSequence] = useState(false);
  const [expectedSwapClickId, setExpectedSwapClickId] = useState<string | null>(null);
  const [awaitingLongPress, setAwaitingLongPress] = useState(false);
  const [highlightCategoryTabs, setHighlightCategoryTabs] = useState(false);

  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const continueInstructionRef = useRef<(() => void) | null>(null);
  const swapResolverRef = useRef<(() => void) | null>(null);
  const longPressResolverRef = useRef<(() => void) | null>(null);
  const currentSwapFirstIdRef = useRef<string>('t7');
  const currentSwapSecondIdRef = useRef<string>('t3');

  useEffect(() => {
    let mounted = true;

    const showInstructionStep = async (text: string) => {
      if (!mounted) return;
      setInstruction(text);
      setShowInstructionOverlay(true);
      await new Promise<void>((resolve) => {
        continueInstructionRef.current = resolve;
      });
      if (!mounted) return;
      continueInstructionRef.current = null;
      setShowInstructionOverlay(false);
      await new Promise(r => setTimeout(r, 150));
    };

    const waitForDefinitionLongPress = async () => {
      if (!mounted) return;
      setAwaitingLongPress(true);
      await new Promise<void>((resolve) => {
        longPressResolverRef.current = resolve;
      });
      if (!mounted) return;
      longPressResolverRef.current = null;
      setAwaitingLongPress(false);
    };

    const waitForSwapSequence = async (firstId: string, secondId: string, firstWord: string, secondWord: string) => {
      if (!mounted) return;
      currentSwapFirstIdRef.current = firstId;
      currentSwapSecondIdRef.current = secondId;
      setAwaitingSwapSequence(true);
      setTiles(prev => prev.map(t => {
        if (t.status === 'solved') return t;
        return { ...t, status: 'neutral' as const };
      }));

      setExpectedSwapClickId(firstId);
      setTiles(prev => prev.map(t => {
        if (t.status === 'solved') return t;
        if (t.id === firstId) return { ...t, status: 'hint' as const };
        return { ...t, status: 'neutral' as const };
      }));
      await new Promise<void>((resolve) => {
        swapResolverRef.current = resolve;
      });
      if (!mounted) return;

      setExpectedSwapClickId(secondId);
      setTiles(prev => prev.map(t => {
        if (t.status === 'solved') return t;
        if (t.id === firstId) return { ...t, status: 'selected' as const };
        if (t.id === secondId) return { ...t, status: 'hint' as const };
        return { ...t, status: 'neutral' as const };
      }));
      await new Promise<void>((resolve) => {
        swapResolverRef.current = resolve;
      });
      if (!mounted) return;

      swapResolverRef.current = null;
      setAwaitingSwapSequence(false);
      setExpectedSwapClickId(null);
      setShowInstructionOverlay(false);
    };

    const performSwap = (firstId: string, secondId: string) => {
      setTiles(prev => {
        const next = [...prev];
        const idxA = next.findIndex(t => t.id === firstId);
        const idxB = next.findIndex(t => t.id === secondId);
        if (idxA !== -1 && idxB !== -1) {
          [next[idxA], next[idxB]] = [next[idxB], next[idxA]];
        }
        return next.map(t => {
          if (t.status === 'solved') return t;
          return { ...t, status: 'neutral' as const };
        });
      });
    };

    const run = async () => {
      // Step 0: Welcome
      await showInstructionStep("SWAP TILES TO COMPLETE A ROW");

      await waitForSwapSequence('t7', 't3', 'PEAR', 'DOG');
      await new Promise(r => setTimeout(r, 150));
      audio.playSwap();
      performSwap('t3', 't7');
      await showInstructionStep("DOG AND PEAR SWAPPED");

      // Step 4: Solved Row
      await new Promise(r => setTimeout(r, 1000));
      await showInstructionStep("WHEN A ROW IS MATCHED THE CATEGORY WILL BE REVEALED");
      setHighlightCategoryTabs(true);
      audio.playRowSolved();

      setTiles(prev => prev.map(t => {
        // Use different neon colors for the two solved categories in the tutorial
        if (t.categoryId === 'fruit') {
          return { ...t, status: 'solved', color: THEMES[0].solvedColors[0] };
        }
        if (t.categoryId === 'animal') {
          return { ...t, status: 'solved', color: THEMES[0].solvedColors[1] };
        }
        return t;
      }));

      // Step 5: Mix up row 3/4 and repeat guided swap
      await new Promise(r => setTimeout(r, 1800));
      setHighlightCategoryTabs(false);
      await showInstructionStep("CLEAR THE FINAL TWO ROWS");

      performSwap('t10', 't12');
      await waitForSwapSequence('t10', 't12', 'GREEN', 'HAMMER');
      await new Promise(r => setTimeout(r, 150));
      audio.playSwap();
      performSwap('t10', 't12');

      // Step 6: Solve Bottom Two Rows
      await new Promise(r => setTimeout(r, 700));
      audio.playRowSolved();
      setTiles(prev => prev.map(t => {
        if (t.categoryId === 'fruit') {
          return { ...t, status: 'solved', color: THEMES[0].solvedColors[0] };
        }
        if (t.categoryId === 'animal') {
          return { ...t, status: 'solved', color: THEMES[0].solvedColors[1] };
        }
        if (t.categoryId === 'color') {
          return { ...t, status: 'solved', color: THEMES[0].solvedColors[2] };
        }
        if (t.categoryId === 'tool') {
          return { ...t, status: 'solved', color: THEMES[0].solvedColors[3] };
        }
        return t;
      }));

      // Step 7: Long Press Demonstration
      await new Promise(r => setTimeout(r, 900));
      setInstruction("LONG PRESS ANY TILE FOR A DEFINITION");
      setShowInstructionOverlay(true);

      await waitForDefinitionLongPress();
      setShowInstructionOverlay(false);

      await new Promise(r => setTimeout(r, 3500));
      setActiveDef(null);

      // Final Step: Finish
      await new Promise(r => setTimeout(r, 800));
      setStep(8);
    };

    run();
    return () => {
      mounted = false;
      if (continueInstructionRef.current) {
        continueInstructionRef.current();
      }
      if (swapResolverRef.current) {
        swapResolverRef.current();
      }
      setExpectedSwapClickId(null);
      if (longPressResolverRef.current) {
        longPressResolverRef.current();
      }
    };
  }, []);

  const handleInstructionContinue = () => {
    if (continueInstructionRef.current) {
      continueInstructionRef.current();
    }
  };

  const handleTutorialTileClick = (id: string) => {
    if (!awaitingSwapSequence) return;

    if (!expectedSwapClickId || id !== expectedSwapClickId) return;

    audio.playSelect();
    if (id === currentSwapFirstIdRef.current) {
      setTiles(prev => prev.map(t => {
        if (t.status === 'solved') return t;
        if (t.id === currentSwapFirstIdRef.current) return { ...t, status: 'selected' as const };
        return { ...t, status: 'neutral' as const };
      }));
    } else if (id === currentSwapSecondIdRef.current) {
      setTiles(prev => prev.map(t => {
        if (t.status === 'solved') return t;
        if (t.id === currentSwapFirstIdRef.current) return { ...t, status: 'selected' as const };
        if (t.id === currentSwapSecondIdRef.current) return { ...t, status: 'swap-target' as const };
        return { ...t, status: 'neutral' as const };
      }));
    }

    if (swapResolverRef.current) {
      const resolve = swapResolverRef.current;
      swapResolverRef.current = null;
      resolve();
    }
  };

  const handleTutorialLongPress = (word: string) => {
    if (!awaitingLongPress) return;
    audio.playSelect();
    const normalizedWord = (word || '').toUpperCase();
    const neonColors = ['bg-neon-green', 'bg-neon-blue', 'bg-neon-magenta', 'bg-neon-cyan'];
    setModalColor(neonColors[Math.floor(Math.random() * neonColors.length)]);
    setActiveDef({
      word: normalizedWord,
      text: TUTORIAL_DEFINITIONS[normalizedWord] || 'A WORD USED IN THIS TUTORIAL CATEGORY SET.'
    });
    if (longPressResolverRef.current) {
      longPressResolverRef.current();
    }
  };

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < 4; i++) {
      const rowTiles = tiles.slice(i * 4, i * 4 + 4);
      const rowColor = THEMES[0].solvedColors[i % THEMES[0].solvedColors.length];
      const solved = rowTiles.every(t => t.status === 'solved');
      const firstTile = rowTiles[0];
      rows.push(
        <div key={i} className="flex-1 relative min-h-0 overflow-visible">
          {solved && <SolvedRowBackground seed={firstTile.categoryId} colorClass={rowColor} animationKey="tutorial" />}
          {solved && (
            <m.div
              layout
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute top-0 left-1 z-[9000] transform -translate-y-full"
            >
              <div
                className={`px-2 py-0.5 text-[9px] font-black uppercase bg-black border-2 border-white text-black rounded-t-lg whitespace-nowrap ${highlightCategoryTabs ? 'animate-pulse' : ''}`}
                style={highlightCategoryTabs ? {
                  boxShadow: '0 0 0 2px #000000, 0 0 12px rgba(255,255,255,0.95), 0 0 24px rgba(255,255,255,0.65)'
                } : undefined}
              >
                {firstTile.categoryName}
              </div>
            </m.div>
          )}
          <div className={`grid grid-cols-4 gap-0.5 w-full h-full relative z-10 transition-all duration-300 ${solved ? 'p-[10px]' : 'p-0.5'}`}>
            {rowTiles.map(tile => (
              <Tile
                key={tile.id}
                data={tile}
                targetColor={rowColor}
                onClick={handleTutorialTileClick}
                onLongPress={handleTutorialLongPress}
                disabled={!(awaitingLongPress || awaitingSwapSequence)}
                ref={(el) => { if (el) tileRefs.current.set(tile.id, el); }}
              />
            ))}
          </div>
        </div>
      );
    }
    return rows;
  };

  const neonHex = NEON_PALETTE[modalColor] || '#FFFFFF';

  return (
    <div className="fixed inset-0 z-[20000] bg-black flex flex-col font-oswald animate-fade-in overflow-hidden">
      <LevelLayout
        modeName="TUTORIAL"
        levelIndex={1}
        onOpenSettings={() => { }}
        isReviewing={false}
        stars={0}
      >
        <div className="flex-1 flex flex-col items-center justify-center p-1 w-full relative h-full">
          {/* Game Grid Replica */}
          <div className="flex-1 w-full max-w-xl flex flex-col gap-0.5 p-1 overflow-visible relative">
            {renderRows()}
            <AnimatePresence>
              {showInstructionOverlay && (
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`absolute inset-0 z-[12000] bg-black/0 flex items-center justify-center p-4 ${(awaitingSwapSequence || awaitingLongPress) ? 'pointer-events-none' : ''}`}
                  onClick={handleInstructionContinue}
                >
                  <div className="bg-black/75 border-4 border-white px-8 py-4 rounded-full">
                    <span className="text-white text-2xl md:text-4xl font-black uppercase tracking-tight italic text-center block whitespace-pre-line">
                      {instruction}
                    </span>
                    <span
                      className="mt-2 text-zinc-300 text-[11px] md:text-xs uppercase tracking-[0.18em] text-center block"
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                      Click to continue
                    </span>
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </div>

          {/* Skip Option */}
          <div className="py-6 shrink-0">
            <button
              onClick={onComplete}
              className="text-zinc-700 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.3em]"
            >
              Skip Tutorial Phase
            </button>
          </div>
        </div>
      </LevelLayout>

      {/* Definition Modal Replica */}
      <AnimatePresence>
        {activeDef && (
          <m.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[21000] bg-black/95 flex items-center justify-center p-8 backdrop-blur-sm"
          >
            <m.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black p-10 rounded-medium max-w-sm w-full text-center relative"
              style={{
                boxShadow: `
                  0 0 0 2px #FFFFFF,
                  0 0 0 6px #000000,
                  0 0 0 14px #FFFFFF,
                  0 0 80px 20px ${neonHex}
                `
              }}
            >
              <h2
                className="text-4xl font-black uppercase mb-6 italic tracking-tighter border-b-4 border-white pb-2 inline-block text-white"
                style={{ textShadow: '4px 4px 0px rgba(0,0,0,1)' }}
              >
                {activeDef.word}
              </h2>
              <p
                className="text-xl md:text-2xl leading-snug font-bold uppercase font-oswald mt-4 text-white"
                style={{ textShadow: '2px 2px 0px rgba(0,0,0,1)' }}
              >
                {activeDef.text}
              </p>
              <div
                className="mt-10 bg-black text-white font-black py-3 px-8 inline-block uppercase italic text-sm rounded-small"
                style={{
                  boxShadow: `
                    0 0 0 2px #FFFFFF,
                    0 0 0 6px #000000
                  `
                }}
              >
                HELD TILE REVEALED
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>

      {/* Final CTA Button */}
      {step === 8 && (
        <m.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="fixed inset-0 z-[22000] flex flex-col items-center justify-center bg-black/80"
        >
          <m.button
            initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onComplete}
            className="px-20 py-8 bg-black text-white border-4 border-white font-black font-oswald text-5xl rounded-large transition-all uppercase tracking-widest shadow-none"
            style={ARCADE_OUTLINE}
          >
            START
          </m.button>
        </m.div>
      )}
    </div>
  );
};

export default TutorialOverlay;
