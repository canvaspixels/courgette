const fs = require('fs');
const os = require('os');

const givenSteps = require('../uiTestHelpers/stepDefinitions/commonGivenSteps');
const whenSteps = require('../uiTestHelpers/stepDefinitions/commonWhenSteps');
const thenSteps = require('../uiTestHelpers/stepDefinitions/commonThenSteps');
const placeholders = require('../placeholders');

const steps = [].concat(givenSteps, whenSteps, thenSteps);

// const snippetsFolder = `${os.homedir()}/Library/Application\ Support/Sublime\ Text\ 3/Packages/User/sublime-snippets/cuketractor`;

const snippetsFolder = 'snippets/sublime';

if (!fs.existsSync('snippets')) {
  fs.mkdirSync('snippets');
}
if (!fs.existsSync(snippetsFolder)) {
  fs.mkdirSync(snippetsFolder);
}

const snippetCodes = {};

const genSnippet = (matcher, code) => {
  // console.log(matcher);
  // console.log('matcher: ', matcher.replace(/\((.*)\)/g, '$1'));
  const snippet = `<snippet>
  <content><![CDATA[
${matcher.replace(/\((.*)\)/g, '$1')}
]]></content>
  <tabTrigger>${code}</tabTrigger>
</snippet>`;

  fs.writeFileSync(`${snippetsFolder}/${code}.sublime-snippet`, snippet);
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

    const zeroOrManyMatcher = /\((.*)\)\*/;
    // console.log(step.matcher);
    const newMatcher = step.matcher
      .replace(/\(\?\:(.*)\)\?/g, (match, p1) => {
        return p1.replace(/([^ ]+)/, '_$1_')
      })
      .replace(/\(\?\:(.*)\)/g, '$1');

    const generatedCode = `${step.path ?
      step.path.replace(/[./]*/g, '').replace(/^(actions|checks)/g, '') : 'die'}`;

    const matcher = matcherWithReplacedPlaceholders
      .replace(/\((.*)\)\*/g, '$1');
    const newCode = `${type}${step.code || generatedCode}`;
    snippetCodes[type].push(newCode);
    genSnippet(matcher, newCode);

    if (newMatcher.match(zeroOrManyMatcher)) {
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
