module.exports = function checkCookieExists(cookieName, doesNotExist) {
  return browser.getCookies([cookieName])
    .then((cookie) => (
      doesNotExist ?
        expect(cookie[0]).to.equal(null) :
        expect(cookie[0]).to.not.equal(null)
    ));
};
