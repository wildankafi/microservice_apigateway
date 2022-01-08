var express = require('express');
var router = express.Router();
var {API_USER} = process.env;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(API_USER);
});

module.exports = router;
