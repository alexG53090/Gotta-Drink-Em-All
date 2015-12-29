exports.up = function(knex, Promise) {
  return knex.schema.createTable('beer', function(table){
    table.increments();
    table.string('name');
    table.string('type');
    table.string('brewery');
    table.integer('rating');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('beer');
};
