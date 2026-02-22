import React, { useState, useEffect, ReactNode, ErrorInfo, Suspense, lazy, Component } from 'react';
import { GameMode, LevelSummary, LevelPackage, LevelCompleteStats } from './types.ts';
import {
  getSavedLevel,
  saveLevel,
  updateStats,
  getEnabledModes,
  saveEnabledModes,
  isTutorialSeen,
  markTutorialSeen,
  getCustomPool,
  saveCustomPool,
  getStats,
  syncFromCloud,
  resetAllProgress
} from './services/storage.ts';
import { getLevelPackage, getLevelMode } from './services/levelContent.ts';
import { audio } from './services/audioService.ts';
import { Capacitor } from '@capacitor/core';
import { auth, signInAnonymously } from './services/firebaseConfig.ts';

// Static UI Components
import LevelMenu from './components/LevelMenu.tsx';
import SettingsMenu from './components/SettingsMenu.tsx';
import StatsOverlay from './components/StatsOverlay.tsx';
import TutorialOverlay from './components/TutorialOverlay.tsx';
import CategorySelectionOverlay from './components/CategorySelectionOverlay.tsx';
import Footer from './components/Footer.tsx';
import { AndroidStatusBar, AndroidNavigationBar } from './components/AndroidSystemBars.tsx';

let lastAdTime = 0;

// Lazy Loaded Levels
const Level1_Standard = lazy(() => import('./components/Level1_Standard.tsx'));
const Level1_Emoji = lazy(() => import('./components/Level1_Emoji.tsx'));
const Level2_Filter = lazy(() => import('./components/Level2_Filter.tsx'));
const Level5_Group = lazy(() => import('./components/Level5_Group.tsx'));
const Level7_Expansion_Hard = lazy(() => import('./components/Level7_Expansion_Hard.tsx'));
const Level7_Expansion_Easy = lazy(() => import('./components/Level7_Expansion_Easy.tsx'));
const Level7_Expansion_Medium = lazy(() => import('./components/Level7_Expansion_Medium.tsx'));
const Level8_Cascade = lazy(() => import('./components/Level8_Cascade.tsx'));

const BANNER_AD_ID = 'ca-app-pub-4096368901415767/2019330695';

// Configuration constants replaced Remote Config
const AD_INTERVAL_MS = 10 * 60 * 1000;
const STARS_MEDIUM = 20;
const STARS_HARD = 50;

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

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = { hasError: false };
  public props: ErrorBoundaryProps;
  constructor(props: ErrorBoundaryProps) { super(props); this.props = props; }
  static getDerivedStateFromError(_: Error): ErrorBoundaryState { return { hasError: true }; }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) { console.error("Game crashed:", error, errorInfo); }
  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 text-center">
          <h1 className="text-3xl font-bold mb-4 font-oswald text-red-500 uppercase">System Error</h1>
          <button onClick={() => window.location.reload()} className="px-6 py-3 bg-white text-black font-bold rounded-full uppercase font-oswald border-2 border-white">Reboot</button>
        </div>
      );
    }
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
  const [levelIndex, setLevelIndex] = useState(1);
  const [isMusicOn, setIsMusicOn] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showCategorySelector, setShowCategorySelector] = useState(false);
  const [hintsEnabled, setHintsEnabled] = useState(true);
  const [showTutorial, setShowTutorial] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const [currentSummary, setCurrentSummary] = useState<LevelSummary | null>(null);
  const [enabledModes, setEnabledModes] = useState<GameMode[]>([]);
  const [customPoolIds, setCustomPoolIds] = useState<string[]>([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [levelPackage, setLevelPackage] = useState<LevelPackage | null>(null);
  const [forcedMode, setForcedMode] = useState<GameMode | undefined>(undefined);
  const [difficultyOverride, setDifficultyOverride] = useState<'easy' | 'medium' | 'hard' | undefined>(undefined);
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(() => setFontsReady(true)).catch(() => setFontsReady(true));
    } else { setFontsReady(true); }
  }, []);

  useEffect(() => {
    setLevelIndex(getSavedLevel());
    setEnabledModes(getEnabledModes());
    setCustomPoolIds(getCustomPool());

    const initializeCloudData = async () => {
      try {
        await signInAnonymously(auth);
        await syncFromCloud();
        setLevelIndex(getSavedLevel());
        setEnabledModes(getEnabledModes());
      } catch (error) {
        console.error("Firebase init error:", error);
      }
    };

    initializeCloudData();
  }, []);

  useEffect(() => {
    const initializeServices = async () => {
      if (!Capacitor.isNativePlatform()) return;
      try {
        const { AdMob, AdmobConsentStatus, BannerAdSize, BannerAdPosition } = await import('@capacitor-community/admob');
        await AdMob.initialize({});
        const consentInfo = await AdMob.requestConsentInfo();
        if (consentInfo.status === AdmobConsentStatus.REQUIRED) { await AdMob.showConsentForm(); }
        await AdMob.showBanner({ adId: BANNER_AD_ID, adSize: BannerAdSize.BANNER, position: BannerAdPosition.BOTTOM_CENTER, margin: getSafeAreaBottom() });
      } catch (e) { console.warn("Native services init failed:", e); }
    };
    initializeServices();
  }, []);

  useEffect(() => {
    if (!fontsReady) return;

    const stats = getStats();
    const autoTier = stats.totalStars < STARS_MEDIUM ? 'easy' : (stats.totalStars < STARS_HARD ? 'medium' : 'hard');
    const tier = difficultyOverride || autoTier;

    const pkg = getLevelPackage(levelIndex, enabledModes, customPoolIds, forcedMode, tier);
    setLevelPackage(pkg);
  }, [fontsReady, levelIndex, enabledModes, customPoolIds, forcedMode, difficultyOverride]);

  useEffect(() => { if (mode !== GameMode.MENU && !isTutorialSeen()) setShowTutorial(true); }, [mode]);

  useEffect(() => {
    if (isAutoPlaying && isReviewing) {
      const timer = setTimeout(() => { proceedToNextLevel(); }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isAutoPlaying, isReviewing]);

  const handleLevelComplete = (stats: LevelCompleteStats) => {
    if (stats.failed) {
      setIsReviewing(true);
      setCurrentSummary({ levelIndex, mode, timeMs: stats.timeMs, moves: stats.moves, mistakes: stats.mistakes || 0, score: 0, stars: 0, difficulty: 0, solvedCategoryIds: [], solvedWords: [], broadCategories: [] });
      return;
    }
    const timeInSeconds = stats.timeMs / 1000;
    let stars = 0;
    if (timeInSeconds <= 90) stars = 3; else if (timeInSeconds <= 120) stars = 2; else stars = 1;
    const wordsFoundCount = stats.solvedWords?.length || 0;
    const avgDifficulty = (levelPackage?.data?.reduce((acc, r) => acc + (r.difficulty || 1), 0) || 0) / (levelPackage?.data?.length || 1);
    const finalScore = Math.floor((wordsFoundCount * avgDifficulty) * (stars === 3 ? 1.5 : (stars === 2 ? 1.2 : 1.0)));
    setCurrentSummary({ levelIndex, mode, timeMs: stats.timeMs, moves: stats.moves, mistakes: stats.mistakes || 0, score: finalScore, stars: stars, difficulty: avgDifficulty, solvedCategoryIds: stats.solvedCategoryIds || [], solvedWords: stats.solvedWords || [], broadCategories: levelPackage?.data?.map(r => r.broadCategory || "General") || [] });
    setIsReviewing(true);
  };

  const proceedToNextLevel = async () => {
    if (currentSummary && currentSummary.score > 0) {
      updateStats({ levelsCompleted: 1, totalMoves: currentSummary.moves, totalTimeMs: currentSummary.timeMs, rowsSolved: currentSummary.solvedCategoryIds.length, solvedCategoryIds: currentSummary.solvedCategoryIds, solvedWords: currentSummary.solvedWords, totalScore: currentSummary.score, totalStars: currentSummary.stars, lastLevelStars: currentSummary.stars, lastLevelDifficulty: currentSummary.difficulty, lastLevelBroadCategories: currentSummary.broadCategories });
    }
    if (Capacitor.isNativePlatform()) {
      try {
        const { AdMob } = await import('@capacitor-community/admob');
        const currentTime = Date.now();
        if (currentTime - lastAdTime >= AD_INTERVAL_MS) { await AdMob.showInterstitial().catch(() => { }); lastAdTime = Date.now(); }
      } catch (e) { }
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
    const totalStars = getStats().totalStars;
    if (mode === GameMode.MENU) return <LevelMenu onStart={(d) => { setDifficultyOverride(d); setIsReviewing(false); setMode(forcedMode || (levelPackage ? levelPackage.mode : getLevelMode(levelIndex, enabledModes))); }} onSettings={() => setShowSettings(true)} onStats={() => setShowStats(true)} lastLevel={levelIndex} totalStars={totalStars} starsMedium={STARS_MEDIUM} starsHard={STARS_HARD} />;

    if (!fontsReady || !levelPackage || levelPackage.mode !== mode || !levelPackage.data || !Array.isArray(levelPackage.data) || levelPackage.data.length === 0) {
      return <LoadingFallback />;
    }

    const cumulativeStars = totalStars + (isReviewing && currentSummary ? currentSummary.stars : 0);
    let diffTier = totalStars < STARS_MEDIUM ? 'easy' : (totalStars < STARS_HARD ? 'medium' : 'hard');
    if (difficultyOverride) diffTier = difficultyOverride;

    const commonProps = {
      csvData: levelPackage.data,
      levelIndex,
      difficulty: levelPackage.data.reduce((a, r) => a + (r.difficulty || 1), 0) / (levelPackage.data.length || 1),
      category: levelPackage.data?.[0]?.broadCategory || "General",
      onComplete: handleLevelComplete,
      hintsEnabled,
      setHintsEnabled,
      onOpenSettings: () => setShowSettings(true),
      isReviewing,
      onNext: proceedToNextLevel,
      isAutoPlaying,
      stars: cumulativeStars,
      definitions: levelPackage.definitions,
      themeName: levelPackage.themeName
    };

    return (
      <Suspense fallback={<LoadingFallback />}>
        {(() => {
          switch (mode) {
            case GameMode.LEVEL_EXPANSION:
              if (diffTier === 'easy') return <Level7_Expansion_Easy key={`exp-e-${levelIndex}`} {...commonProps} />;
              if (diffTier === 'medium') return <Level7_Expansion_Medium key={`exp-m-${levelIndex}`} {...commonProps} />;
              return <Level7_Expansion_Hard key={`exp-h-${levelIndex}`} {...commonProps} />;
            case GameMode.CLASSIC:
            case GameMode.LEVEL_THEMED:
            case GameMode.LEVEL_SYNONYMS:
              return <Level1_Standard key={`std-${levelIndex}`} {...commonProps} mode={mode} />;
            case GameMode.LEVEL_EMOJI:
              return <Level1_Emoji key={`emo-${levelIndex}`} {...commonProps} />;
            case GameMode.LEVEL_MIND_MATCH:
              return <Level5_Group key={`mm-${levelIndex}`} {...commonProps} />;
            case GameMode.LEVEL_CASCADE:
              return <Level8_Cascade key={`cas-${levelIndex}`} {...commonProps} onExit={() => setMode(GameMode.MENU)} />;
            default:
              return <Level2_Filter key={`filt-${levelIndex}`} {...commonProps} onGameOver={() => handleLevelComplete({ timeMs: 0, moves: 0, failed: true })} onExit={() => setMode(GameMode.MENU)} />;
          }
        })()}
      </Suspense>
    );
  };

  return (
    <ErrorBoundary>
      <div className="fixed inset-0 h-full w-screen bg-black text-white font-oswald flex flex-col overflow-hidden">
        <AndroidStatusBar />
        <div className="flex-1 relative flex flex-col min-h-0 w-full overflow-hidden">
          {renderContent()}
          {showTutorial && <TutorialOverlay mode={mode} onComplete={() => { markTutorialSeen(); setShowTutorial(false); }} />}
        </div>
        <Footer showRainbowLine={mode === GameMode.MENU} />
        <AndroidNavigationBar />
        {showSettings && (
          <SettingsMenu
            isOpen={showSettings}
            onClose={() => setShowSettings(false)}
            onMainMenu={() => { setForcedMode(undefined); setDifficultyOverride(undefined); setIsReviewing(false); setCurrentSummary(null); setShowSettings(false); setMode(GameMode.MENU); }}
            isMusicOn={isMusicOn}
            toggleMusic={() => { const ns = !isMusicOn; setIsMusicOn(ns); audio.setSound(ns); }}
            enabledModes={enabledModes}
            toggleMode={(m) => { const next = enabledModes.includes(m) ? (enabledModes.length > 1 ? enabledModes.filter(x => x !== m) : enabledModes) : [...enabledModes, m]; setEnabledModes(next); saveEnabledModes(next); }}
            onSelectMode={(m) => { setForcedMode(m); setMode(m); setShowSettings(false); }}
            hintsEnabled={hintsEnabled}
            setHintsEnabled={setHintsEnabled}
            isAutoPlaying={isAutoPlaying}
            onToggleAutoPlay={() => setIsAutoPlaying(!isAutoPlaying)}
            onShowTutorial={() => setShowTutorial(true)}
            onResetProgress={async () => {

              await resetAllProgress();
              setLevelIndex(1);
              setMode(GameMode.MENU);
              setIsReviewing(false);
              setCurrentSummary(null);
              setEnabledModes([]);
              setCustomPoolIds([]);
              setIsAutoPlaying(false);
              setLevelPackage(null);
              setForcedMode(undefined);
              setDifficultyOverride(undefined);
              setTimeout(() => window.location.href = window.location.pathname, 100);
            }}
          />
        )}
        {showCategorySelector && <CategorySelectionOverlay isOpen={showCategorySelector} onClose={() => setShowCategorySelector(false)} selectedIds={customPoolIds} onToggle={(ids) => { setCustomPoolIds(ids); saveCustomPool(ids); }} />}
        {showStats && <StatsOverlay onClose={() => setShowStats(false)} />}
      </div>
    </ErrorBoundary>
  );
};

export default App;