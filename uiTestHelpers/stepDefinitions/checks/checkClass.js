module.exports = function checkClass(locatorKey, doesNotContain, className) {
  const classNameToBeChecked = this.getCurrentPage().getElement(locatorKey)
    .getAttribute('class')
    .then(classes => classes.split(' ').indexOf(className) !== -1);

  return doesNotContain ?
    expect(classNameToBeChecked).to.not.eventually.be.true :
    expect(classNameToBeChecked).to.eventually.be.true
};