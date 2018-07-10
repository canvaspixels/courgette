const path = require('path');

// eslint-disable-next-line
const { Then } = require(path.join(process.cwd(), 'node_modules/cucumber'));

const checkUrl = require('./checks/checkUrl');

Then(/^I expect the url to (be|contain) "([^"]*)?"$/, checkUrl);
