const path = require('path');
const { argv } = require('yargs');

// eslint-disable-next-line
const { When } = require(path.join(process.cwd(), 'node_modules/cucumber'));

const steps = [
  { matcher: "I click(?: the)? 'LOCATOR'", path: './actions/clickElement' },
  { matcher: "I append 'LOCATOR' to 'LOCATOR'", path: './actions/appendInputFieldValue' },
  { matcher: "I set 'LOCATOR' to 'LOCATOR'", path: './actions/setInputFieldValue' },
  { matcher: "I append 'LOCATOR' to react field 'LOCATOR'", path: './actions/appendReactInputFieldValue' },
  { matcher: "I set react field 'LOCATOR' to 'LOCATOR'", path: './actions/setReactInputFieldValue' },
  { matcher: "I submit the(?: form)? 'LOCATOR'", path: './actions/submitForm' },
  { matcher: "I press 'KEY'", path: './actions/pressKey' },
  { matcher: "I clear(?: the)? 'LOCATOR'", path: './actions/clearInputFieldValue' },
  { matcher: "I select the option for select element 'LOCATOR' with the text 'VALUE'", path: './actions/setSelectValueByOptionText' },
];

if (!argv.genFiles) {
  steps.forEach((step) => {
    const matchPattern = "([^']*)?";
    const matcher = step.matcher
      .replace(/PAGENAME/, matchPattern)
      .replace(/URL/, matchPattern)
      .replace(/VALUE/, matchPattern)
      .replace(/KEY/, matchPattern)
      .replace(/LOCATOR/, matchPattern);

    When(new RegExp(`^${matcher}$`), {}, require(step.path));
  });
}

module.exports = steps;