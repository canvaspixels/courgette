module.exports = async function setElementInsideElement(locatorKey2, locatorKey, value) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElementInsideElement(locatorKey, locatorKey2);

  await el.setValue(value);
};
