var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:age', function(req, res, next) {
  
  res.locals.age=req.params.age;
  next();
},(req,res)=>{
  res.render('index', { title: 'Express' });
});

module.exports = router;
