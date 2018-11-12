#! /usr/bin/env node
const path = require('path');

const childProcess = require('child_process');

function runScript(scriptPath, args) {
  let invoked = false;

  const process = childProcess.fork(scriptPath, args);

  return new Promise((resolve, reject) => {
    process.on('error', (err) => {
      if (invoked) {
        reject(new Error('error already invoked'));
        return;
      }
      invoked = true;
      reject(err);
    });

    process.on('exit', (code) => {
      if (invoked) {
        reject(new Error('exit already invoked'));
        return;
      }
      invoked = true;

      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`exit code ${code}`));
      }
    });
  });
}

const setupSnippets = async function () {
  console.log(' ');
  console.log('Adding snippets...');
  await runScript(path.resolve(__dirname, './generateSnippetsSublime.js'), '--genFiles --justForIDE'.split(' '));
  await runScript(path.resolve(__dirname, './generateSnippetsVSCode.js'), '--genFiles --justForIDE'.split(' '));
  await runScript(path.resolve(__dirname, './generateSnippetsAtom.js'), '--genFiles --justForIDE'.split(' '));
  await runScript(path.resolve(__dirname, './generateSnippetsWebstorm.js'), '--genFiles --justForIDE'.split(' '));
  await runScript(path.resolve(__dirname, './generateSnippetsIntelliJ.js'), '--genFiles --justForIDE'.split(' '));
  console.log(' ');
};

setupSnippets();
