# POM CukeTractor - Cucumber Protractor Runner with Setup for Page Object Model

Create easy-to-read, functioning scenarios in minutes:

1. Install the package: `npm install cucumber-protractor`
2. Setup
  1. Copy the sample file structure. Type: `cp -R node_modules/cucumber-protractor/uiTests uiTests` into your terminal
  2. Copy the sample config. Put `cp node_modules/cucumber-protractor/sample-conf.js conf.js` into your terminal
  3. If you're using source control such as git, add `uiTestResult` (or whatever you set in your conf.js) to your .gitignore file
3. Run the sample, type `cuketractor` or `uitests` or `brmbrm` in your terminal in the root of your project
4. Create a [Page Object](https://www.protractortest.org/#/page-objects) and [Locators](https://www.protractortest.org/#/locators)
5. Use the [step definitions provided](#step-definitions) (or create your own) to write your first scenario

![POM Cuke Tractor](https://raw.githubusercontent.com/canvaspixels/cucumber-protractor/master/pomCukeTractor.png)

Easily compose Page Objects and Component Objects. Page objects and Component Objects are composed of locators, custom methods, and other Component Objects. Components can compose Components which compose Components etc.


## Feature file by example

```
@google-home
Feature: Test feature

  @google-home-feeling-lucky
  Scenario: I am testing this out
    Given I go to the 'Google Home' page
    When I click 'I’m Feeling Lucky'
    Then I expect the url to contain 'google.com'
```

Note that all you need to be able to run that is a page object that looks like this:

```
const createPage = require('cucumber-protractor/uiTestHelpers/createPage');

module.exports = (world) =>
  createPage('google-home', world, 'https://www.google.com/', {
    'I’m Feeling Lucky': by.css('[value="I\'m Feeling Lucky"]'),
  });
```

You don't need to write any page methods, nor step definitions. How easy is that!!?

It’s advisable when writing your features to add a tag at the top of the Feature file and a tag to the beginning of each Scenario. A tag starts with a @. As a convention you can prefix each Scenario tag with whatever you've used at the top of the file (in this case @google-home). Try and keep them unique for your ease of use.

Note you can add more than one tag to each scenario and you could tag them when a hook tag that you can hook into Before or After each scenario.

```
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

```
cuketractor --tags=@google-home
```

To run just one scenario:

```
cuketractor --tags=@google-home-another-thing
```

To run a couple (comma separate):

```
cuketractor --tags=@google-home-feeling-lucky,@google-home-another-thing
```


## Step Definitions

Note that the words in italics are optional.

### Given...

| Step definition | Notes |
| --- | --- |
| I go to the 'PAGENAME' page | PAGENAME should match the name of the page object file in your pages directory and the first argument to createPage in that same file. This step definition sets the current page object |
| the page url is 'URL' | |
| the page url is not 'URL' | |
| animations are disabled | |
| _the_ 'LOCATOR' is visible | |
| _the_ 'LOCATOR' is hidden | |
| _the_ 'LOCATOR' is enabled | |
| _the_ 'LOCATOR' is not enabled | |
| _the_ 'LOCATOR' is selected | |
| _the_ 'LOCATOR' is checked | |
| _the_ 'LOCATOR' is not selected | |
| _the_ 'LOCATOR' is not checked | |
| _the_ 'LOCATOR' is on the pages | |
| _the_ 'LOCATOR' is not on the pages | |
| the title is 'LOCATOR' | |
| the title is not 'LOCATOR' | |
| _the_ 'LOCATOR' contains the text 'LOCATOR' | |
| _the_ 'LOCATOR' does not contain the text 'LOCATOR' | |
| _the_ 'LOCATOR' contains any text | |
| _the_ 'LOCATOR' does not contain any text | |
| _the_&nbsp;'LOCATOR'&nbsp;has&nbsp;an&nbsp;attribute&nbsp;'ATTRIBUTE_NAME'&nbsp;with&nbsp;a&nbsp;value&nbsp;of&nbsp;'VALUE' | |
| _the_ 'LOCATOR' is empty | |
| _the_ 'LOCATOR' is not empty | |
| the value of _the_ 'LOCATOR' is 'VALUE' | |
| the value of _the_ 'LOCATOR' is not 'VALUE' | |
| I set the cookie 'LOCATOR' with value 'VALUE' | |
| the cookie 'LOCATOR' is set to 'VALUE' | |
| the cookie 'LOCATOR' is not set to 'VALUE' | |
| the cookie 'LOCATOR' is set | |
| the cookie 'LOCATOR' is not set | |

### When...

| Step definition | Notes |
| --- | --- |
| I click _the_ 'LOCATOR' | |
| I set 'LOCATOR' to value 'VALUE' | |
| I submit the _form_ 'LOCATOR' | |
| I press 'KEY' | |
| I clear _the_ 'LOCATOR' | |
| I&nbsp;select&nbsp;the&nbsp;option&nbsp;for&nbsp;select&nbsp;element&nbsp;'LOCATOR'&nbsp;with&nbsp;the&nbsp;text&nbsp;'VALUE' | |

### Then...

| Step definition | Notes |
| --- | --- |
| I expect to eventually be on the 'PAGENAME' page | Using this changes the page object to the PAGENAME so any subsequent steps in that scenario will be pointing to that page |
| I expect the url 'URL' is opened in a new tab | |
| I expect the url 'URL' is opened in a new window | |
| I expect the url to contain 'STRING' | |
| I expect the url to be 'STRING' | |
| I expect the url to not be 'STRING' | |
| I expect _the_ 'LOCATOR' to be visible | |
| I expect _the_ 'LOCATOR' to be hidden | |
| I expect the border colour of the 'LOCATOR' to be 'STRING' | |
| I expect the colour of the 'LOCATOR' to be 'STRING' | |
| I expect the background colour of the 'LOCATOR' to be 'STRING' | |
| I expect the title to be 'STRING' | |
| I expect the title to not be 'STRING' | |
| I expect _the_ 'LOCATOR' to appear exactly 'NUMBER' times | |
| I expect _the_ 'LOCATOR' to not appear exactly 'NUMBER' times | |
| I expect _the_ 'LOCATOR' to exist | |
| I expect _the_ 'LOCATOR' to not exist | |
| I expect _the_ 'LOCATOR' to contain the text 'STRING' | |
| I expect _the_ 'LOCATOR' to not contain the text 'STRING' | |
| I expect _the_ 'LOCATOR' to contain any text | |
| I expect _the_ 'LOCATOR' to not contain any text | |
| I expect _the_ 'LOCATOR' to be checked | |
| I expect _the_ 'LOCATOR' to not be checked | |
| I expect _the_ 'LOCATOR' to be selected | |
| I expect _the_ 'LOCATOR' to not be selected | |
| I expect _the_ 'LOCATOR' to be enabled | |
| I expect _the_ 'LOCATOR' to not be enabled | |
| I expect cookie 'LOCATOR' to contain 'VALUE' | |
| I expect cookie 'LOCATOR' to not contain 'VALUE' | |
| I expect cookie 'LOCATOR' to exist | |
| I expect cookie 'LOCATOR' to not exist | |
| I expect _the_ 'LOCATOR' to have the class 'CLASSNAME' | |
| I expect _the_ 'LOCATOR' to not have the class 'CLASSNAME' | |
| I expect _the_ 'LOCATOR' to be focused | |
| I expect _the_ 'LOCATOR' to be empty | |
| I expect _the_ 'LOCATOR' to not be empty | |
| I expect the value of _the_ 'LOCATOR' to be 'VALUE'  | |
| I expect the value of _the_ 'LOCATOR' to not be 'VALUE'  | |
| I&nbsp;expect&nbsp;_the_&nbsp;'LOCATOR'&nbsp;has&nbsp;an&nbsp;attribute&nbsp;'ATTRIBUTE_NAME'&nbsp;with&nbsp;a&nbsp;value&nbsp;of&nbsp;'VALUE'  | |
| fail step and take screenshot | |