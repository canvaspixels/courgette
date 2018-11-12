#! /usr/bin/env node
const { ncp } = require('ncp');
const fs = require('fs');
const path = require('path');
const os = require('os');

const targetUiTestPath = path.join(__dirname, '..', '..', '..', 'uiTests');
const targetConfPath = path.join(__dirname, '..', '..', '..', 'courgette-conf.js');

const childProcess = require('child_process');

function runScript(scriptPath, args) {
  let invoked = false;

  const process = childProcess.fork(scriptPath, args);

  return new Promise((resolve, reject) => {
    process.on('error', (err) => {
      if (invoked) {
        reject(new Error('error already invoked'));
        return;
      }
      invoked = true;
      reject(err);
    });

    process.on('exit', (code) => {
      if (invoked) {
        reject(new Error('exit already invoked'));
        return;
      }
      invoked = true;

      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`exit code ${code}`));
      }
    });
  });
}

let shouldInstall = true;
if (!fs.existsSync(targetUiTestPath) && !process.env.IGNORE_COURGETTE_SAMPLE_SETUP) {
  ncp(path.join(__dirname, '..', 'uiTests'), targetUiTestPath, (err) => {
    if (err) {
      return console.error(err);
    }
    return console.log('uiTests folder created');
  });
} else {
  console.log('uiTests folder already exists. Cannot create a new one');
  shouldInstall = false;
}

if (!fs.existsSync(targetConfPath) && !process.env.IGNORE_COURGETTE_CONF_SETUP) {
  ncp(path.join(__dirname, '..', 'sample-courgette-conf.js'), targetConfPath, (err) => {
    if (err) {
      return console.error(err);
    }
    return console.log('courgette-conf.js created');
  });
} else {
  console.log('courgette-conf.js already exists');
  shouldInstall = false;
}

const setupPackageJsonScripts = async function () {
  const addScriptToPackageJson = path.resolve(__dirname, 'add-script-to-packagejson.js');
  let scriptToAdd = 'PATH=$(npm bin):$PATH NODE_OPTIONS=--no-deprecation courgette';

  // let isWindows = false;
  if (os.type().toLowerCase().includes('windows')) {
    scriptToAdd = 'set NODE_OPTIONS=--no-deprecation | courgette';
    // isWindows = true;
  }
  const installFirefoxDriver = './node_modules/protractor/node_modules/webdriver-manager/bin/webdriver-manager update --chrome=false';

  try {
    await runScript(addScriptToPackageJson, ['ct', scriptToAdd]);
    console.log('added ct script to your package.json');
    await runScript(addScriptToPackageJson, ['courgette', scriptToAdd]);
    console.log('added courgette script to your package.json');
    await runScript(addScriptToPackageJson, ['install-firefoxdriver', installFirefoxDriver]);
    console.log('added install-firefoxdriver to your package.json');
    await runScript(addScriptToPackageJson, ['postinstall', 'npm run install-firefoxdriver']);
    console.log('added postinstall script to your package.json');
    await runScript(addScriptToPackageJson, ['setup-courgette-snippets', './node_modules/courgette/scripts/setupSnippets.js']);
    console.log('added setup-courgette-snippets script to your package.json');
  } catch (err) {
    throw err;
  }
};

const setupDrivers = async function () {
  try {
    await runScript('node_modules/protractor/node_modules/webdriver-manager/bin/webdriver-manager', 'update --chrome=false'.split(' '));
    console.log('FirefoxDriver Installed');
  } catch (err) {
    console.log(' ');
    console.log('!!!!!!!!!!!-----------IMPORTANT----------!!!!!!!!!!!!!!!');
    console.log('It looks like it hasn’t install properly, you may be behind a corporate proxy. You may have to add the --proxy flag to webdriver-manager in your package json.');
    const eg = '"./node_modules/protractor/node_modules/webdriver-manager/bin/webdriver-manager update --gecko=false --versions.chrome 2.35 --proxy http://127.0.0.1"';
    console.log(`e.g. "install-geckodriver": ${eg},`);
    console.log('Then run:');
    console.log('npm run install-geckodriver');
    console.log(' ');
    throw err;
  }
};

if (shouldInstall) {
  if (!process.env.IGNORE_COURGETTE_PACKAGE_JSON_SCRIPTS) {
    setupPackageJsonScripts();
  }
  if (!process.env.IGNORE_COURGETTE_INSTALL_DRIVERS) {
    setupDrivers();
  }
}
