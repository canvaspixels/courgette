#! /usr/bin/env node
const { runScript } = require('./util');

const setupDrivers = async function () {
  try {
    await runScript('./node_modules/protractor/bin/webdriver-manager', 'update --chrome=false'.split(' '));
    console.log('FirefoxDriver Installed');
  } catch (err) {
    console.log(' ');
    console.log('!!!!!!!!!!!-----------IMPORTANT----------!!!!!!!!!!!!!!!');
    console.log('It looks like it hasn’t installed properly, you may be behind a corporate proxy. You may have to add the --proxy flag to webdriver-manager in your package json.');
    const eg = '"./node_modules/protractor/bin/webdriver-manager update --gecko=false --proxy http://127.0.0.1"';
    console.log(`e.g. "install-geckodriver": ${eg},`);
    console.log('Then run:');
    console.log('npm run install-geckodriver');
    console.log(' ');
    throw err;
  }
};

setupDrivers();
