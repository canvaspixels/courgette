const cucumber = require('cucumber');

const timeTrim = (num) => (`00${num}`).slice(-2);

class CucumberStepFormatter extends cucumber.Formatter {
  constructor(options) {
    super(options);
    options.eventBroadcaster
      .on('test-step-attachment', this.attached.bind(this))
      .on('test-case-started', this.logTestCaseName.bind(this))
      .on('test-step-finished', this.logTestStep.bind(this))
      .on('test-case-finished', this.logSeparator.bind(this))
      .on('test-run-finished', this.logTestRunResult.bind(this));
  }

  attached({ data }) {
    if (data.includes('Hook Step:')) {
      this.hookStep = data;
    }
  }

  logTestCaseName(event) {
    const d = new Date();
    const time = `${timeTrim(d.getHours())}:${timeTrim(d.getMinutes())}:${timeTrim(d.getSeconds())}`;
    this.log(`${d.getFullYear()}-${timeTrim(d.getMonth() + 1)}-${timeTrim(d.getDate())}T${time}`);
    const { gherkinDocument, pickle } = this.eventDataCollector.getTestCaseAttempt(event);
    const text = `${gherkinDocument.feature.name}::: ${pickle.name}\n`;
    const colouredText = this.colorFns.location(text);
    this.log(colouredText);
  }

  logTestStep(event) {
    const testCaseAttempt = this.eventDataCollector.getTestCaseAttempt(event.testCase);
    testCaseAttempt.stepResults = testCaseAttempt.testCase.steps.map(() => ({}));

    const testStep = cucumber.formatterHelpers.parseTestCaseAttempt({ testCaseAttempt }).testSteps[event.index];
    if (!testStep.sourceLocation) return; // hook
    const d = new Date();
    const time = `${timeTrim(d.getHours())}:${timeTrim(d.getMinutes())}:${timeTrim(d.getSeconds())}`;
    const text = `${time} ${testStep.keyword.trim()} ${testStep.text} ---> ${event.result.status.toUpperCase()}\n`;
    const colouredText = this.colorFns[event.result.status](text);
    this.log(colouredText);
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
