module.exports = async function checkElementExists(locatorKey, doesNotExist) {
  const el = await this.getCurrentPage().getElement(locatorKey);

  if (process.env.BINDINGS === 'WDIO') {
    return doesNotExist ?
      expect(el.isDisplayed()).to.not.eventually.be.true :
      expect(el.isDisplayed()).to.eventually.be.true;
  }
  
  return doesNotExist ?
    expect(el.isPresent()).to.not.eventually.be.true :
    expect(el.isPresent()).to.eventually.be.true;
};
