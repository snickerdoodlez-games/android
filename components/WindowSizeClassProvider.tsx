import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import WindowSizeClassHelper, { WindowSizeClassResult, WindowSizeClass } from '../plugins/windowSizeClass';

/**
 * Context value exposed to the entire app.
 */
export interface WindowSizeClassContextValue {
  /**
   * The current width-based window size class.
   * On native Android this comes from Compose Material 3 Adaptive's
   * `currentWindowAdaptiveInfo().windowSizeClass.windowWidthSizeClass`.
   */
  windowWidthSizeClass: WindowSizeClass;

  /**
   * The current height-based window size class.
   */
  windowHeightSizeClass: WindowSizeClass;

  /**
   * Convenience booleans for the three width size classes.
   */
  isCompact: boolean;
  isMedium: boolean;
  isExpanded: boolean;
}

const WindowSizeClassContext = createContext<WindowSizeClassContextValue>({
  windowWidthSizeClass: 'Compact',
  windowHeightSizeClass: 'Compact',
  isCompact: true,
  isMedium: false,
  isExpanded: false,
});

/**
 * Hook to access the current window size class anywhere in the app.
 */
export const useWindowSizeClass = () => useContext(WindowSizeClassContext);

/**
 * Provider that listens to the native `WindowSizeClass` Capacitor plugin
 * (which uses `currentWindowAdaptiveInfo()` from Compose Material 3 Adaptive)
 * and re‑exposes the values as a React context.
 *
 * On non‑native platforms (web dev server) it falls back to `window.innerWidth`
 * / `window.innerHeight` using the standard Material 3 breakpoints:
 *
 * | Size class | Width     | Height    |
 * |------------|-----------|-----------|
 * | Compact    | < 600 dp  | < 480 dp  |
 * | Medium     | 600–840   | 480–900   |
 * | Expanded   | ≥ 840     | ≥ 900     |
 */
export const WindowSizeClassProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState<WindowSizeClassResult>({
    windowWidthSizeClass: 'Compact',
    windowHeightSizeClass: 'Compact',
  });

  useEffect(() => {
    // Fetch the initial value
    WindowSizeClassHelper.get().then((result) => {
      if (result) setValue(result);
    });

    // Listen for changes
    const listener = WindowSizeClassHelper.onChange((result) => {
      setValue(result);
    });

    return () => listener.remove();
  }, []);

  const ctx: WindowSizeClassContextValue = {
    ...value,
    get isCompact()  { return this.windowWidthSizeClass === 'Compact'; },
    get isMedium()   { return this.windowWidthSizeClass === 'Medium'; },
    get isExpanded() { return this.windowWidthSizeClass === 'Expanded'; },
  };

  return (
    <WindowSizeClassContext.Provider value={ctx}>
      {children}
    </WindowSizeClassContext.Provider>
  );
};

export default WindowSizeClassProvider;
