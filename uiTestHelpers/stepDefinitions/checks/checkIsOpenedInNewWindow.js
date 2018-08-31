module.exports = function checkIsOpenedInNewWindow(href) {
  const openTabHandles = browser.getAllWindowHandles()
    .then((handles) =>
      handles.map((handle) =>
        browser.switchTo().window(handle)
          .then(() =>
            browser.getCurrentUrl())));

  return openTabHandles
    .then((urlPromises) => Promise.all(urlPromises))
    .then((openTabUrls) => {
      if (!openTabUrls.includes(href)) {
        throw new Error(`Actual open tab urls: ${openTabUrls}. Expected: ${href}`);
      }
      return expect(openTabUrls).to.include(href);
    });
};
