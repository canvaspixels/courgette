#! /usr/bin/env node
const fs = require('fs');
const { ncp } = require('ncp');
const path = require('path');

const createUiTestsFolder = function () {
  const targetUiTestPath = path.join(process.cwd(), 'uiTests');
  if (!fs.existsSync(targetUiTestPath)) {
    ncp(path.join(__dirname, '..', 'uiTests'), targetUiTestPath, (err) => {
      if (err) {
        process.exitCode = 1;
        return console.error(err);
      }
      return console.log('uiTests folder created');
    });
  } else {
    console.log('uiTests folder already exists. Cannot create a new one');
  }
};

createUiTestsFolder();
