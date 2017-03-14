
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step').del()
    .then(function () {
      // Inserts seed entries
      return knex('step').insert([
        {
          number:1,
          description: 'In a large saucepan place eggs in a single layer. Add enough cold water to cover eggs by 1 inch. Bring to rapid boiling over high heat. Remove from heat, cover. Let stand 15 minutes; drain. Cool. Peel.',
          recipe_id:3
          },
        {
          number:2,
          description: 'Halve hard-cooked eggs lengthwise and place yolks in a small bowl. Set whites aside. Mash yolks with fork and stir in salad dressing, dill weed, garlic, hot pepper sauce, and salt. Stuff egg white halves with yolk mixture. Set aside.',
          recipe_id:3
          },
        {
          number:3 ,
          description: 'On a platter arrange lettuce, tomatoes, sweet pepper, bacon, and green onions. Arrange eggs on greens. Drizzle with Dill Vinaigrette. Makes 6 to 8 servings.',
          recipe_id:3
          }
        ]);
    });
};
