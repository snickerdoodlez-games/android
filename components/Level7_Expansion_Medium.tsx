import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CSVRow, TileData, THEMES, LevelProps, NEON_PALETTE } from '../types';
import Tile from './Tile';
import SolvedRowBackground from './SolvedRowBackground';
import LevelLayout from './LevelLayout';
import { audio } from '../services/audioService';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import { shuffleArray } from '../services/csvUtils';

const m = motion as any;

const MAX_ROWS = 6;
const MAX_COLS = 4;

const ROUND_TARGETS = [
    { rows: 2, cols: 2 },
    { rows: 4, cols: 3 },
    { rows: 6, cols: 4 },
];

const EXPANSION_TEMP_DATA = [
    {
        id: 'temp_1',
        name: 'THE CARNIVAL',
        words: ['ROLLERCOASTER', 'POPCORN', 'FERRIS WHEEL', 'TICKET', 'CLOWN']
    },
    {
        id: 'temp_2',
        name: 'THE DELI',
        words: ['SANDWICH', 'PASTRAMI', 'MUSTARD', 'PICKLES', 'SALAMI']
    },
    {
        id: 'temp_3',
        name: 'FORD',
        words: ['PINTO', 'MUSTANG', 'FALCON', 'BRONCO', 'EDGE']
    },
    {
        id: 'temp_4',
        name: 'PANAMA CANAL',
        words: ['LOCKS', 'CANAL', 'SHIP', 'WATERWAY', 'ISTHMUS']
    },
    {
        id: 'temp_5',
        name: 'CUBA',
        words: ['HAVANA', 'CIGAR', 'SUGAR', 'REVOLUTION', 'ISLAND']
    },
    {
        id: 'temp_6',
        name: 'OCEANS',
        words: ['ATLANTIC', 'PACIFIC', 'INDIAN', 'ARCTIC', 'ANTARCTIC']
    }
];

// Validation function to check for duplicate words and categories
const validateCategories = (categories: any[]): boolean => {
    const allWords = new Set<string>();
    const categoryIds = new Set<string>();

    for (const cat of categories) {
        // Check for duplicate category IDs
        if (categoryIds.has(cat.id)) {
            console.error(`Duplicate category ID detected: ${cat.id}`);
            return false;
        }
        categoryIds.add(cat.id);

        // Check for duplicate words
        for (const word of cat.words) {
            const normalized = word.toUpperCase();
            if (allWords.has(normalized)) {
                console.error(`Duplicate word detected: ${word} in category ${cat.name}`);
                return false;
            }
            allWords.add(normalized);
        }
    }
    return true;
};
const Level7_Expansion_Medium: React.FC<LevelProps> = ({
    csvData, onComplete, levelIndex, hintsEnabled, onOpenSettings, setHintsEnabled, isReviewing, onNext, isAutoPlaying, stars, definitions
}) => {
    const [round, setRound] = useState(1);
    const [isInitializing, setIsInitializing] = useState(true);
    const [isExpanding, setIsExpanding] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [isSwapping, setIsSwapping] = useState(false);
    const [gridData, setGridData] = useState<(TileData | null)[][]>(Array.from({ length: MAX_ROWS }, () => Array(MAX_COLS).fill(null)));
    const [activeRowIndices, setActiveRowIndices] = useState<number[]>([]);
    const [activeColIndices, setActiveColIndices] = useState<number[]>([]);
    const [selectedPos, setSelectedPos] = useState<{ r: number, c: number } | null>(null);
    const [moves, setMoves] = useState(0);
    const [mistakes, setMistakes] = useState(0);
    const [activeDefinition, setActiveDefinition] = useState<{ word: string, text: string } | null>(null);
    const [modalColor, setModalColor] = useState("");

    const startTimeRef = useRef(Date.now());
    const particleRef = useRef<ParticleHandle>(null);
    const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());

    useEffect(() => {
        if (!csvData || csvData.length === 0) return;

        // Validate data before initialization
        if (!validateCategories(EXPANSION_TEMP_DATA)) {
            console.error('Level7_Expansion_Medium: Invalid category data detected. Level will not initialize.');
            return;
        }

        const target = ROUND_TARGETS[0];
        const fullMatrix = Array.from({ length: MAX_ROWS }, () => Array(MAX_COLS).fill(null));

        // Use temp data for expansion levels
        const allData = EXPANSION_TEMP_DATA;

        allData.forEach((cat: any, rIdx: number) => {
            if (rIdx < MAX_ROWS) {
                cat.words.forEach((word: string, cIdx: number) => {
                    if (cIdx < MAX_COLS) {
                        const cleanWord = word.toUpperCase();
                        fullMatrix[rIdx][cIdx] = {
                            id: Math.random().toString(36).substr(2, 9),
                            word: word,
                            categoryId: cat.id,
                            categoryName: cat.name.includes(':') ? cat.name.split(':')[1].trim() : cat.name,
                            status: 'neutral',
                            isSolved: false,
                            definition: cat.wordDefinitions?.[cleanWord] || definitions[cleanWord]
                        };
                    }
                });
            }
        });
        const visibleIndices: [number, number][] = [];
        for (let r = 0; r < target.rows; r++) for (let c = 0; c < target.cols; c++) visibleIndices.push([r, c]);
        const visibleTilesSource = visibleIndices.map(([r, c]) => fullMatrix[r][c]).filter((t): t is TileData => t !== null);
        if (visibleTilesSource.length === 0) return;
        const scrambled = shuffleArray(visibleTilesSource);
        visibleIndices.forEach(([r, c], i) => {
            if (i < scrambled.length) fullMatrix[r][c] = scrambled[i];
            else fullMatrix[r][c] = null;
        });
        setGridData(fullMatrix);
        setActiveRowIndices(Array.from({ length: target.rows }, (_, i) => i));
        setActiveColIndices(Array.from({ length: target.cols }, (_, i) => i));
        setIsInitializing(false);
        startTimeRef.current = Date.now();
    }, [csvData, definitions]);

    const checkMatches = useCallback((currentGrid: (TileData | null)[][], wasSwap: boolean = false) => {
        if (activeRowIndices.length === 0 || activeColIndices.length === 0) return;
        let changedInRound = false;
        let newlySolvedCount = 0;
        const updatedGrid = currentGrid.map(row => [...row]);
        activeRowIndices.forEach(rIdx => {
            const rowTiles = activeColIndices.map(cIdx => updatedGrid[rIdx][cIdx]);
            if (rowTiles.some(t => !t)) return;
            const solved = rowTiles.every(t => t?.status === 'solved');
            if (solved) { newlySolvedCount++; return; }
            const firstTile = rowTiles[0];
            if (firstTile && rowTiles.every(t => t?.categoryId === firstTile.categoryId)) {
                changedInRound = true; newlySolvedCount++; audio.playRowSolved();
                const color = THEMES[0].solvedColors[rIdx % THEMES[0].solvedColors.length];
                activeColIndices.forEach(cIdx => {
                    const tile = updatedGrid[rIdx][cIdx];
                    if (tile) {
                        const rect = tileRefs.current.get(tile.id)?.getBoundingClientRect();
                        if (rect && particleRef.current) particleRef.current.explode(rect.left + rect.width / 2, rect.top + rect.height / 2, "#FFFFFF");
                        updatedGrid[rIdx][cIdx] = { ...tile, status: 'solved', isSolved: true, color };
                    }
                });
            }
        });
        if (changedInRound) setGridData(updatedGrid);
        else if (wasSwap) setMistakes(m => m + 1);
        if (newlySolvedCount === activeRowIndices.length && newlySolvedCount > 0) {
            if (round < ROUND_TARGETS.length) setTimeout(() => expandGrid(), 1000);
            else if (!isComplete) {
                audio.playWin(); setIsComplete(true);
                const finalTime = Date.now() - startTimeRef.current;
                setTimeout(() => onComplete({
                    timeMs: finalTime,
                    moves, mistakes,
                    solvedCategoryIds: csvData.slice(0, MAX_ROWS).map((c: any) => c.id),
                    solvedWords: updatedGrid.flat().filter(t => t?.status === 'solved').map(t => t!.word)
                }), 1000);
            }
        }
    }, [activeRowIndices, activeColIndices, round, isComplete, moves, mistakes, onComplete, csvData]);

    const expandGrid = useCallback(() => {
        const nextRound = round + 1;
        if (nextRound > ROUND_TARGETS.length) return;
        setIsExpanding(true); audio.playLevelStart();
        const target = ROUND_TARGETS[nextRound - 1];
        setGridData(prev => {
            const next = prev.map(row => [...row]);
            const nonSolvedIndices: [number, number][] = [];
            const nonSolvedTiles: TileData[] = [];
            for (let r = 0; r < target.rows; r++) {
                for (let c = 0; c < target.cols; c++) {
                    const t = next[r] ? next[r][c] : null;
                    if (!t || t.status !== 'solved') {
                        nonSolvedIndices.push([r, c]);
                        if (t) nonSolvedTiles.push(t);
                    }
                }
            }
            const scrambled = shuffleArray(nonSolvedTiles);
            nonSolvedIndices.forEach(([r, c], i) => {
                if (i < scrambled.length) {
                    if (!next[r]) next[r] = Array(target.cols).fill(null);
                    next[r][c] = scrambled[i];
                }
            });
            return next;
        });
        setActiveRowIndices(Array.from({ length: target.rows }, (_, i) => i));
        setActiveColIndices(Array.from({ length: target.cols }, (_, i) => i));
        setRound(nextRound); setIsExpanding(false);
    }, [round]);

    const handleTileClick = useCallback((r: number, c: number) => {
        if (isComplete || isSwapping || isExpanding || isReviewing) return;
        const tile = gridData[r][c];
        if (!tile || tile.status === 'solved') return;
        if (selectedPos === null) {
            audio.playSelect(); setSelectedPos({ r, c });
            setGridData(prev => {
                const next = prev.map(row => [...row]);
                if (next[r][c]) next[r][c] = { ...next[r][c]!, status: 'selected' };
                return next;
            });
        } else if (selectedPos.r === r && selectedPos.c === c) {
            setSelectedPos(null);
            setGridData(prev => {
                const next = prev.map(row => [...row]);
                if (next[r][c]) next[r][c] = { ...next[r][c]!, status: 'neutral' };
                return next;
            });
        } else {
            const { r: r1, c: c1 } = selectedPos;
            setIsSwapping(true); setMoves(m => m + 1); audio.playSwap();
            setGridData(prev => {
                const next = prev.map(row => [...row]);
                if (next[r1][c1]) next[r1][c1] = { ...next[r1][c1]!, status: 'swapping' };
                if (next[r][c]) next[r][c] = { ...next[r][c]!, status: 'swap-target' };
                return next;
            });
            setTimeout(() => {
                setGridData(prev => {
                    const next = prev.map(row => [...row]);
                    const t1 = next[r1][c1]; const t2 = next[r][c];
                    if (t1 && t2) {
                        next[r1][c1] = { ...t1, word: t2.word, categoryId: t2.categoryId, categoryName: t2.categoryName, definition: t2.definition };
                        next[r][c] = { ...t2, word: t1.word, categoryId: t1.categoryId, categoryName: t1.categoryName, definition: t1.definition };
                    }
                    return next;
                });
                setTimeout(() => {
                    setGridData(prev => {
                        const final = prev.map(row => row.map(t => (t?.status === 'swapping' || t?.status === 'swap-target') ? { ...t, status: 'neutral' as const } : t));
                        setTimeout(() => checkMatches(final, true), 50); return final;
                    });
                    setSelectedPos(null); setIsSwapping(false);
                }, 260);
            }, 40);
        }
    }, [isComplete, isSwapping, isExpanding, isReviewing, gridData, selectedPos, checkMatches]);

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
        if (!isAutoPlaying || isComplete || isSwapping || isExpanding || isReviewing || activeRowIndices.length === 0) return;
        const timer = setTimeout(() => {
            for (let rIdx of activeRowIndices) {
                const row = activeColIndices.map(cIdx => gridData[rIdx][cIdx]);
                if (row.some(t => !t) || row.every(t => t?.status === 'solved')) continue;

                const categoryCount = new Map<string, number>();
                row.forEach(t => {
                    if (t) {
                        categoryCount.set(t.categoryId, (categoryCount.get(t.categoryId) || 0) + 1);
                    }
                });
                const candidateCatIds = Array.from(categoryCount.entries())
                    .sort((a, b) => b[1] - a[1])
                    .map(([catId]) => catId);

                let targetCatId: string | undefined;
                for (const candidateCatId of candidateCatIds) {
                    const rowAlreadyAligned = row.every(t => t?.categoryId === candidateCatId);
                    const hasExternalMatch = activeRowIndices.some(rr =>
                        rr !== rIdx && activeColIndices.some(cc => {
                            const t = gridData[rr][cc];
                            return t && t.status !== 'solved' && t.categoryId === candidateCatId;
                        })
                    );
                    if (rowAlreadyAligned || hasExternalMatch) {
                        targetCatId = candidateCatId;
                        break;
                    }
                }

                if (!targetCatId) continue;

                if (row.every(t => t?.categoryId === targetCatId)) {
                    checkMatches(gridData);
                    return;
                }
                const wrongIdxInRow = row.findIndex(t => t && t.categoryId !== targetCatId && t.status !== 'solved');
                if (wrongIdxInRow !== -1) {
                    const wrongPos = { r: rIdx, c: activeColIndices[wrongIdxInRow] };
                    let correctPos: { r: number, c: number } | null = null;
                    for (let rr of activeRowIndices) {
                        if (rr === rIdx) continue;
                        for (let cc of activeColIndices) {
                            const t = gridData[rr][cc];
                            if (t && t.status !== 'solved' && t.categoryId === targetCatId) {
                                correctPos = { r: rr, c: cc }; break;
                            }
                        }
                        if (correctPos) break;
                    }
                    if (correctPos) {
                        if (!selectedPos) {
                            handleTileClick(wrongPos.r, wrongPos.c);
                        } else {
                            const selectedIsWrong = selectedPos.r === wrongPos.r && selectedPos.c === wrongPos.c;
                            const partnerPos = selectedIsWrong ? correctPos : wrongPos;
                            if (selectedPos.r !== partnerPos.r || selectedPos.c !== partnerPos.c) {
                                handleTileClick(partnerPos.r, partnerPos.c);
                            }
                        }
                        return;
                    }
                }
            }
        }, 800);
        return () => clearTimeout(timer);
    }, [isAutoPlaying, isComplete, isSwapping, isExpanding, isReviewing, gridData, selectedPos, handleTileClick, activeRowIndices, activeColIndices, checkMatches]);

    if (isInitializing) return null;
    const neonHex = NEON_PALETTE[modalColor] || '#FFFFFF';

    return (
        <LevelLayout modeName="EXPANSION" levelIndex={levelIndex} onOpenSettings={() => onOpenSettings?.()} isReviewing={isReviewing} onNext={onNext} hintsEnabled={hintsEnabled} onToggleHints={() => setHintsEnabled?.(!hintsEnabled)} stars={stars}>
            <ParticleOverlay ref={particleRef} />
            <div className="flex-1 flex flex-col gap-0.5 pointer-events-auto h-full overflow-visible">
                {activeRowIndices.map(rIdx => {
                    const rowTiles = activeColIndices.map(cIdx => gridData[rIdx][cIdx]);
                    const solved = rowTiles.every(t => t?.status === 'solved');
                    const firstTile = rowTiles[0];
                    const rowColor = THEMES[0].solvedColors[rIdx % THEMES[0].solvedColors.length];
                    return (
                        <div key={rIdx} className="flex-1 relative min-h-0 overflow-visible">
                            {solved && <SolvedRowBackground seed={firstTile?.categoryId || rIdx} colorClass={rowColor} animationKey="expansion-medium" />}
                            {solved && (
                                <m.div layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="absolute top-[-14px] left-1 z-[100] transform -translate-y-full">
                                    <div className="px-2 py-0.5 text-[9px] font-black uppercase bg-black border-x-2 border-t-2 border-b-0 border-white text-black rounded-t-lg shadow-[0_-4px_12px_rgba(0,0,0,0.8)] whitespace-nowrap">{firstTile?.categoryName}</div>
                                </m.div>
                            )}
                            <div className={`grid gap-0.5 w-full h-full relative z-10 transition-all duration-300 ${solved ? 'p-1' : 'p-0.5'}`} style={{ gridTemplateColumns: `repeat(${activeColIndices.length}, 1fr)` }}>
                                {rowTiles.map((t, cIdx) => (
                                    t && <Tile key={t.id} data={t} targetColor={rowColor} onClick={() => handleTileClick(rIdx, cIdx)} onLongPress={handleLongPress} isNarrow={activeColIndices.length > 4} ref={el => { if (el) tileRefs.current.set(t.id, el); }} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
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
};
export default Level7_Expansion_Medium;
