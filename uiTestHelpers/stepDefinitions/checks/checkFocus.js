const getAttributesMap = {
  const newMap = {};

  el.forEach((attribute) => {
    newMap[attribute.name] = attribute.value;
  });

  return newMap;
};

module.exports = function checkFocus(locatorKey) {
  const el = this.getCurrentPage().getElement(locatorKey).getWebElement();
  const activeEl = browser.driver.switchTo().activeElement();

  return Promise.all([el.getId(), activeEl.getId(), activeEl])
    .then(([expectedElementId, activeElementId, theActiveEl]) => {
      return browser.executeScript(function(activeElArg, elementArg) {
        return { activeEl: activeElArg.attributes, element: elementArg.attibutes };
      }, theActiveEl, el)
        .then((attrsObj) => {
          if (expectedElementId !== activeElementId) {
            console.error('Actual: ', getAttributesMap(attrsObj.activeEl));
            console.error('Expected: ', getAttributesMap(attrsObj.element));
          }

          return expect(expectedElementId, 'See log above for better Actual vs Expected')
            .to.equal(activeElementId);
        })
    })
};