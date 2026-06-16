
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
        className={`${sizeClass} font-black uppercase font-oswald leading-none tracking-tight select-none px-[3px]`}
        style={{
          color: gradient,
          // Using a multi-layer text-shadow stack produces a much smoother "thick outline"
          // than -webkit-text-stroke, which miters sharply on bold fonts.
          // GRAPHIC QUALITY: All values are whole pixels for crisp, non-blurry rendering
          textShadow: `
            /* Black high-contrast inner border */
            -2px -2px 0px ${innerShadowColor},  
             2px -2px 0px ${innerShadowColor},
            -2px  2px 0px ${innerShadowColor},
             2px  2px 0px ${innerShadowColor},
            
            /* Smooth white outer "Arcade Cabinet" boundary */
            -3px -3px 0px ${outlineColor},
             0px -3px 0px ${outlineColor},
             3px -3px 0px ${outlineColor},
             3px  0px 0px ${outlineColor},
             3px  3px 0px ${outlineColor},
             0px  3px 0px ${outlineColor},
            -3px  3px 0px ${outlineColor},
            -3px  0px 0px ${outlineColor},
            
            /* Fills for corner smoothing */
            -2px -3px 0px ${outlineColor},
             2px -3px 0px ${outlineColor},
             3px -2px 0px ${outlineColor},
             3px  2px 0px ${outlineColor},
             2px  3px 0px ${outlineColor},
            -2px  3px 0px ${outlineColor},
            -3px  2px 0px ${outlineColor},
            -3px -2px 0px ${outlineColor},

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