// in some circumstances using send keys to set text on an input doesn't
// fire the change event correcly so for example your redux store might not be updated
// this function is particularly useful if you want to send a lot of text to the
// browser all at once as sendKeys is particularly slow

module.exports = function setReactInputFieldValue(locatorKey, text) {
  return this.getCurrentPage()
    .getElementWhenInDOM(locatorKey)
    .then((element) => browser.execute((domEl, val) => {
      const domElement = domEl;
      const valueFromDescriptor = Object.getOwnPropertyDescriptor(domElement, 'value');
      const elProto = Object.getPrototypeOf(domElement);
      const valueFromProtoDescriptor = Object.getOwnPropertyDescriptor(elProto, 'value');

      if (valueFromDescriptor && valueFromDescriptor.set &&
          valueFromProtoDescriptor && valueFromProtoDescriptor.set &&
          valueFromDescriptor.set !== valueFromProtoDescriptor.set) {
        valueFromProtoDescriptor.set.call(domElement, val);
      } else {
        domElement.value = val;
      }

      // react 15 - ie11
      window.event = window.document.createEvent('HTMLEvents');
      window.event.initEvent('propertychange', false, false);
      window.event.propertyname = 'value';
      domElement.dispatchEvent(window.event);

      // react 15 - browsers other than ie
      // react 16 - ie10, ie11, browsers other than ie
      window.event = window.document.createEvent('HTMLEvents');
      window.event.initEvent('input', true, false);
      domElement.dispatchEvent(window.event);
    }, element, text));
};
