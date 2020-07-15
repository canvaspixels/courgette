const path = require('path');

module.exports = async function checkVisibility(locatorKey, visibleOrHidden) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  if (process.env.COURGETTE_DEBUG) {
    console.log('In file:', path.basename(__filename), el);
  }

  return el.waitForDisplayed(10000, visibleOrHidden === 'hidden');
};
