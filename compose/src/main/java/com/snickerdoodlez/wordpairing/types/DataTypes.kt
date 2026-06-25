package com.snickerdoodlez.wordpairing.types

/**
 * Tile visual/interaction states — 1:1 mirror of TypeScript TileStatus in types.ts
 */
enum class TileStatus {
    NEUTRAL,
    SELECTED,
    SOLVED,
    WRONG,
    CORRECT_PREVIEW,
    PLACEHOLDER,
    HINT,
    EXITING,
    FLIPPING_OUT,
    FLIPPING_IN,
    PLACEHOLDER_COLORED,
    LOCKED,
    SWAP_TARGET,
    SWAPPING,
    FADING_OUT_BG,
    FALLING_OUT
}

/**
 * A single category row parsed from CSV data — 1:1 mirror of TypeScript CSVRow
 */
data class CsvRow(
    val id: String,
    val name: String,
    val words: List<String>,
    val catDict: String? = null,
    val definitions: List<String>? = null,
    val difficulty: Int = 1,
    val broadCategory: String? = null
)

/**
 * A single game tile displayed on the board — 1:1 mirror of TypeScript TileData
 */
data class TileData(
    val id: String,
    val word: String,
    val categoryId: String,
    val categoryName: String,
    val definition: String? = null,
    val status: TileStatus = TileStatus.NEUTRAL,
    val color: String? = null,
    val isEmoji: Boolean = false,
    val isSolved: Boolean = false,
    val isHidden: Boolean = false
)

/**
 * Level completion summary — 1:1 mirror of TypeScript LevelSummary
 */
data class LevelSummary(
    val levelIndex: Int,
    val mode: GameMode,
    val timeMs: Long,
    val mistakes: Int,
    val moves: Int,
    val score: Int,
    val difficulty: Double,
    val stars: Int,
    val solvedCategoryIds: List<String>,
    val solvedWords: List<String>,
    val broadCategories: List<String>
)

/**
 * Level package returned by level content generation — 1:1 mirror of TypeScript LevelPackage
 */
data class LevelPackage(
    val mode: GameMode,
    val data: List<CsvRow>,
    val themeName: String? = null
)

/**
 * App state saved on background — mirror of TypeScript saveAppState payload
 */
data class SavedAppState(
    val mode: GameMode = GameMode.MENU,
    val levelIndex: Int = 1,
    val isReviewing: Boolean = false,
    val isAutoPlaying: Boolean = false,
    val hintsEnabled: Boolean = true,
    val isMusicOn: Boolean = true,
    val showHowToPlay: Boolean = false,
    val timestamp: Long = System.currentTimeMillis()
)

/**
 * Level completion stats passed from level components — mirror of TypeScript handleLevelComplete param
 */
data class LevelCompleteStats(
    val timeMs: Long = 0,
    val moves: Int = 0,
    val solvedCategoryIds: List<String> = emptyList(),
    val solvedWords: List<String> = emptyList(),
    val failed: Boolean = false,
    val mistakes: Int = 0
)

/**
 * Power management state — mirror of TypeScript PowerManagementState
 */
data class PowerManagementState(
    val isDeviceIdleMode: Boolean = false,
    val isPowerSaveMode: Boolean = false,
    val batteryLevel: Float = -1f,
    val isCharging: Boolean = false
)