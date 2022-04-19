const path = require('path');

module.exports = (name, world, elLocators, type = 'component', customMethods = {}) => {
  const components = {};
  const locators = elLocators;

  const locatorErrorCheck = async (locator) => {
    if (!locators[locator]) {
      return Promise.reject(new Error(`Error: The locator named "${locator}" does not exist for the ${name} ${type}`));
    }
    return Promise.resolve();
  };

  return Object.assign({}, {
    name,
    type,
    locators,

    addComponents(args) {
      args.forEach((component) => {
        const componentInstance = component(world);
        const componentName = componentInstance.name;
        components[componentName] = componentInstance;

        Object.keys(componentInstance.locators).forEach((locatorName) => {
          if (locators[locatorName]) {
            console.error(`Error: Cannot add component "${componentName}" ${componentInstance.type} into the ${name} ${type} because there is an element name locator conflict.`);
            console.error(`Both have the same locator name "${locatorName}"`);
            throw new Error(`Cannot add component "${componentName}" ${componentInstance.type} into the ${name} ${type} because there is an element name locator conflict.
              Both have the same locator name "${locatorName}"\n`);
          }

          locators[locatorName] = componentInstance.locators[locatorName];
        });
      });

      return this;
    },

    getComponent(componentName) {
      if (!components[componentName]) {
        console.error(`Error: getComponent(): No component named ${componentName} ${type} has been added`);
      }

      return components[componentName];
    },

    getElement: async (locatorKey) => {
      try {
        await locatorErrorCheck(locatorKey);
      } catch (e) {
        return Promise.reject(e);
      }
      const selector = await locators[locatorKey].selector;
      if (process.env.COURGETTE_DEBUG) {
        console.log('screen: ', world.screen);
        console.log('getElement, locator key: ', locatorKey);
        console.log('translates to selector from page object: ', selector);
      }
      return browser.$(selector);
    },

    getElements: async (locatorKey) => {
      try {
        await locatorErrorCheck(locatorKey);
      } catch (e) {
        return Promise.reject(e);
      }
      const selector = await locators[locatorKey].selector;
      if (process.env.COURGETTE_DEBUG) {
        console.log('screen: ', world.screen);
        console.log('getElements, locator key: ', locatorKey);
        console.log('translates to selector from page object: ', selector);
      }
      return browser.$$(selector);
    },

    async getElementWhenInDOM(locatorKey, ...other) {
      let el;

      if (other.length) {
        el = await this.getElementInsideElement(locatorKey, ...other);
      } else {
        el = await this.getElement(locatorKey);
      }
      // TODO add error
      await el.waitForExist();
      // `${locator} not found`
      return el;
    },

    getSelectorByLocatorKey: async (locatorKey) => {
      console.log('locators', locators);
      const selector = await locators[locatorKey].selector;

      return selector;
    },

    async getElementInsideElement(locatorKey, locatorKey2) {
      const el1 = await this.getElement(locatorKey);
      const selector = await locators[locatorKey2].selector;
      return el1.$(selector);
    },
  }, customMethods);
};

module.exports.getFileName = (fileName) =>
  path.basename(fileName).replace(/\.js$/, '');
