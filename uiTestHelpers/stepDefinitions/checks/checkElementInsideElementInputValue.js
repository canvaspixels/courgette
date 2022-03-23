module.exports = function checkElementInsideElementInputValue(locatorKey2, locatorKey, isNot, expectedVal) {
  const expectedValue = expectedVal === undefined ? '' : expectedVal;

  return this.getCurrentPage().getElementWhenInDOM(locatorKey, locatorKey2)
    .then(async (el) => {
      const val = await browser.executeScript('return arguments[0].value', el);

      return isNot ?
        expect(val).to.not.equal(expectedValue) :
        expect(val).to.equal(expectedValue);
    });
};
