const path = require('path');
const api = require('../../api');
const { Before } = require(path.join(process.cwd(), 'node_modules/cucumber'));

Before(function addMethodsBeforeHook() {
  this.attach('Hook Step: addMethodsBeforeHook');

  [...api.pageObjectsNotRequired, ...api.pageObjectsRequired]
    .forEach(({ methodName, method }) => {
      this[methodName] = method;
    });
});