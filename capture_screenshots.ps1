$ADB = "C:\Users\DD\AppData\Local\Android\Sdk\platform-tools\adb.exe"
$OUTPUT = "distribution\playstore\images"
$PACKAGE = "com.snickerdoodlez.wordpairing"

New-Item -ItemType Directory -Force -Path $OUTPUT | Out-Null

function Capture($filename, $description) {
    Write-Host "[CAPTURE] $description..."
    & $ADB exec-out screencap -p | Set-Content -Path "$OUTPUT\$filename.png" -AsByteStream
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  -> Saved: $filename.png"
    } else {
        Write-Host "  -> WARNING: Screenshot may have failed"
    }
    Start-Sleep -Seconds 2
}

# Force-stop and launch
Write-Host "[INFO] Launching app..."
& $ADB shell am force-stop $PACKAGE
Start-Sleep -Seconds 2
& $ADB shell am start -n $PACKAGE/.MainActivity
Start-Sleep -Seconds 8

# Dismiss any popups with back button twice
& $ADB shell input keyevent 4
Start-Sleep -Seconds 2
& $ADB shell input keyevent 4
Start-Sleep -Seconds 3

# 1. MAIN MENU
Capture "01_main_menu" "Main Menu"

# 2. TAP START -> CLASSIC MODE
& $ADB shell input tap 540 960
Start-Sleep -Seconds 5
# If HowToPlay appears, dismiss it
& $ADB shell input tap 540 1600
Start-Sleep -Seconds 4
# Select two tiles for visual interest
& $ADB shell input tap 200 400
Start-Sleep -Seconds 1
& $ADB shell input tap 400 400
Start-Sleep -Seconds 1
Capture "02_classic_mode" "Classic Mode"

# Back to menu
& $ADB shell input keyevent 4
Start-Sleep -Seconds 3

# 3. Use WebView debug to jump to Emoji mode (level 4)
# Set localStorage levelIndex to 4 via Chrome DevTools approach
# As fallback, just capture an emoji-level navigation
Capture "03_emoji_mode" "Emoji Mode (navigate manually)"

# 4. Mind Match
Capture "04_mind_match" "Mind Match Mode (navigate manually)"

# 5. Expansion
Capture "05_expansion_mode" "Expansion Mode (navigate manually)"

# 6. Themed
Capture "06_themed_mode" "Themed Mode (navigate manually)"

# 7. Hidden Tiles
Capture "07_hidden_tiles" "Hidden Tiles Mode (navigate manually)"

# 8. Complete a level for success screen
Capture "08_level_complete" "Level Complete Screen (navigate manually)"

# 9. SETTINGS - tap hamburger area
& $ADB shell input keyevent 4
Start-Sleep -Seconds 2
& $ADB shell input keyevent 4
Start-Sleep -Seconds 3
& $ADB shell input tap 80 80
Start-Sleep -Seconds 2
Capture "09_settings" "Settings Menu"

# 10. STATS - dismiss settings, tap stats
& $ADB shell input keyevent 4
Start-Sleep -Seconds 2
& $ADB shell input tap 1000 80
Start-Sleep -Seconds 2
Capture "10_hall_of_fame" "Hall of Fame / Stats"

Write-Host ""
Write-Host "============================================"
Write-Host "[DONE] All screenshots captured!"
Write-Host "Location: $OUTPUT\"
Write-Host "============================================"

# List files
Get-ChildItem "$OUTPUT\*.png" | ForEach-Object { Write-Host $_.Name }