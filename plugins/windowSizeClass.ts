import { Capacitor, registerPlugin } from '@capacitor/core';

/**
 * Represents the three Material Design window width/height size classes.
 *
 * - **Compact**   → < 600 dp width / < 480 dp height  (phones)
 * - **Medium**    → 600–840 dp width / 480–900 dp height (foldables, small tablets)
 * - **Expanded**  → ≥ 840 dp width / ≥ 900 dp height (tablets, desktop)
 */
export type WindowSizeClass = 'Compact' | 'Medium' | 'Expanded';

/**
 * Result returned by the native Compose Material 3 Adaptive plugin.
 */
export interface WindowSizeClassResult {
  /** Width-based window size class ("Compact" | "Medium" | "Expanded") */
  windowWidthSizeClass: WindowSizeClass;
  /** Height-based window size class ("Compact" | "Medium" | "Expanded") */
  windowHeightSizeClass: WindowSizeClass;
}

/**
 * Interface matching the native @CapacitorPlugin(name="WindowSizeClass").
 */
interface WindowSizeClassPlugin {
  /** Returns the current window size class synchronously. */
  getWindowSizeClass(): Promise<WindowSizeClassResult>;
  /**
   * Listens for size‑class changes (e.g. rotation, multi‑window resize,
   * foldable posture changes).
   */
  addListener(
    eventName: 'windowSizeClassChanged',
    listener: (info: WindowSizeClassResult) => void,
  ): Promise<{ remove: () => Promise<void> }>;
}

/**
 * Singleton plugin reference.
 */
const NativeWindowSizeClass = registerPlugin<WindowSizeClassPlugin>('WindowSizeClass');

/**
 * High‑level helper that wraps the native WindowSizeClass plugin.
 *
 * Usage:
 * ```ts
 * import WindowSizeClass from '../plugins/windowSizeClass';
 *
 * const current = await WindowSizeClass.get();
 * console.log(current.windowWidthSizeClass); // "Compact" | "Medium" | "Expanded"
 *
 * const listener = await WindowSizeClass.onChange((info) => { … });
 * // listener.remove() to unsubscribe
 * ```
 */
const WindowSizeClassHelper = {
  /**
   * Returns the current WindowSizeClass info.
   * Works on both native and web platforms (web returns "Compact" as fallback).
   */
  get: async (): Promise<WindowSizeClassResult> => {
    if (!Capacitor.isNativePlatform()) {
      return { windowWidthSizeClass: 'Compact', windowHeightSizeClass: 'Compact' };
    }
    return NativeWindowSizeClass.getWindowSizeClass();
  },

  /**
   * Registers a callback that fires whenever the system window size class
   * changes (screen rotation, fold/unfold, multi‑window resize).
   *
   * Returns a `remove()` function to unregister the listener.
   */
  onChange: (callback: (info: WindowSizeClassResult) => void): { remove: () => void } => {
    let nativeRemove: (() => Promise<void>) | null = null;

    if (Capacitor.isNativePlatform()) {
      // Start listening on native
      NativeWindowSizeClass.addListener('windowSizeClassChanged', (info) => {
        callback(info);
      }).then((listener) => {
        nativeRemove = listener.remove;
      });
    }

    // Also listen for window resize on web as a best‑effort fallback
    const onResize = () => {
      if (!Capacitor.isNativePlatform()) {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const toSizeClass = (px: number, compact: number, medium: number): WindowSizeClass =>
          px < compact ? 'Compact' : px < medium ? 'Medium' : 'Expanded';
        callback({
          windowWidthSizeClass: toSizeClass(w, 600, 840),
          windowHeightSizeClass: toSizeClass(h, 480, 900),
        });
      }
    };
    window.addEventListener('resize', onResize);
    // Fire once immediately for web
    if (!Capacitor.isNativePlatform()) {
      onResize();
    }

    return {
      remove: () => {
        window.removeEventListener('resize', onResize);
        nativeRemove?.();
      },
    };
  },
};

export default WindowSizeClassHelper;
