module.exports = function setSelectValueByOptionText(locatorKey, itemText) {
  return this.getCurrentPage()
    .getElementWhenInDOM(locatorKey)
    .then((element) => {
      let desiredOption;

      element.click();

      return element.$$('option')
        .then((options) => Promise.all(options.map((option) => option.getText().then((text) => {
          if (itemText === text) {
            desiredOption = option;
          }
        }))))
        .then(() => {
          if (desiredOption) {
            return desiredOption.click();
          }
          return Promise.reject(new Error('no option found'));
        });
    });
};
