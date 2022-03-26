const path = require('path');

module.exports = async function checkInputValue(locatorKey, isNot, expectedVal) {
  const pageObj = await this.getCurrentPage();

  if (process.env.COURGETTE_DEBUG) {
    console.log('In file:', path.basename(__filename), el);
  }

  const value = await pageObj.getElement(locatorKey).getAttribute('value');

  return isNot ?
    expect(value).to.not.equal(expectedVal) :
    expect(value).to.equal(expectedVal);
};
