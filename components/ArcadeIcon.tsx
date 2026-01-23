import React from 'react';

interface Props {
  path: string;
  viewBox?: string;
  className?: string;
  active?: boolean;
  sizeClass?: string;
  color?: string;
}

const ArcadeIcon: React.FC<Props> = ({ 
  path, 
  viewBox = "0 0 24 24", 
  className = "",
  active = true,
  sizeClass = "w-8 h-8",
  color = "#F9FF00" // Default to Neon Yellow (Lemon Glacier)
}) => {
  return (
    <div className={`relative ${sizeClass} ${className} transition-opacity duration-300`}>
      
      {/* Layer 1: Outer White Stroke (Engineered boundary) */}
      <svg viewBox={viewBox} className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" style={{ zIndex: 0 }}>
        <path 
          d={path} 
          fill="white" 
          stroke="white" 
          strokeWidth="5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>

      {/* Layer 2: Inner Black Stroke (High contrast separation) */}
      <svg viewBox={viewBox} className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" style={{ zIndex: 10 }}>
        <path 
          d={path} 
          fill="black" 
          stroke="black" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>

      {/* Layer 3: Solid Color Fill (Interactive top layer) */}
      <svg viewBox={viewBox} className="relative w-full h-full overflow-visible" style={{ zIndex: 20 }}>
        <path 
          d={path} 
          fill={active ? color : '#555555'} 
          className="transition-colors duration-300"
        />
      </svg>
    </div>
  );
};

export default ArcadeIcon;