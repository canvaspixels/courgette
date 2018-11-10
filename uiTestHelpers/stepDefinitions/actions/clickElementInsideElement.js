module.exports = function clickElementInsideElement(locatorKey2, locatorKey) {
  return this.getCurrentPage()
    .getElementWhenInDOM(locatorKey, locatorKey2)
    .then((element) => element.click());
};
