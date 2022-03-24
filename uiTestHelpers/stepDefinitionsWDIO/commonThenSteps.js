const { argv } = require('yargs');

const { Then } = require('@cucumber/cucumber');
const placeholders = require('../../placeholders'); // eslint-disable-line

// TODO:
// browser related step definitions
// Then(/^I expect to be on the 'LOCATOR' page$/, setPageObjectThenCheckUrl);
// Then(/^I expect a new (?:window|tab) has( not)* been opened$/, checkNewWindow);
// Then(/^I expect the url to evenually (be|contain) 'URL'$/, checkEventualUrl);
// Then(/^I expect the path to ( not)* be 'URL'$/, checkURLPath);

const steps = [
  {
    matcher: "I expect to be on the 'PAGE_NAME' screen",
    path: './checks/setPageObjectThenCheckScreenExists',
    code: 'onscreen',
    notes: 'This step does 2 things: it changes the current page object so that any subsequent steps will use sel' +
      'ectors from the PAGE_NAME page object, and then asserts that the page exists.',
  },
  {
    matcher: "I expect to be on the 'PAGE_NAME' page",
    path: './checks/setPageObjectThenCheckScreenExists',
    code: 'onscreendeprecated',
    notes: 'deprecated',
  },
  {
    matcher: "I set the page object to 'PAGE_NAME' screen",
    path: './actions/setPageObject',
    notes: 'This changes the current page object so that any subsequent steps will use locators from the PAGE_NAME page object',
    code: 'setpageobjmobile',
  },
  { matcher: "I expect(?: the)? 'LOCATOR' to be (visible)", path: './checks/checkVisibility', code: 'visible' },
  {
    matcher: "I expect(?: the)? 'LOCATOR' inside(?: the)? 'LOCATOR' to be (visible)",
    path: './checks/checkElementInsideElementVisibility',
    code: 'elinsideelvisible',
  },
  { matcher: "I expect(?: the)? 'LOCATOR' to be (hidden)", path: './checks/checkVisibility', code: 'hidden' },
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
  },
  { matcher: "I expect(?: the)? 'LOCATOR' has an attribute 'ATTRIBUTE_NAME' with a value of 'VALUE'", path: './checks/checkAttribute', code: 'attribute' },
  {
    matcher: 'take a screenshot', path: './actions/takeScreenshotWithDefaultName', code: 'screenshot', pageObjectNotRequired: true,
  },
  {
    matcher: "take a screenshot called 'STRING'", path: './actions/takeScreenshot', code: 'screenshotcalled', pageObjectNotRequired: true,
  },
];

if (!argv.genFiles) {
  steps.forEach((step) => {
    const matchPattern = "([^']*)?";
    const matcher = step.matcher
      .replace(new RegExp(`(${placeholders.join('|')})`, 'g'), matchPattern);

    Then(new RegExp(`^${matcher}$`), {}, require(step.path));
    step.regex = new RegExp(`^${matcher}$`); // eslint-disable-line no-param-reassign
  });
  Then(/^fail step and take screenshot$/, {}, () => Promise.reject(new Error('Failing step and taking screenshot')));
}

steps.push({ matcher: 'fail step and take screenshot' });

module.exports = steps;
