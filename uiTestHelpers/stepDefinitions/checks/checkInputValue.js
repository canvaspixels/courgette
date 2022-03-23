module.exports = function checkInputValue(locatorKey, isNot, expectedVal) {
  const expectedValue = [undefined, null].includes(expectedVal) ? '' : expectedVal;

  return this.getCurrentPage().getElementWhenInDOM(locatorKey)
    .then(async (element) => {
      const val = await browser.executeScript('return arguments[0].value', element);

      return isNot ?
        expect(val || '').to.not.equal(expectedValue) :
        expect(val || '').to.equal(expectedValue);
    });
};
