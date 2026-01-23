
import React from 'react';

/**
 * AndroidStatusBar: Reserves space at the top of the screen for the system status bar.
 * Uses env(safe-area-inset-top) to automatically calculate the height based on 
 * the specific device's WindowInsets.
 */
export const AndroidStatusBar: React.FC = () => {
  return (
    <div 
      className="w-full bg-black shrink-0 z-[100] select-none pointer-events-none"
      style={{ 
        height: 'env(safe-area-inset-top, 0px)'
      }}
    >
      {/* Dynamic buffer that matches the system status bar height automatically */}
    </div>
  );
};

/**
 * AndroidNavigationBar: Reserves space at the bottom of the screen for system navigation.
 * Height is set to accommodate gesture zones and navigation buttons using bottom insets.
 * Uses bg-black to maintain the game's sleek dark aesthetic at the screen edge.
 */
export const AndroidNavigationBar: React.FC = () => {
  return (
    <div 
      className="w-full bg-black shrink-0 z-[100] select-none pointer-events-none"
      style={{ 
        height: 'env(safe-area-inset-bottom, 16px)'
      }}
    >
      {/* Physical buffer to prevent UI elements from bleeding into the system navigation area */}
    </div>
  );
};
