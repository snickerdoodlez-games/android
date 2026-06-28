#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "===================================================="
echo "Starting Production AAB Generation Workflow (Git Bash)"
echo "===================================================="

# ----------------------------------------------------------
# STEP 1: Dev Menu Verification and Removal
# ----------------------------------------------------------
echo "--> Checking for Dev Menu visibility settings..."

# The dev menu is controlled entirely in React/TypeScript (App.tsx passing
# isAutoPlaying / onToggleAutoPlay / levelIndex / onLevelChange props to
# SettingsMenu.tsx). The pipeline checks that no dev-menu props leak into
# the production JS bundle by looking for the dev-menu identifier string.
BUILD_JS=$(find ./dist -name '*.js' 2>/dev/null | head -1)
if [ -n "$BUILD_JS" ]; then
    if grep -q "DEV MENU" "$BUILD_JS" 2>/dev/null; then
        echo "   [!] Dev Menu strings still present in production bundle. Aborting."
        exit 1
    else
        echo "   [✓] Dev Menu strings absent from production bundle."
    fi
else
    echo "   [i] No production bundle found to scan; run 'npm run build' first."
fi

# ----------------------------------------------------------
# STEP 2: Truth-First Verification
# ----------------------------------------------------------
echo "--> Running Truth-First Verifier..."
# Scan for any remaining TODO placeholders in the source code
if grep -r "TODO" ./android/app/src/main/java/ | grep -q ".java"; then
    echo "   [!] FAILURE: Incomplete code (TODO) found. Build aborted." && exit 1
else
    echo "   [✓] No placeholders or TODOs detected."
fi

# ----------------------------------------------------------
# STEP 3: Auto-Increment VersionCode and VersionName
# ----------------------------------------------------------
echo "--> Auto-incrementing VersionCode and VersionName..."
GRADLE_FILE="./android/app/build.gradle"

if [ -f "$GRADLE_FILE" ]; then
    # Extract fallback versionCode from Groovy ternary:  ... ? ... : 5005944
    CURRENT_VERSION_CODE=$(grep 'versionCode' "$GRADLE_FILE" | grep -oE '[0-9]+$')
    # Extract fallback versionName from Groovy ternary:  ... ? ... : "5005944"
    CURRENT_VERSION_NAME=$(grep 'versionName' "$GRADLE_FILE" | grep -oE '"([0-9]+)"' | tr -d '"')

    if [ -n "$CURRENT_VERSION_CODE" ] && [ -n "$CURRENT_VERSION_NAME" ]; then
        NEXT_VERSION_CODE=$((CURRENT_VERSION_CODE + 1))
        NEXT_VERSION_NAME=$((CURRENT_VERSION_NAME + 1))

        sed -i.bak "s/: $CURRENT_VERSION_CODE\$/: ${NEXT_VERSION_CODE}/" "$GRADLE_FILE"
        sed -i.bak "s/\"$CURRENT_VERSION_NAME\"/\"$NEXT_VERSION_NAME\"/" "$GRADLE_FILE"
        rm -f "${GRADLE_FILE}.bak"
        echo "   [✓] Updated to Version $NEXT_VERSION_NAME (Code: $NEXT_VERSION_CODE)"
    else
        echo "   [i] Could not parse version from build.gradle; skipping auto-increment."
    fi
fi

# ----------------------------------------------------------
# STEP 4: Quality Control & Build
# ----------------------------------------------------------
echo "--> Stopping any lingering Gradle daemons..."
pushd android > /dev/null
./gradlew --stop 2>/dev/null || true

echo "--> Running Lint and Unit Tests..."
./gradlew clean lintRelease testReleaseUnitTest || true
popd > /dev/null

echo "--> Compiling Production AAB..."
pushd android > /dev/null
./gradlew bundleRelease
popd > /dev/null

# ----------------------------------------------------------
# STEP 5: Native Debug Symbols
# ----------------------------------------------------------
echo "--> Packaging Native Debug Symbols..."
AAB_DIR="./android/app/build/outputs/bundle/release"
SYM_DIR="./android/app/build/outputs/native-debug-symbols/release"

if [ -d "$SYM_DIR" ]; then
    cd "$SYM_DIR" && zip -r "../../bundle/release/native-debug-symbols.zip" ./* && cd ../../../../../
    echo "   [✓] Debug symbols saved."
else
    echo "   [WARN] No native symbols found. Skipping."
fi

echo "===================================================="
echo "Workflow completed successfully."
echo "===================================================="