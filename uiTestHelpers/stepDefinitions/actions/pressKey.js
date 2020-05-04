module.exports = function pressKey(key) {
  if (process.env.BINDINGS === 'WDIO') {
    return browser.keys(key.split('|'))
  }
  return browser.actions().sendKeys(protractor.Key[key]).perform();
};
