const path = require('path');

const { Before } = require(path.join(process.cwd(), 'node_modules/cucumber'));

const api = require('../../api');

Before(function addMethodsBeforeHook() {
  this.attach('Hook Step: addMethodsBeforeHook');

  [...api.pageObjectsNotRequired, ...api.pageObjectsRequired]
    .forEach(({ methodName, method }) => {
      this[methodName] = method;
    });
});
