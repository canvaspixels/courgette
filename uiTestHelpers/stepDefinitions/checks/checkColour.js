const helper = require('../helper');

module.exports = async function checkColour(locatorKey, expectedColour, property) {
  const pageObject = this.getCurrentPage();
  
  if (process.env.BINDINGS === 'WDIO') {
    const elem = await pageObject.getElement(locatorKey);
    const colour = await elem.getCSSProperty(property);

    return expect(helper.normalizeColorAcrossBrowser(colour.value).replace(/ /g, '')).to.equal(expectedColour.replace(/ /g, ''));
  }

  const el = pageObject.getElement(locatorKey);
  return el.getCssValue(property)
    .then((colour) => expect(helper.normalizeColorAcrossBrowser(colour)).to.equal(expectedColour));
};
