module.exports = function setPageObjectThenCheckScreenExists(pageName) {
  return this.buildPageObject(pageName).goToPage();
};
