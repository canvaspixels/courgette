// todo forEach of undefined

const getAttributesMap = (el) => {
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
    .then(([expectedElementId, activeElementId, theActiveEl]) => browser.executeScript((activeElArg, elementArg) => ({ activeEl: activeElArg.attributes, element: elementArg.attributes }), theActiveEl, el)
      .then((attrsObj) => expect(expectedElementId, `

Actual: ${JSON.stringify(getAttributesMap(attrsObj.activeEl))}
Expected: ${JSON.stringify(getAttributesMap(attrsObj.element))}

            `)
        .to.equal(activeElementId)));
};
