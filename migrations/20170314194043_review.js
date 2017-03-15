exports.up = function(knex) {
  return knex.schema.createTable('review', function(table){
    table.increments();
    table.integer('rating');
    table.string('body');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('author_id').references('id').inTable('author');
    table.integer('recipe_id').notNullable().references('id').inTable('recipe')
    .onDelete('cascade');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('review');
};
