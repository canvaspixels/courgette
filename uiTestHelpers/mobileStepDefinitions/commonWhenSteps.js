const { argv } = require('yargs');

const { When } = require('cucumber');
const placeholders = require('../../placeholders'); // eslint-disable-line

const steps = [
  {
    matcher: "I wait 'VALUE' seconds?", path: './actions/wait', code: 'wait', pageObjectNotRequired: true, notes: 'singular or plural works (second or seconds)',
  },
  // {
  //   matcher: "I set the file upload 'VALUE' to(?: the)? element with selector 'SELECTOR'", path: './actions/uploadFileSelector', code: 'uploadfileselector', pageObjectNotRequired: true,
  // },
  // {
  //   matcher: "I click(?: the)?(?: 'NTH')? element with the text 'VALUE'", path: './actions/clickElementWithText', code: 'clickelwithtext', pageObjectNotRequired: true,
  // },
  // {
  //   matcher: "I click(?: the)?(?: 'NTH')? element that contains the text 'VALUE'", path: './actions/clickElementThatContainsText', code: 'clickelcontainstext', pageObjectNotRequired: true,
  // },
  // { matcher: "I wait for(?: the)? 'LOCATOR' to( not)* exist", path: './actions/waitForElement', code: 'waitforelement' },
  // {
  //   matcher: "I set the file upload 'VALUE' to(?: the)? 'LOCATOR'", path: './actions/uploadFile', code: 'uploadfile',
  // },
  { matcher: "I tap(?: the)? 'LOCATOR'", path: './actions/tapElement', code: 'tap' },
  { matcher: "I long press(?: the)? 'LOCATOR'", path: './actions/longPressElement', code: 'longpress' },
  { matcher: 'I press the back button', path: './actions/goBack', code: 'mobileback' },
  // {
  //   matcher: "I click(?: the)? 'LOCATOR' inside(?: the)? 'LOCATOR'", path: './actions/clickElementInsideElement', code: 'clickelinsideel', notes: 'This currently only works with XPaths',
  // },
  // { matcher: "I append 'STRING' to 'LOCATOR'", path: './actions/appendInputFieldValue', code: 'append' },
  // // { matcher: "I set select 'LOCATOR' to 'STRING'", path: './actions/setSelectFieldValue', code: 'set' },
  { matcher: "I set 'LOCATOR' to 'STRING'", path: './actions/setInputFieldValue', code: 'mobileset' },
  // {
  //   matcher: "I set(?: the)? 'LOCATOR' inside(?: the)? 'LOCATOR' to 'STRING'", path: './actions/setElementInsideElement', code: 'setelinsideel', notes: 'This currently only works with XPaths',
  // },
  // {
  //   matcher: "I append 'STRING' to react field 'LOCATOR'",
  //   path: './actions/appendReactInputFieldValue',
  //   code: 'appendreact',
  //   notes: 'Sets the value to the input then fires React’s version of the onChange event, so that any actions fire',
  // },
  // {
  //   matcher: "I set react field 'LOCATOR' to 'STRING'", path: './actions/setReactInputFieldValue', code: 'setreact', notes: 'Similar to append in react above',
  // },
  // {
  //   matcher: "I submit the(?: form)? 'LOCATOR'", path: './actions/submitForm', code: 'submit', notes: '[This only works in ChromeDriver](https://github.com/SeleniumHQ/selenium/issues/4359)',
  // },
  // { matcher: "I clear(?: the)? 'LOCATOR'", path: './actions/clearInputFieldValue', code: 'clear' },
  // { matcher: "I select the option for select element 'LOCATOR' with the text 'VALUE'", path: './actions/setSelectValueByOptionText', code: 'option' },
];

if (!argv.genFiles) {
  steps.forEach((step) => {
    const matchPattern = "([^']*)?";
    const matcher = step.matcher
      .replace(new RegExp(`(${placeholders.join('|')})`, 'g'), matchPattern);

    When(new RegExp(`^${matcher}$`), {}, require(step.path));
    step.regex = new RegExp(`^${matcher}$`); // eslint-disable-line no-param-reassign
  });
}

module.exports = steps;
