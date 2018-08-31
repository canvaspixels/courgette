const path = require('path');

// eslint-disable-next-line
const { Before } = require(path.join(process.cwd(), 'node_modules/cucumber'));

Before(function deleteAllCookiesBeforeHook() {
  this.attach('Hook Step: deleteAllCookiesBeforeHook');
  this.deleteAllCookies = true;
  browser.manage().deleteAllCookies();
});
