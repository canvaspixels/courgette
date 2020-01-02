module.exports = async function checkElementInsideElementInputValue(locatorKey2, locatorKey, isNot, expectedVal) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElementInsideElement(locatorKey, locatorKey2);

  const value = await el.getAttribute('value');

  return isNot ?
    expect(value).to.not.equal(expectedVal) :
    expect(value).to.equal(expectedVal);
};
