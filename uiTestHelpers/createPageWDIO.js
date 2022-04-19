const path = require('path');
const createComponent = require('./createComponentWDIO');
// eslint-disable-next-line
const { pomConfig } = require(path.join(process.cwd(), process.env.COURGETTE_CONF || 'courgette-conf.js'));

module.exports = (name, world, pageUrl, elLocators, customMethods = {}) =>
  Object.assign(
    {},
    createComponent(name, world, elLocators, 'page'),
    {
      getScreenPath() {
        return pageUrl;
      },

      goToPage: async () => {
        const url = `${pageUrl.startsWith('http') ? '' : pomConfig.baseUrl}${pageUrl}`;
        const screen = await browser.url(url);

        return screen;
      },
    },
    customMethods,
  );

module.exports.getFileName = (fileName) =>
  path.basename(fileName).replace(/\.js$/, '');
