const path = require('path');

const { Before } = require(path.join(process.cwd(), 'node_modules/cucumber'));

Before(function attachScenariosNameBeforeHook(scenarioResult) {
  this.attach('Hook Step: attachScenariosNameBeforeHook');
  return browser.getCapabilities().then((caps) => {
    const platformName = caps.get('platformName');
    const version = caps.get('version');
    const browserName = caps.get('browserName');
    if (platformName && version) {
      this.scenarioName = `${scenarioResult.pickle.name}-${platformName}-${browserName}-${version}`;
    } else {
      this.scenarioName = scenarioResult.pickle.name;
    }
  }).then(() => {
    this.attach(this.scenarioName);
  });
});
