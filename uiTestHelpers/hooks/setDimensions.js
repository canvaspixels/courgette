const { Before } = require('@cucumber/cucumber');

Before(async function () {
  console.log('            Set browser width and height');
  await this.goToPage('login');
  await browser.driver.manage().window().setSize(1280, 1400);
});
