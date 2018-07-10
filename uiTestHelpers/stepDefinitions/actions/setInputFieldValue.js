module.exports = function setInputFieldValue(fieldName, value) {
  return this.getCurrentPage()
    .getElementWhenInDOM(fieldName)
    .then (element => element.sendKeys(value));
};