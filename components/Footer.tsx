import React from 'react';
import { FOOTER_HEIGHT } from '../types';

const Footer: React.FC = () => {
  return (
    <footer 
      className="w-full bg-black flex flex-col items-center justify-center shrink-0 z-[60]"
      style={{ height: FOOTER_HEIGHT }}
    >
      <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden">
        {/* Blank placeholder for native AdMob banner overlay */}
      </div>
    </footer>
  );
};

export default Footer;
