module.exports = function checkCookieContent(cookieName, isNot, expectedValue) {
  return browser.getCookies([cookieName])
    .then((cookie) => (
      isNot ?
        expect(cookie[0].value).to.not.equal(expectedValue) :
        expect(cookie[0].value).to.equal(expectedValue)
    ));
};
