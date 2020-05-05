module.exports = function setCookie(name, value) {
  if (process.env.BINDINGS === 'WDIO') {
    return browser.setCookies({
      name,
      value,
      path: '/',
      expiry: new Date(Date.now() + (10 * 60 * 1000)).getTime(),
    });
  }
  
  return browser.manage().addCookie({
    name,
    value,
    path: '/',
    expiry: new Date(Date.now() + (10 * 60 * 1000)),
  });
};
