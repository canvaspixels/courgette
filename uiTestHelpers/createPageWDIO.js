const path = require('path');
const createComponent = require('./createMobileComponent');
// eslint-disable-next-line

module.exports = (name, world, pageUrl, elLocators, opts = { timeoutInSeconds: 10 }, customMethods = {}) =>
  Object.assign(
    {},
    createComponent(name, world, elLocators, 'page'),
    {
      getScreenPath() {
        return pageUrl;
      },

      goToScreen: async () => {
        const url = `${pageUrl.startsWith('http') ? '' : pomConfig.baseUrl}${pageUrl}`;
        const screen = await browser.$(url);

        world.screen = screen; // eslint-disable-line no-param-reassign

        return screen.waitForExist(opts.timeoutInSeconds * 1000);
      },
    },
    customMethods,
  );

module.exports.getFileName = (fileName) =>
  path.basename(fileName).replace(/\.js$/, '');
