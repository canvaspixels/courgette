module.exports = async function checkInputValue(locatorKey, isNot, expectedVal) {
  const currentPage = this.getCurrentPage();
  const el = await currentPage.getElementWhenInDOM(locatorKey)
  const expectedValue = [undefined, null].includes(expectedVal) ? '' : expectedVal;

  if (process.env.BINDINGS === 'WDIO') {
    const elValuePromise = await el.getValue();
    
    return isNot ?
      expect(elValuePromise).to.not.equal(expectedValue) :
      expect(elValuePromise).to.equal(expectedValue);
  }

  const elValuePromise = el.getAttribute('value');
  return isNot ?
    expect(elValuePromise).to.not.eventually.equal(expectedValue) :
    expect(elValuePromise).to.eventually.equal(expectedValue);
};
