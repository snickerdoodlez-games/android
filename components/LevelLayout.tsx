import React from 'react';
import Header from './Header';

interface LevelLayoutProps {
  modeName: string;
  levelIndex: number;
  onOpenSettings: (categories?: any) => void;
  isReviewing?: boolean;
  onNext?: () => void;
  showHintButton?: boolean;
  onTurnOffHints?: () => void;
  onManualHint?: () => void;
  onToggleHints?: () => void;
  hintsEnabled?: boolean;
  headerExtras?: React.ReactNode;
  children: React.ReactNode;
  rowsLeft?: number;
  stars?: number;
}

const LevelLayout: React.FC<LevelLayoutProps> = ({
  modeName,
  levelIndex,
  onOpenSettings,
  isReviewing,
  onNext,
  showHintButton,
  onTurnOffHints,
  onManualHint,
  onToggleHints,
  hintsEnabled,
  headerExtras,
  children,
  rowsLeft,
  stars
}) => {
  return (
    <div className="flex flex-col h-full w-full max-w-6xl mx-auto select-none overflow-hidden relative bg-black font-oswald">
      <Header 
        modeName={modeName} 
        levelIndex={levelIndex} 
        onOpenSettings={onOpenSettings}
        isReviewing={isReviewing}
        onNext={onNext}
        showHintButton={showHintButton}
        onTurnOffHints={onTurnOffHints}
        onManualHint={onManualHint}
        onToggleHints={onToggleHints}
        hintsEnabled={hintsEnabled}
        rowsLeft={rowsLeft}
        leftContent={headerExtras}
        stars={stars}
      />

      <main className="flex-1 w-full relative z-[20] flex flex-col p-0 bg-black overflow-visible min-h-0">
        {children}
      </main>
    </div>
  );
};

export default LevelLayout;