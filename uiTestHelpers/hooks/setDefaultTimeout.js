const path = require('path');
const { argv } = require('yargs');

// eslint-disable-next-line
const { setDefaultTimeout, Before } = require(path.join(process.cwd(), 'node_modules/cucumber'));
// eslint-disable-next-line
const { pomConfig } = require(path.join(process.cwd(), argv.confFile || process.env.confFile || 'conf.js'));

const timeoutInSeconds = pomConfig.timeoutInSeconds || 8;
const timeoutInMS = timeoutInSeconds * 1000;
setDefaultTimeout(timeoutInMS);

Before(function setCucumberTimeoutBeforeHook() {
  this.attach('Hook Step: setCucumberTimeoutBeforeHook');
  this.cucumberTimeout = timeoutInMS;
});
