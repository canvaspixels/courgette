module.exports = async function checkClass(locatorKey, doesNotContain, className) {
  const el = await this.getCurrentPage().getElement(locatorKey)
  const classNameToBeChecked = el.getAttribute('class');

  return classNameToBeChecked
    .then((actualClasses) =>
      (doesNotContain ?
        expect(actualClasses).to.not.include(className) :
        expect(actualClasses).to.be.include(className)));
};
