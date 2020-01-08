const path = require('path');

module.exports = async function setInputFieldValue(locatorKey, value) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  if (process.env.DEBUG) {
    console.log('In file:', path.basename(__filename), el);
  }

  await el.setValue(value);
};
