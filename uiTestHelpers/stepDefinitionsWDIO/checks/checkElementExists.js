const path = require('path');

module.exports = async function checkElementExists(locatorKey, doesNotExist) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  if (process.env.COURGETTE_DEBUG) {
    console.log('In file:', path.basename(__filename), el);
  }

  await el.waitForExist(10000, !!doesNotExist);
};
