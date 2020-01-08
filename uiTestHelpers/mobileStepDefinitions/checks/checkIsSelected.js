const path = require('path');

module.exports = async function checkIsSelected(locatorKey, isNotSelected) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  if (process.env.DEBUG) {
    console.log('In file:', path.basename(__filename), el);
  }

  return isNotSelected ?
    expect(el.isSelected()).to.eventually.equal(false) :
    expect(el.isSelected()).to.eventually.equal(true);
};
