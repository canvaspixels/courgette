const path = require('path');

module.exports = async function checkElementInsideElementVisibility(locatorKey2, locatorKey, visibleOrHidden) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElementInsideElement(locatorKey, locatorKey2);

  if (process.env.DEBUG) {
    console.log('In file:', path.basename(__filename), el);
  }

  return el.waitForDisplayed(10000, visibleOrHidden === 'hidden');
};
