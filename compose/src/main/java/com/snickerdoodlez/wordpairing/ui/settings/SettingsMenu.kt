package com.snickerdoodlez.wordpairing.ui.settings

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.drawBehind
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.snickerdoodlez.wordpairing.types.GameMode

// ── TYPE MIRRORS from TypeScript ──

/** Data class mirroring the `categories` prop objects */
data class CategoryItem(
    val name: String,
    val isSolved: Boolean
)

/** Difficulty labels — maps to TIFFICULTY_LABELS in TS */
enum class DifficultyLevel(val label: String) {
    EASY("Easy"),
    MEDIUM("Medium"),
    HARD("Hard")
    ;

    companion object {
        val DIFFICULTY_LABELS: Map<DifficultyLevel, String> = entries.associateBy { it }.mapValues { it.value.label }
    }
}

/** Mode labels — maps to MODE_LABELS in TS */
private val MODE_LABELS: Map<GameMode, String> = mapOf(
    GameMode.CLASSIC to "Classic",
    GameMode.LEVEL_THEME to "Theme",
    GameMode.LEVEL_MIND_MATCH to "Mind",
    GameMode.LEVEL_SYNONYMS to "Synonyms",
    GameMode.LEVEL_EMOJI to "Emoji",
    GameMode.LEVEL_EXPANSION to "Expansion",
)

// ── NEON COLOR PALETTE (mirrors tailwind neon scheme from index.html) ──

private object NeonColors {
    val Red = Color(0xFFFF073A)
    val Yellow = Color(0xFFF9FF00)
    val Green = Color(0xFF00F000)
    val Pink = Color(0xFFFF1FBF)
    val Aqua = Color(0xFF00E5FF)
    val White = Color.White
    val Black = Color.Black
    val Zinc800 = Color(0xFF27272A)
    val Zinc900 = Color(0xFF18181B)
    val Zinc950 = Color(0xFF09090B)
    val Zinc600 = Color(0xFF52525B)
    val Zinc700 = Color(0xFF3F3F46)
}

/** Difficulty border/text colors — mirrors DIFFICULTY_COLORS in TS */
private val DIFFICULTY_COLORS: Map<DifficultyLevel, Pair<Color, Color>> = mapOf(
    DifficultyLevel.EASY to (NeonColors.White to NeonColors.White),
    DifficultyLevel.MEDIUM to (NeonColors.White to NeonColors.White),
    DifficultyLevel.HARD to (NeonColors.White to NeonColors.White),
)

// ── COMPOSABLE ──

/**
 * Jetpack Compose migration of `SettingsMenu.tsx`.
 * All props have 1:1 parity with the React component.
 * No internal `mutableStateOf` — all state is hoisted to the caller.
 * No `LaunchedEffect` — the source component has no `useEffect` blocks.
 *
 * @param isOpen When false, this composable renders nothing (mirrors `if (!isOpen) return null`).
 * @param onClose Callback to close the settings overlay.
 * @param onMainMenu Callback to exit to main menu.
 * @param isMusicOn Whether music/sound is enabled.
 * @param toggleMusic Toggles music on/off.
 * @param enabledModes List of currently enabled game modes.
 * @param toggleMode Toggles a specific game mode on/off.
 * @param onSelectMode Called when a mode is selected.
 * @param hintsEnabled Whether hints are enabled.
 * @param setHintsEnabled Sets the hints enabled state.
 * @param isAutoPlaying Whether auto-play is active.
 * @param toggleAutoPlay Toggles auto-play on/off.
 * @param onResetProgress Resets all game progress.
 * @param onDeleteMyData Deletes all user data (for Data Safety compliance).
 * @param categories List of current goal categories with solved status.
 * @param privacyOptionsRequired Whether privacy consent is required.
 * @param onShowPrivacyOptions Opens the privacy options form.
 * @param selectedDifficulty Currently selected difficulty.
 * @param unlockedDifficulties List of unlocked difficulty levels.
 * @param onDifficultyChange Called when difficulty is changed.
 * @param theme Current theme: "dark" or "light" (migrated from useTheme() hook).
 * @param toggleTheme Toggles between dark and light themes.
 */
@Composable
fun SettingsMenu(
    isOpen: Boolean,
    onClose: () -> Unit,
    onMainMenu: () -> Unit,
    isMusicOn: Boolean,
    toggleMusic: () -> Unit,
    enabledModes: List<GameMode>,
    toggleMode: (GameMode) -> Unit,
    onSelectMode: ((GameMode) -> Unit)? = null,
    hintsEnabled: Boolean = true,
    setHintsEnabled: ((Boolean) -> Unit)? = null,
    isAutoPlaying: Boolean,
    toggleAutoPlay: () -> Unit,
    onResetProgress: () -> Unit,
    onDeleteMyData: () -> Unit,
    categories: List<CategoryItem> = emptyList(),
    privacyOptionsRequired: Boolean = false,
    onShowPrivacyOptions: (() -> Unit)? = null,
    selectedDifficulty: DifficultyLevel? = null,
    unlockedDifficulties: List<DifficultyLevel> = emptyList(),
    onDifficultyChange: ((DifficultyLevel) -> Unit)? = null,
    theme: String = "dark",
    toggleTheme: () -> Unit = {},
) {
    // mirrors `if (!isOpen) return null;` from TS
    AnimatedVisibility(
        visible = isOpen,
        enter = fadeIn(),
        exit = fadeOut(),
    ) {
        // mirrors <div className="absolute inset-0 z-[100] bg-black/95 backdrop-blur-md ... animate-fade-in">
        Box(
            modifier = Modifier
                .fillMaxSize()
                .background(Color.Black.copy(alpha = 0.95f))
                .padding(8.dp),
            contentAlignment = Alignment.Center,
        ) {
            // mirrors <div className="w-full max-sm bg-zinc-950 border-4 border-white ...">
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(24.dp))
                    .background(NeonColors.Zinc950)
                    .border(4.dp, NeonColors.White, RoundedCornerShape(24.dp))
                    .padding(16.dp)
                    .verticalScroll(rememberScrollState()),
                verticalArrangement = Arrangement.spacedBy(12.dp),
            ) {
                // ── HEADER ──
                // mirrors <div className="relative flex justify-center items-center border-b-2 border-zinc-800 pb-2">
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .drawBottomBorder(NeonColors.Zinc800, 2.dp)
                        .padding(bottom = 8.dp),
                    contentAlignment = Alignment.Center,
                ) {
                    // mirrors <h2 className="text-xl font-black text-white uppercase tracking-[0.3em]">SETTINGS</h2>
                    Text(
                        text = "SETTINGS",
                        color = NeonColors.White,
                        fontWeight = FontWeight.Black,
                        fontSize = 20.sp,
                        letterSpacing = (0.3f * 20).sp, // tracking-[0.3em] ≈ 0.3 * font-size
                    )

                    // mirrors close <button> with aria-label="Close settings"
                    // positioned absolute right
                    Box(
                        modifier = Modifier
                            .align(Alignment.CenterEnd)
                            .size(48.dp)
                            .clickable { onClose() }
                            .semantics { contentDescription = "Close settings" },
                        contentAlignment = Alignment.Center,
                    ) {
                        // mirrors X icon SVG
                        // Using a simple Unicode X as placeholder for the SVG path
                        Text(
                            text = "✕",
                            color = Color(0xFFA1A1AA), // text-zinc-400
                            fontSize = 24.sp,
                            fontWeight = FontWeight.Bold,
                        )
                    }
                }

                // ── BUTTON ROW 1: EXIT + SOUND + THEME ──
                // mirrors <div className="grid grid-cols-2 gap-2">
                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    // mirrors EXIT TO MAIN MENU (col-span-2)
                    SettingsButton(
                        text = "EXIT TO MAIN MENU",
                        modifier = Modifier.fillMaxWidth(),
                        backgroundColor = NeonColors.Red,
                        foregroundColor = NeonColors.White,
                        borderColor = NeonColors.White,
                        onClick = onMainMenu,
                        shadowColor = NeonColors.Red,
                        contentDesc = "Exit to main menu",
                        minHeight = 48,
                    )

                    // mirrors SOUND + THEME row (grid-cols-2)
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                    ) {
                        // mirrors SOUND: ON/OFF
                        SettingsButton(
                            text = "SOUND: ${if (isMusicOn) "ON" else "OFF"}",
                            modifier = Modifier.weight(1f),
                            backgroundColor = if (isMusicOn) NeonColors.Zinc900 else NeonColors.Black,
                            foregroundColor = if (isMusicOn) NeonColors.White else NeonColors.Zinc600,
                            borderColor = if (isMusicOn) NeonColors.White else NeonColors.Zinc800,
                            onClick = toggleMusic,
                            contentDesc = "Sound ${if (isMusicOn) "on" else "off"}",
                            minHeight = 48,
                        )

                        // mirrors THEME: DARK/LIGHT
                        SettingsButton(
                            text = "THEME: ${theme.uppercase()}",
                            modifier = Modifier.weight(1f),
                            backgroundColor = if (theme == "dark") NeonColors.Black else NeonColors.Zinc900,
                            foregroundColor = if (theme == "dark") NeonColors.Zinc600 else NeonColors.Yellow,
                            borderColor = if (theme == "dark") NeonColors.Zinc800 else NeonColors.Yellow,
                            onClick = toggleTheme,
                            contentDesc = "Theme: $theme",
                            shadowColor = if (theme != "dark") NeonColors.Yellow else null,
                            minHeight = 48,
                        )
                    }

                    // mirrors AUTO PLAY: ON/OFF (col-span-2)
                    SettingsButton(
                        text = "AUTO PLAY: ${if (isAutoPlaying) "ON" else "OFF"}",
                        modifier = Modifier.fillMaxWidth(),
                        backgroundColor = if (isAutoPlaying) NeonColors.Green else NeonColors.Black,
                        foregroundColor = if (isAutoPlaying) NeonColors.Black else NeonColors.Zinc600,
                        borderColor = if (isAutoPlaying) NeonColors.White else NeonColors.Zinc800,
                        onClick = toggleAutoPlay,
                        contentDesc = "Auto Play ${if (isAutoPlaying) "on" else "off"}",
                        shadowColor = if (isAutoPlaying) NeonColors.Green else null,
                        minHeight = 48,
                    )
                }

                // ── CURRENT GOALS ──
                // mirrors `{categories.length > 0 && ( ... )}`
                if (categories.isNotEmpty()) {
                    SectionHeader(
                        text = "CURRENT GOALS",
                        accentColor = NeonColors.Pink,
                    )

                    // mirrors grid-cols-2 gap-1.5
                    val goalColumns = 2
                    val rows = categories.chunked(goalColumns)
                    rows.forEach { rowItems ->
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.spacedBy(6.dp),
                        ) {
                            rowItems.forEach { cat ->
                                val isSolved = cat.isSolved
                                Box(
                                    modifier = Modifier
                                        .weight(1f)
                                        .height(32.dp)
                                        .clip(RoundedCornerShape(8.dp))
                                        .background(
                                            if (isSolved) NeonColors.Green.copy(alpha = 0.1f) else NeonColors.Black
                                        )
                                        .border(
                                            1.dp,
                                            if (isSolved) NeonColors.Green else NeonColors.Zinc700,
                                            RoundedCornerShape(8.dp)
                                        )
                                        .padding(horizontal = 8.dp, vertical = 2.dp),
                                    contentAlignment = Alignment.CenterStart,
                                ) {
                                    Row(
                                        modifier = Modifier.fillMaxWidth(),
                                        horizontalArrangement = Arrangement.SpaceBetween,
                                        verticalAlignment = Alignment.CenterVertically,
                                    ) {
                                        Text(
                                            text = cat.name,
                                            color = if (isSolved) NeonColors.Green else Color(0xFFD4D4D8),
                                            fontSize = 10.sp,
                                            fontWeight = FontWeight.Bold,
                                            maxLines = 1,
                                            overflow = TextOverflow.Ellipsis,
                                            modifier = Modifier.weight(1f),
                                        )
                                        if (isSolved) {
                                            Text(
                                                text = "✓",
                                                color = NeonColors.Green,
                                                fontSize = 12.sp,
                                            )
                                        }
                                    }
                                }
                            }
                            // Fill remaining columns with empty boxes for grid alignment
                            repeat(goalColumns - rowItems.size) {
                                Spacer(modifier = Modifier.weight(1f))
                            }
                        }
                        Spacer(modifier = Modifier.height(6.dp))
                    }
                }

                // ── DIFFICULTY SELECTION ──
                // mirrors `{onDifficultyChange && unlockedDifficulties.length > 1 && ( ... )}`
                if (onDifficultyChange != null && unlockedDifficulties.size > 1) {
                    SectionHeader(
                        text = "DIFFICULTY",
                        accentColor = NeonColors.Yellow,
                    )

                    // mirrors grid-cols-3 gap-1.5
                    val allDifficulties = DifficultyLevel.entries
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(6.dp),
                    ) {
                        allDifficulties.forEach { diff ->
                            val isUnlocked = unlockedDifficulties.contains(diff)
                            if (isUnlocked) {
                                val isSelected = selectedDifficulty == diff
                                val (borderColor, textColor) = if (isSelected) {
                                    DIFFICULTY_COLORS[diff] ?: (NeonColors.White to NeonColors.White)
                                } else {
                                    NeonColors.Zinc800 to NeonColors.Zinc600
                                }
                                Box(
                                    modifier = Modifier
                                        .weight(1f)
                                        .height(48.dp)
                                        .clip(RoundedCornerShape(12.dp))
                                        .background(if (isSelected) NeonColors.Zinc900 else NeonColors.Black)
                                        .border(2.dp, borderColor, RoundedCornerShape(12.dp))
                                        .clickable { onDifficultyChange(diff) }
                                        .semantics { contentDescription = "Select ${diff.label} difficulty" },
                                    contentAlignment = Alignment.Center,
                                ) {
                                    Text(
                                        text = diff.label,
                                        color = textColor,
                                        fontSize = 12.sp,
                                        fontWeight = FontWeight.Bold,
                                        textAlign = TextAlign.Center,
                                    )
                                }
                            }
                        }
                    }
                }

                // ── GAME MODES ──
                SectionHeader(
                    text = "GAME MODES",
                    accentColor = NeonColors.Yellow,
                )

                // mirrors grid-cols-3
                val modeColumns = 3
                val modeEntries = MODE_LABELS.entries.toList()
                val modeChunks = modeEntries.chunked(modeColumns)
                modeChunks.forEach { chunk ->
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(6.dp),
                    ) {
                        chunk.forEach { (mode, label) ->
                            val isEnabled = enabledModes.contains(mode)
                            Box(
                                modifier = Modifier
                                    .weight(1f)
                                    .height(48.dp)
                                    .clip(RoundedCornerShape(12.dp))
                                    .background(if (isEnabled) NeonColors.Zinc900 else NeonColors.Black)
                                    .border(
                                        2.dp,
                                        if (isEnabled) NeonColors.Aqua else NeonColors.Zinc800,
                                        RoundedCornerShape(12.dp)
                                    )
                                    .clickable {
                                        if (isEnabled) {
                                            onSelectMode?.invoke(mode)
                                        } else {
                                            toggleMode(mode)
                                            onSelectMode?.invoke(mode)
                                        }
                                    },
                                contentAlignment = Alignment.Center,
                            ) {
                                Text(
                                    text = label,
                                    color = if (isEnabled) NeonColors.White else NeonColors.Zinc600,
                                    fontWeight = FontWeight.Bold,
                                    fontSize = 12.sp,
                                    textAlign = TextAlign.Center,
                                )
                            }
                        }
                        // Fill remaining columns for grid alignment
                        repeat(modeColumns - chunk.size) {
                            Spacer(modifier = Modifier.weight(1f))
                        }
                    }
                    Spacer(modifier = Modifier.height(6.dp))
                }

                // ── FOOTER BUTTONS ──
                // mirrors <div className="mt-auto flex flex-col gap-2 pt-2 border-t border-zinc-800">
                HorizontalDivider(
                    modifier = Modifier.padding(vertical = 8.dp),
                    color = NeonColors.Zinc800,
                )

                // mirrors CONSENT button (conditional)
                if (privacyOptionsRequired) {
                    val handleConsent: () -> Unit = {
                        if (onShowPrivacyOptions != null) {
                            onShowPrivacyOptions()
                        }
                    }
                    SettingsButton(
                        text = "CONSENT",
                        modifier = Modifier.fillMaxWidth(),
                        backgroundColor = NeonColors.Zinc900,
                        foregroundColor = NeonColors.Zinc600,
                        borderColor = NeonColors.Zinc700,
                        onClick = handleConsent,
                        contentDesc = "Open privacy consent options",
                        minHeight = 48,
                    )
                }

                // mirrors RESET PROGRESS
                SettingsButton(
                    text = "RESET PROGRESS",
                    modifier = Modifier.fillMaxWidth(),
                    backgroundColor = NeonColors.Black,
                    foregroundColor = NeonColors.Red,
                    borderColor = NeonColors.Red,
                    onClick = onResetProgress,
                    contentDesc = "Reset all game progress",
                    shadowColor = NeonColors.Red,
                    minHeight = 48,
                )

                // mirrors DELETE MY DATA
                SettingsButton(
                    text = "DELETE MY DATA",
                    modifier = Modifier.fillMaxWidth(),
                    backgroundColor = NeonColors.Black,
                    foregroundColor = NeonColors.White,
                    borderColor = NeonColors.White,
                    onClick = onDeleteMyData,
                    contentDesc = "Delete all my data",
                    shadowColor = NeonColors.White,
                    minHeight = 48,
                )

                // mirrors PRIVACY POLICY
                SettingsButton(
                    text = "PRIVACY POLICY",
                    modifier = Modifier.fillMaxWidth(),
                    backgroundColor = NeonColors.Black,
                    foregroundColor = NeonColors.Zinc600,
                    borderColor = NeonColors.Zinc700,
                    onClick = {
                        // Note: On native Android, hyperlinks in WebView content
                        // navigate externally. The React layer (App.tsx) renders an <a> tag.
                        // This button serves as a visual parity placeholder.
                    },
                    contentDesc = "View privacy policy",
                    minHeight = 48,
                )

                // mirrors RESUME PLAY (white button)
                SettingsButton(
                    text = "RESUME PLAY",
                    modifier = Modifier.fillMaxWidth(),
                    backgroundColor = NeonColors.White,
                    foregroundColor = NeonColors.Black,
                    borderColor = NeonColors.White,
                    onClick = onClose,
                    contentDesc = "Resume play",
                    shadowColor = NeonColors.White,
                    minHeight = 56,
                )
            }
        }
    }
}

// ── PRIVATE HELPER COMPOSABLES ──

/**
 * Section header label used for CURRENT GOALS, DIFFICULTY, and GAME MODES.
 * Mirrors the TS `<h3 className="text-neon-* font-oswald text-xs uppercase tracking-[0.2em] ...">` pattern.
 */
@Composable
private fun SectionHeader(
    text: String,
    accentColor: Color,
    modifier: Modifier = Modifier,
) {
    Column(modifier = modifier.fillMaxWidth()) {
        Text(
            text = text,
            color = accentColor,
            fontWeight = FontWeight.Black,
            fontSize = 12.sp,
            letterSpacing = (0.2f * 12).sp,
            modifier = Modifier.padding(bottom = 2.dp),
        )
        HorizontalDivider(color = NeonColors.Zinc800, thickness = 1.dp)
    }
}

/**
 * Reusable button matching the Tailwind-based settings buttons in SettingsMenu.tsx.
 * Supports neon shadow, border, and min-height for accessibility touch targets.
 */
@Composable
private fun SettingsButton(
    text: String,
    modifier: Modifier = Modifier,
    backgroundColor: Color,
    foregroundColor: Color,
    borderColor: Color,
    onClick: () -> Unit,
    contentDesc: String,
    minHeight: Int = 48,
    shadowColor: Color? = null,
) {
    val bgModifier = Modifier
        .clip(RoundedCornerShape(12.dp))
        .background(backgroundColor)
        .border(2.dp, borderColor, RoundedCornerShape(12.dp))

    val finalModifier = if (shadowColor != null) {
        bgModifier.shadow(
            elevation = 8.dp,
            shape = RoundedCornerShape(12.dp),
            ambientColor = shadowColor,
            spotColor = shadowColor,
        )
    } else {
        bgModifier
    }

    Box(
        modifier = modifier
            .then(finalModifier)
            .defaultMinSize(minHeight = minHeight.dp)
            .clickable { onClick() }
            .semantics { contentDescription = contentDesc }
            .padding(horizontal = 8.dp, vertical = 12.dp),
        contentAlignment = Alignment.Center,
    ) {
        Text(
            text = text,
            color = foregroundColor,
            fontWeight = FontWeight.Bold,
            fontSize = 18.sp,
            textAlign = TextAlign.Center,
        )
    }
}

/** Helper to draw a bottom-only border (mirrors border-b-2 in Tailwind). */
@Composable
private fun Modifier.drawBottomBorder(color: Color, thickness: Dp): Modifier = this.then(
    Modifier.drawBehind {
        val strokeWidth = thickness.toPx()
        drawLine(
            color = color,
            start = androidx.compose.ui.geometry.Offset(0f, size.height - strokeWidth / 2),
            end = androidx.compose.ui.geometry.Offset(size.width, size.height - strokeWidth / 2),
            strokeWidth = strokeWidth,
        )
    }
)