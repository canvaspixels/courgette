const createPage = require('cucumber-protractor/uiTestHelpers/createPage');
const fileName = createPage.getFileName(__filename);

module.exports = (world) => {
  const pagePath = 'https://twitter.com/login';
  const locators = {
    'username': by.css('.js-username-field'),
    'password': by.css('.js-password-field'),
    'login form': by.css('.js-signin'),
  };

  const pageMethods = {
    async logIn() {
      await world.goToPage('twitter login');
      await world.setInputFieldValue('username', 'YOUR_USERNAME');
      await world.setInputFieldValue('password', 'YOUR_PASSWORD');
      await world.submitForm('login form');
      return await world.checkUrlIs('https://twitter.com');
    },
  };

  return createPage(fileName, world, pagePath, locators, pageMethods);
};