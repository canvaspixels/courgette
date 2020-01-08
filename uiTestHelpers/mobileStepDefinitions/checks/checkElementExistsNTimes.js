const path = require('path');

module.exports = async function checkElementExistsNTimes(locatorKey, doesNotExist, numberOfTimes) {
  const pageObj = await this.getCurrentPage();
  const els = await pageObj.getElements(locatorKey);

  if (process.env.DEBUG) {
    console.log('In file:', path.basename(__filename), els);
  }

  return doesNotExist ?
    expect(els.length).to.not.equal(+numberOfTimes) :
    expect(els.length).to.equal(+numberOfTimes);
};
