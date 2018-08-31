const checkColour = require('./checkColour');

module.exports = function checkElementBackgroundColour(locatorKey, expectedColour) {
  return checkColour.call(this, locatorKey, expectedColour, 'background-color');
};
