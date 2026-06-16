package com.snickerdoodlez.wordpairing;

import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.BatteryManager;
import android.os.Build;
import android.os.PowerManager;
import android.provider.Settings;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/**
 * PowerManagementPlugin provides Capacitor bindings for Android Doze mode,
 * App Standby, battery optimization status, and power state monitoring.
 *
 * This plugin helps the app properly respond to power management features
 * as required by modern Android versions (Doze: API 23+, App Standby: API 28+).
 */
@CapacitorPlugin(name = "PowerManagement")
public class PowerManagementPlugin extends Plugin {

    private PowerManager powerManager;

    @Override
    public void load() {
        super.load();
        powerManager = (PowerManager) getContext().getSystemService(Context.POWER_SERVICE);
    }

    /**
     * Check if the app is currently exempt from battery optimizations (Doze / App Standby).
     * Returns true if the app is already whitelisted / ignored.
     */
    @PluginMethod
    public void isIgnoringBatteryOptimizations(PluginCall call) {
        JSObject ret = new JSObject();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && powerManager != null) {
            boolean isIgnoring = powerManager.isIgnoringBatteryOptimizations(
                getContext().getPackageName()
            );
            ret.put("isIgnoring", isIgnoring);
        } else {
            // Pre-Marshmallow devices have no doze mode — always ignoring
            ret.put("isIgnoring", true);
        }
        call.resolve(ret);
    }

    /**
     * Open the system battery optimization settings page so the user can whitelist the app.
     */
    @PluginMethod
    public void openBatteryOptimizationSettings(PluginCall call) {
        try {
            Intent intent = new Intent(
                Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS
            );
            intent.setData(android.net.Uri.parse("package:" + getContext().getPackageName()));
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getContext().startActivity(intent);
            call.resolve();
        } catch (Exception e) {
            // Fallback to general battery settings if the direct request is not available
            try {
                Intent intent = new Intent(Settings.ACTION_IGNORE_BATTERY_OPTIMIZATION_SETTINGS);
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                getContext().startActivity(intent);
                call.resolve();
            } catch (Exception ex) {
                call.reject("Could not open battery optimization settings: " + ex.getMessage());
            }
        }
    }

    /**
     * Check the current battery level and charging state.
     * Useful for determining if the app can safely do background work.
     */
    @PluginMethod
    public void getBatteryInfo(PluginCall call) {
        JSObject ret = new JSObject();
        try {
            Context context = getContext();
            IntentFilter filter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
            Intent batteryStatus = context.registerReceiver(null, filter);

            if (batteryStatus != null) {
                int level = batteryStatus.getIntExtra(BatteryManager.EXTRA_LEVEL, -1);
                int scale = batteryStatus.getIntExtra(BatteryManager.EXTRA_SCALE, -1);
                float batteryPct = level / (float) (scale != 0 ? scale : 100);

                int status = batteryStatus.getIntExtra(BatteryManager.EXTRA_STATUS, -1);
                boolean isCharging = status == BatteryManager.BATTERY_STATUS_CHARGING
                    || status == BatteryManager.BATTERY_STATUS_FULL;

                ret.put("batteryLevel", batteryPct);
                ret.put("isCharging", isCharging);
                ret.put("level", level);
                ret.put("scale", scale);
            } else {
                ret.put("batteryLevel", -1);
                ret.put("isCharging", false);
            }
        } catch (Exception e) {
            ret.put("batteryLevel", -1);
            ret.put("isCharging", false);
        }
        call.resolve(ret);
    }

    /**
     * Check if the device is currently in power save mode (battery saver).
     */
    @PluginMethod
    public void isPowerSaveMode(PluginCall call) {
        JSObject ret = new JSObject();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP && powerManager != null) {
            boolean isPowerSave = powerManager.isPowerSaveMode();
            ret.put("isPowerSaveMode", isPowerSave);
        } else {
            ret.put("isPowerSaveMode", false);
        }
        call.resolve(ret);
    }

    /**
     * Check if the device is currently in idle (Doze) mode.
     * Only available on API 23+.
     */
    @PluginMethod
    public void isDeviceIdleMode(PluginCall call) {
        JSObject ret = new JSObject();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && powerManager != null) {
            boolean isIdle = powerManager.isDeviceIdleMode();
            ret.put("isDeviceIdleMode", isIdle);
        } else {
            ret.put("isDeviceIdleMode", false);
        }
        call.resolve(ret);
    }

    /**
     * Get the current device power profile status including:
     * - Doze mode status
     * - Battery saver status
     * - Battery optimization whitelist status
     * - Battery level / charging state
     *
     * Returns a composite status object for convenience.
     */
    @PluginMethod
    public void getPowerManagementStatus(PluginCall call) {
        JSObject ret = new JSObject();
        try {
            // Doze / idle
            boolean isDeviceIdle = false;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && powerManager != null) {
                isDeviceIdle = powerManager.isDeviceIdleMode();
            }
            ret.put("isDeviceIdleMode", isDeviceIdle);

            // Power save mode
            boolean isPowerSave = false;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP && powerManager != null) {
                isPowerSave = powerManager.isPowerSaveMode();
            }
            ret.put("isPowerSaveMode", isPowerSave);

            // Battery optimization whitelist
            boolean isIgnoring = false;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && powerManager != null) {
                isIgnoring = powerManager.isIgnoringBatteryOptimizations(
                    getContext().getPackageName()
                );
            } else {
                isIgnoring = true;
            }
            ret.put("isIgnoringBatteryOptimizations", isIgnoring);

            // Battery level / charging
            Context context = getContext();
            IntentFilter filter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
            Intent batteryStatus = context.registerReceiver(null, filter);
            if (batteryStatus != null) {
                int level = batteryStatus.getIntExtra(BatteryManager.EXTRA_LEVEL, -1);
                int scale = batteryStatus.getIntExtra(BatteryManager.EXTRA_SCALE, -1);
                float batteryPct = level / (float) (scale != 0 ? scale : 100);
                int status = batteryStatus.getIntExtra(BatteryManager.EXTRA_STATUS, -1);
                boolean isCharging = status == BatteryManager.BATTERY_STATUS_CHARGING
                    || status == BatteryManager.BATTERY_STATUS_FULL;
                ret.put("batteryLevel", batteryPct);
                ret.put("isCharging", isCharging);
            } else {
                ret.put("batteryLevel", -1);
                ret.put("isCharging", false);
            }

            // API level info
            ret.put("apiLevel", Build.VERSION.SDK_INT);

            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Failed to get power management status: " + e.getMessage());
        }
    }
}
