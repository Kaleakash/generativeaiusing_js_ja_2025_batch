var express = require('express');   // load the module 
var app = express();                // create an instance of express
// http://localhost:3000/
app.get('/', function(req, res) {    // define a route handler for the default home page
  res.send('Welcome to Express js Application');            // send the response
});

// http://localhost:3000/about_us
app.get('/about_us', function(req, res) {    // define a route handler for the default home page
    res.send('Welcome to Express js Application with aboutus');            // send the response
});

// http://localhost:3000/msg?fname=John
app.get("/msg", function(req, res){
    let name = req.query.fname;
    res.send("Welcome user "+name);
});

// http://localhost:3000/info/Akash
app.get("/info/:name", function(req, res){
    let name = req.params.name;
    res.send("Welcome user "+name);
});

app.listen(3000,()=>console.log("Server running on port number 3000"));                     // start the server on port 3000
