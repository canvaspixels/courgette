module.exports = async function setPageObjectThenCheckScreenExists(pageName) {
  // update the page object
  const newPageObject = this.buildPageObject(pageName);

  const screenPath = newPageObject.getScreenPath();
  if (screenPath === undefined) {
    return Promise.resolve();
  }
  const screen = await browser.$(`~${screenPath}`);
  return screen.waitForExist(10000);
};
