var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  res.send('YOU MADE A POST REQUEST FROM inputForm.js');
});

module.exports = router;
