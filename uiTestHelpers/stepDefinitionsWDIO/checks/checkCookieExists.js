module.exports = function checkCookieExists(cookieName, doesNotExist) {
  return browser.getCookies([cookieName])
    .then((cookie) => {
        if (process.env.COURGETTE_DEBUG) {
          console.log('cookie[0]', cookie[0]);
        }
        doesNotExist ?
          expect(cookie[0]).to.equal(undefined) :
          expect(cookie[0]).to.not.equal(undefined)
      }
    );
};
