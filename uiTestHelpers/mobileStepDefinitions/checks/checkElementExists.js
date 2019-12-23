module.exports = async function checkElementExists(locatorKey, doesNotExist) {
  const pageObj = await this.getCurrentPage()
  const el = await pageObj.getElement(locatorKey)

  await el.waitForExist(2000);
};
