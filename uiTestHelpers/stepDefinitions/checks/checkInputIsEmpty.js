module.exports = function checkInputIsEmpty(locatorKey, isNotEmpty) {
  return this.getCurrentPage().getElementWhenInDOM(locatorKey)
    .then((el) => {
      const elValuePromise = el.getAttribute('value');
      return isNotEmpty ?
        expect(elValuePromise).to.not.eventually.equal('') :
        expect(elValuePromise).to.eventually.equal('');
    });
};
