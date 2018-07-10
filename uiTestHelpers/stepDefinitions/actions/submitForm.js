module.exports = function submitForm(locatorKey) {
  return this.getCurrentPage()
    .getElementWhenInDOM(locatorKey)
    .then(element => element.submit());
};