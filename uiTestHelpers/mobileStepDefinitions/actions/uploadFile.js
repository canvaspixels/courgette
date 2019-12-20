// const path = require('path');

// module.exports = function uploadFile(fileToUpload, locatorKey) {
//   const currentPage = this.getCurrentPage();
//   const cssSelector = currentPage.getSelectorFromLocatorKey(locatorKey);
//   return currentPage
//     .getElementWhenInDOM(locatorKey)
//     .then((el) => {
//       const absolutePath = path.resolve(fileToUpload);

//       browser.executeAsyncScript((selector, callback) => {
//         document.querySelector(selector).style.display = 'inline';
//         callback();
//       }, cssSelector);

//       return el.sendKeys(absolutePath);
//     });
// };
