module.exports = function clearInputFieldValue(fieldName) {
  return this.getCurrentPage()
    .getElementWhenInDOM(fieldName)
    .then(element => element.clear());
};