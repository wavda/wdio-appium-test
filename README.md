# Tools
Appium, WebdriverIO, Mocha, JavaScript, Allure

# Pre-requisites
1. Node.js and NPM
2. Java +8
3. Android SDK +16 (Android Emulator and Command line tools)
4. Android Studio

# Test Setup and Execution Steps
1. Start "Android Studio" and start your virtual device from "Virtual Device Manager" page
2. Add your virtual device's capabilities within the WebdriverIO config in `wdio.conf.js` file
3. Open terminal and install dependencies by running command `npm install`
4. Run test using command `npm test`
5. Generate the HTML test report using `npm run report`
6. An HTML test report will be generated and opened using Allure

# How to get bundleId for iOS apps
1. Get list devices using command `xcrun xctrace list devices`
2. Get list installed apps using command `xcrun simctl listapps {{udid}}`

# Initial setup of this project
1. `npm init -y` on project path
2. `npm install @wdio/cli appium allure-commandline --save-dev`
3. `npm install -g appium`
4. `npx wdio config -y` and select appium driver
5. Setup capabilities on `wdio.conf.js`
6. Setup Device Emulator on Android Studio
7. Install and run `appium-doctor`

# Getting Element Locators
1. After setting up device in Android Studio, install and open Appium Inspector
2. Set remote path as `/wd/hub`
3. Start appium server with `appium` command
4. Set Desired Capabilities e.g.
For Android:
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
For iOS:
```
capabilities: [{
    'appium:platformName': 'iOS',
    'appium:automationName': 'XCUITest',
    'appium:platformVersion': '16.4',
    'appium:deviceName': 'iPhone 14 Pro Simulator',
    'appium:udid':'072599DA-1969-45AB-AB8D-A1871ABA2B8D',
    'appium:bundleId': 'com.saucelabs.SwagLabsMobileApp',
    'appium:noReset': true
}],
```
5. Start Session on Appium Inspector
6. Element locators should be displayed on the side panel once you start interacting with the mobile app on Android Emulator

# Test Execution
1. Start Android Studio
2. `npm install`
3. `npm test`
4. `npm run report`