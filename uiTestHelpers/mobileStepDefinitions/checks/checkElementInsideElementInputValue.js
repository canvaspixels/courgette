// module.exports = function checkElementInsideElementInputValue(locatorKey2, locatorKey, isNot, expectedVal) {
//   const expectedValue = expectedVal === undefined ? '' : expectedVal;

//   return this.getCurrentPage().getElementWhenInDOM(locatorKey, locatorKey2)
//     .then((el) => {
//       const elValuePromise = el.getAttribute('value');
//       return isNot ?
//         expect(elValuePromise).to.not.eventually.equal(expectedValue) :
//         expect(elValuePromise).to.eventually.equal(expectedValue);
//     });
// };
