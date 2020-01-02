#! /usr/bin/env node
const { ncp } = require('ncp');
const path = require('path');

const createSampleConf = function () {
  const targetConfPath = path.join(process.cwd(), 'courgette-conf.js');
  if (!fs.existsSync(targetConfPath)) {
    ncp(path.join(__dirname, '..', 'sample-courgette-conf.js'), targetConfPath, (err) => {
      if (err) {
        process.exitCode = 1;
        return console.error(err);
      }
      return console.log('courgette-conf.js created');
    });
  } else {
    console.log('courgette-conf.js already exists');
  }
}

createSampleConf();