
const path = require('path');
const { pomConfig } = require(path.join(process.cwd(), process.env.confFile || 'courgette-conf.js'));

module.exports = async function waitForElement(locatorKey, doesNotExist) {
  const currentPage = this.getCurrentPage();
  const el = currentPage.getElement(locatorKey);

  if (process.env.BINDINGS === 'WDIO') {
    const elem = await el;
    return elem.waitForExist({ timeout: pomConfig.timeoutInSeconds * 1000, reverse: doesNotExist })
  }

  const EC = protractor.ExpectedConditions;
  return doesNotExist ? browser.wait(EC.stalenessOf(el)) : browser.wait(EC.presenceOf(el));
};
