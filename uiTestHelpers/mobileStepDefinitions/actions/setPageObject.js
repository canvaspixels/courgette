module.exports = function setPageObject(pageName) {
  const screen = this.buildPageObject(pageName);

  return screen.goToScreen();
};
