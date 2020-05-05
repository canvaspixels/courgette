const createPage = (process.env.BINDINGS === 'WDIO') ? require('../../uiTestHelpers/createPageWDIO') : require('../../uiTestHelpers/createPage');
const banner = require('../components/banner');

const fileName = createPage.getFileName(__filename);

module.exports = (world) => {
  const pagePath = '/';
  const locators = (process.env.BINDINGS === 'WDIO') ? {
    'main container': '[data-test="home-container"]',
    'empty div': '[data-test="empty-div"]',
    'bullets': '[data-test="list-item"]',
    'Go to other page by react router link': '[data-test="rr-link"]',
    'Go to other page link': '[data-test="other-page-link"]',
    'Go to other page in new tab link': '[data-test="other-page-link-new-tab"]',
    'fullname': '[data-test="fullname"]',
    'main form': '[data-test="form"]',
    'main heading': '[data-test="main-heading"]',
    'email': '[data-test="email"]',
    'age field': '[data-test="age-field"]',
    'age field 18 to 25': '[data-test="age-18to25"]',
    'age field 26 plus': '[data-test="age-26plus"]',
    'hidden field': '[data-test="hidden-field"]',
    'button': '[data-test="button"]',
    'disabled button': '[data-test="disabled-button"]',
    'newsletter checkbox': '[data-test="newsletter-checkbox"]',
    'you ok checkbox': '[data-test="you-ok-checkbox"]',
    'non-existant element': '[data-test="non-existant"]',
    'another simple page react link': '[data-test="another-simple-page-react-link"]',
    'file upload': '[data-test="a-file"]',
    'Go to home page by react router link': '[data-test="go-to-home-link"]', // doesn't actually exist on this page, just using to test that it doesn't exist
  } : {
    'main container': by.css('[data-test="home-container"]'),
    'empty div': by.css('[data-test="empty-div"]'),
    'bullets': by.css('[data-test="list-item"]'),
    'Go to other page by react router link': by.css('[data-test="rr-link"]'),
    'Go to other page link': by.css('[data-test="other-page-link"]'),
    'Go to other page in new tab link': by.css('[data-test="other-page-link-new-tab"]'),
    'fullname': by.css('[data-test="fullname"]'),
    'main form': by.css('[data-test="form"]'),
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
    'another simple page react link': by.css('[data-test="another-simple-page-react-link"]'),
    'file upload': by.css('[data-test="a-file"]'),
    'Go to home page by react router link': by.css('[data-test="go-to-home-link"]'), // doesn't actually exist on this page, just using to test that it doesn't exist
  };

  return createPage(fileName, world, pagePath, locators)
    .addComponents([banner]);
};
