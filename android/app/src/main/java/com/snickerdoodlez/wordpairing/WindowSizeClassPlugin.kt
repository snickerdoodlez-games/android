package com.snickerdoodlez.wordpairing

import android.util.Log
import android.view.View
import android.view.ViewGroup
import androidx.compose.material3.adaptive.currentWindowAdaptiveInfo
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.platform.ComposeView
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

/**
 * Capacitor plugin that uses Jetpack Compose Material 3 Adaptive's
 * [currentWindowAdaptiveInfo] to compute and expose the current
 * [WindowSizeClass][androidx.compose.material3.adaptive.WindowSizeClass]
 * to the JavaScript / React side.
 *
 * The plugin creates a zero-sized invisible ComposeView that continuously
 * observes the adaptive info and fires "windowSizeClassChanged" events
 * whenever the width or height size class changes (e.g. when the device
 * is rotated, resized in multi-window mode, or folded/unfolded).
 */
@CapacitorPlugin(name = "WindowSizeClass")
class WindowSizeClassPlugin : Plugin() {

    private companion object {
        private const val TAG = "WindowSizeClassPlugin"
    }

    private var composeView: ComposeView? = null
    private var currentWidthClass: String = "Compact"
    private var currentHeightClass: String = "Compact"

    // ──────────────────────────────────────────────
    // Lifecycle
    // ──────────────────────────────────────────────

    override fun load() {
        super.load()
        setupComposeWindowObserver()
    }

    override fun handleOnDestroy() {
        composeView?.let { view ->
            val parent = view.parent as? ViewGroup
            parent?.removeView(view)
        }
        composeView = null
        super.handleOnDestroy()
    }

    // ──────────────────────────────────────────────
    // Plugin methods exposed to JavaScript
    // ──────────────────────────────────────────────

    /**
     * Returns the current WindowSizeClass information synchronously.
     *
     * **Result:**
     * - `windowWidthSizeClass`: "Compact" | "Medium" | "Expanded"
     * - `windowHeightSizeClass`: "Compact" | "Medium" | "Expanded"
     */
    @PluginMethod
    fun getWindowSizeClass(call: PluginCall) {
        call.resolve(buildWindowInfoJSObject())
    }

    // ──────────────────────────────────────────────
    // Internal helpers
    // ──────────────────────────────────────────────

    /**
     * Attaches an invisible ComposeView to the Activity's content view,
     * runs [currentWindowAdaptiveInfo] inside a Composition, and caches
     * the resulting size classes. Whenever a configuration change causes
     * the adaptive info to recompose, a "windowSizeClassChanged" event
     * is emitted to the JavaScript side.
     */
    private fun setupComposeWindowObserver() {
        val activity = activity ?: run {
            Log.w(TAG, "Activity not available — postponing ComposeView setup")
            return
        }

        composeView = ComposeView(activity).apply {
            setContent {
                val adaptiveInfo = currentWindowAdaptiveInfo()

                LaunchedEffect(adaptiveInfo) {
                    val widthClass  = adaptiveInfo.windowSizeClass.windowWidthSizeClass.toString()
                    val heightClass = adaptiveInfo.windowSizeClass.windowHeightSizeClass.toString()

                    if (widthClass != currentWidthClass || heightClass != currentHeightClass) {
                        currentWidthClass = widthClass
                        currentHeightClass = heightClass

                        Log.d(TAG, "Window size class changed: width=$widthClass, height=$heightClass")

                        notifyListeners("windowSizeClassChanged", buildWindowInfoJSObject())
                    }
                }
            }

            // Invisible — zero size, no background, no input
            layoutParams = ViewGroup.LayoutParams(0, 0)
            visibility = View.GONE
        }

        // Add the compose view to the Activity's root content frame
        activity.window?.decorView?.let { decorView ->
            val contentParent = decorView.findViewById<ViewGroup>(android.R.id.content)
            contentParent?.addView(composeView)
        }
    }

    private fun buildWindowInfoJSObject(): JSObject {
        return JSObject().apply {
            put("windowWidthSizeClass", currentWidthClass)
            put("windowHeightSizeClass", currentHeightClass)
        }
    }
}
