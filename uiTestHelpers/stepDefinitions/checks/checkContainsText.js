module.exports = function checkContainsText(locatorKey, containsStr, expectedText) {
  return this.getCurrentPage().getElementWhenInDOM(locatorKey)
    .then((el) => (
      containsStr.indexOf('contain') === 0 ?
        expect(el.getText()).to.eventually.equal(expectedText) :
        el.getText().then((text) => {
          return expect(text, `Actual: ${text} --- Expected: ${expectedText}`)
            .to.not.equal(expectedText)
        })
    ));
};