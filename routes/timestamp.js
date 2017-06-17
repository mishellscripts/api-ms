// Requirements and initialization of router
var express = require('express');
var router = express.Router();
// Requirement for date formatting
var moment = require('moment');

var getTimeObj = function(dateStr) {
  var timeObj = { unix: null, natural: null};
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
  return timeObj;
};

router.get("/", function (req, res) {
  res.sendFile('timestamp.html', {root: 'views'});
});

router.get('/:string', function(req, res) {
  res.send(getTimeObj(req.params.string));
});

module.exports = router;



