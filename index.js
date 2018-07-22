#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const argv = require('yargs').argv;

// eslint-disable-next-line
const { pomConfig } = require(path.join(process.cwd(), argv.confFile || process.env.confFile || 'conf.js'));
const { spawn } = require('child_process');
const cucumberHtmlReporter = require('cucumber-html-reporter');

console.log('Brm brm... off we go!');

const rmDir = function(dir, rmSelf) {
  var files;
  rmSelf = (rmSelf === undefined) ? true : rmSelf;
  dir = dir + '/';
  try { files = fs.readdirSync(dir); } catch (e) { console.log('Directory not exist.'); return; }
  if (files.length > 0) {
    files.forEach(function(x, i) {
      if (fs.statSync(dir + x).isDirectory()) {
        rmDir(dir + x);
      } else {
        fs.unlinkSync(dir + x);
      }
    });
  }
  if (rmSelf) {
    // check if user want to delete the directory ir just the files in this directory
    fs.rmdirSync(dir);
  }
};

const outputPath = path.join(process.cwd(), pomConfig.outputPath);
if (fs.existsSync(outputPath)){
  rmDir(outputPath);
}
if (!fs.existsSync(outputPath)){
  fs.mkdirSync(outputPath);
}
const logPath = path.join(outputPath, 'test-result.log');
const logStream = fs.createWriteStream(logPath);
const cmd = 'node_modules/.bin/protractor';
const args = ['./conf.js'];
const spawnedProcess = spawn(cmd, args, { env: Object.assign({}, process.env, {
  cukeTags: argv.tags,
  confFile: argv.confFile || process.env.confFile || 'conf.js'
}) });

const cucumberHtmlReporterConfig = Object.assign({
  theme: 'bootstrap',
  jsonDir: `${outputPath}/`,
  output: `${outputPath}/cucumberReport.html`,
  reportSuiteAsScenarios: true,
  launchReport: false,
}, pomConfig.cucumberHtmlReporterConfig);

const printCukeErrors = (el, step) => {
  // eslint-disable-next-line
  if (step.result.error_message) {
    const red = '\x1b[31m%s\x1b[0m';
    const yellow = '\x1b[33m%s\x1b[0m';
    // eslint-disable-next-line
    console.log(red, `------------------ Scenario Error --------------- ${el.name}`);
    // eslint-disable-next-line
    console.log(yellow, `Tags: ${el.tags.map((tag) => tag.name).join(', ')}`);
    // eslint-disable-next-line
    console.log(yellow, `Step: ${step.keyword}${step.name}`);
    // eslint-disable-next-line
    console.log(yellow, `Location: ${step.match.location}`);
    // eslint-disable-next-line
    console.log(yellow, `Error message: ${step.result.error_message}`);
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
      } else if (scenarioStatus === 'failed') {
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
  // eslint-disable-next-line no-console
  console.log(data.toString());

  // eslint-disable-next-line
  logStream.write(data.toString().replace(/\x1b\[\d\dm/g, ''));
};

spawnedProcess.stdout.on('data', output);
spawnedProcess.stderr.on('data', output);

spawnedProcess.on('exit', () => {
  logStream.end();

  cucumberHtmlReporter.generate(cucumberHtmlReporterConfig);

  loopThroughReport().then(({ successCount, totalCount }) => {
    process.exitCode = totalCount === successCount ? 0 : 1;
  });

});
