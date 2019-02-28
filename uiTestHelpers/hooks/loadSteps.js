const path = require('path');
const yaml = require('yaml-page-objects').default;
const fs = require('fs');
const givenSteps = require('../stepDefinitions/commonGivenSteps');
const whenSteps = require('../stepDefinitions/commonWhenSteps');
const thenSteps = require('../stepDefinitions/commonThenSteps');
const commonSteps = [].concat(givenSteps, whenSteps, thenSteps);

// const createPage = require('../../uiTestHelpers/createPage');
// const createComponent = require('../../uiTestHelpers/createComponent');

const { defineStep } = require(path.join(process.cwd(), 'node_modules/cucumber'));
const { pomConfig } = require(path.join(process.cwd(), process.env.confFile || 'courgette-conf.js'));

let stepsObj = {};
let currentStep;

const stepsFiles = fs.readdirSync(pomConfig.stepsPath);
stepsFiles.forEach((stepsFile) => {
  if (stepsFile.endsWith('.steps')) {
    const steps = fs.readFileSync(path.join(pomConfig.stepsPath, stepsFile), 'utf8')
      .split('\n') // todo: check for windows CRLF
      .map((step) => step.trim());

    steps.forEach((step) => {
      if (step.toLowerCase().startsWith('step:')) {
        currentStep = step.replace(/^Step:( )*/i, '').trim();

        stepsObj[currentStep] = [];
      } else if (stepsObj[currentStep] && step) {
        const stepCleaned = step.replace(/^(Given|When|Then|And|But)/i, '').trim();
        stepsObj[currentStep].push(stepCleaned);
      }
    });
    Object.keys(stepsObj).forEach((stepRegexStr) => { // loop each Step:
        defineStep(new RegExp(stepRegexStr), async function() {
          await Promise.all(stepsObj[stepRegexStr].map((substep) => {
            const correspondingCommonStep = commonSteps.find((commonStep) => {
              return commonStep.regex && commonStep.regex.test(substep);
              // console.log(commonStep.regex && commonStep.regex.test(substep), substep, commonStep.regex);
            });

            if (correspondingCommonStep) {
              console.log(correspondingCommonStep);
              const args = substep.match(correspondingCommonStep.regex);
              args.shift();
              console.log(args, args.length, 'matches');
              return require(`../stepDefinitions/${correspondingCommonStep.path}`)(...args);// todo: path on windows
            }
          }));
        });
      // });
    });
  }
});