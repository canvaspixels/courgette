const path = require('path');

// eslint-disable-next-line
const { When } = require(path.join(process.cwd(), 'node_modules/cucumber'));

const clickElement = require('./actions/clickElement');
const setInputFieldValue = require('./actions/setInputFieldValue');
const submitForm = require('./actions/submitForm');
const pressKey = require('./actions/pressKey');
const clearInputFieldValue = require('./actions/clearInputFieldValue');
const setSelectValueByOptionText = require('./actions/setSelectValueByOptionText');

When(/^I click(?: the)? '([^']*)?'$/, clickElement);
When(/^I append '([^']*)?' to '([^']*)?'$/, setInputFieldValue);
// Add i set to value
When(/^I submit the(?: form)? '([^']*)?'$/, submitForm);
When(/^I press '([^']*)?'$/, pressKey);
When(/^I clear(?: the)? '([^']*)?'$/, clearInputFieldValue);
When(/^I select the option for select element '([^']*)?' with the text '([^']*)?'$/, setSelectValueByOptionText);
