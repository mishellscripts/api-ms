// Imports needed for NodeJS app
var express = require('express');
var http = require('http');
var timestamp = require('./routes/timestamp');
var whoami = require('./routes/whoami')

// Create instance of app
var app = express();
app.set('view engine', 'jade');

app.use(express.static('public'));
var server = http.createServer(app);


app.get("/", function (req, res) {
  res.sendfile('views/index.html', {root: __dirname })
});

app.get("/timestamp", function (req, res) {
  res.sendfile('views/timestamp.html', {root: __dirname })
});

app.get('/timestamp/:string', function(req, res) {
  res.send(timestamp(req.params.string));
});

app.get('/whoami', function(req, res) {
  res.send(whoami(req));
});

// listen for requests :)
app.listen(3000, function () {
  console.log('Hello');
});

