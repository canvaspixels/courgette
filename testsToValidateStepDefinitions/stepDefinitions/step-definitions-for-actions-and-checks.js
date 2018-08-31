const { Given } = require('cucumber');

Given(/^I have set and appended a field$/, async function () {
  await this.goToPage('home');
  await this.setInputFieldValue('email', 'foo@');
  await this.appendInputFieldValue('bar.com', 'email');
});

Given(/^I have set and appended a react field$/, async function () {
  await this.setReactInputFieldValue('email', 'foo@');
  await this.appendReactInputFieldValue('bar.com', 'email');
});

Given(/^I have cleared and appended a field$/, async function () {
  await this.clearInputFieldValue('email');
  await this.appendInputFieldValue('test@test.com', 'email');
});

Given(/^I have submitted the form and gone back to the homepage$/, async function () {
  await this.submitForm('main form');
  await this.getPage('other');
  await this.clickElement('Go to home page by react router link');
});

// todo add a focus
// Given(/^I have submitted the form by pressing enter and gone back to the homepage$/, async function () {
//   await this.pressKey('main form');
//   await this.getPage('other');
//   await this.clickElement('Go to home page by react router link');
// });


// pressKey // args: (key)
// setCookie // args: (name, value)
// setSelectValueByOptionText // args: (locatorKey, itemText)

// checkAttribute // args: (locatorKey, expectedAttribute, expectedValue)
// hasClass // args: (locatorKey, className)
// doesNotHaveClass // args: (locatorKey, className)
// checkColour // args: (locatorKey, expectedColour, property)
// checkContainsAnyText // args: (locatorKey)
// checkDoesNotContainAnyText // args: (locatorKey)
// checkContainsText // args: (locatorKey, expectedText)
// checkDoesNotContainText // args: (locatorKey, expectedText)
// checkCookieContains // args: (cookieName, expectedValue)
// checkCookieDoesNotContain // args: (cookieName, expectedValue)
// checkCookieContent // args: (cookieName, expectedValue)
// checkCookieValueIsNot // args: (cookieName, expectedValue)
// checkCookieExists // args: (cookieName)
// checkCookieDoesNotExist // args: (cookieName)
// checkElementBackgroundColour // args: (locatorKey, expectedColour)
// checkElementBorderColour // args: (position, locatorKey, expectedColour)
// checkElementColour // args: (locatorKey, expectedColour)
// checkElementExists // args: (locatorKey)
// checkElementDoesNotExist // args: (locatorKey)
// checkElementExistsNTimes // args: (locatorKey, count)
// checkElementDoesNotExistNTimes // args: (locatorKey, count)
// checkEventualUrlFromPOM // args: (pageName)
// checkFocus // args: (locatorKey)
// checkInputIsEmpty // args: (locatorKey)
// checkInputIsNotEmpty // args: (locatorKey)
// checkInputValue // args: (locatorKey, expectedValue)
// checkInputValueIsNot // args: (locatorKey, expectedValue)
// checkIsEnabled // args: (locatorKey)
// checkIsDisabled // args: (locatorKey)
// checkIsOpenedInNewWindow // args: (href)
// checkIsSelected // args: (locatorKey)
// checkIsDeselected // args: (locatorKey)
// checkTitle // args: (expectedTitle)
// checkTitleIsNot // args: (expectedTitle)
// checkUrlIs // args: (url)
// checkUrlIsNot // args: (url)
// checkUrlContainsString // args: (expectedUrlPart)
// checkVisible // args: (locatorKey)
// checkHidden // args: (locatorKey)
