const path = require('path');
const yaml = require('js-yaml');
const fs = require('fs');

const createPage = require('../../uiTestHelpers/createPage');
const createComponent = require('../../uiTestHelpers/createComponent');

const { Before } = require(path.join(process.cwd(), 'node_modules/cucumber'));
const { pomConfig } = require(path.join(process.cwd(), process.env.confFile || 'conf.js'));

let createComponentObject;
const getComponent = (name) => {
  const yamlComponentPath = path.resolve(pomConfig.componentsPath, `${name}.component`);
  try {
    const doc = yaml.safeLoad(fs.readFileSync(yamlComponentPath, 'utf8'));
    return (world) => createComponentObject(world, name, doc.components, doc.selectors, doc.XPaths);
  } catch (e) {
    let noDotComponentFile;
    if (e.message.includes('ENOENT: no such file or directory')) {
      noDotComponentFile = true;
    } else {
      console.log(e);
    }
    try {
      return require(path.resolve(pomConfig.componentsPath, name));
    } catch (err) {
      if (noDotComponentFile) {
        console.log('No .component file found called here: ', yamlComponentPath);
      }
      console.log(err);
      throw new Error(`Component object ${name} not found at ${pomConfig.componentsPath}/${name}`);
    }
  }
};

createComponentObject = (world, fileName, components, cssSelectors = {}, xPaths = {}) => {
  const cssLocators = Object.assign({}, cssSelectors);
  Object.keys(cssSelectors)
    .forEach((selectorKey) => {
      cssLocators[selectorKey] = by.css(cssLocators[selectorKey]);
    });

  const xPathLocators = Object.assign({}, xPaths);
  Object.keys(xPathLocators)
    .forEach((xPathKey) => {
      xPathLocators[xPathKey] = by.xpath(xPathLocators[xPathKey]);
    });

  const locators = Object.assign({}, cssLocators, xPathLocators);

  const component = createComponent(fileName, world, locators);

  if (components) {
    const componentObjects = components.map((componentName) => getComponent(componentName));
    return component.addComponents(componentObjects);
  }

  return component;
};

const createPageObject = (world, fileName, pagePath, components, cssSelectors = {}, xPaths = {}) => {
  const cssLocators = Object.assign({}, cssSelectors);
  Object.keys(cssSelectors)
    .forEach((selectorKey) => {
      cssLocators[selectorKey] = by.css(cssLocators[selectorKey]);
    });

  const xPathLocators = Object.assign({}, xPaths);
  Object.keys(xPathLocators)
    .forEach((xPathKey) => {
      xPathLocators[xPathKey] = by.xpath(xPathLocators[xPathKey]);
    });

  const locators = Object.assign({}, cssLocators, xPathLocators);

  const page = createPage(fileName, world, pagePath, locators);

  if (components) {
    const componentObjects = components.map((componentName) => getComponent(componentName));
    return page.addComponents(componentObjects);
  }

  return page;
};

Before(function pomBeforeHook() {
  this.attach('Hook Step: pomBeforeHook');
  this.getComponent = (componentName) => {
    const name = componentName.replace(/ /g, '-').toLowerCase();

    try {
      const component = require(path.resolve(pomConfig.componentsPath, name));
      return component(this);
    } catch (err) {
      console.log(err);
      throw new Error(`Component object ${name} not found at ${pomConfig.componentsPath}/${name}`);
    }
  };

  this.getPage = (pageName, updateCurrentPage = true) => {
    const name = pageName.replace(/ /g, '-').toLowerCase();

    const yamlPagePath = path.resolve(pomConfig.pagesPath, `${name}.page`);
    try {
      const doc = yaml.safeLoad(fs.readFileSync(yamlPagePath, 'utf8'));
      const page = createPageObject(this, name, doc.path, doc.components, doc.selectors, doc.XPaths);

      if (updateCurrentPage) {
        this.currentPage = page;
      }
      return page;
    } catch (e) {
      let noDotComponentFile;
      if (e.message.includes('ENOENT: no such file or directory')) {
        noDotComponentFile = true;
      } else {
        console.log(e);
      }
      try {
        const page = require(path.resolve(pomConfig.pagesPath, name));

        if (updateCurrentPage) {
          this.currentPage = page(this);
        }
        return page(this);
      } catch (err) {
        if (noDotComponentFile) {
          console.log('No .page file found called: ', yamlPagePath);
        }
        console.log(err);
        throw new Error(`Page object ${name} not found at ${pomConfig.pagesPath}/${name}`);
      }
    }
  };

  this.getCurrentPage = () => {
    if (!this.currentPage) {
      throw new Error('No page is currently set: a page related step needs to be used before this step such as: Given I go the "Home" page');
    }

    return this.currentPage;
  };
});
