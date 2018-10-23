const takeScreenshot = require('./takeScreenshot');

module.exports = function takeScreenshotWithDefaultName(callback) {
  let bufferedImage;

  return takeScreenshot('', callback);
};
