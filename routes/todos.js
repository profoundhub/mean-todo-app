var express = require('express');
var router = express.Router();

// Get All To-Do's
router.get('/todos', function(req, res, next){
   res.send('OUR TODO\'S API');
});

module.exports = router;
