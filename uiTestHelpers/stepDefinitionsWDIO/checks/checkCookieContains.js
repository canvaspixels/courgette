module.exports = function checkCookieContains(cookieName, doesNotContain, expectedValue) {
  return browser.getCookies([cookieName])
    .then((cookie) => (
      doesNotContain ?
        expect(cookie[0].value).to.not.include(expectedValue) :
        expect(cookie[0].value).to.include(expectedValue)
    ));
};
