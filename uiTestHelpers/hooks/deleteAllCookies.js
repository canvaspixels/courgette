const path = require('path');

// eslint-disable-next-line
const { Before } = require(path.join(process.cwd(), 'node_modules/cucumber'));

Before(() => browser.manage().deleteAllCookies());
