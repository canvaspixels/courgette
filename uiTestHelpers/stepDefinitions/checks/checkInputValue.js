module.exports = function checkInputValue(locatorKey, isNotEmpty, expectedValue) {
  return this.getCurrentPage().getElementWhenInDOM(locatorKey)
    .then((el) => {
      const elValuePromise = el.getAttribute('value');
      return isNotEmpty ?
        expect(elValuePromise).to.not.eventually.equal(expectedValue) :
        expect(elValuePromise).to.eventually.equal(expectedValue);
    });

};