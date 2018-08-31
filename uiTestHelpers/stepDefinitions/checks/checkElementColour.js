const checkColour = require('./checkColour');

module.exports = function checkElementColour(locatorKey, expectedColour) {
  return checkColour.call(this, locatorKey, expectedColour, 'color');
};
