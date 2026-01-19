
import React from 'react';

interface Props {
  path: string;
  viewBox?: string;
  className?: string;
  active?: boolean;
  sizeClass?: string;
}

const ArcadeIcon: React.FC<Props> = ({ 
  path, 
  viewBox = "0 0 24 24", 
  className = "",
  active = true,
  sizeClass = "w-8 h-8"
}) => {
  const id = React.useId();
  const gradientId = `icon-grad-${id}`;

  // Rainbow Palette: Red -> Orange -> Yellow -> Green -> Cyan -> Blue -> Red (loop)
  const STOPS = [
    { offset: "0%", color: "#FF073A" },
    { offset: "17%", color: "#FF5F1F" },
    { offset: "33%", color: "#F9FF00" },
    { offset: "50%", color: "#39FF14" },
    { offset: "67%", color: "#00FFFF" },
    { offset: "83%", color: "#0066FF" },
    { offset: "100%", color: "#FF073A" }
  ];

  return (
    <div className={`relative ${sizeClass} ${className} ${active ? '' : 'opacity-50 grayscale'}`}>
      
      {/* Layer 1: Outer White Stroke (Thickest background) */}
      <svg viewBox={viewBox} className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" style={{ zIndex: 0 }}>
        <path 
          d={path} 
          fill="white" 
          stroke="white" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>

      {/* Layer 2: Inner Black Stroke (Separation) */}
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

      {/* Layer 3: Gradient Fill (Top) */}
      <svg viewBox={viewBox} className="relative w-full h-full overflow-visible" style={{ zIndex: 20 }}>
        <defs>
          {/* 
             x2="400%" stretches the gradient pattern to 4x the width of the icon.
             spreadMethod="repeat" tiles it.
             animateTransform moves it by -4 (400%) to cycle exactly once through the stretched gradient.
          */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="400%" y2="0%" spreadMethod="repeat">
            {STOPS.map((stop, i) => (
                <stop key={i} offset={stop.offset} stopColor={stop.color} />
            ))}
            <animateTransform 
                attributeName="gradientTransform" 
                type="translate" 
                from="0 0" 
                to="-4 0" 
                dur="8s" 
                repeatCount="indefinite" 
            />
          </linearGradient>
        </defs>
        <path 
          d={path} 
          fill={active ? `url(#${gradientId})` : '#555'} 
        />
      </svg>
    </div>
  );
};

export default ArcadeIcon;
