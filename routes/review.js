var express = require('express');
var app = express();
var router = express.Router();
var knex = require('../db/knex');

router.get('/', (req,res) => {
  knex('review')
  .then(result => {
    res.send(result)
  })
})

router.get('/:id', (req,res) => {
  knex('review')
  .where('id', req.params.id).first()
  .then(id => {
  res.send(id)
  })
  .catch(function(error) {
    console.log(error);
  })
})

router.put('/:id', function(req, res){
  knex('review').where('id', req.params.id).update({
    rating:req.body.rating,
    body:req.body.body
  })
  .then(id => {
    res.send("successfully updated review:"+ id)
  })
})

router.post('/', (req, res) => {
    knex('review').insert({
            rating: req.body.rating,
            body: req.body.body,
            recipe_id:req.body.recipe_id,
            user_id:req.body.user_id
        }, ['rating', 'body', 'recipe_id', 'user_id'])
        .then(result => {
            res.json(result)
        });
})


router.delete('/:id', (req,res) => {
  knex('review').where('id', req.params.id).del()
  .then(id => {
      res.send("successfully deleted comment:"+ id)
    })
})
