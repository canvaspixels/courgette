module.exports = function setCookie(name, value) {
  return browser.manage().addCookie({
    name,
    value,
    path: '/',
    expiry: new Date(Date.now() + (10 * 60 * 1000)),
    domain: null,
  });
};
