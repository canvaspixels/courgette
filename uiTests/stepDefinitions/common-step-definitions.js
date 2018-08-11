const { Given, When, Then } = require('cucumber');

Given(/^I am logged in$/, function() {
  return this.getPage('twitter login').logIn();
});

Given(/^some state$/, function() {
  // return this.getCurrentPage().yourCustomMethodThatReturnsAPromise();
});