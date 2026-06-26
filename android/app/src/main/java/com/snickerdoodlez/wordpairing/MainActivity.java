package com.snickerdoodlez.wordpairing;

import android.content.ComponentCallbacks2;
import android.content.res.Configuration;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Register the WindowSizeClass plugin that uses
        // Compose Material 3 Adaptive's currentWindowAdaptiveInfo()
        registerPlugin(WindowSizeClassPlugin.class);

        // Register the TestLab plugin for Firebase Test Lab result file writing
        registerPlugin(TestLabPlugin.class);

        // Register the StorageBridge plugin for SQLite-backed data persistence
        // (used by Firebase Test Lab's injected React Native bridge layer)
        registerPlugin(com.snickerdoodlez.wordpairing.modules.StorageBridge.class);

        // Register memory trim callback to handle power-constrained scenarios
        registerComponentCallbacks(new ComponentCallbacks2() {
            @Override
            public void onTrimMemory(int level) {
                // Respond to memory pressure events which are often triggered
                // during Doze / App Standby transitions
                switch (level) {
                    case ComponentCallbacks2.TRIM_MEMORY_RUNNING_MODERATE:
                    case ComponentCallbacks2.TRIM_MEMORY_RUNNING_LOW:
                    case ComponentCallbacks2.TRIM_MEMORY_RUNNING_CRITICAL:
                        // App is running and memory is constrained — trim caches
                        // The WebView handles its own cache trimming internally
                        break;

                    case ComponentCallbacks2.TRIM_MEMORY_UI_HIDDEN:
                        // App's UI is no longer visible — stop non-essential work
                        break;

                    case ComponentCallbacks2.TRIM_MEMORY_BACKGROUND:
                    case ComponentCallbacks2.TRIM_MEMORY_MODERATE:
                    case ComponentCallbacks2.TRIM_MEMORY_COMPLETE:
                        // App is in the background and memory is being reclaimed
                        // Save critical app state for restoration
                        break;
                }
            }

            @Override
            public void onConfigurationChanged(Configuration config) {
                // Handle configuration changes
            }

            @Override
            public void onLowMemory() {
                // System is running low on memory — trim where possible
            }
        });
    }

    @Override
    public void onStart() {
        super.onStart();
        // App is becoming visible — resume normal operations
        // This is also when Doze/Standby maintenance windows may occur
    }

    @Override
    public void onStop() {
        super.onStop();
        // App is no longer visible — prepare for possible Doze/Standby
        // The WebView's visibility change handler in App.tsx saves state
    }

    @Override
    public void onTrimMemory(int level) {
        super.onTrimMemory(level);
        // Called when the system determines it should trim memory
        // This happens during Doze maintenance windows and App Standby transitions
        if (level >= TRIM_MEMORY_MODERATE) {
            // Heavy trim — suggest WebView release non-essential resources
            System.gc();
        }
    }

    @Override
    public void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        // Add your game state saving logic here
        // outState.putInt("YOUR_GAME_STATE_KEY", yourGameState);
    }

    @Override
    public void onRestoreInstanceState(Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);
        // Add your game state restoring logic here
        // yourGameState = savedInstanceState.getInt("YOUR_GAME_STATE_KEY");
    }
}
