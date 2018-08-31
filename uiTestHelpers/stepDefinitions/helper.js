module.exports = {
  normalizeColorAcrossBrowser(rgbString) {
    if (rgbString.includes('rgb(')) {
      return rgbString.replace('rgb(', 'rgba(').replace(')', ', 1)');
    }
    return rgbString.replace('rgba(0, 0, 0, 0)', 'transparent');
  },
};
