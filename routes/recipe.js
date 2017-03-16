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

router.put('/:id', function(req, res){
  console.log(req.body);
  knex('recipe').where('id', req.params.id).update({
    name:req.body.name,
    url:req.body.url,
    body:req.body.body
  })
  .then(id => {
    res.send("successfully updated recipe:"+ id)
  })
})

//CREATE RECIPE//
router.post('/', function(req, res) {
  //if email is already used/
    var authorID;
    console.log(req.body);
    knex('author').where('email', req.body.email).select('id').then(result => {
        authorID = result[0].id
        return knex('recipe').insert({
          author_id: authorID,
          name: req.body.name,
          body: req.body.body,
          url: req.body.url
        }, ['author_id', 'name', 'body', 'url'])
        .then(function(result) {
          res.json(result)
        })
    })
        .catch(result => {
            //create new Author
            knex('author').insert({
                    email: req.body.email,
                    name: req.body.name,
                }, 'id')
                //create recipe
                .then(result => {
                  console.log(result);
                    return knex('recipe').insert({
                            author_id: result[0],
                            name: req.body.name,
                            body: req.body.body,
                            url:req.body.url
                        }, ['author_id', 'name', 'body', 'url'])
                        .then(result => {
                            res.json(result)
                        });
                })
        })
});



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
