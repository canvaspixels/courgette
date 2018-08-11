// eslint-disable-next-line
require('babel-register');

// This config file is used to validate the pre-defined
// reusable generic step definitions in this repo

const specsPath = 'testsToValidateStepDefinitions';
const specsPathAbs = `${process.cwd()}/${specsPath}`;
const outputPath = 'uiTestResult';
const cukeTractorPath = 'uiTestHelpers';

exports.pomConfig = {
  outputPath,
  timeoutInSeconds: 3,
  pagesPath: `${specsPathAbs}/pages`,
  componentsPath: `${specsPathAbs}/pages/components`,
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
    // change acceptInsecureCerts to true if you are testing on https and using self-signed certs
    acceptInsecureCerts: false,
    shardTestFiles: !process.env.cukeTags && !process.env.debug,
    maxInstances: 4,
    browserName: 'chrome',
    chromeOptions: {
      args: ['--window-size=1100,800']
        .concat(process.env.disableHeadless ? [] : ['--headless', '--disable-gpu']),
    },
  },
  cucumberOpts: {
    require: [
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
    tags: ['~ignore'].concat(process.env.cukeTags || []),
    format: [
      'cucumberFormatter.js',
      `json:./${outputPath}/report.json`,
    ],
    profile: false,
    'no-source': true,
  },
  onPrepare: () => { browser.ignoreSynchronization = true; },
};

exports.config = protractorConfig;
