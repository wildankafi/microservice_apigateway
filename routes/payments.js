var express = require('express');
var router = express.Router();
var {API_PAYMENT} = process.env;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(API_PAYMENT);
});

module.exports = router;
