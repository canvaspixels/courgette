const createPage = (process.env.BINDINGS === 'WDIO') ? require('../../uiTestHelpers/createPageWDIO') : require('../../uiTestHelpers/createPage');

const fileName = createPage.getFileName(__filename);

module.exports = (world) => {
  const pagePath = '/other-page';
  const locators = (process.env.BINDINGS === 'WDIO') ? {
    'Go to home page by react router link': '[data-test="go-to-home-link"]',
  } : {
    'Go to home page by react router link': by.css('[data-test="go-to-home-link"]'),
  };

  return createPage(fileName, world, pagePath, locators);
};
