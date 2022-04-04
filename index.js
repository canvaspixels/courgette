#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const { argv } = require('yargs');
const Table = require('cli-table');
require('colors');
const os = require('os');
const getFreePort = require('./scripts/freeport');

let chromePort;

const generateScreenshotViewer = require('./uiTestHelpers/generateScreenshotViewer');

// eslint-disable-next-line
const confFile = argv.confFile || process.env.COURGETTE_CONF || 'courgette-conf.js';
console.log('Loading confFile: ', confFile);
const { pomConfig } = require(path.resolve(confFile));
const { spawn } = require('child_process');
const cucumberHtmlReporter = require('cucumber-html-reporter');

const log = (...args) => {
  console.log(...args);
};

log('Courgette initialising!!...');
// (function() {
//   var P = ["\\", "|", "/", "-"];
//   var x = 0;
//   return setInterval(function() {
//     process.stdout.write("\r" + P[x++]);
//     x &= 3;
//   }, 250);
// })();

const rmDir = function rmDir(dir, rmSelf) {
  let files;
  const isSelf = (rmSelf === undefined) ? true : rmSelf;
  const directory = dir;
  try {
    files = fs.readdirSync(directory);
  } catch (e) {
    log('Directory not exist.');
    return;
  }
  if (files.length > 0) {
    files.forEach((x) => {
      const newPath = path.join(directory, x);
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

const outputPath = pomConfig.outputPath.startsWith('/') ? pomConfig.outputPath : path.join(process.cwd(), pomConfig.outputPath);
if (fs.existsSync(outputPath) && (typeof pomConfig.removeOutputPathOnStart === 'undefined' || pomConfig.removeOutputPathOnStart)) {
  rmDir(outputPath);
}
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath);
}

const screenshotStepPath = (pomConfig.screenshotStepPath || 'stepDefinitionScreenshots');
const screenshotsDir = path.join(pomConfig.screenshotPath || pomConfig.outputPath, screenshotStepPath);
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir);
}

const logPath = path.join(outputPath, 'test-result.log');
const logStream = fs.createWriteStream(logPath);


let cmd = path.join('node_modules', '.bin', `protractor${os.type().toLowerCase().includes('windows') ? '.cmd' : ''}`);

if (pomConfig.platform === 'mobile' || pomConfig.bindings === 'wdio') {
  cmd = path.join('node_modules', '.bin', `wdio${os.type().toLowerCase().includes('windows') ? '.cmd' : ''}`);
}

const args = [confFile];
const firstArg = process.argv && process.argv[2];
let tags = firstArg && firstArg.indexOf('--') !== 0 ? firstArg : null;
tags = (tags || argv.tags || '').replace(',', ' or ');

let rerunCount = 0;

const startRunner = () => {
  if (process.env.COURGETTE_DEBUG) {
    console.log('spawning courgette process: ', cmd, args.join(' '));
    console.log('with tags: ', tags);
    console.log('on port: ', chromePort);
  }
  const spawnedProcess = spawn(cmd, args, {
    env: Object.assign({}, process.env, {
      COURGETTE_CHROME_PORT: chromePort,
      COURGETTE_TAGS: tags,
      COURGETTE_CONF: confFile,
      COURGETTE_SHOW_STEP_DEFINITION_USAGE: process.env.COURGETTE_SHOW_STEP_DEFINITION_USAGE || argv.showStepDefinitionUsage || '',
    }),
  });

  const cucumberHtmlReporterConfig = Object.assign({
    theme: 'bootstrap',
    jsonDir: outputPath,
    output: path.join(outputPath, 'cucumberReport.html'),
    reportSuiteAsScenarios: true,
    launchReport: false,
  }, pomConfig.cucumberHtmlReporterConfig);

  const printCukeErrors = (el, step, feature) => {
    const red = '\x1b[31m%s\x1b[0m';
    const yellow = '\x1b[33m%s\x1b[0m';
    if (step.result.error_message) {
      log(red, `\n------------------ Scenario Error --------------- ${el.name}`);
      log(yellow, `Tags: ${el.tags.map((tag) => tag.name).join(', ')}`);
      log(yellow, `Step: ${step.keyword} ${step.name}`);
      // let { location } = step.match;
      let stepsGroupStepsLength = 1;
      if (step.embeddings) {
        const stepsGroupSteps = step.embeddings.filter((attachItem) => {
          let stepsGroupStep;
          try {
            stepsGroupStep = attachItem.data && JSON.parse(attachItem.data).stepsGroupStep;
          } catch (e) {} // eslint-disable-line no-empty

          return stepsGroupStep;
        });

        if (stepsGroupSteps.length) {
          stepsGroupStepsLength = stepsGroupSteps.length;
          const lastStepsGroupStep = stepsGroupSteps.pop();
          let lastStepsGroupStepData;
          try {
            lastStepsGroupStepData = JSON.parse(lastStepsGroupStep.data);
          } catch (e) {} // eslint-disable-line no-empty
          if (lastStepsGroupStepData) {
            log(yellow, `    Steps group step: ${lastStepsGroupStepData.stepsGroupStep}`);
            // location = lastStepsGroupStepData.stepsFile;
          }
        }
      }

      // log(yellow, `Location: ${location}`);
      log(yellow, `Feature: ${feature.uri}${el.tags && el.tags.length ? `:${el.tags[el.tags.length - 1].line}` : ''}`);
      if (step.result.error_message.includes('function timed out')) {
        log(yellow, 'Error:');
        log(yellow, `    The element you're looking for could not be found within the ${pomConfig.timeoutInSeconds * stepsGroupStepsLength} second timeout.`);
        log(yellow, '    Make sure you test your xpath or css selector in the Chrome devtools with $x and $ functions respectively.');
      } else {
        log(yellow, step.result.error_message);
        if (step.result.error_message.includes('connect ECONNRESET')) {
          if (rerunCount < 5) {
            rerunCount += 1;
            setTimeout(() => startRunner, 5000);
          }
        }
      }
    } else if (step.result.status === 'undefined' && !pomConfig.forceSuccess) {
      log(red, `\n------------------ Scenario Undefined Step Definition --------------- ${el.name}`);
      log(yellow, `Tags: ${el.tags.map((tag) => tag.name).join(', ')}`);
      log(yellow, `Step: ${step.keyword} ${step.name}`);
    }

    if ((step.result.error_message || step.result.status === 'undefined') && !pomConfig.forceSuccess) {
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

      // const elements = features.reduce((arr, scenario) => arr.concat(scenario.elements), []);

      let successCount = 0;
      let failureCount = 0;
      let totalCount = 0;

      features.forEach((feature) => {
        feature.elements.forEach((el) => {
          let scenarioStatus = 'passed';
          el.steps.forEach((step) => {
            const { status } = step.result;
            const { keyword } = step;

            if (!keyword.includes('After') && !keyword.includes('Before')) {
              if (status === 'failed' || scenarioStatus !== 'failed') {
                scenarioStatus = status;
              }
            }

            printCukeErrors(el, step, feature);

            return step.result.status;
          });

          if (scenarioStatus === 'passed') {
            successCount += 1;
          } else {
            failureCount += 1;
          }
          totalCount += 1;
        });
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

  const deleteEmptyJSONS = (jsonOutputPath) => {
    fs.readdirSync(jsonOutputPath).forEach((file) => {
      if (file.includes('.json')) {
        const filePath = path.join(jsonOutputPath, file);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        if (fileContents === '[]') {
          console.log('deleting empty file: ', file);
          fs.unlinkSync(filePath);
        }
      }
    });
  };

  const outputDirContainsJsons = (jsonOutputPath) => {
    let containsJsons = false;
    fs.readdirSync(jsonOutputPath).forEach((file) => {
      if (file.includes('.json')) {
        containsJsons = true;
      }
    });
    return containsJsons;
  };

  spawnedProcess.stdout.on('data', output);
  spawnedProcess.stderr.on('data', output);

  spawnedProcess.on('exit', async (code) => {
    logStream.end();

    deleteEmptyJSONS(pomConfig.outputPath);

    generateScreenshotViewer(path.join(pomConfig.screenshotPath || pomConfig.outputPath, pomConfig.screenshotStepPath || 'stepDefinitionScreenshots'));

    if (!outputDirContainsJsons(pomConfig.outputPath)) {
      console.log('-----------------------------------');
      if (pomConfig.platform === 'mobile') {
        console.log(`Exit mobile run with code ${code}`);
        process.exitCode = code;
      } else {
        console.error('NO COURGETTE SCENARIOS HAVE BEEN RUN, MAYBE YOU HAVE AN @ignore TAG ON THE ONE YOU’RE TRYING TO RUN?');
        console.error('The problem is there are no json files that can be read from.');
        console.error('Tags used: ', tags);
        console.log('-----------------------------------');
        console.log('-----------------------------------');
        console.log('Exiting with code 1');
        process.exitCode = 1;
      }
      return;
    }

    cucumberHtmlReporter.generate(cucumberHtmlReporterConfig);

    const { successCount, failureCount, totalCount } = await loopThroughReport();

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

    if (pomConfig.forceSuccess) {
      // always exit with success
      process.exitCode = 0;
    } else {
      process.exitCode = totalCount === successCount ? 0 : 1;
    }
  });
};

getFreePort(7600, 7700).then((port) => {
  chromePort = port;
  startRunner();
});
