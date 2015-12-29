exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table){
      table.increments();
      table.string('email');
      table.string('password');
    }),
    knex.schema.createTable('beer', function(table){
      table.increments();
      table.string('name');
      table.string('type');
      table.string('brewery');
      table.integer('rating');
    })
  ])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('users');
  knex.schema.dropTable('beer');
};
