const path = require('path');

module.exports = async function appendInputFieldValue(value, locatorKey) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElementWhenInDOM(locatorKey);

  if (process.env.DEBUG) {
    console.log('In file:', path.basename(__filename), el);
  }
  if (process.env.BINDINGS === 'WDIO') {
    await el.addValue(value);
  } else {
    await el.sendKeys(value);
  }
};
