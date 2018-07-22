const createPage = require('../../uiTestHelpers/createPage');

const pagePath = '/other-page';

module.exports = (world) =>
  createPage('other', world, pagePath, {
    'Go to home page by react router link': by.css('[data-test="go-to-home-link"]'),
  });
