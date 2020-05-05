module.exports = async function checkCookieContent(cookieName, isNot, expectedValue) {
  let cookieVal
  if (process.env.BINDINGS === 'WDIO') {
    const cookie = await browser.getCookies(cookieName)
    cookieVal = cookie[0].value
  } else {
    const cookie = await browser.manage().getCookie(cookieName)
    cookieVal = cookie.value
  }
  return isNot ?
    expect(cookieVal).to.not.equal(expectedValue) :
    expect(cookieVal).to.equal(expectedValue)
};
