package com.snickerdoodlez.wordpairing.app

import com.snickerdoodlez.wordpairing.types.DifficultyLevel
import com.snickerdoodlez.wordpairing.types.GameMode
import com.snickerdoodlez.wordpairing.types.LevelCompleteStats

/**
 * Sealed interface capturing ALL user-initiated and system-driven actions
 * that can mutate [AppState].
 *
 * This is the "Events Up" half of Unidirectional Data Flow — composables
 * never mutate state directly; they invoke an action through a lambda
 * of type `(AppAction) -> Unit` provided by the parent.
 *
 * Categories mirror the handler clusters from App.tsx:
 *  - Navigation actions
 *  - Level-completion / review flow actions
 *  - Overlay toggle actions
 *  - Preference mutation actions
 *  - Hint system actions
 *  - Ad lifecycle actions
 *  - System lifecycle actions
 */
sealed interface AppAction {

    // ── Navigation ─────────────────────────────────────────────────────────
    /** Start the game from the main menu (with tutorial check). */
    data object StartFromMenu : AppAction

    /** Dismiss HowToPlay and enter the active game mode. */
    data object DismissHowToPlay : AppAction

    /** Return to the main menu from any screen. */
    data object GoToMenu : AppAction

    /** Advance to the next level after review/success screen. */
    data object ProceedToNextLevel : AppAction

    /** Directly jump to a specific game mode (from settings mode selector). */
    data class SelectMode(val mode: GameMode) : AppAction

    /** Force a specific mode override (used by settings mode-select). */
    data class SetForcedMode(val mode: GameMode?) : AppAction

    // ── Level Runtime ──────────────────────────────────────────────────────
    /** A level has been completed (or failed). Triggers star calculation + review. */
    data class LevelComplete(val stats: LevelCompleteStats) : AppAction

    /** User exits a level mid-play. */
    data object ExitLevel : AppAction

    // ── UI Overlays ────────────────────────────────────────────────────────
    data class SetShowSettings(val show: Boolean) : AppAction
    data class SetShowStats(val show: Boolean) : AppAction
    data class SetShowCategorySelector(val show: Boolean) : AppAction
    data class SetShowHintAd(val show: Boolean) : AppAction

    /** Trigger the difficulty-unlocked toast (auto-dismisses after 3.5s). */
    data object ShowDifficultyToast : AppAction
    data object HideDifficultyToast : AppAction

    // ── User Preferences ───────────────────────────────────────────────────
    data object ToggleMusic : AppAction
    data object ToggleAutoPlay : AppAction
    data class ToggleHintEnabled(val enabled: Boolean) : AppAction
    data class ToggleGameMode(val mode: GameMode) : AppAction
    data class SetCustomPoolIds(val ids: List<String>) : AppAction
    data class SetSelectedDifficulty(val difficulty: DifficultyLevel) : AppAction
    data object ResetProgress : AppAction

    // ── Hint System ────────────────────────────────────────────────────────
    /** User taps the hint lightbulb (or depleted/blocked state). */
    data object RequestHint : AppAction

    /** The level component successfully consumed a hint — decrement counter. */
    data object HintApplied : AppAction

    // ── Ad Lifecycle ───────────────────────────────────────────────────────
    /** User chooses to watch a rewarded ad in HintAdOverlay. */
    data object WatchRewardedAd : AppAction

    /** Rewarded ad was successfully watched — award hints. */
    data object RewardedAdCompleted : AppAction

    /** Rewarded ad was dismissed without reward. */
    data object RewardedAdDismissed : AppAction

    /** Show the ad loading spinner. */
    data object ShowAdLoading : AppAction

    /** Hide the ad loading spinner. */
    data object HideAdLoading : AppAction

    /** Privacy consent form is required for this user. */
    data object MarkPrivacyRequired : AppAction

    // ── System Lifecycle ───────────────────────────────────────────────────
    /** Root viewport has been measured with positive dimensions. */
    data object LayoutReady : AppAction

    /** App is going to background — save state for restoration. */
    data object AppBackgrounded : AppAction

    /** App returned to foreground — update timestamp. */
    data object AppForegrounded : AppAction
}