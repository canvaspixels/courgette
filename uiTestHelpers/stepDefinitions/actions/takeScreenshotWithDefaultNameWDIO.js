const fs = require('fs');
const path = require('path');

const { pomConfig } = require(path.join(process.cwd(), process.env.confFile || 'courgette-conf.js'));

module.exports = function takeScreenshotWithDefaultName() {
  const filename = ''
  const screenshotName = filename || `${this.scenarioName.replace(/ /g, '-')}-${Date.now()}`;
  const screenshotStepPath = (pomConfig.screenshotStepPath || 'stepDefinitionScreenshots');
  const screenshotsDir = path.join(pomConfig.screenshotPath || pomConfig.outputPath, screenshotStepPath);
  const screenshotFilePath = path.join(screenshotsDir, `${screenshotName}.png`);
  console.log('            ScreenshotFilePath: ', screenshotFilePath);
  this.attach(`ScreenshotFilePath: ${screenshotFilePath}`);
  return browser.saveScreenshot(screenshotFilePath)
};
