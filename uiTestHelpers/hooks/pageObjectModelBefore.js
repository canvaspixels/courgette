const path = require('path');
const yaml = require('js-yaml');
const fs = require('fs');

const createPage = require('../../uiTestHelpers/createPage');

const { Before } = require(path.join(process.cwd(), 'node_modules/cucumber'));
const { pomConfig } = require(path.join(process.cwd(), process.env.confFile || 'conf.js'));


const createPageObject = (world, fileName, pagePath, cssSelectors = {}, xPaths = {}) => {
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

  return createPage(fileName, world, pagePath, locators);
};


Before(function pomBeforeHook() {
  this.getComponent = (componentName) => {
    const name = componentName.replace(/ /g, '-').toLowerCase();

    try {
      // eslint-disable-next-line import/no-dynamic-require, global-require
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
      const page = createPageObject(this, name, doc.path, doc.selectors, doc.XPaths);

      if (updateCurrentPage) {
        this.currentPage = page;
      }
      return page;
    } catch (e) {
      console.log(e);
      console.log('No .page file found called here: ', yamlPagePath);
      console.log('Let’s see if a .js page object exists');
      try {
        // eslint-disable-next-line import/no-dynamic-require, global-require
        const page = require(path.resolve(pomConfig.pagesPath, name));

        if (updateCurrentPage) {
          this.currentPage = page(this);
        }
        return page(this);
      } catch (err) {
        // eslint-disable-next-line no-console
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
