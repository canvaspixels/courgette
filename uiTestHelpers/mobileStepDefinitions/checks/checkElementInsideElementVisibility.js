// module.exports = function checkElementInsideElementVisibility(locatorKey2, locatorKey, visibleOrHidden) {
//   const currentPage = this.getCurrentPage();
//   return currentPage
//     .getElementWhenInDOM(locatorKey, locatorKey2)
//     .then(() => (visibleOrHidden === 'hidden' ?
//       currentPage.getElementWhenInvisible(locatorKey) :
//       currentPage.getElementWhenVisible(locatorKey)));
// };
