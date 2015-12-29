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
// auth
// users

app.use(express.static('./views'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', function(req, res, next){
  res.redirect('/index.html')
})

app.listen(port, function(){
  console.log('Sup, dawg? You are now locked into port: ', port);
})
