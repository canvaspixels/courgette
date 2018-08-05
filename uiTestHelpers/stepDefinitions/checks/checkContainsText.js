module.exports = function checkContainsText(locatorKey, containsStr, expectedText) {
  return this.getCurrentPage().getElementWhenInDOM(locatorKey)
    .then((el) => (
      containsStr === 'contains' ?
        expect(el.getText()).to.eventually.equal(expectedText) :
        expect(el.getText()).to.not.eventually.equal(expectedText)
    ));
};