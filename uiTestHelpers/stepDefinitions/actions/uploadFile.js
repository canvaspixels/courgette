const path = require('path');

module.exports = async function uploadFile(fileToUpload, locatorKey) {
  const currentPage = this.getCurrentPage();
  const cssSelector = currentPage.getSelectorFromLocatorKey(locatorKey);
  
  if (process.env.BINDINGS === 'WDIO') {
    const elem = await $(cssSelector);

    // todo add timeout
    await elem.waitForDisplayed()
    const absolutePath = path.resolve(fileToUpload);

    browser.executeAsync((selector, callback) => {
      document.querySelector(selector).style.display = 'inline';
      callback();
    }, cssSelector);

    return elem.keys(absolutePath);
  }

  return currentPage
    .getElementWhenInDOM(locatorKey)
    .then((el) => {
      const absolutePath = path.resolve(fileToUpload);

      browser.executeAsyncScript((selector, callback) => {
        document.querySelector(selector).style.display = 'inline';
        callback();
      }, cssSelector);

      if (process.env.BINDINGS === 'WDIO') {
        return el.keys(absolutePath);
      }

      return el.sendKeys(absolutePath);
    });
};
