module.exports = function checkVisibility(locatorKey, visibleOrHidden) {
  const currentPage = this.getCurrentPage();
  return currentPage
    .getElementWhenInDOM(locatorKey)
    .then(() => (visibleOrHidden === 'hidden'
      ? currentPage.getElementWhenInvisible(locatorKey)
      : currentPage.getElementWhenVisible(locatorKey)));
};
