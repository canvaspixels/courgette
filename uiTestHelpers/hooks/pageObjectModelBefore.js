const path = require('path');
const yaml = require('yaml-page-objects').default;
const fs = require('fs');

const createPage = require('../../uiTestHelpers/createPage');
const createComponent = require('../../uiTestHelpers/createComponent');

const { Before } = require(path.join(process.cwd(), 'node_modules/cucumber'));
const { pomConfig } = require(path.join(process.cwd(), process.env.confFile || 'courgette-conf.js'));

const validateKeys = (doc, objPath, validKeysOpt, isComponent) => {
  const validKeys = validKeysOpt || ['path', 'components', 'selectors', 'xpaths', 'deepselectors'];
  Object.keys(doc).forEach((key) => {
    if (!validKeys.includes(key.toLowerCase())) {
      throw new Error(`"${key}" is not valid inside ${objPath}. The only valid items for a ${isComponent ? 'component' : 'page'} object are: \n\t${validKeys.join('\n\t')}\n\n`);
    }
  });
};

const getObjFromDoc = (doc, keyToFind) => {
  const foundKey = Object.keys(doc).find((key) => keyToFind === key.toLowerCase());
  if (foundKey) {
    return doc[foundKey];
  }
  return undefined;
};

let createComponentObject;
const getComponent = (name) => {
  const yamlComponentPath = path.resolve(pomConfig.componentsPath, `${name}.component`);
  try {
    const doc = yaml.parse(fs.readFileSync(yamlComponentPath, 'utf8'));
    validateKeys(doc, yamlComponentPath, ['components', 'selectors', 'xpaths'], true);
    const components = getObjFromDoc(doc, 'components');
    const selectors = getObjFromDoc(doc, 'selectors');
    const xpaths = getObjFromDoc(doc, 'xpaths');
    const deepselectors = getObjFromDoc(doc, 'deepselectors');
    return (world) => createComponentObject(world, name, components, selectors, xpaths, deepselectors);
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

createComponentObject = (world, fileName, components, cssSelectors = {}, xPaths = {}, deepSelectors = {}) => {
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

  const deepLocators = Object.assign({}, deepSelectors);
  Object.keys(deepLocators)
    .forEach((deepSelectorKey) => {
      deepLocators[deepSelectorKey] = by.deepCss(deepLocators[deepSelectorKey]);
    });

  const locators = Object.assign({}, cssLocators, xPathLocators, deepLocators);

  const component = createComponent(fileName, world, locators);

  if (components) {
    const componentObjects = components.map((componentName) => getComponent(componentName));
    return component.addComponents(componentObjects);
  }

  return component;
};

const createPageObject = (world, fileName, pagePath, components, cssSelectors = {}, xPaths = {}, deepSelectors = {}) => {
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

  const deepLocators = Object.assign({}, deepSelectors);
  Object.keys(deepLocators)
    .forEach((deepSelectorKey) => {
      deepLocators[deepSelectorKey] = by.deepCss(deepLocators[deepSelectorKey]);
    });

  const locators = Object.assign({}, cssLocators, xPathLocators, deepLocators);

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
    const name = pageName.replace(/ /g, '-').replace('.page', '').toLowerCase();

    const yamlPagePath = path.resolve(pomConfig.pagesPath, `${name}.page`);
    try {
      const doc = yaml.parse(fs.readFileSync(yamlPagePath, 'utf8'));
      validateKeys(doc, yamlPagePath);
      const pagePath = getObjFromDoc(doc, 'path');
      const components = getObjFromDoc(doc, 'components');
      const selectors = getObjFromDoc(doc, 'selectors');
      const xpaths = getObjFromDoc(doc, 'xpaths');
      const deepselectors = getObjFromDoc(doc, 'deepselectors');
      const page = createPageObject(this, name, pagePath, components, selectors, xpaths, deepselectors);

      if (updateCurrentPage) {
        this.currentPage = page;
      }
      return page;
    } catch (e) {
      let noDotPageFile;
      if (e.message.includes('ENOENT: no such file or directory')) {
        noDotPageFile = true;
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
        if (noDotPageFile) {
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
