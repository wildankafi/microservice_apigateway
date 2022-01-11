var express = require('express');
var router = express.Router();
var {API_ORDER} = process.env;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(API_ORDER);
});

module.exports = router;
