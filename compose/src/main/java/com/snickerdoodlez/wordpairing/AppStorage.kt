package com.snickerdoodlez.wordpairing

import com.snickerdoodlez.wordpairing.types.DifficultyLevel
import com.snickerdoodlez.wordpairing.types.GameMode
import com.snickerdoodlez.wordpairing.types.SavedAppState
import com.snickerdoodlez.wordpairing.types.ALL_MODES
import com.snickerdoodlez.wordpairing.types.DETERMINISTIC_LEVEL_SEQUENCE

/**
 * AppStorage — persistence layer stub: 1:1 mirror of services/storage.ts functions.
 *
 * In a real Android app, this would use SharedPreferences, DataStore, or Room.
 * For this Compose port, all methods are stubbed with default return values.
 * Replace each body with actual persistence calls during integration.
 */
object AppStorage {

    // ─── Stats accumulator (mirrors GameStats interface in storage.ts) ────────

    data class GameStats(
        val levelsCompleted: Int = 0,
        val totalMoves: Int = 0,
        val totalTimeMs: Long = 0,
        val rowsSolved: Int = 0,
        val solvedCategoryIds: List<String> = emptyList(),
        val solvedWords: List<String> = emptyList(),
        val totalScore: Int = 0,
        val totalStars: Int = 0,
        val lastLevelStars: Int = 0,
        val lastLevelDifficulty: Double = 0.0,
        val lastLevelBroadCategories: List<String> = emptyList()
    )

    // ─── Level persistence (mirrors getSavedLevel / saveLevel) ───────────────

    fun getSavedLevel(): Int = 1 // stub

    fun saveLevel(level: Int) { /* stub */ }

    // ─── Stats persistence (mirrors getStats / updateStats) ──────────────────

    private var cachedStats = GameStats()

    fun getStats(): GameStats = cachedStats

    fun updateStats(
        levelsCompleted: Int = 0,
        totalMoves: Int = 0,
        totalTimeMs: Long = 0,
        rowsSolved: Int = 0,
        solvedCategoryIds: List<String> = emptyList(),
        solvedWords: List<String> = emptyList(),
        totalScore: Int = 0,
        totalStars: Int = 0,
        lastLevelStars: Int = 0,
        lastLevelDifficulty: Double = 0.0,
        lastLevelBroadCategories: List<String> = emptyList()
    ) {
        cachedStats = GameStats(
            levelsCompleted = cachedStats.levelsCompleted + levelsCompleted,
            totalMoves = cachedStats.totalMoves + totalMoves,
            totalTimeMs = cachedStats.totalTimeMs + totalTimeMs,
            rowsSolved = cachedStats.rowsSolved + rowsSolved,
            solvedCategoryIds = (cachedStats.solvedCategoryIds + solvedCategoryIds).distinct(),
            solvedWords = (cachedStats.solvedWords + solvedWords).distinct(),
            totalScore = cachedStats.totalScore + totalScore,
            totalStars = cachedStats.totalStars + totalStars,
            lastLevelStars = lastLevelStars,
            lastLevelDifficulty = lastLevelDifficulty,
            lastLevelBroadCategories = lastLevelBroadCategories
        )
    }

    // ─── Enabled modes (mirrors getEnabledModes / saveEnabledModes) ──────────

    private var cachedEnabledModes: List<GameMode> = ALL_MODES

    fun getEnabledModes(): List<GameMode> = cachedEnabledModes

    fun saveEnabledModes(modes: List<GameMode>) {
        cachedEnabledModes = modes
        // stub — persist to SharedPreferences
    }

    // ─── Custom pool (mirrors getCustomPool / saveCustomPool) ─────────────────

    private var cachedCustomPool: List<String> = emptyList()

    fun getCustomPool(): List<String> = cachedCustomPool

    fun saveCustomPool(ids: List<String>) {
        cachedCustomPool = ids
        // stub — persist to SharedPreferences
    }

    // ─── Auto play (mirrors getAutoPlay / saveAutoPlay) ──────────────────────

    private var isAutoPlaying: Boolean = false

    fun getAutoPlay(): Boolean = isAutoPlaying

    fun saveAutoPlay(enabled: Boolean) {
        isAutoPlaying = enabled
        // stub — persist to SharedPreferences
    }

    // ─── Selected difficulty (mirrors getSelectedDifficulty / saveSelectedDifficulty)

    private var selectedDifficulty: DifficultyLevel? = null

    fun getSelectedDifficulty(): DifficultyLevel? = selectedDifficulty

    fun saveSelectedDifficulty(diff: DifficultyLevel) {
        selectedDifficulty = diff
        // stub — persist to SharedPreferences
    }

    // ─── Hint service equivalents (mirrors hintService.ts) ────────────────────

    private var availableHints: Int = 2

    fun getAvailableHints(): Int = availableHints

    fun useHint(): Int {
        if (availableHints > 0) availableHints--
        return availableHints
    }

    fun addHints(count: Int): Int {
        availableHints += count
        return availableHints
    }

    fun checkAndAwardStarHint(totalStars: Int) {
        // Every 30 total stars, award +2 hints (mirrors hintService.ts)
        // stub — real implementation tracks milestone thresholds
    }

    // ─── Level mode resolver (mirrors getLevelMode in levelContent.ts) ────────

    fun getLevelMode(index: Int, enabledModes: List<GameMode>): GameMode {
        // 1:1 mirror of getLevelMode() in services/levelContent.ts
        if (index < 1) return GameMode.CLASSIC
        val idx = (index - 1) % DETERMINISTIC_LEVEL_SEQUENCE.size
        var mode = DETERMINISTIC_LEVEL_SEQUENCE[idx]
        if (!enabledModes.contains(mode)) {
            // Fallback to first enabled mode if the calculated mode is disabled
            mode = enabledModes.firstOrNull() ?: GameMode.CLASSIC
        }
        return mode
    }

    // ─── App state save/restore (mirrors saveAppState / getAppState) ──────────

    private var savedAppState: SavedAppState? = null

    fun saveAppState(state: SavedAppState) {
        savedAppState = state
        // stub — persist to SharedPreferences
    }

    fun getAppState(): SavedAppState? = savedAppState

    fun clearAppState() {
        savedAppState = null
    }

    fun getTimeSinceLastActive(): Long {
        // stub — returns 0 (within 5-min window) so state is restored
        return 0L
    }

    fun updateLastActiveTimestamp() {
        // stub — persist current time
    }

    // ─── Clear all (mirrors localStorage.clear() on reset progress) ──────────

    fun clearAll() {
        cachedStats = GameStats()
        cachedEnabledModes = ALL_MODES
        cachedCustomPool = emptyList()
        isAutoPlaying = false
        selectedDifficulty = null
        availableHints = 2
        savedAppState = null
        // stub — also clear SharedPreferences
    }
}