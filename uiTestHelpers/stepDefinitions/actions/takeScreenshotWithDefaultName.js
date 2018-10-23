const takeScreenshot = require('./takeScreenshot');

module.exports = function takeScreenshotWithDefaultName(callback) {
  return takeScreenshot.call(this, '', callback);
};
