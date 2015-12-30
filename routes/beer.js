var express = require('express');
router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var knex = require('../db/knex');

router.post('/addbeer', function(req, res){
  knex('beer').insert({
    name: req.body.name,
    type: req.body.type,
    brewery: req.body.brewery,
    rating: req.body.rating,
  }, "name").then(function(task){
  res.redirect('/index.html');
  });
});

module.exports = router;
