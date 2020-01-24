module.exports = async function tapElementAtPoint(locatorKey, x, y) {
  const pageObj = await this.getCurrentPage();

  const el = await pageObj.getElement(locatorKey);
  const location = await el.getLocation();

  const xRelativeToRoot = location.x + Number(x);
  const yRelativeToRoot = location.y + Number(y);
  if (process.env.DEBUG) {
    console.log('Tap element: ', el);
    console.log({ location });
    console.log({ xRelativeToRoot });
    console.log({ yRelativeToRoot });
  }

  await driver.touchAction({
    action: 'tap',
    x: xRelativeToRoot,
    y: yRelativeToRoot,
  });
};
