
import React from 'react';

interface SolvedRowBackgroundProps {
  seed: string | number;
  className?: string;
}

const SolvedRowBackground: React.FC<SolvedRowBackgroundProps> = ({ seed, className = "" }) => {
  return (
    <div className={`absolute inset-0 z-0 bg-black border-4 border-white rounded-medium overflow-hidden shadow-[0_0_8px_rgba(255,255,255,0.15)] ${className}`}>
      {/* High-precision arcade cabinet base: rigid 4px white border with rounded corners */}
    </div>
  );
};

export default React.memo(SolvedRowBackground);
