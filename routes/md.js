var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:mdFileName', function(req, res, next) {

  console.log("hear is " + req.params.mdFileName);
  res.render('md-content', { title: req.params.mdFileName});
});

module.exports = router;
