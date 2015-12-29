exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('beer', function(table){
      table.increments();
      table.string('name');
      table.string('type');
      table.string('brewery');
      table.integer('rating');
    }),
    knex.schema.createTable('users', function(table){
      table.increments();
      table.string('email');
      table.string('password');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('beer'),
    knex.schema.dropTable('users'),
  ])
};
