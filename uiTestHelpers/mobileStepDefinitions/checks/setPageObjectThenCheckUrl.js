// module.exports = function setPageObjectThenCheckUrl(pageName) {
//   // update the page object
//   const newPageObject = this.getPage(pageName);

//   if (newPageObject.getPagePath() === undefined) {
//     // don't bother to assert the page path if no page path exists
//     return Promise.resolve();
//   }

//   // continue to assert the page path if a page path exists
//   const expectedUrl = newPageObject.getPageFullUrl();
//   const waitTimeout = this.cucumberTimeout - 1000;
//   let currentUrlNoTrailingSlash;
//   const expectedUrlNoTrailingSlash = expectedUrl.replace(/\/$/, '');
//   const timestamp = Date.now();
//   return new Promise((resolve, reject) => {
//     const pageUrlMatches = () => browser.getCurrentUrl()
//       .then((currentUrl) => {
//         currentUrlNoTrailingSlash = currentUrl.replace(/\/$/, '');

//         if (currentUrlNoTrailingSlash === expectedUrlNoTrailingSlash) {
//           resolve();
//         } else if (Date.now() > ((timestamp + waitTimeout) - 100)) {
//           console.log('Current URL doesn’t match that in page object');
//           console.log('Current URL:  ', currentUrlNoTrailingSlash);
//           console.log('Expected URL: ', expectedUrlNoTrailingSlash);
//           const err = `Current URL: ${currentUrlNoTrailingSlash} ... Expected URL: ${expectedUrlNoTrailingSlash}`;
//           reject(err);
//         } else {
//           pageUrlMatches();
//         }
//       });

//     pageUrlMatches();
//   });
// };
