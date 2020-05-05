module.exports = async function checkElementInsideElementVisibility(locatorKey2, locatorKey, visibleOrHidden) {
  const currentPage = this.getCurrentPage();
  const el = await currentPage.getElementWhenInDOM(locatorKey, locatorKey2)
  if (process.env.BINDINGS === 'WDIO') {
    return expect(el.isDisplayed()).to.equal(visibleOrHidden !== 'hidden')
  }

  return visibleOrHidden === 'hidden' ?
      currentPage.getElementWhenInvisible(locatorKey) :
      currentPage.getElementWhenVisible(locatorKey);
};
