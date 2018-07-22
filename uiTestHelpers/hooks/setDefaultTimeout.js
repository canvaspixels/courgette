const path = require('path');

// eslint-disable-next-line
const { setDefaultTimeout, Before } = require(path.join(process.cwd(), 'node_modules/cucumber'));

const timeoutInSeconds = 15;
const timeoutInMS = timeoutInSeconds * 1000;
setDefaultTimeout(timeoutInMS);

Before(function setCucumberTimeout() {
  this.cucumberTimeout = timeoutInMS;
});
