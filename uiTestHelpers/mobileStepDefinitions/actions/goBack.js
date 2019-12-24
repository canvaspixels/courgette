module.exports = async function goBack() {
  // i believe this only works in the web context
  await driver.back();
};
