const jsonfile = require('jsonfile');
const path = require('path');

function scriptAlreadyExists (name) {
  this.name = 'scriptAlreadyExists'
  this.message = 'My friend:\n  it seems as though the script entry you have specified,\n  "' + name + '"\n  is already present in the package.json file,\n  of your current working directory.\n  Please try again,\n  or amend this egregious error.\nThank You.'
}

scriptAlreadyExists.prototype = new Error()
scriptAlreadyExists.prototype.constructor = scriptAlreadyExists

function noPackageJsonExists (name) {
  this.name = 'noPackageJsonExists'
  this.message = 'My friend:\n  it seems as though your current working directory\n  does not contain a package.json file,\n  and is therefore not a Node.js project.\n  Please run npm init,\n  in order to amend this tremendous violation.\nThank You.'
}

noPackageJsonExists.prototype = new Error()
noPackageJsonExists.prototype.constructor = noPackageJsonExists

const packageJsonFilePath = path.join(process.cwd(), 'package.json');

try {
  const key = process.argv[2];
  const value = process.argv[3];
  const packageJson = jsonfile.readFileSync(packageJsonFilePath);
  if (!packageJson.scripts) packageJson.scripts = {}
  if (packageJson.scripts[key]) {
    console.error('cuketractor script already exists');
  }
  packageJson.scripts[key] = value;
  jsonfile.writeFileSync(packageJsonFilePath, packageJson, {spaces: 2});
} catch (e) {
  if (e.message === 'ENOENT, no such file or directory \'package.json\'') {
    throw new noPackageJsonExists();
  } else {
    throw e;
  }
}
