const checkColour = require('./checkColour');

module.exports = function checkElementBorderColour(locatorKey, position = 'bottom', expectedColour) {
  return checkColour.call(this, locatorKey, expectedColour, `border-${position}-color`)
};