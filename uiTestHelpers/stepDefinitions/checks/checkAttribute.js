const path = require('path');

module.exports = async function checkAttribute(locatorKey, expectedAttribute, expectedValue) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElementWhenInDOM(locatorKey);

  if (process.env.DEBUG) {
    console.log('In file:', path.basename(__filename), el);
  }

  const attrVal = await el.getAttribute(expectedAttribute);

  return expect(attrVal).to.equal(expectedValue);
};
