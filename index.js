#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const { argv } = require('yargs');
const Table = require('cli-table');
require('colors');

// eslint-disable-next-line
const { pomConfig } = require(path.join(process.cwd(), argv.confFile || process.env.confFile || 'conf.js'));
const { spawn } = require('child_process');
const cucumberHtmlReporter = require('cucumber-html-reporter');

const log = (...args) => {
  // eslint-disable-next-line no-console
  console.log(...args);
};

log('Brm brm... off we go!');

const rmDir = function rmDir(dir, rmSelf) {
  let files;
  const isSelf = (rmSelf === undefined) ? true : rmSelf;
  const directory = `${dir}/`;
  try {
    files = fs.readdirSync(directory);
  } catch (e) {
    log('Directory not exist.');
    return;
  }
  if (files.length > 0) {
    files.forEach((x) => {
      const newPath = `${directory}${x}`;
      if (fs.statSync(newPath).isDirectory()) {
        rmDir(newPath);
      } else {
        fs.unlinkSync(newPath);
      }
    });
  }
  if (isSelf) {
    // check if user want to delete the directory ir just the files in this directory
    fs.rmdirSync(directory);
  }
};

const outputPath = path.join(process.cwd(), pomConfig.outputPath);
if (fs.existsSync(outputPath)) {
  rmDir(outputPath);
}
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath);
}
const logPath = path.join(outputPath, 'test-result.log');
const logStream = fs.createWriteStream(logPath);
const cmd = 'node_modules/.bin/protractor';
const args = ['./conf.js'];
const firstArg = process.argv && process.argv[2];
const tags = firstArg && firstArg.indexOf('--') !== 0 ? firstArg : null;
const spawnedProcess = spawn(cmd, args, {
  env: Object.assign({}, process.env, {
    cukeTags: (tags || argv.tags || '').replace(',', ' or '),
    confFile: argv.confFile || process.env.confFile || 'conf.js',
  }),
});

const cucumberHtmlReporterConfig = Object.assign({
  theme: 'bootstrap',
  jsonDir: `${outputPath}/`,
  output: `${outputPath}/cucumberReport.html`,
  reportSuiteAsScenarios: true,
  launchReport: false,
}, pomConfig.cucumberHtmlReporterConfig);

const printCukeErrors = (el, step) => {
  const red = '\x1b[31m%s\x1b[0m';
  const yellow = '\x1b[33m%s\x1b[0m';
  if (step.result.error_message) {
    log(red, `\n------------------ Scenario Error --------------- ${el.name}`);
    log(yellow, `Tags: ${el.tags.map((tag) => tag.name).join(', ')}`);
    log(yellow, `Step: ${step.keyword}${step.name}`);
    log(yellow, `Location: ${step.match.location}`);
    log(yellow, `Error message: ${step.result.error_message}`);
  } else if (step.result.status === 'undefined') {
    log(red, `\n------------------ Scenario Undefined Step Definition --------------- ${el.name}`);
    log(yellow, `Tags: ${el.tags.map((tag) => tag.name).join(', ')}`);
    log(yellow, `Step: ${step.keyword}${step.name}`);
  }

  if (step.result.error_message || step.result.status === 'undefined') {
    const screenshotStep = el.steps.find((stp) =>
      stp.keyword === 'After' &&
        stp.match &&
        stp.match.location &&
        stp.match.location.includes('attachScreenshotAfter'));

    const screenshotFilePath = screenshotStep &&
      screenshotStep.embeddings &&
      screenshotStep.embeddings
        .find((embed) =>
          embed.data && embed.data.includes('ScreenshotFilePath'));
    log('-----SCREENSHOT - hold cmd (on mac) and click .png below if using iterm ----');
    log(screenshotFilePath ? screenshotFilePath.data : '');
    log('---------');
  }
};

const loopThroughReport = () => new Promise((resolve, reject) => {
  try {
    // eslint-disable-next-line
    const features = JSON.parse(fs.readFileSync(`${cucumberHtmlReporterConfig.output}.json`, 'utf8'));

    const elements = features.reduce((arr, scenario) => arr.concat(scenario.elements), []);

    let successCount = 0;
    let failureCount = 0;
    let totalCount = 0;

    elements.forEach((el) => {
      let scenarioStatus = 'passed';
      el.steps.forEach((step) => {
        const { status } = step.result;
        const { keyword } = step;

        if (!keyword.includes('After') && !keyword.includes('Before')) {
          if (status === 'failed' || scenarioStatus !== 'failed') {
            scenarioStatus = status;
          }
        }

        printCukeErrors(el, step);

        return step.result.status;
      });

      if (scenarioStatus === 'passed') {
        successCount += 1;
      } else {
        failureCount += 1;
      }
      totalCount += 1;
    });

    resolve({ successCount, failureCount, totalCount });
  } catch (e) {
    reject(e);
  }
});

const output = (data) => {
  log(data.toString());
  // eslint-disable-next-line
  logStream.write(data.toString().replace(/\x1b\[\d\dm/g, ''));
};

spawnedProcess.stdout.on('data', output);
spawnedProcess.stderr.on('data', output);

spawnedProcess.on('exit', () => {
  logStream.end();

  cucumberHtmlReporter.generate(cucumberHtmlReporterConfig);

  loopThroughReport()
    .then(({ successCount, failureCount, totalCount }) => {
      const table = new Table({
        head: [
          'Total Scenarios'.white,
          'Successful'.green,
          'Failures'.red,
        ],
      });

      table.push([totalCount, `${successCount}`.green, `${failureCount}`.red]);

      log('');
      log(table.toString());
      process.exitCode = totalCount === successCount ? 0 : 1;
    });
});
