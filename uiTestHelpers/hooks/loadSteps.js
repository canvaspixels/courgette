const path = require('path');
const fs = require('fs');

const cucumber = require(path.join(process.cwd(), 'node_modules/cucumber'));

require('colors');

const { defineStep } = cucumber;
const { pomConfig } = require(path.join(process.cwd(), process.env.COURGETTE_CONF || 'courgette-conf.js'));
const timeoutInSeconds = pomConfig.timeoutInSeconds || 8;

const stepsObj = {};
let currentStep;
const allSteps = cucumber.supportCodeLibraryBuilder.options.stepDefinitionConfigs;

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
      // const replacements = [];
      const replacements = {};
      let matchCounter = 0;
      const parameterisedStepRegexStr = stepRegexStr.replace(/\{\{(.*?)\}\}/g, (match) => {
        replacements[match] = matchCounter;
        matchCounter += 1;
        // replacements.push(match);
        return "([^']*)?";
      });

      async function theStepDef(...stepDefArgs) { // eslint-disable-line
        const substeps = stepsObj[stepRegexStr];
        console.log(`\nStep: ${stepRegexStr}`);
        for (let i = 0; i < substeps.length; i += 1) {
          const substepCleaned = substeps[i].stepCleaned;

          const correspondingStep =
            allSteps.find((commonStep) => commonStep.pattern && commonStep.pattern.test(substepCleaned));

          try {
            if (correspondingStep) {
              let args = substepCleaned.match(correspondingStep.pattern);

              args.shift(); // remove full string off front of args array

              args = args.map((arg) => {
                if (typeof arg === 'string') {
                  return arg.replace(/\{\{(.*?)\}\}/g, (match) => stepDefArgs[replacements[match]]);
                }

                return arg;
              });

              const argsToPass = args.length;
              args.unshift(this); // pass the this context ready for .call fn call later
              const fn = correspondingStep.code;
              let doneCallbackCalled = false;
              let callbackPromise;
              if (fn.length > argsToPass) {
                const doneCallback = () => {
                  doneCallbackCalled = true;
                };
                args.push(doneCallback);
                callbackPromise = () =>
                  new Promise((res) => {
                    const checkIsCalled = () => {
                      if (doneCallbackCalled) {
                        return res();
                      }
                      return setTimeout(checkIsCalled, 100);
                    };
                    return checkIsCalled();
                  });
              }

              this.attach(`{"stepsGroupStep": "${substeps[i].step}", "stepRegexStr": "${parameterisedStepRegexStr}", "stepsFile": "${stepsFile}"}`, 'application/json');

              const apiCallPromise = fn.call(...args);
              await apiCallPromise; // eslint-disable-line no-await-in-loop
              let cbPromise = Promise.resolve();
              if (callbackPromise) {
                cbPromise = callbackPromise();
                await cbPromise; // eslint-disable-line no-await-in-loop
              }
              Promise.all([apiCallPromise, cbPromise]).then(() => {
                console.log(`            ${substeps[i].step} ---> PASSED`.green);
              }).catch((e) => {
                console.log(`            ${substeps[i].step} ---> FAILED!!`.red);
                console.error(e);
              });
            } else {
              console.log(`            ${substeps[i].step} ---> FAILED!`.red);
              console.log(`NO STEP FOUND:     ${substeps[i].step}`);
              return Promise.reject(new Error(`NO STEP FOUND:     ${substeps[i].step}`));
            }
          } catch (e) {
            console.log(`            ${substeps[i].step} ---> FAILED`.red);
            console.error(e);
            return Promise.reject(new Error(e));
          }
        }
      }

      /* eslint-disable */
      let theFunc = function () { return theStepDef.call(this); };
      if (matchCounter === 1) {
        theFunc = function (a1) { return theStepDef.call(this, ...arguments); };
      } else if (matchCounter === 2) {
        theFunc = function (a1, a2) { return theStepDef.call(this, ...arguments); };
      } else if (matchCounter === 3) {
        theFunc = function (a1, a2, a3) { return theStepDef.call(this, ...arguments); };
      } else if (matchCounter === 4) {
        theFunc = function (a1, a2, a3, a4) { return theStepDef.call(this, ...arguments); };
      } else if (matchCounter === 5) {
        theFunc = function (a1, a2, a3, a4, a5) { return theStepDef.call(this, ...arguments); };
      } else if (matchCounter === 6) {
        theFunc = function (a1, a2, a3, a4, a5, a6) { return theStepDef.call(this, ...arguments); };
      } else if (matchCounter === 7) {
        theFunc = function (a1, a2, a3, a4, a5, a6, a7) { return theStepDef.call(this, ...arguments); };
      }
      /* eslint-enable */
      defineStep(new RegExp(`^${parameterisedStepRegexStr}$`), { timeout: stepsObj[stepRegexStr].length * timeoutInSeconds * 1000 }, theFunc);
    });
  }
});
