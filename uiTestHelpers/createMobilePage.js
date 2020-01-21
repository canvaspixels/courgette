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
        const screen = await browser.$(`~${pageUrl}`);

        world.screen = screen; // eslint-disable-line no-param-reassign
        
        return screen.waitForExist(opts.timeoutInSeconds * 1000);
      },
    },
    customMethods,
  );

module.exports.getFileName = (fileName) =>
  path.basename(fileName).replace(/\.js$/, '');
