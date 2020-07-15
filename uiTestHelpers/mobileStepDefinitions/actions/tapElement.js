module.exports = async function tapElement(locatorKey) {
  const pageObj = await this.getCurrentPage();

  const el = await pageObj.getElement(locatorKey);

  if (process.env.COURGETTE_DEBUG) {
    console.log('Tap element: ', el);
  }

  await driver.touchAction({
    action: 'tap',
    element: el,
  });
};
