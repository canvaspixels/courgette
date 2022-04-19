module.exports = function wait(numberOfSecs) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, numberOfSecs * 1000);
  });
};
