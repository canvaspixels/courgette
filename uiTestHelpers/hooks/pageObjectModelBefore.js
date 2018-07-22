const path = require('path');
const { Before } = require(path.join(process.cwd(), 'node_modules/cucumber'));
const { pomConfig } = require(path.join(process.cwd(), process.env.confFile || 'conf.js'));

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

    try {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      const page = require(path.resolve(pomConfig.pagesPath, name));

      if(updateCurrentPage) {
        this.currentPage = page(this);
      }
      return page(this);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      throw new Error(`Page object ${name} not found at ${pomConfig.pagesPath}/${name}`);
    }
  };

  this.getCurrentPage = () => {
    if (!this.currentPage) {
      throw new Error('No page is currently set: a page related step needs to be used before this step such as: Given I go the "Home" page');
    }

    return this.currentPage;
  };
});
