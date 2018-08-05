const path = require('path');
const { argv } = require('yargs');

// eslint-disable-next-line
const { Then } = require(path.join(process.cwd(), 'node_modules/cucumber'));

// TODO:
// Then(/^I expect to be on the 'LOCATOR' page$/, checkEventualUrlFromPOM);
// Then(/^I expect a new (?:window|tab) has( not)* been opened$/, checkNewWindow);
// Then(/^I expect the url to evenually (be|contain) 'LOCATOR'$/, checkEventualUrl);
// Then(/^I expect the path to ( not)* be 'LOCATOR'$/, checkURLPath);

const steps = [
  { matcher: "I expect to eventually be on the 'PAGENAME' page", path: './checks/checkEventualUrlFromPOM',
    notes: 'Using this changes the page object to the PAGENAME so any subsequent steps in that scenario will be pointing to that page' },
  { matcher: "I expect the url 'URL' is opened in a new (?:tab)", path: './checks/checkIsOpenedInNewWindow' },
  { matcher: "I expect the url 'URL' is opened in a new (?:window)", path: './checks/checkIsOpenedInNewWindow' },
  { matcher: "I expect the url to contain 'STRING'", path: './checks/checkUrlContainsString' },
  { matcher: "I expect the url to( not)* be 'STRING'", path: './checks/checkUrl' },
  { matcher: "I expect(?: the)? 'LOCATOR' to be (visible)", path: './checks/checkVisibility' },
  { matcher: "I expect(?: the)? 'LOCATOR' to be (hidden)", path: './checks/checkVisibility' },
  { matcher: "I expect the border colour of the 'LOCATOR' to be 'STRING'", path: './checks/checkElementBorderColour' },
  { matcher: "I expect the colour of the 'LOCATOR' to be 'STRING'", path: './checks/checkElementColour' },
  { matcher: "I expect the background colour of the 'LOCATOR' to be 'STRING'", path: './checks/checkElementBackgroundColour' },
  { matcher: "I expect the title to( not)* be 'STRING'", path: './checks/checkContainsText' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* appear exactly 'NUMBER' times", path: './checks/checkTitle' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* exist", path: './checks/checkElementExistsNTimes' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* contain the text 'STRING'", path: './checks/checkElementExists' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* contain any text", path: './checks/checkContainsAnyText' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* be (?:checked)", path: './checks/checkIsSelected' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* be (?:selected)", path: './checks/checkIsSelected' },
  { matcher: "I expect(?: the)? 'LOCATOR' to be (enabled)", path: './checks/checkIsEnabled' },
  { matcher: "I expect(?: the)? 'LOCATOR' to be (disabled)", path: './checks/checkIsEnabled' },
  { matcher: "I expect cookie 'LOCATOR' to( not)* contain 'STRING'", path: './checks/checkCookieContains' },
  { matcher: "I expect cookie 'LOCATOR' to( not)* exist", path: './checks/checkCookieExists' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* have the class 'CLASS_NAME'", path: './checks/checkClass' },
  { matcher: "I expect(?: the)? 'LOCATOR' to be focused", path: './checks/checkFocus' },
  { matcher: "I expect(?: the)? 'LOCATOR' to( not)* be empty", path: './checks/checkInputIsEmpty' },
  { matcher: "I expect the value of(?: the)? 'LOCATOR' to( not)* be 'STRING' ", path: './checks/checkInputValue' },
  { matcher: "I expect(?: the)? 'LOCATOR' has an attribute 'ATTRIBUTE_NAME' with a value of 'VALUE' ", path: './checks/checkAttribute' },
];

if (!argv.genFiles) {
  steps.forEach((step) => {
    const matchPattern = "([^']*)?";
    const matcher = step.matcher
      .replace(/PAGENAME/, matchPattern)
      .replace(/URL/, matchPattern)
      .replace(/ATTRIBUTE_NAME/, matchPattern)
      .replace(/CLASS_NAME/, matchPattern)
      .replace(/VALUE/, matchPattern)
      .replace(/KEY/, matchPattern)
      .replace(/NUMBER/, matchPattern)
      .replace(/LOCATOR/, matchPattern);

    Then(new RegExp(`^${matcher}$`), {}, require(step.path));
  });
  Then(/^fail step and take screenshot$/, {}, Promise.reject);
}

steps.push({ matcher: "fail step and take screenshot" });

module.exports = steps;
