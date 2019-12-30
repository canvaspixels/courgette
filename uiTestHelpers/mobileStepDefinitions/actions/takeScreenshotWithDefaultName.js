const takeScreenshot = require('./takeScreenshot');

module.exports = function takeScreenshotWithDefaultName() {
  return takeScreenshot.call(this, '');
};
