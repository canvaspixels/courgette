// To gen snippets in project and in ide
// node scripts/generateSnippetsAtom.js --genFiles

// To gen snippets just in ide
// node scripts/generateSnippetsAtom.js --genFiles --justForIDE

const fs = require('fs');
const os = require('os');
const { argv } = require('yargs');

const givenSteps = require('../uiTestHelpers/stepDefinitions/commonGivenSteps');
const whenSteps = require('../uiTestHelpers/stepDefinitions/commonWhenSteps');
const thenSteps = require('../uiTestHelpers/stepDefinitions/commonThenSteps');
const placeholders = require('../placeholders');

const snippetCodes = {};

let snippets = '###### cuketractor snippets start 0-o\n\n';

const genSnippet = (matcher, code) => {
  snippets
+= `  "${matcher}":
    'prefix': '${code}'
    'body': "${matcher}"
`;
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
      .replace(/\(\?\:(.*)\)\?/g, (match, p1) => p1.replace(/([^ ]+)/, '_$1_'))
      .replace(/\(\?\:(.*)\)/g, '$1');

    const generatedCode = `${step.path
      ? step.path.replace(/[./]*/g, '').replace(/^(actions|checks)/g, '') : 'die'}`;

    const matcher = matcherWithReplacedPlaceholders
      .replace(zeroOrManyNotMatcher, '')
      .replace(/\((.*)\)\*/g, '$1')
      .replace(/\((.*)\)/g, '$1');
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
snippets += '".text.plain":\n';
genSnippets(givenSteps, 'given');
genSnippets(whenSteps, 'when');
genSnippets(thenSteps, 'then');
snippets += '".feature":\n';
genSnippets(givenSteps, 'given');
genSnippets(whenSteps, 'when');
genSnippets(thenSteps, 'then');
snippets += '###### cuketractor snippets end 0-o';

if (!argv.justForIDE) {
  const snippetsFolder = 'snippets/atom';

  if (!fs.existsSync('snippets')) {
    fs.mkdirSync('snippets');
  }
  if (!fs.existsSync(snippetsFolder)) {
    fs.mkdirSync(snippetsFolder);
  }
  fs.writeFileSync(`${snippetsFolder}/atom-snippets.cson`, snippets);
}

const homedir = os.homedir();
const atomSnippetsFile = `${homedir}/.atom/snippets.cson`;
try {
  const snippetsFile = fs.readFileSync(atomSnippetsFile, 'utf-8');
  const snippetsFileNoCukeTrackor = snippetsFile.replace(/^###### cuketractor snippets start 0-o[^~]*###### cuketractor snippets end 0-o$/m, '');
  fs.writeFileSync(atomSnippetsFile, `${snippetsFileNoCukeTrackor}${snippets}`);
} catch (e) {
  console.log('Atom not installed on your mac');
}
