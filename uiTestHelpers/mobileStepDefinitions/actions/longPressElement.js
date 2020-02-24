module.exports = async function longPressElement(locatorKey) {
  const pageObj = await this.getCurrentPage();

  const el = await pageObj.getElement(locatorKey);
  await driver.touchAction([
    { action: "press", element: el },
    { action: "wait", ms: 1000 },
    "release"
  ]);
};
