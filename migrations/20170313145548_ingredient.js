exports.up = function(knex) {
  return knex.schema.createTable('ingredient', function(table){
    table.increments();
    table.string('name');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ingredient');
};
