module.exports = function checkCookieExists(cookieName, doesNotExist) {
  return browser.manage().getCookie(cookieName)
    .then((cookie) => (
      doesNotExist ?
        expect(cookie).to.equal(expectedValue) :
        expect(cookie).to.not.equal(expectedValue)
    ));
};