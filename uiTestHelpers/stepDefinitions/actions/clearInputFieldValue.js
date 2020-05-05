const path = require('path');

module.exports = async function clearInputFieldValue(locatorKey) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  if (process.env.DEBUG) {
    console.log('In file:', path.basename(__filename), el);
  }

  if (process.env.BINDINGS === 'WDIO') {
    return el.clearValue()
  }
  return el.clear();
};

