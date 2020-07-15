const fs = require('fs');
const path = require('path');

const { pomConfig } = require(path.join(process.cwd(), process.env.confFile || 'courgette-conf.js'));

module.exports = function takeScreenshot(filename, callback) {
  browser.takeScreenshot().then((png) => {
    const screenshotName = filename || `${this.scenarioName.replace(/ /g, '-')}-${Date.now()}`;
    const screenshotStepPath = (pomConfig.screenshotStepPath || 'stepDefinitionScreenshots');
    const screenshotsDir = path.join(pomConfig.screenshotPath || pomConfig.outputPath, screenshotStepPath);
    const screenshotFilePath = path.join(screenshotsDir, `${screenshotName}.png`);
    const stream = fs.createWriteStream(screenshotFilePath);
    console.log('            ScreenshotFilePath: ', screenshotFilePath);
    this.attach(`ScreenshotFilePath: ${screenshotFilePath}`);
    stream.write(Buffer.from(png, 'base64'));
    stream.end();
    callback();
  });
};
