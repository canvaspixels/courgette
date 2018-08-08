const path = require('path');

// eslint-disable-next-line
const { Before } = require(path.join(process.cwd(), 'node_modules/cucumber'));

Before(function deleteAllCookies() {
  return browser.manage().deleteAllCookies();
});
