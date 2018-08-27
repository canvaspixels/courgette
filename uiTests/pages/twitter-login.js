const createPage = require('cucumber-protractor/uiTestHelpers/createPage');
const fileName = createPage.getFileName(__filename);

module.exports = (world) => {
  const pagePath = 'https://twitter.com/login';
  const locators = {
    'username': by.css('.js-username-field'),
    'password': by.css('.js-password-field'),
    'login form': by.css('.js-signin'),
  };

  return createPage(fileName, world, pagePath, locators);
};