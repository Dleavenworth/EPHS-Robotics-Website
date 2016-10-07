var express = require('express');
var router = express.Router();
var app = express();
//Get About Page
router.get('/', function(req, res, next) {
	res.render('about');
});

module.exports = router;
