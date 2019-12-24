module.exports = async function longPressElement(locatorKey) {
  const pageObj = await this.getCurrentPage();

  const el = await pageObj.getElement(locatorKey);
  await driver.touchAction({
    action: 'longPress',
    element: el,
  });
};
