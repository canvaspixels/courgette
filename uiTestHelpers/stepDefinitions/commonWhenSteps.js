const path = require('path');
const { argv } = require('yargs');

const { When } = require(path.join(process.cwd(), 'node_modules/cucumber')); // eslint-disable-line
const placeholders = require(path.join(process.cwd(), 'placeholders')); // eslint-disable-line

const steps = [
  { matcher: "I click(?: the)? 'LOCATOR'", path: './actions/clickElement', code: 'click' },
  { matcher: "I append 'LOCATOR' to 'LOCATOR'", path: './actions/appendInputFieldValue', code: 'append' },
  { matcher: "I set 'LOCATOR' to 'LOCATOR'", path: './actions/setInputFieldValue', code: 'set' },
  { matcher: "I append 'LOCATOR' to react field 'LOCATOR'", path: './actions/appendReactInputFieldValue', code: 'appendreact' },
  { matcher: "I set react field 'LOCATOR' to 'LOCATOR'", path: './actions/setReactInputFieldValue', code: 'setreact' },
  { matcher: "I submit the(?: form)? 'LOCATOR'", path: './actions/submitForm', code: 'submit' },
  { matcher: "I press 'KEY'", path: './actions/pressKey', code: 'key' },
  { matcher: "I clear(?: the)? 'LOCATOR'", path: './actions/clearInputFieldValue', code: 'clear' },
  { matcher: "I select the option for select element 'LOCATOR' with the text 'VALUE'", path: './actions/setSelectValueByOptionText', code: 'option' },
];

if (!argv.genFiles) {
  steps.forEach((step) => {
    const matchPattern = "([^']*)?";
    const matcher = step.matcher
      .replace(new RegExp(`(${placeholders.join('|')})`), matchPattern);

    When(new RegExp(`^${matcher}$`), {}, require(step.path));
  });
}

module.exports = steps;