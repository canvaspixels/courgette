module.exports = async function checkCookieContains(cookieName, doesNotContain, expectedValue) {
  let cookieVal
  if (process.env.BINDINGS === 'WDIO') {
    const cookie = await browser.getCookies(cookieName)
    cookieVal = cookie[0].value
  } else {
    const cookie = await browser.manage().getCookie(cookieName)
    cookieVal = cookie.value
  }
  return doesNotContain ?
    expect(cookieVal).to.not.include(expectedValue) :
    expect(cookieVal).to.include(expectedValue)
};
