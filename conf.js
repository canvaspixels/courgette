const path = require('path');
require('babel-core/register');

// This config file is used to validate the pre-defined
// reusable generic step definitions in this repo

const specsPath = 'testsToValidateStepDefinitions';
const outputPath = 'uiTestResult';
const cukeTractorPath = 'uiTestHelpers';

exports.pomConfig = {
  outputPath,
  timeoutInSeconds: 3,
  pagesPath: path.resolve(specsPath, 'pages'),
  componentsPath: path.resolve(specsPath, 'components'),
  baseUrl: 'http://localhost:3000',
};

exports.cucumberHtmlReporterConfig = {};

const protractorConfig = {
  directConnect: true,
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    `${specsPath}/features/**/*.feature`,
  ],
  capabilities: {
    // acceptInsecureCerts: true, // uncomment to ignore SSL warnings
    // change acceptInsecureCerts to true if you are testing on https and using self-signed certs
    'shardTestFiles': !process.env.cukeTags && !process.env.linearise && !process.env.showStepDefinitionUsage,
    'maxInstances': 4,
    // browserName: 'chrome',
    // chromeOptions: {
    //   args: ['--window-size=1100,800']
    //     .concat(process.env.disableHeadless ? [] : ['--headless', '--disable-gpu']),
    // },
    'browserName': 'firefox',
    'moz:firefoxOptions': {
      args: [].concat(process.env.disableHeadless ? [] : ['-headless']),
      prefs: {
        'general.useragent.override': 'Automated tests',
      },
    },
  },
  cucumberOpts: {
    'require': [
      // `${specsPath}/helpers/globals.js`,
      `${cukeTractorPath}/globals.js`,
      `${cukeTractorPath}/hooks/attachScenarioNameBefore.js`,
      `${cukeTractorPath}/hooks/attachScreenshotAfter.js`,
      `${cukeTractorPath}/hooks/deleteAllCookies.js`,
      `${cukeTractorPath}/hooks/pageObjectModelBefore.js`,
      `${cukeTractorPath}/hooks/addMethodsBefore.js`,
      `${cukeTractorPath}/hooks/setDefaultTimeout.js`,
      `${cukeTractorPath}/stepDefinitions/*.js`,
      `${specsPath}/stepDefinitions/*.js`,
      // `${specsPath}/helpers/hooks.js`,
    ],
    'tags': ['~ignore'].concat(process.env.cukeTags || []),
    'format': [
      'cucumberFormatter.js',
      `json:./${outputPath}/report.json`,
    ].concat(process.env.showStepDefinitionUsage ? 'node_modules/cucumber/lib/formatter/usage_formatter.js' : []),
    'profile': false,
    'no-source': true,
  },
  onPrepare: () => { browser.ignoreSynchronization = true; },
};

exports.config = protractorConfig;
