module.exports = function checkIsEnabled(locatorKey, isNotEnabled) {
  const els = this.getCurrentPage().getElement(locatorKey);
  const elIsEnabled = el.isEnabled();

  return isNotEnabled ?
    expect(elIsEnabled).to.eventually.equal(false) :
    expect(elIsEnabled).to.eventually.equal(true);
};