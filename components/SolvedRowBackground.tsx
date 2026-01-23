
import React from 'react';

interface SolvedRowBackgroundProps {
  seed: string | number;
  className?: string;
}

const SolvedRowBackground: React.FC<SolvedRowBackgroundProps> = ({ seed, className = "" }) => {
  return (
    <div className={`absolute inset-0 z-0 bg-black border-4 border-white rounded-medium overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] ${className}`}>
      {/* High-precision arcade cabinet base: rigid 4px white border with rounded corners */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-[2]" />
    </div>
  );
};

export default React.memo(SolvedRowBackground);
