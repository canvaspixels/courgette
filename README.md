# POM CukeTractor - Cucumber Protractor Runner with Setup for Page Object Model

[![Build Status](https://travis-ci.org/canvaspixels/cucumber-protractor.svg?branch=master)](https://travis-ci.org/canvaspixels/cucumber-protractor)

![POM Cuke Tractor](https://raw.githubusercontent.com/canvaspixels/cucumber-protractor/master/pomCukeTractor.png)

## Create easy-to-read, functioning scenarios in seconds:

### Setup

This assumes that you have an npm project. If you don't then make a new one with `npm init`. It also assumes you are on a Mac and have node 8+ and npm 6+ installed. If you are on Windows and would like to get involved please make contact.

1. Install the package: `npm install cucumber-protractor`
2. Copy the sample file structure and config file. Type: `./node_modules/cucumber-protractor/scripts/setup.sh` into your terminal. This will create a `uiTests` folder with the sample in it, a sample config and add the `ct` and `cuketractor` scripts (both do the same thing) to your package.json.
3. Run the sample, type `npm run ct` in your terminal.

### Futher tips:

1. To improve organisation and scalability, easily compose Page Objects and Component Objects. Page Objects and Component Objects are composed of [Locators](https://www.protractortest.org/#/locators), custom methods, and other Component Objects. Components can compose Components which compose Components etc. The only difference between a Page Object and a Component Object is a Component Object does not have an URL. Use the [step definitions provided](https://github.com/canvaspixels/cucumber-protractor/blob/master/STEP_DEFINITIONS.md#step-definitions) (or create your own) to write your own first scenario.
2. If you're using source control such as git, add `uiTestResult` to your .gitignore file
3. As an improvement, to suppress deprecation warnings (if running node > 8) and also to type `cuketractor` or `ct` rather than typing `npm run ct` each time, you can add the following lines to your `~/.bash_profile` file:

```
alias cuketractor="PATH=$(npm bin):$PATH NODE_OPTIONS=--no-deprecation cuketractor"
alias ct="PATH=$(npm bin):$PATH NODE_OPTIONS=--no-deprecation cuketractor"
```

This is the same command that was added to your package.json. This means you don't have to put npm run each time.

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

Note that all you need to be able to run that is a page object that looks like this inside a kebab-case file e.g. `google-home.js`:

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

You don't need to write any page object methods, nor step definitions. How easy is that!!?

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

To run just one feature:

```console
npm run ct --tags=@google-home

OR SIMPLY JUST

npm run ct @google-home
```

To run just one scenario:

```console
npm run ct --tags=@google-home-another-thing

OR SIMPLY JUST

npm run ct @google-home-another-thing
```

To run a couple (comma separate):

```console
npm run ct --tags=@google-home-feeling-lucky,@google-home-another-thing

OR SIMPLY JUST

npm run ct @google-home-feeling-lucky,@google-home-another-thing
```

## Viewing your test run

If you get an error, you'll see a screenshot for each step error inside the `uiTestResult` folder and a link to each one from the console output in your terminal. However, if you want to view the browser running each step, you can put disableHeadless=true before the cuketractor command like this:

```console
disableHeadless=true npm run ct
```

That'll launch Chrome by default and you'll be able to see your tests run.

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
* capabilities for different browsers, Chrome is the default. You can point to services like browserstack or saucelabs to test a matrix of platforms and browsers

To point to a different configuration file:

```console
npm run ct --confFile=staging.conf.js
```

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

While the gherkin step examples in this repo are all single action or assertions, you can easily combine a number of steps into one.

For example in a scenario that has the following steps:

```gherkin
Scenario: I expect to see items in the dashboard menu
  Given I am on the 'twitter login' page
  When I set 'username' to 'peoplesvote_uk'
  And I set 'password' to 'password~1'
  And I submit the 'login form'
  Then I expect to eventually be on the 'dashboard' page
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

This allows you to stop repeating yourself with the login steps, making them more reusable, and also it makes the test much more readable and focusses on the subject in test. It is a precondition that we need to be logged in, not really what we are testing. If you are in control of your mocks and are able to mock out a logged in state, say with cookies, then that is preferable as it'll take a lot less time to run, but if you are doing system tests on a staging environment for example then you may have to login how a user would, via the login form. Remember to keep your credentials out of your repository!

To add a `Given I am logged in` step we’ll need to create our own custom step definition. Add this to the bottom of `uiTests/stepDefinitions/common-step-defintions.js` and change the username and password twitter credentials:

```js
Given(/^I am logged in$/, async function() {
  await this.goToPage('twitter login');
  await this.setInputFieldValue('username', 'peoplesvote_uk');
  await this.setInputFieldValue('password', 'password~1');
  await this.submitForm('login form');
  return await this.checkUrlIs('https://twitter.com');
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

## Contributing

Please get in touch if you'd like to contribute to this project.

To create the STEP_DEFINITIONS.md and snippets files, run the script: `npm run build-readme-and-snippets`