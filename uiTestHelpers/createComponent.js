const path = require('path');

const EC = protractor.ExpectedConditions;

module.exports = (name, world, elLocators, type = 'component', customMethods = {}) => {
  const components = {};
  const locators = elLocators;

  const locatorErrorCheck = (locator) => {
    if (!locators[locator]) {
      console.log(`Error: The locator named "${locator}" does not exist for the ${name} ${type}`);
    }
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

    getSelectorFromLocatorKey(locatorKey) {
      if (locators[locatorKey]) {
        return locators[locatorKey].value;
      }
      return null;
    },

    getElement(locator) {
      locatorErrorCheck(locator);

      return element(locators[locator]);
    },

    getElementInsideElement(...ltors) {
      // TODO get working with CSS selectors
      // if (locators[ltors[0]].using === 'css selector') {
      //   return $(ltors[0]).$$(ltors[1]).first();
      // }
      // concatenates xpaths together
      const xpaths = ltors.map((locator) => {
        locatorErrorCheck(locator);
        return locators[locator].value;
      });

      return element(by.xpath(xpaths.join('')));
    },

    getElements(locator) {
      locatorErrorCheck(locator);

      return element.all(locators[locator]);
    },

    getElementWhenInDOM(locator, ...other) {
      let el;

      if (other.length) {
        el = this.getElementInsideElement(locator, ...other);
      } else {
        el = this.getElement(locator);
      }
      // TODO add error
      // `${locator} not found`
      // todo see syntax without EC
      return browser.wait(EC.presenceOf(el)).then(() => el);
    },

    getElementWhenVisible(locator) {
      const el = this.getElement(locator);

      // todo see syntax without EC
      return browser.wait(EC.visibilityOf(el)).then(() => el);
    },

    getElementWhenInvisible(locator) {
      const el = this.getElement(locator);

      // todo see syntax without EC
      return browser.wait(EC.invisibilityOf(el)).then(() => el);
    },
  }, customMethods);
};

module.exports.getFileName = (fileName) =>
  path.basename(fileName).replace(/\.js$/, '');
