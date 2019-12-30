module.exports = async function checkElementExistsNTimes(locatorKey, doesNotExist, numberOfTimes) {
  const pageObj = await this.getCurrentPage();
  const els = await pageObj.getElements(locatorKey);

  return doesNotExist ?
    expect(els.length).to.not.equal(+numberOfTimes) :
    expect(els.length).to.equal(+numberOfTimes);
};
