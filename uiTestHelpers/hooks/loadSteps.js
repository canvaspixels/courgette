const path = require('path');
const fs = require('fs');
const givenSteps = require('../stepDefinitions/commonGivenSteps');
const whenSteps = require('../stepDefinitions/commonWhenSteps');
const thenSteps = require('../stepDefinitions/commonThenSteps');

const commonSteps = [].concat(givenSteps, whenSteps, thenSteps);
require('colors');

const { defineStep } = require(path.join(process.cwd(), 'node_modules/cucumber'));
const { pomConfig } = require(path.join(process.cwd(), process.env.confFile || 'courgette-conf.js'));

const stepsObj = {};
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
        if (!stepCleaned.startsWith('#')) {
          stepsObj[currentStep].push({ stepCleaned, step: step.trim() });
        }
      }
    });

    Object.keys(stepsObj).forEach((stepRegexStr) => { // loop each Step:
      defineStep(new RegExp(stepRegexStr), async function () {
        const substeps = stepsObj[stepRegexStr];
        console.log(`\nStep: ${stepRegexStr}`);
        for (let i = 0; i < substeps.length; i+=1) {
          const substepCleaned = substeps[i].stepCleaned;
          const correspondingCommonStep = commonSteps.find((commonStep) => commonStep.regex && commonStep.regex.test(substepCleaned));

          try {
            if (correspondingCommonStep) {
              const args = substepCleaned.match(correspondingCommonStep.regex);
              args.shift();
              const argsToPass = args.length;
              args.unshift(this);
              const fn = require(`../stepDefinitions/${correspondingCommonStep.path}`); // todo: path on windows
              let doneCallbackCalled = false;
              let callbackPromise;
              if (fn.length > argsToPass) {
                const doneCallback = () => {
                  doneCallbackCalled = true;
                };
                args.push(doneCallback);
                callbackPromise = () =>
                  new Promise((res, rej) => {
                    const checkIsCalled = () => {
                      if (doneCallbackCalled) {
                        return res();
                      }
                      setTimeout(checkIsCalled, 100);
                    };
                    checkIsCalled();
                  });
              }
              await fn.call(...args);
              if (callbackPromise) {
                // console.log('callbackPromise', callbackPromise);
                await callbackPromise();
              }
              console.log(`            ${substeps[i].step} ---> PASSED`.green);
            } else {
              console.log(`            ${substeps[i].step} ---> FAILED`.red);
              console.log(`NO STEP FOUND:     ${substeps[i].step}`);
              return Promise.reject(`NO STEP FOUND:     ${substeps[i].step}`);
            }
          } catch (e) {
            console.log(`            ${substeps[i].step} ---> FAILED`.red);
            console.error(e);
            return Promise.reject(e);
          }
        }
      });
    });
  }
});
