const createPage = require('cucumber-protractor/uiTestHelpers/createPage');
const fileName = createPage.getFileName(__filename);

module.exports = (world) => {
  const pagePath = 'https://www.google.com/';
  const locators = {
    'I’m Feeling Lucky': by.css('[value="I\'m Feeling Lucky"]'),
  };

  return createPage(fileName, world, pagePath, locators);
};
