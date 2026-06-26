---
name: generate-playstore-assets
description: Automatically generates all descriptions, store text, metadata, and handles screenshot collection for Google Play Store deployment.
---

## Phase 1: Context Gathering
1. Use `read_file` to inspect the root state machine (`App.tsx`), your theme configs, and core game components.
2. Analyze the game mechanics, themes, grid structures, and unique features to capture the true identity of the app.

## Phase 2: Metadata & Description Generation
Create a new directory at `distribution/playstore/metadata/en-US/` and generate the following files with **zero placeholders**:

* **`title.txt`**: A catchy, high-conversion app title (Max 30 characters).
* **`short_desc.txt`**: A compelling hook detailing the core loop of the game (Max 80 characters).
* **`full_desc.txt`**: A comprehensive description layout including:
    * An engaging gameplay overview.
    * Key features list (mentioning dynamic grids, themed levels, smooth native performance).
    * Call-to-actions for players (Max 4000 characters).

## Phase 3: Visual Screenshot Mapping & Execution
1. Check if the terminal can access `capture_store_assets.bat`.
2. Inform the user in chat that the script is about to run and that they should watch their running emulator screen.
3. Execute the script natively using Cline's local terminal integration wrapper:
   ```cmd
.\capture_store_assets.bat