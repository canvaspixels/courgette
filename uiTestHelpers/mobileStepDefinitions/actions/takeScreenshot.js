const fs = require('fs');
const path = require('path');

const { pomConfig } = require(path.join(process.cwd(), process.env.COURGETTE_CONF || 'courgette-conf.js'));

module.exports = async function takeScreenshot(filename) {
  const png = await driver.takeScreenshot();
  const screenshotName = path.join(filename || `${this.scenarioName.replace(/ /g, '-')}-${Date.now()}`);
  const screenshotStepPath = (pomConfig.screenshotStepPath || 'stepDefinitionScreenshots');
  const screenshotsDir = path.join(pomConfig.screenshotPath || pomConfig.outputPath, screenshotStepPath);
  const screenshotFilePath = path.join(screenshotsDir, `${screenshotName}.png`);
  const stream = fs.createWriteStream(screenshotFilePath);
  console.log('            ScreenshotFilePath: ', screenshotFilePath);
  this.attach(`ScreenshotFilePath: ${screenshotFilePath}`);
  const bufferedImage = Buffer.from(png.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
  stream.write(bufferedImage);
  stream.end();
};
