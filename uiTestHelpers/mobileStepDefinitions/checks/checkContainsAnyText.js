module.exports = async function checkContainsAnyText(locatorKey, doesNotContain) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  return doesNotContain ?
    expect(el.getText()).to.eventually.equal('') :
    expect(el.getText()).to.not.eventually.equal('');
};
