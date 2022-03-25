module.exports = function goToPage(pageName) {
  const screen = this.buildPageObject(pageName);

  return screen.goToPage();
};
