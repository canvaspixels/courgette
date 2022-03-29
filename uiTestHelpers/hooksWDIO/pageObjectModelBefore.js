const path = require('path');
const yaml = require('yaml-page-objects').default;
const fs = require('fs');

const createPage = require('../../uiTestHelpers/createPageWDIO');
const createComponent = require('../../uiTestHelpers/createComponentWDIO');

const { Before } = require('@cucumber/cucumber');

const { pomConfig } = require(path.join(process.cwd(), process.env.COURGETTE_CONF || 'courgette-conf.js'));

const validateKeys = (doc, objPath, validKeysOpt, isComponent) => {
  const validKeys = validKeysOpt || ['path', 'components', 'selectors', 'extends'];
  Object.keys(doc).forEach((key) => {
    if (!validKeys.includes(key.toLowerCase())) {
      console.error(`"${key}" is not valid inside ${objPath}. The only valid items for a ${isComponent ? 'component' : 'page'} object are: \n\t${validKeys.join('\n\t')}\n\n`);
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
    validateKeys(doc, yamlComponentPath, ['components', 'selectors'], true);
    const components = getObjFromDoc(doc, 'components');
    const selectors = getObjFromDoc(doc, 'selectors');
    return (world) => createComponentObject(name, world, components, selectors);
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

createComponentObject = (fileName, world, components, a11ySelectors = {}) => {
  const a11yLocators = Object.assign({}, a11ySelectors);
  Object.keys(a11ySelectors)
    .forEach((selectorKey) => {
      const accessibilityId = a11yLocators[selectorKey];
      a11yLocators[selectorKey] = $(accessibilityId);
    });

  const locators = Object.assign({}, a11yLocators);

  const component = createComponent(fileName, world, locators);

  if (components) {
    const componentObjects = components.map((componentName) => getComponent(componentName));
    return component.addComponents(componentObjects);
  }

  return component;
};

const createPageObject = (fileName, world, pagePath, components, a11ySelectors = {}) => {
  const a11yLocators = Object.assign({}, a11ySelectors);
  Object.keys(a11ySelectors)
    .forEach((selectorKey) => {
      const accessibilityId = a11yLocators[selectorKey];
      a11yLocators[selectorKey] = $(accessibilityId);
    });

  const locators = Object.assign({}, a11yLocators);

  const page = createPage(fileName, world, pagePath, locators, { timeoutInSeconds: pomConfig.timeoutInSeconds });

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

  this.buildPageObject = (pageName, updateCurrentPage = true) => {
    const name = pageName.replace(/ /g, '-').toLowerCase();

    const yamlPagePath = path.resolve(pomConfig.pagesPath, `${name}.page`);

    if (fs.existsSync(yamlPagePath)) {
      try {
        const doc = yaml.parse(fs.readFileSync(yamlPagePath, 'utf8'));
        validateKeys(doc, yamlPagePath);
        const pagePath = getObjFromDoc(doc, 'path');
        let components = getObjFromDoc(doc, 'components');
        let selectors = getObjFromDoc(doc, 'selectors');

        const extendsPageObj = getObjFromDoc(doc, 'extends');
        if (extendsPageObj) {
          const extendingYamlPagePath = path.resolve(pomConfig.pagesPath, extendsPageObj);
          console.log('extendingYamlPagePath, ', extendingYamlPagePath);
          try {
            const fileToBeExtended = fs.readFileSync(extendingYamlPagePath, 'utf8')
            console.log('fileToBeExtended', fileToBeExtended);
            const docExtending = yaml.parse(fileToBeExtended);
            console.log('docExtending', docExtending);
            validateKeys(docExtending, extendingYamlPagePath);
            console.log('validateKeys', validateKeys);
            if (!components) {
              components = getObjFromDoc(docExtending, 'components');
            }
            selectors = Object.assign({}, getObjFromDoc(docExtending, 'selectors') || {}, selectors || {});
          } catch (e) {
            console.error(`The following extends file does not exist: ${extendingYamlPagePath}`);
          }
        }

        const page = createPageObject(name, this, pagePath, components, selectors);

        if (updateCurrentPage) {
          this.currentPage = page;
        }
        return page;
      } catch (e) {
        console.log(e);
        throw new Error(e);
      }
    }
  };

  this.getCurrentPage = () => {
    if (!this.currentPage) {
      throw new Error('No page is currently set: a page related step needs to be used before this step such as: Given I go the "Home" screen');
    }

    return this.currentPage;
  };
});
