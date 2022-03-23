module.exports = function checkInputIsEmpty(locatorKey, isNotEmpty) {
  return this.getCurrentPage().getElementWhenInDOM(locatorKey)
    .then(async (element) => {
      const val = await browser.executeScript('return arguments[0].value', element);

      return isNotEmpty ?
        expect(val || '').to.not.equal('') :
        expect(val || '').to.equal('')
    });
};
