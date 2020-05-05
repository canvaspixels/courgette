module.exports = async function checkPageContainsText(text) {
  const xpath = `//*[contains(text(),"${text}")]`;

  if (process.env.BINDINGS === 'WDIO') {
    const elem = await $(xpath);

    return expect(elem.isDisplayed()).to.eventually.equal(true);
  }

  const el = element(by.xpath(xpath));
  return browser.wait(protractor.ExpectedConditions.visibilityOf(el));
};
