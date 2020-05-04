const path = require('path');

module.exports = function uploadFile(fileToUpload, locatorKey) {
  const currentPage = this.getCurrentPage();
  const cssSelector = currentPage.getSelectorFromLocatorKey(locatorKey);
  return currentPage
    .getElementWhenInDOM(locatorKey)
    .then((el) => {
      const absolutePath = path.resolve(fileToUpload);

      const executeFn = process.env.BINDINGS === 'WDIO' ? browser.executeAsync : browser.executeAsyncScript;
      executeFn((selector, callback) => {
        document.querySelector(selector).style.display = 'inline';
        callback();
      }, cssSelector);

      if (process.env.BINDINGS === 'WDIO') {
        return el.keys(absolutePath);
      }

      return el.sendKeys(absolutePath);
    });
};
