module.exports = function checkPageContainsText(text) {
  const xpath = `//*[contains(text(),"${text}")]`;
  const el = $(xpath);
  return el.waitForExist();
};
