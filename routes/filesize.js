// Requirements and initialization of router
var express = require('express');
var router = express.Router();
var multer = require('multer');


router.get('/', function(req, res) {
  res.sendFile('filesize.html', {root: 'views'});
});

var upload = multer({ dest: 'uploads/' });
var uploadFile = upload.single('file');

// Show file size once file is uploaded
router.post('/get-file-size', uploadFile, function(req, res) {
  res.send({ size: req.file.size });
});

module.exports = router;