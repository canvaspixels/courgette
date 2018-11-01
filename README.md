# CukeTractor Framework - Bringing sanity to test automation with this Cucumber Protractor Runner

[![Build Status](https://travis-ci.org/canvaspixels/cucumber-protractor.svg?branch=master)](https://travis-ci.org/canvaspixels/cucumber-protractor)

![POM Cuke Tractor](https://raw.githubusercontent.com/canvaspixels/cucumber-protractor/master/pomCukeTractor.png)

## CukeTractor gives you:

* a load of generic step definitions for you to begin writing Given When Then scenarios that will run as soon as you add the CSS or XPath selectors to the .page (YAML) file
* snippets or live templates for intellisense in your favourite IDE to write those steps accurately and quickly
* screenshots on error for debugging
* a step for named screenshots
* an HTML report
* a Cucumber formatter for nice output in the terminal
* a Cucumber formatter for step definition usage
* an error report summary in the terminal output
* Windows, Mac, Linux support
* ability to DRY out selectors with .component (YAML) files
* ability to run against cloud services that provide a selenium grid


## Create easy-to-read, functioning scenarios in seconds:

### Setup

This assumes that you have an npm project. If you don't then make a new one with `npm init`. It also assumes you are on a Mac, Linux or Windows and have node 8+, npm 6+, and the latest version of Firefox installed.

1. Install the package: type `npm install cucumber-protractor` into your terminal
2. Copy: `node node_modules/cucumber-protractor/scripts/setup.js` into your terminal. This will create a `uiTests` folder with the sample in it, a sample config and add the `ct` script to your package.json. Note it's `node node_modules\cucumber-protractor\scripts\setup.js` on Windows.
3. Run the sample, type `npm run ct` into your terminal.

### Futher tips:

1. To improve organisation and scalability, easily compose Page Objects and Component Objects. Page Objects and Component Objects are composed of [Locators](https://www.protractortest.org/#/locators), custom methods, and other Component Objects. Components can compose Components which compose Components etc. The only difference between a Page Object and a Component Object is a Component Object does not have an URL. Use the [step definitions provided](https://github.com/canvaspixels/cucumber-protractor/blob/master/STEP_DEFINITIONS.md#step-definitions) (or create your own) to write your own first scenario.
2. If you're using source control such as git, add `uiTestResult` to your .gitignore file
3. As an improvement, to suppress deprecation warnings (if running node > 8) and also to type `cuketractor` or `ct` rather than typing `npm run ct` each time, you can add the following lines to your `~/.bash_profile` file:

```
alias cuketractor="PATH=$(npm bin):$PATH NODE_OPTIONS=--no-deprecation cuketractor"
alias ct="PATH=$(npm bin):$PATH NODE_OPTIONS=--no-deprecation cuketractor"
```

This is the same command that was added to your package.json. This means you don't have to put npm run each time.

## BDD (Behaviour-Driven Developement) user stories vs specifications

With Cuketractor, you have the option to either write user stories, specifications, or a mixture of the both.

An example of a user story:

```gherkin
Scenario: Refunded items should be returned to stock
  Given that a customer previously bought a black sweater from me
  And I have three black sweaters in stock.
  When they return the black sweater for a refund
  Then I should have four black sweaters in stock.
```

An example of a specification:

```gherkin
Scenario: Refunded items should be returned to stock
  Given I am on the 'login' page
  When I set 'email' to 'user@email.com'
  And I set 'password' to 'Password~1'
  And I submit the 'login form'
  Then I expect to be on the 'home' page
  Given I am on the 'black sweaters' page
  When I click the 'buy now button'
  Then I expect to be on the 'checkout' page
  When I set 'first name' to 'Jill'
  And I set 'last name' to 'McGillis'
  And I set 'address' to '44 Test Road'
  And I set 'postcode' to 'N44 9GG'
  And I set 'card number' to '4111 1111 1111 1111'
  And I set 'cvv number' to '444'
  And I set 'expiry date' to '04/22'
  And I submit the 'purchase form'
  Then I expect to be on the 'confirmation' page
  Given I am on the 'black sweaters' page
  And the 'amount of items in stock' contains the text '3 in stock'
  When I go to 'my account' page
  And I click the 'my orders link'
  And I click 'return black sweater link'
  Then I expect to be on the 'returns' page
  When I click the 'confirm button'
  Then I expect to be on the 'item returned confirmation' page
  When I go to 'black sweaters' page
  Then the 'amount of items in stock' contains the text '4 in stock'
```

As you can see, the user story is shorter and more readable for the business however requires a bit more development effort, but not much more with Cuketractor. With the specification example, you have the implementation details all in place and the scenario will run straight away without further effort. If the tests are just for yourself and you want some quick smoke tests, this may be preferred. If you're writing lots of similar tests to test edge cases, the user story might be preferred as writing the step definitions to support them will actually make your steps DRY.

Both the user story and specification styles of BDD will require supporting page objects. So for example the `checkout.page` file will contain the selectors `'first name'` and `'card number'` etc.

Here's how to achieve an automated version of the user story... Inside the `stepDefinitions` folder, add a new `.js` file with the following:

```js
const { Given, When, Then } = require('cucumber');

Given(/^that a customer previously bought a black sweater from me$/, async function() {
  await this.goToPage('login');
  await this.setInputFieldValue('email', 'user@email.com');
  await this.setInputFieldValue('password', 'Password~1');
  await this.submitForm('login form');
  await this.setPageObjectThenCheckUrl('home');
  await this.goToPage('black sweaters');
  await this.clickElement('buy now button');
  await this.setPageObjectThenCheckUrl('checkout');
  await this.setInputFieldValue('first name', 'Jill');
  await this.setInputFieldValue('last name', 'McGillis');
  await this.setInputFieldValue('address', '44 Test Road');
  await this.setInputFieldValue('postcode', 'N44 9GG');
  await this.setInputFieldValue('card number', '4111 1111 1111 1111');
  await this.setInputFieldValue('cvv number', '444');
  await this.setInputFieldValue('expiry date', '04/22');
  await this.submitForm('purchase form');
  await this.setPageObjectThenCheckUrl('confirmation');
});

Given(/^I have three black sweaters in stock.$/, async function() {
  await this.goToPage('black sweaters');
  await this.setSelectValueByOptionText('amount of items in stock', '3 in stock');
});

When(/^they return the black sweater for a refund$/, async function() {
  await this.goToPage('my account');
  await this.clickElement('my orders link');
  await this.clickElement('return black sweater link');
  await this.setPageObjectThenCheckUrl('returns');
  await this.clickElement('confirm button');
  await this.setPageObjectThenCheckUrl('item returned confirmation');
});

Then(/^I should have four black sweaters in stock.$/, async function() {
  await this.goToPage('black sweaters');
  await this.setSelectValueByOptionText('amount of items in stock', '4 in stock');
});
```


To take the above one step further, we can remove the duplication in checking the amount in stock.

```js
const { Given, When, Then } = require('cucumber');

async function goToPageAndCheckItemsInStock(numberOfItems) {
  await this.goToPage('black sweaters');
  await this.setSelectValueByOptionText('amount of items in stock', `${numberOfItems} in stock`);
}

Given(/^I have (.*) black sweaters in stock.$/, goToPageAndCheckItemsInStock);

Then(/^I should have (.*) black sweaters in stock.$/, goToPageAndCheckItemsInStock);
```

## Feature file by example

```gherkin
@google-home
Feature: Test feature

  @google-home-feeling-lucky
  Scenario: I am testing this out
    Given I am on the 'Google Home' page
    When I click 'I’m Feeling Lucky'
    Then I expect the url to contain 'google.com'
```

All you need to be able to run the scenario above is a page object that looks like this inside a kebab-case yaml file e.g. `google-home.page`, placed in the `uiTests/pages` folder:

```yaml
path: https://www.google.com/

selectors:
  I’m Feeling Lucky: [value="I'm Feeling Lucky"]
```

...or if you want the boilerplate js code and need more flexibility place the following in `google-home.js` in the same folder (again kebab-case is important):

```js
const createPage = require('cucumber-protractor/uiTestHelpers/createPage');
const fileName = createPage.getFileName(__filename);

module.exports = (world) => {
  const pagePath = 'https://www.google.com/';
  const locators = {
    'I’m Feeling Lucky': by.css('[value="I\'m Feeling Lucky"]'),
  };

  return createPage(fileName, world, pagePath, locators);
};
```

Note that a `.page` file will take precedence over a `.js` page object file.

You don't need to write any page object methods, nor step definitions. How easy is that!!?

The indentation in YAML (the .page / .component files) is important. The keys such as path, components, selectors, xpaths need to always be on the far left as per the examples on this page.

It's important that the page object name is kebab-case and lowercase. E.g. `about-us.js` or `about-something-else.js` or `google-home.js` as in the sample. `Given I am on the 'Google Home' page` sets the current page object and `Google Home` gets translated behind the scenes to `google-home.js` so make sure `Google Home` has the space in it.

It’s advisable when writing your features to add a tag at the top of the Feature file and a tag to the beginning of each Scenario. A tag starts with a @. As a convention you can prefix each Scenario tag with whatever you've used at the top of the file (in this case @google-home). Try and keep them unique for your ease of use.

Note you can add more than one tag to each scenario and you could tag them when a hook tag that you can hook into Before or After each scenario. [Read more about hooks](https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/hooks.md) just add hooks to the existing ones in your conf.js file.

```gherkin
@google-home
Feature: Test feature

  @google-home-feeling-lucky
  Scenario: ...
    Given ...
    When ...
    Then ...

  @google-home-another-thing @some-special-hook-before-each-run
  Scenario: ...
    Given ...
    When ...
    Then ...

  @google-home-yet-another-thing @some-special-hook-before-each-run
  Scenario: ...
    Given ...
    When ...
    Then ...
```

## Running just one feature or one scenario

Continuing on from the examples above...

To run just one feature (assuming the @tag is at the top of the file):

```console
npm run ct @google-home
```

To run just one scenario (assuming you’ve added the @tag above your scenario):

```console
npm run ct @google-home-another-thing
```

To run a couple (comma separate):

```console
npm run ct @google-home-feeling-lucky,@google-home-another-thing
```

## Viewing your test run

If you get an error, you'll see a screenshot for each step error inside the `uiTestResult` folder and a link to each one from the console output in your terminal. However, if you want to view the browser running each step, you can put disableHeadless=true before the cuketractor command like this:

```console
disableHeadless=true npm run ct
```

That'll launch Firefox by default and you'll be able to see your tests run.

## conf.js file

The conf file allows you to specify the following:

* folder locations for the following
    - test results
    - page objects
    - component objects
    - feature files
    - hooks
* step timeoutInSeconds - how long a step will wait to complete before it times out
* baseUrl - the hostname will prefix the paths you set in your page objects
* capabilities for different browsers, Firefox is the default. You can point to services like browserstack or saucelabs to test a matrix of platforms and browsers

To point to a different configuration file:

```console
npm run ct -- --confFile=staging.conf.js
```

## .page files and .component files

### .page file example

Example of a page object located at `uiTests/pages/simple.page`:

```yaml
path: /simple-page

selectors:
  Go to home page by react router link: [data-test="go-to-home-link"]
  some other element selected by class: .my-class
  some other element selected by id: '#my-class'

XPaths:
  main heading: //*[contains(@class, "main-heading")]
  another element: //*[contains(@class, "something-else")]

components:
  - banner
  - footer
```

A .page file is made up of:

* path - the page's path, navigated to when you use the `Given I am on the 'simple' page` step
* selectors - css selectors, the name on the left side of the : is what you put in your gherkin steps, the selector on the right references your html element. Note if you use id selectors (with a hash) you need to put it in quotes '' or the yaml file will think it's a comment
* XPaths - same as selectors but using XPath selectors instead
* components - a list of components which will be loaded in from the `uiTests/components` folder and composed into the page object (see .component file example of the footer component)


### .component file example

Example of a component object located at `uiTests/components/footer.component`:

```yaml
selectors:
  footer wrapper: .footer

components:
  - footer-item1
  - footer-item2
```

A .component file is made up of:

* selectors - css selectors, the name on the left side of the : is what you put in your gherkin steps, the selector on the right references your html element. Note if you use id selectors (with a hash) you need to put it in quotes '' or the yaml file will think it's a comment
* XPaths - same as selectors but using XPath selectors instead
* components - a list of components which will be loaded in from the `uiTests/components` folder and composed into the component object

## Parallelisation

By default all your .feature files will run in parallel to speed up running all your tests. This means that across your .feature files your tests should not conflict, i.e. you won't be able to do setup in one feature file such as adding a todo item to your todo app, and teardown in another .feature file such as deleting that same todo item as you'll get a race condition. A suggestion is that if you're logging into your app for example that you use a different user account for each .feature file to avoid conflicting.

If you run `linearise=1 npm run ct` then they won't run in parallel, nor will they if you’re running just one scenario or feature with a @tag.

`maxInstances: 4` in the conf can be altered depending on how much load your computer can handle.

If you've just setup Cuketractor with the setup script this will work, otherwise search for linearise inside the [sample conf](https://github.com/canvaspixels/cucumber-protractor/blob/master/sample-conf.js)


## Snippets

Snippets are available for Sublime Text 3, Webstorm (live templates), VSCode and Atom. To add them to your editor do the following.

For Sublime Text 3:

```console
node node_modules/cucumber-protractor/scripts/generateSnippetsSublime.js --genFiles --justForIDE
```

For Atom:

```console
node node_modules/cucumber-protractor/scripts/generateSnippetsAtom.js --genFiles --justForIDE
```

For VSCode:

```console
node node_modules/cucumber-protractor/scripts/generateSnippetsVSCode.js --genFiles --justForIDE
```

For Webstorm:

```console
node node_modules/cucumber-protractor/scripts/generateSnippetsWebstorm.js --genFiles --justForIDE
```

For IntelliJ:

```console
node node_modules/cucumber-protractor/scripts/generateSnippetsIntelliJ.js --genFiles --justForIDE
```

You may need to restart after running the commands for the JetBrains IDEs.

## Combining steps

While the gherkin step examples in this repo are all single actions and assertions, you can easily combine a number of steps into one.

For example in a scenario that has the following steps:

```gherkin
Scenario: I expect to see items in the dashboard menu
  Given I am on the 'twitter login' page
  When I set 'username' to 'peoplesvote_uk'
  And I set 'password' to 'password~1'
  And I submit the 'login form'
  Then I expect to be on the 'dashboard' page
  When I click the 'dashboard menu'
  Then I expect the 'dashboard menu items' to be visible
```

we could simplify it by combining them into one so that it is more obvious what we are intending to test:

```gherkin
Scenario: I expect to see items in the dashboard menu
  Given I am logged in
  When I click the 'dashboard menu'
  Then I expect the 'dashboard menu items' to be visible
```

This allows you to stop repeating yourself with the login steps, making them more reusable. Also it makes the test much more readable and focusses on the subject in test. It is a precondition that we need to be logged in and not really what we are testing. If you are in control of your mocks and are able to mock out a logged-in state, say with cookies, then that is preferable as it'll take a lot less time to run. But if you are doing system tests on a staging environment for example then you may have to login how a user would do, via the login form. Remember to keep your credentials out of your repository!

To add a `Given I am logged in` step we’ll need to create our own custom step definition. Add this to the bottom of `uiTests/stepDefinitions/common-step-defintions.js` and change the username and password twitter credentials:

```js
Given(/^I am logged in$/, async function() {
  await this.goToPage('twitter login');
  await this.setInputFieldValue('username', 'peoplesvote_uk');
  await this.setInputFieldValue('password', 'password~1');
  await this.submitForm('login form');
  await this.checkUrlIs('https://twitter.com');
});
```

Create yourself a new feature file, let's call it `twitter-dashboard-menu.feature` and save it in the `uiTests/features` folder. Paste the following into it:

```gherkin
@twitter-dashboard-menu
Feature: Test feature

  @twitter-dashboard-menu-items
  Scenario: I expect to see items in the dashboard menu
    Given I am logged in
```

Then run that scenario: `npm run ct @twitter-dashboard-menu-items`

Have a look at the [available methods](https://github.com/canvaspixels/cucumber-protractor/blob/master/METHODS_FOR_COMBINING.md#methods-for-combining-actions-and-assertions) that you can use to combine your steps.

## Tidying up unused step definitions

To run all your tests then print out a summary of the usage of your step definitions run:

```console
npm run ct -- --showStepDefinitionUsage
```

## Contributing

Please get in touch if you'd like to contribute to this project.

To create the STEP_DEFINITIONS.md and snippets files, run the script: `npm run build-readme-and-snippets`

## Useful links

* [Behaviour-Driven Developement](https://en.wikipedia.org/wiki/Behavior-driven_development)