module.exports = async function clickElementInsideElement(locatorKey2, locatorKey) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElementInsideElement(locatorKey, locatorKey2);

  return el.click();
};
