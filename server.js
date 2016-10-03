var http = require("http");
var url = require("url");

function start(route, handle){
  http.createServer(onRequest).listen(8888);
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    route(handle, pathname, response);
  }
}
exports.start = start;
