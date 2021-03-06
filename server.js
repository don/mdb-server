var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var message = "Hello!";

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

app.get('/', function(req, res){
    console.log('GET /');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // if there's a query parameter, set the message
    if (req.query.message) {
        message = req.query.message;
    }
    res.end(message + '\n');
});

app.post('/', function(req, res){
    console.log('POST /');
    message = req.body.message; // this needs better error handling
    console.log('The client sent', message);
    res.writeHead(202);
    res.end();
});


var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on port', port);
