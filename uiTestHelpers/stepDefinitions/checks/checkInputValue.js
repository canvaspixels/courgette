module.exports = function checkInputValue(locatorKey, isNot, expectedVal) {
  const expectedValue = [undefined, null].includes(expectedVal) ? '' : expectedVal;

  return this.getCurrentPage().getElementWhenInDOM(locatorKey)
    .then((el) => el.getAttribute('value').then((val) =>
      (isNot ?
        expect(val || '').to.not.equal(expectedValue) :
        expect(val || '').to.equal(expectedValue))));
};
