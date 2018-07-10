module.exports = function setSelectValueByOptionText(locatorKey, itemText) {
  return this.getCurrentPage()
    .getElementWhenInDOM(locatorKey)
    .then((element) => {
      let desiredOption;

      element.click();

      return element.$$('option')
        .then(function findMatchingOption(options) {
          return Promise.all(options.map(function(option) {
              return option.getText().then(function doesOptionMatch(text) {
                if (itemText === text) {
                  desiredOption = option;
                }
              });
          }));
        })
        .then(function() {
          if (desiredOption) {
            return desiredOption.click();
          }
          return Promise.reject(new Error('no option found'));
        });
    });
};