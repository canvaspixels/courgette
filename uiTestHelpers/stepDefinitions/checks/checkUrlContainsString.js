module.exports = function checkUrlContainsString(expectedUrlPart) {
  return browser.wait(protractor.ExpectedConditions.urlContains(expectedUrlPart));
};
