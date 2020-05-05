const path = require('path');

const specsPath = 'testsToValidateStepDefinitions';
const outputPath = 'uiTestResult';
const courgettePath = 'uiTestHelpers';

process.env.BINDINGS = 'WDIO'

const disableHeadless = process.env.disableHeadless === 'true' || process.env.DH === 'true';

const capabilities = {
  chrome: {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--window-size=1100,800']
        .concat(disableHeadless ? [] : ['--headless', '--disable-gpu']),
    },
  },
  firefox: {
    'browserName': 'firefox',
    'moz:firefoxOptions': {
      args: [].concat(disableHeadless ? [] : ['-headless']),
      prefs: {
        'general.useragent.override': 'Automated tests',
      },
    },
  },
};

const browserCapability = capabilities[process.env.browser || 'chrome'];

exports.pomConfig = {
  baseUrl: 'http://localhost:3005',
  outputPath,
  timeoutInSeconds: process.env.courgetteTimeout || 20, // minimum 2 or you'll see strange behaviour with some steps
  pagesPath: path.resolve(specsPath, 'pages'),
  componentsPath: path.resolve(specsPath, 'components'),
  stepsPath: path.resolve(specsPath, 'stepDefinitions'),
  screenshotPath: outputPath, // not needed unless you need it to differ to the outputPath. Used for error screenshots
  screenshotStepPath: 'stepDefinitionScreenshots', // is appended to the screenshotPath or outputPath if one isn't set. Used for screenshots in the step definitions (e.g. When I take a screenshot)
  minifyPng: false, // defaults to '0.6-0.8', can be set to the quality string or true / false
  minifyStepPathOutput: 'uiTestResult/stepDefinitionScreenshots',
  removeOutputPathOnStart: true,
};

exports.cucumberHtmlReporterConfig = {};

const tagExpression = ['not @ignore', process.env.tags].filter((tag) => !!tag).join(' and ');

if (process.env.DEBUG) {
  console.log({ tagExpression });
}

exports.config = { // see https://webdriver.io/docs/configurationfile.html
  runner: 'local',
  // path: '/',
  exclude: [],
  maxInstances: 1,
  capabilities: [browserCapability],
  logLevel: 'warn', // Level of logging verbosity: trace | debug | info | warn | error | silent
  bail: 1, // (default is 0 - don't bail, run all tests).
  waitforTimeout: 20000,
  connectionRetryCount: 1,
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
  services: ['chromedriver'],
  specs: [`${specsPath}/features/**/*.feature`],
  cucumberOpts: {
    'require': [
      `${courgettePath}/hooks/loadSteps.js`,
      // // `${specsPath}/helpers/globals.js`,
      `${courgettePath}/globals.js`,
      `${courgettePath}/hooks/pageObjectModelBefore.js`,
      `${courgettePath}/hooks/deleteAllCookies.js`,
      `${courgettePath}/hooks/addMethodsBefore.js`,
      `${courgettePath}/hooks/setDefaultTimeout.js`,
      `${courgettePath}/stepDefinitions/commonGivenSteps.js`,
      `${courgettePath}/stepDefinitions/commonWhenSteps.js`,
      `${courgettePath}/stepDefinitions/commonThenSteps.js`,
      `${specsPath}/stepDefinitions/*.js`,
      // // `${specsPath}/helpers/hooks.js`,
      `${courgettePath}/hooks/attachScenarioNameMobileBefore.js`,
      // `${courgettePath}/hooks/attachScreenshotWDIOAfter.js`,
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
