exports.up = function(knex) {
  return knex.schema.createTable('review', function(table){
    table.increments();
    table.integer('rating');
    table.string('body');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('user_id').references('id').inTable('user');
    table.integer('recipe_id').notNullable().references('id').inTable('recipe')
    .onDelete('cascade');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('review');
};
