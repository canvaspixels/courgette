// To gen snippets in project and in ide
// node scripts/generateSnippetsSublime.js --genFiles

// To gen snippets just in ide
// node scripts/generateSnippetsSublime.js --genFiles --justForIDE

const fs = require('fs');
const os = require('os');
const { argv } = require('yargs');

const givenSteps = require('../uiTestHelpers/stepDefinitions/commonGivenSteps');
const whenSteps = require('../uiTestHelpers/stepDefinitions/commonWhenSteps');
const thenSteps = require('../uiTestHelpers/stepDefinitions/commonThenSteps');
const placeholders = require('../placeholders');

const sublimeSnippetsFolder = `${os.homedir()}/Library/Application Support/Sublime Text 3/Packages/User/sublime-snippets-courgette`;


const snippetsFolder = 'snippets/sublime';
if (!argv.justForIDE) {
  if (!fs.existsSync('snippets')) {
    fs.mkdirSync('snippets');
  }
  if (!fs.existsSync(snippetsFolder)) {
    fs.mkdirSync(snippetsFolder);
  }
}

if (!fs.existsSync(sublimeSnippetsFolder)) {
  fs.mkdirSync(sublimeSnippetsFolder);
}

const snippetCodes = {};

const genSnippet = (matcher, code) => {
  const snippet = `<snippet>
  <content><![CDATA[
${matcher.replace(/\((.*)\)/g, '$1')}
]]></content>
  <tabTrigger>${code}</tabTrigger>
</snippet>`;

  if (!argv.justForIDE) {
    fs.writeFileSync(`${snippetsFolder}/${code}.sublime-snippet`, snippet);
  }

  try {
    fs.writeFileSync(`${sublimeSnippetsFolder}/${code}.sublime-snippet`, snippet);
  } catch (e) {
    console.log('Sublime not installed on your mac');
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

module.exports = snippetCodes;
