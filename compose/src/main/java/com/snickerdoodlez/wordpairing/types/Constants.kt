package com.snickerdoodlez.wordpairing.types

// ─── Constants (1:1 mirrored from project's types.ts) ────────────────────────

val SOLVED_COLORS: List<String> = listOf(
    "bg-neon-red border-white",
    "bg-neon-orange border-white",
    "bg-neon-yellow border-white",
    "bg-neon-lime border-white",
    "bg-neon-cyan border-white",
    "bg-neon-magenta border-white",
    "bg-neon-deep-purple border-white",
    "bg-neon-sky-blue border-white",
    "bg-neon-blue border-white",
    "bg-neon-violet border-white",
    "bg-neon-purple border-white",
    "bg-neon-magenta border-white",
    "bg-neon-pink border-white",
    "bg-neon-rose border-white"
)

val BROAD_CATEGORIES: List<String> = listOf(
    "Nature", "Animals", "Astronomy", "Food", "History",
    "Geography", "Religion", "Technology", "Science", "Music",
    "Literature", "Movies", "Television", "Economics", "Politics",
    "Lifestyle", "Gaming", "Cars", "Sports", "Art", "Mythology"
)

val RANKS: List<Pair<String, Int>> = listOf(
    "NOVICE" to 0,
    "SEMI-PRO" to 10_000,
    "PRO" to 25_000,
    "VETERAN" to 50_000,
    "ELITE" to 100_000,
    "MASTER" to 250_000,
    "GRANDMASTER" to 500_000,
    "LEGEND" to 1_000_000
)

/**
 * The repeating pattern of game modes for deterministic level sequence.
 * 1:1 mirror of BASE_CYCLE in types.ts
 */
val BASE_CYCLE: List<GameMode> = listOf(
    GameMode.CLASSIC,
    GameMode.LEVEL_THEME,
    GameMode.LEVEL_EMOJI,
    GameMode.LEVEL_MIND_MATCH,
    GameMode.LEVEL_SYNONYMS,
    GameMode.LEVEL_EXPANSION
)

const val TOTAL_LEVELS = 72

/**
 * Deterministic sequence of game modes for all levels — 1:1 mirror of DETERMINISTIC_LEVEL_SEQUENCE
 */
val DETERMINISTIC_LEVEL_SEQUENCE: List<GameMode> = List(TOTAL_LEVELS) { i ->
    BASE_CYCLE[i % BASE_CYCLE.size]
}

/** All modes that can be enabled/disabled — mirror of ALL_MODES in storage.ts */
val ALL_MODES: List<GameMode> = listOf(
    GameMode.CLASSIC,
    GameMode.LEVEL_EMOJI,
    GameMode.LEVEL_SYNONYMS,
    GameMode.LEVEL_MIND_MATCH,
    GameMode.LEVEL_THEME,
    GameMode.LEVEL_EXPANSION
)

// Header / footer dimensions (matched to types.ts)
const val HEADER_MIN_HEIGHT = 32
const val FOOTER_HEIGHT = 70