
import React, { ReactNode } from 'react';

interface Props {
  text: string;
  sizeClass?: string;
  className?: string;
  active?: boolean;
  gradient?: string; // Hex code for the neon color
}

const ArcadeStyledText: React.FC<Props> = ({ 
  text, 
  sizeClass = "text-2xl", 
  className = "",
  active = true,
  gradient = '#00E5FF' // Default to Neon Aqua
}) => {
  return (
    <div className={`relative inline-block ${className} ${active ? '' : 'opacity-40 grayscale contrast-125'}`}>
      <span 
        className={`${sizeClass} font-black uppercase font-oswald leading-none tracking-tight select-none px-[2px]`}
        style={{
          color: gradient,
          textShadow: '2px 2px 0px rgba(0,0,0,1)',
          display: 'block'
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default React.memo(ArcadeStyledText);
