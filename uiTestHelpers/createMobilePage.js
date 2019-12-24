const path = require('path');
const createComponent = require('./createMobileComponent');
// eslint-disable-next-line

module.exports = (name, world, pageUrl, elLocators, customMethods = {}) =>
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
        return screen.waitForExist(10000);
      },
    },
    customMethods,
  );

module.exports.getFileName = (fileName) =>
  path.basename(fileName).replace(/\.js$/, '');
