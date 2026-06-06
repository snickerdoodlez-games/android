
import React, { useState, useEffect, ReactNode, ErrorInfo, Suspense, lazy, Component } from 'react';

import { GameMode, LevelSummary } from './types';
import { 
  getSavedLevel, 
  saveLevel, 
  updateStats, 
  getEnabledModes, 
  saveEnabledModes, 
  getCustomPool, 
  saveCustomPool, 
  getStats,
  getAutoPlay,
  saveAutoPlay
} from './services/storage';
import { getLevelPackage, getLevelMode, LevelPackage } from './services/levelContent';
import { audio } from './services/audioService';
import { Capacitor } from '@capacitor/core';
import { AdMob, BannerAdSize, BannerAdPosition, AdmobConsentStatus } from '@capacitor-community/admob';

// Static UI Components
import HowToPlay from './components/HowToPlay';
import LevelMenu from './components/LevelMenu';
import SettingsMenu from './components/SettingsMenu';
import StatsOverlay from './components/StatsOverlay';
import CategorySelectionOverlay from './components/CategorySelectionOverlay';
import Footer from './components/Footer';
import { AndroidStatusBar, AndroidNavigationBar } from './components/AndroidSystemBars';

// Lazy Loaded Levels
const Level1_Standard = lazy(() => import('./components/Level1_Standard'));
const Level1_Emoji = lazy(() => import('./components/Level1_Emoji'));
const Level2_Filter = lazy(() => import('./components/Level2_Filter'));
const Level5_Group = lazy(() => import('./components/Level5_Group'));
const Level7_Expansion = lazy(() => import('./components/Level7_Expansion'));
const Level7_Expansion_Easy = lazy(() => import('./components/Level7_Expansion_Easy'));
const Level7_Expansion_Medium = lazy(() => import('./components/Level7_Expansion_Medium'));
const Level8_Cascade = lazy(() => import('./components/Level8_Cascade'));
const Level_Themed = lazy(() => import('./components/Level_Themed'));

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
  } catch (e) { return 16; }
};

interface ErrorBoundaryProps { children?: ReactNode; }
interface ErrorBoundaryState { hasError: boolean; }

// fix: Use React.Component to ensure the 'props' property is correctly identified by TypeScript on the instance
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = { hasError: false };
  static getDerivedStateFromError(_: Error): ErrorBoundaryState { return { hasError: true }; }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) { console.error("Game crashed:", error, errorInfo); }
  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 text-center">
          <h1 className="text-3xl font-bold mb-4 font-oswald text-red-500 uppercase text-red-500">System Error</h1>
          <button onClick={() => window.location.reload()} className="px-6 py-3 bg-white text-black font-bold rounded-full uppercase font-oswald border-2 border-white">Reboot</button>
        </div>
      );
    }
    // fix: 'props' is a member of React.Component, explicitly typed via generics above
    return this.props.children;
  }
}

const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center h-full w-full bg-black">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
  </div>
);

export const App: React.FC = () => {
  const [mode, setMode] = useState<GameMode>(GameMode.MENU);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [levelIndex, setLevelIndex] = useState(1); 
  const [isMusicOn, setIsMusicOn] = useState(true); 
  const [showSettings, setShowSettings] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showCategorySelector, setShowCategorySelector] = useState(false);
  const [hintsEnabled, setHintsEnabled] = useState(true);
  const [activeCategories, setActiveCategories] = useState<{name: string, isSolved: boolean}[]>([]);
  const [isReviewing, setIsReviewing] = useState(false);
  const [currentSummary, setCurrentSummary] = useState<LevelSummary | null>(null);
  const [enabledModes, setEnabledModes] = useState<GameMode[]>([]);
  const [customPoolIds, setCustomPoolIds] = useState<string[]>([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [levelPackage, setLevelPackage] = useState<LevelPackage | null>(null);
  const [forcedMode, setForcedMode] = useState<GameMode | undefined>(undefined);
  const [privacyOptionsRequired, setPrivacyOptionsRequired] = useState(false);
  const [showDifficultyToast, setShowDifficultyToast] = useState(false);

  useEffect(() => {
    setLevelIndex(getSavedLevel());
    setEnabledModes(getEnabledModes());
    setCustomPoolIds(getCustomPool());
    setIsAutoPlaying(getAutoPlay());
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
        if (consentInfo.privacyOptionsRequirementStatus === 'REQUIRED') setPrivacyOptionsRequired(true);
        await AdMob.showBanner({
          adId: BANNER_AD_ID,
          adSize: BannerAdSize.BANNER,
          position: BannerAdPosition.BOTTOM_CENTER,
          margin: getSafeAreaBottom(),
          isTesting: false, 
        });
      } catch (e) { console.error("AdMob failed:", e); }
    };
    initializeAds();
  }, []);

  useEffect(() => {
    const pkg = getLevelPackage(levelIndex, enabledModes, customPoolIds, forcedMode);
    setLevelPackage(pkg);
  }, [levelIndex, enabledModes, customPoolIds, forcedMode]);

  // AUTO-START: When auto-play is enabled and we're on the menu, automatically begin playing
  useEffect(() => {
    if (isAutoPlaying && mode === GameMode.MENU && levelPackage) {
      const timer = setTimeout(() => {
        setMode(forcedMode || levelPackage.mode);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isAutoPlaying, mode, levelPackage, forcedMode]);

  useEffect(() => {
    if (isAutoPlaying && isReviewing) {
        const timer = setTimeout(() => { proceedToNextLevel(); }, 3000);
        return () => clearTimeout(timer);
    }
  }, [isAutoPlaying, isReviewing]);

  const handleLevelComplete = (stats: { timeMs: number, moves: number, solvedCategoryIds?: string[], solvedWords?: string[], failed?: boolean, mistakes?: number }) => {
    if (stats.failed) {
        setIsReviewing(true);
        setCurrentSummary({ 
          levelIndex, mode, timeMs: stats.timeMs, moves: stats.moves, mistakes: stats.mistakes || 0, score: 0, stars: 0, 
          difficulty: 0, solvedCategoryIds: [], solvedWords: [], broadCategories: [] 
        });
        return;
    }

    const timeInSeconds = stats.timeMs / 1000;
    let stars = 0;

    // Timer-based Star Logic (Background Timer)
    if (timeInSeconds <= 90) stars = 3;
    else if (timeInSeconds <= 120) stars = 2;
    else stars = 1;

    const wordsFoundCount = stats.solvedWords?.length || 0;
    const avgDifficulty = levelPackage?.data.reduce((acc, r) => acc + (r.difficulty || 1), 0) / (levelPackage?.data.length || 1);
    const masteryMultiplier = stars === 3 ? 1.5 : (stars === 2 ? 1.2 : 1.0);
    const finalScore = Math.floor((wordsFoundCount * avgDifficulty) * masteryMultiplier);

    setCurrentSummary({
        levelIndex, mode, timeMs: stats.timeMs, moves: stats.moves, mistakes: stats.mistakes || 0,
        score: finalScore, stars: stars, difficulty: avgDifficulty,
        solvedCategoryIds: stats.solvedCategoryIds || [],
        solvedWords: stats.solvedWords || [],
        broadCategories: levelPackage?.data.map(r => r.broadCategory || "General") || []
    });
    setIsReviewing(true);
  };

  const proceedToNextLevel = async () => {
    const starsBefore = getStats().totalStars;

    if (currentSummary && currentSummary.score > 0) {
        updateStats({ 
            levelsCompleted: 1, 
            totalMoves: currentSummary.moves, 
            totalTimeMs: currentSummary.timeMs,
            rowsSolved: currentSummary.solvedCategoryIds.length,
            solvedCategoryIds: currentSummary.solvedCategoryIds,
            solvedWords: currentSummary.solvedWords,
            totalScore: currentSummary.score,
            totalStars: currentSummary.stars,
            lastLevelStars: currentSummary.stars,
            lastLevelDifficulty: currentSummary.difficulty,
            lastLevelBroadCategories: currentSummary.broadCategories
        });
    }

    const starsAfter = getStats().totalStars;
    if ((starsBefore < 20 && starsAfter >= 20) || (starsBefore < 50 && starsAfter >= 50)) {
      setShowDifficultyToast(true);
      setTimeout(() => setShowDifficultyToast(false), 3500);
    }

    // Fire-and-forget: show interstitial without blocking the level transition
    if (Capacitor.isNativePlatform()) {
        AdMob.showInterstitial().catch(() => {});
        AdMob.prepareInterstitial({ adId: INTERSTITIAL_AD_ID, isTesting: false }).catch(() => {});
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
    if (showHowToPlay) {
      return <HowToPlay onStart={() => {
        setShowHowToPlay(false);
        setMode(forcedMode || (levelPackage ? levelPackage.mode : getLevelMode(levelIndex, enabledModes)));
      }} />;
    }
    if (mode === GameMode.MENU) {
      return <LevelMenu onStart={() => {
        if (levelIndex === 1) {
          setShowHowToPlay(true);
        } else {
          setMode(forcedMode || (levelPackage ? levelPackage.mode : getLevelMode(levelIndex, enabledModes)));
        }
      }} onSettings={() => setShowSettings(true)} onStats={() => setShowStats(true)} lastLevel={levelIndex} />;
    }
    if (!levelPackage || levelPackage.mode !== mode) return <LoadingFallback />;
    
    const { data, themeName } = levelPackage;

    // Compute derived data from levelPackage (small dataset, fast)
    const avgDiff = data.reduce((acc, row) => acc + (row.difficulty || 1), 0) / data.length;
    const catCounts: Record<string, number> = {};
    data.forEach(r => { 
      const c = r.broadCategory || "General";
      catCounts[c] = (catCounts[c] || 0) + 1; 
    });
    const mainCategory = Object.entries(catCounts).sort((a,b) => b[1] - a[1])[0][0];

    const totalStars = getStats().totalStars;
    const effectiveStars = (isReviewing && currentSummary) ? (totalStars - currentSummary.stars) : totalStars;
    const diffTier = effectiveStars < 20 ? 'easy' : (effectiveStars < 50 ? 'med' : 'hard');

    return (


      <Suspense fallback={<LoadingFallback />}>
        {(() => {
          switch (mode) {
            case GameMode.LEVEL_EXPANSION:
              if (effectiveStars < 20) {
                return <Level7_Expansion_Easy key={`exp-easy-${levelIndex}`} csvData={data} levelIndex={levelIndex} onComplete={handleLevelComplete} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={() => setShowSettings(true)} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} stars={currentSummary?.stars} />;
              } else if (effectiveStars < 50) {
                return <Level7_Expansion_Medium key={`exp-med-${levelIndex}`} csvData={data} levelIndex={levelIndex} onComplete={handleLevelComplete} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={() => setShowSettings(true)} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} stars={currentSummary?.stars} />;
              } else {
                return <Level7_Expansion key={`exp-hard-${levelIndex}`} csvData={data} levelIndex={levelIndex} onComplete={handleLevelComplete} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={() => setShowSettings(true)} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} stars={currentSummary?.stars} />;
              }
            
            case GameMode.LEVEL_THEME:
              return <Level_Themed key={`thm-${diffTier}-${levelIndex}`} csvData={data} mode={mode} levelIndex={levelIndex} difficulty={avgDiff} category={mainCategory} onComplete={handleLevelComplete} onExit={() => setMode(GameMode.MENU)} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={() => setShowSettings(true)} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} themeName={themeName} stars={currentSummary?.stars} />;
            
            case GameMode.CLASSIC:
            case GameMode.LEVEL_SYNONYMS:
              return <Level1_Standard key={`std-${diffTier}-${levelIndex}`} csvData={data} mode={mode} levelIndex={levelIndex} difficulty={avgDiff} category={mainCategory} onComplete={handleLevelComplete} onExit={() => setMode(GameMode.MENU)} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={() => setShowSettings(true)} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} themeName={themeName} stars={currentSummary?.stars} />;
            
            case GameMode.LEVEL_EMOJI:
              return <Level1_Emoji key={`emo-${diffTier}-${levelIndex}`} csvData={data} levelIndex={levelIndex} difficulty={avgDiff} category={mainCategory} onComplete={handleLevelComplete} onExit={() => setMode(GameMode.MENU)} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={() => setShowSettings(true)} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} stars={currentSummary?.stars} />;
            
            case GameMode.LEVEL_MIND_MATCH:
              return <Level5_Group key={`mm-${diffTier}-${levelIndex}`} csvData={data} levelIndex={levelIndex} difficulty={avgDiff} category={mainCategory} onComplete={handleLevelComplete} onExit={() => setMode(GameMode.MENU)} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={() => setShowSettings(true)} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} stars={currentSummary?.stars} />;
            
            case GameMode.LEVEL_CASCADE:
              return <Level8_Cascade key={`cas-${diffTier}-${levelIndex}`} csvData={data} levelIndex={levelIndex} difficulty={avgDiff} category={mainCategory} onComplete={handleLevelComplete} onExit={() => setMode(GameMode.MENU)} hintsEnabled={hintsEnabled} onOpenSettings={() => setShowSettings(true)} setHintsEnabled={setHintsEnabled} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} stars={currentSummary?.stars} />;
            
            default:
              return <Level2_Filter key={`filt-${diffTier}-${levelIndex}`} csvData={data} levelIndex={levelIndex} difficulty={avgDiff} category={mainCategory} onComplete={handleLevelComplete} onGameOver={() => handleLevelComplete({ timeMs: 0, moves: 0, failed: true })} onExit={() => setMode(GameMode.MENU)} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={() => setShowSettings(true)} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} stars={currentSummary?.stars} />;
          }
        })()}
      </Suspense>
    );
  };

  const totalStars = getStats().totalStars;

  return (
    <ErrorBoundary>
      <div className="fixed inset-0 h-full w-screen bg-black text-white font-oswald flex flex-col overflow-hidden">
        <AndroidStatusBar />
        {showDifficultyToast && (
          <div className="fixed inset-0 flex items-center justify-center z-[5000] pointer-events-none p-6">
            <div className="bg-black border-4 border-white px-10 py-8 rounded-3xl 
                            flex flex-col items-center justify-center text-center
                            animate-pop">
              
              {/* Word Pairing Logo */}
              <img src="/logo.svg" alt="Word Pairing" className="w-64 h-64 md:w-36 md:h-36 mb-4" />
              
              {/* Heading - Oswald, Big, Italicized */}
              <h2 className="text-[#04DEFB] font-black text-5xl md:text-6xl uppercase italic leading-none font-oswald tracking-tighter">
                {totalStars >= 50 ? "Mastery" : "Difficulty"}
                <br />
                <span className="text-[#FE8900] text-4xl md:text-5xl">Unlocked</span>
              </h2>
              
              {/* Subtext */}
              <div className="mt-6 bg-[#BED739] px-4 py-1 skew-x-[-12deg]">
                <p className="text-black font-black text-lg md:text-xl uppercase italic font-oswald skew-x-[12deg]">
                  {totalStars >= 50 ? "7-Row Grid Activated" : "Medium Mode Active"}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="flex-1 relative flex flex-col min-h-0 w-full overflow-hidden">
          {renderContent()}
        </div>
        <Footer />
        <AndroidNavigationBar />
        {showSettings && <SettingsMenu 
          isOpen={showSettings} onClose={() => setShowSettings(false)} 
          onMainMenu={() => { setForcedMode(undefined); setShowSettings(false); setMode(GameMode.MENU); }} 
          isMusicOn={isMusicOn} toggleMusic={() => { setIsMusicOn(!isMusicOn); audio.setSound(!isMusicOn); }} 
          enabledModes={enabledModes} 
          toggleMode={(m) => { let next = enabledModes.includes(m) ? (enabledModes.length > 1 ? enabledModes.filter(x => x !== m) : enabledModes) : [...enabledModes, m]; setEnabledModes(next); saveEnabledModes(next); }} 
          onSelectMode={(m) => { setForcedMode(m); setMode(m); setShowSettings(false); }} 
          hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} 
          isAutoPlaying={isAutoPlaying} onToggleAutoPlay={() => { const next = !isAutoPlaying; setIsAutoPlaying(next); saveAutoPlay(next); }}
          onResetProgress={() => { localStorage.clear(); window.location.reload(); }} 
          categories={activeCategories} privacyOptionsRequired={privacyOptionsRequired} 
          onShowPrivacyOptions={async () => { if (Capacitor.isNativePlatform()) await AdMob.showPrivacyOptionsForm().catch(() => {}); }} 
        />}
        {showCategorySelector && <CategorySelectionOverlay isOpen={showCategorySelector} onClose={() => setShowCategorySelector(false)} selectedIds={customPoolIds} onToggle={(ids) => { setCustomPoolIds(ids); saveCustomPool(ids); }} />}
        {showStats && <StatsOverlay onClose={() => setShowStats(false)} />}
      </div>
    </ErrorBoundary>
  );
};

export default App;
