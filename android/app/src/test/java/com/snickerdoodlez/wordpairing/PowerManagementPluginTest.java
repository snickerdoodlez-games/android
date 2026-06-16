package com.snickerdoodlez.wordpairing;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.PowerManager;

import androidx.appcompat.app.AppCompatActivity;

import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.robolectric.RobolectricTestRunner;
import org.robolectric.annotation.Config;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 * Local unit tests for PowerManagementPlugin.
 *
 * These tests verify the plugin's power management logic in isolation,
 * using Mockito to mock Android framework dependencies.
 */
@RunWith(RobolectricTestRunner.class)
@Config(sdk = Build.VERSION_CODES.VANILLA_ICE_CREAM)
public class PowerManagementPluginTest {

    @Mock
    private PowerManager mockPowerManager;

    @Mock
    private Context mockContext;

    @Mock
    private AppCompatActivity mockActivity;

    @Mock
    private PluginCall mockCall;

    @Captor
    private ArgumentCaptor<JSObject> jsObjectCaptor;

    private PowerManagementPlugin plugin;

    private static final String TEST_PACKAGE_NAME = "com.snickerdoodlez.wordpairing";

    @Before
    public void setUp() {
        MockitoAnnotations.openMocks(this);

        when(mockContext.getPackageName()).thenReturn(TEST_PACKAGE_NAME);
        when(mockContext.getSystemService(Context.POWER_SERVICE)).thenReturn(mockPowerManager);
        when(mockActivity.getPackageName()).thenReturn(TEST_PACKAGE_NAME);
        when(mockActivity.getSystemService(Context.POWER_SERVICE)).thenReturn(mockPowerManager);

        // Use anonymous subclass instead of spy() to avoid WrongTypeOfReturnValue
        plugin = new PowerManagementPlugin() {
            @Override
            public Context getContext() {
                return mockContext;
            }

            @Override
            public AppCompatActivity getActivity() {
                return mockActivity;
            }
        };
        // Initialize the powerManager field by simulating the load lifecycle
        plugin.load();
    }

    // ──────────────────────────────────────────────
    // isIgnoringBatteryOptimizations
    // ──────────────────────────────────────────────

    @Test
    public void isIgnoringBatteryOptimizations_whenIgnoring_returnsTrue() {
        when(mockPowerManager.isIgnoringBatteryOptimizations(TEST_PACKAGE_NAME)).thenReturn(true);

        plugin.isIgnoringBatteryOptimizations(mockCall);

        verify(mockCall).resolve(jsObjectCaptor.capture());
        JSObject result = jsObjectCaptor.getValue();
        assertTrue("isIgnoring should be true", result.getBool("isIgnoring"));
    }

    @Test
    public void isIgnoringBatteryOptimizations_whenNotIgnoring_returnsFalse() {
        when(mockPowerManager.isIgnoringBatteryOptimizations(TEST_PACKAGE_NAME)).thenReturn(false);

        plugin.isIgnoringBatteryOptimizations(mockCall);

        verify(mockCall).resolve(jsObjectCaptor.capture());
        JSObject result = jsObjectCaptor.getValue();
        assertFalse("isIgnoring should be false", result.getBool("isIgnoring"));
    }

    @Test
    public void isIgnoringBatteryOptimizations_whenPowerManagerNull_returnsTrue() {
        // Simulate scenario where PowerManager is not available (e.g., no context).
        // Since load() is not called, powerManager field stays null,
        // and the plugin should default to returning true.
        plugin = new PowerManagementPlugin() {
            @Override
            public Context getContext() {
                return null;
            }

            @Override
            public AppCompatActivity getActivity() {
                return null;
            }
        };

        plugin.isIgnoringBatteryOptimizations(mockCall);

        verify(mockCall).resolve(jsObjectCaptor.capture());
        JSObject result = jsObjectCaptor.getValue();
        assertTrue("isIgnoring should default to true when PowerManager is null",
                result.getBool("isIgnoring"));
    }

    // ──────────────────────────────────────────────
    // isPowerSaveMode
    // ──────────────────────────────────────────────

    @Test
    public void isPowerSaveMode_whenInPowerSave_returnsTrue() {
        when(mockPowerManager.isPowerSaveMode()).thenReturn(true);

        plugin.isPowerSaveMode(mockCall);

        verify(mockCall).resolve(jsObjectCaptor.capture());
        JSObject result = jsObjectCaptor.getValue();
        assertTrue("isPowerSaveMode should be true", result.getBool("isPowerSaveMode"));
    }

    @Test
    public void isPowerSaveMode_whenNotInPowerSave_returnsFalse() {
        when(mockPowerManager.isPowerSaveMode()).thenReturn(false);

        plugin.isPowerSaveMode(mockCall);

        verify(mockCall).resolve(jsObjectCaptor.capture());
        JSObject result = jsObjectCaptor.getValue();
        assertFalse("isPowerSaveMode should be false", result.getBool("isPowerSaveMode"));
    }

    // ──────────────────────────────────────────────
    // isDeviceIdleMode
    // ──────────────────────────────────────────────

    @Test
    public void isDeviceIdleMode_whenIdle_returnsTrue() {
        when(mockPowerManager.isDeviceIdleMode()).thenReturn(true);

        plugin.isDeviceIdleMode(mockCall);

        verify(mockCall).resolve(jsObjectCaptor.capture());
        JSObject result = jsObjectCaptor.getValue();
        assertTrue("isDeviceIdleMode should be true", result.getBool("isDeviceIdleMode"));
    }

    @Test
    public void isDeviceIdleMode_whenNotIdle_returnsFalse() {
        when(mockPowerManager.isDeviceIdleMode()).thenReturn(false);

        plugin.isDeviceIdleMode(mockCall);

        verify(mockCall).resolve(jsObjectCaptor.capture());
        JSObject result = jsObjectCaptor.getValue();
        assertFalse("isDeviceIdleMode should be false", result.getBool("isDeviceIdleMode"));
    }

    // ──────────────────────────────────────────────
    // openBatteryOptimizationSettings
    // ──────────────────────────────────────────────

    @Test
    public void openBatteryOptimizationSettings_startsExpectedIntent() {
        plugin.openBatteryOptimizationSettings(mockCall);

        ArgumentCaptor<Intent> intentCaptor = ArgumentCaptor.forClass(Intent.class);
        verify(mockContext).startActivity(intentCaptor.capture());

        Intent capturedIntent = intentCaptor.getValue();
        assertEquals(
                "Should use ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS",
                android.provider.Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS,
                capturedIntent.getAction()
        );
        assertEquals(
                "Intent data should contain the package URI",
                android.net.Uri.parse("package:" + TEST_PACKAGE_NAME),
                capturedIntent.getData()
        );
        assertTrue("Intent should have NEW_TASK flag",
                (capturedIntent.getFlags() & Intent.FLAG_ACTIVITY_NEW_TASK) != 0);
        verify(mockCall).resolve();
    }

    // ──────────────────────────────────────────────
    // getBatteryInfo
    // ──────────────────────────────────────────────

    @Test
    public void getBatteryInfo_returnsValidStructure() {
        plugin.getBatteryInfo(mockCall);

        verify(mockCall).resolve(jsObjectCaptor.capture());
        JSObject result = jsObjectCaptor.getValue();

        // The battery info should always contain these keys
        assertTrue("Result should contain batteryLevel", result.has("batteryLevel"));
        assertTrue("Result should contain isCharging", result.has("isCharging"));
    }

    // ──────────────────────────────────────────────
    // getPowerManagementStatus (composite)
    // ──────────────────────────────────────────────

    @Test
    public void getPowerManagementStatus_containsAllExpectedFields() {
        when(mockPowerManager.isDeviceIdleMode()).thenReturn(false);
        when(mockPowerManager.isPowerSaveMode()).thenReturn(false);
        when(mockPowerManager.isIgnoringBatteryOptimizations(TEST_PACKAGE_NAME)).thenReturn(true);

        plugin.getPowerManagementStatus(mockCall);

        verify(mockCall).resolve(jsObjectCaptor.capture());
        JSObject result = jsObjectCaptor.getValue();

        assertNotNull("Result should not be null", result);
        assertTrue("Should contain isDeviceIdleMode", result.has("isDeviceIdleMode"));
        assertTrue("Should contain isPowerSaveMode", result.has("isPowerSaveMode"));
        assertTrue("Should contain isIgnoringBatteryOptimizations", result.has("isIgnoringBatteryOptimizations"));
        assertTrue("Should contain batteryLevel", result.has("batteryLevel"));
        assertTrue("Should contain isCharging", result.has("isCharging"));
        assertTrue("Should contain apiLevel", result.has("apiLevel"));

        assertFalse("isDeviceIdleMode should be false", result.getBool("isDeviceIdleMode"));
        assertFalse("isPowerSaveMode should be false", result.getBool("isPowerSaveMode"));
        assertTrue("isIgnoringBatteryOptimizations should be true", result.getBool("isIgnoringBatteryOptimizations"));
        assertEquals("apiLevel should match Build.VERSION.SDK_INT",
                Build.VERSION.SDK_INT, result.getInteger("apiLevel").intValue());
    }

    @Test
    public void getPowerManagementStatus_reflectsPowerSaveOn() {
        when(mockPowerManager.isPowerSaveMode()).thenReturn(true);

        plugin.getPowerManagementStatus(mockCall);

        verify(mockCall).resolve(jsObjectCaptor.capture());
        JSObject result = jsObjectCaptor.getValue();
        assertTrue("isPowerSaveMode should reflect power save on", result.getBool("isPowerSaveMode"));
    }

    @Test
    public void getPowerManagementStatus_reflectsDeviceIdleOn() {
        when(mockPowerManager.isDeviceIdleMode()).thenReturn(true);

        plugin.getPowerManagementStatus(mockCall);

        verify(mockCall).resolve(jsObjectCaptor.capture());
        JSObject result = jsObjectCaptor.getValue();
        assertTrue("isDeviceIdleMode should reflect doze mode on", result.getBool("isDeviceIdleMode"));
    }

    @Test
    public void getPowerManagementStatus_reflectsNotOptimizing() {
        when(mockPowerManager.isIgnoringBatteryOptimizations(TEST_PACKAGE_NAME)).thenReturn(false);

        plugin.getPowerManagementStatus(mockCall);

        verify(mockCall).resolve(jsObjectCaptor.capture());
        JSObject result = jsObjectCaptor.getValue();
        assertFalse("isIgnoringBatteryOptimizations should be false",
                result.getBool("isIgnoringBatteryOptimizations"));
    }
}
