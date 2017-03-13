exports.up = function(knex) {
  return knex.schema.createTable('recipe', function(table){
    table.increments();
    table.string('name');
    table.string('url');
    table.integer('user_id').notNullable().references('id').inTable('user')
    .onDelete('cascade');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('recipe');
};
