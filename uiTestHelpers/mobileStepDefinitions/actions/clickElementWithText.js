// module.exports = function clickElementWithText(nth, text) {
//   const EC = protractor.ExpectedConditions;

//   let xpath = `//*[text()="${text}" or @value="${text}"]/ancestor-or-self::*[self::a or self::button or self::input]`;
//   if (nth) {
//     // remove nd from 2nd for example
//     xpath = `(${xpath})[${nth.replace(/\D/g, '')}]`;
//   }
//   console.log('            Getting clickable element (a, input, button) by xpath:');
//   console.log('              ', xpath);
//   const elToClick = element(by.xpath(xpath));
//   return browser.wait(EC.presenceOf(elToClick))
//     .then(() => elToClick.click());
// };
