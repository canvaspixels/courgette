#! /usr/bin/env node
const { ncp } = require('ncp');
const path = require('path');
const os = require('os');

ncp(path.join(__dirname, '..', 'uiTests'), path.resolve('uiTests'), (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log('uiTests folder created');
});
ncp(path.join(__dirname, '..', 'sample-conf.js'), path.resolve('conf.js'), (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log('conf.js created');
});

const childProcess = require('child_process');

function runScript(scriptPath, args, callback) {
  let invoked = false;

  const process = childProcess.fork(scriptPath, args);

  process.on('error', (err) => {
    if (invoked) return;
    invoked = true;
    callback(err);
  });

  process.on('exit', (code) => {
    if (invoked) return;
    invoked = true;
    const err = code === 0 ? null : new Error(`exit code ${code}`);
    callback(err);
  });
}



const addScriptToPackageJson = path.resolve(__dirname, 'add-script-to-packagejson.js');
let scriptToAdd = 'PATH=$(npm bin):$PATH NODE_OPTIONS=--no-deprecation cuketractor';

let isWindows = false;
if (os.type().toLowerCase().includes('windows')) {
  scriptToAdd = 'set NODE_OPTIONS=--no-deprecation | cuketractor';
  isWindows = true;
}

const installChromedriver = './node_modules/protractor/node_modules/webdriver-manager/bin/webdriver-manager update --gecko=false --versions.chrome 2.35"';

runScript(addScriptToPackageJson, ['ct', scriptToAdd], (err) => {
  if (err) throw err;
  console.log('added ct script to your package.json');

  runScript(addScriptToPackageJson, ['cuketractor', scriptToAdd], (err2) => {
    if (err2) throw err2;
    return console.log('added cuketractor script to your package.json');

    runScript(addScriptToPackageJson, ['install-chromedriver', installChromedriver], (err3) => {
      if (err3) throw err3;
      return console.log('added installChromedriver to your package.json');

      runScript(addScriptToPackageJson, ['postinstall', 'npm run install-chromedriver'], (err4) => {
        if (err4) throw err4;
        return console.log('added postinstall script to your package.json');
      });

      runScript(isWindows ? 'npm.cmd' : 'npm', ['run' 'install-chromedriver'], (err4) => {
        console.log('If for some reason this looks like it hasn’t install properly, you may be behind a corporate proxy. You may have to add the --proxy flag to webdriver-manager in your package json.');
        if (err4) {
          throw err4
        };
        return console.log('ChromeDriver Installed');
      });
    });
  });

  return true;
});
