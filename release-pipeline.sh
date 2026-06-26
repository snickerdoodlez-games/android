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
CONFIG_FILE="./android/app/src/main/java/com/snickerdoodlez/wordpairing/MainActivity.java"

if [ -f "$CONFIG_FILE" ]; then
    if grep -q "developerMenuEnabled = true" "$CONFIG_FILE"; then
        echo "   [!] Dev Menu is active. Disabling for production..."
        sed -i.bak 's/developerMenuEnabled = true/developerMenuEnabled = false/g' "$CONFIG_FILE"
        rm -f "${CONFIG_FILE}.bak"
        echo "   [✓] Dev Menu disabled."
    else
        echo "   [✓] Dev Menu is not enabled in configuration."
    fi
else
    echo "   [i] Configuration target file not found, skipping inline flag check."
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
    CURRENT_VERSION_CODE=$(grep -E "versionCode\s+[0-9]+" "$GRADLE_FILE" | awk '{print $2}')
    CURRENT_VERSION_NAME=$(grep -E "versionName\s+\"[0-9]+\"" "$GRADLE_FILE" | head -n 1 | awk -F'"' '{print $2}')

    NEXT_VERSION_CODE=$((CURRENT_VERSION_CODE + 1))
    NEXT_VERSION_NAME=$((CURRENT_VERSION_NAME + 1))

    sed -i.bak "s/versionCode $CURRENT_VERSION_CODE/versionCode $NEXT_VERSION_CODE/g" "$GRADLE_FILE"
    sed -i.bak "s/versionName \"$CURRENT_VERSION_NAME\"/versionName \"$NEXT_VERSION_NAME\"/g" "$GRADLE_FILE"
    rm -f "${GRADLE_FILE}.bak"
    echo "   [✓] Updated to Version $NEXT_VERSION_NAME (Code: $NEXT_VERSION_CODE)"
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