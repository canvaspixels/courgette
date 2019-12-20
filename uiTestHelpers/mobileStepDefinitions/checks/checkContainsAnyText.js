// module.exports = function checkContainsAnyText(locatorKey, doesNotContain) {
//   return this.getCurrentPage().getElementWhenInDOM(locatorKey)
//     .then((el) => (
//       doesNotContain ?
//         expect(el.getText()).to.eventually.equal('') :
//         expect(el.getText()).to.not.eventually.equal('')
//     ));
// };
