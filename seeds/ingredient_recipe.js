
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient_recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_recipe').insert([
        {
        quantity:7,
        unit:'whole',
        recipe_id:3,
        ingredient_id:1
        },
        {
        quantity:3,
        unit:'tbsp',
        recipe_id:3,
        ingredient_id:2
        },
        {
        quantity:1,
        unit:'tsp',
        recipe_id:3,
        ingredient_id:3
        },
        {
        quantity:0.125,
        unit:'tsp',
        recipe_id:3,
        ingredient_id:4
        },
        {
        quantity:6,
        unit:'cup',
        recipe_id:3,
        ingredient_id:5
        },
        {
        quantity:2,
        unit:'whole',
        recipe_id:3,
        ingredient_id:6
        },
        {
        quantity:3,
        unit:'whole',
        recipe_id:2,
        ingredient_id:7
      }
      ]);
    });
};
