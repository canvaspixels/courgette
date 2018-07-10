const path = require('path');

// eslint-disable-next-line
const { When } = require(path.join(process.cwd(), 'node_modules/cucumber'));

const clickElement = require('./actions/clickElement');

When(/^I click (?:the )?"([^"]*)?"$/, clickElement);
