var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
var pathname = url.parse(req.url).pathname;
console.log("Request for " + pathname + " received.");
console.log(req.method)
console.log(req.headers)
var query = url.parse(req.url, true).query;
console.log(query)
console.log(req.url)
//res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Welcome user ' + query.name + ' to the server');



}).listen(9090);

console.log('Server running at http://localhost:9090/');

// http://localhost:1337/  // in browser
