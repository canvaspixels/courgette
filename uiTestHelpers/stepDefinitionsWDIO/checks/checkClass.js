const path = require('path');

module.exports = async function checkAttribute(locatorKey, doesNotContain, className) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  if (process.env.COURGETTE_DEBUG) {
    console.log('In file:', path.basename(__filename), el);
  }

  const classNameToBeChecked = await el.getAttribute('class');

  return doesNotContain ?
        expect(classNameToBeChecked).to.not.include(className) :
        expect(classNameToBeChecked).to.be.include(className);
};
