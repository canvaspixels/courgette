const path = require('path');

// eslint-disable-next-line
const { When } = require(path.join(process.cwd(), 'node_modules/cucumber'));

const clickElement = require('./actions/clickElement');
const appendInputFieldValue = require('./actions/appendInputFieldValue');
const setInputFieldValue = require('./actions/setInputFieldValue');
const appendReactInputFieldValue = require('./actions/appendReactInputFieldValue');
const setReactInputFieldValue = require('./actions/setReactInputFieldValue');
const submitForm = require('./actions/submitForm');
const pressKey = require('./actions/pressKey');
const clearInputFieldValue = require('./actions/clearInputFieldValue');
const setSelectValueByOptionText = require('./actions/setSelectValueByOptionText');

When(/^I click(?: the)? '([^']*)?'$/, clickElement);
When(/^I append '([^']*)?' to '([^']*)?'$/, appendInputFieldValue);
When(/^I set '([^']*)?' to '([^']*)?'$/, setInputFieldValue);
When(/^I append '([^']*)?' to react field '([^']*)?'$/, appendReactInputFieldValue);
When(/^I set react field '([^']*)?' to '([^']*)?'$/, setReactInputFieldValue);
When(/^I submit the(?: form)? '([^']*)?'$/, submitForm);
When(/^I press '([^']*)?'$/, pressKey);
When(/^I clear(?: the)? '([^']*)?'$/, clearInputFieldValue);
When(/^I select the option for select element '([^']*)?' with the text '([^']*)?'$/, setSelectValueByOptionText);
