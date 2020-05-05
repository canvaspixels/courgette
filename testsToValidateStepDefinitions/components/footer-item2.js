const createComponent = (process.env.BINDINGS === 'WDIO') ? require('../../uiTestHelpers/createComponentWDIO') : require('../../uiTestHelpers/createComponent');

const fileName = createComponent.getFileName(__filename);

module.exports = (world) => {
  const locators = {
    'footer item 2': (process.env.BINDINGS === 'WDIO') ? '.footer-item2' : by.css('.footer-item2'),
  };

  return createComponent(fileName, world, locators);
};
