
import React from 'react';

interface Props {
  text: string;
  sizeClass?: string;
  strokeOuter?: string;
  strokeInner?: string;
  className?: string;
  active?: boolean;
  gradient?: string;
}

const ArcadeStyledText: React.FC<Props> = ({ 
  text, 
  sizeClass = "text-2xl", 
  strokeOuter = "8px", 
  strokeInner = "4px",
  className = "",
  active = true,
  gradient = 'linear-gradient(to right, #FF1FBF, #00E5FF, #F9FF00, #FF1FBF)'
}) => {
  return (
    <div className={`relative inline-block ${className} ${active ? '' : 'opacity-40 grayscale contrast-125'}`}>
      <style>
        {`
          @keyframes arcade-flow {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}
      </style>
      {/* Layer 0: Drop Shadow */}
      <span 
        className={`absolute inset-0 ${sizeClass} font-black font-oswald uppercase leading-none tracking-tight select-none pointer-events-none`}
        style={{ 
          color: 'rgba(0,0,0,0.8)',
          transform: 'translate(3px, 3px)',
          zIndex: -1,
          textShadow: '0 0 4px rgba(0,0,0,0.5)' // Extra softness
        }}
      >
        {text}
      </span>

      {/* Layer 1: Outer White Border (Thickest) */}
      <span 
        className={`absolute inset-0 ${sizeClass} font-black font-oswald uppercase leading-none tracking-tight select-none pointer-events-none`}
        style={{ 
          WebkitTextStroke: `${strokeOuter} white`,
          color: 'transparent',
          zIndex: 0
        }}
      >
        {text}
      </span>

      {/* Layer 2: Inner Black Border (Medium) */}
      <span 
        className={`absolute inset-0 ${sizeClass} font-black font-oswald uppercase leading-none tracking-tight select-none pointer-events-none`}
        style={{ 
          WebkitTextStroke: `${strokeInner} black`,
          color: 'transparent',
          zIndex: 10
        }}
      >
        {text}
      </span>
      
      {/* Layer 3: Gradient Fill (Top) */}
      <span 
        className={`relative z-20 ${sizeClass} font-black uppercase font-oswald leading-none tracking-tight`}
        style={{
          backgroundImage: gradient,
          backgroundSize: '600% auto', // Extremely stretched out colors
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          animation: active ? 'arcade-flow 12s linear infinite' : 'none', // Slower linear animation to show full gradient flow
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default ArcadeStyledText;
