module.exports = function clearInputFieldValue(locatorKey) {
  return this.getCurrentPage()
    .getElementWhenInDOM(locatorKey)
    .then(element => element.clear());
};