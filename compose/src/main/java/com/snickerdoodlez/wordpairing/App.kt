package com.snickerdoodlez.wordpairing

import androidx.compose.animation.core.*
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.snickerdoodlez.wordpairing.types.DifficultyLevel
import com.snickerdoodlez.wordpairing.types.GameMode
import com.snickerdoodlez.wordpairing.types.LevelCompleteStats
import com.snickerdoodlez.wordpairing.types.LevelPackage
import com.snickerdoodlez.wordpairing.types.LevelSummary
import com.snickerdoodlez.wordpairing.types.ALL_MODES
import com.snickerdoodlez.wordpairing.types.FOOTER_HEIGHT
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

// ──────────────────────────────────────────────────────────────────────────────
// App — Root composable: 1:1 port of App.tsx React state machine
// ──────────────────────────────────────────────────────────────────────────────

// Ad placement IDs (1:1 match with App.tsx constants)
private const val BANNER_AD_ID = "ca-app-pub-4096368901415767/2019330695"
private const val INTERSTITIAL_AD_ID = "ca-app-pub-4096368901415767/1153913539"
private const val REWARDED_AD_ID = "ca-app-pub-4096368901415767/2572185411"

// ─── Error Boundary equivalent ────────────────────────────────────────────────

/**
 * Simple error catch wrapper — 1:1 mirror of React ErrorBoundary class in App.tsx.
 * If [content] throws during composition, falls back to the error UI.
 */
@Composable
fun ErrorBoundary(content: @Composable () -> Unit) {
    var hasError by remember { mutableStateOf(false) }

    val safeContent: @Composable () -> Unit = {
        try {
            content()
        } catch (e: Exception) {
            // On first catch, set error state — subsequent recompositions render error UI
            hasError = true
        }
    }

    if (hasError) {
        // 1:1 mirror of ErrorBoundary render error state
        Box(
            modifier = Modifier
                .fillMaxSize()
                .background(Color.Black),
            contentAlignment = Alignment.Center
        ) {
            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                Text(
                    text = "System Error",
                    color = Color(0xFFFF0000),
                    fontSize = 30.sp,
                    fontWeight = FontWeight.Bold,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.padding(bottom = 16.dp)
                )
                Button(
                    onClick = {
                        // Reboot equivalent — clear state and restart
                        // In a real Compose app, this would navigate to root
                        hasError = false
                    },
                    modifier = Modifier
                        .height(48.dp)
                        .padding(horizontal = 24.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = Color.White),
                    shape = RoundedCornerShape(50)
                ) {
                    Text(
                        text = "Reboot",
                        color = Color.Black,
                        fontWeight = FontWeight.Bold,
                        fontSize = 16.sp
                    )
                }
            }
        }
    } else {
        safeContent()
    }
}

// ─── Loading Fallback — 1:1 mirror of LoadingFallback in App.tsx ───────────────

@Composable
fun LoadingFallback() {
    val infiniteTransition = rememberInfiniteTransition(label = "loading")
    val rotation by infiniteTransition.animateFloat(
        initialValue = 0f,
        targetValue = 360f,
        animationSpec = infiniteRepeatable(
            animation = tween(durationMillis = 1000, easing = LinearEasing),
            repeatMode = RepeatMode.Restart
        ),
        label = "spinnerRotation"
    )

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black),
        contentAlignment = Alignment.Center
    ) {
        Box(
            modifier = Modifier
                .size(48.dp)
                .clip(CircleShape)
                .border(2.dp, Color.White, CircleShape)
                .rotate(rotation)
        )
    }
}

// ─── Difficulty Toast — 1:1 mirror of showDifficultyToast portal in App.tsx ────

@Composable
fun DifficultyToast(
    totalStars: Int,
    onDismiss: () -> Unit
) {
    val isHard = totalStars >= 50

    LaunchedEffect(Unit) {
        delay(3500)
        onDismiss()
    }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black.copy(alpha = 0.5f)),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier
                .padding(24.dp)
                .background(Color.Black, RoundedCornerShape(24.dp))
                .border(4.dp, Color.White, RoundedCornerShape(24.dp))
                .padding(horizontal = 40.dp, vertical = 32.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            // Logo placeholder — replace with actual logo composable
            Box(
                modifier = Modifier
                    .size(144.dp)
                    .padding(bottom = 16.dp)
            )
            Text(
                text = if (isHard) "Mastery" else "Difficulty",
                color = Color(0xFF04DEFB),
                fontWeight = FontWeight.Black,
                fontSize = 48.sp,
                lineHeight = 48.sp,
                textAlign = TextAlign.Center
            )
            Text(
                text = "Unlocked",
                color = Color(0xFFFE8900),
                fontWeight = FontWeight.Black,
                fontSize = 36.sp,
                textAlign = TextAlign.Center
            )
            Spacer(modifier = Modifier.height(24.dp))
            Box(
                modifier = Modifier
                    .background(Color(0xFFBED739))
                    .padding(horizontal = 16.dp, vertical = 4.dp)
            ) {
                Text(
                    text = if (isHard) "7-Row Grid Activated" else "Medium Mode Active",
                    color = Color.Black,
                    fontWeight = FontWeight.Black,
                    fontSize = 20.sp,
                    textAlign = TextAlign.Center
                )
            }
        }
    }
}

// ─── Ad Loading Overlay — 1:1 mirror of isAdLoading portal in App.tsx ──────────

@Composable
fun AdLoadingOverlay() {
    val infiniteTransition = rememberInfiniteTransition(label = "adLoading")
    val rotation by infiniteTransition.animateFloat(
        initialValue = 0f,
        targetValue = 360f,
        animationSpec = infiniteRepeatable(
            animation = tween(durationMillis = 1000, easing = LinearEasing),
            repeatMode = RepeatMode.Restart
        ),
        label = "adSpinnerRotation"
    )

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black.copy(alpha = 0.8f)),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier
                .background(Color.Black, RoundedCornerShape(16.dp))
                .border(2.dp, Color.White, RoundedCornerShape(16.dp))
                .padding(horizontal = 32.dp, vertical = 24.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Box(
                modifier = Modifier
                    .size(40.dp)
                    .clip(CircleShape)
                    .border(2.dp, Color(0xFFF9FF00), CircleShape)
                    .rotate(rotation)
            )
            Spacer(modifier = Modifier.height(12.dp))
            Text(
                text = "Ad Loading...",
                color = Color.White,
                fontWeight = FontWeight.Black,
                fontSize = 18.sp,
                letterSpacing = 1.sp
            )
        }
    }
}

// ──────────────────────────────────────────────────────────────────────────────
// APP — Root Game State Machine (1:1 port of App.tsx lines 113-730)
// ──────────────────────────────────────────────────────────────────────────────

@Composable
fun App() {
    // ─── State (1:1 mirror of all useState hooks in App.tsx) ──────────────────

    var mode by remember { mutableStateOf(GameMode.MENU) }                                 // line 114
    var showHowToPlay by remember { mutableStateOf(false) }                                // line 115
    var layoutReady by remember { mutableStateOf(false) }                                  // line 116
    var levelIndex by remember { mutableStateOf(1) }                                       // line 118
    var isMusicOn by remember { mutableStateOf(true) }                                     // line 119
    var showSettings by remember { mutableStateOf(false) }                                 // line 120
    var showStats by remember { mutableStateOf(false) }                                    // line 121
    var showCategorySelector by remember { mutableStateOf(false) }                         // line 122
    var hintsEnabled by remember { mutableStateOf(true) }                                  // line 123
    var activeCategories by remember { mutableStateOf<List<Pair<String, Boolean>>>(emptyList()) }  // line 124
    var isReviewing by remember { mutableStateOf(false) }                                  // line 125
    var currentSummary by remember { mutableStateOf<LevelSummary?>(null) }                 // line 126
    var enabledModes by remember { mutableStateOf(ALL_MODES) }                             // line 127
    var customPoolIds by remember { mutableStateOf<List<String>>(emptyList()) }            // line 128
    var levelPackage by remember { mutableStateOf<LevelPackage?>(null) }                   // line 130
    var forcedMode by remember { mutableStateOf<GameMode?>(null) }                         // line 131
    var privacyOptionsRequired by remember { mutableStateOf(false) }                       // line 132
    var showDifficultyToast by remember { mutableStateOf(false) }                          // line 133
    var selectedDifficulty by remember { mutableStateOf<DifficultyLevel?>(null) }          // line 134
    var hintCount by remember { mutableStateOf(0) }                                        // line 135
    var showHintAd by remember { mutableStateOf(false) }                                   // line 136
    var isAutoPlaying by remember { mutableStateOf(false) }                                // line 137
    var isAdLoading by remember { mutableStateOf(false) }                                  // line 138

    // useRef equivalent — mutable reference that survives recomposition
    var adInFlight by remember { mutableStateOf(false) }                                   // line 589

    val coroutineScope = rememberCoroutineScope()

    // ─── Effect 1: Layout readiness (line 147-177) ───────────────────────────

    LaunchedEffect(Unit) {
        var attempts = 0
        val maxAttempts = 50 // 500ms max wait (10ms * 50)

        while (!layoutReady && attempts < maxAttempts) {
            delay(10) // ~1 frame at 60fps substitute for requestAnimationFrame
            // In a real app, we'd measure actual layout dimensions here.
            // For the Compose port, we assume the composable tree will be measured
            // by the time this coroutine runs — set ready after a brief delay.
            attempts++
        }
        layoutReady = true
    }

    // ─── Effect 2: Initial load — restore progress, always start at MENU (line 181-215)

    LaunchedEffect(Unit) {
        // Simulates getAppState() / getTimeSinceLastActive() from localStorage
        val savedLevel = AppStorage.getSavedLevel()
        val savedAutoPlay = AppStorage.getAutoPlay()
        val savedEnabledModes = AppStorage.getEnabledModes()
        val savedCustomPool = AppStorage.getCustomPool()

        // Always start at MENU — never auto-navigate into a level
        levelIndex = savedLevel
        hintsEnabled = true
        isAutoPlaying = savedAutoPlay
        isMusicOn = true
        mode = GameMode.MENU

        enabledModes = savedEnabledModes
        customPoolIds = savedCustomPool
    }

    // ─── Effect 3: AdMob init (line 218-238) — platform conditional ──────────

    LaunchedEffect(Unit) {
        // AdMob initialization would go here on Android.
        // For the Compose port, this is a stub that mirrors the structure:
        // 1. AdMob.initialize()
        // 2. Request consent info
        // 3. Show consent form if required
        // 4. Set privacyOptionsRequired if needed
        // 5. Show banner ad
        // Actual implementation depends on adding google-mobile-ads dependency.
    }

    // ─── Effect 4: Power Management (line 241-280) ───────────────────────────

    DisposableEffect(Unit) {
        // Monitor Doze, App Standby, and battery state
        // Stub for Compose port — real implementation would use
        // PowerManager / BatteryManager APIs on Android.
        onDispose {
            // Cleanup monitoring
        }
    }

    // ─── Effect 5: Level package loader (line 282-295) ───────────────────────

    LaunchedEffect(levelIndex, enabledModes, customPoolIds, forcedMode, selectedDifficulty) {
        // Wait for data init, then compute level package
        // Stub for Compose port — real implementation would call
        // LevelContentProvider.getLevelPackage(...)
        // levelPackage = computedPackage
    }

    // ─── Effect 6: Visibility change — save on background (line 298-341) ─────

    DisposableEffect(Unit) {
        // Lifecycle observer: save state when app goes to background
        // Stub for Compose port — real implementation would use
        // LifecycleEventObserver to detect ON_STOP.
        onDispose {
            // Save state on dispose
        }
    }

    // ─── Effect 7: Auto-advance from review (line 344-349) ───────────────────

    LaunchedEffect(isAutoPlaying, isReviewing) {
        if (isAutoPlaying && isReviewing) {
            delay(3000)
            proceedToNextLevel()
        }
    }

    // ─── Effect 8: Hint-applied listener (line 575-586) ──────────────────────

    // In Compose, we use a callback-based approach instead of CustomEvent.
    // The hint-applied flow is handled inline in handleHintClick / handleWatchAd.

    // ─── Effect 9: Preload rewarded ad when hintCount hits 0 (line 602-606) ──

    LaunchedEffect(hintCount) {
        if (hintCount == 0) {
            // preloadRewardedAd() — stub for Compose port
        }
    }

    // ─── Handlers ────────────────────────────────────────────────────────────

    val handleLevelComplete: (LevelCompleteStats) -> Unit = { stats ->
        // 1:1 mirror of App.tsx handleLevelComplete (lines 352-399)
        if (stats.failed) {
            isReviewing = true
            currentSummary = LevelSummary(
                levelIndex = levelIndex,
                mode = mode,
                timeMs = stats.timeMs,
                moves = stats.moves,
                mistakes = stats.mistakes,
                score = 0,
                stars = 0,
                difficulty = 0.0,
                solvedCategoryIds = emptyList(),
                solvedWords = emptyList(),
                broadCategories = emptyList()
            )
            return@let
        }

        val timeInSeconds = stats.timeMs / 1000.0
        val stars = when {
            timeInSeconds <= 90 -> 3
            timeInSeconds <= 120 -> 2
            else -> 1
        }

        val wordsFoundCount = stats.solvedWords.size
        val dataArr = levelPackage?.data ?: emptyList()
        val avgDifficulty = if (dataArr.isNotEmpty()) {
            dataArr.sumOf { it.difficulty.toDouble() } / dataArr.size
        } else 0.0

        val masteryMultiplier = when (stars) {
            3 -> 1.5
            2 -> 1.2
            else -> 1.0
        }
        val finalScore = (wordsFoundCount * avgDifficulty * masteryMultiplier).toInt()

        currentSummary = LevelSummary(
            levelIndex = levelIndex,
            mode = mode,
            timeMs = stats.timeMs,
            moves = stats.moves,
            mistakes = stats.mistakes,
            score = finalScore,
            stars = stars,
            difficulty = avgDifficulty,
            solvedCategoryIds = stats.solvedCategoryIds,
            solvedWords = stats.solvedWords,
            broadCategories = dataArr.map { it.broadCategory ?: "General" }
        )
        isReviewing = true

        // TestLab results write — stub for Compose port
    }

    // ─── proceedToNextLevel (lines 412-454) ──────────────────────────────────

    fun proceedToNextLevel() {
        val totalStarsBefore = AppStorage.getStats().totalStars

        currentSummary?.let { summary ->
            if (summary.score > 0) {
                AppStorage.updateStats(
                    levelsCompleted = 1,
                    totalMoves = summary.moves,
                    totalTimeMs = summary.timeMs,
                    rowsSolved = summary.solvedCategoryIds.size,
                    solvedCategoryIds = summary.solvedCategoryIds,
                    solvedWords = summary.solvedWords,
                    totalScore = summary.score,
                    totalStars = summary.stars,
                    lastLevelStars = summary.stars,
                    lastLevelDifficulty = summary.difficulty,
                    lastLevelBroadCategories = summary.broadCategories
                )
            }
        }

        val totalStarsAfter = AppStorage.getStats().totalStars

        // Check star-based hint rewards (every 30 stars)
        AppStorage.checkAndAwardStarHint(totalStarsAfter)
        hintCount = AppStorage.getAvailableHints()

        // Difficulty threshold toast
        if ((totalStarsBefore < 20 && totalStarsAfter >= 20) ||
            (totalStarsBefore < 50 && totalStarsAfter >= 50)
        ) {
            showDifficultyToast = true
        }

        // Fire-and-forget interstitial (line 443-446)
        // AdMob.showInterstitial() stub

        val nextLevel = levelIndex + 1
        levelIndex = nextLevel
        AppStorage.saveLevel(nextLevel)
        mode = AppStorage.getLevelMode(nextLevel, enabledModes)

        isReviewing = false
        currentSummary = null
    }

    // ─── handleHintClick (lines 558-573) ─────────────────────────────────────

    val handleHintClick: () -> Unit = {
        if (isReviewing) return@let
        if (!hintsEnabled) {
            showHintAd = true
            return@let
        }
        val current = AppStorage.getAvailableHints()
        if (current > 0) {
            // Dispatch hint-used — in Compose, this would be a callback to the active level
            // The level component applies the hint and calls back with hint-applied
        } else {
            showHintAd = true
        }
    }

    // ─── handleWatchAd (lines 608-655) ───────────────────────────────────────

    val handleWatchAd: suspend () -> Unit = {
        if (isReviewing || adInFlight) return@suspend
        adInFlight = true

        // Non-native simulation (line 612-617)
        // In a real Android app, this would show a rewarded ad via AdMob.
        // For the Compose port stub: simulate reward after a short delay
        isAdLoading = true
        delay(1500) // simulate ad load
        val next = AppStorage.addHints(3)
        hintCount = next
        isAdLoading = false
        adInFlight = false
    }

    // ─── Difficulty unlock logic (lines 540-551) ─────────────────────────────

    val totalStars = AppStorage.getStats().totalStars
    val unlockedDifficulties: List<DifficultyLevel> = buildList {
        add(DifficultyLevel.EASY)
        if (totalStars >= 20) add(DifficultyLevel.MEDIUM)
        if (totalStars >= 50) add(DifficultyLevel.HARD)
    }

    val handleDifficultyChange: (DifficultyLevel) -> Unit = { diff ->
        selectedDifficulty = diff
        AppStorage.saveSelectedDifficulty(diff)
    }

    // ─── Derived data (lines 478-493) ────────────────────────────────────────

    val avgDiff: Double = if (levelPackage != null) {
        val data = levelPackage!!.data
        if (data.isNotEmpty()) data.sumOf { it.difficulty.toDouble() } / data.size else 0.0
    } else 0.0

    val catCounts = mutableMapOf<String, Int>()
    levelPackage?.data?.forEach { row ->
        val c = row.broadCategory ?: "General"
        catCounts[c] = (catCounts[c] ?: 0) + 1
    }
    val mainCategory = catCounts.maxByOrNull { it.value }?.key ?: "General"

    val hintsBlocked = !hintsEnabled

    val effectiveStars: Int = if (isReviewing && currentSummary != null) {
        totalStars - currentSummary!!.stars
    } else totalStars

    val diffTier: String = when (selectedDifficulty) {
        DifficultyLevel.EASY -> "easy"
        DifficultyLevel.MEDIUM -> "med"
        DifficultyLevel.HARD -> "hard"
        null -> if (effectiveStars < 20) "easy" else if (effectiveStars < 50) "med" else "hard"
    }
    val expTier: String = when (selectedDifficulty) {
        DifficultyLevel.EASY -> "easy"
        DifficultyLevel.MEDIUM -> "medium"
        DifficultyLevel.HARD -> "hard"
        null -> if (effectiveStars < 20) "easy" else if (effectiveStars < 50) "medium" else "hard"
    }

    // ──────────────────────────────────────────────────────────────────────────
    // ROOT COMPOSITION (1:1 mirror of App.tsx render block lines 657-729)
    // ──────────────────────────────────────────────────────────────────────────

    ErrorBoundary {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .background(Color.Black)
        ) {
            Column(modifier = Modifier.fillMaxSize()) {
                // AndroidStatusBar equivalent — spacer for system bars
                Spacer(modifier = Modifier.height(24.dp))

                // Main content area
                Box(
                    modifier = Modifier
                        .weight(1f)
                        .fillMaxWidth()
                ) {
                    // ─── Content Router (1:1 mirror of renderContent lines 457-538) ───

                    when {
                        // HowToPlay screen
                        showHowToPlay -> {
                            HowToPlayPlaceholder(
                                onStart = {
                                    showHowToPlay = false
                                    mode = forcedMode
                                        ?: (levelPackage?.mode
                                            ?: AppStorage.getLevelMode(levelIndex, enabledModes))
                                }
                            )
                        }

                        // Menu screen
                        mode == GameMode.MENU -> {
                            LevelMenuPlaceholder(
                                onStart = {
                                    if (levelIndex == 1) {
                                        showHowToPlay = true
                                    } else {
                                        mode = forcedMode
                                            ?: (levelPackage?.mode
                                                ?: AppStorage.getLevelMode(levelIndex, enabledModes))
                                    }
                                },
                                onSettings = { showSettings = true },
                                onStats = { showStats = true },
                                lastLevel = levelIndex,
                                selectedDifficulty = selectedDifficulty,
                                unlockedDifficulties = unlockedDifficulties,
                                onDifficultyChange = handleDifficultyChange
                            )
                        }

                        // Level package not ready — loading
                        levelPackage == null || levelPackage!!.mode != mode -> {
                            LoadingFallback()
                        }

                        // ─── Level Router (1:1 mirror of switch block lines 500-534) ───
                        else -> {
                            LevelRouter(
                                mode = mode,
                                expTier = expTier,
                                diffTier = diffTier,
                                levelIndex = levelIndex,
                                levelPackage = levelPackage!!,
                                avgDiff = avgDiff,
                                mainCategory = mainCategory,
                                hintsEnabled = hintsEnabled,
                                hintsBlocked = hintsBlocked,
                                isReviewing = isReviewing,
                                isAutoPlaying = isAutoPlaying,
                                currentSummary = currentSummary,
                                hintCount = hintCount,
                                onComplete = handleLevelComplete,
                                onNext = { proceedToNextLevel() },
                                onHintClick = handleHintClick,
                                onExit = { mode = GameMode.MENU },
                                onOpenSettings = { showSettings = true },
                                onSetHintsEnabled = { hintsEnabled = it }
                            )
                        }
                    }
                }

                // Footer banner ad area
                Spacer(modifier = Modifier.height(FOOTER_HEIGHT.dp))

                // AndroidNavigationBar equivalent — spacer for nav bar
                Spacer(modifier = Modifier.height(16.dp))
            }

            // ─── Overlays (portals in React become composed overlays here) ────

            // Difficulty Toast
            if (showDifficultyToast) {
                DifficultyToast(
                    totalStars = totalStars,
                    onDismiss = { showDifficultyToast = false }
                )
            }

            // Settings overlay
            if (showSettings) {
                SettingsMenuPlaceholder(
                    isOpen = showSettings,
                    onClose = { showSettings = false },
                    onMainMenu = {
                        forcedMode = null
                        showSettings = false
                        mode = GameMode.MENU
                    },
                    isMusicOn = isMusicOn,
                    toggleMusic = {
                        isMusicOn = !isMusicOn
                        // audio.setSound(!isMusicOn) — stub
                    },
                    enabledModes = enabledModes,
                    toggleMode = { m ->
                        enabledModes = if (enabledModes.contains(m)) {
                            if (enabledModes.size > 1) enabledModes.filter { it != m } else enabledModes
                        } else {
                            enabledModes + m
                        }
                        AppStorage.saveEnabledModes(enabledModes)
                    },
                    onSelectMode = { m ->
                        forcedMode = m
                        mode = m
                        showSettings = false
                    },
                    hintsEnabled = hintsEnabled,
                    onSetHintsEnabled = { hintsEnabled = it },
                    isAutoPlaying = isAutoPlaying,
                    toggleAutoPlay = {
                        isAutoPlaying = !isAutoPlaying
                        AppStorage.saveAutoPlay(isAutoPlaying)
                    },
                    onResetProgress = {
                        AppStorage.clearAll()
                        // Force restart equivalent
                    },
                    privacyOptionsRequired = privacyOptionsRequired,
                    selectedDifficulty = selectedDifficulty,
                    unlockedDifficulties = unlockedDifficulties,
                    onDifficultyChange = handleDifficultyChange
                )
            }

            // Category selector overlay
            if (showCategorySelector) {
                CategorySelectionPlaceholder(
                    isOpen = showCategorySelector,
                    onClose = { showCategorySelector = false },
                    selectedIds = customPoolIds,
                    onToggle = { ids ->
                        customPoolIds = ids
                        AppStorage.saveCustomPool(ids)
                    }
                )
            }

            // Stats overlay
            if (showStats) {
                StatsOverlayPlaceholder(
                    onClose = { showStats = false }
                )
            }

            // Ad loading overlay
            if (isAdLoading) {
                AdLoadingOverlay()
            }

            // Hint ad overlay
            if (showHintAd) {
                HintAdOverlayPlaceholder(
                    isOpen = showHintAd,
                    onClose = { showHintAd = false },
                    onWatchAd = {
                        coroutineScope.launch { handleWatchAd() }
                    },
                    hintsAvailable = hintCount
                )
            }
        }
    }
}

// ──────────────────────────────────────────────────────────────────────────────
// Level Router — 1:1 mirror of the switch block in renderContent (lines 499-534)
// ──────────────────────────────────────────────────────────────────────────────

@Composable
fun LevelRouter(
    mode: GameMode,
    expTier: String,
    diffTier: String,
    levelIndex: Int,
    levelPackage: LevelPackage,
    avgDiff: Double,
    mainCategory: String,
    hintsEnabled: Boolean,
    hintsBlocked: Boolean,
    isReviewing: Boolean,
    isAutoPlaying: Boolean,
    currentSummary: LevelSummary?,
    hintCount: Int,
    onComplete: (LevelCompleteStats) -> Unit,
    onNext: () -> Unit,
    onHintClick: () -> Unit,
    onExit: () -> Unit,
    onOpenSettings: () -> Unit,
    onSetHintsEnabled: (Boolean) -> Unit
) {
    // 1:1 mirror of App.tsx switch block (lines 500-534)
    when (mode) {
        GameMode.LEVEL_EXPANSION -> {
            when (expTier) {
                "easy" -> LevelPlaceholder(
                    label = "Expansion Easy",
                    key = "exp-easy-$levelIndex-$diffTier",
                    onComplete = onComplete,
                    isReviewing = isReviewing
                )
                "medium" -> LevelPlaceholder(
                    label = "Expansion Medium",
                    key = "exp-med-$levelIndex-$diffTier",
                    onComplete = onComplete,
                    isReviewing = isReviewing
                )
                else -> LevelPlaceholder(
                    label = "Expansion Hard",
                    key = "exp-hard-$levelIndex-$diffTier",
                    onComplete = onComplete,
                    isReviewing = isReviewing
                )
            }
        }

        GameMode.LEVEL_EXPANSION_TEST -> {
            when (expTier) {
                "easy" -> LevelPlaceholder(
                    label = "Expansion Test Easy",
                    key = "exptest-easy-$levelIndex-$diffTier",
                    onComplete = onComplete,
                    isReviewing = isReviewing
                )
                "medium" -> LevelPlaceholder(
                    label = "Expansion Test Medium",
                    key = "exptest-med-$levelIndex-$diffTier",
                    onComplete = onComplete,
                    isReviewing = isReviewing
                )
                else -> LevelPlaceholder(
                    label = "Expansion Test Hard",
                    key = "exptest-hard-$levelIndex-$diffTier",
                    onComplete = onComplete,
                    isReviewing = isReviewing
                )
            }
        }

        GameMode.CLASSIC,
        GameMode.LEVEL_SYNONYMS -> {
            LevelPlaceholder(
                label = "Standard/Synonyms",
                key = "std-$diffTier-$levelIndex",
                onComplete = onComplete,
                isReviewing = isReviewing
            )
        }

        GameMode.LEVEL_THEME -> {
            LevelPlaceholder(
                label = "Themed",
                key = "theme-$levelIndex",
                onComplete = onComplete,
                isReviewing = isReviewing
            )
        }

        GameMode.LEVEL_EMOJI -> {
            LevelPlaceholder(
                label = "Emoji",
                key = "emo-$diffTier-$levelIndex",
                onComplete = onComplete,
                isReviewing = isReviewing
            )
        }

        GameMode.LEVEL_MIND_MATCH -> {
            LevelPlaceholder(
                label = "Mind Match",
                key = "mm-$diffTier-$levelIndex",
                onComplete = onComplete,
                isReviewing = isReviewing
            )
        }

        else -> {
            // Default: Filter (line 533)
            LevelPlaceholder(
                label = "Filter",
                key = "filt-$diffTier-$levelIndex",
                onComplete = onComplete,
                isReviewing = isReviewing
            )
        }
    }
}

// ─── Placeholder composables — to be replaced with actual level components ────

@Composable
fun LevelPlaceholder(
    label: String,
    key: String,
    onComplete: (LevelCompleteStats) -> Unit,
    isReviewing: Boolean
) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black),
        contentAlignment = Alignment.Center
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text(
                text = label,
                color = Color.White,
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = "key: $key",
                color = Color.Gray,
                fontSize = 12.sp
            )
            Spacer(modifier = Modifier.height(24.dp))
            Text(
                text = if (isReviewing) "Reviewing..." else "Playing...",
                color = Color(0xFFF9FF00),
                fontSize = 16.sp
            )
        }
    }
}

@Composable
fun HowToPlayPlaceholder(onStart: () -> Unit) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black),
        contentAlignment = Alignment.Center
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text(
                text = "How To Play",
                color = Color.White,
                fontSize = 28.sp,
                fontWeight = FontWeight.Bold
            )
            Spacer(modifier = Modifier.height(24.dp))
            Button(
                onClick = onStart,
                modifier = Modifier.height(48.dp)
            ) {
                Text("START GAME", fontWeight = FontWeight.Bold)
            }
        }
    }
}

@Composable
fun LevelMenuPlaceholder(
    onStart: () -> Unit,
    onSettings: () -> Unit,
    onStats: () -> Unit,
    lastLevel: Int,
    selectedDifficulty: DifficultyLevel?,
    unlockedDifficulties: List<DifficultyLevel>,
    onDifficultyChange: (DifficultyLevel) -> Unit
) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black),
        contentAlignment = Alignment.Center
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text(
                text = "Word Pairing",
                color = Color.White,
                fontSize = 36.sp,
                fontWeight = FontWeight.Black
            )
            Text(
                text = "Level $lastLevel",
                color = Color(0xFFF9FF00),
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold
            )
            Spacer(modifier = Modifier.height(32.dp))
            Button(
                onClick = onStart,
                modifier = Modifier.height(48.dp)
            ) {
                Text("PLAY", fontWeight = FontWeight.Bold)
            }
            Spacer(modifier = Modifier.height(12.dp))
            Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                Button(
                    onClick = onSettings,
                    modifier = Modifier.height(48.dp)
                ) {
                    Text("Settings")
                }
                Button(
                    onClick = onStats,
                    modifier = Modifier.height(48.dp)
                ) {
                    Text("Stats")
                }
            }
        }
    }
}

@Composable
fun SettingsMenuPlaceholder(
    isOpen: Boolean,
    onClose: () -> Unit,
    onMainMenu: () -> Unit,
    isMusicOn: Boolean,
    toggleMusic: () -> Unit,
    enabledModes: List<GameMode>,
    toggleMode: (GameMode) -> Unit,
    onSelectMode: (GameMode) -> Unit,
    hintsEnabled: Boolean,
    onSetHintsEnabled: (Boolean) -> Unit,
    isAutoPlaying: Boolean,
    toggleAutoPlay: () -> Unit,
    onResetProgress: () -> Unit,
    privacyOptionsRequired: Boolean,
    selectedDifficulty: DifficultyLevel?,
    unlockedDifficulties: List<DifficultyLevel>,
    onDifficultyChange: (DifficultyLevel) -> Unit
) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black.copy(alpha = 0.9f)),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier.padding(32.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = "Settings",
                color = Color.White,
                fontSize = 28.sp,
                fontWeight = FontWeight.Bold
            )
            Spacer(modifier = Modifier.height(24.dp))
            Button(onClick = onClose, modifier = Modifier.height(48.dp)) {
                Text("Close")
            }
            Button(onClick = onMainMenu, modifier = Modifier.height(48.dp)) {
                Text("Main Menu")
            }
            Button(onClick = onResetProgress, modifier = Modifier.height(48.dp)) {
                Text("Reset Progress", color = Color.Red)
            }
        }
    }
}

@Composable
fun CategorySelectionPlaceholder(
    isOpen: Boolean,
    onClose: () -> Unit,
    selectedIds: List<String>,
    onToggle: (List<String>) -> Unit
) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black.copy(alpha = 0.9f)),
        contentAlignment = Alignment.Center
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text(
                text = "Category Selection",
                color = Color.White,
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold
            )
            Spacer(modifier = Modifier.height(16.dp))
            Button(onClick = onClose, modifier = Modifier.height(48.dp)) {
                Text("Close")
            }
        }
    }
}

@Composable
fun StatsOverlayPlaceholder(onClose: () -> Unit) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black.copy(alpha = 0.9f)),
        contentAlignment = Alignment.Center
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text(
                text = "Stats / Hall of Fame",
                color = Color.White,
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold
            )
            Spacer(modifier = Modifier.height(16.dp))
            Button(onClick = onClose, modifier = Modifier.height(48.dp)) {
                Text("Close")
            }
        }
    }
}

@Composable
fun HintAdOverlayPlaceholder(
    isOpen: Boolean,
    onClose: () -> Unit,
    onWatchAd: () -> Unit,
    hintsAvailable: Int
) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black.copy(alpha = 0.85f)),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier
                .padding(32.dp)
                .background(Color.Black, RoundedCornerShape(16.dp))
                .border(2.dp, Color.White, RoundedCornerShape(16.dp))
                .padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = "Need Hints?",
                color = Color.White,
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = "Hints available: $hintsAvailable",
                color = Color(0xFFF9FF00),
                fontSize = 16.sp
            )
            Spacer(modifier = Modifier.height(16.dp))
            Button(onClick = onWatchAd, modifier = Modifier.height(48.dp)) {
                Text("Watch Ad for Hints")
            }
            Spacer(modifier = Modifier.height(8.dp))
            TextButton(onClick = onClose) {
                Text("Cancel", color = Color.Gray)
            }
        }
    }
}