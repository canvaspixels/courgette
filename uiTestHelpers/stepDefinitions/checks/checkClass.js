module.exports = function checkClass(locatorKey, doesNotContain, className) {
  const classNameToBeChecked = this.getCurrentPage().getElement(locatorKey)
    .getAttribute('class');

  return classNameToBeChecked
    .then((actualClasses) =>
      doesNotContain ?
        expect(actualClasses).to.not.include(className) :
        expect(actualClasses).to.be.include(className)
    );
};