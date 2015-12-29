var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

var Users = function () {
  return knex('users');
}





module.exports = router;
