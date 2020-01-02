module.exports = async function checkVisibility(locatorKey, visibleOrHidden) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  return el.waitForDisplayed(10000, visibleOrHidden === 'hidden');
};
