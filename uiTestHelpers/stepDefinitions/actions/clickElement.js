const path = require('path');
const { argv } = require('yargs');

// eslint-disable-next-line
const { pomConfig } = require(path.join(process.cwd(), argv.confFile || process.env.COURGETTE_CONF || 'courgette-conf.js'));

module.exports = function clickElement(locatorKey) {
  const elementPromise = this.getCurrentPage()
    .getElementWhenInDOM(locatorKey);

  const scrollIncrementInPx = pomConfig.scrollIncrementInPx || 250;
  const maxClickTries = pomConfig.maxClickTries || 100;
  let clickIteration = 0;

  const tryClick = () => elementPromise.then((element) => element.click()).catch(async (e) => {
    // sometimes sticky menus can get in the way of clicks so scroll down the page until it's not in the way
    if (e.message.includes('element click intercepted') && clickIteration < maxClickTries) {
      const scrollToYPos = scrollIncrementInPx * clickIteration;
      console.warn(`There is something in the way. clickIteration: ${clickIteration + 1}. Scrolling to position: 0,${scrollToYPos} and trying to click again.
        Selenium error: ${e.message}`);
      await browser.executeScript((y) => window.scrollTo(0, y), scrollToYPos);
      clickIteration += 1;
      return tryClick();
    }
    return Promise.reject(e);
  });

  return tryClick();
};
