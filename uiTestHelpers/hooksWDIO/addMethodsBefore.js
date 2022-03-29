const path = require('path');

const { Before } = require('@cucumber/cucumber');

const api = require('../../api');

Before(function addMethodsBeforeHook() {
  // this.attach('Hook Step: addMethodsBeforeHook');
  [...api.pageObjectsNotRequired, ...api.pageObjectsRequired]
    .forEach(({ methodName, method }) => {
      this[methodName] = method;
    });
});
