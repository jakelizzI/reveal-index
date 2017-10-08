var express = require('express')
    fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir('./md/', function(err, files){
    if(err) throw err;
    res.render('index', { title: 'Slides', fileList: files});
  });
});

module.exports = router;
