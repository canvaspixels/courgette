module.exports = function checkElementInsideElementContainsText(locatorKey2, locatorKey, containsStr, expectedText) {
  return this.getCurrentPage().getElementWhenInDOM(locatorKey, locatorKey2)
    .then((el) =>
      el.getText().then((text) => {
        if ((typeof containsStr === 'string' && containsStr.indexOf('contain') === 0) || containsStr === true) {
          return expect(text).to.include(expectedText);
        }

        return expect(text, `
Actual: ${text}
Expected: ${expectedText}
          `)
          .to.not.include(expectedText);
      }));
};
