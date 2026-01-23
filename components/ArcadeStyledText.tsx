
import React from 'react';

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
  const outlineColor = "white";
  const innerShadowColor = "black";

  return (
    <div className={`relative inline-block ${className} ${active ? '' : 'opacity-40 grayscale contrast-125'}`}>
      <span 
        className={`${sizeClass} font-black uppercase font-oswald leading-none tracking-tight select-none`}
        style={{
          color: gradient,
          // Using a multi-layer text-shadow stack produces a much smoother "thick outline"
          // than -webkit-text-stroke, which miters sharply on bold fonts.
          textShadow: `
            /* Black high-contrast inner border */
            -1.5px -1.5px 0 ${innerShadowColor},  
             1.5px -1.5px 0 ${innerShadowColor},
            -1.5px  1.5px 0 ${innerShadowColor},
             1.5px  1.5px 0 ${innerShadowColor},
            
            /* Smooth white outer "Arcade Cabinet" boundary */
            -3px -3px 0 ${outlineColor},
             0px -3px 0 ${outlineColor},
             3px -3px 0 ${outlineColor},
             3px  0px 0 ${outlineColor},
             3px  3px 0 ${outlineColor},
             0px  3px 0 ${outlineColor},
            -3px  3px 0 ${outlineColor},
            -3px  0px 0 ${outlineColor},
            
            /* Fills for corner smoothing */
            -2px -3px 0 ${outlineColor},
             2px -3px 0 ${outlineColor},
             3px -2px 0 ${outlineColor},
             3px  2px 0 ${outlineColor},
             2px  3px 0 ${outlineColor},
            -2px  3px 0 ${outlineColor},
            -3px  2px 0 ${outlineColor},
            -3px -2px 0 ${outlineColor},

            /* Deep background shadow for arcade depth */
            4px 4px 0px rgba(0,0,0,1)
          `,
          display: 'block'
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default React.memo(ArcadeStyledText);
