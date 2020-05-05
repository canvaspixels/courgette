module.exports = function checkUrlContainsString(expectedUrlPart) {
  const waitTimeout = this.cucumberTimeout - 1000;
  let currentUrlNoTrailingSlash;
  const expectedUrlNoTrailingSlash = expectedUrlPart.replace(/\/$/, '');
  const timestamp = Date.now();
  return new Promise((resolve, reject) => {
    let pageUrl
    if (process.env.BINDINGS === 'WDIO') {
      pageUrl = browser.getUrl()
    } else {
      pageUrl = browser.getCurrentUrl()
    }
    const pageUrlMatches = () => pageUrl
      .then((currentUrl) => {
        currentUrlNoTrailingSlash = currentUrl.replace(/\/$/, '');

        if (currentUrlNoTrailingSlash.includes(expectedUrlNoTrailingSlash)) {
          resolve();
        } else if (Date.now() > timestamp + waitTimeout) {
          console.log('Current URL doesn’t contain the URL that is in the page object');
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
