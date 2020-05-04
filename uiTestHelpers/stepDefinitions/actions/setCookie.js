module.exports = function setCookie(name, value) {
  const addCookieFn = process.env.BINDINGS === 'WDIO' ? browser.setCookies : browser.manage().addCookie
  return addCookieFn({
    name,
    value,
    path: '/',
    expiry: new Date(Date.now() + (10 * 60 * 1000)),
  });
};
