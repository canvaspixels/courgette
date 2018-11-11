const jsonfile = require('jsonfile');
const path = require('path');

function scriptAlreadyExists(name) {
  this.name = 'scriptAlreadyExists';
  this.message = `${name} is already present in the package.json file.`;
}

scriptAlreadyExists.prototype = new Error();
scriptAlreadyExists.prototype.constructor = scriptAlreadyExists;

function NoPackageJsonExists() {
  this.name = 'NoPackageJsonExists';
  this.message = 'No package.json present';
}

NoPackageJsonExists.prototype = new Error();
NoPackageJsonExists.prototype.constructor = NoPackageJsonExists;

const packageJsonFilePath = path.resolve('..', '..', 'package.json');

try {
  const key = process.argv[2];
  const value = process.argv[3];
  const packageJson = jsonfile.readFileSync(packageJsonFilePath);
  if (!packageJson.scripts) packageJson.scripts = {};
  if (packageJson.scripts[key]) {
    console.error('courgette script already exists');
  }
  packageJson.scripts[key] = value;
  jsonfile.writeFileSync(packageJsonFilePath, packageJson, { spaces: 2 });
} catch (e) {
  if (e.message === 'ENOENT, no such file or directory \'package.json\'') {
    throw new NoPackageJsonExists();
  } else {
    throw e;
  }
}
