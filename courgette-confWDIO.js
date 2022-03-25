const path = require('path');
const CucumberFormatter = require('./cucumberFormatter')
// const PrettyFormatter = require('@cucumber/pretty-formatter').default

const specsPath = 'testsToValidateStepDefinitions';
const outputPath = 'uiTestResult';
const courgettePath = 'uiTestHelpers';

exports.pomConfig = {
  bindings: 'wdio',
  outputPath,
  timeoutInSeconds: process.env.COURGETTE_TIMEOUT || 20, // minimum 2 or you'll see strange behaviour with some steps
  pagesPath: path.resolve(specsPath, 'pages'),
  componentsPath: path.resolve(specsPath, 'components'),
  stepsPath: path.resolve(specsPath, 'stepDefinitions'),
  screenshotPath: outputPath, // not needed unless you need it to differ to the outputPath. Used for error screenshots
  screenshotStepPath: 'stepDefinitionScreenshots', // is appended to the screenshotPath or outputPath if one isn't set. Used for screenshots in the step definitions (e.g. When I take a screenshot)
  minifyPng: false, // defaults to '0.6-0.8', can be set to the quality string or true / false
  minifyStepPathOutput: 'uiTestResult/stepDefinitionScreenshots',
  removeOutputPathOnStart: true,
  baseUrl: 'http://localhost:3005', // <------------ SET THE URL TO YOUR PROJECT HERE
};

exports.cucumberHtmlReporterConfig = {};

const tagExpression = ['not @ignore', process.env.COURGETTE_TAGS].filter((tag) => !!tag).join(' and ');

if (process.env.COURGETTE_DEBUG) {
  console.log({ tagExpression });
}

const runHeadless = !(process.env.COURGETTE_HEADLESS === 'false' || process.env.DH);

exports.config = { // see https://webdriver.io/docs/configurationfile.html
  port: 4723,
  exclude: [],
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
      args: ['--window-size=1100,800', '--allow-insecure-localhost', '--no-sandbox']
        .concat(runHeadless ? ['--headless', '--disable-gpu'] : []),
    },
    // If outputDir is provided WebdriverIO can capture driver session logs
    // it is possible to configure which logTypes to include/exclude.
    // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
    // excludeDriverLogs: ['bugreport', 'server'],
  }],
  logLevel: 'warn', // Level of logging verbosity: trace | debug | info | warn | error | silent
  bail: 1, // (default is 0 - don't bail, run all tests).
  waitforTimeout: process.env.COURGETTE_TIMEOUT * 1000,
  connectionRetryCount: 1,
  services: ['chromedriver'],
  framework: 'cucumber',
  reporters: [
    CucumberFormatter,
    // 'spec',
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
      `${courgettePath}/hooksWDIO/loadSteps.js`,
      // `${specsPath}/helpers/globals.js`,
      `${courgettePath}/globals.js`,
      `${courgettePath}/hooksWDIO/pageObjectModelBefore.js`,
      `${courgettePath}/hooksWDIO/setDefaultTimeout.js`,
      `${courgettePath}/stepDefinitionsWDIO/commonGivenSteps.js`,
      `${courgettePath}/stepDefinitionsWDIO/commonWhenSteps.js`,
      `${courgettePath}/stepDefinitionsWDIO/commonThenSteps.js`,
      `${specsPath}/step-definitions/*.js`,
      // `${specsPath}/helpers/hooks.js`,
      `${courgettePath}/hooksWDIO/attachScenarioNameBefore.js`,
      `${courgettePath}/hooksWDIO/attachScreenshotAfter.js`,
    ],
    // 'format': [
    //   // CucumberFormatter,
    //   `json:./${outputPath}/report.json`,
    // ].concat(process.env.COURGETTE_SHOW_STEP_DEFINITION_USAGE ? 'node_modules/cucumber/lib/formatter/usage_formatter.js' : []),
    tagExpression,
    'source': true,
    'format-options': '{"colorsEnabled": true}',
    'colors': true,
    'timeout': (process.env.COURGETTE_TIMEOUT || 20) * 1000,
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
