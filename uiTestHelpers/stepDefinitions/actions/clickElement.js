module.exports = function clickElement(locatorKey) {
  return this.getCurrentPage()
    .getElementWhenInDOM(locatorKey)
    .then(element => element.click());
};
