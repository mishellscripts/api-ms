module.exports = function(req) {
  var ip = req.headers['x-forwarded-for'].split(',')[0];
  var language = req.headers['accept-language'].split(',')[0];
  var os =  req.headers['user-agent'].split('(')[1].split(')')[0];
  return {
    ipaddress: ip,
    language: language,
    software: os
  };
}