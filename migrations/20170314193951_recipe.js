exports.up = function(knex) {
  return knex.schema.createTable('recipe', function(table){
    table.increments();
    table.string('name');
    table.string('url');
    table.string('body');
    table.integer('author_id').notNullable().references('id').inTable('author')
    .onDelete('cascade');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('recipe');
};
