const createComponent = require('./createComponent');

module.exports = (name, world, pageUrl, elLocators) =>
  Object.assign(
    {},
    createComponent(name, world, elLocators, 'page'),
    {
      url() {
        return world.getUrl(pageUrl);
      },

      goToPage() {
        return browser.get(this.url());
      },
    },
  );
