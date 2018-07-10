const cucumber = require('cucumber');

class CucumberStepFormatter extends cucumber.Formatter {
  constructor(options) {
    super(options);
    options.eventBroadcaster
      .on('test-case-started', this.logTestCaseName.bind(this))
      .on('test-step-finished', this.logTestStep.bind(this))
      .on('test-case-finished', this.logSeparator.bind(this))
      .on('test-run-finished', this.logTestRunResult.bind(this));
  }

  logTestCaseName({ sourceLocation }) {
    const { gherkinDocument, pickle } = this.eventDataCollector.getTestCaseData(sourceLocation);
    const text = `${gherkinDocument.feature.name}::: ${pickle.name}\n`;
    const colouredText = this.colorFns.location(text);
    this.log(colouredText);
  }

  logTestStep({ testCase, index, result }) {
    const { gherkinKeyword, pickleStep } =
      this.eventDataCollector.getTestStepData({ testCase, index });

    let text;

    if (pickleStep) {
      text = `${gherkinKeyword}${pickleStep.text} ---> ${result.status.toUpperCase()}`;
    } else {
      text = `Hook - ${result.status.toUpperCase()}`;
    }

    const colouredText = this.colorFns[result.status](text);
    this.log(`${colouredText}\n`);
  }

  logSeparator() {
    this.log('\n');
  }

  logTestRunResult({ result }) {
    if (result.success) {
      this.log(this.colorFns.passed('---PASS---'));
    } else {
      this.log(this.colorFns.failed('---FAIL---'));
    }
  }
}

module.exports = CucumberStepFormatter;
