package com.snickerdoodlez.wordpairing.types

/**
 * Difficulty level — mirror of TypeScript DifficultyLevel union 'easy' | 'medium' | 'hard'
 * Also mirrored locally in SettingsMenu.kt; this is the canonical definition for
 * state machine usage (App.kt, AppStorage, etc.).
 */
enum class DifficultyLevel(val key: String, val label: String) {
    EASY("easy", "Easy"),
    MEDIUM("medium", "Medium"),
    HARD("hard", "Hard");

    companion object {
        fun fromKey(key: String?): DifficultyLevel? = when (key) {
            "easy" -> EASY
            "medium" -> MEDIUM
            "hard" -> HARD
            else -> null
        }
    }
}