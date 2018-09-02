module.exports = function checkContainsText(locatorKey, containsStr, expectedText) {
  return this.getCurrentPage().getElementWhenInDOM(locatorKey)
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
