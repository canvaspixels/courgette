const fs = require('fs');
const path = require('path');

const { After } = require('cucumber');

const { pomConfig } = require(path.join(process.cwd(), process.env.confFile || 'courgette-conf.js'));

After(async function attachScreenshotAfterHook(scenarioResult) {
  this.attach('Hook Step: attachScreenshotAfterHook');

  const msg = `Screenshot of: ${this.scenarioName}\n`;

  if (scenarioResult.result.status === 'failed' || scenarioResult.result.status === 'undefined') {
    console.log(msg);
    const screenshotFilePath = path.join(pomConfig.screenshotPath || pomConfig.outputPath, `${this.scenarioName.replace(/ /g, '-')}-${Date.now()}.png`);
    await browser.saveScreenshot(screenshotFilePath);
    console.log('*************************************\nScreenshotFilePath:');
    console.log(screenshotFilePath);
    this.attach(`ScreenshotFilePath: ${screenshotFilePath}`);
    console.log('*************************************');
    console.log('-------------------------------------');
    this.attach(msg);
    this.attach('Scenario failed - screenshot attached.');
  }
});
