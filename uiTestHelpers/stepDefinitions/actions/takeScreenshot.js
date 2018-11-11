const fs = require('fs');
const path = require('path');

const { pomConfig } = require(path.join(process.cwd(), process.env.confFile || 'courgette-conf.js'));

module.exports = function takeScreenshot(filename, callback) {
  let bufferedImage;

  browser.takeScreenshot().then((png) => {
    const screenshotName = filename || `${this.scenarioName.replace(/ /g, '-')}-${Date.now()}`;
    const screenshotStepPath = (pomConfig.screenshotStepPath || 'stepDefinitionScreenshots');
    const screenshotsDir = path.join(pomConfig.outputPath, screenshotStepPath);
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir);
    }
    const screenshotFilePath = path.join(screenshotsDir, `${screenshotName}.png`);
    const stream = fs.createWriteStream(screenshotFilePath);
    console.log('ScreenshotFilePath: ', screenshotFilePath);
    this.attach(`ScreenshotFilePath: ${screenshotFilePath}`);
    stream.write(Buffer.from(png, 'base64'));
    stream.end();
    bufferedImage = Buffer.from(png.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
    this.attach('take a screenshot step - screenshot attached.');
    this.attach(bufferedImage, 'image/png');
    callback();
  });
};
