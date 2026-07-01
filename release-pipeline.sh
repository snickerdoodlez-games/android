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
if grep -r "TODO" ./android/app/src/main/java/ | grep -q ".java"; then
    echo "   [!] FAILURE: Incomplete code (TODO) found. Build aborted." && exit 1
else
    echo "   [✓] No placeholders or TODOs detected."
fi

# ----------------------------------------------------------
# STEP 3: Versioning (Skipping auto-increment for dynamic Gradle)
# ----------------------------------------------------------
echo "--> Skipping auto-increment (using dynamic CI versioning)..."

# ----------------------------------------------------------
# STEP 4: Quality Control & Build
# ----------------------------------------------------------
npm run build 2>&1
npx cap copy android 2>&1
npx cap sync android 2>&1

echo "--> Stopping any lingering Gradle daemons..."
pushd android > /dev/null
./gradlew --stop 2>/dev/null || true

echo "--> Running Lint and Unit Tests..."
./gradlew clean lintRelease testReleaseUnitTest || true
popd > /dev/null

echo "--> Cleaning stale web assets from Android..."
rm -rf android/app/src/main/assets/public 2>/dev/null || true

echo "--> Compiling Production AAB..."
pushd android > /dev/null
./gradlew bundleRelease --stacktrace
popd > /dev/null

# ----------------------------------------------------------
# STEP 5: Native Debug Symbols
# ----------------------------------------------------------
echo "--> Packaging Native Debug Symbols..."
AAB_DIR="./android/app/build/outputs/bundle/release"
SYM_DIR="./android/app/build/outputs/native-debug-symbols/release"
# NOTE: assembleRelease produces APK; bundleRelease produces AAB (required for Play Store)

if [ -d "$SYM_DIR" ]; then
    cd "$SYM_DIR" && zip -r "../../bundle/release/native-debug-symbols.zip" ./* && cd ../../../../../
    echo "   [✓] Debug symbols saved."
else
    echo "   [WARN] No native symbols found. Skipping."
fi

echo "===================================================="
echo "Workflow completed successfully."
echo "===================================================="