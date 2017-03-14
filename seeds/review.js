
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('review').del()
    .then(function () {
      // Inserts seed entries
      return knex('review').insert([
        {
          rating:3,
          body: 'Classic recipe!! Love it!',
          user_id:1,
          recipe_id:3
          },
        {
          rating:2,
          body: 'Was a bit bland..could have used some more spice..but overall, not bad.',
          user_id:1,
          recipe_id:3
          },
        {
          rating:4,
          body: 'These deviled eggs are definitely a party hit!',
          user_id:2,
          recipe_id:3
        },
        {
          rating:4,
          body: 'This is the best gaucamole recipe I have seen. Very easy to make and delicious.',
          user_id:3,
          recipe_id:2
        }

      ]);
    });
};
