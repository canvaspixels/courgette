
module.exports = function waitForElement(locatorKey, doesNotExist) {
  const currentPage = this.getCurrentPage();
  const el = currentPage.getElement(locatorKey);

  if (process.env.BINDINGS === 'WDIO') {
    return el.waitForExist({ timeout: pomConfig.timeoutInSeconds * 1000, reverse: doesNotExist })
  }

  const EC = protractor.ExpectedConditions;
  return doesNotExist ? browser.wait(EC.stalenessOf(el)) : browser.wait(EC.presenceOf(el));
};
