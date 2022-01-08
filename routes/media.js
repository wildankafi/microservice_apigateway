var express = require('express');
var router = express.Router();
var {API_MEDIA} = process.env;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(API_MEDIA);
});

module.exports = router;
