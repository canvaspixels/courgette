const path = require('path');

module.exports = async function checkInputValue(locatorKey, isNot, expectedVal) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  if (process.env.COURGETTE_DEBUG) {
    console.log('In file:', path.basename(__filename), el);
  }

  const value = await el.getAttribute('value');
console.log('value', value);
  return isNot ?
    expect(value).to.not.equal(expectedVal) :
    expect(value).to.equal(expectedVal);
};
