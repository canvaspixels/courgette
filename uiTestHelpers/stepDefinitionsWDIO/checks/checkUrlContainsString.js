module.exports = function checkUrl(expectedUrlPart) {
  const waitTimeout = this.cucumberTimeout - 1000;
  let currentUrlNoTrailingSlash;
  const timestamp = Date.now();
  return new Promise((resolve, reject) => {
    const pageUrlMatches = () => browser.getUrl()
      .then((currentUrl) => {
        currentUrlNoTrailingSlash = currentUrl.replace(/\/$/, '');

        if (currentUrlNoTrailingSlash.includes(expectedUrlPart)) {
          resolve();
        } else if (Date.now() > timestamp + waitTimeout) {
          console.log('Current URL doesn’t match that in page object');
          console.log('Current URL:  ', currentUrlNoTrailingSlash);
          console.log('Expected URL part: ', expectedUrlPart);
          const err = `Current URL: ${currentUrlNoTrailingSlash} ... Expected URL Partial: ${expectedUrlPart}`;

          reject(err);
        } else {
          pageUrlMatches();
        }
      });

    pageUrlMatches();
  });
};
