module.exports = function checkCookieExists(cookieName, doesNotExist) {
  return browser.manage().getCookie(cookieName)
    .then((cookie) => (
      doesNotExist ?
        expect(cookie).to.equal(null) :
        expect(cookie).to.not.equal(null)
    ));
};