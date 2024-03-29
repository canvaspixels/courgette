const fp = require('find-free-port');

module.exports = (from, to) => new Promise((resolve, reject) => {
  fp(from, to, (err, freePort) => {
    if (err) {
      return reject(err);
    }
    return resolve(freePort);
  });
});
