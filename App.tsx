
import React, { useState, useEffect, Component, ReactNode, ErrorInfo } from 'react';
import { GameMode } from './types';
import { getSavedLevel, saveLevel, updateStats, getEnabledModes, saveEnabledModes, isTutorialSeen, markTutorialSeen } from './services/storage';
import { getLevelPackage, getLevelMode, LevelPackage } from './services/levelContent';
import { audio } from './services/audioService';
import { Capacitor } from '@capacitor/core';
import { AdMob, BannerAdSize, BannerAdPosition, AdmobConsentStatus } from '@capacitor-community/admob';

// Static Imports (No Lazy Loading)
import LevelMenu from './components/LevelMenu';
import SettingsMenu from './components/SettingsMenu';
import StatsOverlay from './components/StatsOverlay';
import TutorialOverlay from './components/TutorialOverlay';
import Level1_Standard from './components/Level1_Standard';
import Level1_Emoji from './components/Level1_Emoji';
import Level2_Filter from './components/Level2_Filter';
import Level5_Group from './components/Level5_Group';
import Level7_Expansion from './components/Level7_Expansion';
import Footer from './components/Footer';
import { AndroidStatusBar, AndroidNavigationBar } from './components/AndroidSystemBars';

// AdMob IDs provided by user
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

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = { hasError: false };
  public props!: ErrorBoundaryProps; 

  static getDerivedStateFromError(_: Error): ErrorBoundaryState { return { hasError: true }; }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) { console.error("Game crashed:", error, errorInfo); }
  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white p-4 text-center">
          <h1 className="text-3xl font-bold mb-4 font-oswald text-red-500 uppercase">System Error</h1>
          <button onClick={() => window.location.reload()} className="px-6 py-3 bg-white text-black font-bold rounded-full uppercase font-oswald">Reboot</button>
        </div>
      );
    }
    // @ts-ignore
    return this.props.children;
  }
}

const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center h-full w-full bg-black">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"></div>
  </div>
);

export const App: React.FC = () => {
  const [mode, setMode] = useState<GameMode>(GameMode.MENU);
  const [levelIndex, setLevelIndex] = useState(1); 
  const [isMusicOn, setIsMusicOn] = useState(true); 
  const [showSettings, setShowSettings] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [hintsEnabled, setHintsEnabled] = useState(true);
  const [showTutorial, setShowTutorial] = useState(false);
  const [activeCategories, setActiveCategories] = useState<{name: string, isSolved: boolean}[]>([]);
  const [isReviewing, setIsReviewing] = useState(false);
  const [enabledModes, setEnabledModes] = useState<GameMode[]>([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [levelPackage, setLevelPackage] = useState<LevelPackage | null>(null);
  
  // AdMob & Consent State
  const [isAdMobReady, setIsAdMobReady] = useState(false);
  const [privacyOptionsRequired, setPrivacyOptionsRequired] = useState(false);

  useEffect(() => {
    setLevelIndex(getSavedLevel());
    setEnabledModes(getEnabledModes());
  }, []);

  // Initialize AdMob and UMP
  useEffect(() => {
    const initializeAds = async () => {
      if (!Capacitor.isNativePlatform()) {
        setIsAdMobReady(true);
        return;
      }

      try {
        // 1. Initialize AdMob
        await AdMob.initialize({});

        // 2. Request Consent Info
        const consentInfo = await AdMob.requestConsentInfo();

        // 3. Show Consent Form if Required
        if (consentInfo.isConsentFormAvailable && consentInfo.status === AdmobConsentStatus.REQUIRED) {
          await AdMob.showConsentForm();
        }

        // 4. Check if Privacy Options Button is needed (e.g. for GDPR users to re-access)
        if (consentInfo.privacyOptionsRequirementStatus === 'REQUIRED') {
            setPrivacyOptionsRequired(true);
        }

        // 5. Show Banner Ad (Production Mode)
        const bottomMargin = getSafeAreaBottom();
        await AdMob.showBanner({
          adId: BANNER_AD_ID,
          adSize: BannerAdSize.BANNER,
          position: BannerAdPosition.BOTTOM_CENTER,
          margin: bottomMargin,
          isTesting: false, 
        });

        // 6. Preload Interstitial Ad
        try {
            await AdMob.prepareInterstitial({
                adId: INTERSTITIAL_AD_ID,
                isTesting: false
            });
        } catch (e) {
            console.error("Interstitial prep failed", e);
        }

      } catch (e) {
        console.error("AdMob/UMP initialization failed", e);
      } finally {
        setIsAdMobReady(true);
      }
    };

    initializeAds();
  }, []);

  const handleShowPrivacyOptions = async () => {
      if (Capacitor.isNativePlatform()) {
          try {
              await AdMob.showPrivacyOptionsForm();
          } catch(e) {
              console.error("Failed to show privacy options form", e);
          }
      }
  };

  const handleOpenAdInspector = async () => {
    if (!Capacitor.isNativePlatform()) {
        console.log('AdMob: Ad Inspector is only available on native platforms.');
        return;
    }

    const admobPlugin = AdMob as any;
    
    // Explicit existence check to provide better debugging info
    if (typeof admobPlugin.openAdInspector !== 'function') {
        alert("Inspector unavailable: Method missing in bridge. Run 'npx cap sync android' and rebuild.");
        return;
    }

    try {
        console.log('AdMob: Opening Ad Inspector...');
        await admobPlugin.openAdInspector();
        console.log('AdMob: Ad Inspector closed normally.');
    } catch (e: any) {
        const msg = (e.message || e);
        console.error('AdMob: Ad Inspector error: ' + msg);
        alert("Inspector failed: " + msg + "\n\nTry running 'npx cap sync android'.");
    }
  };

  useEffect(() => {
    let isMounted = true;
    const loadLevelData = async () => {
      try {
        const pkg = await getLevelPackage(levelIndex, enabledModes);
        if (isMounted) {
          setLevelPackage(pkg);
        }
      } catch (e) {
        console.error("Failed to load level package", e);
      }
    };
    loadLevelData();
    return () => { isMounted = false; };
  }, [levelIndex, enabledModes]);

  useEffect(() => {
    if (mode !== GameMode.MENU && !isTutorialSeen()) {
      setShowTutorial(true);
    }
  }, [mode]);

  const handleToggleMode = (m: GameMode) => {
    let next: GameMode[];
    if (enabledModes.includes(m)) {
      if (enabledModes.length <= 1) return;
      next = enabledModes.filter(x => x !== m);
    } else {
      next = [...enabledModes, m];
    }
    setEnabledModes(next);
    saveEnabledModes(next);
  };

  const handleToggleMusic = () => {
    const newState = !isMusicOn;
    setIsMusicOn(newState);
    audio.setSound(newState);
  };

  const handleLevelComplete = (stats: { timeMs: number, hintsUsedCount: number, moves: number, roundsWon?: number, rowEfficiency?: number, mistakes?: number, solvedCategoryIds?: string[], solvedWords?: string[], failed?: boolean }) => {
    let basePoints = 0;
    if (mode === GameMode.LEVEL_MIND_MATCH) {
        basePoints = (stats.roundsWon || 0) * 5;
    } else if (!stats.failed) {
        if (mode === GameMode.CLASSIC || mode === GameMode.LEVEL_THEMED) basePoints = 10;
        else if (mode === GameMode.LEVEL_SYNONYMS) basePoints = 10;
        else if (mode === GameMode.LEVEL_EMOJI) basePoints = 5;
        else if (mode === GameMode.LEVEL_EXPANSION) basePoints = 15;
    }
    const hintPenalty = (stats.hintsUsedCount || 0) * -5;
    let perfectRunBonus = 0;
    if (!stats.failed && stats.mistakes === 0) {
        perfectRunBonus = 25;
    }
    const efficiencyBonus = (!stats.failed ? stats.rowEfficiency : 0) || 0; 
    let timeBonus = 0;
    if (!stats.failed) {
        const sec = stats.timeMs / 1000;
        if (sec < 60) timeBonus = 10;
        else if (sec < 90) timeBonus = 5;
        else if (sec < 120) timeBonus = 2;
    }
    const levelTotal = Math.max(0, basePoints + hintPenalty + efficiencyBonus + perfectRunBonus + timeBonus);
    updateStats({ 
        totalScore: levelTotal, 
        levelsCompleted: stats.failed ? 0 : 1, 
        totalMoves: stats.moves, 
        totalTimeMs: stats.timeMs,
        rowsSolved: mode === GameMode.LEVEL_MIND_MATCH ? (stats.roundsWon || 0) * 4 : 4,
        solvedCategoryIds: stats.solvedCategoryIds,
        solvedWords: stats.solvedWords
    });
    setIsReviewing(true);
  };

  const proceedToNextLevel = async () => {
    if (Capacitor.isNativePlatform()) {
        try {
            await AdMob.showInterstitial();
            await AdMob.prepareInterstitial({
                adId: INTERSTITIAL_AD_ID,
                isTesting: false
            });
        } catch (e) {
            console.error("Failed to show interstitial", e);
            try {
                await AdMob.prepareInterstitial({
                    adId: INTERSTITIAL_AD_ID,
                    isTesting: false
                });
            } catch(e2) {}
        }
    }
    const nextLevel = levelIndex + 1;
    setLevelIndex(nextLevel);
    saveLevel(nextLevel);
    const nextMode = getLevelMode(nextLevel, enabledModes);
    setMode(nextMode);
    setIsReviewing(false);
  };

  useEffect(() => {
    if (isAutoPlaying && isReviewing) {
        const t = setTimeout(() => {
            proceedToNextLevel();
        }, 2000); 
        return () => clearTimeout(t);
    }
  }, [isAutoPlaying, isReviewing]);

  const renderContent = () => {
    if (mode === GameMode.MENU) {
      return (
          <LevelMenu 
            onStart={() => {
              const startMode = levelPackage ? levelPackage.mode : getLevelMode(levelIndex, enabledModes);
              setMode(startMode);
            }} 
            onSettings={() => setShowSettings(true)} 
            onStats={() => setShowStats(true)} 
            lastLevel={levelIndex} 
          />
      );
    }
    if (!levelPackage || levelPackage.mode !== mode) {
      return <LoadingFallback />;
    }
    const { data } = levelPackage;
    switch (mode) {
      case GameMode.CLASSIC:
      case GameMode.LEVEL_THEMED:
      case GameMode.LEVEL_SYNONYMS:
        return (
            <Level1_Standard 
                key={levelIndex}
                csvData={data} mode={mode} levelIndex={levelIndex} onComplete={handleLevelComplete} onExit={() => setMode(GameMode.MENU)}
                hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={(cats) => { setActiveCategories(cats || []); setShowSettings(true); }}
                isReviewing={isReviewing} onNext={proceedToNextLevel}
                isAutoPlaying={isAutoPlaying}
            />
        );
      case GameMode.LEVEL_EMOJI:
        return (
            <Level1_Emoji 
                key={levelIndex}
                levelIndex={levelIndex} onComplete={handleLevelComplete} onExit={() => setMode(GameMode.MENU)} 
                hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={(cats) => { setActiveCategories(cats || []); setShowSettings(true); }} 
                isReviewing={isReviewing} onNext={proceedToNextLevel}
                isAutoPlaying={isAutoPlaying}
            />
        );
      case GameMode.LEVEL_MIND_MATCH:
        return (
            <Level5_Group 
                key={levelIndex}
                csvData={data} levelIndex={levelIndex} onComplete={handleLevelComplete} onExit={() => setMode(GameMode.MENU)} 
                hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={(cats) => { setActiveCategories(cats || []); setShowSettings(true); }} 
                isReviewing={isReviewing} onNext={proceedToNextLevel}
                isAutoPlaying={isAutoPlaying}
            />
        );
      case GameMode.LEVEL_EXPANSION:
        return (
            <Level7_Expansion
                key={levelIndex}
                csvData={data} levelIndex={levelIndex} onComplete={handleLevelComplete} onExit={() => setMode(GameMode.MENU)}
                hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onOpenSettings={(cats) => { setActiveCategories(cats || []); setShowSettings(true); }}
                isReviewing={isReviewing} onNext={proceedToNextLevel}
                isAutoPlaying={isAutoPlaying}
            />
        );
      default:
         return (
               <Level2_Filter 
                  key={levelIndex}
                  csvData={data} levelIndex={levelIndex} 
                  onComplete={handleLevelComplete} 
                  onGameOver={() => handleLevelComplete({ timeMs: 0, hintsUsedCount: 0, moves: 0, failed: true, mistakes: 5 })}
                  onExit={() => setMode(GameMode.MENU)}
                  hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled}
                  onOpenSettings={(cats) => { setActiveCategories(cats || []); setShowSettings(true); }}
                  isReviewing={isReviewing} onNext={proceedToNextLevel}
                  isAutoPlaying={isAutoPlaying}
               />
         );
    }
  };

  if (!isAdMobReady) {
    return (
      <div className="fixed inset-0 h-viewport w-screen bg-black text-white font-oswald flex items-center justify-center">
        <LoadingFallback />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="fixed inset-0 h-viewport w-screen bg-black text-white font-oswald flex flex-col overflow-hidden">
        <AndroidStatusBar />
        <div className="flex-1 relative flex flex-col min-h-0 w-full overflow-hidden">
          {renderContent()}
          {showTutorial && (
              <TutorialOverlay mode={mode} onComplete={() => { markTutorialSeen(); setShowTutorial(false); }} />
          )}
        </div>
        <Footer />
        <AndroidNavigationBar />
        {showSettings && (
            <SettingsMenu 
              isOpen={showSettings} onClose={() => setShowSettings(false)} onMainMenu={() => { setShowSettings(false); setMode(GameMode.MENU); }}
              isMusicOn={isMusicOn} toggleMusic={handleToggleMusic} enabledModes={enabledModes} toggleMode={handleToggleMode}
              hintsEnabled={hintsEnabled} setHintsEnabled={setHintsEnabled} onShowTutorial={() => setShowTutorial(true)}
              onResetProgress={() => { localStorage.clear(); window.location.reload(); }} categories={activeCategories}
              isAutoPlaying={isAutoPlaying} toggleAutoPlay={() => setIsAutoPlaying(!isAutoPlaying)}
              privacyOptionsRequired={privacyOptionsRequired}
              onShowPrivacyOptions={handleShowPrivacyOptions}
              onOpenAdInspector={handleOpenAdInspector}
            />
        )}
        {showStats && (
            <StatsOverlay onClose={() => setShowStats(false)} />
        )}
      </div>
    </ErrorBoundary>
  );
};
export default App;
