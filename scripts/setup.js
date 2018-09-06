#! /usr/bin/env node
const ncp = require('ncp').ncp;
const path = require('path');

ncp(path.join(__dirname, '..', 'uiTests'), path.resolve('uiTests'), function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('uiTests folder created');
});
ncp(path.join(__dirname, '..', 'sample-conf.js'), path.resolve('conf.js'), function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('conf.js created');
});

const childProcess = require('child_process');

function runScript(scriptPath, args, callback) {
    let invoked = false;

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

const addScriptToPackageJson = path.resolve(__dirname, 'add-script-to-packagejson.js');
const scriptToAdd = 'PATH=$(npm bin):$PATH NODE_OPTIONS=--no-deprecation cuketractor';

runScript(addScriptToPackageJson, ['ct', scriptToAdd], (err) => {
  if (err) throw err;
  console.log('added ct script to your package.json');

  runScript(addScriptToPackageJson, ['cuketractor', scriptToAdd], (err) => {
    if (err) throw err;
    console.log('added cuketractor script to your package.json');
  });
});