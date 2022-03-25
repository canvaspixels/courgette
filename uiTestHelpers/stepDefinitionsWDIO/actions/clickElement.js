module.exports = async function clickElement(locatorKey) {
  const pageObj = await this.getCurrentPage();

  const el = await pageObj.getElement(locatorKey);

  if (process.env.COURGETTE_DEBUG) {
    console.log('Click element: ', el);
  }

  await el.click();
};
