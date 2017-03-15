exports.up = function(knex) {
  return knex.schema.createTable('ingredient_recipe', function(table){
    table.increments();
    table.float('quantity');
    table.string('unit');
    table.integer('ingredient_id').references('id').inTable('ingredient')
    .onDelete('cascade');
    table.integer('recipe_id').notNullable().references('id').inTable('recipe')
    .onDelete('cascade');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ingredient_recipe');
};
