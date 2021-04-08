const http = require("http");

const server = http.createServer(function(req, res) {
  console.log(`user visited ${req.url}`);
  res.end("Hello World from Node.js server !");
});

console.log("listening on port:3000");
server.listen(3000);