var exec = require("child_process").exec;
function start(response) {
  console.log("Manipulador de petición 'start' fue llamado.");
  var endTime = new Date().getTime() + 1000 * 10;
  (function run() {
          process.nextTick(function() {
              if (new Date().getTime() < endTime) {
                  run();
              } else {
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write("hola start");
                response.end();
              }
          });
      })()
}
function up(response) {
  console.log("Manipulador de petición 'up' fue llamado.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola UP");
  response.end();
}

exports.start = start;
exports.up = up;
