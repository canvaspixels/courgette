module.exports = function checkElementExistsNTimes(locatorKey, doesNotExist, numberOfTimes) {
  const els = this.getCurrentPage().getElements(locatorKey);
  const actualCount = browser.wait(protractor.ExpectedConditions.presenceOf(els)).then(() => els.count());

  return doesNotExist
    ? expect(actualCount).to.not.eventually.equal(+numberOfTimes)
    : expect(actualCount).to.eventually.equal(+numberOfTimes);
};
