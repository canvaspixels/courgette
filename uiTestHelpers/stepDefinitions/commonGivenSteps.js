const path = require('path');
const { argv } = require('yargs');

// eslint-disable-next-line
const { Given } = require(path.join(process.cwd(), 'node_modules/cucumber'));

// TODO: add url contains
const steps = [
  { matcher: "I go to the 'PAGENAME' page", path: './actions/goToPage',
    notes: 'PAGENAME should match the name of the page object file in your pages directory and the first argument to createPage in that same file. This step definition sets the current page object' },
  { matcher: "the page url is( not)* 'URL'", path: './checks/checkUrl' },
  { matcher: "animations are disabled", path: './actions/disableAnimations' },
  { matcher: "(?:the)? 'LOCATOR' is (visible)", path: './checks/checkVisibility' },
  { matcher: "(?:the)? 'LOCATOR' is (hidden)", path: './checks/checkVisibility' },
  { matcher: "(?:the)? 'LOCATOR' is (enabled)", path: './checks/checkIsEnabled' },
  { matcher: "(?:the)? 'LOCATOR' is (disabled)", path: './checks/checkIsEnabled' },
  { matcher: "(?:the)? 'LOCATOR' is( not)* (?:selected)", path: './checks/checkIsSelected' },
  { matcher: "(?:the)? 'LOCATOR' is( not)* (?:checked)", path: './checks/checkIsSelected' },
  { matcher: "(?:the)? 'LOCATOR' is( not)* on the page", path: './checks/checkElementExists' },
  { matcher: "the title is( not)* 'LOCATOR'", path: './checks/checkTitle' },
  { matcher: "(?:the)? 'LOCATOR' (contains) the text 'LOCATOR'", path: './checks/checkContainsText' },
  { matcher: "(?:the)? 'LOCATOR' (does not contain) the text 'LOCATOR'", path: './checks/checkContainsText' },
  { matcher: "(?:the)? 'LOCATOR' (contains) any text", path: './checks/checkContainsAnyText' },
  { matcher: "(?:the)? 'LOCATOR' (does not contain) any text", path: './checks/checkContainsAnyText' },
  { matcher: "(?:the)? 'LOCATOR' has an attribute 'ATTRIBUTE_NAME' with a value of 'VALUE'", path: './checks/checkAttribute' },
  { matcher: "(?:the)? 'LOCATOR' is( not)* empty", path: './checks/checkInputIsEmpty' },
  { matcher: "the value of(?: the)? 'LOCATOR' is( not)* 'VALUE'", path: './checks/checkInputValue' },
  { matcher: "I set the cookie 'LOCATOR' with value 'VALUE'", path: './actions/setCookie' },
  { matcher: "the cookie 'LOCATOR' is( not)* set to 'VALUE'", path: './checks/checkCookieContent' },
  { matcher: "the cookie 'LOCATOR' is( not)* set", path: './checks/checkCookieExists' },
];

if (!argv.genFiles) {
  steps.forEach((step) => {
    const matchPattern = "([^']*)?";
    const matcher = step.matcher
      .replace(/PAGENAME/, matchPattern)
      .replace(/URL/, matchPattern)
      .replace(/ATTRIBUTE_NAME/, matchPattern)
      .replace(/VALUE/, matchPattern)
      .replace(/KEY/, matchPattern)
      .replace(/LOCATOR/, matchPattern);

    Given(new RegExp(`^${matcher}$`), {}, require(step.path));
  });
}

module.exports = steps;