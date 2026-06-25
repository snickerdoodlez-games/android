package com.snickerdoodlez.wordpairing.types

/**
 * Game mode enum — mirrors TypeScript `GameMode` from types.ts.
 * Only modes referenced by SettingsMenu are included; extend as needed.
 */
enum class GameMode {
    MENU,
    CLASSIC,
    LEVEL_THEME,
    LEVEL_EMOJI,
    LEVEL_MIND_MATCH,
    LEVEL_SYNONYMS,
    LEVEL_EXPANSION,
    LEVEL_EXPANSION_TEST,
    LEVEL_FILTER,
    LEVEL_GROUP,
    LEVEL_HIDDEN,
    LEVEL_CASCADE,
}
