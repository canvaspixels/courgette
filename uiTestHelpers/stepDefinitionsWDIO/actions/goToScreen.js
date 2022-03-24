module.exports = function goToScreen(pageName) {
  const screen = this.buildPageObject(pageName);

  return screen.goToScreen();
};
