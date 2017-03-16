var express = require('express');
var app = express();
var router = express.Router();
var knex = require('../db/knex');

router.get('/', (req,res) => {
  knex('step')
  .then(result => {
    res.send(result)
  })
})

router.get('/:id', (req,res) => {
  knex('step')
  .where('id', req.params.id).first()
  .then(id => {
  res.send(id)
  })
  .catch(function(error) {
    console.log(error);
  })
})

router.post('/', (req,res) => {
  knex('step').insert({
    step_number:req.body.step_number,
    description:req.body.description,
    recipe_id:req.body.recipe_id
  },['step_number','description','recipe_id'])
  .then(result => {
      res.json(result)
  });
})

router.put('/:id', (req,res) => {
  knex('step').where('id', req.params.id).update({
    step_number:req.body.step_number,
    description:req.body.description
  })
  .then(id => {
    res.send("successfully updated step:"+ id)
  })
  })


router.delete('/:id', (req,res) => {
  knex('step').where('id', req.params.id).del()
  .then(id => {
      res.send("successfully deleted step:"+ id)
    })
})

module.exports = router
