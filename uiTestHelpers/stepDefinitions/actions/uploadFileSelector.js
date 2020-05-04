const path = require('path');

const EC = protractor.ExpectedConditions;
module.exports = function uploadFileSelector(fileToUpload, cssSelector) {
  const elemelon = element(by.css(cssSelector));
  return browser.wait(EC.visibilityOf(elemelon))
    .then(() => {
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
