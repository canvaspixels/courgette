module.exports = function setElementInsideElement(locatorKey2, locatorKey, value) {
  return this.getCurrentPage()
    .getElementWhenInDOM(locatorKey, locatorKey2)
    .then((element) => element.clear()
      .then(() => element.sendKeys(value)));
};
