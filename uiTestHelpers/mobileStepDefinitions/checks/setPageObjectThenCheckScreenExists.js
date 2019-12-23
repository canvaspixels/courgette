module.exports = async function setPageObjectThenCheckScreenExists(pageName) {
  // update the page object
  const newPageObject = this.getPage(pageName);
  
  const screenPath = newPageObject.getScreenPath();
  if (screenPath === undefined) {
    return Promise.resolve();
  }
  const loginScreen = await browser.$(`~${screenPath}`);
  await loginScreen.waitForExist(2000);
};
