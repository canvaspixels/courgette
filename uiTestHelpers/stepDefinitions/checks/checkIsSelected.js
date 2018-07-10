module.exports = function checkIsSelected(locatorKey, isNotSelected) {
  const el = this.getCurrentPage().getElement(locatorKey);

  return isNotSelected ?
    expect(el.isSelected()).to.eventually.equal(false) :
    expect(el.isSelected()).to.eventually.equal(true);
};