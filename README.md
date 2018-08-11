# POM CukeTractor - Cucumber Protractor Runner with Setup for Page Object Model

![POM Cuke Tractor](https://raw.githubusercontent.com/canvaspixels/cucumber-protractor/master/pomCukeTractor.png)

## Create easy-to-read, functioning scenarios in minutes:

### Setup

This assumes that you have an npm project. If you don't then make a new one with `npm init`. It also assumes you have node 8 and npm 6 installed.

1. Install the package: `npm install cucumber-protractor`
2. Setup
    1. Copy the sample file structure. Type: `cp -R node_modules/cucumber-protractor/uiTests .` into your terminal (IMPORTANT: include the dot). This will create a `uiTests` folder with the sample in it
    2. Copy the sample config. Put `cp node_modules/cucumber-protractor/sample-conf.js conf.js` into your terminal.
3. Run the sample, type `./node_modules/.bin/cuketractor` in your terminal in the root of your project.

### Futher tips:

1. To improve organisation and scalability, easily compose Page Objects and Component Objects. Page Objects and Component Objects are composed of [Locators](https://www.protractortest.org/#/locators), custom methods, and other Component Objects. Components can compose Components which compose Components etc. The only difference between a Page Object and a Component Object is a Component Object does not have an URL. Use the [step definitions provided](https://github.com/canvaspixels/cucumber-protractor/blob/master/STEP_DEFINITIONS.md#step-definitions) (or create your own) to write your own first scenario.
2. If you're using source control such as git, add `uiTestResult` to your .gitignore file
3. As an improvement, to suppress deprecation warnings (if running node > 8) and also to type `cuketractor` rather than typing `./node_modules/.bin/cuketractor` each time, you can add the following line to your `~/.bash_profile` file:

```alias cuketractor="PATH=$(npm bin):$PATH NODE_OPTIONS=--no-deprecation cuketractor"```

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
./node_modules/.bin/cuketractor --tags=@google-home

OR SIMPLY JUST

./node_modules/.bin/cuketractor @google-home
```

To run just one scenario:

```console
./node_modules/.bin/cuketractor --tags=@google-home-another-thing

OR SIMPLY JUST

./node_modules/.bin/cuketractor @google-home-another-thing
```

To run a couple (comma separate):

```console
./node_modules/.bin/cuketractor --tags=@google-home-feeling-lucky,@google-home-another-thing

OR SIMPLY JUST

./node_modules/.bin/cuketractor @google-home-feeling-lucky,@google-home-another-thing
```

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
./node_modules/.bin/cuketractor --confFile=staging.conf.js
```

## Snippets

Snippets are available for Sublime Text 3 and Atom. Webstorm and VScode to come in the future. To add them to your editor do the following.

For Sublime Text 3:

```console
node node_modules/cucumber-protractor/scripts/generateSublimeStepDefSnippets.js --genFiles --justForIDE
```

For Atom:

```console
node node_modules/cucumber-protractor/scripts/generateAtomStepDefSnippets.js --genFiles --justForIDE
```

## A side note

While the gherkin step examples in this repo are all single action or assertions, you can easily combine a number of steps into one.

For example instead of this:

```gherkin
Given I am on the 'login' page
When I set 'username' to 'foo@bar.com'
And I set 'password' to 'password~1'
And I submit the 'login form'
Then I expect to eventually be on the 'dashboard' page
When I click the 'dashboard menu'
Then I expect the 'dashboard menu items' to be visible
```

we can simplify the 5 login steps by combining them into one:

```gherkin
Given I am logged in
When I click the 'dashboard menu'
Then I expect the 'dashboard menu items' to be visible
```

To do this we’ll need to create our own custom step definition. Add this at the bottom of common-step-defintions.js:

```js
Given(/^I am logged in$/, function() {
  return this.getCurrentPage().logIn();
});
```

Then see in the page object (twitter-login.js in our sample) we change:

```js
return createPage(fileName, world, pagePath, locators);
```

to:

```js
return createPage(fileName, world, pagePath, locators, pageMethods);
```

and we'll add our logIn method to a new pageMethods object we'll create (see twitter-login.js in uiTests/stepDefinitions):

```js
const pageMethods = {
  async logIn() {
    await world.goToPage('twitter login');
    await world.setInputFieldValue('username', 'YOUR_USERNAME');
    await world.setInputFieldValue('password', 'YOUR_PASSWORD');
    await world.submitForm('login form');
    return await world.checkUrlIs('https://twitter.com');
  },
};
```

Have a look at the [available methods](https://github.com/canvaspixels/cucumber-protractor/blob/7ebf04a018e8f27ff25a76ac84b593e04221f455/uiTestHelpers/hooks/addMethodsBefore.js#L43) that you can use to combine your steps.

## Contributing

To create the STEP_DEFINITIONS.md file, run the script: `node scripts/generateStepDefinitionsREADME.js --genFiles`