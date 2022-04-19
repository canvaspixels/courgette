## 5.0.0

### From Protractor to WebdriverIO (WDIO)

Due to [Protractor ending development](https://github.com/angular/protractor/issues/5502), WDIO will now be used instead going forward.

### What this means for you...

* The biggest thing is that you'll need a new config. See the [courgette-conf.js](https://github.com/canvaspixels/courgette/blob/master/courgette-conf.js) inside the Courgette repo that's used to test that Courgette itself works (it runs a small website to test against).

* The next biggest thing is that Courgette is doing away with `.js` page objects (and component objects). From now on only the YAML syntax is supported.

* Built-in step definitions are still all the same as before however some have been removed (see below). However if you have made your own step definitions, you'll need to use WDIO methods where you've used Protractor methods. E.g. `browser.executeScript` becomes `browser.execute`. See all the methods on the WDIO site e.g. here: https://webdriver.io/docs/api/element/addValue/

See the contents of the indentical step definition between the [Protractor way](https://github.com/canvaspixels/courgette/tree/master/uiTestHelpers/stepDefinitions/actions/setInputFieldValue.js) and the [WDIO way](https://github.com/canvaspixels/courgette/tree/master/uiTestHelpers/stepDefinitionsWDIO/actions/setInputFieldValue.js).

* Inside page objects `xpaths:` items should now come under `selectors:`

### Changes to methods on `this` object (and associated step definitions have been removed)
* Deleted submitForm
* appendReactInputFieldValue, checkFocus, checkIsOpenedInNewWindow have been temporarily removed
* checkClass, checkElementBackgroundColour, checkElementBorderColour, checkElementColour have been removed but they can be re-introduced if there is a demand for it

### Caveats

* Testing native mobile apps may have issues currently. Please create an issue or submit a pull request for any problems found.

## 4.1.0
* Fixing sticky situations when a position sticky element is over the top of the element you’re trying to click. It will automatically scroll down the page until the click works

## 4.0.3
* increase viewport height in sample
## 4.0.2
* fix to disableAnimations in Chrome

## 4.0.1
* fix for default browser now being Chrome

## 4.0.0
* env variables uppercased and underscored and COURGETTE_ prefixed. Note that some of these will be in the config in your project so ideally change accordingly:
  * courgetteTimeout is now COURGETTE_TIMEOUT
  * disableHeadless is now COURGETTE_HEADLESS=false or DH=1 for short
  * linearise is now COURGETTE_LINEARISE
  * showStepDefinitionUsage is now COURGETTE_SHOW_STEP_DEFINITION_USAGE
  * DEBUG is now COURGETTE_DEBUG
  * tags is now COURGETTE_TAGS
  * browser is now COURGETTE_BROWSER

* SUPPRESS_PAGE_OBJECT_PATH_WARNING has been added to remove warning from logs regarding page path not being set
* making ChromeDriver the default for the samples

## 3.12.0
* Remove taken screenshot from report - Error screenshots will still appear in the HTML report, but step definition taken screenshots will not
* improved cucumber formatter
* GLOB pattern patching on Page object paths - check on page paths using minimatch lib - now you can add paths like /my/**/path to auto assert on page URLs

## 3.11.0
* forceSuccess flag added to pomConfig to force success exitCode even if the total number of specs matches the success count

## 3.8.2
* steps timeout - crude solution - number of steps x timeout set. This means that if you have a long step and the first times out, you may be waiting a while

## 3.8.1
* bugfix for steps error reporting

## 3.8.0
* vastly improved errors including more info when using step files
* adding protractor-console-plugin
* adding info message if no page path is present
* README update for contributing

## 3.7.0
* removing imagemin

## 3.3.0
* removing imagemin, this will be added as an optional step in future, and installed on the host repo to reduce the amount of packages being installed
* adding removeOutputPathOnStart to pomConfig (TODO: in future rename to courgetteConfig)

## 3.0.0
* Appium now supported with the help of WDIO - see [mobile steps](https://courgette-testing.com/mobile-step-definitions) and [getting started page](https://courgette-testing.com/getting-started) for docs
* Postinstall script has been removed and scripts have been added for running manually see [getting started page](https://courgette-testing.com/getting-started)

## 2.19.0
* added compression for screenshot pngs

## 2.18.0
* adding new step definitions
  * I wait for 'LOCATOR' to exist
  * I wait for 'LOCATOR' to not exist
  * I wait '1' second
  * I wait 'n' seconds

## 2.17.0
* IMPORTANT - cukeTags is now just tags
* @ignore fixed and now throws an error if you try and run a tag that also has a @ignore tag next to it
* now throwing errors on duplicate locator keys across the types (css selectors, xpaths deepselectors)
* adding components example to the sample

## 2.16.0
* support added for input type="file" https://github.com/canvaspixels/courgette/pull/32

## 2.15.0
* Adds "extends" capability to allow you to extend another page.
See example and more info here: https://github.com/canvaspixels/courgette/blob/master/testsToValidateStepDefinitions/pages/similar-simple.page

## 2.14.0
* Adding reusable .steps file which can dynamically create parameterised step definitions. See https://github.com/canvaspixels/courgette/pull/29 for examples

## 2.10.0
* introduces the notion of writing Given When Thens without needing page objects for simple specification writing. See [newly organised Available step definitions](https://github.com/canvaspixels/courgette/blob/8133f6bc52304fa5e328402ccc9fd2548980509b/STEP_DEFINITIONS.md#step-definitions) split into two categories. One no
* duplication in the snippets builder removed

## 2.8.0
* Officially Cuketractor has been renamed to Courgette
* Setup script is now in the postinstall so all that is needed for setup is `npm i courgette`

## 2.5.0
Added support for web components

## 2.4.0
* moved to FirefoxDriver by default
* added screenshot viewer for screenshots taken by steps (not error screenshots)

## 2.2.0
* improved documentation for BDD
* renamed checkEventualUrlFromPOM to setPageObjectThenCheckUrl
* load of small fixes https://github.com/canvaspixels/courgette/issues/10
* [added validation to .component and .page files](https://github.com/canvaspixels/courgette/issues/11)
* [added Cucumber runner for unused steps](https://github.com/canvaspixels/courgette/issues/9)
* [added a couple of tests for set input](https://github.com/canvaspixels/courgette/issues/7)
* [Made test runs fail on duplicate locators](https://github.com/canvaspixels/courgette/issues/6)
* [Deleted snippets in repo before recreating](https://github.com/canvaspixels/courgette/issues/4)

## 2.0.3
adding install-chromedriver script and postinstall script to your project's package.json when you run the setup script

## 2.0.0
removed the postinstall script from courgette's package.json as it causes issues if behind a proxy

## 1.3.1
Adding take a screenshot step

## 1.2.0
Windows is now supported


## 1.1.0
* Introducing .page and .component yaml files, a simpler way to define and compose your page objects, with less boilerplate.


## 1.0.7
* Making test run return 1 as exit code if any of the steps are undefined / failing
* improving README
* making camelcase folders consistent
