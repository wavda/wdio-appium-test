# Tools
Appium, WebdriverIO, Mocha, JavaScript, Allure

# Pre-requisites
1. Node.js and NPM
2. Java +8
3. Android SDK +16 (Android Emulator and Command line tools)

# Test Execution
1. Start Android Studio
2. `npm install`
3. `npm test`
4. `npm run report`

# Initial setup of this project
1. `npm init -y` on project path
2. `npm install @wdio/cli appium allure-commandline --save-dev`
3. `npm install -g appium`
4. `npx wdio config -y` and select appium driver
5. Setup capabilities on `wdio.conf.js`
6. Setup Device Emulator on Android Studio
7. Install and run `appium-doctor`

# Getting Element Locators
1. After setting up device in Android Studio, install Appium Inspector
2. Set remote path as `/wd/hub`
3. Start appium server with `appium` command
4. Set Desired Capabilities e.g.
```
{
  "platformName": "Android",
  "appium:platformVersion": "13.0",
  "appium:deviceName": "Pixel_3a",
  "appium:automationName": "UIAutomator2",
  "appium:autoGrantPermissions": true,
  "appium:udid": "emulator-5554",
  "appium:app": "C:\\demo\\wdio-appium-test\\apk\\NativeDemoApp.apk",
  "appium:appPackage": "com.wdiodemoapp",
  "appium:appActivity": "com.wdiodemoapp.MainActivity"
}
```
5. Start Session on Appium Inspector
