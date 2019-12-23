module.exports = async function clickElement(locatorKey) {
  const pageObj = await this.getCurrentPage()
  
  const el = await pageObj.getElement(locatorKey)
  await el.click()
};
