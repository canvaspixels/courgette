// To gen snippets in project and in ide
// node scripts/generateSnippetsSublime.js --genFiles

// To gen snippets just in ide
// node scripts/generateSnippetsSublime.js --genFiles --justForIDE

const fs = require('fs');
const os = require('os');
const { argv } = require('yargs');

const snippetsCollection = require('./createSnippetsCollection');

const ideFolder = `${os.homedir()}/Library/Application Support/Sublime Text 3/Packages/User`;
const ideSnippetsFolder = `${ideFolder}/sublime-snippets-courgette`;

let ideInstalled = true;

const snippetsFolder = 'snippets/sublime';
if (!argv.justForIDE) {
  if (!fs.existsSync('snippets')) {
    fs.mkdirSync('snippets');
  }
  if (!fs.existsSync(snippetsFolder)) {
    fs.mkdirSync(snippetsFolder);
  }
}

if (!fs.existsSync(ideFolder)) {
  ideInstalled = false;
} else if (!fs.existsSync(ideSnippetsFolder)) {
  fs.mkdirSync(ideSnippetsFolder);
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

  if (ideInstalled) {
    fs.writeFileSync(`${ideSnippetsFolder}/${code}.sublime-snippet`, snippet);
  }
};

const genSnippets = () => {
  snippetsCollection.forEach(({ description, code, snippet }) => {
    genSnippet(description, code, snippet);
  });
};

genSnippets();

if (ideInstalled) {
  console.log(`Snippets added to ${ideSnippetsFolder}`);
} else {
  console.log('Sublime not installed on your mac so no snippets were added to sublime');
}

module.exports = snippetCodes;
