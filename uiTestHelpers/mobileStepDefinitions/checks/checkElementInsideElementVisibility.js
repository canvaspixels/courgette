module.exports = async function checkElementInsideElementVisibility(locatorKey2, locatorKey, visibleOrHidden) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElementInsideElement(locatorKey, locatorKey2);

  return el.waitForDisplayed(10000, visibleOrHidden === 'hidden');
};
