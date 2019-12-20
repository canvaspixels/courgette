const path = require('path');
const createComponent = require('./createMobileComponent');
// eslint-disable-next-line

module.exports = (name, world, pageUrl, elLocators, customMethods = {}) =>
  Object.assign(
    {},
    createComponent(name, world, elLocators, 'page'),
    {
      goToPage: async () => {
        const screen = await browser.$(`~${pageUrl}`)
        // console.log('screen', screen, `~${pageUrl}`);
        
        world.screen = screen
        return screen;
      },
    },
    customMethods,
  );

module.exports.getFileName = (fileName) =>
  path.basename(fileName).replace(/\.js$/, '');
