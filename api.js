const appendInputFieldValue = require('./uiTestHelpers/stepDefinitionsWDIO/actions/appendInputFieldValue');
// const appendReactInputFieldValue = require('./uiTestHelpers/stepDefinitionsWDIO/actions/appendReactInputFieldValue');
const clearInputFieldValue = require('./uiTestHelpers/stepDefinitionsWDIO/actions/clearInputFieldValue');
const clickElement = require('./uiTestHelpers/stepDefinitionsWDIO/actions/clickElement');
const clickElementWithText = require('./uiTestHelpers/stepDefinitionsWDIO/actions/clickElementWithText');
const clickElementThatContainsText = require('./uiTestHelpers/stepDefinitionsWDIO/actions/clickElementThatContainsText');
const clickElementInsideElement = require('./uiTestHelpers/stepDefinitionsWDIO/actions/clickElementInsideElement');
const disableAnimations = require('./uiTestHelpers/stepDefinitionsWDIO/actions/disableAnimations');
const goToPage = require('./uiTestHelpers/stepDefinitionsWDIO/actions/goToPage');
const goToURL = require('./uiTestHelpers/stepDefinitionsWDIO/actions/goToURL');
// const pressKey = require('./uiTestHelpers/stepDefinitionsWDIO/actions/pressKey');
const setCookie = require('./uiTestHelpers/stepDefinitionsWDIO/actions/setCookie');
const setInputFieldValue = require('./uiTestHelpers/stepDefinitionsWDIO/actions/setInputFieldValue');
const setReactInputFieldValue = require('./uiTestHelpers/stepDefinitionsWDIO/actions/setReactInputFieldValue');
const setSelectValueByOptionText = require('./uiTestHelpers/stepDefinitionsWDIO/actions/setSelectValueByOptionText');
const checkAttribute = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkAttribute');
const checkClass = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkClass');
// const checkColour = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkColour');
const checkContainsAnyTextImport = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkContainsAnyText');
const checkContainsTextImport = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkContainsText');
const checkCookieContainsImport = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkCookieContains');
const checkCookieContentImport = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkCookieContent');
const checkCookieExistsImport = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkCookieExists');
// const checkElementBackgroundColour = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkElementBackgroundColour');
// const checkElementBorderColour = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkElementBorderColour');
// const checkElementColour = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkElementColour');
const checkElementExistsImport = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkElementExists');
const checkElementExistsNTimesImport = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkElementExistsNTimes');
const setPageObjectThenCheckUrl = require('./uiTestHelpers/stepDefinitionsWDIO/checks/setPageObjectThenCheckUrl');
// const checkFocus = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkFocus');
const checkInputIsEmptyImport = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkInputIsEmpty');
const checkInputValueImport = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkInputValue');
const checkIsEnabledImport = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkIsEnabled');
// const checkIsOpenedInNewWindow = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkIsOpenedInNewWindow');
const checkIsSelectedImport = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkIsSelected');
const checkTitleImport = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkTitle');
const checkUrl = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkUrl');
const checkUrlContainsString = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkUrlContainsString');
const checkVisibility = require('./uiTestHelpers/stepDefinitionsWDIO/checks/checkVisibility');

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
  // {
  //   methodName: 'pressKey',
  //   method: pressKey,
  //   methodArgs: ['key'],
  // },
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
  // {
  //   methodName: 'checkIsOpenedInNewWindow',
  //   method: checkIsOpenedInNewWindow,
  //   methodArgs: ['href'],
  // },
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
  // {
  //   methodName: 'appendReactInputFieldValue',
  //   method: appendReactInputFieldValue,
  //   methodArgs: ['text', 'locatorKey'],
  // },
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
  // {
  //   methodName: 'checkColour',
  //   method: checkColour,
  //   methodArgs: ['locatorKey', 'expectedColour', 'property'],
  // },
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
  // {
  //   methodName: 'checkElementBackgroundColour',
  //   method: checkElementBackgroundColour,
  //   methodArgs: ['locatorKey', 'expectedColour'],
  // },
  // {
  //   methodName: 'checkElementBorderColour',
  //   method: checkElementBorderColour,
  //   methodArgs: ['position', 'locatorKey', 'expectedColour'],
  // },
  // {
  //   methodName: 'checkElementColour',
  //   method: checkElementColour,
  //   methodArgs: ['locatorKey', 'expectedColour'],
  // },
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
  // {
  //   methodName: 'checkFocus',
  //   method: checkFocus,
  //   methodArgs: ['locatorKey'],
  // },
];

module.exports = {
  pageObjectsNotRequired,
  pageObjectsRequired,
};
