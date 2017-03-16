
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {
          name: 'ginger snaps',
          url: 'http://www.joyofbaking.com/images/newlarge/ginger-snaps-recipe.jpg',
          body:'lovely ginger snaps',
          author_id:1
          },
        {
          name: 'gaucamole',
          url: 'http://www.californiaavocado.com/getattachment/412db3db-b024-40f2-af24-eb660e17435f/Guacamole',
          body:'I love gaucamole',
          author_id:3
          },
        {
          name: 'deviled eggs',
          url: 'http://assets.epicurious.com/photos/578d208a98e0fc8755001470/2:1/w_1260,h_630/deviled-eggs.jpg',
          body:'worlds best deviled eggs!',
          author_id:1
          },
        {
          name: 'corn bread',
          url: 'http://images.media-allrecipes.com/images/52114.jpg',
          body:'This is my grandma\'s corn bread recipe!Enjoy! ',
          author_id:4
          }

        ]);
    });
};
