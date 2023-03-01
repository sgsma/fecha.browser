const http = require("http");
const datetime = require("./date");

http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(datetime.myDateTime().toString());
}).listen(8080);
