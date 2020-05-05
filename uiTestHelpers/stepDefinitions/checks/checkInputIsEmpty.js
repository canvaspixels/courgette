module.exports = async function checkInputIsEmpty(locatorKey, isNotEmpty) {
  const currentPage = this.getCurrentPage();
  const el = await currentPage.getElementWhenInDOM(locatorKey)
  if (process.env.BINDINGS === 'WDIO') {
    const elValuePromise = el.getValue();
    return isNotEmpty ?
      expect(elValuePromise).to.not.eventually.equal('') :
      expect(elValuePromise).to.eventually.equal('');
  }

  const elValuePromise = el.getAttribute('value');
  return isNotEmpty ?
    expect(elValuePromise).to.not.eventually.equal('') :
    expect(elValuePromise).to.eventually.equal('');
};
