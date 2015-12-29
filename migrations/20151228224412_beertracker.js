
exports.up = function(knex, Promise) {
  knex.schema.createTable('beer', function(table){
    table.increments();
    table.string('beername');
    table.string('beertype');
    table.string('brewery');
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('beer')
};
