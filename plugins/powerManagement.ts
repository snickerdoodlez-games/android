/**
 * PowerManagement Service
 * 
 * Provides power management utilities for the app, handling Doze mode,
 * App Standby, battery optimization status, and battery-aware behavior.
 * 
 * Uses the native PowerManagementPlugin on Android, with web fallbacks
 * using the Battery Status API.
 */

import { Capacitor } from '@capacitor/core';

// Define the native plugin interface
interface PowerManagementPlugin {
  isIgnoringBatteryOptimizations(): Promise<{ isIgnoring: boolean }>;
  openBatteryOptimizationSettings(): Promise<void>;
  getBatteryInfo(): Promise<{ batteryLevel: number; isCharging: boolean; level: number; scale: number }>;
  isPowerSaveMode(): Promise<{ isPowerSaveMode: boolean }>;
  isDeviceIdleMode(): Promise<{ isDeviceIdleMode: boolean }>;
  getPowerManagementStatus(): Promise<{
    isDeviceIdleMode: boolean;
    isPowerSaveMode: boolean;
    isIgnoringBatteryOptimizations: boolean;
    batteryLevel: number;
    isCharging: boolean;
    apiLevel: number;
  }>;
}

// Battery manager events
export type BatteryEventCallback = (info: { batteryLevel: number; isCharging: boolean }) => void;
export type PowerStateCallback = (state: PowerManagementState) => void;

export interface PowerManagementState {
  isDeviceIdleMode: boolean;
  isPowerSaveMode: boolean;
  isIgnoringBatteryOptimizations: boolean;
  batteryLevel: number;
  isCharging: boolean;
  apiLevel: number;
}

// Cache for the latest power status to avoid redundant native calls
let cachedPowerState: PowerManagementState | null = null;

/**
 * Get the native PowerManagement plugin if available on Android.
 */
function getNativePlugin(): PowerManagementPlugin | null {
  if (!Capacitor.isNativePlatform()) return null;
  try {
    // @ts-ignore - Capacitor plugin may not be typed
    const plugin = Capacitor.Plugins.PowerManagement as PowerManagementPlugin;
    if (plugin) return plugin;
  } catch {
    // Plugin not registered
  }
  return null;
}

/**
 * Check if the app is ignoring battery optimizations.
 * Returns true if already whitelisted, false otherwise.
 */
export async function isIgnoringBatteryOptimizations(): Promise<boolean> {
  const plugin = getNativePlugin();
  if (!plugin) return true; // Web/non-native: assume ignoring

  try {
    const result = await plugin.isIgnoringBatteryOptimizations();
    return result.isIgnoring;
  } catch {
    return true;
  }
}

/**
 * Open the system battery optimization settings so the user can whitelist this app.
 */
export async function openBatteryOptimizationSettings(): Promise<void> {
  const plugin = getNativePlugin();
  if (!plugin) return;

  try {
    await plugin.openBatteryOptimizationSettings();
  } catch (e) {
    console.error('Could not open battery optimization settings:', e);
  }
}

/**
 * Get battery level (0.0 to 1.0) and charging status.
 * On web, uses the Battery Status API with fallback.
 */
export async function getBatteryInfo(): Promise<{ batteryLevel: number; isCharging: boolean }> {
  const plugin = getNativePlugin();
  if (plugin) {
    try {
      return await plugin.getBatteryInfo();
    } catch {
      // Fall through to web API
    }
  }

  // Web Battery Status API fallback
  try {
    const battery = await getWebBattery();
    if (battery) {
      return {
        batteryLevel: battery.level,
        isCharging: battery.charging
      };
    }
  } catch {
    // Battery API not available
  }

  return { batteryLevel: -1, isCharging: false };
}

/**
 * Check if the device is in power save mode (battery saver).
 */
export async function isPowerSaveMode(): Promise<boolean> {
  const plugin = getNativePlugin();
  if (!plugin) return false;

  try {
    const result = await plugin.isPowerSaveMode();
    return result.isPowerSaveMode;
  } catch {
    return false;
  }
}

/**
 * Check if the device is currently in Doze / idle mode.
 */
export async function isDeviceIdleMode(): Promise<boolean> {
  const plugin = getNativePlugin();
  if (!plugin) return false;

  try {
    const result = await plugin.isDeviceIdleMode();
    return result.isDeviceIdleMode;
  } catch {
    return false;
  }
}

/**
 * Get the complete power management status from the device.
 */
export async function getPowerManagementStatus(): Promise<PowerManagementState> {
  const plugin = getNativePlugin();
  if (plugin) {
    try {
      const status = await plugin.getPowerManagementStatus();
      cachedPowerState = status;
      return status;
    } catch {
      // Fall through
    }
  }

  // Web fallback
  const batteryLevel = await getBatteryInfo();
  const fallback: PowerManagementState = {
    isDeviceIdleMode: false,
    isPowerSaveMode: false,
    isIgnoringBatteryOptimizations: true,
    batteryLevel: batteryLevel.batteryLevel,
    isCharging: batteryLevel.isCharging,
    apiLevel: 0
  };
  cachedPowerState = fallback;
  return fallback;
}

/**
 * Get the last cached power management status (fast, no native call).
 * Returns null if never fetched.
 */
export function getCachedPowerState(): PowerManagementState | null {
  return cachedPowerState;
}

/**
 * Listen for battery status changes using the Web Battery Status API.
 * This is non-native only; native changes are handled via app lifecycle.
 * Returns an unsubscribe function.
 */
export function onBatteryChange(callback: BatteryEventCallback): () => void {
  let battery: any = null;
  let cancelled = false;

  const setup = async () => {
    try {
      battery = await getWebBattery();
      if (!battery || cancelled) return;

      const update = () => {
        if (!cancelled) {
          callback({ batteryLevel: battery.level, isCharging: battery.charging });
        }
      };

      battery.addEventListener('levelchange', update);
      battery.addEventListener('chargingchange', update);

      // Call once immediately with current state
      callback({ batteryLevel: battery.level, isCharging: battery.charging });
    } catch {
      // Battery API not available
    }
  };

  setup();

  return () => {
    cancelled = true;
    if (battery) {
      battery.removeEventListener('levelchange', () => {});
      battery.removeEventListener('chargingchange', () => {});
    }
  };
}

/**
 * Pause game timers when battery is low or power save mode is active.
 * This helps apps conform to Doze/App Standby best practices.
 */
export function shouldThrottleForBattery(batteryLevel: number, isCharging: boolean, isPowerSave: boolean): boolean {
  // Throttle if:
  // - Battery level is critically low (< 15%) and NOT charging
  // - Power save mode is active
  if (isPowerSave) return true;
  if (!isCharging && batteryLevel >= 0 && batteryLevel < 0.15) return true;
  return false;
}

/**
 * Register for power management state changes using the Web Battery API.
 * Returns a function to clean up the listener.
 */
export function monitorPowerState(callback: PowerStateCallback): () => void {
  let cancelled = false;

  const poll = async () => {
    if (cancelled) return;
    try {
      const state = await getPowerManagementStatus();
      if (!cancelled) callback(state);
    } catch {
      // Ignore errors during polling
    }
  };

  // Initial check
  poll();

  // Poll every 30 seconds for power state changes (low frequency to save battery)
  const interval = setInterval(poll, 30000);

  return () => {
    cancelled = true;
    clearInterval(interval);
  };
}

/**
 * Web Battery Status API helper.
 * Returns null if the API is not available.
 */
async function getWebBattery(): Promise<any> {
  const navigatorAny = navigator as any;
  if (typeof navigatorAny.getBattery === 'function') {
    try {
      return await navigatorAny.getBattery();
    } catch {
      return null;
    }
  }
  return null;
}
