const path = require('path');
const { argv } = require('yargs');

const { Then } = require(path.join(process.cwd(), 'node_modules/cucumber')); // eslint-disable-line
const placeholders = require('../../placeholders'); // eslint-disable-line

// TODO:
// Then(/^I expect to be on the 'LOCATOR' page$/, setPageObjectThenCheckUrl);
// Then(/^I expect a new (?:window|tab) has( not)* been opened$/, checkNewWindow);
// Then(/^I expect the url to evenually (be|contain) 'URL'$/, checkEventualUrl);
// Then(/^I expect the path to ( not)* be 'URL'$/, checkURLPath);

const steps = [
  {
    matcher: "I expect to be on the 'PAGE_NAME' page",
    path: './checks/setPageObjectThenCheckUrl',
    notes: 'This step does 2 things: it changes the current page object so that any subsequent steps will use locators / sel' +
      'ectors / XPaths from the PAGE_NAME page object, and then asserts the URL from that new page object if it exists.',
    code: 'onpage',
  },
  {
    matcher: "I expect the url to( not)* be 'STRING'",
    path: './checks/checkUrl',
    notes: 'Using this just checks the URL, it does not change the page object so should not be used for end to end testing unless it is the final step',
    code: 'url',
    pageObjectNotRequired: true,
  },
  {
    matcher: "I expect the url to contain 'STRING'",
    path: './checks/checkUrlContainsString',
    notes: 'Using this just checks the URL, it does not change the page object.',
    code: 'urlcontains',
    pageObjectNotRequired: true,
  },
  {
    matcher: "I expect the url 'URL' is opened in a new tab",
    path: './checks/checkIsOpenedInNewWindow',
    code: 'urlnewtab',
    notes: '[Currently not working in FirefoxDriver](https://github.com/canvaspixels/courgette/issues/16)',
    pageObjectNotRequired: true,
  },
  { matcher: "I expect(?: the)? 'LOCATOR' to be (visible)", path: './checks/checkVisibility', code: 'visible' },
  {
    matcher: "I expect(?: the)? 'LOCATOR' inside(?: the)? 'LOCATOR' to be (visible)",
    path: './checks/checkElementInsideElementVisibility',
    code: 'elinsideelvisible',
    notes: 'This currently only works with XPaths',
  },
  { matcher: "I expect(?: the)? 'LOCATOR' to be (hidden)", path: './checks/checkVisibility', code: 'hidden' },
  {
    matcher: "I expect the( (bottom|top|left|right))* border colour of the 'LOCATOR' to be 'STRING'",
    path: './checks/checkElementBorderColour',
    code: 'bordercolour',
    notes: 'Pick a side (bottom, top, left, or right) or remove the expected side.',
  },
  { matcher: "I expect the colour of the 'LOCATOR' to be 'STRING'", path: './checks/checkElementColour', code: 'colour' },
  { matcher: "I expect the background colour of the 'LOCATOR' to be 'STRING'", path: './checks/checkElementBackgroundColour', code: 'backgroundcolour' },
  { matcher: "I expect the title to( not)* be 'STRING'", path: './checks/checkTitle', code: 'title' },
  { matcher: "I expect(?: the)? 'LOCATOR' to (contain) the text 'STRING'", path: './checks/checkContainsText', code: 'containstext' },
  { matcher: "I expect(?: the)? 'LOCATOR' to (not contain) the text 'STRING'", path: './checks/checkContainsText', code: 'notcontainstext' },
  { matcher: "I expect(?: the)? 'LOCATOR' inside(?: the)? 'LOCATOR' to (contain) the text 'STRING'", path: './checks/checkElementInsideElementContainsText', code: 'elinsideelcontainstext' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* contain any text", path: './checks/checkContainsAnyText', code: 'containsanytext' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* appear exactly 'NUMBER' times", path: './checks/checkElementExistsNTimes', code: 'appearexactly' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* exist", path: './checks/checkElementExists', code: 'exists' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* be checked", path: './checks/checkIsSelected', code: 'checked' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* be selected", path: './checks/checkIsSelected', code: 'selected' },
  { matcher: "I expect(?: the)? 'LOCATOR' to be (enabled)", path: './checks/checkIsEnabled', code: 'enabled' },
  { matcher: "I expect(?: the)? 'LOCATOR' to be (disabled)", path: './checks/checkIsEnabled', code: 'disabled' },
  { matcher: "I expect cookie 'COOKIE_NAME' to( not)* contain 'STRING'", path: './checks/checkCookieContains', code: 'cookiecontain', pageObjectNotRequired: true },
  { matcher: "I expect cookie 'COOKIE_NAME' to( not)* exist", path: './checks/checkCookieExists', code: 'cookieexists', pageObjectNotRequired: true },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* have the class 'CLASS_NAME'", path: './checks/checkClass', code: 'classname' },
  { matcher: "I expect(?: the)? 'LOCATOR' to be focused", path: './checks/checkFocus', code: 'focused' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* be empty", path: './checks/checkInputIsEmpty', code: 'empty' },
  {
    matcher: "I expect the value of(?: the)? 'LOCATOR' to( not)* be 'STRING'",
    path: './checks/checkInputValue',
    code: 'value',
    notes: 'Used for getting the value of an input',
  },
  {
    matcher: "I expect the value of(?: the)? 'LOCATOR' inside(?: the)? 'LOCATOR' to( not)* be 'STRING'",
    path: './checks/checkElementInsideElementInputValue',
    code: 'elinsideelvalue',
    notes: 'This currently only works with XPaths',
  },
  { matcher: "I expect(?: the)? 'LOCATOR' has an attribute 'ATTRIBUTE_NAME' with a value of 'VALUE'", path: './checks/checkAttribute', code: 'attribute' },
  { matcher: 'take a screenshot', path: './actions/takeScreenshotWithDefaultName', code: 'screenshot', pageObjectNotRequired: true },
  { matcher: "take a screenshot called 'STRING'", path: './actions/takeScreenshot', code: 'screenshotcalled', pageObjectNotRequired: true },
];

if (!argv.genFiles) {
  steps.forEach((step) => {
    const matchPattern = "([^']*)?";
    const matcher = step.matcher
      .replace(new RegExp(`(${placeholders.join('|')})`, 'g'), matchPattern);

    Then(new RegExp(`^${matcher}$`), {}, require(step.path));
  });
  Then(/^fail step and take screenshot$/, {}, () => Promise.reject(new Error('Failing step and taking screenshot')));
}

steps.push({ matcher: 'fail step and take screenshot' });

module.exports = steps;
