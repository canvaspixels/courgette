module.exports = function setPageObjectThenCheckScreenExists(pageName) {
  const screen = this.buildPageObject(pageName);

  return screen.goToScreen();
};
