// To gen snippets in project and in ide
// node scripts/generateSnippetsAtom.js --genFiles

// To gen snippets just in ide
// node scripts/generateSnippetsAtom.js --genFiles --justForIDE

const fs = require('fs');
const os = require('os');
const { argv } = require('yargs');

const snippetsCollection = require('./createSnippetsCollection');

let snippets = '###### courgette snippets start 0-o\n\n';

const genSnippet = (description, code, snippet) => {
  snippets +=
`  "${description}":
    'prefix': '${code}'
    'body': "${snippet}"
`;
};

const genSnippets = () => {
  snippetsCollection.forEach(({ description, code, snippet }) => {
    genSnippet(description, code, snippet);
  });
};
snippets += '".text.plain":\n';
genSnippets();
snippets += '".feature":\n';
genSnippets();
snippets += '###### courgette snippets end 0-o';

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
  const snippetsFileNoCukeTrackor = snippetsFile.replace(/^###### courgette snippets start 0-o[^~]*###### courgette snippets end 0-o$/m, '');
  fs.writeFileSync(atomSnippetsFile, `${snippetsFileNoCukeTrackor}${snippets}`);
  console.log(`Snippets added to ${atomSnippetsFile}`);
} catch (e) {
  console.log('Atom not installed on your mac so no snippets were added to atom');
}
