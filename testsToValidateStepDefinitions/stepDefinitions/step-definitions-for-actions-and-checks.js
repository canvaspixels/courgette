const { Given, Then } = require('@cucumber/cucumber');

Given(/^I am on another page$/, async function () {
  await this.goToURL('/');
  await this.clickElementWithText(null, 'Go to other page by react router');
  await this.checkUrlIs('http://localhost:3006/other-page');
  await this.checkUrlIsNot('http://localhost:3006/blah');
});

Given(/^I have set and appended a field$/, async function () {
  await this.goToPage('home');
  await this.setInputFieldValue('email', 'foo@');
  await this.appendInputFieldValue('bar.com', 'email');
});

// TODO WDIO
// Given(/^I have set and appended a react field$/, async function () {
//   await this.setReactInputFieldValue('email', 'foo@');
//   await this.appendReactInputFieldValue('bar.com', 'email');
// });

Given(/^I have cleared and appended a field$/, async function () {
  await this.clearInputFieldValue('email');
  await this.appendInputFieldValue('test@test.com', 'email');
});

Given(/^I have submitted the form and gone back to the homepage$/, async function () {
  await this.submitForm('main form');
  await this.getPage('other');
  await this.clickElement('Go to home page by react router link');
});

Given(/^I have set the cookie$/, async function () {
  await this.setCookie('cookieName', 'cookieValue');
});

Given(/^I have set select by option text$/, async function () {
  await this.setSelectValueByOptionText('age field', '26+');
});

Then(/^I am checking a bunch of stuff$/, async function () {
  await this.checkAttribute('age field', 'name', 'age');
  await this.doesNotHaveClass('main heading', 'digery-doo');
  await this.hasClass('main heading', 'Home-header');
  await this.checkContainsAnyText('main heading');
  await this.checkDoesNotContainAnyText('empty div');
  await this.checkContainsText('main heading', 'Home page');
  await this.checkDoesNotContainText('main heading', 'foo');
  await this.checkElementExists('main heading');
  await this.checkElementDoesNotExist('non-existant element');
  await this.checkElementExistsNTimes('bullets', 3);
  await this.checkElementDoesNotExistNTimes('bullets', 4);
  await this.checkInputIsEmpty('fullname');
  await this.checkInputIsNotEmpty('email');
  await this.checkInputValue('email', 'hi@hello.com');
  await this.checkInputValueIsNot('email', 'hi@hello.con');
  await this.checkIsEnabled('button');
  await this.checkIsDisabled('disabled button');
  await this.checkIsSelected('newsletter checkbox');
  await this.checkIsDeselected('you ok checkbox');
  await this.checkTitle('React App'); // todo:add check title contains
  await this.checkTitleIsNot('React Appp');
  await this.checkUrlIs('http://localhost:3006/');
  await this.checkUrlIsNot('http://localhost:30060/');
  await this.checkUrlContainsString('localhost');
  await this.checkVisible('main heading');
  await this.checkHidden('hidden field');
});

Then(/^all the cookie functions work$/, async function () {
  await this.checkCookieContains('foo', 'bar');
  await this.checkCookieContains('foo', 'ba');
  await this.checkCookieContent('foo', 'bar');
  await this.checkCookieValueIsNot('foo', 'bobs');
  await this.checkCookieExists('foo');
});

// todo add a focus
// Given(/^I have submitted the form by pressing enter and gone back to the homepage$/, async function () {
//   await this.pressKey('main form');
//   await this.getPage('other');
//   await this.clickElement('Go to home page by react router link');
// });


// pressKey // args: (key)


// todo: checkCookieValueIsNot // args: (cookieName, expectedValue)
// checkCookieExists // args: (cookieName)
// checkCookieDoesNotExist // args: (cookieName)

// setPageObjectThenCheckUrl // args: (pageName)

// checkFocus // args: (locatorKey)

// checkIsOpenedInNewWindow // args: (href)

