module.exports = function checkCookieContains(cookieName, doesNotContain, expectedValue) {
  return browser.manage().getCookie(cookieName)
    .then((cookie) => (
      doesNotContain
        ? expect(cookie.value).to.not.include(expectedValue)
        : expect(cookie.value).to.include(expectedValue)
    ));
};
