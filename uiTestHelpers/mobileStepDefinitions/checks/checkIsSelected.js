module.exports = async function checkIsSelected(locatorKey, isNotSelected) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  return isNotSelected ?
    expect(el.isSelected()).to.eventually.equal(false) :
    expect(el.isSelected()).to.eventually.equal(true);
};
