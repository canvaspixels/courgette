module.exports = async function checkCookieExists(cookieName, doesNotExist) {
  if (process.env.BINDINGS === 'WDIO') {
    const wdioCookie = await browser.getCookies(cookieName)
    
    return doesNotExist ?
      expect(wdioCookie.length).to.equal(0) :
      expect(wdioCookie.length).to.not.equal(0)
  }
  const cookie = await browser.manage().getCookie(cookieName)
  return doesNotExist ?
    expect(cookie).to.equal(null) :
    expect(cookie).to.not.equal(null)
};
