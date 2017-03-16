var express = require('express');
var app = express();
var router = express.Router();
var knex = require('../db/knex');

router.get('/', (req, res) => {
  knex('ingredient')
  .then(result => {
    res.send(result)
  })
})

router.post('/', (req, res) => {
    knex('ingredient').insert({
            name:req.body.name
        }, ['name'])
        .then(result => {
            res.json(result)
        });
})

module.exports = router
