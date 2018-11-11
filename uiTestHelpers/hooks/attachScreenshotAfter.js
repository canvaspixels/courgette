const fs = require('fs');
const path = require('path');

const { After } = require(path.join(process.cwd(), 'node_modules/cucumber'));

const { pomConfig } = require(path.join(process.cwd(), process.env.confFile || 'courgette-conf.js'));

After(function attachScreenshotAfterHook(scenarioResult, callback) {
  this.attach('Hook Step: attachScreenshotAfterHook');

  const msg = `Screenshot of: ${this.scenarioName}\n`;
  if (scenarioResult.result.status === 'failed' || scenarioResult.result.status === 'undefined') {
    let bufferedImage;

    console.log(msg);
    browser.takeScreenshot().then((png) => {
      const screenshotFilePath = path.join(pomConfig.outputPath, `${this.scenarioName.replace(/ /g, '-')}-${Date.now()}.png`);
      const stream = fs.createWriteStream(screenshotFilePath);
      console.log('*************************************\nScreenshotFilePath:');
      console.log(screenshotFilePath);
      this.attach(`ScreenshotFilePath: ${screenshotFilePath}`);
      console.log('*************************************');
      console.log('-------------------------------------');
      stream.write(Buffer.from(png, 'base64'));
      stream.end();
      bufferedImage = Buffer.from(png.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
      this.attach(msg);
      this.attach('Scenario failed - screenshot attached.');
    }).then(() => {
      this.attach(bufferedImage, 'image/png');
      callback();
    });
  } else {
    callback();
  }
});
