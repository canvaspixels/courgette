const { Before } = require('@cucumber/cucumber');

Before(function attachScenariosNameBeforeHook(scenarioResult) {
  this.attach('Hook Step: attachScenariosNameBeforeHook');
  this.scenarioName = scenarioResult.pickle.name;
  this.attach(this.scenarioName);
});
