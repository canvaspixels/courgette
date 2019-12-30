module.exports = async function checkInputValue(locatorKey, isNot, expectedVal) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  const value = await el.getAttribute('value');

  return isNot ?
    expect(value).to.not.equal(expectedVal) :
    expect(value).to.equal(expectedVal);
};
