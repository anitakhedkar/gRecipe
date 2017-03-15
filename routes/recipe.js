var express = require('express');
var app = express();
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res){
    knex('recipe')
    .innerJoin('author', 'recipe.author_id', '=', 'author.id')
    .innerJoin('review', 'review.recipe_id', '=', 'recipe.id')
    .select('recipe.id as recipe_id','author.name as author','author.id as author_id', 'recipe.url as image','recipe.name as recipe')
    .groupBy('recipe.id','author.id','recipe.name','recipe.url','author.name')
    .avg('review.rating as rating')
    .orderBy('rating', 'desc')
    .then(function(result){
    res.send(result);
    })
    .catch(function(error) {
      console.log(error);
    })
});


router.get('/:id', function(req, res){
  knex('recipe')
    .where('id', req.params.id).first()
    .then(id => {
    res.send(id)
  })
  .catch(function(error) {
    console.log(error);
  })
})

router.delete('/:id', (req,res) =>{
  knex('recipe').where('id', req.params.id).del()
  .then(result => {
    knex('step').where('recipe_id', req.params.id).del()
    .then(result => {
      knex('review').where('recipe_id', req.params.id).del()
      .then(result => {
        knex('ingredient_recipe').where('recipe_id', req.params.id).del()
        .then(id => {
          res.send("successfully deleted recipe:"+ id)
        })
        .catch(err => {
          console.log(err);
        })
      })
    })
  })
})





module.exports = router
