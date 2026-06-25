---
name: compose-state-machine
description: Architecture guide for converting complex game loop state machines (like App.tsx) into decoupled, lifecycle-aware Jetpack Compose states.
---

## Architectural Rules
1. **State Hoisting:** Elevate game states out of individual UI screens into a single parent container or an Android ViewModel structure.
2. **Unidirectional Data Flow (UDF):** Pass immutable state down to composables (e.g., `SettingsMenu`) and pass event triggers/lambdas up (e.g., `onToggleSound: (Boolean) -> Unit`).
3. **Recomposition Optimization:** Group related states together using immutable data classes to minimize unneeded recompositions and prevent app lag.