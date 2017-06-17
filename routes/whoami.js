// Requirements and initialization of router
var express = require('express');
var router = express.Router();

var getClientInfo = function(req) {
  var ip = req.headers['x-forwarded-for'].split(',')[0];
  var language = req.headers['accept-language'].split(',')[0];
  var os =  req.headers['user-agent'].split('(')[1].split(')')[0];
  return {
    ipaddress: ip,
    language: language,
    software: os
  };
}

router.get('/', function(req, res) {
  res.send(getClientInfo(req));
});

module.exports = router;