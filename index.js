var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requesthandler");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/up"] = requestHandlers.up;

server.start(router.route, handle);
