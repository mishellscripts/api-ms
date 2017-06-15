// Imports needed for NodeJS app
var express = require('express');
var http = require('http');
var moment = require('moment');
var path = require('path');

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
  var timeObj = { unix: null, natural: null};
  var dateStr = req.params.string;
  var date = new Date(dateStr);
  
  // Unix format given if string is all digits
  if (/^\d+$/.test(dateStr)) {
    var unixVal = Number.parseInt(dateStr);
     timeObj.unix = unixVal;
     timeObj.natural = moment.unix(unixVal).format("MMMM DD, YYYY");
  }
  // Natural format given
  else if (dateStr.split(" ").length === 3) {
    timeObj.unix = date.getTime()/1000,
    timeObj.natural = dateStr
  }
  res.send(timeObj);
});

app.get('/whoami', function(req, res) {
  var ip = req.headers['x-forwarded-for'].split(',')[0];
  var language = req.headers['accept-language'].split(',')[0];
  var os =  req.headers['user-agent'].split('(')[1].split(')')[0];
  var clientInfo = {
    ipaddress: ip,
    language: language,
    software: os
  };
  res.send(clientInfo);
});

// listen for requests :)
app.listen(3000, function () {
  console.log('Hello');
});

