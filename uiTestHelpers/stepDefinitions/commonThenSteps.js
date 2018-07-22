const path = require('path');
// eslint-disable-next-line
const { Then } = require(path.join(process.cwd(), 'node_modules/cucumber'));

const checkEventualUrlFromPOM = require('./checks/checkEventualUrlFromPOM');
// const checkNewWindow = require('./checks/checkNewWindow');
const checkIsOpenedInNewWindow = require('./checks/checkIsOpenedInNewWindow');
// const checkEventualUrl = require('./checks/checkEventualUrl');
const checkUrlContainsString = require('./checks/checkUrlContainsString');
const checkUrl = require('./checks/checkUrl');
// const checkURLPath = require('./checks/checkURLPath');
const checkVisibility = require('./checks/checkVisibility');
const checkElementBorderColour = require('./checks/checkElementBorderColour');
const checkElementColour = require('./checks/checkElementColour');
const checkElementBackgroundColour = require('./checks/checkElementBackgroundColour');
const checkContainsText = require('./checks/checkContainsText');
const checkTitle = require('./checks/checkTitle');
const checkElementExistsNTimes = require('./checks/checkElementExistsNTimes');
const checkElementExists = require('./checks/checkElementExists');
const checkContainsAnyText = require('./checks/checkContainsAnyText');
const checkIsSelected = require('./checks/checkIsSelected');
const checkIsEnabled = require('./checks/checkIsEnabled');
const checkCookieContains = require('./checks/checkCookieContains');
const checkCookieExists = require('./checks/checkCookieExists');
const checkClass = require('./checks/checkClass');
const checkFocus = require('./checks/checkFocus');
const checkInputIsEmpty = require('./checks/checkInputIsEmpty');
const checkInputValue = require('./checks/checkInputValue');
const checkAttribute = require('./checks/checkAttribute');

Then(/^I expect to eventually (be) on the '([^']*)?' page$/, checkEventualUrlFromPOM);
// Then(/^I expect to be on the '([^']*)?' page$/, checkEventualUrlFromPOM);
// Then(/^I expect a new (?:window|tab) has( not)* been opened$/, checkNewWindow);
Then(/^I expect the url '([^']*)?' is opened in a new (?:tab|window)$/, checkIsOpenedInNewWindow);
// Then(/^I expect the url to evenually (be|contain) '([^']*)?'$/, checkEventualUrl);
Then(/^I expect the url to contain '([^']*)?'$/, checkUrlContainsString);
Then(/^I expect the url to( not)* be '([^']*)?'$/, checkUrl);
// Then(/^I expect the path to ( not)* be '([^']*)?'$/, checkURLPath);
Then(/^I expect(?: the)? '([^']*)?' to be (visible|hidden)$/, checkVisibility);
Then(/^I expect the border colour of the '([^']*)?' to be '([^']*)?'$/, checkElementBorderColour);
Then(/^I expect the colour of the '([^']*)?' to be '([^']*)?'$/, checkElementColour);
Then(/^I expect the background colour of the '([^']*)?' to be '([^']*)?'$/, checkElementBackgroundColour);
Then(/^I expect the title to( not)* be '([^']*)?'$/, checkTitle);
Then(/^I expect(?: the)? '([^']*)?' to( not)* appear exactly '([^']*)?' times$/, checkElementExistsNTimes);
Then(/^I expect(?: the)? '([^']*)?' to( not)* exist$/, checkElementExists);
Then(/^I expect(?: the)? '([^']*)?' to( not)* contain the text '([^']*)?'$/, checkContainsText);
Then(/^I expect(?: the)? '([^']*)?' to( not)* contain any text$/, checkContainsAnyText);
Then(/^I expect(?: the)? '([^']*)?' to( not)* be (?:checked|selected)$/, checkIsSelected);
Then(/^I expect(?: the)? '([^']*)?' to( not)* be enabled$/, checkIsEnabled);
Then(/^I expect cookie '([^']*)?' to( not)* contain '([^']*)?'$/, checkCookieContains);
Then(/^I expect cookie '([^']*)?' to( not)* exist$/, checkCookieExists);
Then(/^I expect(?: the)? '([^']*)?' to( not)* have the class '([^']*)?'$/, checkClass);
Then(/^I expect(?: the)? '([^']*)?' to be focused$/, checkFocus);
Then(/^I expect(?: the)? '([^']*)?' to( not)* be empty$/, checkInputIsEmpty);
Then(/^I expect the value of(?: the)? '([^']*)?' to( not)* be '([^']*)?' $/, checkInputValue);
Then(/^I expect(?: the)? '([^']*)?' has an attribute '([^']*)?' with a value of '([^']*)?' $/, checkAttribute);
Then(/^fail step and take screenshot$/, Promise.reject);


