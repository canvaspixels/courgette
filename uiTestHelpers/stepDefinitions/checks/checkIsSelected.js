module.exports = async function checkIsSelected(locatorKey, isNotSelected) {
  const el = await this.getCurrentPage().getElement(locatorKey);

  return isNotSelected ?
    expect(el.isSelected()).to.eventually.equal(false) :
    expect(el.isSelected()).to.eventually.equal(true);
};
