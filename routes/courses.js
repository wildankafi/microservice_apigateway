var express = require('express');
var router = express.Router();
var {API_COURSE} = process.env;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(API_COURSE);
});

module.exports = router;
