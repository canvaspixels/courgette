const scrollIntoView = async (dir = 'down', el, pageObj, locatorKey, scrollIndex = 1) => {
  let scrollToEl;
  const amountToScrollEachLoop = 1000;
  try {
    scrollToEl = await pageObj.getElement(locatorKey);

    if (scrollToEl.error) {
      const touchStartY = amountToScrollEachLoop * scrollIndex;
      const touchEndY = dir === 'down' ? touchStartY - amountToScrollEachLoop : touchStartY + amountToScrollEachLoop;
      await el.touchAction([
        { action: 'press', x: 50, y: touchStartY },
        { action: 'wait', ms: 500 },
        { action: 'moveTo', x: 50, y: touchEndY },
        'release',
      ]);
      scrollIntoView(dir, el, pageObj, locatorKey, scrollIndex + 1);
      if (process.env.DEBUG) {
        console.log('Scrolling to element');
      }
    } else if (process.env.DEBUG) {
      console.log('Scrolled to element: element now in view');
    }
  } catch (e) {
    console.log('OH NO!!', e, scrollToEl);
  }
};

module.exports = async function scrollToElement(scrollingContainerLocatorKey, direction, locatorKey) {
  const pageObj = await this.getCurrentPage();
  const scrollableElement = await pageObj.getElement(scrollingContainerLocatorKey);
  if (process.env.PLATFORM.includes('ios')) {
    const name = pageObj.locators[locatorKey].accessibilityId;
    if (process.env.DEBUG) {
      console.log('accessibilityId name: ', name);
    }

    await driver.execute('mobile: scroll', { element: scrollableElement, direction, name });
  } else {
    await scrollIntoView(direction, scrollableElement, pageObj, locatorKey);
  }
};
