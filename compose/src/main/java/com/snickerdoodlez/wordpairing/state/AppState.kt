package com.snickerdoodlez.wordpairing.state

import com.snickerdoodlez.wordpairing.types.DifficultyLevel
import com.snickerdoodlez.wordpairing.types.GameMode
import com.snickerdoodlez.wordpairing.types.LevelPackage
import com.snickerdoodlez.wordpairing.types.LevelSummary

/**
 * Single immutable state data class for the entire Compose application.
 *
 * Mirrors ALL individual useState hooks from App.tsx, grouped into logical clusters
 * to minimize recomposition scope when using derivedStateOf / keyed composition.
 *
 * Design: Unidirectional Data Flow (UDF) — all mutable state is hoisted into
 * AppStateMachine; composables receive this immutable snapshot and can only
 * emit Actions back up.
 *
 * @param navigation Current screen routing state
 * @param levelRuntime Active level execution state (null when on menu/how-to-play)
 * @param overlays Boolean toggles for each overlay portal
 * @param preferences User-configurable settings persisted via AppStorage
 * @param adHint AdMob and hint system transient state
 * @param layout True once the root viewport has been measured with positive dimensions
 * @param privacyOptionsRequired Whether GDPR/ATT consent options need to be shown
 * @param difficultyToastVisible Whether the difficulty-unlocked interstitial is showing
 * @param adInFlight Whether a rewarded ad request is pending (concurrency guard)
 * @param totalStars Cached total star count for difficulty-gating calculations
 * @param unlockedDifficulties List of difficulty tiers unlocked by star count
 */
data class AppState(
    // ── Navigation ─────────────────────────────────────────────────────────
    val mode: GameMode = GameMode.MENU,
    val showHowToPlay: Boolean = false,
    val levelIndex: Int = 1,
    val forcedMode: GameMode? = null,

    // ── Level Runtime ──────────────────────────────────────────────────────
    val levelPackage: LevelPackage? = null,
    val isReviewing: Boolean = false,
    val currentSummary: LevelSummary? = null,
    val activeCategories: List<CategoryItem> = emptyList(),

    // ── UI Overlays ────────────────────────────────────────────────────────
    val showSettings: Boolean = false,
    val showStats: Boolean = false,
    val showCategorySelector: Boolean = false,
    val showHintAd: Boolean = false,
    val showDifficultyToast: Boolean = false,

    // ── User Preferences ───────────────────────────────────────────────────
    val isMusicOn: Boolean = true,
    val hintsEnabled: Boolean = true,
    val isAutoPlaying: Boolean = false,
    val enabledModes: List<GameMode> = emptyList(),
    val customPoolIds: List<String> = emptyList(),
    val selectedDifficulty: DifficultyLevel? = null,

    // ── Ad / Hint State ────────────────────────────────────────────────────
    val hintCount: Int = 2,
    val isAdLoading: Boolean = false,
    val privacyOptionsRequired: Boolean = false,

    // ── Layout ─────────────────────────────────────────────────────────────
    val layoutReady: Boolean = false,

    // ── Derived / Cached Fields ────────────────────────────────────────────
    val totalStars: Int = 0,
    val unlockedDifficulties: List<DifficultyLevel> = listOf(DifficultyLevel.EASY)
)

/**
 * Mirrors the `categories` prop objects passed to SettingsMenu.
 * Each item represents one active category with its solved status.
 */
data class CategoryItem(
    val name: String,
    val isSolved: Boolean
)