const http = require("http");

const routes2 = require('./routes2.js');

const server = http.createServer(routes2);

server.listen(3000);