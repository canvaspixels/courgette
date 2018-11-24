// To gen snippets in project and in ide
// node scripts/generateSnippetsWebstorm.js --genFiles

// To gen snippets just in ide
// node scripts/generateSnippetsWebstorm.js --genFiles --justForIDE

const fs = require('fs');
const os = require('os');
const { argv } = require('yargs');

const createSnippetsCollection = require('./createSnippetsCollection');

let snippets = '<templateSet group="Courgette">\n';

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

const genSnippets = () => {
  createSnippetsCollection.snippetsCollection.forEach(({ snippetForXML, code, varPlaceholders }) => {
    genSnippet(snippetForXML, code, varPlaceholders);
  });
};

genSnippets();

snippets += '</templateSet>';

if (!argv.justForIDE) {
  const snippetsFolder = 'snippets/webstorm';

  if (!fs.existsSync('snippets')) {
    fs.mkdirSync('snippets');
  }
  if (!fs.existsSync(snippetsFolder)) {
    fs.mkdirSync(snippetsFolder);
  }
  fs.writeFileSync(`${snippetsFolder}/courgette-snippets.xml`, snippets);
}


try {
  const homedir = os.homedir();
  const prefsFolder = `${homedir}/Library/Preferences`;
  const files = fs.readdirSync(prefsFolder);
  // eslint-disable-next-line
  const webstormFile = files.find((file) => {
    if (fs.statSync(`${prefsFolder}/${file}`).isDirectory() && file.toLowerCase().includes('webstorm')) {
      return file;
    }
  });

  const templatesFolder = `${prefsFolder}/${webstormFile}/templates`;
  if (!fs.existsSync(templatesFolder)) {
    fs.mkdirSync(templatesFolder);
  }

  fs.writeFileSync(`${prefsFolder}/${webstormFile}/templates/courgette-snippets.xml`, snippets);

  console.log(`Live templates added to: ${prefsFolder}/${webstormFile}/templates/courgette-snippets.xml`);
} catch (e) {
  console.log('webstorm not installed on your mac');
}
