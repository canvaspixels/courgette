module.exports = function checkAttribute(locatorKey, expectedAttribute, expectedValue) {
  return this.getCurrentPage()
    .getElementWhenInDOM(locatorKey)
    .then(element => element.getAttribute(expectedAttribute)
    .then(value => expect(value).to.equal(expectedValue));
};