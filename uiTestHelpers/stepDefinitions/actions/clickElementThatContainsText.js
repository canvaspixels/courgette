module.exports = function clickElementThatContainsText(nth, text) {
  const EC = protractor.ExpectedConditions;
  //* [contains(text(),'match')]
  let xpath = `//*[contains(text(),"${text}")]/ancestor-or-self::*[self::a or self::button]`;
  if (nth) {
    // remove nd from 2nd for example
    xpath = `(${xpath})[${nth.replace(/\D/g, '')}]`;
  }
  const elToClick = element(by.xpath(xpath));
  return browser.wait(EC.presenceOf(elToClick))
    .then(() => elToClick.click());
};
