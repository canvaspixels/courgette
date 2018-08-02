const path = require('path');

// eslint-disable-next-line
const { Given } = require(path.join(process.cwd(), 'node_modules/cucumber'));

const goToPage = require('./actions/goToPage');
const checkUrl = require('./checks/checkUrl');
const checkContainsText = require('./checks/checkContainsText');
const disableAnimations = require('./actions/disableAnimations');
const checkVisibility = require('./checks/checkVisibility');
const checkIsEnabled = require('./checks/checkIsEnabled');
const checkIsSelected = require('./checks/checkIsSelected');
const checkElementExists = require('./checks/checkElementExists');
const checkTitle = require('./checks/checkTitle');
const checkContainsAnyText = require('./checks/checkContainsAnyText');
const checkAttribute = require('./checks/checkAttribute');
const checkInputIsEmpty = require('./checks/checkInputIsEmpty');
const setCookie = require('./actions/setCookie');
const checkInputValue = require('./checks/checkInputValue');
const checkCookieContent = require('./checks/checkCookieContent');
const checkCookieExists = require('./checks/checkCookieExists');

Given(/^I go to the '([^']*)?' page$/, goToPage);
Given(/^the page url is( not)* '([^']*)?'$/, checkUrl);
// add url contains
Given(/^animations are disabled$/, disableAnimations);
Given(/^(?:the)? '([^']*)?' is (visible|hidden)$/, checkVisibility);
Given(/^(?:the)? '([^']*)?' is (enabled|disabled)$/, checkIsEnabled);
Given(/^(?:the)? '([^']*)?' is( not)* (?:selected|checked)$/, checkIsSelected);
Given(/^(?:the)? '([^']*)?' is( not)* on the page$/, checkElementExists);
Given(/^the title is( not)* '([^']*)?'$/, checkTitle);
Given(/^(?:the)? '([^']*)?'( does not)* contain(?:s)* the text '([^']*)?'$/, checkContainsText);
Given(/^(?:the)? '([^']*)?'( does not)* contain(?:s)* any text$/, checkContainsAnyText);
Given(/^(?:the)? '([^']*)?' has an attribute '([^']*)?' with a value of '([^']*)?'$/, checkAttribute);
Given(/^(?:the)? '([^']*)?' is( not)* empty$/, checkInputIsEmpty);
Given(/^the value of(?: the)? '([^']*)?' is( not)* '([^']*)?'$/, checkInputValue);
Given(/^I set the cookie '([^']*)?' with value '([^']*)?'$/, setCookie);
Given(/^the cookie '([^']*)?' is( not)* set to '([^']*)?'$/, checkCookieContent);
Given(/^the cookie '([^']*)?' is( not)* set$/, checkCookieExists);
