@echo off
setlocal

REM ---------------------------------------------------------------
REM PACMACK promo video compressor
REM This script compresses your large video and makes a thumbnail.
REM
REM HOW TO USE:
REM   1. Double-click this file.
REM   2. When asked, paste the FULL path to your video file and press Enter.
REM      (e.g. C:\Users\you\Videos\promo-original.mp4)
REM   3. Wait. It will produce two files in client\public\videos\ :
REM        promo.mp4         - the compressed video
REM        promo-poster.jpg  - the thumbnail
REM ---------------------------------------------------------------

set FFMPEG="C:\Users\creat\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0.2-full_build\bin\ffmpeg.exe"

echo.
echo ==============================================
echo   PACMACK Promo Video Compressor
echo ==============================================
echo.

set /p INPUT="Paste the full path to your video file and press Enter: "

REM Strip any surrounding quotes
set INPUT=%INPUT:"=%

if not exist "%INPUT%" (
    echo.
    echo ERROR: File not found at "%INPUT%"
    echo Please check the path and try again.
    echo.
    pause
    exit /b 1
)

REM Make sure the destination folder exists
if not exist "%~dp0client\public\videos" mkdir "%~dp0client\public\videos"

echo.
echo Compressing video... this may take a few minutes.
%FFMPEG% -i "%INPUT%" -vf "scale=-2:1080" -c:v libx264 -preset slow -crf 23 -c:a aac -b:a 128k -movflags +faststart -pix_fmt yuv420p "%~dp0client\public\videos\promo.mp4"

echo.
echo Creating thumbnail...
%FFMPEG% -i "%~dp0client\public\videos\promo.mp4" -ss 00:00:02 -frames:v 1 -q:v 2 "%~dp0client\public\videos\promo-poster.jpg"

echo.
echo Done! Your files are here:
echo   client\public\videos\promo.mp4
echo   client\public\videos\promo-poster.jpg
echo.
pause
