const helper = require('../helper');

module.exports = function checkColour(locatorKey, expectedColour, property) {
  const el = this.getCurrentPage().getElement(locatorKey);

  return el.getCssValue(property)
    .then((colour) => expect(helper.normalizeColourAcrossBrowser(colour)).to.equal(expectedColour));
};