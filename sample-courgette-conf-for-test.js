const path = require('path');

require('babel-core/register');

const specsPath = 'uiTests';
const outputPath = 'uiTestResult';
const courgettePath = 'uiTestHelpers';

// This config file is used to test the samples from within this repo

exports.pomConfig = {
  outputPath,
  timeoutInSeconds: process.env.courgetteTimeout || 10,
  pagesPath: path.resolve(specsPath, 'pages'),
  componentsPath: path.resolve(specsPath, 'components'),
  stepsPath: path.resolve(specsPath, 'stepDefinitions'),
  baseUrl: 'https://www.google.com',
  minifyPng: false,
};

exports.cucumberHtmlReporterConfig = {};

const disableHeadless = process.env.disableHeadless === 'true';

const capabilities = {
  chrome: {
    browserName: 'chrome',
    chromeOptions: {
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

const browserCapability = capabilities[process.env.browser || 'firefox'];

const tags = process.env.tags ? process.env.tags.replace(',', ' or ') : '';

const protractorConfig = {
  directConnect: true,
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    `${specsPath}/features/**/*.feature`,
  ],
  capabilities: {
    // change acceptInsecureCerts to true if you are testing on https and using self-signed certs
    'shardTestFiles': !tags && !process.env.linearise && !process.env.showStepDefinitionUsage,
    'maxInstances': 4,
    ...browserCapability,
  },
  cucumberOpts: {
    'require': [
      // `${specsPath}/helpers/globals.js`,
      `${courgettePath}/globals.js`,
      `${courgettePath}/hooks/attachScenarioNameBefore.js`,
      `${courgettePath}/hooks/attachScreenshotAfter.js`,
      `${courgettePath}/hooks/deleteAllCookies.js`,
      `${courgettePath}/hooks/pageObjectModelBefore.js`,
      `${courgettePath}/hooks/addMethodsBefore.js`,
      `${courgettePath}/hooks/setDefaultTimeout.js`,
      `${courgettePath}/stepDefinitions/*.js`,
      `${specsPath}/stepDefinitions/*.js`,
      // `${specsPath}/helpers/hooks.js`,
      `${courgettePath}/hooks/loadSteps.js`, // keep this at the end
    ],
    'tags': ['~@ignore'].concat(tags || []),
    'format': [
      'cucumberFormatter.js',
      `json:./${outputPath}/report.json`,
    ].concat(process.env.showStepDefinitionUsage ? 'node_modules/cucumber/lib/formatter/usage_formatter.js' : []),
    'format-options': '{"colorsEnabled": true}',
    'profile': false,
    'no-source': true,
  },
  onPrepare: () => { browser.ignoreSynchronization = true; },
};

exports.config = protractorConfig;
