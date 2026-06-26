@echo off
setlocal enabledelayedexpansion

echo ============================================
echo   Google Play Store Assets Capture
echo   Word Pairing: Category Match
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
echo ----------------------------------------------------
echo [STEP %capture_count%] Prepare screen for: %~2
echo ----------------------------------------------------
echo Setup the emulator/device to display this state now.
set /p "READY=>>> Press [ENTER] when ready to capture..."

echo Capturing...
adb exec-out screencap -p > "%OUTPUT_DIR%\%~1.png"
if %ERRORLEVEL% EQU 0 (
    echo    ^> Saved: %~1.png
) else (
    echo    ^> WARNING: Screenshot may have failed
)
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
timeout /t 3 /nobreak >nul

:: --- SCREENSHOT 1: MAIN MENU ---
call :capture "01_main_menu" "Main Menu"

:: --- SCREENSHOT 2: CLASSIC MODE ---
echo [ACTION] Automating entry to Classic Mode...
:: Tap START button (center screen, roughly y=960 for 1080p)
adb shell input tap 540 960
timeout /t 2 /nobreak >nul
:: Dismiss HowToPlay if shown (tap anywhere)
adb shell input tap 540 1600
timeout /t 1 /nobreak >nul
:: Select a tile to show interaction (tap near top-left tile area)
adb shell input tap 200 400
timeout /t 1 /nobreak >nul
call :capture "02_classic_mode" "Classic Mode mid-game"

:: --- SCREENSHOT 3: EMOJI MODE ---
call :capture "03_emoji_mode" "Emoji Mode level grid"

:: --- SCREENSHOT 4: MIND MATCH ---
call :capture "04_mind_match" "Mind Match Mode level grid"

:: --- SCREENSHOT 5: EXPANSION MODE ---
call :capture "05_expansion_mode" "Expansion Mode (Dynamic grid sizing)"

:: --- SCREENSHOT 6: THEMED MODE ---
call :capture "06_themed_mode" "Themed Mode level grid"

:: --- SCREENSHOT 7: HIDDEN TILES ---
call :capture "07_hidden_tiles" "Hidden Tiles Mode level grid"

:: --- SCREENSHOT 8: LEVEL COMPLETE ---
call :capture "08_level_complete" "Level Complete success overlay/screen"

:: --- SCREENSHOT 9: SETTINGS ---
call :capture "09_settings" "Settings Menu / Dialog overlay"

:: --- SCREENSHOT 10: HALL OF FAME / STATS ---
call :capture "10_hall_of_fame" "Hall of Fame / User Stats panel"

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
echo   1. Review screenshots in distribution\playstore\images
echo   2. Run assets configuration pipeline
echo.

:: Restore auto-rotate
adb shell content insert --uri content://settings/system --bind name:s:accelerometer_rotation --bind value:i:1
adb shell settings put system user_rotation -1

exit /b 0