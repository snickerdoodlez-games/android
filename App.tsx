


import React, { useState, useEffect, Component, ReactNode, ErrorInfo, Suspense, lazy } from 'react';
import { GameMode, LevelSummary } from './types';
import { getSavedLevel, saveLevel, updateStats, getEnabledModes, saveEnabledModes, isTutorialSeen, markTutorialSeen, getCustomPool, saveCustomPool, getStats } from './services/storage';
import { getLevelPackage, getLevelMode, LevelPackage } from './services/levelContent';
import { audio } from './services/audioService';
import { Capacitor } from '@capacitor/core';
import { AdMob, BannerAdSize, BannerAdPosition, AdmobConsentStatus } from '@capacitor-community/admob';

// Static UI Components (Fast Load)
import LevelMenu from './components/LevelMenu';
import SettingsMenu from './components/SettingsMenu';
import StatsOverlay from './components/StatsOverlay';
import TutorialOverlay from './components/TutorialOverlay';
import CategorySelectionOverlay from './components/CategorySelectionOverlay';
import Footer from './components/Footer';
import { AndroidStatusBar, AndroidNavigationBar } from './components/AndroidSystemBars';

// Lazy Loaded Levels (Optimization: Load only when needed)
const Level1_Standard = lazy(() => import('./components/Level1_Standard'));
const Level1_Emoji = lazy(() => import('./components/Level1_Emoji'));
const Level2_Filter = lazy(() => import('./components/Level2_Filter'));
const Level5_Group = lazy(() => import('./components/Level5_Group'));
const Level7_Expansion = lazy(() => import('./components/Level7_Expansion'));
const Level8_Cascade = lazy(() => import('./components/Level8_Cascade'));

const BANNER_AD_ID = 'ca-app-pub-4096368901415767/2019330695';
const INTERSTITIAL_AD_ID = 'ca-app-pub-4096368901415767/1153913539';

const getSafeAreaBottom = () => {
  try {
    const div = document.createElement('div');
    div.style.height = 'env(safe-area-inset-bottom, 0px)';
    div.style.visibility = 'hidden';
    div.style.position = 'absolute';
    document.body.appendChild(div);
    const height = div.offsetHeight;
    document.body.removeChild(div);
    return Math.max(height, 16);
  } catch (e) {
    return 16;
  }
};

interface ErrorBoundaryProps { children?: ReactNode; }
interface ErrorBoundaryState { hasError: boolean; }

// fix: Use React.Component to ensure props and state are correctly recognized by the TypeScript compiler via standard inheritance
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(_: Error): ErrorBoundaryState { return { hasError: true }; }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) { console.error("Game crashed:", error, errorInfo); }
  
  render(): ReactNode {
    const { hasError } = this.state;
    // fix: Accessed children directly from this.props which is now properly resolved through the React.Component generic extension
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 text-center">
          <h1 className="text-3xl font-bold mb-4 font-oswald text-red-500 uppercase">System Error</h1>
          <button onClick={() => window.location.reload()} className="px-6 py-3 bg-white text-black font-bold rounded-full uppercase font-oswald border-2 border-white">Reboot</button>
        </div>
      );
    }
    return children;
  }
}

const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center h-full w-full bg-black">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
  </div>
);

export const App: React.FC = () => {
  const [mode, setMode] = useState<GameMode>(GameMode.MENU);
  const [levelIndex, setLevelIndex] = useState(1); 
  const [isMusicOn, setIsMusicOn] = useState(true); 
  const [showSettings, setShowSettings] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showCategorySelector, setShowCategorySelector] = useState(false);
  const [hintsEnabled, setHintsEnabled] = useState(true);
  const [showTutorial, setShowTutorial] = useState(false);
  const [activeCategories, setActiveCategories] = useState<{name: string, isSolved: boolean}[]>([]);
  const [isReviewing, setIsReviewing] = useState(false);
  const [currentSummary, setCurrentSummary] = useState<LevelSummary | null>(null);
  const [enabledModes, setEnabledModes] = useState<GameMode[]>([]);
  const [customPoolIds, setCustomPoolIds] = useState<string[]>([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [levelPackage, setLevelPackage] = useState<LevelPackage | null>(null);
  const [forcedMode, setForcedMode] = useState<GameMode | undefined>(undefined);
  const [privacyOptionsRequired, setPrivacyOptionsRequired] = useState(false);

  useEffect(() => {
    setLevelIndex(getSavedLevel());
    setEnabledModes(getEnabledModes());
    setCustomPoolIds(getCustomPool());
  }, []);

  useEffect(() => {
    const initializeAds = async () => {
      if (!Capacitor.isNativePlatform()) return;
      try {
        await AdMob.initialize({});
        const consentInfo = await AdMob.requestConsentInfo();
        if (consentInfo.isConsentFormAvailable && consentInfo.status === AdmobConsentStatus.REQUIRED) {
          await AdMob.showConsentForm();
        }
        if (consentInfo.privacyOptionsRequirementStatus === 'REQUIRED') {
            setPrivacyOptionsRequired(true);
        }
        await AdMob.showBanner({
          adId: BANNER_AD_ID,
          adSize: BannerAdSize.BANNER,
          position: BannerAdPosition.BOTTOM_CENTER,
          margin: getSafeAreaBottom(),
          isTesting: false, 
        });
        await AdMob.prepareInterstitial({ adId: INTERSTITIAL_AD_ID, isTesting: false }).catch(() => {});
      } catch (e) {
        console.error("AdMob init failed", e);
      }
    };
    initializeAds();
  }, []);

  useEffect(() => {
    const pkg = getLevelPackage(levelIndex, enabledModes, customPoolIds, forcedMode);
    setLevelPackage(pkg);
  }, [levelIndex, enabledModes, customPoolIds, forcedMode]);

  useEffect(() => {
    if (mode !== GameMode.MENU && !isTutorialSeen()) {
      setShowTutorial(true);
    }
  }, [mode]);

  useEffect(() => {
    if (isAutoPlaying && isReviewing) {
        const timer = setTimeout(() => { proceedToNextLevel(); }, 3000);
        return () => clearTimeout(timer);
    }
  }, [isAutoPlaying, isReviewing]);

  const handleLevelComplete = (stats: { timeMs: number, moves: number, solvedCategoryIds?: string[], solvedWords?: string[], failed?: boolean, mistakes?: number }) => {
    updateStats({ 
        levelsCompleted: stats.failed ? 0 : 1, 
        totalMoves: stats.moves, 
        totalTimeMs: stats.timeMs,
        rowsSolved: mode === GameMode.LEVEL_MIND_MATCH ? 12 : 4,
        solvedCategoryIds: stats.solvedCategoryIds,
        solvedWords: stats.solvedWords,
    });
    setCurrentSummary({
        levelIndex,
        mode: mode,
        timeMs: stats.timeMs,
        moves: stats.moves,
        mistakes: stats.mistakes || 0,
        score: Math.max(0, 1000 - (stats.moves * 10) - (stats.mistakes || 0) * 50)
    });
    setIsReviewing(true);
  };

  const proceedToNextLevel = async () => {
    if (Capacitor.isNativePlatform()) {
        await AdMob.showInterstitial().catch(() => {});
        await AdMob.prepareInterstitial({ adId: INTERSTITIAL_AD_ID, isTesting: false }).catch(() => {});
    }
    const nextLevel = levelIndex + 1;
    setLevelIndex(nextLevel);
    saveLevel(nextLevel);
    setForcedMode(undefined);
    setMode(getLevelMode(nextLevel, enabledModes));
    setIsReviewing(false);
    setCurrentSummary(null);
  };

  const renderContent = () => {
    if (mode === GameMode.MENU) {
      return (
          <LevelMenu 
            onStart={() => setMode(forcedMode || (levelPackage ? levelPackage.mode : getLevelMode(levelIndex, enabledModes)))} 
            onSettings={() => setShowSettings(true)} 
            onStats={() => setShowStats(true)} 
            lastLevel={levelIndex} 
          />
      );
    }
    if (!levelPackage || levelPackage.mode !== mode) return <LoadingFallback />;
    const { data, themeName } = levelPackage;
    
    return (
      <Suspense fallback={<LoadingFallback />}>
        {(() => {
          switch (mode) {
            case GameMode.CLASSIC:
            case GameMode.LEVEL_THEMED:
            case GameMode.LEVEL_SYNONYMS:
              return <Level1_Standard key={`lvl-${levelIndex}`} csvData={data} mode={mode} levelIndex={levelIndex} onComplete={handleLevelComplete} onExit={() => setMode(GameMode.MENU)} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={(cats) => { setActiveCategories(cats || []); setShowSettings(true); }} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} themeName={themeName} />;
            case GameMode.LEVEL_EMOJI:
              return <Level1_Emoji key={`lvl-${levelIndex}`} levelIndex={levelIndex} onComplete={handleLevelComplete} onExit={() => setMode(GameMode.MENU)} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={(cats) => { setActiveCategories(cats || []); setShowSettings(true); }} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} />;
            case GameMode.LEVEL_MIND_MATCH:
              return <Level5_Group key={`lvl-${levelIndex}`} csvData={data} levelIndex={levelIndex} onComplete={handleLevelComplete} onExit={() => setMode(GameMode.MENU)} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={(cats) => { setActiveCategories(cats || []); setShowSettings(true); }} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} />;
            case GameMode.LEVEL_EXPANSION:
              return <Level7_Expansion key={`lvl-${levelIndex}`} csvData={data} levelIndex={levelIndex} onComplete={handleLevelComplete} onExit={() => setMode(GameMode.MENU)} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={(cats) => { setActiveCategories(cats || []); setShowSettings(true); }} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} />;
            case GameMode.LEVEL_CASCADE:
              return <Level8_Cascade key={`lvl-${levelIndex}`} csvData={data} levelIndex={levelIndex} onComplete={handleLevelComplete} onExit={() => setMode(GameMode.MENU)} hintsEnabled={hintsEnabled} onOpenSettings={(cats) => { setActiveCategories(cats || []); setShowSettings(true); }} setHintsEnabled={setHintsEnabled} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} />;
            default:
              return <Level2_Filter key={`lvl-${levelIndex}`} csvData={data} levelIndex={levelIndex} onComplete={handleLevelComplete} onGameOver={() => handleLevelComplete({ timeMs: 0, moves: 0, failed: true })} onExit={() => setMode(GameMode.MENU)} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={(cats) => { setActiveCategories(cats || []); setShowSettings(true); }} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} />;
          }
        })()}
      </Suspense>
    );
  };

  return (
    <ErrorBoundary>
      {/* Root container is absolute fixed with flex-col. No padding-top; AndroidStatusBar component provides the 30px buffer. */}
      <div className="fixed inset-0 h-full w-screen bg-black text-white font-oswald flex flex-col overflow-hidden">
        <AndroidStatusBar />
        <div className="flex-1 relative flex flex-col min-h-0 w-full overflow-hidden">
          {renderContent()}
          {showTutorial && <TutorialOverlay mode={mode} onComplete={() => { markTutorialSeen(); setShowTutorial(false); }} />}
        </div>
        <Footer />
        <AndroidNavigationBar />
        {showSettings && <SettingsMenu isOpen={showSettings} onClose={() => setShowSettings(false)} onMainMenu={() => { setForcedMode(undefined); setShowSettings(false); setMode(GameMode.MENU); }} isMusicOn={isMusicOn} toggleMusic={() => { setIsMusicOn(!isMusicOn); audio.setSound(!isMusicOn); }} enabledModes={enabledModes} toggleMode={(m) => { let next = enabledModes.includes(m) ? (enabledModes.length > 1 ? enabledModes.filter(x => x !== m) : enabledModes) : [...enabledModes, m]; setEnabledModes(next); saveEnabledModes(next); }} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} isAutoPlaying={isAutoPlaying} onToggleAutoPlay={() => setIsAutoPlaying(!isAutoPlaying)} onShowTutorial={() => setShowTutorial(true)} onResetProgress={() => { localStorage.clear(); window.location.reload(); }} categories={activeCategories} privacyOptionsRequired={privacyOptionsRequired} onShowPrivacyOptions={async () => { if (Capacitor.isNativePlatform()) await AdMob.showPrivacyOptionsForm().catch(() => {}); }} />}
        {showCategorySelector && <CategorySelectionOverlay isOpen={showCategorySelector} onClose={() => setShowCategorySelector(false)} selectedIds={customPoolIds} onToggle={(ids) => { setCustomPoolIds(ids); saveCustomPool(ids); }} />}
        {showStats && <StatsOverlay onClose={() => setShowStats(false)} />}
      </div>
    </ErrorBoundary>
  );
};
export default App;