// To gen snippets in project and in ide
// node scripts/generateSnippetsVSCode.js --genFiles

// To gen snippets just in ide
// node scripts/generateSnippetsVSCode.js --genFiles --justForIDE

const fs = require('fs');
const os = require('os');
const { argv } = require('yargs');

const createSnippetsCollection = require('./createSnippetsCollection');

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

/* eslint-disable indent */

const genSnippet = (description, code, snippet) => {
  const snippetStr = `{
  "Print to console": {
    "prefix": "${code}",
    "body": [
      "${snippet.replace(/\((.*)\)/g, '$1')}"
    ],
    "description": "${description.replace(/\((.*)\)/g, '$1')}"
  }
}`;

  /* eslint-enable indent */

  if (!argv.justForIDE) {
    fs.writeFileSync(`${snippetsFolder}/courgette-${code}.code-snippets`, snippetStr);
  }

  if (ideInstalled) {
    fs.writeFileSync(`${ideSnippetsFolder}/courgette-${code}.code-snippets`, snippetStr);
  }
};

const genSnippets = () => {
  createSnippetsCollection.snippetsCollection.forEach(({ description, code, snippet }) => {
    genSnippet(description, code, snippet);
  });
};

genSnippets();

if (ideInstalled) {
  console.log(`Snippets added to ${ideSnippetsFolder}`);
} else {
  console.log('VSCode not installed on your mac so no snippets were added to VSCode');
}
