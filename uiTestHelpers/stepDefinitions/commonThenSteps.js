const path = require('path');
const { argv } = require('yargs');

const { Then } = require(path.join(process.cwd(), 'node_modules/cucumber')); // eslint-disable-line
const placeholders = require(path.join(process.cwd(), 'placeholders')); // eslint-disable-line

// TODO:
// Then(/^I expect to be on the 'LOCATOR' page$/, checkEventualUrlFromPOM);
// Then(/^I expect a new (?:window|tab) has( not)* been opened$/, checkNewWindow);
// Then(/^I expect the url to evenually (be|contain) 'LOCATOR'$/, checkEventualUrl);
// Then(/^I expect the path to ( not)* be 'LOCATOR'$/, checkURLPath);

const steps = [
  { matcher: "I expect to eventually be on the 'PAGE_NAME' page", path: './checks/checkEventualUrlFromPOM',
    notes: 'Using this changes the page object to the PAGE_NAME so any subsequent steps in that scenario will be pointing to that page', code: 'eventuallyonpage' },
  { matcher: "I expect the url to contain 'STRING'", path: './checks/checkUrlContainsString', code: 'urlcontains' },
  { matcher: "I expect the url to( not)* be 'STRING'", path: './checks/checkUrl', code: 'url' },
  { matcher: "I expect the url 'URL' is opened in a new tab", path: './checks/checkIsOpenedInNewWindow', code: 'urlnewtab' },
  { matcher: "I expect(?: the)? 'LOCATOR' to be (visible)", path: './checks/checkVisibility', code: 'visible' },
  { matcher: "I expect(?: the)? 'LOCATOR' to be (hidden)", path: './checks/checkVisibility', code: 'hidden' },
  { matcher: "I expect the( (bottom|top|left|right))* border colour of the 'LOCATOR' to be 'STRING'", path: './checks/checkElementBorderColour', code: 'bordercolour' },
  { matcher: "I expect the colour of the 'LOCATOR' to be 'STRING'", path: './checks/checkElementColour', code: 'colour' },
  { matcher: "I expect the background colour of the 'LOCATOR' to be 'STRING'", path: './checks/checkElementBackgroundColour', code: 'backgroundcolour' },
  { matcher: "I expect the title to( not)* be 'STRING'", path: './checks/checkTitle', code: 'title' },
  { matcher: "I expect(?: the)? 'LOCATOR' to (contain) the text 'STRING'", path: './checks/checkContainsText', code: 'containstext' },
  { matcher: "I expect(?: the)? 'LOCATOR' to (not contain) the text 'STRING'", path: './checks/checkContainsText', code: 'notcontainstext' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* contain any text", path: './checks/checkContainsAnyText', code: 'containsanytext' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* appear exactly 'NUMBER' times", path: './checks/checkElementExistsNTimes', code: 'appearexactly' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* exist", path: './checks/checkElementExists', code: 'exists' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* be checked", path: './checks/checkIsSelected', code: 'checked' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* be selected", path: './checks/checkIsSelected', code: 'selected' },
  { matcher: "I expect(?: the)? 'LOCATOR' to be (enabled)", path: './checks/checkIsEnabled', code: 'enabled' },
  { matcher: "I expect(?: the)? 'LOCATOR' to be (disabled)", path: './checks/checkIsEnabled', code: 'disabled' },
  { matcher: "I expect cookie 'COOKIE_NAME' to( not)* contain 'STRING'", path: './checks/checkCookieContains', code: 'cookiecontain' },
  { matcher: "I expect cookie 'COOKIE_NAME' to( not)* exist", path: './checks/checkCookieExists', code: 'cookieexists' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* have the class 'CLASS_NAME'", path: './checks/checkClass', code: 'classname' },
  { matcher: "I expect(?: the)? 'LOCATOR' to be focused", path: './checks/checkFocus', code: 'focused' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* be empty", path: './checks/checkInputIsEmpty', code: 'empty' },
  { matcher: "I expect the value of(?: the)? 'LOCATOR' to( not)* be 'STRING'", path: './checks/checkInputValue', code: 'value' },
  { matcher: "I expect(?: the)? 'LOCATOR' has an attribute 'ATTRIBUTE_NAME' with a value of 'VALUE'", path: './checks/checkAttribute', code: 'attribute' },
];

if (!argv.genFiles) {
  steps.forEach((step) => {
    const matchPattern = "([^']*)?";
    const matcher = step.matcher
      .replace(new RegExp(`(${placeholders.join('|')})`, 'g'), matchPattern);

    Then(new RegExp(`^${matcher}$`), {}, require(step.path));
  });
  Then(/^fail step and take screenshot$/, {}, () => Promise.reject('Failing step and taking screenshot'));
}

steps.push({ matcher: "fail step and take screenshot" });

module.exports = steps;
