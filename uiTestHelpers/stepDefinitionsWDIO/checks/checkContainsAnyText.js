const path = require('path');

module.exports = async function checkContainsAnyText(locatorKey, doesNotContain) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  if (process.env.COURGETTE_DEBUG) {
    console.log('In file:', path.basename(__filename), el);
  }

  return doesNotContain ?
    expect(el.getText()).to.eventually.equal('') :
    expect(el.getText()).to.not.eventually.equal('');
};
