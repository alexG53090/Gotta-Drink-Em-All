var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var bcrypt = require('bcrypt');
var cors = require('cors');

var auth = require('./routes/auth');
var users = require('./routes/users');

app.get('/', function(req, res, next){
  res.send('hello')
})

app.listen(3200, function(){
  console.log('you are locked into 3200, for some reason');
});
