package com.snickerdoodlez.wordpairing.ui

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.snickerdoodlez.wordpairing.state.AppAction
import com.snickerdoodlez.wordpairing.state.AppState
import com.snickerdoodlez.wordpairing.state.AppStateMachine
import com.snickerdoodlez.wordpairing.state.CategoryItem
import com.snickerdoodlez.wordpairing.types.DifficultyLevel
import com.snickerdoodlez.wordpairing.types.GameMode
import com.snickerdoodlez.wordpairing.types.LevelPackage
import com.snickerdoodlez.wordpairing.ui.settings.SettingsMenu
import kotlinx.coroutines.CoroutineScope

// ── Neon Color Palette (mirrors tailwind config from index.html) ────────────
private object NeonColors {
    val Black = Color(0xFF000000)
    val White = Color(0xFFFFFFFF)
    val Red = Color(0xFFFF073A)
    val Orange = Color(0xFFFF5F1F)
    val Yellow = Color(0xFFF9FF00)
    val Lime = Color(0xFF39FF14)
    val Cyan = Color(0xFF00FFFF)
    val SkyBlue = Color(0xFF00BFFF)
    val NeonBlue = Color(0xFF04DEFB)
    val Purple = Color(0xFFD400FF)
    val Zinc800 = Color(0xFF27272A)
    val Zinc900 = Color(0xFF18181B)
    val Zinc950 = Color(0xFF09090B)
}

/**
 * Root composable for the Word Pairing: Category Match game.
 *
 * This replaces the 732-line App.tsx render body with a clean UDF architecture:
 *   - All state lives in [AppStateMachine.state]
 *   - All mutations go through [dispatch(action)]
 *   - Side effects (ads, timers, persistence) live in the StateMachine
 *
 * @param stateMachine The single source of truth for all game state.
 * @param dispatch Lambda to send actions into the state machine.
 * @param scope CoroutineScope for launching lifecycle-aware side effects.
 */
@Composable
fun AppRoot(
    stateMachine: AppStateMachine,
    scope: CoroutineScope
) {
    // Collect state from the StateFlow
    val state by stateMachine.state.collectAsState()
    val dispatch: (AppAction) -> Unit = remember { { action -> stateMachine.dispatch(action) } }

    // ── Layout Dimension Validation Guard ──────────────────────────────────
    // Mirror: useEffect with requestAnimationFrame polling for positive viewport
    LaunchedEffect(Unit) {
        // In Compose, the composable won't render until measured, so layoutReady
        // is effectively guaranteed. Still mark it for parity with TS behavior.
        stateMachine.onLayoutReady()
    }

    // ── Visibility / Lifecycle Tracking ────────────────────────────────────
    // Mirror: useEffect with visibilitychange + pagehide listeners
    DisposableEffect(Unit) {
        // On Android, lifecycle callbacks are managed by the Activity/Fragment.
        // For this portable port, we expose onBackground/onForeground for manual wiring.
        onDispose {
            stateMachine.dispose()
        }
    }

    // ── Main UI Shell ──────────────────────────────────────────────────────
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(NeonColors.Black)
    ) {
        Column(modifier = Modifier.fillMaxSize()) {
            // Main content area (flex-1)
            Box(
                modifier = Modifier
                    .weight(1f)
                    .fillMaxWidth()
            ) {
                // Only render content once layout is ready
                if (state.layoutReady) {
                    RenderContent(state = state, dispatch = dispatch)
                } else {
                    LoadingFallback()
                }
            }

            // Footer placeholder (mirrors <Footer />)
            FooterPlaceholder()
        }

        // ── Difficulty Unlocked Toast ──────────────────────────────────────
        AnimatedVisibility(
            visible = state.showDifficultyToast,
            enter = fadeIn(),
            exit = fadeOut()
        ) {
            DifficultyToast(state = state)
        }

        // ── Overlays ───────────────────────────────────────────────────────

        // Settings Menu overlay
        SettingsMenu(
            isOpen = state.showSettings,
            onClose = { dispatch(AppAction.SetShowSettings(false)) },
            onMainMenu = {
                dispatch(AppAction.SetForcedMode(null))
                dispatch(AppAction.SetShowSettings(false))
                dispatch(AppAction.GoToMenu)
            },
            isMusicOn = state.isMusicOn,
            toggleMusic = { dispatch(AppAction.ToggleMusic) },
            enabledModes = state.enabledModes,
            toggleMode = { mode -> dispatch(AppAction.ToggleGameMode(mode)) },
            onSelectMode = { mode -> dispatch(AppAction.SelectMode(mode)) },
            hintsEnabled = state.hintsEnabled,
            setHintsEnabled = { enabled -> dispatch(AppAction.ToggleHintEnabled(enabled)) },
            isAutoPlaying = state.isAutoPlaying,
            toggleAutoPlay = { dispatch(AppAction.ToggleAutoPlay) },
            onResetProgress = { dispatch(AppAction.ResetProgress) },
            categories = state.activeCategories.map { CategoryItem(it.name, it.isSolved) },
            privacyOptionsRequired = state.privacyOptionsRequired,
            onShowPrivacyOptions = { /* Privacy options — platform-specific */ },
            selectedDifficulty = state.selectedDifficulty ?: DifficultyLevel.EASY,
            unlockedDifficulties = state.unlockedDifficulties,
            onDifficultyChange = { diff -> dispatch(AppAction.SetSelectedDifficulty(diff)) },
            theme = "dark",
            toggleTheme = { /* Theme toggle stub */ }
        )

        // Stats overlay
        if (state.showStats) {
            StatsOverlayPlaceholder(
                onClose = { dispatch(AppAction.SetShowStats(false)) }
            )
        }

        // Hint Ad overlay
        if (state.showHintAd) {
            HintAdOverlayPlaceholder(
                onClose = { dispatch(AppAction.SetShowHintAd(false)) },
                onWatchAd = { dispatch(AppAction.WatchRewardedAd) },
                hintsAvailable = state.hintCount,
                isNative = false // Stub — would be derived from BuildConfig / platform check
            )
        }

        // Category selector overlay
        if (state.showCategorySelector) {
            CategorySelectorPlaceholder(
                onClose = { dispatch(AppAction.SetShowCategorySelector(false)) },
                selectedIds = state.customPoolIds,
                onToggle = { ids -> dispatch(AppAction.SetCustomPoolIds(ids)) }
            )
        }

        // ── Ad Loading Spinner ─────────────────────────────────────────────
        AnimatedVisibility(
            visible = state.isAdLoading,
            enter = fadeIn(),
            exit = fadeOut()
        ) {
            AdLoadingOverlay()
        }
    }
}

// ── Content Renderer ────────────────────────────────────────────────────────

/**
 * Mirrors the `renderContent()` function from App.tsx.
 * Dispatches to the appropriate screen based on [state.mode].
 *
 * In a full Compose port, each `when` branch would render the corresponding
 * level composable (e.g., Level1Standard, Level5Group, LevelThemed).
 * For now, all level branches render a placeholder.
 */
@Composable
private fun RenderContent(
    state: AppState,
    dispatch: (AppAction) -> Unit
) {
    when {
        // HowToPlay screen
        state.showHowToPlay -> {
            HowToPlayPlaceholder(
                onStart = { dispatch(AppAction.DismissHowToPlay) }
            )
        }

        // Main Menu
        state.mode == GameMode.MENU -> {
            MenuPlaceholder(
                onStart = { dispatch(AppAction.StartFromMenu) },
                onSettings = { dispatch(AppAction.SetShowSettings(true)) },
                onStats = { dispatch(AppAction.SetShowStats(true)) },
                lastLevel = state.levelIndex,
                selectedDifficulty = state.selectedDifficulty,
                unlockedDifficulties = state.unlockedDifficulties,
                onDifficultyChange = { diff -> dispatch(AppAction.SetSelectedDifficulty(diff)) }
            )
        }

        // Level package not yet loaded or mode mismatch → loading
        state.levelPackage == null || state.levelPackage!!.mode != state.mode -> {
            LoadingFallback()
        }

        // Active level — dispatch to the appropriate level component
        else -> {
            RenderLevel(state = state, dispatch = dispatch)
        }
    }
}

/**
 * Mirrors the giant switch-case block inside renderContent().
 *
 * Each branch maps to a lazy-loaded level component in App.tsx:
 *   CLASSIC / SYNONYMS → Level1_Standard
 *   LEVEL_THEME        → Level_Themed
 *   LEVEL_EMOJI        → Level1_Emoji
 *   LEVEL_MIND_MATCH   → Level5_Group
 *   LEVEL_EXPANSION    → Level7_Expansion (with difficulty variants)
 *   LEVEL_EXPANSION_TEST → LevelExpansionTest (with difficulty variants)
 *   default/FILTER     → Level2_Filter
 *
 * In the full Compose port, replace each placeholder with the actual composable.
 */
@Composable
private fun RenderLevel(
    state: AppState,
    dispatch: (AppAction) -> Unit
) {
    val pkg = state.levelPackage ?: return
    val data = pkg.data
    val themeName = pkg.themeName

    // Compute derived data (mirrors renderContent logic)
    val avgDiff = if (data.isNotEmpty()) data.sumOf { it.difficulty }.toDouble() / data.size else 0.0
    val catCounts = data.groupBy { it.broadCategory ?: "General" }.mapValues { it.value.size }
    val mainCategory = catCounts.maxByOrNull { it.value }?.key ?: "General"

    val hintsBlocked = !state.hintsEnabled
    val effectiveStars = if (state.isReviewing && state.currentSummary != null) {
        state.totalStars - state.currentSummary!!.stars
    } else {
        state.totalStars
    }

    // Difficulty tier for Expansion variants
    val diffTier = state.selectedDifficulty?.key ?: when {
        effectiveStars < 20 -> "easy"
        effectiveStars < 50 -> "med"
        else -> "hard"
    }
    val expTier = state.selectedDifficulty?.key ?: when {
        effectiveStars < 20 -> "easy"
        effectiveStars < 50 -> "medium"
        else -> "hard"
    }

    // ── Level dispatcher (mirrors switch case in App.tsx) ──────────────────
    when (state.mode) {
        GameMode.LEVEL_EXPANSION -> {
            ExpansionLevelPlaceholder(
                tier = expTier,
                diffKey = "$diffTier-${state.levelIndex}",
                onComplete = { stats -> dispatch(AppAction.LevelComplete(stats)) },
                isReviewing = state.isReviewing,
                onNext = { dispatch(AppAction.ProceedToNextLevel) },
                hintCount = state.hintCount,
                onHintClick = { dispatch(AppAction.RequestHint) },
                hintsBlocked = hintsBlocked
            )
        }

        GameMode.LEVEL_EXPANSION_TEST -> {
            ExpansionTestLevelPlaceholder(
                tier = expTier,
                diffKey = "$diffTier-${state.levelIndex}",
                onComplete = { stats -> dispatch(AppAction.LevelComplete(stats)) },
                isReviewing = state.isReviewing,
                onNext = { dispatch(AppAction.ProceedToNextLevel) },
                hintCount = state.hintCount,
                onHintClick = { dispatch(AppAction.RequestHint) },
                hintsBlocked = hintsBlocked
            )
        }

        GameMode.CLASSIC, GameMode.LEVEL_SYNONYMS -> {
            Level1StandardPlaceholder(
                mode = state.mode,
                levelIndex = state.levelIndex,
                difficulty = avgDiff,
                category = mainCategory,
                themeName = themeName,
                onComplete = { stats -> dispatch(AppAction.LevelComplete(stats)) },
                onExit = { dispatch(AppAction.ExitLevel) },
                isReviewing = state.isReviewing,
                onNext = { dispatch(AppAction.ProceedToNextLevel) },
                hintCount = state.hintCount,
                onHintClick = { dispatch(AppAction.RequestHint) },
                hintsBlocked = hintsBlocked
            )
        }

        GameMode.LEVEL_THEME -> {
            ThemedLevelPlaceholder(
                levelIndex = state.levelIndex,
                themeName = themeName,
                onComplete = { stats -> dispatch(AppAction.LevelComplete(stats)) },
                isReviewing = state.isReviewing,
                onNext = { dispatch(AppAction.ProceedToNextLevel) },
                hintCount = state.hintCount,
                onHintClick = { dispatch(AppAction.RequestHint) },
                hintsBlocked = hintsBlocked
            )
        }

        GameMode.LEVEL_EMOJI -> {
            EmojiLevelPlaceholder(
                levelIndex = state.levelIndex,
                difficulty = avgDiff,
                category = mainCategory,
                onComplete = { stats -> dispatch(AppAction.LevelComplete(stats)) },
                onExit = { dispatch(AppAction.ExitLevel) },
                isReviewing = state.isReviewing,
                onNext = { dispatch(AppAction.ProceedToNextLevel) },
                hintCount = state.hintCount,
                onHintClick = { dispatch(AppAction.RequestHint) },
                hintsBlocked = hintsBlocked
            )
        }

        GameMode.LEVEL_MIND_MATCH -> {
            MindMatchLevelPlaceholder(
                levelIndex = state.levelIndex,
                difficulty = avgDiff,
                category = mainCategory,
                onComplete = { stats -> dispatch(AppAction.LevelComplete(stats)) },
                onExit = { dispatch(AppAction.ExitLevel) },
                isReviewing = state.isReviewing,
                onNext = { dispatch(AppAction.ProceedToNextLevel) },
                hintCount = state.hintCount,
                onHintClick = { dispatch(AppAction.RequestHint) },
                hintsBlocked = hintsBlocked
            )
        }

        // LEVEL_FILTER, LEVEL_GROUP, LEVEL_HIDDEN, LEVEL_CASCADE — all use Filter/Group component as default
        else -> {
            FilterLevelPlaceholder(
                levelIndex = state.levelIndex,
                difficulty = avgDiff,
                category = mainCategory,
                onComplete = { stats -> dispatch(AppAction.LevelComplete(stats)) },
                onGameOver = {
                    dispatch(
                        AppAction.LevelComplete(
                            com.snickerdoodlez.wordpairing.types.LevelCompleteStats(
                                timeMs = 0, moves = 0, failed = true
                            )
                        )
                    )
                },
                onExit = { dispatch(AppAction.ExitLevel) },
                isReviewing = state.isReviewing,
                onNext = { dispatch(AppAction.ProceedToNextLevel) },
                hintCount = state.hintCount,
                onHintClick = { dispatch(AppAction.RequestHint) },
                hintsBlocked = hintsBlocked
            )
        }
    }
}

// ── UI Placeholder Composables ─────────────────────────────────────────────
//
// These are minimal stubs representing screens/overlays that need Compose ports.
// They provide the correct UDF wiring (state down, actions up) without full UI.
// Replace each with the actual ported component during integration.

@Composable
private fun LoadingFallback() {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        CircularProgressIndicator(color = NeonColors.White)
    }
}

@Composable
private fun FooterPlaceholder() {
    // Mirror of <Footer /> — ad banner footer
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .height(70.dp)
            .background(NeonColors.Zinc950)
            .border(1.dp, NeonColors.Zinc800),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = "Footer — Ad Banner",
            color = NeonColors.White.copy(alpha = 0.3f),
            fontSize = 12.sp,
            fontWeight = FontWeight.Bold
        )
    }
}

@Composable
private fun DifficultyToast(state: AppState) {
    val isMastery = state.totalStars >= 50
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black.copy(alpha = 0.7f)),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier
                .clip(RoundedCornerShape(24.dp))
                .background(NeonColors.Black)
                .border(4.dp, NeonColors.White, RoundedCornerShape(24.dp))
                .padding(horizontal = 40.dp, vertical = 32.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Text(
                text = if (isMastery) "Mastery" else "Difficulty",
                color = NeonColors.SkyBlue,
                fontWeight = FontWeight.Black,
                fontSize = if (isMastery) 48.sp else 36.sp
            )
            Text(
                text = "Unlocked",
                color = NeonColors.Orange,
                fontWeight = FontWeight.Black,
                fontSize = 32.sp
            )
            Box(
                modifier = Modifier
                    .background(NeonColors.Lime)
                    .padding(horizontal = 16.dp, vertical = 4.dp)
            ) {
                Text(
                    text = if (isMastery) "7-Row Grid Activated" else "Medium Mode Active",
                    color = NeonColors.Black,
                    fontWeight = FontWeight.Black,
                    fontSize = 16.sp
                )
            }
        }
    }
}

@Composable
private fun HowToPlayPlaceholder(onStart: () -> Unit) {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text("How To Play", color = NeonColors.White, fontSize = 24.sp, fontWeight = FontWeight.Black)
            Spacer(Modifier.height(16.dp))
            Box(
                modifier = Modifier
                    .clip(RoundedCornerShape(16.dp))
                    .background(NeonColors.NeonBlue)
                    .padding(horizontal = 24.dp, vertical = 12.dp),
                contentAlignment = Alignment.Center
            ) {
                Text("START", color = NeonColors.Black, fontWeight = FontWeight.Black, fontSize = 18.sp)
            }
        }
    }
}

@Composable
private fun MenuPlaceholder(
    onStart: () -> Unit,
    onSettings: () -> Unit,
    onStats: () -> Unit,
    lastLevel: Int,
    selectedDifficulty: DifficultyLevel?,
    unlockedDifficulties: List<DifficultyLevel>,
    onDifficultyChange: (DifficultyLevel) -> Unit
) {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text("WORD PAIRING", color = NeonColors.White, fontSize = 32.sp, fontWeight = FontWeight.Black)
            Text("Level $lastLevel", color = NeonColors.White.copy(alpha = 0.5f), fontSize = 16.sp)
        }
    }
}

@Composable
private fun StatsOverlayPlaceholder(onClose: () -> Unit) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black.copy(alpha = 0.9f)),
        contentAlignment = Alignment.Center
    ) {
        Text("STATS OVERLAY", color = NeonColors.White, fontSize = 24.sp, fontWeight = FontWeight.Black)
    }
}

@Composable
private fun HintAdOverlayPlaceholder(
    onClose: () -> Unit,
    onWatchAd: () -> Unit,
    hintsAvailable: Int,
    isNative: Boolean
) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black.copy(alpha = 0.9f)),
        contentAlignment = Alignment.Center
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text("Need Hints?", color = NeonColors.White, fontSize = 20.sp, fontWeight = FontWeight.Black)
            Text("Available: $hintsAvailable", color = NeonColors.Yellow, fontSize = 14.sp)
        }
    }
}

@Composable
private fun CategorySelectorPlaceholder(
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
        Text("CATEGORY SELECTOR", color = NeonColors.White, fontSize = 24.sp, fontWeight = FontWeight.Black)
    }
}

@Composable
private fun AdLoadingOverlay() {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black.copy(alpha = 0.8f)),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier
                .clip(RoundedCornerShape(24.dp))
                .background(NeonColors.Black)
                .border(2.dp, NeonColors.White, RoundedCornerShape(24.dp))
                .padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            CircularProgressIndicator(color = NeonColors.Yellow)
            Text(
                "Ad Loading...",
                color = NeonColors.White,
                fontWeight = FontWeight.Black,
                fontSize = 18.sp
            )
        }
    }
}

// ── Level Placeholders ─────────────────────────────────────────────────────

@Composable
private fun ExpansionLevelPlaceholder(
    tier: String,
    diffKey: String,
    onComplete: (com.snickerdoodlez.wordpairing.types.LevelCompleteStats) -> Unit,
    isReviewing: Boolean,
    onNext: () -> Unit,
    hintCount: Int,
    onHintClick: () -> Unit,
    hintsBlocked: Boolean
) {
    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
        Text(
            "EXPANSION ($tier)", color = NeonColors.White, fontSize = 24.sp, fontWeight = FontWeight.Black
        )
    }
}

@Composable
private fun ExpansionTestLevelPlaceholder(
    tier: String,
    diffKey: String,
    onComplete: (com.snickerdoodlez.wordpairing.types.LevelCompleteStats) -> Unit,
    isReviewing: Boolean,
    onNext: () -> Unit,
    hintCount: Int,
    onHintClick: () -> Unit,
    hintsBlocked: Boolean
) {
    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
        Text(
            "EXPANSION TEST ($tier)", color = NeonColors.White, fontSize = 24.sp, fontWeight = FontWeight.Black
        )
    }
}

@Composable
private fun Level1StandardPlaceholder(
    mode: GameMode,
    levelIndex: Int,
    difficulty: Double,
    category: String,
    themeName: String?,
    onComplete: (com.snickerdoodlez.wordpairing.types.LevelCompleteStats) -> Unit,
    onExit: () -> Unit,
    isReviewing: Boolean,
    onNext: () -> Unit,
    hintCount: Int,
    onHintClick: () -> Unit,
    hintsBlocked: Boolean
) {
    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text(
                if (mode == GameMode.LEVEL_SYNONYMS) "SYNONYMS" else "CLASSIC",
                color = NeonColors.White, fontSize = 24.sp, fontWeight = FontWeight.Black
            )
            Text("Level $levelIndex", color = NeonColors.White.copy(alpha = 0.5f), fontSize = 14.sp)
            Text(category, color = NeonColors.Cyan, fontSize = 12.sp)
        }
    }
}

@Composable
private fun ThemedLevelPlaceholder(
    levelIndex: Int,
    themeName: String?,
    onComplete: (com.snickerdoodlez.wordpairing.types.LevelCompleteStats) -> Unit,
    isReviewing: Boolean,
    onNext: () -> Unit,
    hintCount: Int,
    onHintClick: () -> Unit,
    hintsBlocked: Boolean
) {
    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text("THEMED", color = NeonColors.White, fontSize = 24.sp, fontWeight = FontWeight.Black)
            Text(themeName ?: "", color = NeonColors.Purple, fontSize = 14.sp)
        }
    }
}

@Composable
private fun EmojiLevelPlaceholder(
    levelIndex: Int,
    difficulty: Double,
    category: String,
    onComplete: (com.snickerdoodlez.wordpairing.types.LevelCompleteStats) -> Unit,
    onExit: () -> Unit,
    isReviewing: Boolean,
    onNext: () -> Unit,
    hintCount: Int,
    onHintClick: () -> Unit,
    hintsBlocked: Boolean
) {
    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
        Text("EMOJI", color = NeonColors.White, fontSize = 24.sp, fontWeight = FontWeight.Black)
    }
}

@Composable
private fun MindMatchLevelPlaceholder(
    levelIndex: Int,
    difficulty: Double,
    category: String,
    onComplete: (com.snickerdoodlez.wordpairing.types.LevelCompleteStats) -> Unit,
    onExit: () -> Unit,
    isReviewing: Boolean,
    onNext: () -> Unit,
    hintCount: Int,
    onHintClick: () -> Unit,
    hintsBlocked: Boolean
) {
    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
        Text("MIND MATCH", color = NeonColors.White, fontSize = 24.sp, fontWeight = FontWeight.Black)
    }
}

@Composable
private fun FilterLevelPlaceholder(
    levelIndex: Int,
    difficulty: Double,
    category: String,
    onComplete: (com.snickerdoodlez.wordpairing.types.LevelCompleteStats) -> Unit,
    onGameOver: () -> Unit,
    onExit: () -> Unit,
    isReviewing: Boolean,
    onNext: () -> Unit,
    hintCount: Int,
    onHintClick: () -> Unit,
    hintsBlocked: Boolean
) {
    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
        Text("FILTER / GROUP", color = NeonColors.White, fontSize = 24.sp, fontWeight = FontWeight.Black)
    }
}