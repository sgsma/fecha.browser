const http = require("http");

http.createServer(function (req, res) {
  let fecha = new Date();
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`La fecha y hora actual es: ${fecha.toString()}`);
  res.end();
}).listen(8080);
