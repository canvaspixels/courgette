module.exports = function checkCookieContent(cookieName, isNot, expectedValue) {
  return browser.manage().getCookie(cookieName)
    .then((cookie) => (
      isNot ?
        expect(cookie.value).to.not.equal(expectedValue) :
        expect(cookie.value).to.equal(expectedValue)
    ));
};