module.exports = function setCookie(name, value) {
  // delete cookie first for Chrome
  return browser.deleteCookies([name]).then(() =>
    browser.setCookies([{
      name,
      value,
      path: '/',
      expiry: new Date(Date.now() + (10 * 60 * 1000)),
      domain: 'localhost',
    }]));
};
