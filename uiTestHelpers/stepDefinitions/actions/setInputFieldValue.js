module.exports = function setInputFieldValue(locatorKey, value) {
  return this.getCurrentPage()
    .getElementWhenInDOM(locatorKey)
    .then((element) => {
      return element.clear()
        .then(() => element.sendKeys(value))
    });
};