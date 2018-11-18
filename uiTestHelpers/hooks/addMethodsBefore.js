const path = require('path');

const { Before } = require(path.join(process.cwd(), 'node_modules/cucumber'));

const appendInputFieldValue = require('../../uiTestHelpers/stepDefinitions/actions/appendInputFieldValue');
const appendReactInputFieldValue = require('../../uiTestHelpers/stepDefinitions/actions/appendReactInputFieldValue');
const clearInputFieldValue = require('../../uiTestHelpers/stepDefinitions/actions/clearInputFieldValue');
const clickElement = require('../../uiTestHelpers/stepDefinitions/actions/clickElement');
const clickElementWithText = require('../../uiTestHelpers/stepDefinitions/actions/clickElementWithText');
const clickElementThatContainsText = require('../../uiTestHelpers/stepDefinitions/actions/clickElementThatContainsText');
const clickElementInsideElement = require('../../uiTestHelpers/stepDefinitions/actions/clickElementInsideElement');
const disableAnimations = require('../../uiTestHelpers/stepDefinitions/actions/disableAnimations');
const goToPage = require('../../uiTestHelpers/stepDefinitions/actions/goToPage');
const goToURL = require('../../uiTestHelpers/stepDefinitions/actions/goToURL');
const pressKey = require('../../uiTestHelpers/stepDefinitions/actions/pressKey');
const setCookie = require('../../uiTestHelpers/stepDefinitions/actions/setCookie');
const setInputFieldValue = require('../../uiTestHelpers/stepDefinitions/actions/setInputFieldValue');
const setReactInputFieldValue = require('../../uiTestHelpers/stepDefinitions/actions/setReactInputFieldValue');
const setSelectValueByOptionText = require('../../uiTestHelpers/stepDefinitions/actions/setSelectValueByOptionText');
const submitForm = require('../../uiTestHelpers/stepDefinitions/actions/submitForm');
const checkAttribute = require('../../uiTestHelpers/stepDefinitions/checks/checkAttribute');
const checkClass = require('../../uiTestHelpers/stepDefinitions/checks/checkClass');
const checkColour = require('../../uiTestHelpers/stepDefinitions/checks/checkColour');
const checkContainsAnyText = require('../../uiTestHelpers/stepDefinitions/checks/checkContainsAnyText');
const checkContainsText = require('../../uiTestHelpers/stepDefinitions/checks/checkContainsText');
const checkCookieContains = require('../../uiTestHelpers/stepDefinitions/checks/checkCookieContains');
const checkCookieContent = require('../../uiTestHelpers/stepDefinitions/checks/checkCookieContent');
const checkCookieExists = require('../../uiTestHelpers/stepDefinitions/checks/checkCookieExists');
const checkElementBackgroundColour = require('../../uiTestHelpers/stepDefinitions/checks/checkElementBackgroundColour');
const checkElementBorderColour = require('../../uiTestHelpers/stepDefinitions/checks/checkElementBorderColour');
const checkElementColour = require('../../uiTestHelpers/stepDefinitions/checks/checkElementColour');
const checkElementExists = require('../../uiTestHelpers/stepDefinitions/checks/checkElementExists');
const checkElementExistsNTimes = require('../../uiTestHelpers/stepDefinitions/checks/checkElementExistsNTimes');
const setPageObjectThenCheckUrl = require('../../uiTestHelpers/stepDefinitions/checks/setPageObjectThenCheckUrl');
const checkFocus = require('../../uiTestHelpers/stepDefinitions/checks/checkFocus');
const checkInputIsEmpty = require('../../uiTestHelpers/stepDefinitions/checks/checkInputIsEmpty');
const checkInputValue = require('../../uiTestHelpers/stepDefinitions/checks/checkInputValue');
const checkIsEnabled = require('../../uiTestHelpers/stepDefinitions/checks/checkIsEnabled');
const checkIsOpenedInNewWindow = require('../../uiTestHelpers/stepDefinitions/checks/checkIsOpenedInNewWindow');
const checkIsSelected = require('../../uiTestHelpers/stepDefinitions/checks/checkIsSelected');
const checkTitle = require('../../uiTestHelpers/stepDefinitions/checks/checkTitle');
const checkUrl = require('../../uiTestHelpers/stepDefinitions/checks/checkUrl');
const checkUrlContainsString = require('../../uiTestHelpers/stepDefinitions/checks/checkUrlContainsString');
const checkVisibility = require('../../uiTestHelpers/stepDefinitions/checks/checkVisibility');

Before(function addMethodsBeforeHook() {
  this.attach('Hook Step: addMethodsBeforeHook');

  // actions (no page object required)
  this.goToURL = goToURL; // args: (url)
  this.disableAnimations = disableAnimations; // args: none
  this.clickElementWithText = clickElementWithText; // args: (text)
  this.clickElementThatContainsText = clickElementThatContainsText; // args: (text)

  // actions (page object required)
  this.appendInputFieldValue = appendInputFieldValue; // args: (value, locatorKey)
  this.appendReactInputFieldValue = appendReactInputFieldValue; // args: (text, locatorKey)
  this.clearInputFieldValue = clearInputFieldValue; // args: (locatorKey)
  this.clickElement = clickElement; // args: (locatorKey)
  this.clickElementInsideElement = clickElementInsideElement; // args: (locatorKey, locatorKey)
  this.goToPage = goToPage; // args: (pageName)
  this.pressKey = pressKey; // args: (key)
  this.setCookie = setCookie; // args: (name, value)
  this.setInputFieldValue = setInputFieldValue; // args: (locatorKey, value)
  this.setReactInputFieldValue = setReactInputFieldValue; // args: (locatorKey, text)
  this.setSelectValueByOptionText = setSelectValueByOptionText; // args: (locatorKey, itemText)
  this.submitForm = submitForm; // args: (locatorKey)

  // checks (no page object required)
  this.checkTitle = function (expectedTitle) {
    return checkTitle.call(this, false, expectedTitle);
  };
  this.checkTitleIsNot = function (expectedTitle) {
    return checkTitle.call(this, true, expectedTitle);
  };
  this.checkUrlIs = function (url) {
    return checkUrl.call(this, false, url);
  };
  this.checkUrlIsNot = function (url) {
    return checkUrl.call(this, true, url);
  };
  this.checkUrlContainsString = checkUrlContainsString; // args: (expectedUrlPart)
  this.checkCookieContains = function (cookieName, expectedValue) {
    return checkCookieContains.call(this, cookieName, false, expectedValue);
  };
  this.checkCookieDoesNotContain = function (cookieName, expectedValue) {
    return checkCookieContains.call(this, cookieName, true, expectedValue);
  };
  this.checkCookieContent = function (cookieName, expectedValue) {
    return checkCookieContent.call(this, cookieName, false, expectedValue);
  };
  this.checkCookieValueIsNot = function (cookieName, expectedValue) {
    return checkCookieContent.call(this, cookieName, true, expectedValue);
  };
  this.checkCookieExists = function (cookieName) {
    return checkCookieExists.call(this, cookieName, false);
  };
  this.checkCookieDoesNotExist = function (cookieName) {
    return checkCookieExists.call(this, cookieName, true);
  };
  this.checkIsOpenedInNewWindow = checkIsOpenedInNewWindow; // args: (href)

  // checks (page object required)
  this.checkAttribute = checkAttribute; // args: (locatorKey, expectedAttribute, expectedValue)
  this.hasClass = function (locatorKey, className) {
    return checkClass.call(this, locatorKey, false, className);
  };
  this.doesNotHaveClass = function (locatorKey, className) {
    return checkClass.call(this, locatorKey, true, className);
  };
  this.checkColour = checkColour; // args: (locatorKey, expectedColour, property)
  this.checkContainsAnyText = function (locatorKey) {
    return checkContainsAnyText.call(this, locatorKey, false);
  };
  this.checkDoesNotContainAnyText = function (locatorKey) {
    return checkContainsAnyText.call(this, locatorKey, true);
  };
  this.checkContainsText = function (locatorKey, expectedText) {
    return checkContainsText.call(this, locatorKey, true, expectedText);
  };
  this.checkDoesNotContainText = function (locatorKey, expectedText) {
    return checkContainsText.call(this, locatorKey, false, expectedText);
  };
  this.checkElementBackgroundColour = checkElementBackgroundColour; // args: (locatorKey, expectedColour)
  this.checkElementBorderColour = checkElementBorderColour; // args: (position, locatorKey, expectedColour)
  this.checkElementColour = checkElementColour; // args: (locatorKey, expectedColour)
  this.checkElementExists = function (locatorKey) {
    return checkElementExists.call(this, locatorKey, false);
  };
  this.checkElementDoesNotExist = function (locatorKey) {
    return checkElementExists.call(this, locatorKey, true);
  };
  this.checkElementExistsNTimes = function (locatorKey, count) {
    return checkElementExistsNTimes.call(this, locatorKey, false, count);
  };
  this.checkElementDoesNotExistNTimes = function (locatorKey, count) {
    return checkElementExistsNTimes.call(this, locatorKey, true, count);
  };
  this.setPageObjectThenCheckUrl = setPageObjectThenCheckUrl; // args: (pageName)
  this.checkFocus = checkFocus; // args: (locatorKey)
  this.checkInputIsEmpty = function (locatorKey) {
    return checkInputIsEmpty.call(this, locatorKey, false);
  };
  this.checkInputIsNotEmpty = function (locatorKey) {
    return checkInputIsEmpty.call(this, locatorKey, true);
  };
  this.checkInputValue = function (locatorKey, expectedValue) {
    return checkInputValue.call(this, locatorKey, false, expectedValue);
  };
  this.checkInputValueIsNot = function (locatorKey, expectedValue) {
    return checkInputValue.call(this, locatorKey, true, expectedValue);
  };
  this.checkIsEnabled = function (locatorKey) {
    return checkIsEnabled.call(this, locatorKey, 'enabled');
  };
  this.checkIsDisabled = function (locatorKey) {
    return checkIsEnabled.call(this, locatorKey);
  };
  this.checkIsSelected = function (locatorKey) {
    return checkIsSelected.call(this, locatorKey, false);
  };
  this.checkIsDeselected = function (locatorKey) {
    return checkIsSelected.call(this, locatorKey, true);
  };
  this.checkVisible = function (locatorKey) {
    return checkVisibility.call(this, locatorKey, 'visible');
  };
  this.checkHidden = function (locatorKey) {
    return checkVisibility.call(this, locatorKey, 'hidden');
  };
});
