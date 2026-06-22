import React, { useState, useEffect, useRef, ReactNode, ErrorInfo, Suspense, lazy, Component, useCallback } from 'react';
import { createPortal } from 'react-dom';

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
  saveAutoPlay,
  saveAppState,
  getAppState,
  clearAppState,
  getTimeSinceLastActive,
  updateLastActiveTimestamp,
  getSelectedDifficulty,
  saveSelectedDifficulty,
  DifficultyLevel
} from './services/storage';
import { getLevelPackage, getLevelMode, LevelPackage } from './services/levelContent';
import { audio } from './services/audioService';
import { Capacitor } from '@capacitor/core';
import { 
  getPowerManagementStatus, 
  monitorPowerState, 
  shouldThrottleForBattery,
  PowerManagementState
} from './plugins/powerManagement';
import { AdMob, BannerAdSize, BannerAdPosition, AdmobConsentStatus } from '@capacitor-community/admob';
import { ensureDataInitialized, waitForDataInit } from './services/csvData';
import { waitForSynonymDataInit } from './services/synonymData';
import { getAvailableHints, useHint as useHintService, addHints, checkAndAwardStarHint } from './services/hintService';
import { isTestLabRun, writeTestLabResults } from './plugins/testLab';

// Kick off async CSV data initialization immediately to minimize wait time
ensureDataInitialized();

// Static UI Components
import HowToPlay from './components/HowToPlay';
import LevelMenu from './components/LevelMenu';
import SettingsMenu from './components/SettingsMenu';
import StatsOverlay from './components/StatsOverlay';
import CategorySelectionOverlay from './components/CategorySelectionOverlay';
import Footer from './components/Footer';
import HintAdOverlay from './components/HintAdOverlay';
import { AndroidStatusBar, AndroidNavigationBar } from './components/AndroidSystemBars';
import WindowSizeClassProvider from './components/WindowSizeClassProvider';
import { ThemeProvider, useTheme } from './components/ThemeContext';


// Lazy Loaded Levels
const Level1_Standard = lazy(() => import('./components/Level1_Standard'));
const Level1_Emoji = lazy(() => import('./components/Level1_Emoji'));
const Level2_Filter = lazy(() => import('./components/Level2_Filter'));
const Level5_Group = lazy(() => import('./components/Level5_Group'));
const Level7_Expansion = lazy(() => import('./components/Level7_Expansion'));
const Level7_Expansion_Easy = lazy(() => import('./components/Level7_Expansion_Easy'));
const Level7_Expansion_Medium = lazy(() => import('./components/Level7_Expansion_Medium'));
const LevelExpansionTest = lazy(() => import('./components/LevelExpansionTest'));
const LevelExpansionTest_Easy = lazy(() => import('./components/LevelExpansionTest_Easy'));
const LevelExpansionTest_Medium = lazy(() => import('./components/LevelExpansionTest_Medium'));
const Level8_Cascade = lazy(() => import('./components/Level8_Cascade'));
const BANNER_AD_ID = 'ca-app-pub-4096368901415767/2019330695';
const INTERSTITIAL_AD_ID = 'ca-app-pub-4096368901415767/1153913539';
const REWARDED_AD_ID = 'ca-app-pub-4096368901415767/2572185411';

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
          <button onClick={() => window.location.reload()} className="px-6 py-3 min-h-[48px] bg-white text-black font-bold rounded-full uppercase font-oswald border-2 border-white" aria-label="Reboot the application">Reboot</button>
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
  const [layoutReady, setLayoutReady] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
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

  const [levelPackage, setLevelPackage] = useState<LevelPackage | null>(null);
  const [forcedMode, setForcedMode] = useState<GameMode | undefined>(undefined);
  const [privacyOptionsRequired, setPrivacyOptionsRequired] = useState(false);
  const [showDifficultyToast, setShowDifficultyToast] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | undefined>(getSelectedDifficulty);
  const [hintCount, setHintCount] = useState(getAvailableHints);
  const [showHintAd, setShowHintAd] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isAdLoading, setIsAdLoading] = useState(false);


  // Layout dimension validation guard: prevent rendering game content
  // until the parent viewport has been measured with non-zero dimensions.
  // This prevents the HardwareRenderer "canvas dimensions must be greater
  // than 0x0" error that occurs when the native view tree hasn't completed
  // its first onMeasure pass before the WebView renders game surfaces.
  useEffect(() => {
    let attempts = 0;
    const MAX_ATTEMPTS = 50; // 500ms max wait

    const checkLayout = () => {
      const el = rootRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setLayoutReady(true);
          return;
        }
      }
      // Also check document body as fallback for WebView measurement
      const bodyW = document.body?.clientWidth ?? 0;
      const bodyH = document.body?.clientHeight ?? 0;
      if (bodyW > 0 && bodyH > 0) {
        setLayoutReady(true);
        return;
      }
      attempts++;
      if (attempts >= MAX_ATTEMPTS) {
        // Timeout: render anyway to avoid infinite loading
        setLayoutReady(true);
        return;
      }
      requestAnimationFrame(checkLayout);
    };

    requestAnimationFrame(checkLayout);
  }, []);

  // On initial load, restore game progress but ALWAYS start at MENU
  // (never auto-navigate into a level without user action)
  useEffect(() => {
    const savedState = getAppState();
    const timeSinceLastActive = getTimeSinceLastActive();
    const FIVE_MINUTES_MS = 5 * 60 * 1000;

    if (savedState && timeSinceLastActive < FIVE_MINUTES_MS) {
      // Restore progress data but always start at MENU
      setLevelIndex(savedState.levelIndex);
      setHintsEnabled(savedState.hintsEnabled);
      setIsAutoPlaying(savedState.isAutoPlaying);
      setIsMusicOn(savedState.isMusicOn);
      // Never restore game mode - always start at MENU
      setMode(GameMode.MENU);
      if (savedState.isReviewing) {
        setIsReviewing(true);
      }
      clearAppState();
    } else if (savedState && timeSinceLastActive >= FIVE_MINUTES_MS) {
      // Longer time away — restore game progress but start from menu/home
      setLevelIndex(savedState.levelIndex);
      setHintsEnabled(savedState.hintsEnabled);
      setIsAutoPlaying(savedState.isAutoPlaying);
      setIsMusicOn(savedState.isMusicOn);
      setMode(GameMode.MENU);
      clearAppState();
    } else {
      // No saved state — normal initial load
      setLevelIndex(getSavedLevel());
      setHintsEnabled(true);
      setIsAutoPlaying(getAutoPlay());
    }

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

  // Power Management: Monitor Doze, App Standby, and battery state
  useEffect(() => {
    let cleanup: (() => void) | null = null;

    const initPowerManagement = async () => {
      try {
        // Initial power status check
        const status = await getPowerManagementStatus();
        if (status.isIgnoringBatteryOptimizations === false) {
          // App is not whitelisted from battery optimizations — log for awareness
          console.warn('PowerManagement: App not whitelisted from battery optimizations');
        }
        if (status.isDeviceIdleMode) {
          console.info('PowerManagement: Device is in Doze/idle mode');
        }
        if (status.isPowerSaveMode) {
          console.info('PowerManagement: Device is in power save mode');
        }

        // Monitor power state changes (30s polling)
        cleanup = monitorPowerState((state: PowerManagementState) => {
          if (state.isDeviceIdleMode) {
            // Device entered Doze — pause non-critical operations
            // The visibilitychange handler already saves state
          }
          if (shouldThrottleForBattery(state.batteryLevel, state.isCharging, state.isPowerSaveMode)) {
            // Battery low and not charging, or power save mode active
            // Throttle non-essential game timers / animations
            if (!state.isCharging && state.batteryLevel >= 0 && state.batteryLevel < 0.15) {
              console.info('PowerManagement: Low battery — throttling non-essential operations');
            }
          }
        });
      } catch (e) {
        // Power management not available (non-native or unsupported)
        console.debug('PowerManagement: Not available on this platform');
      }
    };

    initPowerManagement();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const loadPackage = async () => {
      // Wait for all CSV data to finish loading before
      // computing the level package, so we don't serve FALLBACK_DATA.
      await waitForDataInit();
      await waitForSynonymDataInit();
      if (cancelled) return;
      const pkg = getLevelPackage(levelIndex, enabledModes, customPoolIds, forcedMode, selectedDifficulty);
      setLevelPackage(pkg);
    };
    loadPackage();
    return () => { cancelled = true; };
  }, [levelIndex, enabledModes, customPoolIds, forcedMode, selectedDifficulty]);

  // Save app state when the user navigates away from the app (background/foreground)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // App is going to background — save state for restoration
        updateLastActiveTimestamp();
        saveAppState({
          mode: mode,
          levelIndex: levelIndex,
          isReviewing: isReviewing,
          isAutoPlaying: isAutoPlaying,
          hintsEnabled: hintsEnabled,
          isMusicOn: isMusicOn,
          showHowToPlay: showHowToPlay,
          timestamp: Date.now()
        });
      } else if (document.visibilityState === 'visible') {
        // App returned to foreground — update timestamp
        updateLastActiveTimestamp();
      }
    };

    // Also save on page hide (covers mobile browser/WebView tab switching)
    const handlePageHide = () => {
      updateLastActiveTimestamp();
      saveAppState({
        mode: mode,
        levelIndex: levelIndex,
        isReviewing: isReviewing,
        isAutoPlaying: isAutoPlaying,
        hintsEnabled: hintsEnabled,
        isMusicOn: isMusicOn,
        showHowToPlay: showHowToPlay,
        timestamp: Date.now()
      });
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, [mode, levelIndex, isReviewing, isAutoPlaying, hintsEnabled, isMusicOn, showHowToPlay]);

  // Auto-advance from review/success screen only - never skip the main menu
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
    const dataArr = levelPackage?.data;
    const avgDifficulty = dataArr 
      ? dataArr.reduce((acc, r) => acc + (r.difficulty || 1), 0) / dataArr.length 
      : 0;
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
    
    // Firebase Test Lab: Write test results after level completion
    writeTestLabResults({
      status: 'passed',
      score: finalScore,
      stars,
      timeMs: stats.timeMs,
      moves: stats.moves,
      levelIndex,
      mode,
      solvedWords: stats.solvedWords || [],
      solvedCategoryIds: stats.solvedCategoryIds || [],
    });
  };

  // Firebase Test Lab: Check if launched in test mode and report ready state
  React.useEffect(() => {
    const checkTestLab = async () => {
      const isLab = await isTestLabRun();
      if (isLab) {
        console.info('TestLab: Running in Firebase Test Lab mode');
      }
    };
    checkTestLab();
  }, []);

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
    
    // Check for star-based hint rewards (every 30 stars)
    checkAndAwardStarHint(starsAfter);
    setHintCount(getAvailableHints());
    
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
      }} onSettings={() => setShowSettings(true)} onStats={() => setShowStats(true)} lastLevel={levelIndex} selectedDifficulty={selectedDifficulty} unlockedDifficulties={unlockedDifficulties} onDifficultyChange={handleDifficultyChange} />;
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

    // Hints are disabled when: toggle is off
    const hintsBlocked = !hintsEnabled;

    const totalStars = getStats().totalStars;
    const effectiveStars = (isReviewing && currentSummary) ? (totalStars - currentSummary.stars) : totalStars;
    // Use user-selected difficulty for Expansion variant + component keys; fall back to star-based if not selected
    const diffTier = selectedDifficulty || (effectiveStars < 20 ? 'easy' : (effectiveStars < 50 ? 'med' : 'hard'));
    const expTier = selectedDifficulty || (effectiveStars < 20 ? 'easy' : (effectiveStars < 50 ? 'medium' : 'hard'));

    return (


      <Suspense fallback={<LoadingFallback />}>
        {(() => {
          switch (mode) {
            case GameMode.LEVEL_EXPANSION:
              if (expTier === 'easy') {
                return <Level7_Expansion_Easy key={`exp-easy-${levelIndex}-${diffTier}`} csvData={data} levelIndex={levelIndex} onComplete={handleLevelComplete} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={() => setShowSettings(true)} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} stars={currentSummary?.stars} hintCount={hintCount} onHintClick={handleHintClick} hintsDisabledForLevel={hintsBlocked} />;
              } else if (expTier === 'medium') {
                return <Level7_Expansion_Medium key={`exp-med-${levelIndex}-${diffTier}`} csvData={data} levelIndex={levelIndex} onComplete={handleLevelComplete} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={() => setShowSettings(true)} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} stars={currentSummary?.stars} hintCount={hintCount} onHintClick={handleHintClick} hintsDisabledForLevel={hintsBlocked} />;
              } else {
                return <Level7_Expansion key={`exp-hard-${levelIndex}-${diffTier}`} csvData={data} levelIndex={levelIndex} onComplete={handleLevelComplete} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={() => setShowSettings(true)} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} stars={currentSummary?.stars} hintCount={hintCount} onHintClick={handleHintClick} hintsDisabledForLevel={hintsBlocked} />;
              }
            
            case GameMode.LEVEL_EXPANSION_TEST:
              if (expTier === 'easy') {
                return <LevelExpansionTest_Easy key={`exptest-easy-${levelIndex}-${diffTier}`} csvData={data} levelIndex={levelIndex} onComplete={handleLevelComplete} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={() => setShowSettings(true)} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} stars={currentSummary?.stars} hintCount={hintCount} onHintClick={handleHintClick} hintsDisabledForLevel={hintsBlocked} />;
              } else if (expTier === 'medium') {
                return <LevelExpansionTest_Medium key={`exptest-med-${levelIndex}-${diffTier}`} csvData={data} levelIndex={levelIndex} onComplete={handleLevelComplete} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={() => setShowSettings(true)} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} stars={currentSummary?.stars} hintCount={hintCount} onHintClick={handleHintClick} hintsDisabledForLevel={hintsBlocked} />;
              } else {
                return <LevelExpansionTest key={`exptest-hard-${levelIndex}-${diffTier}`} csvData={data} levelIndex={levelIndex} onComplete={handleLevelComplete} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={() => setShowSettings(true)} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} stars={currentSummary?.stars} hintCount={hintCount} onHintClick={handleHintClick} hintsDisabledForLevel={hintsBlocked} />;
              }
            
            case GameMode.CLASSIC:
            case GameMode.LEVEL_SYNONYMS:
              return <Level1_Standard key={`std-${diffTier}-${levelIndex}`} csvData={data} mode={mode} levelIndex={levelIndex} difficulty={avgDiff} category={mainCategory} onComplete={handleLevelComplete} onExit={() => setMode(GameMode.MENU)} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={() => setShowSettings(true)} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} themeName={themeName} stars={currentSummary?.stars} hintCount={hintCount} onHintClick={handleHintClick} hintsDisabledForLevel={hintsBlocked} />;
            
            case GameMode.LEVEL_EMOJI:
              return <Level1_Emoji key={`emo-${diffTier}-${levelIndex}`} csvData={data} levelIndex={levelIndex} difficulty={avgDiff} category={mainCategory} onComplete={handleLevelComplete} onExit={() => setMode(GameMode.MENU)} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={() => setShowSettings(true)} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} stars={currentSummary?.stars} hintCount={hintCount} onHintClick={handleHintClick} hintsDisabledForLevel={hintsBlocked} />;
            
            case GameMode.LEVEL_MIND_MATCH:
              return <Level5_Group key={`mm-${diffTier}-${levelIndex}`} csvData={data} levelIndex={levelIndex} difficulty={avgDiff} category={mainCategory} onComplete={handleLevelComplete} onExit={() => setMode(GameMode.MENU)} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={() => setShowSettings(true)} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} stars={currentSummary?.stars} hintCount={hintCount} onHintClick={handleHintClick} hintsDisabledForLevel={hintsBlocked} />;
            
            case GameMode.LEVEL_CASCADE:
              return <Level8_Cascade key={`cas-${diffTier}-${levelIndex}`} csvData={data} levelIndex={levelIndex} difficulty={avgDiff} category={mainCategory} onComplete={handleLevelComplete} onExit={() => setMode(GameMode.MENU)} hintsEnabled={hintsEnabled} onOpenSettings={() => setShowSettings(true)} setHintsEnabled={setHintsEnabled} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} stars={currentSummary?.stars} hintCount={hintCount} onHintClick={handleHintClick} hintsDisabledForLevel={hintsBlocked} />;
            
            default:
              return <Level2_Filter key={`filt-${diffTier}-${levelIndex}`} csvData={data} levelIndex={levelIndex} difficulty={avgDiff} category={mainCategory} onComplete={handleLevelComplete} onGameOver={() => handleLevelComplete({ timeMs: 0, moves: 0, failed: true })} onExit={() => setMode(GameMode.MENU)} hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={() => setShowSettings(true)} isReviewing={isReviewing} onNext={proceedToNextLevel} isAutoPlaying={isAutoPlaying} stars={currentSummary?.stars} hintCount={hintCount} onHintClick={handleHintClick} hintsDisabledForLevel={hintsBlocked} />;
          }
        })()}
      </Suspense>
    );
  };

  const totalStars = getStats().totalStars;

  // Compute which difficulties are unlocked based on total stars
  // Easy is always available. Medium unlocks at 20+ stars. Hard unlocks at 50+ stars.
  const unlockedDifficulties: DifficultyLevel[] = ['easy'];
  if (totalStars >= 20) unlockedDifficulties.push('medium');
  if (totalStars >= 50) unlockedDifficulties.push('hard');

  const handleDifficultyChange = (diff: DifficultyLevel) => {
    setSelectedDifficulty(diff);
    saveSelectedDifficulty(diff);
  };

  // Hint system handlers
  // Two-step flow: click dispatches hint-used, level component applies the hint
  // and dispatches hint-applied only on success, then we decrement the counter.
  // No per-level limit — users can use as many hints as they have available.
  const handleHintClick = () => {
    if (isReviewing) return;
    if (!hintsEnabled) {
      // Hints are turned off — show the HintAdOverlay to watch for hints
      setShowHintAd(true);
      return;
    }
    const current = getAvailableHints();
    if (current > 0) {
      // Hints available — dispatch hint-use event
      window.dispatchEvent(new CustomEvent('hint-used'));
    } else {
      // Out of hints — show HintAdOverlay to watch for more hints
      setShowHintAd(true);
    }
  };

  useEffect(() => {
    const handler = () => {
      const current = getAvailableHints();
      if (current > 0) {
        const next = useHintService();
        setHintCount(next);
        audio.playHint();
      }
    };
    window.addEventListener('hint-applied', handler);
    return () => window.removeEventListener('hint-applied', handler);
  }, [levelIndex]);

  // Guard to prevent concurrent rewarded ad requests
  const adInFlightRef = useRef(false);

  // Pre-load the rewarded ad when hints run out so the first tap is instant
  const preloadRewardedAd = React.useCallback(async () => {
    if (!Capacitor.isNativePlatform() || adInFlightRef.current) return;
    try {
      await AdMob.prepareRewardVideoAd({ adId: REWARDED_AD_ID, isTesting: false });
    } catch (_) {
      // Pre-load is best-effort; handleWatchAd will retry on tap
    }
  }, []);

  // Auto-preload the rewarded ad when hint count hits 0
  useEffect(() => {
    if (hintCount === 0) {
      preloadRewardedAd();
    }
  }, [hintCount, preloadRewardedAd]);

  const handleWatchAd = async () => {
    if (isReviewing || adInFlightRef.current) return;
    adInFlightRef.current = true;

    if (!Capacitor.isNativePlatform()) {
      // Non-native: simulate ad reward immediately
      const next = addHints(3);
      setHintCount(next);
      adInFlightRef.current = false;
      return;
    }

    // Show loading overlay immediately
    setIsAdLoading(true);

    // Listen for the reward event BEFORE showing the ad
    const rewardHandler = AdMob.addListener('onRewardedVideoAdReward', () => {
      const next = addHints(3);
      setHintCount(next);
      adInFlightRef.current = false;
      setIsAdLoading(false);
      rewardHandler.then(h => h.remove()).catch(() => {});
    });

    // Listen for dismiss (user closed without reward)
    const dismissHandler = AdMob.addListener('onRewardedVideoAdDismissed', () => {
      adInFlightRef.current = false;
      setIsAdLoading(false);
      dismissHandler.then(h => h.remove()).catch(() => {});
      rewardHandler.then(h => h.remove()).catch(() => {});
    });

    // Prepare + show in one go (ad may already be pre-loaded from preloadRewardedAd)
    try {
      await AdMob.prepareRewardVideoAd({ adId: REWARDED_AD_ID, isTesting: false });
    } catch (_) {
      // Already prepared or failed — try showing anyway
    }

    try {
      await AdMob.showRewardVideoAd();
    } catch (showErr) {
      console.warn('Rewarded ad failed to show:', showErr);
      adInFlightRef.current = false;
      dismissHandler.then(h => h.remove()).catch(() => {});
      rewardHandler.then(h => h.remove()).catch(() => {});
    }
  };

  return (
    <ThemeProvider>
    <ErrorBoundary>
      <WindowSizeClassProvider>
      <div ref={rootRef} className="fixed inset-0 h-full w-screen bg-black text-white font-oswald flex flex-col overflow-hidden" style={{ minWidth: '1px', minHeight: '1px' }}>

        <AndroidStatusBar />
        {showDifficultyToast && createPortal(
          <div className="fixed inset-0 flex items-center justify-center z-[5000] pointer-events-none p-6">
            <div className="bg-black border-4 border-white px-10 py-8 rounded-3xl 
                            flex flex-col items-center justify-center text-center
                            animate-pop">
              <img src="/logo.svg" alt="Word Pairing" className="w-64 h-64 md:w-36 md:h-36 mb-4" />
              <h2 className="text-[#04DEFB] font-black text-5xl md:text-6xl uppercase italic leading-none font-oswald tracking-tighter">
                {totalStars >= 50 ? "Mastery" : "Difficulty"}
                <br />
                <span className="text-[#FE8900] text-4xl md:text-5xl">Unlocked</span>
              </h2>
              <div className="mt-6 bg-[#BED739] px-4 py-1 skew-x-[-12deg]">
                <p className="text-black font-black text-lg md:text-xl uppercase italic font-oswald skew-x-[12deg]">
                  {totalStars >= 50 ? "7-Row Grid Activated" : "Medium Mode Active"}
                </p>
              </div>
            </div>
          </div>,
          document.body
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
          isAutoPlaying={isAutoPlaying} toggleAutoPlay={() => { setIsAutoPlaying(prev => { const next = !prev; saveAutoPlay(next); return next; }); }}
          onResetProgress={() => { localStorage.clear(); window.location.reload(); }} 
          categories={activeCategories} privacyOptionsRequired={privacyOptionsRequired} 
          onShowPrivacyOptions={async () => { if (Capacitor.isNativePlatform()) await AdMob.showPrivacyOptionsForm().catch(() => {}); }}
          selectedDifficulty={selectedDifficulty}
          unlockedDifficulties={unlockedDifficulties}
          onDifficultyChange={handleDifficultyChange}
        />}
        {showCategorySelector && <CategorySelectionOverlay isOpen={showCategorySelector} onClose={() => setShowCategorySelector(false)} selectedIds={customPoolIds} onToggle={(ids) => { setCustomPoolIds(ids); saveCustomPool(ids); }} />}
        {showStats && <StatsOverlay onClose={() => setShowStats(false)} />}
        {/* Ad Loading Overlay */}
        {isAdLoading && createPortal(
          <div className="fixed inset-0 z-[5000] flex items-center justify-center bg-black/80">
            <div className="bg-black border-2 border-white rounded-large px-8 py-6 shadow-[0_0_30px_rgba(249,255,0,0.4)] flex flex-col items-center gap-3">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-neon-yellow"></div>
              <p className="text-white font-black font-oswald text-lg uppercase tracking-wider">Ad Loading...</p>
            </div>
          </div>,
          document.body
        )}
        <HintAdOverlay
          isOpen={showHintAd}
          onClose={() => setShowHintAd(false)}
          onWatchAd={handleWatchAd}
          hintsAvailable={hintCount}
          isNative={Capacitor.isNativePlatform()}
        />
      </div>
      </WindowSizeClassProvider>
    </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;