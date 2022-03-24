const path = require('path');
const createComponent = require('./createComponentWDIO');
// eslint-disable-next-line
const { pomConfig } = require(path.join(process.cwd(), process.env.COURGETTE_CONF || 'courgette-conf.js'));

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
        const screen = await browser.url(url);

        world.screen = screen; // eslint-disable-line no-param-reassign

        return screen;
      },
    },
    customMethods,
  );

module.exports.getFileName = (fileName) =>
  path.basename(fileName).replace(/\.js$/, '');
