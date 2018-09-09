const fs = require('fs');
const path = require('path');
const { pomConfig } = require(path.join(process.cwd(), process.env.confFile || 'conf.js'));

module.exports = function takeScreenshot(callback) {
  let bufferedImage;

  browser.takeScreenshot().then((png) => {
    const screenshotFilePath = path.join(pomConfig.outputPath, `${this.scenarioName.replace(/ /g, '-')}-${Date.now()}.png`);
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
