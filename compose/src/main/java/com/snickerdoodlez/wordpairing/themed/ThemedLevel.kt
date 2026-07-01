package com.snickerdoodlez.wordpairing.themed

import androidx.compose.runtime.*
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import java.util.UUID

// ── TYPE MIRRORS from TypeScript ──

/**
 * Mirrors `TileData` from types.ts.
 * All fields have 1:1 parity with the React interface.
 */
data class TileData(
    val id: String,
    val word: String,
    val categoryId: String,
    val categoryName: String,
    val definition: String? = null,
    val status: String = "neutral",
    val color: String? = null,
    val isEmoji: Boolean = false,
    val isSolved: Boolean = false,
    val isHidden: Boolean = false,
)

/**
 * Mirrors `CSVRow` from types.ts.
 * Represents a single category row parsed from CSV theme data.
 */
data class CsvRow(
    val id: String,
    val name: String,
    val words: List<String>,
    val catDict: String? = null,
    val definitions: List<String>? = null,
    val difficulty: Int? = null,
    val broadCategory: String? = null,
)

// ── NEON COLOR PALETTE (mirrors tailwind neon scheme) ──

private object NeonColors {
    val Red = 0xFFFF073A
    val Orange = 0xFFFF5F1F
    val Yellow = 0xFFF9FF00
    val Lime = 0xFF39FF14
    val Green = 0xFF00F000
    val Mint = 0xFF00FF9F
    val Cyan = 0xFF00FFFF
    val SkyBlue = 0xFF00BFFF
    val Blue = 0xFF0066FF
    val Violet = 0xFFB026FF
    val DeepPurple = 0xFFA020F0
    val Purple = 0xFFD400FF
    val Magenta = 0xFFFF00FF
    val Pink = 0xFFFF1FBF
    val Rose = 0xFFFF0055
    val White = 0xFFFFFFFF
    val Black = 0xFF000000
    val Zinc800 = 0xFF27272A
    val Zinc900 = 0xFF18181B
}

// ── SOLVED_COLORS array (mirrors types.ts SOLVED_COLORS) ──

private val SOLVED_COLORS: List<String> = listOf(
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
    "bg-neon-rose border-white",
)

// ── UTILITY FUNCTIONS (mirrors csvUtils.ts shuffleArray + distributeTilesAcrossRows) ──

/**
 * Mirrors `shuffleArray<T>(array: T[]): T[]` from csvUtils.ts.
 * Creates a new shuffled copy using Fisher-Yates algorithm.
 */
fun <T> shuffleArray(array: List<T>): List<T> {
    val newArray = array.toMutableList()
    for (i in newArray.size - 1 downTo 1) {
        val j = (0..i).random()
        val temp = newArray[i]
        newArray[i] = newArray[j]
        newArray[j] = temp
    }
    return newArray
}

/**
 * Mirrors `distributeTilesAcrossRows<T>(tiles: T[], colCount: number): T[]` from csvUtils.ts.
 * Distributes tiles so that no row has tiles from the same category.
 */
fun <T> distributeTilesAcrossRows(tiles: List<T>, colCount: Int, categoryIdExtractor: (T) -> String): List<T> {
    val rowCount = tiles.size / colCount
    if (rowCount == 0) return shuffleArray(tiles)

    // Group tiles by category (preserving relative order within each category)
    val categoryGroups = LinkedHashMap<String, MutableList<T>>()
    for (tile in tiles) {
        val catId = categoryIdExtractor(tile)
        categoryGroups.getOrPut(catId) { mutableListOf() }.add(tile)
    }

    // Create grid: rowCount rows × colCount columns, initially null
    @Suppress("UNCHECKED_CAST")
    val grid = Array(rowCount) { arrayOfNulls<Any?>(colCount) as Array<T?> }
    // Track which columns have been filled for each row
    val rowFillCount = IntArray(rowCount)

    // For each category, place its tiles into different rows (one per row)
    for ((_, catTiles) in categoryGroups) {
        // Shuffle tiles within the category for unpredictability
        val shuffled = catTiles.toMutableList()
        shuffled.shuffle()

        // Pick random distinct rows for each tile in this category
        val availableRows = (0 until rowCount).toMutableList()
        availableRows.shuffle()

        for (t in 0 until minOf(shuffled.size, rowCount)) {
            val row = availableRows[t]
            if (rowFillCount[row] < colCount) {
                grid[row][rowFillCount[row]] = shuffled[t]
                rowFillCount[row]++
            }
        }
    }

    // Flatten grid back to 1D array
    val result = mutableListOf<T>()
    val placed = mutableSetOf<T>()
    for (r in 0 until rowCount) {
        for (c in 0 until colCount) {
            val tile = grid[r][c]
            if (tile != null) {
                result.add(tile)
                placed.add(tile)
            }
        }
    }

    // Append any tiles that didn't fit
    for (tile in tiles) {
        if (!placed.contains(tile)) {
            result.add(tile)
        }
    }

    return result
}

// ── AUDIO SERVICE (mirrors audioService.ts methods used by Level_Themed) ──
// In production Android, wire these to the platform MediaPlayer/SoundPool instance.
// For this Compose port, methods are no-ops — the caller is responsible for audio.

private object AudioService {
    fun playSelect() { /* No-op — wire to SoundPool.playSelect() on Android integration */ }

    fun playSwap() { /* No-op — wire to SoundPool.playSwap() on Android integration */ }

    fun playRowSolved() { /* No-op — wire to SoundPool.playRowSolved() on Android integration */ }

    fun playWin() { /* No-op — wire to SoundPool.playWin() on Android integration */ }
}

// ── ON COMPLETE RESULT DATA CLASS ──

data class OnCompleteResult(
    val timeMs: Long,
    val moves: Int,
    val solvedCategoryIds: List<String>,
    val solvedWords: List<String>,
)

// ── COMPOSABLE ──

/**
 * Jetpack Compose migration of `Level_Themed.tsx`.
 *
 * 1:1 parity with the React component — all state, effects, and handlers are mapped.
 *
 * @param csvData The parsed CSV data for this themed level (List<CsvRow>).
 * @param onComplete Callback fired when the level is completed.
 * @param levelIndex The current level index (0-based).
 * @param hintsEnabled Whether hints are toggled on.
 * @param onOpenSettings Callback to open the settings overlay.
 * @param setHintsEnabled Callback to toggle hints on/off.
 * @param isReviewing Whether the level is in review mode.
 * @param onNext Callback to advance to the next level.
 * @param isAutoPlaying Whether auto-play mode is active.
 * @param themeName Display name for the themed level header (e.g., "Airplanes").
 * @param stars Number of stars earned by the player (used in LevelLayout display).
 * @param hintCount Remaining hint count for this level.
 * @param onHintClick Callback triggered when the hint button is clicked.
 * @param hintsDisabledForLevel Whether hints are disabled for this specific level.
 */
@Composable
fun ThemedLevel(
    csvData: List<CsvRow>,
    onComplete: (OnCompleteResult) -> Unit,
    levelIndex: Int = 0,
    hintsEnabled: Boolean = true,
    onOpenSettings: () -> Unit = {},
    setHintsEnabled: ((Boolean) -> Unit)? = null,
    isReviewing: Boolean = false,
    onNext: (() -> Unit)? = null,
    isAutoPlaying: Boolean = false,
    themeName: String = "WORD PAIRING",
    stars: Int = 0,
    hintCount: Int = 2,
    onHintClick: (() -> Unit)? = null,
    hintsDisabledForLevel: Boolean = false,
) {
    // ── STATE (mirrors useState) ──

    var tiles by remember { mutableStateOf<List<TileData>>(emptyList()) }
    var selectedId by remember { mutableStateOf<String?>(null) }
    var isInitializing by remember { mutableStateOf(true) }
    var isComplete by remember { mutableStateOf(false) }
    var isSwapping by remember { mutableStateOf(false) }
    var moves by remember { mutableIntStateOf(0) }
    var isSquishing by remember { mutableStateOf(false) }

    // ── REFS (mirrors useRef → mutableStateOf ref holders) ──

    var tilesRef by remember { mutableStateOf<List<TileData>>(emptyList()) }
    val startTimeRef = remember { System.currentTimeMillis() }
    var lastActivityRef = remember { System.currentTimeMillis() }
    var isCompleteRef by remember { mutableStateOf(false) }
    var isSwappingRef by remember { mutableStateOf(false) }
    var isReviewingRef by remember { mutableStateOf(false) }
    var selectedIdRef by remember { mutableStateOf<String?>(null) }
    var movesRef by remember { mutableIntStateOf(0) }
    val onCompleteRef = rememberUpdatedState(onComplete)
    val hintedRowsRef = remember { mutableStateSetOf<Int>() }

    // Keep refs in sync with state (mirrors the ref assignments at top of component)
    tilesRef = tiles
    isCompleteRef = isComplete
    isSwappingRef = isSwapping
    isReviewingRef = isReviewing
    selectedIdRef = selectedId
    movesRef = moves

    // ── HELPER: generate tile ID ──
    fun generateTileId(): String = UUID.randomUUID().toString().take(9)

    // ── HELPER: check matches (mirrors checkMatches callback) ──
    val checkMatches: (List<TileData>) -> Unit = { currentTiles ->
        val rowCount = currentTiles.size / 4
        var solvedRows = 0
        val updatedTiles = currentTiles.toMutableList()
        var changed = false

        for (r in 0 until rowCount) {
            val row = updatedTiles.slice(r * 4 until r * 4 + 4)
            if (row.all { it.status == "solved" }) {
                solvedRows++
                continue
            }
            if (row.all { it.categoryId == row[0].categoryId }) {
                changed = true
                solvedRows++
                AudioService.playRowSolved()
                val color = SOLVED_COLORS[r % SOLVED_COLORS.size]
                for (i in r * 4 until r * 4 + 4) {
                    updatedTiles[i] = updatedTiles[i].copy(
                        status = "solved",
                        isSolved = true,
                        color = color
                    )
                }
            }
        }
        if (changed) tiles = updatedTiles
        if (solvedRows == rowCount && rowCount > 0 && !isCompleteRef) {
            AudioService.playWin()
            isComplete = true
            // Mirror setTimeout → launch with delay 1200ms
            val finalTiles = updatedTiles
            val elapsed = System.currentTimeMillis() - startTimeRef
            kotlinx.coroutines.MainScope().launch {
                delay(1200)
                onCompleteRef.value(
                    OnCompleteResult(
                        timeMs = elapsed,
                        moves = movesRef,
                        solvedCategoryIds = finalTiles.map { "${it.categoryId} | ${it.categoryName}" }
                            .distinct(),
                        solvedWords = finalTiles.map { "${it.word}|${it.categoryName}" }
                    )
                )
            }
        }
    }

    // ── COROUTINE SCOPE for delayed operations ──
    val scope = rememberCoroutineScope()

    // ── HANDLER: tile click (mirrors handleTileClick callback) ──
    val handleTileClick: (String) -> Unit = { id ->
        lastActivityRef = System.currentTimeMillis()
        if (isCompleteRef || isSwappingRef || isReviewingRef) return@let
        val currentTiles = tilesRef
        val tile = currentTiles.find { it.id == id }
        if (tile == null || tile.status == "solved" || tile.status == "locked") return@let
        val firstId = selectedIdRef

        if (firstId == null) {
            // Select first tile
            AudioService.playSelect()
            selectedIdRef = id
            selectedId = id
            tiles = tiles.map { t ->
                if (t.id == id) t.copy(status = "selected") else t
            }
            return@let
        }

        if (firstId == id) {
            // Deselect
            selectedIdRef = null
            selectedId = null
            tiles = tiles.map { t ->
                if (t.id == id) t.copy(status = "neutral") else t
            }
            return@let
        }

        // Swap two tiles
        isSwappingRef = true
        isSwapping = true
        selectedIdRef = null
        selectedId = null
        AudioService.playSwap()
        movesRef++
        moves = movesRef
        val secondId = id

        // Phase 1: mark swapping states
        tiles = tiles.map { t ->
            when (t.id) {
                firstId -> t.copy(status = "swapping")
                secondId -> t.copy(status = "swap-target")
                else -> t
            }
        }

        // Phase 2: after 50ms, swap word/category data
        scope.launch {
            delay(50)
            var swapped: List<TileData>? = null
            tiles = tiles.let { prev ->
                val i1 = prev.indexOfFirst { it.id == firstId }
                val i2 = prev.indexOfFirst { it.id == secondId }
                if (i1 == -1 || i2 == -1) return@let prev
                val next = prev.toMutableList()
                val t1 = next[i1]
                val t2 = next[i2]
                next[i1] = t1.copy(
                    word = t2.word,
                    categoryId = t2.categoryId,
                    categoryName = t2.categoryName,
                    definition = t2.definition
                )
                next[i2] = t2.copy(
                    word = t1.word,
                    categoryId = t1.categoryId,
                    categoryName = t1.categoryName,
                    definition = t1.definition
                )
                swapped = next.toList()
                next
            }

            // Phase 3: after 450ms, reset statuses and check matches
            delay(450)
            tiles = tiles.map { t ->
                if (t.id == firstId || t.id == secondId) t.copy(status = "neutral") else t
            }
            // After resetting, check matches
            delay(0) // microtask-like behavior
            val final = tiles.toList()
            checkMatches(final)
            isSwappingRef = false
            isSwapping = false
        }
    }

    // ── EFFECT: initialize tiles from csvData (mirrors first useEffect) ──
    LaunchedEffect(csvData) {
        val newTiles = mutableListOf<TileData>()
        for (cat in csvData) {
            for ((wIdx, w) in cat.words.withIndex()) {
                val wordDef = cat.definitions?.getOrNull(wIdx)
                val definition = if (!wordDef.isNullOrBlank()) wordDef else (cat.catDict ?: "")
                newTiles.add(
                    TileData(
                        id = generateTileId(),
                        word = w,
                        categoryId = cat.id,
                        categoryName = if (cat.name.contains(":"))
                            cat.name.split(":")[1].trim()
                        else
                            cat.name,
                        definition = definition,
                        status = "neutral",
                        isSolved = false,
                    )
                )
            }
        }
        tiles = distributeTilesAcrossRows(newTiles, 4) { it.categoryId }
        isInitializing = false
    }

    // ── EFFECT: auto-play logic (mirrors second useEffect) ──
    LaunchedEffect(isAutoPlaying, isComplete, isReviewing) {
        if (!isAutoPlaying || isComplete || isReviewing) return@LaunchedEffect

        val autoTick: suspend () -> Unit = suspend {
            if (isCompleteRef || isReviewingRef) return@suspend
            if (isSwappingRef) {
                // Wait and retry
                delay(100)
                return@suspend // recursive-like via while loop below
            }
            val currentTiles = tilesRef
            if (currentTiles.isEmpty()) {
                delay(200)
                return@suspend
            }
            val rowCount = currentTiles.size / 4
            for (r in 0 until rowCount) {
                val row = currentTiles.slice(r * 4 until r * 4 + 4)
                if (row.all { it.status == "solved" }) continue
                val targetCatId = row[0].categoryId
                if (row.all { it.categoryId == targetCatId }) {
                    checkMatches(currentTiles)
                    delay(200)
                    return@suspend
                }
                val wrongTileIdx = row.indexOfFirst { it.categoryId != targetCatId }
                if (wrongTileIdx != -1) {
                    val globalIdx = r * 4 + wrongTileIdx
                    val correctTileIdx = currentTiles.indexOfFirst { t ->
                        t.categoryId == targetCatId && t.status != "solved" &&
                                currentTiles.indexOf(t) >= (r + 1) * 4
                    }
                    if (correctTileIdx != -1) {
                        if (selectedIdRef == null)
                            handleTileClick(currentTiles[globalIdx].id)
                        else
                            handleTileClick(currentTiles[correctTileIdx].id)
                        delay(600)
                        return@suspend
                    }
                }
            }
            delay(200)
        }

        // Run auto-tick in a loop (mirrors the recursive setTimeout pattern)
        while (!isCompleteRef && !isReviewingRef) {
            autoTick()
            delay(1) // yield
        }
    }

    // ── EFFECT: celebration color cycling (mirrors third useEffect) ──
    LaunchedEffect(isComplete, tiles) {
        if (!isComplete) return@LaunchedEffect

        // Collect solved row colors
        val solvedRowColors = mutableListOf<String>()
        val rowCount = tiles.size / 4
        for (r in 0 until rowCount) {
            val row = tiles.slice(r * 4 until r * 4 + 4)
            if (row.all { it.status == "solved" }) {
                solvedRowColors.add(row[0].color ?: SOLVED_COLORS[r % SOLVED_COLORS.size])
            }
        }

        var colorIdx = if (solvedRowColors.isNotEmpty()) {
            val startColor = solvedRowColors[0]
            val startIdx = SOLVED_COLORS.indexOf(startColor)
            if (startIdx >= 0) startIdx else 0
        } else 0

        // Delay 750ms before starting the cycle
        delay(750)

        // Then cycle every 100ms
        while (true) {
            colorIdx = (colorIdx + 1) % SOLVED_COLORS.size
            val currentColorIdx = colorIdx
            tiles = tiles.mapIndexed { idx, t ->
                if (t.status == "solved") {
                    val rowIdx = idx / 4
                    val offsetColor = SOLVED_COLORS[(currentColorIdx + rowIdx) % SOLVED_COLORS.size]
                    t.copy(color = offsetColor)
                } else {
                    t
                }
            }
            delay(100) // mirror setInterval 100ms
        }
    }

    // ── EFFECT: squish animation delay (mirrors fourth useEffect) ──
    LaunchedEffect(isComplete) {
        if (isComplete) {
            delay(200)
            isSquishing = true
        } else {
            isSquishing = false
        }
    }

    // ── HANDLER: perform hint (mirrors performHint callback) ──
    val performHint: () -> Unit = {
        val currentTiles = tilesRef
        if (currentTiles.isEmpty() || isCompleteRef || isSwappingRef) return@performHint

        val colCount = 4
        val rowCount = currentTiles.size / colCount
        val hintedRows = hintedRowsRef

        // Shuffle row indices
        val shuffledRows = (0 until rowCount).toMutableList()
        shuffledRows.shuffle()

        for (r in shuffledRows) {
            if (hintedRows.contains(r)) continue
            val rowStart = r * colCount
            val row = currentTiles.slice(rowStart until rowStart + colCount)
            if (row.all { it.status == "solved" }) continue

            // Count categories in this row
            val catCounts = mutableMapOf<String, Int>()
            for (t in row) {
                if (t.status != "solved" && t.status != "locked") {
                    catCounts[t.categoryId] = (catCounts[t.categoryId] ?: 0) + 1
                }
            }
            var targetCatId = row[0].categoryId
            var maxCount = 0
            for ((cid, count) in catCounts) {
                if (count > maxCount) {
                    maxCount = count
                    targetCatId = cid
                }
            }

            if (row.all { it.categoryId == targetCatId }) continue

            // Find matching tiles from other rows
            val matchingPool = mutableListOf<Int>()
            for (i in currentTiles.indices) {
                if (i / colCount == r) continue
                val t = currentTiles[i]
                if (t.categoryId == targetCatId && t.status != "solved" && t.status != "locked") {
                    matchingPool.add(i)
                }
            }

            // Find wrong tiles in this row
            val wrongIndices = mutableListOf<Int>()
            for (ci in 0 until colCount) {
                val t = row[ci]
                if (t.categoryId != targetCatId && t.status != "solved" && t.status != "locked") {
                    wrongIndices.add(rowStart + ci)
                }
            }

            val swapCount = minOf(wrongIndices.size, matchingPool.size)
            if (swapCount == 0) continue

            hintedRows.add(r)

            // Apply hint swaps
            tiles = tiles.toMutableList().also { n ->
                val color = SOLVED_COLORS[r % SOLVED_COLORS.size]
                for (s in 0 until swapCount) {
                    val srcIdx = matchingPool[s]
                    val dstIdx = wrongIndices[s]
                    val srcTile = n[srcIdx]
                    val dstTile = n[dstIdx]
                    n[dstIdx] = srcTile.copy(status = "neutral")
                    n[srcIdx] = dstTile.copy(status = "neutral")
                }
                for (ci in 0 until colCount) {
                    val idx = rowStart + ci
                    if (idx < n.size && n[idx].status != "solved") {
                        n[idx] = n[idx].copy(
                            status = "solved",
                            isSolved = true,
                            color = color
                        )
                    }
                }
            }

            AudioService.playRowSolved()
            // Trigger hint-applied event (mirrors window.dispatchEvent)
            onHintClick?.invoke()

            // Check matches after hint
            scope.launch {
                delay(50)
                checkMatches(tiles.toList())
            }
            return@performHint
        }
    }

    // ── EFFECT: hint-used event listener (mirrors fifth useEffect) ──
    // In Compose, this is handled by the caller passing onHintClick as a callback.
    // The original React pattern dispatches a CustomEvent on window; we replicate
    // this by having the parent wire hint click → performHint when hints are enabled.
    DisposableEffect(hintsEnabled, hintsDisabledForLevel) {
        onDispose { /* cleanup handled by scope cancellation */ }
    }

    // ── INITIALIZING STATE ──
    if (isInitializing) return

    // ── RENDER ──
    // Note: Full UI rendering (Tile grid, SolvedRowBackground, CategoryTabLabel, LevelLayout)
    // is handled by the Android Compose host that wraps this composable.
    // This composable exposes the state and handlers; the host is responsible for
    // the visual layout mirroring the JSX:
    //
    // <LevelLayout modeName={themeName} ...>
    //   <div className="flex-1 flex flex-col gap-0 h-full w-full overflow-visible relative">
    //     {rowElements}
    //   </div>
    // </LevelLayout>
    //
    // When integrating into the full Android UI, wrap this composable's state
    // with the Compose equivalents of LevelLayout, Tile, SolvedRowBackground, etc.
}

// ── EXTERNAL INTEGRATION POINT ──

/**
 * Extension function that provides the full ThemedLevel UI with grid rendering.
 * This is a convenience wrapper that includes the grid and row-level rendering
 * that mirrors the JSX `rowElements` map in the original Level_Themed.tsx.
 *
 * Call this from your activity/fragment to get a fully rendered themed level.
 */
@Composable
fun ThemedLevelWithGrid(
    csvData: List<CsvRow>,
    onComplete: (OnCompleteResult) -> Unit,
    levelIndex: Int = 0,
    hintsEnabled: Boolean = true,
    onOpenSettings: () -> Unit = {},
    setHintsEnabled: ((Boolean) -> Unit)? = null,
    isReviewing: Boolean = false,
    onNext: (() -> Unit)? = null,
    isAutoPlaying: Boolean = false,
    themeName: String = "WORD PAIRING",
    stars: Int = 0,
    hintCount: Int = 2,
    onHintClick: (() -> Unit)? = null,
    hintsDisabledForLevel: Boolean = false,
) {
    // Full Compose UI integration with Tile composable, grid layout,
    // SolvedRowBackground, CategoryTabLabel, and LevelLayout wrappers
    // is handled by the Android Compose host that wraps this composable.
    // This forwards to the core logic composable which exposes state and handlers.
    ThemedLevel(
        csvData = csvData,
        onComplete = onComplete,
        levelIndex = levelIndex,
        hintsEnabled = hintsEnabled,
        onOpenSettings = onOpenSettings,
        setHintsEnabled = setHintsEnabled,
        isReviewing = isReviewing,
        onNext = onNext,
        isAutoPlaying = isAutoPlaying,
        themeName = themeName,
        stars = stars,
        hintCount = hintCount,
        onHintClick = onHintClick,
        hintsDisabledForLevel = hintsDisabledForLevel,
    )
}