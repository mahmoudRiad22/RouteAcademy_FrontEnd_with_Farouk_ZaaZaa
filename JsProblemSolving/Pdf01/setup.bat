@echo off
echo Setting up testing environment...
echo.

REM Check if the script is running as administrator
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo This script must be run as an administrator.
    echo Right-click on Command Prompt and select "Run as administrator".
    pause
    exit /b
)

REM Change to the directory where the script is located
cd /d %~dp0

REM Install dependencies
echo Installing dependencies...
npm install --save-dev jest jest-environment-jsdom cypress
if %errorLevel% neq 0 (
    echo Failed to install dependencies. Please check your npm configuration and internet connection.
    pause
    exit /b
)

REM Create directories
echo Creating directories...
mkdir tests 2>nul
mkdir cypress 2>nul
mkdir cypress\e2e 2>nul
if %errorLevel% neq 0 (
    echo Failed to create directories. Please check your permissions.
    pause
    exit /b
)

REM Add test scripts
echo Adding test scripts...
npm pkg set scripts.test:jest="jest"
if %errorLevel% neq 0 (
    echo Failed to add test:jest script.
    pause
    exit /b
)
npm pkg set scripts.test:cypress="cypress run"
if %errorLevel% neq 0 (
    echo Failed to add test:cypress script.
    pause
    exit /b
)
npm pkg set scripts.test:cypress:open="cypress open"
if %errorLevel% neq 0 (
    echo Failed to add test:cypress:open script.
    pause
    exit /b
)

echo.
echo Setup complete! Use:
echo - npm run test:jest
echo - npm run test:cypress:open
echo.
pause