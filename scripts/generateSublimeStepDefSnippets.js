const fs = require('fs');
const os = require('os');

const givenSteps = require('../uiTestHelpers/stepDefinitions/commonGivenSteps');
const whenSteps = require('../uiTestHelpers/stepDefinitions/commonWhenSteps');
const thenSteps = require('../uiTestHelpers/stepDefinitions/commonThenSteps');
const placeholders = require('../placeholders');

const steps = [].concat(givenSteps, whenSteps, thenSteps);

const snippetCodes = {};

const genSnippets = (steps, type) => {
  steps.forEach((step) => {
    const allPlaceholders = placeholders.join('|');
    const matcher = step.matcher
      .replace(new RegExp(`'(${allPlaceholders})'`), (m, p1) => `'\${1:${p1}\}'`)
      .replace(new RegExp(`'(${allPlaceholders})'`), (m, p1) => `'\${2:${p1}\}'`)
      .replace(new RegExp(`'(${allPlaceholders})'`), (m, p1) => `'\${3:${p1}\}'`)
      .replace(new RegExp(`'(${allPlaceholders})'`), (m, p1) => `'\${4:${p1}\}'`)
      .replace(/\(\?\:(.*)\)\?/g, '$1')
      .replace(/\((.*)\)\*/g, '$1')
      .replace(/\((.*)\)/g, '$1');


    const generatedCode = `${step.path ?
      step.path.replace(/[./]*/g, '').replace(/^(actions|checks)/g, '') : 'die'}`;

    if (!snippetCodes[type]) {
      snippetCodes[type] = [];
    }
    snippetCodes[type].push(`${type}${step.code || generatedCode}`);

    console.log(generatedCode);
    const snippet = `<snippet>
    <content><![CDATA[
${matcher}
]]></content>
    <tabTrigger>${type}${step.code || generatedCode}</tabTrigger>
</snippet>`;

    fs.writeFileSync(`${snippetsFolder}/${generatedCode}.sublime-snippet`, snippet);
  });
};

// const snippetsFolder = `${os.homedir()}/Library/Application\ Support/Sublime\ Text\ 3/Packages/User/sublime-snippets/cuketractor`;

const snippetsFolder = 'snippets/sublime';

if (!fs.existsSync(snippetsFolder)) {
  fs.mkdirSync('snippets');
}
if (!fs.existsSync(snippetsFolder)) {
  fs.mkdirSync(snippetsFolder);
}

genSnippets(givenSteps, 'given');
genSnippets(whenSteps, 'when');
genSnippets(thenSteps, 'then');

module.exports = snippetCodes;
