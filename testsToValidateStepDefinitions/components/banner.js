const createComponent = (process.env.BINDINGS === 'WDIO') ? require('../../uiTestHelpers/createComponentWDIO') : require('../../uiTestHelpers/createComponent');

const fileName = createComponent.getFileName(__filename);

module.exports = (world) => {
  const locators = {
    'main banner': (process.env.BINDINGS === 'WDIO') ? '[data-test="main-banner"]' : by.css('[data-test="main-banner"]'),
  };

  return createComponent(fileName, world, locators);
};
