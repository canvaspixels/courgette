module.exports = async function setInputFieldValue(locatorKey, value) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElementWhenInDOM(locatorKey);
  
  if (process.env.BINDINGS === 'WDIO') {
    await el.clearValue();
    return el.setValue(value);
  } else {
    await el.clear()
    return el.sendKeys(value)
  }
};
