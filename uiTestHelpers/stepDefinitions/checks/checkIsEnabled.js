module.exports = async function checkIsEnabled(locatorKey, enabledOrDisabled) {
  const currentPage = this.getCurrentPage();
  const el = await currentPage.getElementWhenInDOM(locatorKey)
  const elIsEnabled = el.isEnabled();

  return enabledOrDisabled === 'enabled' ?
    expect(elIsEnabled).to.eventually.equal(true) :
    expect(elIsEnabled).to.eventually.equal(false);
};
