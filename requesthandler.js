var exec = require("child_process").exec;
function start(response) {
  console.log("Manipulador de petición 'start' fue llamado.");

  var async_function = function(response, callback){
    process.nextTick(function(){
      function sleep(milliSeconds) {
          var startTime = new Date().getTime();
          while (new Date().getTime() < startTime + milliSeconds);
      }
      sleep(10000);
      callback(response);
    });
  };

  async_function(response, function(response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("hola start");
    response.end();
  });
  }

function up(response) {
  console.log("Manipulador de petición 'up' fue llamado.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola UP");
  response.end();
}

exports.start = start;
exports.up = up;
