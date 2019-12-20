module.exports = async function clickElement(locatorKey) {
  const pageObj = await this.getCurrentPage()
  console.log('pageObj', pageObj);
  
  const el = await pageObj.getElement(locatorKey)
  // console.log('el', el);
  await el.click()
    // await screen.$('~LoginButton');
    // await goToLoginScreenButton.click();
};


// module.exports = async function clickElement(locatorKey) {
//   console.log('this.screen', this.screen);
  
//   const el = await this.screen.$('~LoginButton')
//   // console.log('el', el);
//   await el.click()
//     // await screen.$('~LoginButton');
//     // await goToLoginScreenButton.click();
// };
