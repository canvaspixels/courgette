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

const snippetsFolder = 'snippets/intellij';

if (!fs.existsSync('snippets')) {
  fs.mkdirSync('snippets');
}
if (!fs.existsSync(snippetsFolder)) {
  fs.mkdirSync(snippetsFolder);
}

const snippetCodes = {};

let snippets = '<templateSet group="CukeTractor">\n';

const genSnippet = (matcher, code, varPlaceholders) => {
  snippets +=
`  <template name="${code}" value="${matcher}$END$" shortcut="TAB" description="${matcher}" toReformat="false" toShortenFQNames="true">
`;
  varPlaceholders.forEach((placeholder, i) => {
    snippets +=
`    <variable name="var${i + 1}" expression="&quot;${placeholder}&quot;" defaultValue="" alwaysStopAt="true" />
`;
  });
  snippets +=
`    <context>
      <option name="OTHER" value="true" />
    </context>
  </template>
`;
};

const genSnippets = (steps, type) => {
  if (!snippetCodes[type]) {
    snippetCodes[type] = [];
  }
  steps.forEach((step) => {
    const allPlaceholders = placeholders.join('|');
    const varPlaceholders = [];
    const matcherWithReplacedPlaceholders = step.matcher
      .replace(new RegExp(`'(${allPlaceholders})'`), (m, p1) => { varPlaceholders.push(p1); return '\'$var1$\''; })
      .replace(new RegExp(`'(${allPlaceholders})'`), (m, p1) => { varPlaceholders.push(p1); return '\'$var2$\''; })
      .replace(new RegExp(`'(${allPlaceholders})'`), (m, p1) => { varPlaceholders.push(p1); return '\'$var3$\''; })
      .replace(new RegExp(`'(${allPlaceholders})'`), (m, p1) => { varPlaceholders.push(p1); return '\'$var4$\''; })
      .replace(/\(\?\:(.*)\)\?/g, '$1');

    const zeroOrManyMatcher = /\((.*)\)\*/g;

    const newMatcher = step.matcher
      .replace(/\(\?\:(.*)\)\?/g, (match, p1) => p1.replace(/([^ ]+)/, '_$1_'))
      .replace(/\(\?\:(.*)\)/g, '$1');

    const generatedCode = `${step.path ?
      step.path.replace(/[./]*/g, '').replace(/^(actions|checks)/g, '') : 'die'}`;

    const matcher = matcherWithReplacedPlaceholders
      .replace(zeroOrManyMatcher, '')
      .replace(/\((.*)\)\*/g, '$1')
      .replace(/\((.*)\)/g, '$1');
    const newCode = `${type}${step.code || generatedCode}`;
    snippetCodes[type].push(newCode);
    genSnippet(matcher, newCode, varPlaceholders);

    if (newMatcher.match(zeroOrManyMatcher)) {
      const newCode2 = `${type}not${step.code || generatedCode}`;
      const matcher2 = matcherWithReplacedPlaceholders
        .replace(/\((.*)\)\*/g, '$1');
      snippetCodes[type].push(newCode2);
      genSnippet(matcher2, newCode2, varPlaceholders);
    }

    // console.log(`${type}${step.code || generatedCode}`);
  });
};
genSnippets(givenSteps, 'given');
genSnippets(whenSteps, 'when');
genSnippets(thenSteps, 'then');
snippets += '</templateSet>';

if (!argv.justForIDE) {
  fs.writeFileSync(`${snippetsFolder}/cuketractor-snippets.xml`, snippets);
}

const homedir = os.homedir();
const prefsFolder = `${homedir}/Library/Preferences`;
const files = fs.readdirSync(prefsFolder);
// eslint-disable-next-line
const intelliJFile = files.find((file) => {
  if (fs.statSync(`${prefsFolder}/${file}`).isDirectory() && file.toLowerCase().includes('intellij')) {
    return file;
  }
});

const templatesFolder = `${prefsFolder}/${intelliJFile}/templates`;
if (!fs.existsSync(templatesFolder)) {
  fs.mkdirSync(templatesFolder);
}

fs.writeFileSync(`${prefsFolder}/${intelliJFile}/templates/cuketractor-snippets.xml`, snippets);

console.log(`Live templates added to: ${prefsFolder}/${intelliJFile}/templates/cuketractor-snippets.xml`);
