package com.snickerdoodlez.wordpairing

import android.os.Build
import com.getcapacitor.JSObject
import com.getcapacitor.PluginCall
import io.mockk.every
import io.mockk.mockk
import io.mockk.slot
import io.mockk.spyk
import io.mockk.verify
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertTrue
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner
import org.robolectric.annotation.Config

/**
 * Local unit tests for WindowSizeClassPlugin.
 *
 * These tests verify the plugin's window size class logic in isolation,
 * using MockK to mock Capacitor framework dependencies. Runs under
 * Robolectric to provide Android SDK stubs (needed by JSObject/JSONObject).
 *
 * Note: Compose-related functionality (currentWindowAdaptiveInfo) requires
 * an Android runtime and is tested via instrumented tests. These local
 * tests focus on the non-Compose logic: the buildWindowInfoJSObject helper
 * and the initial state contract.
 */
@RunWith(RobolectricTestRunner::class)
@Config(sdk = [Build.VERSION_CODES.VANILLA_ICE_CREAM])
class WindowSizeClassPluginTest {

    private lateinit var plugin: WindowSizeClassPlugin
    private lateinit var mockCall: PluginCall

    @Before
    fun setUp() {
        plugin = spyk(WindowSizeClassPlugin())
        mockCall = mockk(relaxed = true)
    }

    @Test
    fun `instantiate WindowSizeClassPlugin succeeds`() {
        assertNotNull("WindowSizeClassPlugin should be instantiable", plugin)
    }

    @Test
    fun `plugin annotation name is WindowSizeClass`() {
        val annotation = plugin.javaClass.getAnnotation(
            com.getcapacitor.annotation.CapacitorPlugin::class.java
        )
        assertNotNull("WindowSizeClassPlugin should have @CapacitorPlugin annotation", annotation)
        assertEquals(
            "Plugin name should be 'WindowSizeClass'",
            "WindowSizeClass",
            annotation.name
        )
    }

    @Test
    fun `getWindowSizeClass resolves with default size classes`() {
        // By default, the plugin initializes width and height to "Compact"
        plugin.getWindowSizeClass(mockCall)

        verify { mockCall.resolve(any<JSObject>()) }
    }

    @Test
    fun `buildWindowInfoJSObject contains expected keys`() {
        // Access the private helper via reflection to verify its contract
        val buildMethod = WindowSizeClassPlugin::class.java.getDeclaredMethod(
            "buildWindowInfoJSObject"
        )
        buildMethod.isAccessible = true

        val result = buildMethod.invoke(plugin) as JSObject

        assertTrue("Result should contain windowWidthSizeClass", result.has("windowWidthSizeClass"))
        assertTrue("Result should contain windowHeightSizeClass", result.has("windowHeightSizeClass"))

        // Default values for a fresh plugin
        assertEquals("Compact", result.getString("windowWidthSizeClass"))
        assertEquals("Compact", result.getString("windowHeightSizeClass"))
    }

    @Test
    fun `getWindowSizeClass resolves with JSObject`() {
        val resolveSlot = slot<JSObject>()

        val capturingCall = mockk<PluginCall> {
            every { resolve(capture(resolveSlot)) } returns Unit
        }

        plugin.getWindowSizeClass(capturingCall)

        assertTrue("resolve should have been called", resolveSlot.isCaptured)
        val result = resolveSlot.captured
        assertTrue("Result should contain windowWidthSizeClass", result.has("windowWidthSizeClass"))
        assertTrue("Result should contain windowHeightSizeClass", result.has("windowHeightSizeClass"))
    }
}
