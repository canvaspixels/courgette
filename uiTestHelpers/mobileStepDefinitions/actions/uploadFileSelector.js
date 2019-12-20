// const path = require('path');

// const EC = protractor.ExpectedConditions;
// module.exports = function uploadFileSelector(fileToUpload, cssSelector) {
//   const elemelon = element(by.css(cssSelector));
//   return browser.wait(EC.visibilityOf(elemelon))
//     .then(() => {
//       const absolutePath = path.resolve(fileToUpload);

//       browser.executeAsyncScript((selector, callback) => {
//         document.querySelector(selector).style.display = 'inline';
//         callback();
//       }, cssSelector);

//       return elemelon.sendKeys(absolutePath);
//     });
// };
