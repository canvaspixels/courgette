const path = require('path');

const { pomConfig } = require(path.join(process.cwd(), process.env.COURGETTE_CONF || 'courgette-conf.js'));

module.exports = function goToURL(pageUrl) {
  // add protocol and host from pomConfig if pageUrl in the page object is just a pathname
  const fullUrl = `${pageUrl.startsWith('http') ? '' : pomConfig.baseUrl}${pageUrl}`;

  console.log('            Trying to get: ', fullUrl);

  return browser.get(fullUrl);
};
