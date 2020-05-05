module.exports = async function checkElementExistsNTimes(locatorKey, doesNotExist, numberOfTimes) {
  const pageObj = await this.getCurrentPage();

  if (process.env.BINDINGS === 'WDIO') {
    const elems = await pageObj.getElements(locatorKey);
    const actualCount = elems.length;

    return doesNotExist ?
      expect(actualCount).to.not.equal(+numberOfTimes) :
      expect(actualCount).to.equal(+numberOfTimes);
  }
  
  const els = pageObj.getElements(locatorKey);
  const actualCount = browser.wait(protractor.ExpectedConditions.presenceOf(els)).then(() => els.count());

  return doesNotExist ?
    expect(actualCount).to.not.eventually.equal(+numberOfTimes) :
    expect(actualCount).to.eventually.equal(+numberOfTimes);
};
