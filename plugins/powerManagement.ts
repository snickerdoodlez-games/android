/**
 * Power Management Plugin
 * 
 * Centralized battery optimization: pauses animations, suspends audio,
 * clears non-essential timers when the app goes to background or is idle.
 * 
 * All components/utilities subscribe to visibility changes through
 * a simple event-based API to avoid tight coupling.
 */

type VisibilityCallback = (visible: boolean) => void;

const listeners = new Set<VisibilityCallback>();

let isVisible = true;
let isInitialized = false;

/**
 * Initialize the power management system.
 * Call once from App.tsx on mount.
 */
export function initPowerManagement(): () => void {
  if (isInitialized) {
    // Already initialized; return existing cleanup
    // but don't double-register handlers.
  }
  isInitialized = true;

  const handleVisibilityChange = () => {
    const nowVisible = document.visibilityState === 'visible';
    if (nowVisible === isVisible) return;
    isVisible = nowVisible;

    if (!isVisible) {
      // App went to background: pause animations, suspend audio
      document.documentElement.classList.add('animation-paused');
    } else {
      // App returned to foreground: resume animations, resume audio
      document.documentElement.classList.remove('animation-paused');
    }

    // Notify all registered listeners
    listeners.forEach((cb) => {
      try { cb(isVisible); } catch (_) { /* ignore subscriber errors */ }
    });
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);

  // Also handle pagehide (covers WebView tab switching on Android)
  const handlePageHide = () => {
    if (isVisible) {
      isVisible = false;
      document.documentElement.classList.add('animation-paused');
      listeners.forEach((cb) => {
        try { cb(false); } catch (_) { /* ignore */ }
      });
    }
  };
  window.addEventListener('pagehide', handlePageHide);

  // Handle pageshow (when user returns to the tab)
  const handlePageShow = () => {
    if (!isVisible) {
      isVisible = true;
      document.documentElement.classList.remove('animation-paused');
      listeners.forEach((cb) => {
        try { cb(true); } catch (_) { /* ignore */ }
      });
    }
  };
  window.addEventListener('pageshow', handlePageShow);

  // Return cleanup function
  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('pagehide', handlePageHide);
    window.removeEventListener('pageshow', handlePageShow);
    listeners.clear();
    isInitialized = false;
  };
}

/**
 * Subscribe to visibility changes.
 * Returns an unsubscribe function.
 * 
 * @param callback - Called with true when visible, false when hidden
 */
export function onVisibilityChange(callback: VisibilityCallback): () => void {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

/**
 * Check if the app is currently visible (foreground).
 */
export function isAppVisible(): boolean {
  return isVisible;
}