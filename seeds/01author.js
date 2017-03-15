
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('author').del()
    .then(function () {
      // Inserts seed entries
      return knex('author').insert([
        {name: 'Anita', email: 'kh_anita@hotmail.com'},
        {name: 'Anna', email: 'anna@gmail.com'},
        {name: 'Louis', email: 'louis_a@gmail.com'}
      ]);
    });
};
