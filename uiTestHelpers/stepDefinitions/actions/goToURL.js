const path = require('path');

const { pomConfig } = require(path.join(process.cwd(), process.env.confFile || 'courgette-conf.js'));

module.exports = function goToURL(pageUrl) {
  // add protocol and host from pomConfig if pageUrl in the page object is just a pathname
  const fullUrl = `${pageUrl.startsWith('http') ? '' : pomConfig.baseUrl}${pageUrl}`;

  console.log('            Trying to get: ', fullUrl);
  if (process.env.BINDINGS === 'WDIO') {
    return browser.url(fullUrl);
  }

  return browser.get(fullUrl);
};
