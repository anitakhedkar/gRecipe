
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {
          name: 'ginger snaps',
          url: '../images/ginger_snap.jpg',
          body:'lovely ginger snaps',
          author_id:1
          },
        {
          name: 'gaucamole',
          url: '../images/gaucamole.jpeg',
          body:'I love gaucamole',
          author_id:3
          },
        {
          name: 'deviled eggs',
          url: '../images/deviled_eggs.jpeg',
          body:'worlds best deviled eggs!',
          author_id:1
          },
        {
          name: 'bla bla bla',
          url: '../images/deviled_eggs.jpeg',
          body:'bla bla bla bla!',
          author_id:4
          }

        ]);
    });
};
