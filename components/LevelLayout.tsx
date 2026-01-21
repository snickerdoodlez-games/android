
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
  rowsLeft
}) => {
  return (
    <div className="flex flex-col h-full w-full max-w-4xl mx-auto select-none overflow-hidden relative bg-black font-oswald">
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
      >
        {headerExtras}
      </Header>

      {/* Removed padding-top (pt-2 -> pt-0) to close gap between header and tiles */}
      <main className="flex-1 w-full relative flex flex-col pt-0 p-1 sm:p-2 min-h-0 bg-black overflow-visible">
        {children}
      </main>
    </div>
  );
};

export default LevelLayout;
