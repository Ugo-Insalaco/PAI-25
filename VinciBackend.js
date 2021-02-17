const express = require('express')

const text = require('./VinciAPI/text').text
const languageParser = require('./VinciAPI/text').languageParser

const cors = require('cors')

const app = express()

app.use(cors())

app.use('/',languageParser)

text(app)

app.listen(3000)