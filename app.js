// node modules
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var knex = require('../db/knex');

// route handlers
var auth = require('./routes/auth');
var users = require('./routes/users');
var beer = require('./routes/beer');

// app, itself
var app = express();

// configs
require('dotenv').load();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(process.env.SECRET));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/auth', auth);
app.use('/users', users);
app.use('/beer', beer);

app.get('/tester', function(req, res){
  res.redirect('bad.html')
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found FUCK YOU');
  err.status = 404;
  next(err);
  // res.redirect('bad.html')
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

app.listen(1337, function(req,res){
  console.log('argh, hacking, matey')
});

module.exports = app;
