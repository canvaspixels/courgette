const path = require('path');

// eslint-disable-next-line
const { Given } = require(path.join(process.cwd(), 'node_modules/cucumber'));

const goToPage = require('./actions/goToPage');

Given(/^I go to the "([^"]*)?" page$/, goToPage);
