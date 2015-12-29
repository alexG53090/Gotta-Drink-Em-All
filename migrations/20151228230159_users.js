
exports.up = function(knex, Promise) {
  knex.schema.createTable('users', function(table){
    table.increments();
    table.string('username');
    table.string('password');
  })
};

exports.down = function(knex, Promise) {
  knex.schem.dropTable('users');
};
