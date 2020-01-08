#! /usr/bin/env node
const fs = require('fs');
const { ncp } = require('ncp');
const path = require('path');

const createSampleConf = function () {
  const targetConfPath = path.join(process.cwd(), 'courgette-mobile-conf.js');

  if (!fs.existsSync(targetConfPath)) {
    ncp(path.join(__dirname, '..', 'sample-courgette-mobile-conf.js'), targetConfPath, (err) => {
      if (err) {
        process.exitCode = 1;
        return console.error(err);
      }
      return console.log('courgette-mobile-conf.js created');
    });
  } else {
    console.log('courgette-mobile-conf.js already exists');
  }
};

createSampleConf();
