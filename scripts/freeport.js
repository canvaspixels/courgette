var net = require('net');

module.exports = () => new Promise((resolve, reject) => {
  var server = net.createServer();
  var calledFn = false;

  server.on('error', function(err) {
    server.close();

    if (!calledFn) {
      calledFn = true;
      reject(err);
    }
  });

  server.listen(0, function() {
    var port = server.address().port;

    server.close();

    if (!calledFn) {
      calledFn = true;

      if (!port) {
        reject(new Error('Unable to get the server\'s given port'));
      } else {
        resolve(port);
      }
    }
  });
})