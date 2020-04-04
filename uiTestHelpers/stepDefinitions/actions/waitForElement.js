const EC = protractor.ExpectedConditions;

module.exports = function waitForElement(locatorKey, doesNotExist) {
  const currentPage = this.getCurrentPage();
  const el = currentPage.getElement(locatorKey);
  return doesNotExist ? browser.wait(EC.stalenessOf(el)) : browser.wait(EC.presenceOf(el));
};
