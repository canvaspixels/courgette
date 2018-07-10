module.exports = function checkUrlContainsString(expectedUrlPart) {
  const el = this.getCurrentPage().getElement(locatorKey);

  // todo check this one

  return expect(
    browser.wait(protractor.ExpectedConditions.urlContains(expectedUrlPart))
  );
};