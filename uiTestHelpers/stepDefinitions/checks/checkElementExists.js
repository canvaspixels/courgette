module.exports = function checkElementExists(locatorKey, doesNotExist) {
  const el = this.getCurrentPage().getElement(locatorKey);

  return doesNotExist ?
    expect(el.isPresent()).to.not.eventually.be.true :
    expect(el.isPresent()).to.eventually.be.true;
};