#! /usr/bin/env node
const fs = require('fs');
const { ncp } = require('ncp');
const path = require('path');

const createSampleConf = function () {
  const targetConfPath = path.join(process.cwd(), 'courgette-conf-wdio.js');

  if (!fs.existsSync(targetConfPath)) {
    ncp(path.join(__dirname, '..', 'sample-courgette-conf-wdio.js'), targetConfPath, (err) => {
      if (err) {
        process.exitCode = 1;
        return console.error(err);
      }
      return console.log('courgette-conf-wdio.js created');
    });
  } else {
    console.log('courgette-conf-wdio.js already exists');
  }
};

createSampleConf();
