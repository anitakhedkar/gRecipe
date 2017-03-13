exports.up = function(knex) {
  return knex.schema.createTable('step', function(table){
    table.increments();
    table.integer('number');
    table.string('description');
    table.integer('recipe_id').notNullable().references('id').inTable('recipe')
    .onDelete('cascade');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('step');
};
