module.exports = async function checkIsEnabled(locatorKey, enabledOrDisabled) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  return el.waitForEnabled(10000, enabledOrDisabled === 'enabled');
};
