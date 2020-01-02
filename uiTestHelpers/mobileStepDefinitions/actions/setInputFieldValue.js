module.exports = async function setInputFieldValue(locatorKey, value) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  await el.setValue(value);
};
