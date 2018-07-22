const createPage = require('../../uiTestHelpers/createPage');

const pagePath = '/';

module.exports = (world) =>
  createPage('home', world, pagePath, {
    'Go to other page by react router link': by.css('[data-test="rr-link"]'),
    'Go to home page by react router link': by.css('[data-test="go-to-home-link"]'), // doesn't actually exist on this page, just using to test that it doesn't exist
  });
