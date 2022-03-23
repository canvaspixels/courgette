# Courgette - Bringing sanity to test automation with Selenium
Documentation has been moved to [Courgette-Testing.com](http://courgette-testing.com)

This project was formerly known as Cuketractor (formerly cucumber-protractor on npm)

![courgette](https://raw.githubusercontent.com/canvaspixels/courgette/master/courgette.jpg?v=2)

## Courgette gives you:

* a load of [generic step definitions](http://courgette-testing.com/step-definitions) for you to begin writing Given When Then scenarios that will run as soon as you add the CSS or XPath selectors to the .page (YAML) file
* snippets or live templates for intellisense in your favourite IDE to write those steps accurately and quickly
* [Courgette API](http://courgette-testing.com/api) for creating your own step definitions
* screenshots on error for debugging
* a step for named screenshots
* an HTML report
* a Cucumber formatter for nice output in the terminal
* a Cucumber formatter for step definition usage
* an error report summary in the terminal output
* Windows, Mac, Linux, iOS, and Android support
* ability to DRY out selectors with .component (YAML) files
* ability to run against cloud services that provide a selenium grid
* ability to easily create true [BDD user stories](http://courgette-testing.com/bdd)

## Contributing

Please get in touch if you'd like to contribute to this project.

To get started:

1. Clone this repository and cd into it
2. Install nodeJS if you don't already have it
3. Install node_modules `npm install`
4. Install selenium's latest Chromedriver `npm run install-chromedriver`. Note: on some linux distributions, the Chrome version isn't always the latest. Just make sure your Chrome version number matches the Chromedriver version number. Refer to [webdriver-manager](https://github.com/angular/webdriver-manager) for further help. It may be that you need to run:
`./node_modules/protractor/bin/webdriver-manager update --versions.chrome=79`
5. Run the tests `npm run ct`

If you have any problems with the above steps, please create an issue.

If you've added new steps, please create the snippets files by running the script: `npm run snippets`

## Useful links

* [Behaviour-Driven Development](https://en.wikipedia.org/wiki/Behavior-driven_development)
