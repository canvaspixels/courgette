module.exports = function setCookie(name, value) {
  // delete cookie first for Chrome
  return browser.deleteCookies([name]).then(() =>
    browser.setCookies([{
      name,
      value,
    }]));
};
