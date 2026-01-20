
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CSVRow } from '../types';
import { getConsolidatedData } from '../services/csvData';
import { getSynonymData } from '../services/synonymData';
import { getEmojiData } from '../services/emojiData';
import { ARCADE_OUTLINE } from '../services/tileStyles';

// Fix: Cast motion.div to any to bypass environment-specific prop type errors
const MotionDiv = motion.div as any;

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedIds: string[];
  onToggle: (ids: string[]) => void;
}

const CategorySelectionOverlay: React.FC<Props> = ({ isOpen, onClose, selectedIds, onToggle }) => {
  const [search, setSearch] = useState("");

  const allCategories = useMemo(() => {
    // Collect from all potential data sources
    const pool = [
      ...getConsolidatedData(),
      ...getSynonymData(),
      ...getEmojiData()
    ];
    // Sort alphabetically for easy browsing
    return pool.sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return allCategories;
    const term = search.toUpperCase();
    return allCategories.filter(c => c.name.toUpperCase().includes(term));
  }, [search, allCategories]);

  const handleToggleId = (id: string) => {
    if (selectedIds.includes(id)) {
      onToggle(selectedIds.filter(x => x !== id));
    } else {
      onToggle([...selectedIds, id]);
    }
  };

  const handleSelectAll = () => {
    onToggle(allCategories.map(c => c.id));
  };

  const handleDeselectAll = () => {
    onToggle([]);
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 animate-fade-in font-oswald">
      <MotionDiv 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm bg-zinc-950 border-4 border-white rounded-large p-4 shadow-[0_0_50px_rgba(255,255,255,0.3)] flex flex-col gap-3 overflow-hidden h-[90vh]"
      >
        <div className="flex justify-between items-center border-b-2 border-zinc-800 pb-2 shrink-0">
          <h2 className="text-xl font-black text-neon-yellow uppercase tracking-widest italic drop-shadow-[0_0_5px_rgba(249,255,0,0.8)]">MANAGE POOL</h2>
          <button className="text-zinc-400 hover:text-white transition-colors p-1" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider leading-tight px-1">
          Select categories you want to appear in your puzzles. If empty, the full global pool is used.
        </p>

        <div className="flex gap-2 shrink-0">
            <input 
                type="text"
                placeholder="SEARCH CATEGORIES..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-black border-2 border-zinc-800 rounded-medium px-3 py-2 text-white font-bold text-xs focus:border-neon-blue outline-none transition-colors"
            />
        </div>

        <div className="flex gap-2 shrink-0">
            <button onClick={handleSelectAll} className="flex-1 py-1.5 bg-zinc-900 border border-zinc-700 text-[9px] font-black uppercase text-zinc-400 rounded-small hover:text-white transition-colors">Select All</button>
            <button onClick={handleDeselectAll} className="flex-1 py-1.5 bg-zinc-900 border border-zinc-700 text-[9px] font-black uppercase text-zinc-400 rounded-small hover:text-white transition-colors">Clear All</button>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar pr-1 flex flex-col gap-1.5 bg-black/40 rounded-medium p-1">
            {filteredCategories.length === 0 ? (
                <div className="py-10 text-center text-zinc-700 font-bold uppercase text-xs">No results found</div>
            ) : (
                filteredCategories.map(cat => {
                    const isSelected = selectedIds.includes(cat.id);
                    return (
                        <button 
                            key={cat.id}
                            onClick={() => handleToggleId(cat.id)}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-medium border-2 transition-all ${isSelected ? 'bg-zinc-900 border-neon-blue text-white shadow-[0_0_8px_rgba(0,229,255,0.2)]' : 'bg-black border-zinc-800 text-zinc-600'}`}
                        >
                            <span className="font-bold text-[11px] uppercase tracking-tight truncate mr-2">{cat.name}</span>
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? 'border-neon-blue bg-neon-blue shadow-[0_0_5px_#00E5FF]' : 'border-zinc-800'}`}>
                                {isSelected && <span className="text-[10px] text-black font-black">✓</span>}
                            </div>
                        </button>
                    );
                })
            )}
        </div>

        <div className="pt-2 border-t border-zinc-800 shrink-0">
             <button 
                onClick={onClose}
                className="w-full py-3 bg-white text-black font-black text-lg uppercase rounded-medium active:scale-95 transition-all shadow-[0_0_15px_white]"
                style={ARCADE_OUTLINE}
             >
                CONFIRM POOL ({selectedIds.length})
             </button>
        </div>
      </MotionDiv>
    </div>
  );
};

export default CategorySelectionOverlay;
