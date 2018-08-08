const path = require('path');
const { argv } = require('yargs');

const { Given } = require(path.join(process.cwd(), 'node_modules/cucumber')); // eslint-disable-line
const placeholders = require(path.join(process.cwd(), 'placeholders')); // eslint-disable-line

// TODO: add url contains
const steps = [
  { matcher: "I go to the 'PAGE_NAME' page", path: './actions/goToPage',
    notes: 'PAGE_NAME should match the name of the page object file in your pages directory but use spaces instead of dashes and use lowercase for your page object file names with dash separating (kebab-case). This step definition sets the current page object', code: 'goto' },
  { matcher: "the page url is( not)* 'URL'", path: './checks/checkUrl', code: 'pageurl' },
  { matcher: "animations are disabled", path: './actions/disableAnimations' },
  { matcher: "(?:the )?'LOCATOR' is (visible)", path: './checks/checkVisibility', code: 'visible' },
  { matcher: "(?:the )?'LOCATOR' is (hidden)", path: './checks/checkVisibility', code: 'hidden' },
  { matcher: "(?:the )?'LOCATOR' is (enabled)", path: './checks/checkIsEnabled', code: 'enabled' },
  { matcher: "(?:the )?'LOCATOR' is (disabled)", path: './checks/checkIsEnabled', code: 'disabled' },
  { matcher: "(?:the )?'LOCATOR' is( not)* selected", path: './checks/checkIsSelected', code: 'selected' },
  { matcher: "(?:the )?'LOCATOR' is( not)* checked", path: './checks/checkIsSelected', code: 'checked' },
  { matcher: "(?:the )?'LOCATOR' is( not)* on the page", path: './checks/checkElementExists', code: 'exists' },
  { matcher: "the title is( not)* 'STRING'", path: './checks/checkTitle', code: 'title' },
  { matcher: "(?:the )?'LOCATOR' (contains) the text 'STRING'", path: './checks/checkContainsText', code: 'containstext' },
  { matcher: "(?:the )?'LOCATOR' (does not contain) the text 'STRING'", path: './checks/checkContainsText', code: 'notcontainstext' },
  { matcher: "(?:the )?'LOCATOR' (contains) any text", path: './checks/checkContainsAnyText', code: 'containsanytext' },
  { matcher: "(?:the )?'LOCATOR' (does not contain) any text", path: './checks/checkContainsAnyText', code:'notcontainsanytext' },
  { matcher: "(?:the )?'LOCATOR' has an attribute 'ATTRIBUTE_NAME' with a value of 'VALUE'", path: './checks/checkAttribute', code:'attribute' },
  { matcher: "(?:the )?'LOCATOR' is( not)* empty", path: './checks/checkInputIsEmpty', code: 'empty' },
  { matcher: "the value of(?: the)? 'LOCATOR' is( not)* 'VALUE'", path: './checks/checkInputValue', code: 'value' },
  { matcher: "I set the cookie 'COOKIE_NAME' with value 'VALUE'", path: './actions/setCookie', code: 'setcookie' },
  { matcher: "the cookie 'COOKIE_NAME' is( not)* set to 'VALUE'", path: './checks/checkCookieContent', code: 'cookie' },
  { matcher: "the cookie 'COOKIE_NAME' is( not)* set", path: './checks/checkCookieExists', code: 'cookieset' },
];

if (!argv.genFiles) {
  steps.forEach((step) => {
    const matchPattern = "([^']*)?";
    const matcher = step.matcher
      .replace(new RegExp(`(${placeholders.join('|')})`, 'g'), matchPattern);

    Given(new RegExp(`^${matcher}$`), {}, require(step.path));
  });
}

module.exports = steps;