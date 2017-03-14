exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {name: 'egg'},
        {name: 'mayonnaise'},
        {name: 'garlic'},
        {name: 'salt'},
        {name: 'lettuce'},
        {name: 'tomato'},
        {name: 'avocado'}
      ]);
    });
};
