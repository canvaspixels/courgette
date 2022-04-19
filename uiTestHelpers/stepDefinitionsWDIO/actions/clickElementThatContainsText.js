module.exports = function clickElementThatContainsText(nth, text) {
  let xpath = `//*[contains(text(),"${text}") or contains(@value,"${text}")]/ancestor-or-self::*[self::a or self::button or self::input]`;
  if (nth) {
    // remove nd from 2nd for example
    xpath = `(${xpath})[${nth.replace(/\D/g, '')}]`;
  }

  console.log('            Getting clickable element (a, input, button) by xpath:');
  console.log('              ', xpath);
  return $(xpath).click();
};
