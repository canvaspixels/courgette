module.exports = function disableAnimations() {
  const executeFn = process.env.BINDINGS === 'WDIO' ? browser.execute : browser.executeScript
  return executeFn(() => {
    // This following block executes in the context of the browser,
    // which we cant rely on having support for let/const
    // eslint-disable-next-line no-var
    var style = window.document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '* {' +
            ' /*CSS transitions*/' +
            ' -o-transition-property: none !important;' +
            ' -moz-transition-property: none !important;' +
            ' -ms transition-property: none !important;' +
            ' -webkit-transition-property: none !important;' +
            ' transition-property: none !important;' +
            ' /*CSS animations*/' +
            ' -webkit-animation: none !important;' +
            ' -moz-animation: none !important;' +
            ' -o-animation: none !important;' +
            ' -ms-animation: none !important;' +
            ' animation: none !important;}';
    style.setAttribute(
      'nonce',
      window.document.getElementsByTagName('style')[0].nonce,
    );
    window.document.getElementsByTagName('head')[0].appendChild(style);
  });
};
