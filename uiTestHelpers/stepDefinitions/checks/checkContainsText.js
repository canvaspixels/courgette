module.exports = function checkContainsText(locatorKey, doesNotContain, expectedText) {
  return this.getCurrentPage().getElementWhenInDOM(locatorKey)
    .then((el) => (
      doesNotContain ?
        expect(el.getText()).to.not.eventually.equal(expectedText) :
        expect(el.getText()).to.eventually.equal(expectedText)
    ));
};