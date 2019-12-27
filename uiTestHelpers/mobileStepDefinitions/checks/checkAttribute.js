module.exports = async function checkAttribute(locatorKey, expectedAttribute, expectedValue) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);
  const attrVal = await el.getAttribute(expectedAttribute);
  
  return expect(attrVal).to.equal(expectedValue);
};
