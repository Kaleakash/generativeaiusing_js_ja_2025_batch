var http = require('http');


http.createServer(function (req, res) {

//res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World\n');



}).listen(9090);

console.log('Server running at http://localhost:9090/');

// http://localhost:1337/  // in browser
