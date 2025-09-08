
@echo off
echo Setting up testing environment...
echo.

REM Install dependencies
npm install --save-dev jest jest-environment-jsdom cypress

REM Create directories
mkdir tests 2>nul
mkdir cypress 2>nul
mkdir cypress\e2e 2>nul

REM Add test scripts
npm pkg set scripts.test:jest="jest"
npm pkg set scripts.test:cypress="cypress run"
npm pkg set scripts.test:cypress:open="cypress open"

echo.
echo Setup complete! Use:
echo - npm run test:jest
echo - npm run test:cypress:open
echo.
pause