const path = require('path');

module.exports = async function checkContainsText(locatorKey, containsStr, expectedText) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  if (process.env.DEBUG) {
    console.log('In file:', path.basename(__filename), el);
  }
  
  const text = await el.getText();

  if ((typeof containsStr === 'string' && containsStr.indexOf('contain') === 0) || containsStr === true) {
    return expect(text).to.include(expectedText);
  }

  return expect(text, `
Actual: ${text}
Expected: ${expectedText}
    `)
    .to.not.include(expectedText);
};
