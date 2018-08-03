module.exports = function setInputFieldValue(fieldName, value) {
  return this.getCurrentPage()
    .getElementWhenInDOM(fieldName)
    .then((element) => {
      return element.clear()
        .then(() => element.sendKeys(value))
    });
};