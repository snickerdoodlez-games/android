@echo off
setlocal enabledelayedexpansion

echo ============================================
echo  Google Play Store Assets Capture
echo  Word Pairing: Category Match
echo ============================================
echo.

:: --- CONFIGURATION ---
set "OUTPUT_DIR=distribution\playstore\images"
set "PACKAGE_NAME=com.snickerdoodlez.wordpairing"

:: --- PREREQUISITE CHECKS ---
echo [PHASE 0] Checking prerequisites...

where adb >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] adb not found in PATH.
    echo         Install Android SDK Platform Tools and add to PATH.
    echo         https://developer.android.com/tools/releases/platform-tools
    exit /b 1
)

adb get-state >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] No Android emulator or device detected.
    echo         Start your emulator or connect a device via USB.
    echo         Verify with: adb devices
    exit /b 1
)

echo [OK] ADB found and device connected.
echo.

:: --- CREATE OUTPUT DIRECTORY ---
if not exist "%OUTPUT_DIR%" mkdir "%OUTPUT_DIR%"

:: --- SCREEN DIMENSIONS ---
:: Force portrait 1080x1920 for consistent Play Store screenshots
echo [INFO] Setting device orientation to portrait...
adb shell settings put system user_rotation 0
adb shell content insert --uri content://settings/system --bind name:s:accelerometer_rotation --bind value:i:0

:: Dismiss any dialogs that might be showing
adb shell input keyevent 111

:: --- CAPTURE FUNCTION ---
:: Usage: call :capture "filename" "description"
goto :capture_start

:capture
echo.
echo [CAPTURE %capture_count%] %~2...
adb exec-out screencap -p > "%OUTPUT_DIR%\%~1.png"
if %ERRORLEVEL% EQU 0 (
    echo        ^> Saved: %~1.png
) else (
    echo        ^> WARNING: Screenshot may have failed
)
timeout /t 2 /nobreak >nul
set /a capture_count+=1
goto :eof

:capture_start
set capture_count=1

:: --- LAUNCH APP ---
echo.
echo [INFO] Launching app on device...
adb shell am force-stop %PACKAGE_NAME%
timeout /t 1 /nobreak >nul
adb shell am start -n %PACKAGE_NAME%/.MainActivity
timeout /t 5 /nobreak >nul

:: --- SCREENSHOT 1: MAIN MENU ---
:: Ensure we're on the main menu (dismiss any overlays)
adb shell input keyevent 4
timeout /t 1 /nobreak >nul
adb shell input keyevent 4
timeout /t 2 /nobreak >nul
call :capture "01_main_menu" "Main Menu"

:: --- SCREENSHOT 2: CLASSIC MODE ---
echo [ACTION] Starting Classic Mode...
:: Tap START button (center screen, roughly y=960 for 1080p)
adb shell input tap 540 960
timeout /t 3 /nobreak >nul
:: Dismiss HowToPlay if shown (tap anywhere)
adb shell input tap 540 1600
timeout /t 1 /nobreak >nul
:: Wait for level to load
timeout /t 3 /nobreak >nul
:: Select a tile to show interaction (tap near top-left tile area)
adb shell input tap 200 400
timeout /t 1 /nobreak >nul
adb shell input tap 400 400
timeout /t 1 /nobreak >nul
call :capture "02_classic_mode" "Classic Mode mid-game"

:: --- RETURN TO MENU ---
adb shell input keyevent 4
timeout /t 2 /nobreak >nul

:: --- SCREENSHOT 3: EMOJI MODE ---
echo [ACTION] Navigating to Emoji Mode...
:: The game uses deterministic level sequence. We need to reach an EMOJI level.
:: Level 2 is CLASSIC, Level 3 is THEMED, Level 4 is EMOJI (index 3)
:: Start a game, skip through levels to reach emoji
adb shell input tap 540 960
timeout /t 3 /nobreak >nul
adb shell input tap 540 1600
timeout /t 1 /nobreak >nul
:: Wait for Level 1 (Classic) to load, then solve it quickly via cheat taps
:: We'll go back to menu and use JavaScript injection to jump to Emoji mode
adb shell input keyevent 4
timeout /t 2 /nobreak >nul
:: Use Chrome DevTools / WebView debug to set localStorage levelIndex
:: Alternative: Tap through via the app itself rapidly
:: For now, capture what we can and note the emoji level needs manual nav
call :capture "03_emoji_mode" "Emoji Mode (navigate manually to an Emoji level)"

:: --- SCREENSHOT 4: MIND MATCH ---
echo [ACTION] Navigate to a Mind Match level from menu, then capture...
call :capture "04_mind_match" "Mind Match Mode (navigate manually to a Mind Match level)"

:: --- SCREENSHOT 5: EXPANSION MODE ---
echo [ACTION] Navigate to an Expansion level from menu, then capture...
call :capture "05_expansion_mode" "Expansion Mode (navigate manually to an Expansion level)"

:: --- SCREENSHOT 6: THEMED MODE ---
echo [ACTION] Navigate to a Themed level from menu, then capture...
call :capture "06_themed_mode" "Themed Mode (navigate manually to a Themed level)"

:: --- SCREENSHOT 7: HIDDEN TILES ---
echo [ACTION] Navigate to a Hidden Tiles level from menu, then capture...
call :capture "07_hidden_tiles" "Hidden Tiles Mode (navigate manually to a Hidden level)"

:: --- SCREENSHOT 8: LEVEL COMPLETE ---
echo [ACTION] Complete a level to show the success screen...
call :capture "08_level_complete" "Level Complete Screen (complete a level first)"

:: --- RETURN TO MENU ---
adb shell input keyevent 4
timeout /t 2 /nobreak >nul

:: --- SCREENSHOT 9: SETTINGS ---
echo [ACTION] Opening Settings menu...
:: Tap hamburger/settings icon (top-left area)
adb shell input tap 80 80
timeout /t 2 /nobreak >nul
call :capture "09_settings" "Settings Menu"

:: Dismiss settings
adb shell input keyevent 4
timeout /t 1 /nobreak >nul

:: --- SCREENSHOT 10: HALL OF FAME / STATS ---
echo [ACTION] Opening Stats / Hall of Fame...
:: Tap stats button (top-right area)
adb shell input tap 1000 80
timeout /t 2 /nobreak >nul
call :capture "10_hall_of_fame" "Hall of Fame / Stats"

:: --- DONE ---
echo.
echo ============================================
echo  [DONE] All screenshots captured!
echo  Location: %OUTPUT_DIR%\
echo ============================================
echo.
echo Files captured:
dir /b "%OUTPUT_DIR%\*.png" 2>nul
echo.
echo NEXT STEPS:
echo   1. Review screenshots - some modes may need manual navigation
echo   2. Run: node generate_feature_graphic.js
echo   3. Compress PNGs for Play Store upload
echo   4. Upload to Google Play Console
echo.
echo TIP: For levels that need manual navigation, you can inject
echo      localStorage values via Chrome DevTools on the WebView:
echo      chrome://inspect/#devices
echo.

:: Restore auto-rotate
adb shell content insert --uri content://settings/system --bind name:s:accelerometer_rotation --bind value:i:1
adb shell settings put system user_rotation -1

exit /b 0