module.exports = function checkVisibility(locatorKey, visibleOrHidden) {
  return visibleOrHidden === 'hidden' ?
    this.getCurrentPage().getElementWhenInvisible(locatorKey) :
    this.getCurrentPage().getElementWhenVisible(locatorKey);
};