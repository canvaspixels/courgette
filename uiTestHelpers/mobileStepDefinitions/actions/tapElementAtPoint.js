module.exports = async function tapElementAtPoint(locatorKey, x, y) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  if (process.env.PLATFORM.includes('ios')) {
    await driver.execute('mobile: tap', {
      element: el,
      x,
      y,
    });
  } else {
    const location = await el.getLocation();

    const xRelativeToRoot = location.x + Number(x);
    const yRelativeToRoot = location.y + Number(y);
    if (process.env.COURGETTE_DEBUG) {
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
  }
};
