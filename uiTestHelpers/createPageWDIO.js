const path = require('path');
const createComponent = require('./createMobileComponent');
// eslint-disable-next-line

module.exports = (name, world, pageUrl, elLocators, opts = { timeoutInSeconds: 10 }, customMethods = {}) =>
  Object.assign(
    {},
    createComponent(name, world, elLocators, 'page'),
    {
      getPagePath() {
        return pageUrl;
      },

      getPageFullUrl() {
        // add protocol and host from pomConfig if pageUrl in the page object is just a pathname
        const url = `${pageUrl.startsWith('http') ? '' : pomConfig.baseUrl}${pageUrl}`;

        console.log('Getting full url: ', url);
        return url;
      },

      goToPage() {
        return browser.url(this.getPageFullUrl());
      },
    },
    customMethods,
  );

module.exports.getFileName = (fileName) =>
  path.basename(fileName).replace(/\.js$/, '');
