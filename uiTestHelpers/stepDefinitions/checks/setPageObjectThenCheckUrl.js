module.exports = function setPageObjectThenCheckUrl(pageName) {
  // update the page object
  const newPageObject = this.getPage(pageName);

  if (newPageObject.getPagePath() === undefined) {
    // don't bother to assert the page path if no page path exists
    console.log(`IMPORTANT: "${pageName}" (${newPageObject.pageFileName}) page object has no path set so no assertion will be made against the page URL.`);
    console.log('This is fine but means that create robust tests, you should check that something is present that you expect to be there before proceeding');
    console.log('Use "Given the \'LOCATOR\' is visible" for example');


    return Promise.resolve();
  }

  // continue to assert the page path if a page path exists
  const expectedUrl = newPageObject.getPageFullUrl();
  const waitTimeout = this.cucumberTimeout - 1000;
  let currentUrlNoTrailingSlash;
  const expectedUrlNoTrailingSlash = expectedUrl.replace(/\/$/, '');
  const timestamp = Date.now();
  return new Promise((resolve, reject) => {
    const pageUrlMatches = () => browser.getCurrentUrl()
      .then((currentUrl) => {
        currentUrlNoTrailingSlash = currentUrl.replace(/\/$/, '');

        if (currentUrlNoTrailingSlash === expectedUrlNoTrailingSlash) {
          resolve();
        } else if (Date.now() > ((timestamp + waitTimeout) - 100)) {
          console.log('Current URL doesn’t match that in page object');
          console.log('Current URL:  ', currentUrlNoTrailingSlash);
          console.log('Expected URL: ', expectedUrlNoTrailingSlash);
          const err = `Current URL: ${currentUrlNoTrailingSlash} ... Expected URL: ${expectedUrlNoTrailingSlash}`;
          reject(err);
        } else {
          pageUrlMatches();
        }
      });

    pageUrlMatches();
  });
};
