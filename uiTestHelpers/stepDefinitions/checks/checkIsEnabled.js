module.exports = function checkIsEnabled(locatorKey, enabledOrDisabled) {
  const el = this.getCurrentPage().getElement(locatorKey);
  const elIsEnabled = el.isEnabled();

  return enabledOrDisabled === 'enabled' ?
    expect(elIsEnabled).to.eventually.equal(true) :
    expect(elIsEnabled).to.eventually.equal(false);
};