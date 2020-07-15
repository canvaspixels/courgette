const path = require('path');

module.exports = async function clickElementInsideElement(locatorKey2, locatorKey) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElementInsideElement(locatorKey, locatorKey2);

  if (process.env.COURGETTE_DEBUG) {
    console.log('In file:', path.basename(__filename), el);
  }

  return el.click();
};
