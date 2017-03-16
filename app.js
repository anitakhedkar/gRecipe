const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const bodyParser = require('body-parser')
const recipe = require('./routes/recipe')

app.use(bodyParser.json())
app.use('/recipe', recipe)

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`)
})
