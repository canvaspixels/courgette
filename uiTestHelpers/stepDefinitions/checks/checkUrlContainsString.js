module.exports = function checkUrlContainsString(expectedUrlPart) {
  return expect(browser.wait(protractor.ExpectedConditions.urlContains(expectedUrlPart)));
};