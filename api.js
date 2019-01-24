const appendInputFieldValue = require('./uiTestHelpers/stepDefinitions/actions/appendInputFieldValue');
const appendReactInputFieldValue = require('./uiTestHelpers/stepDefinitions/actions/appendReactInputFieldValue');
const clearInputFieldValue = require('./uiTestHelpers/stepDefinitions/actions/clearInputFieldValue');
const clickElement = require('./uiTestHelpers/stepDefinitions/actions/clickElement');
const clickElementWithText = require('./uiTestHelpers/stepDefinitions/actions/clickElementWithText');
const clickElementThatContainsText = require('./uiTestHelpers/stepDefinitions/actions/clickElementThatContainsText');
const clickElementInsideElement = require('./uiTestHelpers/stepDefinitions/actions/clickElementInsideElement');
const disableAnimations = require('./uiTestHelpers/stepDefinitions/actions/disableAnimations');
const goToPage = require('./uiTestHelpers/stepDefinitions/actions/goToPage');
const goToURL = require('./uiTestHelpers/stepDefinitions/actions/goToURL');
const pressKey = require('./uiTestHelpers/stepDefinitions/actions/pressKey');
const setCookie = require('./uiTestHelpers/stepDefinitions/actions/setCookie');
const setInputFieldValue = require('./uiTestHelpers/stepDefinitions/actions/setInputFieldValue');
const setReactInputFieldValue = require('./uiTestHelpers/stepDefinitions/actions/setReactInputFieldValue');
const setSelectValueByOptionText = require('./uiTestHelpers/stepDefinitions/actions/setSelectValueByOptionText');
const submitForm = require('./uiTestHelpers/stepDefinitions/actions/submitForm');
const checkAttribute = require('./uiTestHelpers/stepDefinitions/checks/checkAttribute');
const checkClass = require('./uiTestHelpers/stepDefinitions/checks/checkClass');
const checkColour = require('./uiTestHelpers/stepDefinitions/checks/checkColour');
const checkContainsAnyTextImport = require('./uiTestHelpers/stepDefinitions/checks/checkContainsAnyText');
const checkContainsTextImport = require('./uiTestHelpers/stepDefinitions/checks/checkContainsText');
const checkCookieContainsImport = require('./uiTestHelpers/stepDefinitions/checks/checkCookieContains');
const checkCookieContentImport = require('./uiTestHelpers/stepDefinitions/checks/checkCookieContent');
const checkCookieExistsImport = require('./uiTestHelpers/stepDefinitions/checks/checkCookieExists');
const checkElementBackgroundColour = require('./uiTestHelpers/stepDefinitions/checks/checkElementBackgroundColour');
const checkElementBorderColour = require('./uiTestHelpers/stepDefinitions/checks/checkElementBorderColour');
const checkElementColour = require('./uiTestHelpers/stepDefinitions/checks/checkElementColour');
const checkElementExistsImport = require('./uiTestHelpers/stepDefinitions/checks/checkElementExists');
const checkElementExistsNTimesImport = require('./uiTestHelpers/stepDefinitions/checks/checkElementExistsNTimes');
const setPageObjectThenCheckUrl = require('./uiTestHelpers/stepDefinitions/checks/setPageObjectThenCheckUrl');
const checkFocus = require('./uiTestHelpers/stepDefinitions/checks/checkFocus');
const checkInputIsEmptyImport = require('./uiTestHelpers/stepDefinitions/checks/checkInputIsEmpty');
const checkInputValueImport = require('./uiTestHelpers/stepDefinitions/checks/checkInputValue');
const checkIsEnabledImport = require('./uiTestHelpers/stepDefinitions/checks/checkIsEnabled');
const checkIsOpenedInNewWindow = require('./uiTestHelpers/stepDefinitions/checks/checkIsOpenedInNewWindow');
const checkIsSelectedImport = require('./uiTestHelpers/stepDefinitions/checks/checkIsSelected');
const checkTitleImport = require('./uiTestHelpers/stepDefinitions/checks/checkTitle');
const checkUrl = require('./uiTestHelpers/stepDefinitions/checks/checkUrl');
const checkUrlContainsString = require('./uiTestHelpers/stepDefinitions/checks/checkUrlContainsString');
const checkVisibility = require('./uiTestHelpers/stepDefinitions/checks/checkVisibility');

const pageObjectsNotRequired = [
  {
    methodName: 'setCookie',
    method: setCookie,
    methodArgs: ['name', 'value'],
  },
  {
    methodName: 'goToURL',
    method: goToURL,
    methodArgs: ['url'],
  },
  {
    methodName: 'pressKey',
    method: pressKey,
    methodArgs: ['key'],
  },
  {
    methodName: 'disableAnimations',
    method: disableAnimations,
    methodArgs: [],
  },
  {
    methodName: 'clickElementWithText',
    method: clickElementWithText,
    methodArgs: ['text'],
  },
  {
    methodName: 'clickElementThatContainsText',
    method: clickElementThatContainsText,
    methodArgs: ['text'],
  },
  {
    methodName: 'checkTitle',
    method: function checkTitle(expectedTitle) {
      return checkTitleImport.call(this, false, expectedTitle);
    },
    methodArgs: ['expectedTitle'],
  },
  {
    methodName: 'checkTitleIsNot',
    method: function checkTitleIsNot(expectedTitle) {
      return checkTitleImport.call(this, true, expectedTitle);
    },
    methodArgs: ['expectedTitle'],
  },
  {
    methodName: 'checkUrlIs',
    method: function checkUrlIs(url) {
      return checkUrl.call(this, false, url);
    },
    methodArgs: ['url'],
  },
  {
    methodName: 'checkUrlIsNot',
    method: function checkUrlIsNot(url) {
      return checkUrl.call(this, true, url);
    },
    methodArgs: ['url'],
  },
  {
    methodName: 'checkUrlContainsString',
    method: checkUrlContainsString,
    methodArgs: ['expectedUrlPart'],
  },
  {
    methodName: 'checkCookieContains',
    method: function checkCookieContains(cookieName, expectedValue) {
      return checkCookieContainsImport.call(this, cookieName, false, expectedValue);
    },
    methodArgs: ['cookieName', 'expectedValue'],
  },
  {
    methodName: 'checkCookieDoesNotContain',
    method: function checkCookieDoesNotContain(cookieName, expectedValue) {
      return checkCookieContainsImport.call(this, cookieName, true, expectedValue);
    },
    methodArgs: ['cookieName', 'expectedValue'],
  },
  {
    methodName: 'checkCookieContent',
    method: function checkCookieContent(cookieName, expectedValue) {
      return checkCookieContentImport.call(this, cookieName, false, expectedValue);
    },
    methodArgs: ['cookieName', 'expectedValue'],
  },
  {
    methodName: 'checkCookieValueIsNot',
    method: function checkCookieValueIsNot(cookieName, expectedValue) {
      return checkCookieContentImport.call(this, cookieName, true, expectedValue);
    },
    methodArgs: ['cookieName', 'expectedValue'],
  },
  {
    methodName: 'checkCookieExists',
    method: function checkCookieExists(cookieName) {
      return checkCookieExistsImport.call(this, cookieName, false);
    },
    methodArgs: ['cookieName'],
  },
  {
    methodName: 'checkCookieDoesNotExist',
    method: function checkCookieDoesNotExist(cookieName) {
      return checkCookieExistsImport.call(this, cookieName, true);
    },
    methodArgs: ['cookieName'],
  },
  {
    methodName: 'checkIsOpenedInNewWindow',
    method: checkIsOpenedInNewWindow,
    methodArgs: ['href'],
  },
];

const pageObjectsRequired = [
  {
    methodName: 'goToPage',
    method: goToPage,
    methodArgs: ['pageName'],
  },
  {
    methodName: 'appendInputFieldValue',
    method: appendInputFieldValue,
    methodArgs: ['value', 'locatorKey'],
  },
  {
    methodName: 'appendReactInputFieldValue',
    method: appendReactInputFieldValue,
    methodArgs: ['text', 'locatorKey'],
  },
  {
    methodName: 'clearInputFieldValue',
    method: clearInputFieldValue,
    methodArgs: ['locatorKey'],
  },
  {
    methodName: 'clickElement',
    method: clickElement,
    methodArgs: ['locatorKey'],
  },
  {
    methodName: 'clickElementInsideElement',
    method: clickElementInsideElement,
    methodArgs: ['locatorKey'],
  },
  {
    methodName: 'setInputFieldValue',
    method: setInputFieldValue,
    methodArgs: ['locatorKey', 'value'],
  },
  {
    methodName: 'setReactInputFieldValue',
    method: setReactInputFieldValue,
    methodArgs: ['locatorKey', 'text'],
  },
  {
    methodName: 'setSelectValueByOptionText',
    method: setSelectValueByOptionText,
    methodArgs: ['locatorKey', 'itemText'],
  },
  {
    methodName: 'submitForm',
    method: submitForm,
    methodArgs: ['locatorKey'],
    notes: '[This only works in ChromeDriver](https://github.com/SeleniumHQ/selenium/issues/4359)',
  },
  {
    methodName: 'checkAttribute',
    method: checkAttribute,
    methodArgs: ['locatorKey', 'expectedAttribute', 'expectedValue'],
  },
  {
    methodName: 'hasClass',
    method: function hasClass(locatorKey, className) {
      return checkClass.call(this, locatorKey, false, className);
    },
    methodArgs: ['locatorKey', 'className'],
  },
  {
    methodName: 'doesNotHaveClass',
    method: function doesNotHaveClass(locatorKey, className) {
      return checkClass.call(this, locatorKey, true, className);
    },
    methodArgs: ['locatorKey', 'className'],
  },
  {
    methodName: 'checkColour',
    method: checkColour,
    methodArgs: ['locatorKey', 'expectedColour', 'property'],
  },
  {
    methodName: 'checkContainsAnyText',
    method: function checkContainsAnyText(locatorKey) {
      return checkContainsAnyTextImport.call(this, locatorKey, false);
    },
    methodArgs: ['locatorKey'],
  },
  {
    methodName: 'checkDoesNotContainAnyText',
    method: function checkDoesNotContainAnyText(locatorKey) {
      return checkContainsAnyTextImport.call(this, locatorKey, true);
    },
    methodArgs: ['locatorKey'],
  },
  {
    methodName: 'checkContainsText',
    method: function checkContainsText(locatorKey, expectedText) {
      return checkContainsTextImport.call(this, locatorKey, true, expectedText);
    },
    methodArgs: ['locatorKey', 'expectedText'],
  },
  {
    methodName: 'checkDoesNotContainText',
    method: function checkDoesNotContainText(locatorKey, expectedText) {
      return checkContainsTextImport.call(this, locatorKey, false, expectedText);
    },
    methodArgs: ['locatorKey', 'expectedText'],
  },
  {
    methodName: 'checkElementBackgroundColour',
    method: checkElementBackgroundColour,
    methodArgs: ['locatorKey', 'expectedColour'],
  },
  {
    methodName: 'checkElementBorderColour',
    method: checkElementBorderColour,
    methodArgs: ['position', 'locatorKey', 'expectedColour'],
  },
  {
    methodName: 'checkElementColour',
    method: checkElementColour,
    methodArgs: ['locatorKey', 'expectedColour'],
  },
  {
    methodName: 'checkElementExists',
    method: function checkElementExists(locatorKey) {
      return checkElementExistsImport.call(this, locatorKey, false);
    },
    methodArgs: ['locatorKey'],
  },
  {
    methodName: 'checkElementDoesNotExist',
    method: function checkElementDoesNotExist(locatorKey) {
      return checkElementExistsImport.call(this, locatorKey, true);
    },
    methodArgs: ['locatorKey'],
  },
  {
    methodName: 'checkElementExistsNTimes',
    method: function checkElementExistsNTimes(locatorKey, count) {
      return checkElementExistsNTimesImport.call(this, locatorKey, false, count);
    },
    methodArgs: ['locatorKey', 'count'],
  },
  {
    methodName: 'checkElementDoesNotExistNTimes',
    method: function checkElementDoesNotExistNTimes(locatorKey, count) {
      return checkElementExistsNTimesImport.call(this, locatorKey, true, count);
    },
    methodArgs: ['locatorKey', 'count'],
  },
  {
    methodName: 'checkInputIsEmpty',
    method: function checkInputIsEmpty(locatorKey) {
      return checkInputIsEmptyImport.call(this, locatorKey, false);
    },
    methodArgs: ['locatorKey'],
  },
  {
    methodName: 'checkInputIsNotEmpty',
    method: function checkInputIsNotEmpty(locatorKey) {
      return checkInputIsEmptyImport.call(this, locatorKey, true);
    },
    methodArgs: ['locatorKey'],
  },
  {
    methodName: 'checkInputValue',
    method: function checkInputValue(locatorKey, expectedValue) {
      return checkInputValueImport.call(this, locatorKey, false, expectedValue);
    },
    methodArgs: ['locatorKey', 'expectedValue'],
  },
  {
    methodName: 'checkInputValueIsNot',
    method: function checkInputValueIsNot(locatorKey, expectedValue) {
      return checkInputValueImport.call(this, locatorKey, true, expectedValue);
    },
    methodArgs: ['locatorKey', 'expectedValue'],
  },
  {
    methodName: 'checkIsEnabled',
    method: function checkIsEnabled(locatorKey) {
      return checkIsEnabledImport.call(this, locatorKey, 'enabled');
    },
    methodArgs: ['locatorKey'],
  },
  {
    methodName: 'checkIsDisabled',
    method: function checkIsDisabled(locatorKey) {
      return checkIsEnabledImport.call(this, locatorKey);
    },
    methodArgs: ['locatorKey'],
  },
  {
    methodName: 'checkIsSelected',
    method: function checkIsSelected(locatorKey) {
      return checkIsSelectedImport.call(this, locatorKey, false);
    },
    methodArgs: ['locatorKey'],
  },
  {
    methodName: 'checkIsDeselected',
    method: function checkIsDeselected(locatorKey) {
      return checkIsSelectedImport.call(this, locatorKey, true);
    },
    methodArgs: ['locatorKey'],
  },
  {
    methodName: 'setPageObjectThenCheckUrl',
    method: setPageObjectThenCheckUrl,
    methodArgs: ['pageName'],
  },
  {
    methodName: 'checkVisible',
    method: function checkVisible(locatorKey) {
      return checkVisibility.call(this, locatorKey, 'visible');
    },
    methodArgs: ['locatorKey'],
  },
  {
    methodName: 'checkHidden',
    method: function checkHidden(locatorKey) {
      return checkVisibility.call(this, locatorKey, 'hidden');
    },
    methodArgs: ['locatorKey'],
  },
  {
    methodName: 'checkFocus',
    method: checkFocus,
    methodArgs: ['locatorKey'],
  },
];

module.exports = {
  pageObjectsNotRequired,
  pageObjectsRequired,
};
