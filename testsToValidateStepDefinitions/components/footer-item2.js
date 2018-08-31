const createComponent = require('../../uiTestHelpers/createComponent');

const fileName = createComponent.getFileName(__filename);

module.exports = (world) => {
  const locators = {
    'footer item 2': by.css('.footer-item2'),
  };

  return createComponent(fileName, world, locators);
};
