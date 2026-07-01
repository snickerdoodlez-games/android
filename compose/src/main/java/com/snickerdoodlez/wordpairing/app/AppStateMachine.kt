package com.snickerdoodlez.wordpairing.app

import com.snickerdoodlez.wordpairing.types.ALL_MODES
import com.snickerdoodlez.wordpairing.types.DifficultyLevel
import com.snickerdoodlez.wordpairing.types.GameMode
import com.snickerdoodlez.wordpairing.types.LevelCompleteStats
import com.snickerdoodlez.wordpairing.types.LevelSummary
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

/**
 * Single source of truth for all game state — replaces the 25+ useState hooks
 * and layered useEffect blocks in App.tsx.
 *
 * Architecture: Unidirectional Data Flow (UDF)
 *   1. Composable renders from [state] (read-only immutable AppState)
 *   2. User/system events → [dispatch] action
 *   3. Action processed → state.update { } → new state emitted
 *   4. Side effects (ads, audio, persistence) launched as coroutines
 *
 * This class is a pure Kotlin state machine. In a real Android app, it would
 * extend `ViewModel()` and use `viewModelScope`, but for this portable port
 * it accepts a [scope] parameter for lifecycle-aware coroutines.
 *
 * @param scope CoroutineScope for launching side effects (ads, timers, CSV loading).
 *              In production, this would be `viewModelScope`.
 */
class AppStateMachine(
    private val storage: AppStorage = AppStorage,
    private val scope: CoroutineScope
) {

    // ── Internal mutable state ─────────────────────────────────────────────
    private val _state = MutableStateFlow(AppState())
    val state: StateFlow<AppState> = _state.asStateFlow()

    // ── Concurrency guards (mirrors useRef in App.tsx) ─────────────────────
    private var adInFlight = false
    private var hintAppliedHandler: Job? = null
    private var autoPlayTimer: Job? = null

    // ── Initialization ─────────────────────────────────────────────────────
    init {
        // 1. Restore saved game progress (mirrors useEffect [] in App.tsx)
        restoreSavedProgress()

        // 2. Load user preferences from storage
        loadPreferences()

        // 3. Compute unlocked difficulties
        recomputeDerivedState()

        // 4. Kick off async CSV/level-package loading (handled reactively)
        loadLevelPackage()
    }

    /**
     * Dispatch an action into the state machine.
     * This replaces ALL individual setState calls, handler callbacks,
     * and CustomEvent dispatches from App.tsx.
     */
    fun dispatch(action: AppAction) {
        when (action) {
            // ── Navigation ─────────────────────────────────────────────────
            is AppAction.StartFromMenu -> handleStartFromMenu()
            is AppAction.DismissHowToPlay -> handleDismissHowToPlay()
            is AppAction.GoToMenu -> handleGoToMenu()
            is AppAction.ProceedToNextLevel -> handleProceedToNextLevel()
            is AppAction.SelectMode -> handleSelectMode(action.mode)
            is AppAction.SetForcedMode -> handleSetForcedMode(action.mode)

            // ── Level Runtime ──────────────────────────────────────────────
            is AppAction.LevelComplete -> handleLevelComplete(action.stats)
            is AppAction.ExitLevel -> handleExitLevel()

            // ── UI Overlays ────────────────────────────────────────────────
            is AppAction.SetShowSettings -> _state.update { it.copy(showSettings = action.show) }
            is AppAction.SetShowStats -> _state.update { it.copy(showStats = action.show) }
            is AppAction.SetShowCategorySelector -> _state.update { it.copy(showCategorySelector = action.show) }
            is AppAction.SetShowHintAd -> _state.update { it.copy(showHintAd = action.show) }
            is AppAction.ShowDifficultyToast -> {
                _state.update { it.copy(showDifficultyToast = true) }
                scope.launch {
                    delay(3500)
                    _state.update { it.copy(showDifficultyToast = false) }
                }
            }
            is AppAction.HideDifficultyToast -> _state.update { it.copy(showDifficultyToast = false) }

            // ── User Preferences ───────────────────────────────────────────
            is AppAction.ToggleMusic -> handleToggleMusic()
            is AppAction.ToggleAutoPlay -> handleToggleAutoPlay()
            is AppAction.ToggleHintEnabled -> handleToggleHintEnabled(action.enabled)
            is AppAction.ToggleGameMode -> handleToggleGameMode(action.mode)
            is AppAction.SetCustomPoolIds -> handleSetCustomPoolIds(action.ids)
            is AppAction.SetSelectedDifficulty -> handleSetSelectedDifficulty(action.difficulty)
            is AppAction.ResetProgress -> handleResetProgress()

            // ── Hint System ────────────────────────────────────────────────
            is AppAction.RequestHint -> handleRequestHint()
            is AppAction.HintApplied -> handleHintApplied()

            // ── Ad Lifecycle ────────────────────────────────────────────────
            is AppAction.WatchRewardedAd -> handleWatchRewardedAd()
            is AppAction.RewardedAdCompleted -> handleRewardedAdCompleted()
            is AppAction.RewardedAdDismissed -> handleRewardedAdDismissed()
            is AppAction.ShowAdLoading -> _state.update { it.copy(isAdLoading = true) }
            is AppAction.HideAdLoading -> _state.update { it.copy(isAdLoading = false) }
            is AppAction.MarkPrivacyRequired -> _state.update { it.copy(privacyOptionsRequired = true) }

            // ── System Lifecycle ───────────────────────────────────────────
            is AppAction.LayoutReady -> _state.update { it.copy(layoutReady = true) }
            is AppAction.AppBackgrounded -> handleAppBackgrounded()
            is AppAction.AppForegrounded -> handleAppForegrounded()
        }
    }

    // ── Navigation Handlers ────────────────────────────────────────────────

    private fun handleStartFromMenu() {
        val currentState = _state.value

        // Mirror: if (levelIndex === 1) { setShowHowToPlay(true) } else { setMode(...) }
        if (currentState.levelIndex == 1) {
            _state.update { it.copy(showHowToPlay = true) }
        } else {
            val targetMode = currentState.forcedMode
                ?: currentState.levelPackage?.mode
                ?: storage.getLevelMode(currentState.levelIndex, currentState.enabledModes)
            _state.update { it.copy(mode = targetMode) }
        }
    }

    private fun handleDismissHowToPlay() {
        val currentState = _state.value
        val targetMode = currentState.forcedMode
            ?: currentState.levelPackage?.mode
            ?: storage.getLevelMode(currentState.levelIndex, currentState.enabledModes)
        _state.update { it.copy(showHowToPlay = false, mode = targetMode) }
    }

    private fun handleGoToMenu() {
        _state.update { it.copy(forcedMode = null, mode = GameMode.MENU, showSettings = false) }
    }

    private fun handleProceedToNextLevel() {
        val currentState = _state.value
        val starsBefore = currentState.totalStars

        // Mirror: if (currentSummary && currentSummary.score > 0) updateStats(...)
        val summary = currentState.currentSummary
        if (summary != null && summary.score > 0) {
            storage.updateStats(
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

        val updatedStats = storage.getStats()
        val starsAfter = updatedStats.totalStars

        // Check for star-based hint rewards (every 30 stars)
        storage.checkAndAwardStarHint(starsAfter)

        // Mirror: Difficulty toast logic
        if ((starsBefore < 20 && starsAfter >= 20) || (starsBefore < 50 && starsAfter >= 50)) {
            dispatch(AppAction.ShowDifficultyToast)
        }

        // Mirror: show interstitial ad (fire-and-forget)
        // On native Android this would call AdMob.showInterstitial()
        // For this port, it's a no-op placeholder

        val nextLevel = currentState.levelIndex + 1
        storage.saveLevel(nextLevel)

        val nextMode = storage.getLevelMode(nextLevel, currentState.enabledModes)
        _state.update {
            it.copy(
                levelIndex = nextLevel,
                mode = nextMode,
                isReviewing = false,
                currentSummary = null,
                hintCount = storage.getAvailableHints()
            )
        }

        // Recompute derived state after stats update
        recomputeDerivedState()

        // Trigger level package reload for the new level index
        loadLevelPackage()
    }

    private fun handleSelectMode(mode: GameMode) {
        _state.update { it.copy(forcedMode = mode, mode = mode, showSettings = false) }
    }

    private fun handleSetForcedMode(mode: GameMode?) {
        _state.update { it.copy(forcedMode = mode) }
    }

    // ── Level Runtime Handlers ─────────────────────────────────────────────

    private fun handleLevelComplete(stats: LevelCompleteStats) {
        if (stats.failed) {
            // Mirror: stats.failed → set review without score/stars
            _state.update {
                it.copy(
                    isReviewing = true,
                    currentSummary = LevelSummary(
                        levelIndex = it.levelIndex,
                        mode = it.mode,
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
                )
            }
            return
        }

        val currentState = _state.value
        val timeInSeconds = stats.timeMs / 1000.0
        val stars = when {
            timeInSeconds <= 90 -> 3
            timeInSeconds <= 120 -> 2
            else -> 1
        }

        val wordsFoundCount = stats.solvedWords.size
        val dataArr = currentState.levelPackage?.data ?: emptyList()
        val avgDifficulty = if (dataArr.isNotEmpty()) {
            dataArr.sumOf { it.difficulty }.toDouble() / dataArr.size
        } else 0.0

        val masteryMultiplier = when (stars) {
            3 -> 1.5
            2 -> 1.2
            else -> 1.0
        }
        val finalScore = ((wordsFoundCount * avgDifficulty) * masteryMultiplier).toInt()

        _state.update {
            it.copy(
                isReviewing = true,
                currentSummary = LevelSummary(
                    levelIndex = it.levelIndex,
                    mode = it.mode,
                    timeMs = stats.timeMs,
                    moves = stats.moves,
                    mistakes = stats.mistakes,
                    score = finalScore,
                    stars = stars,
                    difficulty = avgDifficulty,
                    solvedCategoryIds = stats.solvedCategoryIds,
                    solvedWords = stats.solvedWords,
                    broadCategories = dataArr.map { row -> row.broadCategory ?: "General" }
                )
            )
        }
    }

    private fun handleExitLevel() {
        _state.update { it.copy(mode = GameMode.MENU) }
    }

    // ── User Preference Handlers ───────────────────────────────────────────

    private fun handleToggleMusic() {
        _state.update { it.copy(isMusicOn = !it.isMusicOn) }
        // Mirror: audio.setSound(!isMusicOn)
        // In Android Compose port this would call the audio service
    }

    private fun handleToggleAutoPlay() {
        val next = !_state.value.isAutoPlaying
        _state.update { it.copy(isAutoPlaying = next) }
        storage.saveAutoPlay(next)

        // Mirror: Auto-advance timer when auto-play + reviewing
        autoPlayTimer?.cancel()
        if (next && _state.value.isReviewing) {
            autoPlayTimer = scope.launch {
                delay(3000)
                dispatch(AppAction.ProceedToNextLevel)
            }
        }
    }

    private fun handleToggleHintEnabled(enabled: Boolean) {
        _state.update { it.copy(hintsEnabled = enabled) }
    }

    private fun handleToggleGameMode(mode: GameMode) {
        val currentModes = _state.value.enabledModes
        val nextModes = if (currentModes.contains(mode)) {
            // Mirror: can't remove last mode — keep if only 1
            if (currentModes.size > 1) currentModes.filter { it != mode } else currentModes
        } else {
            currentModes + mode
        }
        _state.update { it.copy(enabledModes = nextModes) }
        storage.saveEnabledModes(nextModes)

        // Mode list changed → reload level package
        loadLevelPackage()
    }

    private fun handleSetCustomPoolIds(ids: List<String>) {
        _state.update { it.copy(customPoolIds = ids) }
        storage.saveCustomPool(ids)
        loadLevelPackage()
    }

    private fun handleSetSelectedDifficulty(difficulty: DifficultyLevel) {
        _state.update { it.copy(selectedDifficulty = difficulty) }
        storage.saveSelectedDifficulty(difficulty)
        loadLevelPackage()
    }

    private fun handleResetProgress() {
        storage.clearAll()
        _state.update {
            AppState() // Full reset to defaults
        }
        loadLevelPackage()
    }

    // ── Hint System Handlers ───────────────────────────────────────────────

    private fun handleRequestHint() {
        val current = _state.value

        // Mirror: if (isReviewing) return
        if (current.isReviewing) return

        if (!current.hintsEnabled) {
            // Hints are turned off — show HintAdOverlay
            _state.update { it.copy(showHintAd = true) }
            return
        }

        val available = storage.getAvailableHints()
        if (available > 0) {
            // Hints available — level component will listen and dispatch HintApplied
            // (In the Compose port, this would be an explicit callback to the level)
        } else {
            // Out of hints — show HintAdOverlay
            _state.update { it.copy(showHintAd = true) }
        }
    }

    private fun handleHintApplied() {
        val available = storage.getAvailableHints()
        if (available > 0) {
            val remaining = storage.useHint()
            _state.update { it.copy(hintCount = remaining) }
            // Mirror: audio.playHint()
        }
    }

    // ── Ad Lifecycle Handlers ──────────────────────────────────────────────

    private fun handleWatchRewardedAd() {
        if (_state.value.isReviewing || adInFlight) return
        adInFlight = true

        // Mirror: setIsAdLoading(true)
        _state.update { it.copy(isAdLoading = true) }

        // For this port, simulate a rewarded ad completion after a brief delay
        // In production Android, this would use AdMob.showRewardVideoAd()
        scope.launch {
            delay(1500) // Simulate ad loading
            dispatch(AppAction.RewardedAdCompleted)
        }
    }

    private fun handleRewardedAdCompleted() {
        val next = storage.addHints(3)
        _state.update { it.copy(hintCount = next, isAdLoading = false) }
        adInFlight = false
    }

    private fun handleRewardedAdDismissed() {
        _state.update { it.copy(isAdLoading = false) }
        adInFlight = false
    }

    // ── System Lifecycle Handlers ──────────────────────────────────────────

    private fun handleAppBackgrounded() {
        val current = _state.value
        storage.updateLastActiveTimestamp()
        storage.saveAppState(
            com.snickerdoodlez.wordpairing.types.SavedAppState(
                mode = current.mode,
                levelIndex = current.levelIndex,
                isReviewing = current.isReviewing,
                isAutoPlaying = current.isAutoPlaying,
                hintsEnabled = current.hintsEnabled,
                isMusicOn = current.isMusicOn,
                showHowToPlay = current.showHowToPlay,
                timestamp = System.currentTimeMillis()
            )
        )
    }

    private fun handleAppForegrounded() {
        storage.updateLastActiveTimestamp()
    }

    // ── Internal Helpers ───────────────────────────────────────────────────

    /**
     * Restore saved game progress from storage on cold start.
     * Mirror of the initial-load useEffect in App.tsx.
     *
     * Always starts at MENU — never auto-navigates into a level.
     */
    private fun restoreSavedProgress() {
        val savedState = storage.getAppState()
        val timeSinceLastActive = storage.getTimeSinceLastActive()
        val FIVE_MINUTES_MS = 5 * 60 * 1000L

        if (savedState != null && timeSinceLastActive < FIVE_MINUTES_MS) {
            // Within 5 min — restore progress, always start at MENU
            _state.update {
                it.copy(
                    levelIndex = savedState.levelIndex,
                    hintsEnabled = savedState.hintsEnabled,
                    isAutoPlaying = savedState.isAutoPlaying,
                    isMusicOn = savedState.isMusicOn,
                    mode = GameMode.MENU,
                    isReviewing = savedState.isReviewing
                )
            }
            storage.clearAppState()
        } else if (savedState != null) {
            // Longer time away — restore progress, start from menu
            _state.update {
                it.copy(
                    levelIndex = savedState.levelIndex,
                    hintsEnabled = savedState.hintsEnabled,
                    isAutoPlaying = savedState.isAutoPlaying,
                    isMusicOn = savedState.isMusicOn,
                    mode = GameMode.MENU
                )
            }
            storage.clearAppState()
        } else {
            // No saved state — normal initial load
            _state.update {
                it.copy(
                    levelIndex = storage.getSavedLevel(),
                    hintsEnabled = true,
                    isAutoPlaying = storage.getAutoPlay()
                )
            }
        }
    }

    /**
     * Load persistent user preferences from storage.
     */
    private fun loadPreferences() {
        _state.update {
            it.copy(
                enabledModes = storage.getEnabledModes(),
                customPoolIds = storage.getCustomPool(),
                selectedDifficulty = storage.getSelectedDifficulty(),
                hintCount = storage.getAvailableHints()
            )
        }
    }

    /**
     * Compute a level package from the current navigation state.
     * Called whenever levelIndex, enabledModes, customPoolIds, forcedMode,
     * or selectedDifficulty changes.
     *
     * In production, this would call getLevelPackage() from levelContent.ts
     * (ported to Kotlin). For this stub, it's a placeholder.
     */
    private fun loadLevelPackage() {
        scope.launch {
            // Mirror: await waitForDataInit() + waitForSynonymDataInit()
            // In the Compose port, CSV loading would be handled via Kotlin coroutines

            // Stub: create an empty level package for now
            // Real implementation would call:
            //   val pkg = getLevelPackage(levelIndex, enabledModes, customPoolIds, forcedMode, selectedDifficulty)
            val current = _state.value
            val mode = storage.getLevelMode(current.levelIndex, current.enabledModes)
            val fallbackPackage = com.snickerdoodlez.wordpairing.types.LevelPackage(
                mode = mode,
                data = emptyList(),
                themeName = null
            )
            _state.update { it.copy(levelPackage = fallbackPackage) }
        }
    }

    /**
     * Recompute derived fields (totalStars, unlockedDifficulties) from storage.
     * Called after stats updates and on init.
     */
    private fun recomputeDerivedState() {
        val stats = storage.getStats()
        val totalStars = stats.totalStars
        val unlocked = buildList {
            add(DifficultyLevel.EASY)
            if (totalStars >= 20) add(DifficultyLevel.MEDIUM)
            if (totalStars >= 50) add(DifficultyLevel.HARD)
        }
        _state.update { it.copy(totalStars = totalStars, unlockedDifficulties = unlocked) }
    }

    // ── Lifecycle Methods ──────────────────────────────────────────────────

    /**
     * Call when the app's lifecycle moves to background (onStop/onPause).
     * Saves critical state for restoration.
     */
    fun onBackground() {
        dispatch(AppAction.AppBackgrounded)
    }

    /**
     * Call when the app's lifecycle moves to foreground (onStart/onResume).
     * Updates the last-active timestamp.
     */
    fun onForeground() {
        dispatch(AppAction.AppForegrounded)
    }

    /**
     * Call when the root composable's viewport has been measured.
     * Sets layoutReady = true to unblock rendering.
     */
    fun onLayoutReady() {
        dispatch(AppAction.LayoutReady)
    }

    /**
     * Cancel all pending coroutines. Call when the state machine is being
     * disposed (e.g., Activity destroyed).
     */
    fun dispose() {
        autoPlayTimer?.cancel()
        hintAppliedHandler?.cancel()
    }
}