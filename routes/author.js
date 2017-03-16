var express = require('express');
var app = express();
var router = express.Router();
var knex = require('../db/knex');

router.get('/', (req, res) => {
  knex('author')
  .then(result => {
    res.send(result)
  })
})

router.get('/:id', function(req, res){
  knex('author')
    .where('id', req.params.id).first()
    .then(id => {
    res.send(id)
  })
  .catch(function(error) {
    console.log(error);
  })
})

router.post('/', (req, res) => {
    knex('author').insert({
            name:req.body.name,
            email:req.body.email
        }, ['name','email'])
        .then(result => {
            res.json(result)
        });
})

module.exports = router
