module.exports = function checkInputIsEmpty(locatorKey, isNotEmpty) {
  return this.getCurrentPage().getElementWhenInDOM(locatorKey)
    .then((el) => el.getAttribute('value').then((val) =>
      (isNotEmpty ?
        expect(val || '').to.not.equal('') :
        expect(val || '').to.equal(''))));
};
