
import React from 'react';

interface CategoryListOverlayProps {
  categories: { name: string, isSolved: boolean }[];
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  onSettingsClick?: () => void;
}

const CategoryListOverlay: React.FC<CategoryListOverlayProps> = ({ categories, isOpen, onClose, children, onSettingsClick }) => {
  if (!isOpen) return null;

  return (
    <div 
        className="absolute inset-0 z-[80] bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-fade-in"
        onClick={onClose}
    >
      <div className="w-full max-w-md bg-zinc-900 border-2 border-white rounded-2xl p-4 shadow-2xl flex flex-col gap-3 animate-pop max-h-[85vh] overflow-y-auto no-scrollbar" onClick={(e) => e.stopPropagation()}>
         <div className="flex justify-between items-center border-b border-zinc-700 pb-2 shrink-0">
            <h3 className="text-xl font-black font-righteous text-deco-gold uppercase tracking-wider">Categories</h3>
            <button onClick={onClose} className="text-zinc-400 hover:text-white">✕</button>
         </div>
         
         {children && (
            <div className="mb-2 shrink-0">
                {children}
            </div>
         )}
         
         {/* Grid is 2 columns by default for compactness */}
         <div className="grid grid-cols-2 gap-2 shrink-0">
             {categories.map((cat) => (
                 <div 
                    key={cat.name}
                    className={`
                        p-2 rounded-lg border flex items-center justify-center text-center font-bold uppercase font-oswald tracking-wide text-xs leading-tight min-h-[50px] transition-all
                        ${cat.isSolved 
                            ? 'bg-zinc-800 border-neon-green text-neon-green shadow-[0_0_5px_rgba(34,197,94,0.3)]' 
                            : 'bg-black border-zinc-700 text-white shadow-none'}
                    `}
                 >
                    {cat.name}
                    {cat.isSolved && <span className="ml-1 text-base">✓</span>}
                 </div>
             ))}
         </div>
         
         {!children && (
            <div className="flex flex-col gap-2 mt-auto shrink-0 pt-2 border-t border-zinc-800">
                {onSettingsClick && (
                    <button 
                        onClick={() => {
                            onClose();
                            onSettingsClick();
                        }}
                        className="w-full py-3 bg-zinc-800 border border-zinc-600 rounded-xl text-zinc-300 font-oswald uppercase tracking-wider hover:bg-zinc-700 hover:text-white hover:border-white transition-all text-sm flex items-center justify-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        OPEN SETTINGS
                    </button>
                )}
                <p className="text-center text-zinc-500 text-[10px] font-sans">
                    Tap outside to close
                </p>
            </div>
         )}
      </div>
    </div>
  );
};

export default CategoryListOverlay;
