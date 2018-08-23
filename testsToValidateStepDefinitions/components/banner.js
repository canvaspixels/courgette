const createComponent = require('../../uiTestHelpers/createComponent');
const fileName = createComponent.getFileName(__filename);

module.exports = (world) => {
  const locators = {
    'main banner': by.css('[data-test="main-banner"]'),
  };

  return createComponent(fileName, world, locators);
};
