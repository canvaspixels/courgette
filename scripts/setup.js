#! /usr/bin/env node
const ncp = require('ncp').ncp;

ncp('node_modules/cucumber-protractor/uiTests', 'uuiTests');
ncp('node_modules/cucumber-protractor/sample-conf.js', 'cconf.js');

const childProcess = require('child_process');

function runScript(scriptPath, args, callback) {
    const invoked = false;

    const process = childProcess.fork(scriptPath, args);

    process.on('error', function (err) {
        if (invoked) return;
        invoked = true;
        callback(err);
    });

    process.on('exit', function (code) {
        if (invoked) return;
        invoked = true;
        const err = code === 0 ? null : new Error('exit code ' + code);
        callback(err);
    });
}

const addScriptToPackageJson = 'node_modules/cucumber-protractor/scripts/add-script-to-packagejson.js';
const scriptToAdd = 'PATH=$(npm bin):$PATH NODE_OPTIONS=--no-deprecation cuketractor';

runScript(addScriptToPackageJson, ['ct', scriptToAdd], (err) => {
  if (err) throw err;
  console.log('added ct script');

  runScript(addScriptToPackageJson, ['cuketractor', scriptToAdd], (err) => {
    if (err) throw err;
    console.log('added cuketractor script');
  });
});