module.exports = function setCookie(name, value) {
  // delete cookie first for Chrome
  const mgr = browser.manage();
  return mgr.deleteCookie(name).then(() =>
    browser.manage().addCookie({
      name,
      value,
      path: '/',
      expiry: new Date(Date.now() + (10 * 60 * 1000)),
      domain: 'localhost',
    }));
};
