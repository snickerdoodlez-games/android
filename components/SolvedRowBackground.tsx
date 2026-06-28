
import React from 'react';

interface SolvedRowBackgroundProps {
  seed: string | number;
  className?: string;
}

const SolvedRowBackground: React.FC<SolvedRowBackgroundProps> = ({ seed, className = "" }) => {
  return (
    <div className={`absolute inset-0 z-0 bg-black border-4 border-white rounded-medium overflow-hidden shadow-[0_0_8px_rgba(255,255,255,0.15)] ${className}`}>
      {/* High-precision arcade cabinet base: rigid 4px white border with rounded corners */}
      {/* Shine sweep across the solved row on first mount */}
      <div
        className="absolute top-0 h-full w-[30%] z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 45%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.25) 55%, transparent 60%)',
          backgroundSize: '200% 100%',
          animation: 'shine-sweep 0.55s ease-out forwards',
        }}
      />
    </div>
  );
};

export default React.memo(SolvedRowBackground);
