const path = require('path');
const { argv } = require('yargs');

const { When } = require(path.join(process.cwd(), 'node_modules/cucumber')); // eslint-disable-line
const placeholders = require('../../placeholders'); // eslint-disable-line

const steps = [
  { matcher: "I click(?: the)? 'LOCATOR'", path: './actions/clickElement', code: 'click' },
  { matcher: "I append 'STRING' to 'LOCATOR'", path: './actions/appendInputFieldValue', code: 'append' },
  // { matcher: "I set select 'LOCATOR' to 'STRING'", path: './actions/setSelectFieldValue', code: 'set' },
  { matcher: "I set 'LOCATOR' to 'STRING'", path: './actions/setInputFieldValue', code: 'set' },
  {
    matcher: "I append 'STRING' to react field 'LOCATOR'",
    path: './actions/appendReactInputFieldValue',
    code: 'appendreact',
    notes: 'Sets the value to the input then fires React’s version of the onChange event, so that any actions fire',
  },
  {
    matcher: "I set react field 'LOCATOR' to 'STRING'", path: './actions/setReactInputFieldValue', code: 'setreact', notes: 'Similar to append in react above',
  },
  { matcher: "I submit the(?: form)? 'LOCATOR'", path: './actions/submitForm', code: 'submit', notes: '[This only works in ChromeDriver](https://github.com/SeleniumHQ/selenium/issues/4359)' },
  {
    matcher: "I press 'KEY'",
    path: './actions/pressKey',
    code: 'key',
    notes: '[See list of possible keys](https://gist.github.com/canvaspixels/a5793fe712743dda9216eef06cc96022) - [This only works in ChromeDriver](https://github.com/canvaspixels/cucumber-protractor/issues/16)',
  },
  { matcher: "I clear(?: the)? 'LOCATOR'", path: './actions/clearInputFieldValue', code: 'clear' },
  { matcher: "I select the option for select element 'LOCATOR' with the text 'VALUE'", path: './actions/setSelectValueByOptionText', code: 'option' },
];

if (!argv.genFiles) {
  steps.forEach((step) => {
    const matchPattern = "([^']*)?";
    const matcher = step.matcher
      .replace(new RegExp(`(${placeholders.join('|')})`, 'g'), matchPattern);

    When(new RegExp(`^${matcher}$`), {}, require(step.path));
  });
}

module.exports = steps;
