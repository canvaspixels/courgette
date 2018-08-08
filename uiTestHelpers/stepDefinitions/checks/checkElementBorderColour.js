const checkColour = require('./checkColour');

module.exports = function checkElementBorderColour(position, locatorKey, expectedColour) {
  return checkColour.call(this, locatorKey, expectedColour, `border-${position || 'bottom'}-color`)
};