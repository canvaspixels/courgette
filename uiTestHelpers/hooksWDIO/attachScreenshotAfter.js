const fs = require('fs');
const path = require('path');

const { After } = require('@cucumber/cucumber');

const { pomConfig } = require(path.join(process.cwd(), process.env.COURGETTE_CONF || 'courgette-conf.js'));

After(async function attachScreenshotAfterHook(scenarioResult) {
  this.attach('Hook Step: attachScreenshotAfterHook');

  const msg = `Screenshot of: ${this.scenarioName}\n`;
  if (scenarioResult.result.status === 'FAILED' || scenarioResult.result.status === 'undefined') {
    console.log(msg);
    const screenshotFilePath = path.join(pomConfig.screenshotPath || pomConfig.outputPath, `${this.scenarioName.replace(/ /g, '-')}-${Date.now()}.png`);
    const png = await driver.saveScreenshot(screenshotFilePath);
    const stream = fs.createWriteStream(screenshotFilePath);
    console.log('*************************************\nScreenshotFilePath:');
    console.log(screenshotFilePath);
    this.attach(`ScreenshotFilePath: ${screenshotFilePath}`);
    console.log('*************************************');
    console.log('-------------------------------------');
    stream.write(Buffer.from(png, 'base64'));
    stream.end();
  }
});
