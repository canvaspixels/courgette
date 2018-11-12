// To gen snippets in project and in ide
// node scripts/generateSnippetsVSCode.js --genFiles

// To gen snippets just in ide
// node scripts/generateSnippetsVSCode.js --genFiles --justForIDE

const fs = require('fs');
const os = require('os');
const { argv } = require('yargs');

const givenSteps = require('../uiTestHelpers/stepDefinitions/commonGivenSteps');
const whenSteps = require('../uiTestHelpers/stepDefinitions/commonWhenSteps');
const thenSteps = require('../uiTestHelpers/stepDefinitions/commonThenSteps');
const placeholders = require('../placeholders');

const ideFolder = `${os.homedir()}/Library/Application Support/Code/User`;
const ideSnippetsFolder = `${ideFolder}/snippets`;
let ideInstalled = true;

const snippetsFolder = 'snippets/vscode';
if (!argv.justForIDE) {
  if (!fs.existsSync('snippets')) {
    fs.mkdirSync('snippets');
  }
  if (!fs.existsSync(snippetsFolder)) {
    fs.mkdirSync(snippetsFolder);
  }
}

try {
  if (!fs.existsSync(ideSnippetsFolder)) {
    fs.mkdirSync(ideSnippetsFolder);
  }
} catch (e) {
  ideInstalled = false;
}

const snippetCodes = {};

/* eslint-disable indent */

const genSnippet = (matcher, code) => {
  const snippet = `{
  "Print to console": {
    "prefix": "${code}",
    "body": [
      "${matcher.replace(/\((.*)\)/g, '$1')}"
    ],
    "description": "${matcher.replace(/\((.*)\)/g, '$1')}"
  }
}`;

  /* eslint-enable indent */

  if (!argv.justForIDE) {
    fs.writeFileSync(`${snippetsFolder}/courgette-${code}.code-snippets`, snippet);
  }

  if (ideInstalled) {
    fs.writeFileSync(`${ideSnippetsFolder}/courgette-${code}.code-snippets`, snippet);
  }
};

const genSnippets = (steps, type) => {
  if (!snippetCodes[type]) {
    snippetCodes[type] = [];
  }
  steps.forEach((step) => {
    const allPlaceholders = placeholders.join('|');
    const matcherWithReplacedPlaceholders = step.matcher
      .replace(new RegExp(`'(${allPlaceholders})'`), (m, p1) => `'\${1:${p1}\}'`)
      .replace(new RegExp(`'(${allPlaceholders})'`), (m, p1) => `'\${2:${p1}\}'`)
      .replace(new RegExp(`'(${allPlaceholders})'`), (m, p1) => `'\${3:${p1}\}'`)
      .replace(new RegExp(`'(${allPlaceholders})'`), (m, p1) => `'\${4:${p1}\}'`)
      .replace(/\(\?\:(.*)\)\?/g, '$1');

    const zeroOrManyNotMatcher = /\((.*not.*)\)\*/g;
    const newMatcher = step.matcher
      .replace(/\(\?\:(.*)\)\?/g, (match, p1) =>
        p1.replace(/([^ ]+)/, '_$1_'))
      .replace(/\(\?\:(.*)\)/g, '$1');

    const generatedCode = `${step.path ?
      step.path.replace(/[./]*/g, '').replace(/^(actions|checks)/g, '') : 'die'}`;

    const matcher = matcherWithReplacedPlaceholders
      .replace(zeroOrManyNotMatcher, '')
      .replace(/\((.*)\)\*/g, '$1');

    const newCode = `${type}${step.code || generatedCode}`;
    snippetCodes[type].push(newCode);
    genSnippet(matcher, newCode);

    if (newMatcher.match(zeroOrManyNotMatcher)) {
      const newCode2 = `${type}not${step.code || generatedCode}`;
      const matcher2 = matcherWithReplacedPlaceholders
        .replace(/\((.*)\)\*/g, '$1');
      snippetCodes[type].push(newCode2);
      genSnippet(matcher2, newCode2);
    }

    // console.log(`${type}${step.code || generatedCode}`);
  });
};

genSnippets(givenSteps, 'given');
genSnippets(whenSteps, 'when');
genSnippets(thenSteps, 'then');

if (ideInstalled) {
  console.log(`Snippets added to ${ideSnippetsFolder}`);
} else {
  console.log('VSCode not installed on your mac so no snippets were added to VSCode');
}

module.exports = snippetCodes;
