var express = require('express');
var app = express();
var router = express.Router();
var knex = require('../db/knex');


router.get('/', (req, res) => {
  knex('ingredient_recipe')
  .then(result => {
    res.send(result)
  })
})

router.post('/', (req, res) => {
  knex('ingredient_recipe').insert({
    ingredient_id: req.body.ingredient_id,
    recipe_id: req.body.recipe_id,
    quantity:req.body.quantity,
    unit:req.body.unit
    }, ['ingredient_id', 'recipe_id', 'quantity', 'unit'])
    .then(result => {
      res.json(result)
    });
})

router.put('/:id', function(req, res){
  knex('ingredient_recipe').where('id', req.params.id).update({
    ingredient_id:req.body.ingredient_id,
    recipe_id:req.body.recipe_id,
    unit:req.body.unit,
    quantiy:req.body.quantity
  })
  .then(id => {
    res.send("successfully updated ingredient_recipe")
  })
})

router.delete('/:id', (req,res) => {
  knex('ingredient_recipe').where('id', req.params.id).del()
  .then(id => {
      res.send("successfully deleted ingredient from the join table:"+ id)
    })
})

module.exports = router
