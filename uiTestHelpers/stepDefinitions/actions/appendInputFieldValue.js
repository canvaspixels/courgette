module.exports = function appendInputFieldValue(value, locatorKey) {
  console.log('grdgdrg', value);
  return this.getCurrentPage()
    .getElementWhenInDOM(locatorKey)
    .then(element => element.sendKeys(value));
};