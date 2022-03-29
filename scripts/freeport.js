var fp = require("find-free-port");

module.exports = (from, to) => new Promise((resolve, reject) => {
  fp(from, to, function(err, freePort){
    if (err) {
      return reject(err)
    }
    resolve(freePort)
  });
})