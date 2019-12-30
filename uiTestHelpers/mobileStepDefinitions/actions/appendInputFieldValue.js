module.exports = async function appendInputFieldValue(value, locatorKey) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  await el.addValue(value);
};
