const path = require('path');

const { pomConfig } = require(path.join(process.cwd(), process.env.COURGETTE_CONF || 'courgette-conf.js'));
const timeoutInSeconds = pomConfig.timeoutInSeconds || 8;

module.exports = async function checkVisibility(locatorKey, visibleOrHidden) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  if (process.env.COURGETTE_DEBUG) {
    console.log('In file:', path.basename(__filename), el);
  }

  return el.waitForDisplayed({
    timeout: timeoutInSeconds * 1000,
    reverse: visibleOrHidden === 'hidden',
  });
};
