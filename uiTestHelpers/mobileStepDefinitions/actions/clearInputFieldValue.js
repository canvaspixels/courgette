module.exports = async function clearInputFieldValue(locatorKey) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  return el.clearValue();
};

