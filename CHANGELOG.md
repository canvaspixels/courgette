## 2.2.0
* improved documentation for BDD
* renamed checkEventualUrlFromPOM to setPageObjectThenCheckUrl
* load of small fixes https://github.com/canvaspixels/cucumber-protractor/issues/10
* [added validation to .component and .page files](https://github.com/canvaspixels/cucumber-protractor/issues/11)
* [added Cucumber runner for unused steps](https://github.com/canvaspixels/cucumber-protractor/issues/9)
* [added a couple of tests for set input](https://github.com/canvaspixels/cucumber-protractor/issues/7)
* [Made test runs fail on duplicate locators](https://github.com/canvaspixels/cucumber-protractor/issues/6)
* [Deleted snippets in repo before recreating](https://github.com/canvaspixels/cucumber-protractor/issues/4)

## 2.0.3
adding install-chromedriver script and postinstall script to your project's package.json when you run the setup script

## 2.0.0
removed the postinstall script from cuketractor's package.json as it causes issues if behind a proxy

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
