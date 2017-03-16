const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const bodyParser = require('body-parser')
const recipe = require('./routes/recipe')
const review = require('./routes/review')
const step = require('./routes/step')
const ingredient = require('./routes/ingredient')
const author = require('./routes/author')
const ingredient_recipe = require('./routes/ingredient_recipe')

var cors = require('cors')
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/recipe', recipe)
app.use('/review', review)
app.use('/step', step)
app.use('/ingredient', ingredient)
app.use('/ingredient_recipe', ingredient_recipe)
app.use('/author', author)


app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`)
})
