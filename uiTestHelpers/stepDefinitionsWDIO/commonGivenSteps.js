const { argv } = require('yargs');

const { Given } = require('@cucumber/cucumber');
const placeholders = require('../../placeholders'); // eslint-disable-line

// TODO: add url contains
const steps = [
  {
    matcher: "I am on the 'PAGE_NAME' page",
    path: './actions/goToScreen',
    notes: 'PAGE_NAME should match the name of the page object file in your pages directory but use spaces instead of dashes and use lowercase for your page object file names with dash separating (kebab-case). This step definition sets the current page object', // eslint-disable-line max-len
    code: 'onscreen',
  },
  { matcher: "(?:the )?'LOCATOR' is (visible)", path: './checks/checkVisibility', code: 'visible' },
  { matcher: "(?:the )?'LOCATOR' is (hidden)", path: './checks/checkVisibility', code: 'hidden' },
  { matcher: "(?:the )?'LOCATOR' is (enabled)", path: './checks/checkIsEnabled', code: 'enabled' },
  { matcher: "(?:the )?'LOCATOR' is (disabled)", path: './checks/checkIsEnabled', code: 'disabled' },
  { matcher: "(?:the )?'LOCATOR' is( not)* selected", path: './checks/checkIsSelected', code: 'selected' },
  { matcher: "(?:the )?'LOCATOR' is( not)* checked", path: './checks/checkIsSelected', code: 'checked' },
  { matcher: "(?:the )?'LOCATOR' is( not)* on (?:the )?screen", path: './checks/checkElementExists', code: 'existsonscreen' },
  { matcher: "(?:the )?'LOCATOR' (contains) the text 'STRING'", path: './checks/checkContainsText', code: 'containstext' },
  { matcher: "(?:the )?'LOCATOR' (does not contain) the text 'STRING'", path: './checks/checkContainsText', code: 'notcontainstext' },
  { matcher: "(?:the )?'LOCATOR' (contains) any text", path: './checks/checkContainsAnyText', code: 'containsanytext' },
  { matcher: "(?:the )?'LOCATOR' (does not contain) any text", path: './checks/checkContainsAnyText', code: 'notcontainsanytext' },
  { matcher: "(?:the )?'LOCATOR' has an attribute 'ATTRIBUTE_NAME' with a value of 'VALUE'", path: './checks/checkAttribute', code: 'attribute' },
  { matcher: "(?:the )?'LOCATOR' is( not)* empty", path: './checks/checkInputIsEmpty', code: 'empty' },
  { matcher: "the value of(?: the)? 'LOCATOR' is( not)* 'VALUE'", path: './checks/checkInputValue', code: 'value' },
];

if (!argv.genFiles) {
  steps.forEach((step) => {
    const matchPattern = "([^']*)?";
    const matcher = step.matcher
      .replace(new RegExp(`(${placeholders.join('|')})`, 'g'), matchPattern);

    Given(new RegExp(`^${matcher}$`), {}, require(step.path));
    step.regex = new RegExp(`^${matcher}$`); // eslint-disable-line no-param-reassign
  });
}

module.exports = steps;
