
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {
          name: 'ginger snaps',
          url: '../images/ginger_snap.jpg',
          author_id:1
          },
        {
          name: 'gaucamole',
          url: '../images/gaucamole.jpeg',
          author_id:3
          },
        {
          name: 'deviled eggs',
          url: '../images/deviled_eggs.jpeg',
          author_id:1
          }
        ]);
    });
};
