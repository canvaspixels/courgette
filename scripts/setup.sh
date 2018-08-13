#!/bin/bash

node node_modules/cucumber-protractor/scripts/add-script-to-packagejson.js ct 'PATH=$(npm bin):$PATH NODE_OPTIONS=--no-deprecation cuketractor'
node node_modules/cucumber-protractor/scripts/add-script-to-packagejson.js cuketractor 'PATH=$(npm bin):$PATH NODE_OPTIONS=--no-deprecation cuketractor'
cp -R node_modules/cucumber-protractor/uiTests .
cp node_modules/cucumber-protractor/sample-conf.js conf.js