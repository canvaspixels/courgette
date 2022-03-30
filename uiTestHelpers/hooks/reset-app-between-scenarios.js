const { Before, After } = require('@cucumber/cucumber');

Before(async () => {
  console.log('Launch the app');
  await driver.launchApp();
});

After(async () => {
  console.log('Close the app');
  await driver.closeApp();
});
