exports.up = function(knex) {
  return knex.schema.createTable('author', function(table){
    table.increments();
    table.string('name');
    table.string('email');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('author');
};
