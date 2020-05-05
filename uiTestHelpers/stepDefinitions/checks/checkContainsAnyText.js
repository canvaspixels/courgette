const path = require('path');

module.exports = async function checkContainsAnyText(locatorKey, doesNotContain) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElementWhenInDOM(locatorKey);

  if (process.env.DEBUG) {
    console.log('In file:', path.basename(__filename), el);
  }

  return doesNotContain ?
    expect(el.getText()).to.eventually.equal('') :
    expect(el.getText()).to.not.eventually.equal('');
};
