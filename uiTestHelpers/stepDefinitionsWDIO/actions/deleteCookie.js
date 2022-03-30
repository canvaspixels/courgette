module.exports = function deleteCookie(name) {
  // delete cookie first for Chrome
  return browser.deleteCookies([name]);
};
