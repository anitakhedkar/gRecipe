exports.up = function(knex) {
  return knex.schema.createTable('ingredient_recipe', function(table){
    table.float('quantity');
    table.string('unit');
    table.integer('ingredient_id').references('id').inTable('ingredient');
    table.integer('recipe_id').references('id').inTable('recipe')
    .onDelete('cascade');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ingredient_recipe');
};
