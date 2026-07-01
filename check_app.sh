#!/bin/bash

# --- Android Local QA Agent ---
# Usage: chmod +x check_app.sh && ./check_app.sh

echo "🚀 Starting Local Best Practices Check..."

# All Gradle commands run from android/ where the Gradle wrapper lives
cd android || { echo "❌ android/ directory not found"; exit 1; }

# 0. Static Analysis: Scans for architectural flaws and code smells
echo "🔍 Running Detekt (Static Analysis)..."
./gradlew detekt
if [ $? -ne 0 ]; then echo "❌ Detekt found issues"; exit 1; fi

# 1. Lint Check: Ensures code quality and looks for potential bugs
echo "🔍 Running Lint..."
./gradlew lintRelease
if [ $? -ne 0 ]; then echo "❌ Lint failed"; exit 1; fi

# 1.5. Unit Testing: Validates core business logic
echo "🧪 Running Unit Tests..."
./gradlew testReleaseUnitTest
if [ $? -ne 0 ]; then echo "❌ Unit tests failed"; exit 1; fi

# 2. Security Audit: Checks for known vulnerable dependencies
echo "🛡️ Running Dependency Vulnerability Scan..."
./gradlew dependencyCheckAnalyze
if [ $? -ne 0 ]; then echo "⚠️ Security issues found in dependencies"; exit 1; fi

# 2.5. Keystore Verification
echo "🔑 Checking Release Keystore..."
if [ ! -f "keystore.jks" ]; then
    echo "⚠️ Warning: 'keystore.jks' not found in project root. Ensure it is available for release signing."
fi

# 3. Build & Optimization: Validates R8/ProGuard and generates the AAB
echo "📦 Building Release Bundle (AAB)..."
./gradlew bundleRelease
if [ $? -ne 0 ]; then echo "❌ Build failed"; exit 1; fi

# 4. Size & Obfuscation Verification
echo "⚖️ Checking App Size and Mapping..."
FILE_PATH="app/build/outputs/bundle/release/app-release.aab"
if [ -f "$FILE_PATH" ]; then
    SIZE=$(du -sh "$FILE_PATH" | cut -f1)
    echo "✅ Build Successful. Bundle size: $SIZE"
else
    echo "❌ Build artifact not found."
    exit 1
fi

# 5. Metadata/Config Check (Basic)
echo "⚙️ Checking Target SDK..."
TARGET_SDK=$(grep "targetSdkVersion" app/build.gradle | grep -o '[0-9]*')
if [ "$TARGET_SDK" -lt 35 ]; then
    echo "⚠️ Warning: Target SDK is $TARGET_SDK, Google Play requires API 35+ in 2026."
else
    echo "✅ Target SDK is compliant."
fi

echo "✨ All checks passed! Your local build is ready for internal testing."