const createPage = require('../../uiTestHelpers/createPage');

const pagePath = '/';

module.exports = (world) =>
  createPage('home', world, pagePath, {
    'Go to other page by react router link': by.css('[data-test="rr-link"]'),
  });
