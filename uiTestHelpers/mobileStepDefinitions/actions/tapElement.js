module.exports = async function tapElement(locatorKey) {
  const pageObj = await this.getCurrentPage();

  const el = await pageObj.getElement(locatorKey);
  await driver.touchAction({
    action: 'tap',
    element: el,
  });
};
