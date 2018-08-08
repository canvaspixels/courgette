const createPage = require('../../uiTestHelpers/createPage');
const fileName = createPage.getFileName(__filename);

module.exports = (world) => {
  const pagePath = '/';
  const locators = {
    'Go to other page by react router link': by.css('[data-test="rr-link"]'),
    'Go to other page link': by.css('[data-test="other-page-link"]'),
    'Go to other page in new window link': by.css('[data-test="other-page-link-new-tab"]'),
    'fullname': by.css('[data-test="fullname"]'),
    'main heading': by.css('[data-test="main-heading"]'),
    'email': by.css('[data-test="email"]'),
    'age field': by.css('[data-test="age-field"]'),
    'age field 18 to 25': by.css('[data-test="age-18to25"]'),
    'age field 26 plus': by.css('[data-test="age-26plus"]'),
    'hidden field': by.css('[data-test="hidden-field"]'),
    'button': by.css('[data-test="button"]'),
    'disabled button': by.css('[data-test="disabled-button"]'),
    'newsletter checkbox': by.css('[data-test="newsletter-checkbox"]'),
    'you ok checkbox': by.css('[data-test="you-ok-checkbox"]'),
    'non-existant element': by.css('[data-test="non-existant"]'),
    'Go to home page by react router link': by.css('[data-test="go-to-home-link"]'), // doesn't actually exist on this page, just using to test that it doesn't exist
  };

  return createPage(fileName, world, pagePath, locators);
};
