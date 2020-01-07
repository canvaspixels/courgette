const path = require('path');

const specsPath = 'uiTests';
const outputPath = 'uiTestResult';
const courgettePath = 'node_modules/courgette/uiTestHelpers';

const platform = process.env.PLATFORM;

const ANDROID_APP_PATH = './android/app/build/outputs/apk/debug/app-debug.apk';
const IOS_APP_PATH = './ios/build/Products/Release-iphonesimulator/APPNAME.app';

const ANDROID_10 = {
  platformName: 'android',
  platformVersion: '10',
  deviceName: 'Android Emulator',
  app: path.resolve(ANDROID_APP_PATH),
};

const IOS_13_3 = {
  platformName: 'ios',
  platformVersion: '13.3',
  deviceName: 'iPhone 11',
  automationName: 'XCUITest',
  app: path.resolve(IOS_APP_PATH),
  showXcodeLog: false,
};

const ALL_CAPABILITIES = {
  android: [ANDROID_10],
  ios: [IOS_13_3],
};

const CAPABILITIES_TO_USE = [];

if (platform === 'android' || !platform) {
  CAPABILITIES_TO_USE.push(...ALL_CAPABILITIES.android);
}

if (platform === 'ios' || !platform) {
  CAPABILITIES_TO_USE.push(...ALL_CAPABILITIES.ios);
}

if (platform === 'ios-dev') {
  CAPABILITIES_TO_USE.push({
    ...IOS_13_3,
    app: './ios/build/APPNAME/Build/Products/Debug-iphonesimulator/FreeUp.app',
  });
}

exports.pomConfig = {
  platform: 'mobile',
  outputPath,
  timeoutInSeconds: process.env.courgetteTimeout || 20, // minimum 2 or you'll see strange behaviour with some steps
  pagesPath: path.resolve(specsPath, 'pages'),
  componentsPath: path.resolve(specsPath, 'components'),
  stepsPath: path.resolve(specsPath, 'stepDefinitions'),
  screenshotPath: outputPath, // not needed unless you need it to differ to the outputPath. Used for error screenshots
  screenshotStepPath: 'stepDefinitionScreenshots', // is appended to the screenshotPath or outputPath if one isn't set. Used for screenshots in the step definitions (e.g. When I take a screenshot)
  minifyPng: false, // defaults to '0.6-0.8', can be set to the quality string or true / false
  minifyStepPathOutput: 'uiTestResult/stepDefinitionScreenshots',
};

exports.cucumberHtmlReporterConfig = {};

const tagExpression = ['not @ignore', process.env.tags].filter((tag) => !!tag).join(' and ');

if (process.env.DEBUG) {
  console.log({ tagExpression });
}

exports.config = { // see https://webdriver.io/docs/configurationfile.html
  port: 4723,
  exclude: [],
  maxInstances: 1,
  capabilities: CAPABILITIES_TO_USE,
  logLevel: 'warn', // Level of logging verbosity: trace | debug | info | warn | error | silent
  bail: 0, // (default is 0 - don't bail, run all tests).
  waitforTimeout: 20000,
  connectionRetryCount: 3,
  services: ['appium'],
  appium: {}, // Appium Service config see details: https://webdriver.io/docs/appium-service.html
  framework: 'cucumber',
  reporters: [
    'spec',
    [
      'json',
      {
        outputDir: './uiTestResult',
        // outputFileFormat: function(opts) {
        //   return `results-${opts.cid}.${opts.capabilities}.json`;
        // },
      },
    ],
  ],
  specs: [`${specsPath}/features/**/*.feature`],
  cucumberOpts: {
    'require': [
      `${courgettePath}/hooks/loadStepsMobile.js`,
      // `${specsPath}/helpers/globals.js`,
      `${courgettePath}/globals.js`,
      `${courgettePath}/hooks/pageObjectModelMobileBefore.js`,
      `${courgettePath}/hooks/setDefaultTimeout.js`,
      `${courgettePath}/mobileStepDefinitions/commonGivenSteps.js`,
      `${courgettePath}/mobileStepDefinitions/commonWhenSteps.js`,
      `${courgettePath}/mobileStepDefinitions/commonThenSteps.js`,
      `${specsPath}/step-definitions/*.js`,
      // `${specsPath}/helpers/hooks.js`,
      `${courgettePath}/hooks/attachScenarioNameMobileBefore.js`,
      `${courgettePath}/hooks/attachMobileScreenshotAfter.js`,
      `${courgettePath}/hooks/reset-app-between-scenarios.js`,
    ],
    tagExpression,
    'source': true,
    'format-options': '{"colorsEnabled": true}',
    'colors': true,
    'timeout': (process.env.courgetteTimeout || 20) * 1000,
    'profile': [],
    // backtrace: false,   // <boolean> show full backtrace for errors
    // compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    // dryRun: false,      // <boolean> invoke formatters without executing steps
    'failFast': true, // <boolean> abort the run on first failure
    // snippets: true,     // <boolean> hide step definition snippets for pending steps
    // strict: false,      // <boolean> fail if there are any undefined or pending steps
    // ignoreUndefinedDefinitions: false
  },
  // onPrepare: () => { browser.ignoreSynchronization = true; },
};
