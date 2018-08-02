module.exports = function appendInputFieldValue(value, fieldName) {
  return this.getCurrentPage()
    .getElementWhenInDOM(fieldName)
    .then (element => element.sendKeys(value));
};