var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var bcrypt = require('bcrypt');
require('dotenv').load();
var port = 8000;

var knex = require("knex")({
  client: "pg",
  connection: 'postgres://localhost/beer',
  });

var Beer = function () {
  return knex('beer');
}

// put in some routes --> look at CJ's examples
var auth = require('./routes/auth');
var users = require('./routes/users');

app.use(express.static('./views'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', function(req, res, next){
  res.redirect('/index.html')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(port, function(){
  console.log('Sup, dawg? You are now locked into port: ', port);
})
