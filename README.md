# CukeTractor - Cucumber Protractor Runner

Create easy-to-read, functioning scenarios in minutes:

1. Install the package: `npm install cucumber-protractor`
2. [Setup your config file and copy the sample file structure](setup-your-config-file-and-copy-the-sample-file-structure)
3. Run the sample: `npm run uitests`
4. Create a Page Object and locators
5. Use the step definitions provided (or create your own) to write your first scenario

![POM Cuke Tractor](https://raw.githubusercontent.com/canvaspixels/cucumber-protractor/master/pomCukeTractor.png)

Easily compose Page Objects and Component Objects. Page objects and Component Objects are composed of locators, custom methods, and other Component Objects. Components can compose Components which compose Components etc.


## Setup your config file and copy the sample file structure

1. Add to scripts in package json: `"uitests": "rm -rf uiTestResult && mkdir uiTestResult && node index.js",`
2. Copy the sample file structure `cp -R node_modules/ui-tests .`
3. Copy the sample config `cp node_modules/sample-conf.js conf.js`