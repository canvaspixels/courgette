// module.exports = function checkInputValue(locatorKey, isNot, expectedVal) {
//   const expectedValue = expectedVal === undefined ? '' : expectedVal;

//   return this.getCurrentPage().getElementWhenInDOM(locatorKey)
//     .then((el) => {
//       const elValuePromise = el.getAttribute('value');
//       return isNot ?
//         expect(elValuePromise).to.not.eventually.equal(expectedValue) :
//         expect(elValuePromise).to.eventually.equal(expectedValue);
//     });
// };
