module.exports = async function checkInputIsEmpty(locatorKey, isNotEmpty) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  const value = await el.getAttribute('value');

  return isNotEmpty ?
    expect(!!value).to.not.equal(false) :
    expect(!!value).to.equal(false);
};
