const path = require('path');

module.exports = async function uploadFileSelector(fileToUpload, cssSelector) {
  if (process.env.BINDINGS === 'WDIO') {
    const elemelon = await $(cssSelector);

    // todo add timeout
    await elemelon.waitForDisplayed()
    const absolutePath = path.resolve(fileToUpload);

    browser.executeAsync((selector, callback) => {
      document.querySelector(selector).style.display = 'inline';
      callback();
    }, cssSelector);

    return elemelon.keys(absolutePath);
  }

  const elemelon = element(by.css(cssSelector));
  return browser.wait(protractor.ExpectedConditions.visibilityOf(elemelon))
    .then(() => {
      const absolutePath = path.resolve(fileToUpload);

      browser.executeAsyncScript((selector, callback) => {
        document.querySelector(selector).style.display = 'inline';
        callback();
      }, cssSelector);

      return elemelon.sendKeys(absolutePath);
    });
};
