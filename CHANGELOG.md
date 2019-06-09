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
