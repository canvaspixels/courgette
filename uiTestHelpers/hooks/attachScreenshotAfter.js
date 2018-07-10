const fs = require('fs');
const path = require('path');

const { After } = require(path.join(process.cwd(), 'node_modules/cucumber'));

const { pomConfig } = require(path.join(process.cwd(), process.env.confFile || 'conf.js'));

After(function screenshotAfterHook(scenarioResult, callback) {
  const msg = `Screenshot of ${this.scenarioName}\n`;
  if (scenarioResult.result.status === 'failed') {
    let bufferedImage;

    console.log(msg);
    browser.takeScreenshot().then((png) => {
      const screenshotFilePath = path.join(pomConfig.outputPath, `${this.scenarioName} - ${Date.now()}`);
      const stream = fs.createWriteStream(screenshotFilePath);
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
    console.log(msg); // TODO check this
    callback();
  }
});
