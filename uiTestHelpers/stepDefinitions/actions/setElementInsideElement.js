module.exports = async function setElementInsideElement(locatorKey2, locatorKey, value) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElementWhenInDOM(locatorKey, locatorKey2);
  
  if (process.env.BINDINGS === 'WDIO') {
    await el.clearValue();
    return el.setValue(value);
  } else {
    await el.clear()
    return el.sendKeys(value)
  }
};
