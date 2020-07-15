#! /usr/bin/env node
const path = require('path');
const os = require('os');

const { runScript } = require('./util');

const addScriptToPackageJson = path.resolve(__dirname, 'add-script-to-packagejson.js');
let scriptToAdd = 'PATH=$(npm bin):$PATH NODE_OPTIONS=--no-deprecation courgette';

if (os.type().toLowerCase().includes('windows')) {
  scriptToAdd = 'set NODE_OPTIONS=--no-deprecation | courgette';
}

const setupPackageJsonScripts = async function () {
  try {
    await runScript(addScriptToPackageJson, ['ct', scriptToAdd]);
    console.log('added ct script to your package.json');
    await runScript(addScriptToPackageJson, ['courgette', scriptToAdd]);
    console.log('added courgette script to your package.json');
    await runScript(addScriptToPackageJson, ['install-firefoxdriver', './node_modules/protractor/bin/webdriver-manager update --chrome=false']);
    console.log('added install-firefoxdriver to your package.json');
    await runScript(addScriptToPackageJson, ['install-chromedriver', './node_modules/protractor/bin/webdriver-manager update --gecko=false']);
    console.log('added install-chromedriver to your package.json');
    await runScript(addScriptToPackageJson, ['postinstall', 'npm run install-chromedriver']);
    console.log('added postinstall script to your package.json');
    await runScript(addScriptToPackageJson, ['setup-courgette-snippets', './node_modules/courgette/scripts/setupSnippets.js']);
    console.log('added setup-courgette-snippets script to your package.json');
  } catch (err) {
    throw err;
  }
};

setupPackageJsonScripts();
