var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var bcrypt = require('bcrypt')
var Users = function() {
  return knex('users');
}












module.exports = router;
