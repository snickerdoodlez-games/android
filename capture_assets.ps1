$ADB = "C:\Users\DD\AppData\Local\Android\Sdk\platform-tools\adb.exe"
$OUTPUT = "distribution\playstore\images"
$PACKAGE = "com.snickerdoodlez.wordpairing"

New-Item -ItemType Directory -Force -Path $OUTPUT | Out-Null

function CaptureShot($baseName) {
    $devFile = "/sdcard/$baseName.png"
    $localFile = "$OUTPUT\$baseName.png"
    Write-Host "[CAPTURE] $baseName..."
    & $ADB shell "screencap -p $devFile" 2>&1 | Out-Null
    Start-Sleep -Seconds 1
    & $ADB pull $devFile $localFile 2>&1 | Out-Null
    & $ADB shell "rm $devFile" 2>&1 | Out-Null
    if (Test-Path $localFile) {
        $size = (Get-Item $localFile).Length
        Write-Host "  -> Saved: $baseName.png ($size bytes)"
    } else {
        Write-Host "  -> FAILED"
    }
    Start-Sleep -Seconds 2
}

# ---- LAUNCH APP ----
Write-Host "[INFO] Force-stopping and launching app..."
& $ADB shell am force-stop $PACKAGE
Start-Sleep -Seconds 2
& $ADB shell am start -n $PACKAGE/.MainActivity
Start-Sleep -Seconds 8

# ---- 1: MAIN MENU ----
& $ADB shell input keyevent 4
Start-Sleep -Seconds 2
& $ADB shell input keyevent 4
Start-Sleep -Seconds 3
CaptureShot "01_main_menu"

# ---- 2: CLASSIC MODE ----
& $ADB shell input tap 540 960
Start-Sleep -Seconds 5
& $ADB shell input tap 540 1600
Start-Sleep -Seconds 4
& $ADB shell input tap 200 400
Start-Sleep -Seconds 1
& $ADB shell input tap 400 400
Start-Sleep -Seconds 1
CaptureShot "02_classic_mode"

# ---- Back to menu ----
& $ADB shell input keyevent 4
Start-Sleep -Seconds 3

# ---- 3-8: Manual nav screens ----
CaptureShot "03_emoji_mode"
CaptureShot "04_mind_match"
CaptureShot "05_expansion_mode"
CaptureShot "06_themed_mode"
CaptureShot "07_hidden_tiles"
CaptureShot "08_level_complete"

# ---- 9: SETTINGS ----
& $ADB shell input keyevent 4
Start-Sleep -Seconds 2
& $ADB shell input keyevent 4
Start-Sleep -Seconds 3
& $ADB shell input tap 80 80
Start-Sleep -Seconds 2
CaptureShot "09_settings"

# ---- 10: STATS ----
& $ADB shell input keyevent 4
Start-Sleep -Seconds 2
& $ADB shell input tap 1000 80
Start-Sleep -Seconds 2
CaptureShot "10_hall_of_fame"

Write-Host ""
Write-Host "============================================"
Write-Host "[DONE] Screenshots captured!"
Write-Host "============================================"
Get-ChildItem "$OUTPUT\*.png" | ForEach-Object { Write-Host "$($_.Name) - $($_.Length) bytes" }