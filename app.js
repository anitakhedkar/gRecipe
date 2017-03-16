const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const bodyParser = require('body-parser')
const recipe = require('./routes/recipe')
const review = require('./routes/review')

var cors = require('cors')
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/recipe', recipe)
app.use('/review', review)

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`)
})
