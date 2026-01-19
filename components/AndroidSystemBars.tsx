
import React from 'react';

/**
 * AndroidStatusBar: Reserves space at the top of the screen for the system status bar.
 * Uses bg-black to provide a solid visual boundary, ensuring the header content
 * never bleeds into the system clock or notification icons.
 */
export const AndroidStatusBar: React.FC = () => {
  return (
    <div 
      className="w-full bg-black shrink-0 z-[100] select-none pointer-events-none"
      style={{ 
        height: 'max(env(safe-area-inset-top, 0px), 24px)'
      }}
    >
      {/* Physical buffer to prevent UI elements from bleeding into the system status area */}
    </div>
  );
};

/**
 * AndroidNavigationBar: Reserves space at the bottom of the screen for system navigation.
 * Height is set to accommodate gesture zones and navigation buttons.
 * Uses bg-black to maintain the game's sleek dark aesthetic at the screen edge.
 */
export const AndroidNavigationBar: React.FC = () => {
  return (
    <div 
      className="w-full bg-black shrink-0 z-[100] select-none pointer-events-none"
      style={{ 
        height: 'max(env(safe-area-inset-bottom, 0px), 16px)'
      }}
    >
      {/* Physical buffer to prevent UI elements from bleeding into the system navigation area */}
    </div>
  );
};
