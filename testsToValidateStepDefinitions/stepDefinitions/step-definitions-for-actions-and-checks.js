const { Given } = require('cucumber');

Given(/^I have set and appended a field$/, async function() {
  await this.setInputFieldValue('email', 'foo@');
  await this.appendInputFieldValue('bar.com', 'email');
});

Given(/^I have set and appended a react field$/, async function() {
  await this.setReactInputFieldValue('email', 'foo@');
  await this.appendReactInputFieldValue('bar.com', 'email');
});

Given(/^I have cleared and appended a field$/, async function() {
  await this.clearInputFieldValue('email');
  await this.appendInputFieldValue('test@test.com', 'email');
});

Given(/^I have submitted the form and gone back to the homepage$/, async function() {
  await this.submitForm('main form');
  await this.getPage('other');
  await this.clickElement('Go to home page by react router link');
});

// todo add a focus
// Given(/^I have submitted the form by pressing enter and gone back to the homepage$/, async function() {
//   await this.pressKey('main form');
//   await this.getPage('other');
//   await this.clickElement('Go to home page by react router link');
// });
