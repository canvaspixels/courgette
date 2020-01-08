const path = require('path');

module.exports = async function appendInputFieldValue(value, locatorKey) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  if (process.env.DEBUG) {
    console.log('In file:', path.basename(__filename), el);
  }

  await el.addValue(value);
};
