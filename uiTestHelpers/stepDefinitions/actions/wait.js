const EC = protractor.ExpectedConditions;

module.exports = function wait(numberOfSecs, callback) {
  setTimeout(() => {
    callback()
  }, numberOfSecs * 1000)
};
