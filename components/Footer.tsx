import React from 'react';
import { FOOTER_HEIGHT } from '../types';

interface FooterProps {
  showRainbowLine?: boolean;
}

/**
 * Footer: Specifically sized to house a persistent banner ad at the bottom of the screen.
 * The bg-black matches the system navigation bar for a seamless visual flow.
 */
const Footer: React.FC<FooterProps> = ({ showRainbowLine = false }) => {
  return (
    <footer 
      className="relative w-full bg-black flex flex-col items-center justify-center shrink-0 z-[60] border-t border-zinc-900"
      style={{ height: FOOTER_HEIGHT }}
    >
      {/* Animated neon rainbow line - increased height to 4px - Conditional visibility based on prop */}
      <div 
        className={`absolute top-0 left-0 w-full h-[4px] bg-[linear-gradient(to_right,#FF073A,#FF5F1F,#F9FF00,#00F000,#00FFFF,#0066FF,#B026FF,#FF1FBF,#FF073A)] ${showRainbowLine ? '' : 'invisible'}`}
        style={{ 
          backgroundSize: '200% 100%',
          animation: 'rainbow-flow 3s linear infinite'
        }}
      />
      
      <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden">
        {/* AdMob Banner Placeholder Area - Content injected via native Capacitor plugin */}
        <div className="text-zinc-800 font-bold text-[8px] uppercase tracking-tighter opacity-20 select-none">Ad Space</div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);